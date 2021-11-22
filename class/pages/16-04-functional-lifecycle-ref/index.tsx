import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyLifecyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  // componentDidMount와 동일함.
  useEffect(() => {
    console.log("마운트됨!!");
    inputRef.current?.focus();

    //will Unmount와 동일
    return () => {
      console.log("잘가요~");
    };
  }, []);

  // componentDidUpdate와 비슷함.
  useEffect(() => {
    console.log("수정됨!!");
  });

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }

  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>페이지 이동하기</button>
    </>
  );
}
