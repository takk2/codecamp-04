import { gql } from "@apollo/client";

export const CREATE_USED_ITEM = gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      name
      _id
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        _id
        zipcode
        address
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      name
      _id
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        _id
        zipcode
        address
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
