import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Stack, Text } from "@chakra-ui/react";
import { push } from "connected-react-router";
import { memo, useState, VFC } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";

import auth from "../../../firebase";
import { useMessage } from "../../../hooks/useMessage";
import { signUpAction } from "../../../redux/users/Action";

type IFormInput = {
  userName: string;
  email: string;
  password: string;
  passwordConf: string;
}

export const RegistrationInput: VFC = memo(() => {
  const [showPass, setShowPass] = useState(false)
  const [showPassConf, setShowPassConf] = useState(false)

  const { formState: { errors }, register, handleSubmit } = useForm<IFormInput>();
  const { showMessage } = useMessage();
  const dispatch = useDispatch();

  const onSubmit = async (data: IFormInput) => {
    if (data.password === data.passwordConf) {
      try {
        // Firebaseにユーザーを作成する
        await auth.createUserWithEmailAndPassword(data.email, data.password);
        // sendSignInLinkToEmail() を利用すると、メールアドレス認証のためのメールを送信することも可能
        dispatch(signUpAction({id: 1, username: data.userName, email: data.email, password: data.password}));
        dispatch(push("/"));
        showMessage({title: "正常に登録できました。", status: "success"});

      } catch (error) {
        // ユーザー作成が失敗するとその内容をアラート表示
        alert(error.message);
      }
    } else {
      showMessage({title: "パスワードとパスワード（確認用）が異なります。", status: "error"});
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <FormControl isRequired>
          <FormLabel>ユーザー名</FormLabel>
          <Input
            placeholder={"ユーザー名を入力してください"}
            size="lg"
            borderRadius="0"
            {...register("userName", {
              required: true
            })}
          />
          {errors.userName ? <Text fontSize="xs" color="red.500">※ユーザー名は必須です。</Text> : <Box h="1rem"></Box>}
        </FormControl>
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
              type={showPass ? "text" : "password"}
              borderRadius="0"
              {...register("password", {
                required: true
              })}
            />
            <InputRightElement
              my={1}
              onClick={() => setShowPass(!showPass)}
              children={showPass ? <FaEye /> : <FaEyeSlash />}
            />
          </InputGroup>
          {errors.password ? <Text fontSize="xs" color="red.500">※パスワードは必須です。</Text> : <Box h="1rem"></Box>}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>パスワード（確認用）</FormLabel>
          <InputGroup>
            <Input
              placeholder={"パスワード（確認用）を入力してください"}
              size="lg"
              type={showPassConf ? "text" : "password"}
              borderRadius="0"
              {...register("passwordConf", {
                required: true
              })}
            />
            <InputRightElement
              my={1}
              onClick={() => setShowPassConf(!showPassConf)}
              children={showPassConf ? <FaEye /> : <FaEyeSlash />}
            />
          </InputGroup>
          {errors.passwordConf ? <Text fontSize="xs" color="red.500">※パスワード（確認用）は必須です。</Text> : <Box h="1rem"></Box>}
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
      >登録</Button>
    </form>
  )
})