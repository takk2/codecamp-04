import { useMutation, useQuery } from "@apollo/client";
import router, { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IMutation,
  IMutationToggleUseditemPickArgs,
} from "../../../../commons/types/generated/types";
import ProductListPageUI from "./ProductList.presenter";
import { FETCH_USED_ITEMS, TOGGLE_USED_ITEM_PICK } from "./ProductList.query";
import { Modal } from "antd";

export default function ProductList() {
  const router = useRouter();
  const { data: fetchUseditems, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { isSoldout: false },
  });

  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USED_ITEM_PICK);

  const onLoad = () => {
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

  const onClickPickedUseditem = async (event) => {
    const useditemId = event.target.id;
    console.log(useditemId);
    const result = await toggleUseditemPick({
      variables: { useditemId },
      refetchQueries: [
        {
          query: FETCH_USED_ITEMS,
          variables: { isSoldout: false },
        },
      ],
    });
    console.log(result);
  };

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

  // 찜하기

  return (
    <ProductListPageUI
      fetchUseditems={fetchUseditems}
      onClickTitle={onClickTitle}
      scroll={scroll}
      onLoad={onLoad}
      onClickPickedUseditem={onClickPickedUseditem}
    />
  );
}
