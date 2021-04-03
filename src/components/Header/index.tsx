import { useRouter } from 'next/router'

import { Flex, Icon, IconButton } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi'

import Logo from './Logo'

const Header = () => {
  const { asPath } = useRouter()
  const navBack = asPath !== '/'

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="24"
      mx="auto"
      px="6"
      align="center"
    >
      {navBack && (
        <IconButton
          aria-label="Volta Navegação"
          icon={<Icon as={FiChevronLeft} />}
          fontSize={['16', '24', '32']}
          variant="unstyled"
          mr="2"
        />
      )}
      <Logo />
    </Flex>
  )
}

export default Header
