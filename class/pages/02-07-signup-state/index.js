import {useState} from 'react'

export default function SignupStatePage(){

  const [ email, setEmail ] = useState("")
  const [ emailError, setEmailError] = useState("")
  const [ password, setPassword ] = useState("")
  const [ passwordError, setPasswordError ] = useState("")

  function aaa(event){
    setEmail( event.target.value )  // <input type="text" onChange={} /> 태그 전체를 가져옴
  } 
 
  function bbb(event){
    setPassword(event.target.value)
  }

  function ddd(event){
    setPassword(event.target.value)
  }

  function ccc(){
    console.log('email', email)
    if(email.includes("@")=== false){
       //alert("이메일에 @가 없습니다. 잘못된 이메일이네요.")
       setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요.")
    }
  }  
  function fff(){
    console.log('password', password)
    if(bbb !== ddd){
      setPasswordError("비밀번호와 비밀번호 확인이 일치하지 않습니다.")
    }
  }

  return (
    <div>
      이메일입력: <input type="text" onChange={aaa} /><br />
      <div>{emailError}</div>
      비밀번호입력: <input type="password" onChange={bbb} /><br />
      비밀번호확인: <input type="password" onChange={ddd} /><br />
      <div>{passwordError}</div>
      <button onClick={ccc, fff}>회원가입</button>
    </div>
  )

}

