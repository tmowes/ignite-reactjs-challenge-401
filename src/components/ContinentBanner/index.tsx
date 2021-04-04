import { Flex, Heading } from '@chakra-ui/react'

import { ContinentBannerProps } from './types'

const ContinentBanner = (props: ContinentBannerProps) => {
  const { src, name } = props
  return (
    <Flex
      w="100%"
      h="500px"
      bgImage={`url(${src})`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Flex
        w="100%"
        maxW={1240}
        align="flex-end"
        justify="space-between"
        px="10"
        py="10"
        mx="auto"
      >
        <Heading
          fontSize="36px"
          lineHeight="54px"
          fontWeight="500"
          color="gray.200"
          mb="4"
        >
          {name}
        </Heading>
      </Flex>
    </Flex>
  )
}

export default ContinentBanner
