import { ChangeEvent } from "react";
import _ from "lodash";
import SearchPage01UI from "./search01.presenter";

export default function SearchPage01(props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }

  return <SearchPage01UI onChangeSearch={onChangeSearch} />;
}
