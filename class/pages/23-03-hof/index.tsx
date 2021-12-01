export default function HofPage() {
  const onClcikChild = (index) => (event) => {
    console.log(event.target.id);
  };

  //     function onClcikChild(event) {
  //     console.log(event.target.id);
  //   }

  return (
    <>
      <h1>HOF 연습페이지 입니다!!</h1>
      <div>
        {["철수", "영희", "훈이"].map((el) => (
          <div key={el} onClick={onClcikChild(index)}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}
