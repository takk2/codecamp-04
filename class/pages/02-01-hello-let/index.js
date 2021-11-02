export default function HelloLetPage(){
  
  function zzz(){
    document.getElementById("qqq").innerText = "반갑습니다!"
  }
  //우리가 입력하는것은 문자열 자바스크립트로 사전에 되어있는건 중괄호

  return (
    <>
      <div id="qqq">안녕하세요</div>
      <button onClick={zzz}>버튼클릭!!!</button>
    </>
  )



}