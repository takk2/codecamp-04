import styled from '@emotion/styled'

  export const MyInput = styled.input`
  
  `
  interface IProps {
    isEdit: boolean
    data? : any
  }
  export const MyButton = styled.button`
  
    background-color: ${(props:IProps) => props.MyQqq1 === true ? "yellow" : "gray"};
    font-size: 30px;
  `
