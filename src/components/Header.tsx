import { Flex, Text, Input, Icon, Box, HStack, Avatar } from '@chakra-ui/react'

import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri'

export function Header() {

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' width='64'>
        dashgo
        <Text as='span' color='pink.500' ml='1'>.</Text>
      </Text>

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

      <Flex
        ml='auto'
        align='center'
      >
        <HStack 
          spacing='8' 
          color='gray.300' 
          mx='8' 
          pr='8' 
          py='1' 
          borderRightWidth={1} 
          borderColor='gray.700' 
        >
          <Icon as={RiNotificationLine} fontSize='20' />
          <Icon as={RiUserLine} fontSize='20' />
        </HStack>

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
      </Flex>
    </Flex>
  )
}