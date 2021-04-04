import Link from 'next/link'

import { Flex, Text } from '@chakra-ui/react'

import { CarouselItemProps } from './types'

const CarouselItem = (props: CarouselItemProps) => {
  const {
    continent: { image_url, name, slug, title },
  } = props
  return (
    <Link href={`/continents/${slug}`} passHref>
      <Flex
        as="a"
        bg="gray.500"
        height="100%"
        align="center"
        justify="center"
        bgImage={`url(${image_url})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        direction="column"
      >
        <Text
          textAlign="center"
          fontSize="48px"
          fontWeight="700"
          lineHeight="72px"
          color="gray.200"
        >
          {name}
        </Text>
        <Text
          textAlign="center"
          fontSize="24px"
          fontWeight="700"
          lineHeight="36px"
          color="gray.300"
        >
          {title}
        </Text>
      </Flex>
    </Link>
  )
}

export default CarouselItem
