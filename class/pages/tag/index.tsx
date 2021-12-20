import { useState } from "react";

const TagPage = () => {
  const [hashArr, setHashArr] = useState<string[]>([]);

  const onKeyUp = (event) => {
    if (event.keycode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, `#${event.target.value}`]);
      event.target.value = "";
    }
  };

  const deleteHash = (idx) => () => {
    hashArr.splice(idx, 1);
    setHashArr([...hashArr]);
  };

  return (
    <div>
      <div>
        {hashArr.map((el, idx) => (
          <span key={idx}>{el}</span>
        ))}
      </div>
      <input type="text" onKeyUp={onKeyUp} />
    </div>
  );
};

export default TagPage;
