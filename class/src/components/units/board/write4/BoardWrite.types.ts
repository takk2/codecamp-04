import { ChangeEvent } from "react";


export interface IProps {
  isEdit: boolean
  data?: any
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string
}



interface IProps2 {
  aaa: (event: ChangeEvent<HTMLInputElement>) => void
  bbb: (event: ChangeEvent<HTMLInputElement>) => void
  ccc: (event: ChangeEvent<HTMLInputElement>) => void
  zzz: () => void
  qqq: boolean
  ggg: boolean
  xxx: () => void
  data: any
}