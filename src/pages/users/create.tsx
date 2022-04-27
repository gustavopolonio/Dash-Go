import { Flex, Box, Heading, SimpleGrid, HStack, VStack, Divider, Button } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'

export default function CreateUser() {

  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' maxWidth={1480} my='6' mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' p='8' bg='gray.800' borderRadius={8}>
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
          
          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='name' label='Nome completo' autoComplete='off' />
              <Input name='email' label='E-mail' type='email' />
            </SimpleGrid>
            
            <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
              <Input name='password' label='Senha' type='password' />
              <Input name='password_confirmation' label='Confirmação da senha' type='password' />
            </SimpleGrid>
          </VStack>

          <HStack mt='8' spacing='6' justify='flex-end'>
            <Button colorScheme='whiteAlpha'>Cancelar</Button>
            <Button colorScheme='pink'>Salvar</Button>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  )
}