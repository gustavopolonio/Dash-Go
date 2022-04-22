import { Flex, Stack, Button } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function SignIn() {
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
          <Input name='email' label='E-mail' type='email' autoComplete='off' />
          <Input name='password' label='Senha' type='password' />
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
