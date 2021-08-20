import { Box, Flex, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  title: string,
  maxW: number,
  value?: string,
  defaultValue?: string,
  min: number,
  max?: number,
  bool?: boolean,
  setBool?: {
    on: () => void,
    off: () => void,
    toggle: () => void
  },
  onChange?: (valueAsString: string) => void
}

export const SearchCondition: VFC<Props> = memo((props) => {
  const { title, maxW, value, defaultValue, min, max, bool=true, setBool, onChange } = props;
  return (
    <Box mb="4">
      <Heading as="h3" fontSize="md" fontWeight="normal">{title}</Heading>
      {
        bool ? (
          <>
            <Flex>
              <NumberInput
                size="xs"
                maxW={maxW}
                value={value}
                defaultValue={defaultValue}
                min={min}
                max={max}
                onChange={onChange}
              >
                <NumberInputField borderRadius="none" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Text ml="4">~</Text>
            </Flex>
            {
              title === "期間" ? (
                <Text
                  fontSize="xs"
                  mt="2"
                  onClick={setBool?.toggle}
                  _hover={{cursor: "pointer", textDecoration: "underline"}}
                >
                  条件を指定しない
                </Text>
              ) : null
            }
          </>
        ) : (
          <Text
            fontSize="xs"
            mt="2"
            onClick={setBool?.toggle}
            _hover={{cursor: "pointer", textDecoration: "underline"}}
          >
            条件を指定
          </Text>
        )
      }
    </Box>
  )
})