export default function CounterLetPage(){
  
  function zzz(){
    const bbb = Number(document.getElementById("qqq").innerText) + 1 
    document.getElementById("qqq").innerText = bbb
  }
  //우리가 입력하는것은 문자열 자바스크립트로 사전에 되어있는건 중괄호

  return (
    <>
      <div id="qqq">0</div>
      <button onClick={zzz}>카운트증가!!</button>
    </>
  )



}