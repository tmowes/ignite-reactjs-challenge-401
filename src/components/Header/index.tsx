import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button, Flex, Icon, Image } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi'

const Header = () => {
  const { asPath } = useRouter()
  const navBack = asPath !== '/'

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1240}
      h="24"
      p="6"
      align="center"
      mx="auto"
    >
      {navBack && (
        <Link href="/" passHref>
          <Button as="a" variant="white" alignItems="center">
            <Icon as={FiChevronLeft} pr="1" fontSize={['16', '24', '32']} />
          </Button>
        </Link>
      )}
      <Image src="/assets/logo.svg" alt="worldtrip logo" m="auto" />
      {navBack && (
        <Button as="a" variant="white" alignItems="center" opacity={0}>
          <Icon as={FiChevronLeft} pr="1" fontSize={['16', '24', '32']} />
        </Button>
      )}
    </Flex>
  )
}

export default Header
