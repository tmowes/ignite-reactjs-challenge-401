import { Avatar, Box, Flex, Text, VStack } from '@chakra-ui/react'

import { CitiesTop100 } from '~/types'

// import { CityCardProps } from './types'

// const CityCard = (props: CityCardProps) => {
// const {
//   city: { city_name, country_name, country_flag, image_url },
// } = props
const CityCard = (props: CitiesTop100) => {
  const { city_name, country_name, country_flag, image_url } = props
  return (
    <Box
      minW={256}
      minH={279}
      borderWidth="1px"
      borderColor="yellowAlpha.500"
      borderRadius="4px"
      mt="8"
      overflow="hidden"
    >
      <Flex
        w="100%"
        h="173px"
        bgImage={`url(${image_url})`}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      />
      <Flex align="center" justify="space-between" height={106} p="6">
        <VStack alignItems="left">
          <Text
            fontFamily="Barlow"
            fontSize="20px"
            fontWeight="600"
            lineHeight="25px"
            textAlign="left"
          >
            {city_name}
          </Text>
          <Text
            fontFamily="Barlow"
            fontSize="16px"
            fontWeight="500"
            lineHeight="26px"
            textAlign="left"
            color="gray.400"
          >
            {country_name}
          </Text>
        </VStack>
        <Avatar src={country_flag} size="sm" />
      </Flex>
    </Box>
  )
}

export default CityCard
