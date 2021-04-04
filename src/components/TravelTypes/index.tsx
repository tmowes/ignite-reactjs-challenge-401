import { Flex, Image, Text, VStack } from '@chakra-ui/react'

import travelTypesData from './travelTypesData'

const TravelTypes = () => (
  <Flex
    w="100%"
    maxW={1160}
    align="center"
    justify="space-between"
    mt="28"
    mb="20"
  >
    {travelTypesData.map(({ icon, title }) => (
      <VStack key={title} spacing="6" flexDirection="column" align="center">
        <Image src={icon} boxSize="85px" />
        <Text fontSize="24px" fontWeight="600" lineHeight="36px">
          {title}
        </Text>
      </VStack>
    ))}
  </Flex>
)

export default TravelTypes
