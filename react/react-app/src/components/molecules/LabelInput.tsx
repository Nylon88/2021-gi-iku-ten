import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  label: string;
}

export const LabelInput: VFC<Props> = (props) => {
  const { label } = props;
  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Input placeholder={`${label}を入力してください`} size="lg" m="0" borderRadius="0"/>
    </FormControl>
  )
}