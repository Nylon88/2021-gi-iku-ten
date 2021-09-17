import { Box, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { SearchCondition } from "../../molecules/searchCondition";

type Props = {
  period: string,
  thisYear: number,
  periodBool: boolean,
  setPeriodBool: {
    on: () => void,
    off: () => void,
    toggle: () => void
  },
  handlePeriod: (valueAsString: string) => void
}

export const Condition: VFC<Props> = memo((props) => {
  const { period, thisYear, periodBool, setPeriodBool, handlePeriod } = props;
  return (
    <Box w="12%" h="100%">
      <Box ml="5" my="10">
        <Text fontSize="md">検索条件</Text>
        <SearchCondition
          title="期間"
          maxW={16}
          value={period}
          min={1900}
          max={thisYear}
          bool={periodBool}
          setBool={setPeriodBool}
          onChange={handlePeriod}
        />
        <SearchCondition
          title="引用数"
          maxW={14}
          defaultValue={"0"}
          min={0}
        />
      </Box>
    </Box>
  )
})