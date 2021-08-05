import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { Message } from "../redux/users/ActionType";

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback((props: Message) => {
    const {title, status} = props;
    toast({
      title,
      status,
      duration: 3000,
      isClosable: true,
      position: "top"
    })
  }, [toast])
  return { showMessage }
}