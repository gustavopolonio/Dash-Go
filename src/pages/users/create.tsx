import { Flex, Box, Heading, SimpleGrid, HStack, VStack, Divider, Button } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, SubmitHandler } from 'react-hook-form'

interface CreateUserFormData {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

let createUserFormSchema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('E-mail deve ser válido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória').min(6, 'Mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema)
  })

  const { isSubmitting, errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('data', data)
  }

  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' maxWidth={1480} my='6' mx='auto' px='6'>
        <Sidebar />

        <Box 
          as='form' 
          onSubmit={handleSubmit(handleCreateUser)} 
          flex='1' 
          p='8' 
          bg='gray.800' 
          borderRadius={8}
        >
          <Heading size='lg' fontWeight='normal'>Criar usuário</Heading>
          
          <Divider my='6' borderColor='gray.700' />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input 
                name='name' 
                label='Nome completo' 
                autoComplete='off' 
                {...register('name')}
                error={errors.name}
              />
              <Input 
                name='email' 
                label='E-mail' 
                type='email' 
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>
            
            <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
              <Input 
                name='password' 
                label='Senha' 
                type='password' 
                {...register('password')}
                error={errors.password}
              />
              <Input 
                name='password_confirmation' 
                label='Confirmação da senha' 
                type='password' 
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <HStack mt='8' spacing='6' justify='flex-end'>
            <Link href='/users' passHref>
              <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
            </Link>
            <Button 
              type='submit' 
              isLoading={isSubmitting} 
              colorScheme='pink'
            >
              Salvar
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Flex>
  )
}