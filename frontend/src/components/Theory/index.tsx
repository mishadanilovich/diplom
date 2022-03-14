import React, { useMemo } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper-bundle.css'
import 'swiper/modules/navigation/navigation.min.css'
import * as naming from '../../constants'
import { Image, StyledButton, SwiperItem, TheoryContainer } from './styles'
import { Props } from './types'
import { useLocation, useNavigate } from 'react-router-dom'
import { lastIndexOf } from 'lodash'
import { useAppSelector } from '../../store/hooks'
import { getLoading } from '../../hoc/AuthHoc/store/selector'

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Petersen1_tiny.svg/270px-Petersen1_tiny.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Graph_cycle.svg/440px-Graph_cycle.svg.png',
  'https://neerc.ifmo.ru/wiki/images/thumb/f/f2/Hamiltonial.png/300px-Hamiltonial.png',
]

export const Theory = ({ topic }: Props) => {
  const isLoading = useAppSelector(getLoading)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const testPathname = useMemo(
    () => `../${pathname.slice(1, lastIndexOf(pathname, '/'))}/test`,
    []
  )

  return (
    <TheoryContainer>
      <h2>{topic.title}</h2>
      <h3>Заголовок</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div style={{ width: '230px', margin: '20px auto' }}>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          loop
        >
          {images.map((url, i) => (
            <SwiperSlide key={i}>
              <SwiperItem>
                <Image src={url} />
              </SwiperItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <h3>Заголовок</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <StyledButton
        onClick={() => navigate(testPathname)}
        isLoading={isLoading}
      >
        {naming.TAKE_TEST}
      </StyledButton>
    </TheoryContainer>
  )
}
