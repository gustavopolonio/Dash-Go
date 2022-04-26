import { Flex, Box, Heading, Button, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'
import { RiAddLine, RiPencilLine} from 'react-icons/ri'

export default function UserList() {

  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' maxWidth={1480} my='6' mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' p='8' bg='gray.800' borderRadius={8}>
          <Flex align='center' justify='space-between' mb='8'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
            <Button
              as='a'
              colorScheme='pink'
              size='md'
              fontSize='sm'
              leftIcon={<RiAddLine fontSize='20' />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th w='8' px='6' color='gray.300'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Text fontWeight='bold'>Gustavo Polonio</Text>
                  <Text fontSize='sm' color='gray.300'>gustavopolonio1@gmail.com</Text>
                </Td>
                <Td>26 de Abril, 2022</Td>
                <Td>
                  <Button 
                    as='a'
                    colorScheme='purple'
                    size='sm'
                    fontSize='sm'
                    leftIcon={<RiPencilLine fontSize='20' />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Text fontWeight='bold'>Gustavo Polonio</Text>
                  <Text fontSize='sm' color='gray.300'>gustavopolonio1@gmail.com</Text>
                </Td>
                <Td>26 de Abril, 2022</Td>
                <Td>
                  <Button 
                    as='a'
                    colorScheme='purple'
                    size='sm'
                    fontSize='sm'
                    leftIcon={<RiPencilLine fontSize='20' />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Text fontWeight='bold'>Gustavo Polonio</Text>
                  <Text fontSize='sm' color='gray.300'>gustavopolonio1@gmail.com</Text>
                </Td>
                <Td>26 de Abril, 2022</Td>
                <Td>
                  <Button 
                    as='a'
                    colorScheme='purple'
                    size='sm'
                    fontSize='sm'
                    leftIcon={<RiPencilLine fontSize='20' />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>


            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Flex>
  )
}