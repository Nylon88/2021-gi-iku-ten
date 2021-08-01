import { Box, Flex, Heading, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  title: string,
  maxW: number,
  defaultV: number,
  min: number,
  max?: number
}

export const SearchCondition: VFC<Props> = memo((props) => {
  const { title, maxW, defaultV, min, max } = props;
  return (
    <Box mb="4">
      <Heading as="h3" fontSize="md" fontWeight="normal">{title}</Heading>
      <Flex>
        <NumberInput
          size="xs"
          maxW={maxW}
          defaultValue={defaultV}
          min={min}
          max={max}
        >
          <NumberInputField borderRadius="none" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text ml="4">~</Text>
      </Flex>
    </Box>
  )
})