import { Flex, Text } from '@chakra-ui/react'

import * as C from '~/components'

export default function Home() {
  return (
    <>
      <C.MetaTags />
      <Flex w="100vw" h="100vh" align="center" direction="column">
        <C.Header />
        <C.Banner src="/assets/headerBg.jpg" />

        <Text>Julius</Text>
      </Flex>
    </>
  )
}
