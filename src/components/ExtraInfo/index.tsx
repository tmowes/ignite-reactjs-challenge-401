import { Box, Flex, Heading, Icon, Text, Tooltip } from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri'

import { ExtraInfoProps } from './types'

const ExtraInfo = (props: ExtraInfoProps) => {
  const { value, text, extra = null } = props
  return (
    <Flex align="center" justify="center">
      <Box textAlign="center">
        <Heading
          color="yellow.500"
          fontSize="48px"
          lineHeight="72px"
          fontWeight="600"
        >
          {value}
        </Heading>
        <Text
          fontSize="24px"
          lineHeight="36px"
          fontWeight="600"
          alignItems="center"
        >
          {text}
          {!!extra && (
            <Tooltip
              label={extra}
              bg="gray.100"
              color="gray.600"
              borderRadius="2"
              placement="bottom"
              fontSize="16px"
              fontWeight="500"
              hasArrow={false}
              maxW={240}
            >
              <span>
                <Icon
                  as={RiInformationLine}
                  fontSize="20"
                  color="grayAlpha.500"
                  ml="1"
                />
              </span>
            </Tooltip>
          )}
        </Text>
      </Box>
    </Flex>
  )
}

export default ExtraInfo
