import {useState} from 'react'

export default function SignupStatePage(){

  const [ email, setEmail ] = useState("")
  const [ emailError, setEmailError] = useState("")
  const [ password, setPassword ] = useState("")

  function aaa(event){
    setEmail( event.target.value )  // <input type="text" onChange={} /> 태그 전체를 가져옴
  } 
 

  function bbb(event){
    setPassword(event.target.value)
  }

  function ccc(){
    console.log('email', email)
    console.log('password', password)

    if(email.includes("@")=== false){
       //alert("이메일에 @가 없습니다. 잘못된 이메일이네요.")
       setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요.")
    }


  }  

  return (
    <div>
      이메일입력: <input type="text" onChange={aaa} /><br />
      <div>{emailError}</div>
      비밀번호입력: <input type="password" onChange={bbb} /><br />

      <button onClick={ccc}>회원가입</button>
    </div>
  )

}


// </head>
// <body>
//   <div id="Token">000000</div>
//   <!-- 여기에 아이디를 부여하는것은 000000이 들어갈 부분에 값을 줘야하기에 스크립트에서 저 부분을 사용하려고 id값을 준다. -->
//   <button onclick="getToken()">인증번호 전송</button>
//   <!-- 버튼이 눌리면 getToken 기능을 사용한다. -->
//   <div id="timer">3:00</div>
// </body>
// </html>




// const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
//         // console.log(token) 다큐먼트에서 보여줄거니까 필요없음. 밑에줄로 대체 
//         document.getElementById("Token").innerText = token