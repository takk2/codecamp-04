export default function SearchPage01UI(props) {
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="검색어를 입력해주세요"
          onChange={props.onChangeSearch}
        />
      </div>
    </>
  );
}
