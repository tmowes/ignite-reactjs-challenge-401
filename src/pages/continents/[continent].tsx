import { GetStaticPaths, GetStaticProps } from 'next'

import { Flex, SimpleGrid, Text } from '@chakra-ui/react'

import * as C from '~/components'
import { ContinentInfo } from '~/types'
import { api } from '~/services'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: 'blocking',
})

export const getStaticProps: GetStaticProps<ContinentInfo> = async ({
  params,
}) => {
  const continent = String(params.continent)

  const { data } = await api.get<ContinentInfo>(
    `/continents?continent=${continent}`
  )

  if (!data[0]) {
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      ...data[0],
    },
    revalidate: 60 * 30,
  }
}

const Continent = (props: ContinentInfo) => {
  const {
    continent_name,
    description,
    banner_url,
    languages_count,
    countries_count,
    cities_top100,
  } = props
  const cities_count = cities_top100?.length
  return (
    <>
      <C.MetaTags title={continent_name} />
      <Flex w="100vw" minH="100vh" align="center" direction="column">
        <C.Header />
        <C.ContinentBanner src={banner_url} name={continent_name} />

        <Flex maxW={1180} py="20" mx="auto">
          <SimpleGrid minChildWidth={[null, '320px']}>
            <Text
              flex="1"
              textAlign="justify"
              fontSize="24px"
              lineHeight="36px"
              fontWeight="400"
            >
              {description}
            </Text>
            <Flex justify="space-around" ml="16">
              <C.ExtraInfo value={countries_count} text="países" />
              <C.ExtraInfo value={languages_count} text="línguas" />
              <C.ExtraInfo
                value={cities_count}
                text="cidades +100"
                extra="Entre as 100 cidades mais visitadas de 2019"
              />
            </Flex>
          </SimpleGrid>
        </Flex>
        <Flex
          w="100%"
          maxW={1200}
          justify="center"
          direction="column"
          px="4"
          mb="40"
          mx="auto"
        >
          <Text fontSize="36px" fontWeight="500" lineHeight="54px">
            Cidades +100
          </Text>
          <Flex justify={['center', 'left']}>
            <SimpleGrid
              w="100%"
              minChildWidth={['256px']}
              columnGap="8"
              rowGap="4"
              gridTemplateColumns="repeat(auto-fit, minmax(256px, 1fr))"
              justifyItems="center"
            >
              {cities_top100?.map((city) => (
                <C.CityCard key={city.rank_id} {...city} />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Continent
