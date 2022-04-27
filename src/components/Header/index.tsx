import { Flex, useBreakpointValue, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true })
  const { onOpen } = useSidebarDrawer()

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
      { !isWideVersion &&
        <IconButton 
          aria-label='Open navigation' 
          icon={<RiMenuLine />}
          onClick={onOpen}
          fontSize='24'
          variant='unstyled'
          mr='2'
        />
      }

      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex
        ml='auto'
        align='center'
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}