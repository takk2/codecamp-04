import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductNewPage from "../../../src/componentds/units/market/new/ProductNew.container";

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

export default function EditItem() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { _id: router.query._id },
  });

  return <ProductNewPage isEdit={true} data={data} />;
}
