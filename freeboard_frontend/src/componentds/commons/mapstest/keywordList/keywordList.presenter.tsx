const KeywordListPageUI = (props: any) => {
  return (
    <>
      <div>이 페이지는 키워드 검색 리스트 페이지 입니다.</div>

      <div>
        {props.myKeyword &&
          props.myKeyword.map((el: any) => (
            <div key={el.id}>
              <div>{el.place_name}</div>
              <div>{el.address_name}</div>
              <div>{el.phone}</div>
              <a href={el.place_url}>{el.place_url}</a>
            </div>
          ))}
      </div>
    </>
  );
};

export default KeywordListPageUI;
