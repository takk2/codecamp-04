export default function TypescriptPage(){

  let aaa = "안녕하세요"
  aaa = 3

  //문자타입
  let bbb: string;
  bbb = "반갑습니다"
  bbb = 123
  
  //숫자타입
  let ccc: number = 5
  ccc = "asdf"

  //any script
  let ccc: any = 5

  // 배열타입
  let ddd: number[] = [1, 2, 3, 4, 5, 6]  // 숫자타입
  let eee: string[] = ["a", "b", "c", "d"]  // 문자타입
  let fff: number[] | string[] = [1, 2, 3, 4, 5, 6]   //유니온 타입이라고 부른다.  
  fff = ["a", "b", "c", "d"]

  let ggg: (number | string)[] = [1, "b", 2, "c"]

  // 객체타입
  interface IProfile {
    name: string
    age: number | string
    school: string
  } // 관례상 Interface의 I와 Profile를 더해 IProfile이라고 정한다
  
  let profile :IProfile = {
    name:"철수",
    age: 8,
    shcoool: "다람쥐 초등학교"
  }
  profile.age = "8살"
  profile.school = 3

  return <div>타입스크립트 연습</div>
}