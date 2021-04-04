import { Flex, Image, Text, Box, Heading } from '@chakra-ui/react'

import { BannerProps } from './types'

const Banner = (props: BannerProps) => {
  const { src } = props
  return (
    <Flex
      w="100%"
      h="340px"
      bgImage={`url(${src})`}
      // bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Flex
        w="100%"
        maxW={1240}
        align="center"
        justify="space-between"
        px="10"
        mx="auto"
      >
        <Box mt="4">
          <Heading
            fontSize="36px"
            lineHeight="54px"
            fontWeight="500"
            color="gray.200"
            mb="4"
          >
            5 Continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text fontSize="20px" lineHeight="30px" color="gray.200">
            Chegou a hora de tirar do papel a viagem que você
            <br />
            sempre sonhou.
          </Text>
        </Box>
        <Box w="lg">
          <Image
            src="/assets/airplane.svg"
            transform="translateX(80px) translateY(54px)"
          />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Banner
