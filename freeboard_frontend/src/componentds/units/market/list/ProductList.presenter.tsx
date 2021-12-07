import { getDate } from "../../../../commons/libraries/utils";

export default function ProductListPageUI(props) {
  return (
    <>
      {props.data?.fetchUseditems.map((el) => (
        <div key={el._id}>
          <span>{el.name}</span>
          <span>{el.remarks}</span>
          <span>{el.contents}</span>
          <span>{el.price}</span>
          <span>{getDate(el.createAt)}</span>
        </div>
      ))}
    </>
  );
}
