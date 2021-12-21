import { useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import {
  IBoard,
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import ProductListPageUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS } from "./ProductList.query";

export default function ProductList() {
  const router = useRouter();
  const { data: fetchUseditems, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { isSoldout: false },
  });

  const onClickTitle = (event) => {
    router.push(`/market/${event.target.id}`);
  };

  const scroll = () => {
    if (!fetchUseditems) return;

    fetchMore({
      variables: {
        page: Math.ceil(fetchUseditems?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <ProductListPageUI
      fetchUseditems={fetchUseditems}
      onClickTitle={onClickTitle}
      scroll={scroll}
    />
  );
}
