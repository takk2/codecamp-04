import { gql } from "@apollo/client";

export const CREATE_USEDITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      name
      _id
      remarks
      contents
      price
    }
  }
`;

//createUseditem(createUseditemInput: CreateUseditemInput!

export const UPDATE_USEDITEM = gql`
  mutation updateUseditem($updateUseditemInput: UpdateUseditemInput!) {
    updateUseditem(updateUseditem: $updateUseditem) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      useditemAddress
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
