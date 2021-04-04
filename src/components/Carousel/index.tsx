import { Box } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import CarouselItem from './CarouselItem'
import { CarouselProps } from './types'

SwiperCore.use([Navigation])
SwiperCore.use([Pagination])

const Carousel = (props: CarouselProps) => {
  const { continents } = props
  return (
    <Box maxW={1240} m="auto" mb="20">
      <Swiper
        pagination={{ clickable: true }}
        navigation
        slidesPerView={1}
        spaceBetween={0}
        loop
        style={{ height: '450px' }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
            <CarouselItem continent={continent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Carousel
