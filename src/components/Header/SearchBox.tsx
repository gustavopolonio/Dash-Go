import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

  return (
    <Flex
      as='label'
      flex='1'
      py='4'
      px='8'
      ml='6'
      maxWidth={400}
      borderRadius='full'
      bg='gray.800'
      color='gray.200'
      position='relative'
      alignSelf='center'
    >
      <Input
        variant='unstyled'
        px='4'
        mr='4'
        color='gray.50' 
        placeholder='Buscar' 
        _placeholder={{ color: 'gray.400' }}
      />
      <Icon as={RiSearchLine} fontSize='20' />
    </Flex>
  )
}