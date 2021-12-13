import { useRouter } from "next/router";

type IPage = "/boards" | "/product" | "/myPage";

export function useMoveToPage() {
  const router = useRouter();

  const moveToPage = (page: IPage) => () => {
    router.push(page);
  };

  return moveToPage;
}
