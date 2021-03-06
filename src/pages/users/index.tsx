import { Link, Flex, Box, Heading, Button, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Text, useBreakpointValue, Spinner } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'
import { useUsers } from '../../services/hooks/useUsers'
import { RiAddLine, RiPencilLine} from 'react-icons/ri'
import { useState } from 'react'
import NextLink from 'next/link'
import { api } from '../../services/api'
import { queryClient } from '../../services/queryClient'

interface User {
  id: string,
  name: string,
  email: string,
  created_at: string
}

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1)
  const { isLoading, isFetching, error, data } = useUsers(currentPage)

  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const { data } = await api.get<User>(`users/${userId}`)

      return data
    }, {
      staleTime: 1000 * 60 * 10 // 10 minutes
    })
  }

  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' maxWidth={1480} my='6' mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' p='8' bg='gray.800' borderRadius={8}>
          <Flex align='center' justify='space-between' mb='8'>
            <Heading size='lg' fontWeight='normal'>
              Usuários
              { !isLoading && isFetching && <Spinner size='sm' color='gray.500' ml='4' /> }
            </Heading>
            <NextLink href='/users/create' passHref>
              <Button
                as='a'
                colorScheme='pink'
                size='md'
                fontSize='sm'
                leftIcon={<RiAddLine fontSize='20' />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          { isLoading ? (
            <Flex align='center' justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex align='center' justify='center'>
              <Text>Falha ao obter os dados do usuário</Text>
            </Flex>
          ) : (
            <>
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
                  {data.users.map(user => (
                    <Tr key={user.id}>
                      <Td px={['4', '4', '6']}>
                        <Checkbox colorScheme='pink' />
                      </Td>
                      <Td>
                        <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(user.id)}>
                          <Text fontWeight='bold'>{user.name}</Text>
                        </Link>
                        <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                      </Td>
                      { isWideVersion &&
                        <Td>{user.created_at}</Td>
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
                  ))}
                </Tbody>
              </Table>

              <Pagination 
                totalCountOfRegisters={data.totalCount} 
                onPageChange={setCurrentPage}
                currentPage={currentPage}
              />
            </>
          ) }
        </Box>
      </Flex>
    </Flex>
  )
}