import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWritePage from "../../../../src/componentds/units/market/write/ProductWrite.conatiner";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        address
        lat
        lng
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

function EditItem() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { _id: router.query._id },
  });

  return <ProductWritePage isEdit={true} data={data} />;
}

export default EditItem();
