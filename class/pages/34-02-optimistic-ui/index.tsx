import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUiPage() {
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "61b81544717be5002baa6f0a" },
    }
  );

  function onClickOptimisticUi() {
    // 여기서 좋아요 증가시키는 mutation
    likeBoard({
      variables: { boardId: "61b81544717be5002baa6f0a" },
      //   refetchQueries: [
      //     {
      //       query: "FETCH_BOARD",
      //       variables: { boardId: "61b81544717be5002baa6f0a" },
      //     },
      //   ],
      // 이거는 리패치 될때까지 기다려야됨
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61b81544717be5002baa6f0a" },
          data: {
            fetchBoard: {
              _id: "61b81544717be5002baa6f0a",
              __typename: "Board",
              likeCount: data?.likeBoard,
            },
          },
        });
      },
    });
  }

  return (
    <>
      <div>좋아요 갯수: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUi}>좋아요 올리기!!!</button>
    </>
  );
}
