import { useForm } from "react-hook-form";

interface FromValues {
  myEmail: string;
  myPassword: string;
}

export default function ReactHookFormPage() {
  const { handleSubmit, register } = useForm();

  function onClickLogIn(data: FromValues) {
    console.log(data);
    // loginUser API요청하기
  }

  return (
    <form onSubmit={handleSubmit(onClickLogIn)}>
      이메일: <input type="text" {...register("myEmail")} />
      비밀번호: <input type="password" {...register("myPassword")} />
      <button>로그인하기</button>
    </form>
  );
}
