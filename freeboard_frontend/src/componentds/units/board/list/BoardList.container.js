import BoardListUI from "./BoardList.persenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS, FETCH_BOARDS_BEST } from "./BoardList.queries";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);
  const { data: bestdata } = useQuery(FETCH_BOARDS_BEST);

  const router = useRouter();
  const CreatePageBtn = () => {
    router.push("/boards/new");
  };

  function select(event) {
    router.push(`/boards/${event.target.id}`);
  }

  function selectBest(event) {
    // alert(event.target.id);
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      bestdata={bestdata}
      select={select}
      selectBest={selectBest}
      CreatePageBtn={CreatePageBtn}
    />
  );
}
