import { useMutation , gql} from "@apollo/client"
import { useRouter } from "next/router"
import { useState } from "react"
import { IMutation, IMutationCreateProductArgs } from "../../src/commons/types/generated/types"

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

  const [ createProduct ] = useMutation<Pick<IMutation, 'createProduct'> ,IMutationCreateProductArgs>( CREATE_PRODUCT )

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

  const router = useRouter()

  async function zzz(){

    try {

      const result = await createProduct({
        variables: {
          seller: "철수",
          createProductInput: {

          }
        }
      })
      console.log(result)
      result.data.createProduct._id
  
      // router.push('/05-08-dynamic-product-read/' + result.data.createProduct._id) // 가장기초 표기법
      router.push(`/05-08-dynamic-product-read/${result.data.createProduct._id}`)
      // 템플릿 리터럴방식으로 표기한것 

    } catch(error) {
        console.log(error.message)

    }


    
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