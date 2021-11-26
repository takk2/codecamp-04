export default function MatchingUI(props) {
  return (
    <>
      <div>출석인사</div>
      작성자:
      <input
        type="text"
        onChange={props.onChangeInput}
        name="writer"
        placeholder="이름을 적어주세요!"
      />
      비밀번호:
      <input
        type="password"
        onChange={props.onChangeInput}
        name="password"
        placeholder="비밀번호를 적어주세요!"
      />
      내용:
      <input
        type="text"
        onChange={props.onChangeInput}
        name="contents"
        placeholder="한줄로 인사를 남겨주세요!"
      />
      <button onClick={props.onClickSubmit}>등록하기</button>
      <button onClick={props.onClickFetch}>조회하기</button>
      {props.data.map((e) => (
        <div>
          <div>{e.writer}</div>
          <div>{e.contents}</div>
        </div>
      ))}
    </>
  );
}
