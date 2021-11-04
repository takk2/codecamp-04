import { useMutation , gql} from "@apollo/client"
import { useState } from "react"

const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput:CreateProductInput!) {
      createProduct(seller: $seller, createProductInput: $createProductInput){
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationProductPage(){
  const [mySeller,setMyseller] = useState("")
  const [myName, setMyname] = useState("")
  const [myDetail, setMydetail] = useState("")
  const [myPrice, setMyprice] = useState("")

  const [ createProduct ] = useMutation( CREATE_PRODUCT )

  function onChangeMySeller(event){
    setMyseller(event.target.value)
  }

  function onChangeMyName(event){
    setMyname(event.target.value)
  }

  function onChangeMyDetail(event){
    setMydetail(event.target.value)
  }

  function onChangeMyPrice(event){
    setMyprice(event.target.value)
  }


  async function zzz(){
    const result = await createProduct({
      variables: {
        seller: mySeller, 
          createProductInput: {
          name: myName,
          detail: myDetail,
          price: Number(myPrice)
        }
      }
    })
    console.log(result)
    }
  
  return (
    <>
      판매자: <input type="text" onChange={onChangeMySeller} /><br/>
      상품명: <input type="text" onChange={onChangeMyName}/><br/> 
      상품내용: <input type="text" onChange={onChangeMyDetail}/><br/>
      상품가격:<input type="text" onChange={onChangeMyPrice}/><br/>
      <button onClick={zzz}>상품 등록하기!!</button>
    </>
  )




}