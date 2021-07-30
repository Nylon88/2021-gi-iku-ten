import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent, VFC } from "react";

type Props = {
  label: string;
  state: string;
  setState: (state: string) => void;
}

export const LabelInput: VFC<Props> = (props) => {
  const { label, state, setState } = props;
  const handleState = (e: ChangeEvent<HTMLInputElement>) => setState(e.target.value);

  return (
    <FormControl isRequired>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={`${label}を入力してください`}
        size="lg"
        m="0"
        borderRadius="0"
        onChange={handleState}
        value={state}
      />
    </FormControl>
  )
}