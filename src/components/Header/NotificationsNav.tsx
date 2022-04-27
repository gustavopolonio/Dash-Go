import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserLine } from "react-icons/ri";

export function NotificationsNav() {

  return (
    <HStack 
      spacing={['6', '8']}
      color='gray.300' 
      mx={['6', '8']} 
      pr={['6', '8']} 
      py='1' 
      borderRightWidth={1} 
      borderColor='gray.700' 
    >
      <Icon as={RiNotificationLine} fontSize='20' />
      <Icon as={RiUserLine} fontSize='20' />
    </HStack>
  )
}