import { FC } from 'react'

import { Box, Flex } from '@chakra-ui/react'

const HomeCopy: FC = ({ children }) => (
  <Box
    w={1440}
    h={1469}
    position="absolute"
    top={0}
    left={0}
    right={0}
    mx="auto"
    backgroundImage="url(/copy/home25.png)"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    backgroundBlendMode="multiply"
    zIndex="base"
  >
    <Flex position="absolute" top={0} left={0} right={0}>
      {children}
    </Flex>
  </Box>
)

export default HomeCopy
