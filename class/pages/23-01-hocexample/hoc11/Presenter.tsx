const withAuth = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);




function aaa(component){


  // return function bbb(props){
    // 로그인검증 로직
  //   return "결과물"
  // }
}



const withAuth => (component) => (props) => {

    //로그인 검증 로직!!

    return <Component {...props} />

  }


}