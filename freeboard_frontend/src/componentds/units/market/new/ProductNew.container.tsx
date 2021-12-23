import ProductNewPageUI from "./ProductNew.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./ProductNew.query";
import {
  IMutation,
  IMutationCreateUseditemArgs,
  IMutationUpdateUseditemArgs,
  IUpdateUseditemInput,
} from "../../../../commons/types/generated/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./ProductNew.validations";
import { FormValues, IProductWriteProps } from "./ProductNew.types";
import { useEffect, useState } from "react";
import router from "next/router";

export default function ProductNewPage(props: IProductWriteProps) {
  const [address, setPropsAddress] = useState("");
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createUseditem] = useMutation<
    Pick<IMutation, "createUseditem">,
    IMutationCreateUseditemArgs
  >(CREATE_USED_ITEM);

  const [updateUseditem] = useMutation<
    Pick<IMutation, "updateUseditem">,
    IMutationUpdateUseditemArgs
  >(UPDATE_USED_ITEM);
  // ===== useForm =====
  const { handleSubmit, register, setValue, getValues, trigger, formState } =
    useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
    });

  const handleChange = (value: String) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  };
  // ===== 파일 업로드 =====
  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchUseditem.images?.length) {
      setFileUrls([...props.data?.fetchUseditem.images]);
    }
  }, [props.data]);
  // ===== 등록 =====
  const onClickSubmit = async (data: FormValues) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            price: data.price,
            contents: data.contents,
            tags: data.tags,
            images: fileUrls,
            useditemAddress: {
              address,
            },
          },
        },
      });
      alert("상품등록에 성공하였습니다");
      router.push(`/market/${result.data?.createUseditem._id}`);
    } catch (error) {
      console.log("에러다 에러!!!");
    }
  };

  // ===== 수정 =====
  const onClickUpdate = async (data: FormValues) => {
    const updateUseditemInput: IUpdateUseditemInput = {
      name: data.name,
      remarks: data.remarks,
      price: data.price,
      contents: data.contents,
      images: data.images,
      useditemAddress: {
        address,
      },
    };

    try {
      const result = await updateUseditem({
        variables: {
          useditemId: props.data?.fetchUseditem._id,
          updateUseditemInput,
        },
      });
      alert("상품수정을 성공하였습니다");
      router.push(`/market/${result.data?.updateUseditem._id}`);
    } catch (error) {
      console.log("에러다 에러!!!");
    }
  };

  return (
    <ProductNewPageUI
      // ===== 주소 =====
      setPropsAddress={setPropsAddress}
      // ===== 폼 =====
      handleSubmit={handleSubmit}
      register={register}
      setValue={setValue}
      getValues={getValues}
      formState={formState}
      handleChange={handleChange}
      // ===== 사진 =====
      fileUrls={fileUrls}
      onChangeFileUrls={onChangeFileUrls}
      // ===== 등록/수정 분기 =====
      isEdit={props.isEdit}
      data={props.data}
      // ===== 버튼 =====
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
    />
  );
}
