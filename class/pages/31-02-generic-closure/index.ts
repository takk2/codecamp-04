// 클로저(함수선언식) - 기초

function firstFunc(arg1: String) {
  return function secondFunc(arg2: Number): [String, Number] {
    return [arg1, arg2];
  };
}
const resultClosure1 = firstFunc("영희")(20);

//
//
// 클로저(함수선언식) - 기초(any)

function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}
const resultClosure2 = firstFunc2("영희")(20);

//
//
// 클로저(함수선언식) - 기초(generic)

function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const resultClosure3 = firstFunc3("영희")(20);

//
//
// 클로저(화살표함수)
// prettier-ignore
const firstArrow = <T>(arg1: T) => <U>(arg2: U): [T,U]=> {
  return [arg1, arg2];
};
const resultClosure4 = firstArrow("영희")(20);

//
//
// 클로저(화살표함수) c=component, p=props
// prettier-ignore
const firstArrow2 = <C, P extends { aaa: string }>(Component: C) => (props: P): => {
        return [Component, props];
  };
const resultClosure5 = firstArrow2("Presenter")({ aaa: "철수" });
