import { useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ProductListPageUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.query";

export default function ProductList() {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

  return <ProductListPageUI data={data} />;
}
