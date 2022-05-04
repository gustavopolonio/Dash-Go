import { Flex, Stack, Button } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Input } from '../components/Form/Input'

interface SignInFormData {
  email: string,
  password: string
}

let sigInFormSchema = yup.object({
  email: yup.string().email('E-mail deve ser válido').required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(sigInFormSchema)
  })
  const { isSubmitting, errors } = formState
  
  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log('data', data)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4'>
          <Input 
            name='email' 
            label='E-mail' 
            type='email' 
            autoComplete='off'
            error={errors.email}
            {...register('email')} 
          />
          <Input 
            name='password' 
            label='Senha' 
            type='password' 
            error={errors.password}
            {...register('password')} 
          />
        </Stack>

        <Button 
          type='submit' 
          mt='6' 
          colorScheme='pink'
          size='lg'
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
