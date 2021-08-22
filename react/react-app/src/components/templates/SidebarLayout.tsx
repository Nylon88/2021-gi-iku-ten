import { Flex } from "@chakra-ui/react";
import { memo, ReactNode } from "react";
import { VFC } from "react";

import { Sidebar } from "../organisms/layout/Sidebar"


type Props = {
  children: ReactNode;
}

export const SidebarLayout: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Flex>
        <Sidebar />
        {children}
      </Flex>
    </>
  )
})