import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailPageUI from "./ProductDetail.presenter";
import { FETCH_USED_ITEM } from "./ProductDetail.query";

export default function ProductDeatailPages() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });

  const onClickListBtn = () => {
    router.push("/market");
  };

  const onClickEditBtn = () => {
    router.push(`/market/${router.query.productId}/edit`);
  };

  return (
    <ProductDetailPageUI
      data={data}
      onClickListBtn={onClickListBtn}
      onClickEditBtn={onClickEditBtn}
    />
  );
}
