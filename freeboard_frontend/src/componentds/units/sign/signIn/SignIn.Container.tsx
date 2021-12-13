import SignInPageUI from "./SignIn.presenter";
import { useMutation } from "@apollo/client";
import { Router, useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
  IMutationLoginUserExampleArgs,
} from "../../../../../src/commons/types/generated/types";
import { GlobalContext } from "../../../../../pages/_app";
import { LOGIN_USER } from "./SignIn.query";
import { useForm } from "react-hook-form";
import { schema } from "./SignIn.validations";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormValues } from "./SignIn.types";

export default function SignInPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onClickLogin = async (data: FormValues) => {
    try {
      const result = await loginUser({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      console.log(data);
      console.log("Token", result);

      // localStorage.setItem(
      //   "accessToken",
      //   result.data?.loginUser.accessToken || ""
      // );
      localStorage.setItem("refreshToken", "true");
      setAccessToken?.(result.data?.loginUser.accessToken || "");
      router.push("/sign/success");
    } catch (error) {
      error.message;
    }
  };

  return (
    <SignInPageUI
      onClickLogin={onClickLogin}
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
    />
  );
}
