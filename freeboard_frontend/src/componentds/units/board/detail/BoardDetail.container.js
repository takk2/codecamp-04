import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD } from "./BoardDetail.queries";

export default function BoardDetails() {
  const router = useRouter();
  // console.log(router.query.myID);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [Like] = useMutation(LIKE_BOARD);

  const ListPageBtn = () => {
    router.push("/boards");
  };

  const Edit = () => {
    router.push(`/boards/${router.query.boardID}/edit`);
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardID },
  });

  async function Delete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.boardID } });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  }

  async function LikeBtn() {
    try {
      await Like({ variables: { boardId: router.query.boardID } });
      alert("좋아요를 보냈습니다");
    } catch (error) {
      alert(error.message);
    }
  }
  console.log(data);

  return (
    <>
      <BoardDetailUI
        data={data}
        ListPageBtn={ListPageBtn}
        Edit={Edit}
        Delete={Delete}
        LikeBtn={LikeBtn}
      />
    </>
  );
}
