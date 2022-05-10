import { Flex, Box, Heading, Button, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text, useBreakpointValue } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'
import { RiAddLine, RiPencilLine} from 'react-icons/ri'
import { useEffect } from 'react'
import Link from 'next/link'

export default function UserList() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }, [])

  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' maxWidth={1480} my='6' mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' p='8' bg='gray.800' borderRadius={8}>
          <Flex align='center' justify='space-between' mb='8'>
            <Heading size='lg' fontWeight='normal'>Usuários</Heading>
            <Link href='/users/create' passHref>
              <Button
                as='a'
                colorScheme='pink'
                size='md'
                fontSize='sm'
                leftIcon={<RiAddLine fontSize='20' />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th w='8' px={['4', '4', '6']} color='gray.300'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion &&
                  <Th>Data de cadastro</Th>
                }
                { isWideVersion &&
                  <Th w='8'></Th>
                }
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Text fontWeight='bold'>Gustavo Polonio</Text>
                  <Text fontSize='sm' color='gray.300'>gustavopolonio1@gmail.com</Text>
                </Td>
                { isWideVersion &&
                  <Td>26 de Abril, 2022</Td>
                }
                { isWideVersion &&
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
                }
              </Tr>

              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Text fontWeight='bold'>Gustavo Polonio</Text>
                  <Text fontSize='sm' color='gray.300'>gustavopolonio1@gmail.com</Text>
                </Td>
                { isWideVersion &&
                  <Td>26 de Abril, 2022</Td>
                }
                { isWideVersion &&
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
                }
              </Tr>

              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td>
                  <Text fontWeight='bold'>Gustavo Polonio</Text>
                  <Text fontSize='sm' color='gray.300'>gustavopolonio1@gmail.com</Text>
                </Td>
                { isWideVersion &&
                  <Td>26 de Abril, 2022</Td>
                }
                { isWideVersion &&
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
                }
              </Tr>


            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Flex>
  )
}