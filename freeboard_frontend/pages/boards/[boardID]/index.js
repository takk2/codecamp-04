import BoardDetails from "../../../src/componentds/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/componentds/units/boardComment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/componentds/units/boardComment/write/BoardCommentWrite.container";

export default function BoardDetailUI() {
  return (
    <>
      <BoardDetails />
      <BoardCommentWrite />
      <BoardCommentList />
    </>
  );
}
