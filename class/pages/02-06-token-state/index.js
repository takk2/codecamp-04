import { useState } from "react";

export default function TokenPage(){

  const[ token, setToken ] = useState("000000")


    function token1(event){
      token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
      setToken(token)
    }
  return (
    <div>
      <div>{token}</div>
      <button onClick={token1}>인증번호전송</button> 
    </div>

  )

}