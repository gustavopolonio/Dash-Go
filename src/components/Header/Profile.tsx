import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {

  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Gustavo Polonio</Text>
        <Text fontSize='small' color='gray.300'>gustavopolonio1@gmail.com</Text>
      </Box>

      <Avatar 
        size='md'
        name='Gustavo Polomio' 
        src='https://avatars.githubusercontent.com/u/69776883?s=400&u=1316260790de910735334abfeefca5e5c0d69295&v=4'
      />          
    </Flex>
  )
}