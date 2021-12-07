import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../src/commons/types/generated/types";
import { FormValues } from "../../src/components/units/24-06-react-hook-form/Myform.types";
import { useRouter } from "next/router";
import { Modal } from "antd";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

interface FormValue {
  writer: string;
  password: string;
  title: string;
  contents: string;
}

export default function WebEditorReactHoolFormSubmitPage() {
  const router = useRouter();
  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const { handleSubmit, register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  function handleChange(value: string) {
    console.log(value);

    // register로 등록하지 않고 강제로 값을 넣어주는 기능!!!
    // 왜냐면 여기서의 onChange가 우리가 아는 그 친구가 아니라 react-quill에서 만든 props같은 개념이라 그런것.
    setValue("contents", value === "<p><br></p>" ? "" : value);
    //  onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능
    trigger("contents");
  }
  //   if (process.browser) {
  //     console.log("나는 브라우저다!");
  //   } else {
  //     console.log("나는 프론트앤드 서버다");
  //   }

  async function onClickSubmit(data: FormValue) {
    // createBoard 뮤테이션 요청!!
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`27-04-web-editor-detail/${result.data?.createBoard._id}`);
    } catch (error) {
      Modal.error(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      작성자:
      <input type="text" {...register("writer")} />
      <br />
      비밀번호:
      <input type="password" {...register("password")} />
      <br />
      제목:
      <input type="text" {...register("title")} />
      <br />
      내용:
      <ReactQuill onChange={handleChange} />
      <br />
      <button>등록하기</button>
    </form>
  );
}
