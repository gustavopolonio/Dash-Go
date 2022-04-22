import { Flex, FormControl, FormLabel, Input, Stack, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex 
      w='100vw' 
      h='100vh' 
      align='center' 
      justify='center'
    >
      <Flex 
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        borderRadius={8}
        p='8'
        flexDir='column'
      >
        <Stack spacing='4'>
          <FormControl>
            <FormLabel htmlFor='email'>E-mail</FormLabel>
            <Input 
              type='email' 
              id='email' 
              name='email' 
              size='lg' 
              focusBorderColor='pink.500'
              bg='gray.900'
              variant='filled'
              autoComplete='off'
              _hover={{
                bg: 'gray.900'
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor='password'>Senha</FormLabel>
            <Input 
              type='password' 
              id='password' 
              name='password' 
              size='lg' 
              focusBorderColor='pink.500'
              bg='gray.900'
              variant='filled'
              _hover={{
                bg: 'gray.900'
              }}
            />
          </FormControl>
        </Stack>

        <Button 
          type='submit' 
          mt='6' 
          colorScheme='pink'
          size='lg'
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
