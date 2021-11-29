export default function MapElPage() {
  // 1. 기본방법(화살표 함수)
  //   ["철수", "영희", "훈이"].map((el, index) => {
  //     console.log("el", el);
  //     console.log("index", index);
  //     return `${el}어린이`;
  //   });

  // 2. 기본방법(그냥함수)
  // 콜백함수(함수에 인자로 함수를 넣는것)
  //   ["철수", "영희", "훈이"].forEach(function (el, index) {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  // 3. 매개변수 바꿔보기
  //   ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
  //     console.log("asdf", asdf);
  //     console.log("qwer", qwer);
  //   });

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("index", index);
    console.log("el", el);
  });

  return <></>;
}

// map 으로 돌릴땐 return 을 적용하여 반드시 값을 되돌려 놓아야 된다.
// 그래서 반복만 할땐 forEach를 사용한다.
// ["철수", "영희", "훈이"].forEach((el, index) => {
//     console.log("el", el);
//     console.log("index", index);
//   });
