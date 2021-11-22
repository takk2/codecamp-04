import BoardListUI from "./BoardList.persenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_BEST,
  FETCH_BOARDS_COUNT,
} from "./BoardList.queries";
import { MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const { data: bestdata } = useQuery(FETCH_BOARDS_BEST);
  const router = useRouter();
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const CreatePageBtn = () => {
    router.push("/boards/new");
  };

  function select(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  }

  function selectBest(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element)
      router.push(`/boards/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      bestdata={bestdata}
      select={select}
      selectBest={selectBest}
      CreatePageBtn={CreatePageBtn}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      startPage={startPage}
      setStartPage={setStartPage}
    />
  );
}
