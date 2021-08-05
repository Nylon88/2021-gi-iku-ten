import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { memo, VFC } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { useMessage } from "../../../hooks/useMessage";
import { signIn } from "../../../redux/users/Operations";

type IFormInput = {
  email: string;
  password: string;
}

export const LoginInput: VFC = memo(() => {
  const [showPassword, setShowPassword] = useState(false);

  const { formState: { errors }, register, handleSubmit } = useForm<IFormInput>();
  const dispatch = useDispatch();
  const { showMessage } = useMessage();

  const onSubmit = (data: IFormInput) => {
    const { email, password } = data;
    dispatch(signIn({email, password, showMessage}))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <FormControl isRequired>
          <FormLabel>メールアドレス</FormLabel>
          <Input
            placeholder={"メールアドレスを入力してください"}
            size="lg"
            borderRadius="0"
            {...register("email", {
              required: "メールアドレスは必須です。",
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "メールアドレス形式で入力してください。",
              },
            })}
          />
          {
            errors.email && errors.email.type === "required" ?
            <Text fontSize="xs" color="red.500">※メールアドレスは必須です。</Text> : errors.email && errors.email.message === "メールアドレス形式で入力してください。" ?
            <Text fontSize="xs" color="red.500">※メールアドレス形式で入力してください。</Text> :<Box h="1rem"></Box>
          }
        </FormControl>
        <FormControl isRequired>
          <FormLabel>パスワード</FormLabel>
          <InputGroup>
            <Input
              placeholder={"パスワードを入力してください"}
              size="lg"
              type={showPassword ? "text" : "password"}
              borderRadius="0"
              {...register("password", {
                required: true
              })}
            />
            <InputRightElement
              my={1}
              onClick={() => setShowPassword(!showPassword)}
              children={showPassword ? <FaEye /> : <FaEyeSlash />}
            />
          </InputGroup>
          {errors.password ? <Text fontSize="xs" color="red.500">※パスワードは必須です。</Text> : <Box h="1rem"></Box>}
        </FormControl>
      </Stack>
      <Button
        mt="3"
        bg="#406B15"
        color="white"
        type="submit"
        borderRadius="0"
        _hover={{opacity: 0.8}}
        isFullWidth
      >ログイン</Button>
    </form>
  )
})