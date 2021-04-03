import { Flex, Image, Text, Box, Heading, HStack } from '@chakra-ui/react'

import { BannerProps } from './types'

const Banner = (props: BannerProps) => {
  const { src } = props
  return (
    <Flex
      w="100%"
      h={335}
      backgroundImage={`url(${src})`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <HStack maxWidth={1440} m="auto" spacing="40">
        <Box w="lg" pl="4">
          <Heading fontWeight="medium" fontSize="4xl" lineHeight="tall">
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>
          <Text fontSize="lg" mt="4" mb="6" letterSpacing="tight">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Box w="lg" pl="20" pt="20">
          <Image src="/assets/airplane.svg" />
        </Box>
      </HStack>
    </Flex>
  )
}

export default Banner
