import { useQuery } from 'react-query'
import { api } from '../../services/api'

interface User {
  id: string,
  name: string,
  email: string,
  created_at: string
}

interface GetUsersProps {
  users: User[],
  totalCount: number
}

export async function getUsers(currentPage: number): Promise<GetUsersProps> {
  const { data, headers } = await api.get<GetUsersProps>('users', {
    params: {
      page: currentPage
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    created_at: new Date(user.created_at).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))

  return { users, totalCount }
}

export function useUsers(currentPage: number) {
  return useQuery(['users', currentPage], () => getUsers(currentPage), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })
}