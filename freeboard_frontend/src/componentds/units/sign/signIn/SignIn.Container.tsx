import SignInPageUI from "./SignIn.presenter";
import { useMutation } from "@apollo/client";
import { Router, useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../../src/commons/types/generated/types";
import { GlobalContext } from "../../../../../pages/_app";
import { LOGIN_USER } from "./SignIn.query";
import { useForm } from "react-hook-form";
import { schema } from "./SignIn.validations";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { FormValues } from "./SignIn.types";

export default function SignInPage() {
  const [loginUser] = useMutation(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

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
      console.log(result);
      localStorage.setItem(
        "accessToken",
        result.data?.loginUser.accessToken || ""
      );
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
