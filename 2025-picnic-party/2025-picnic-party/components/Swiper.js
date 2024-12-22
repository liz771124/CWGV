'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
export default function Swiper2({ config, images }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        modules={[Pagination]}
        className='mySwiper h-[200px]'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className='object-cover'
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        className='mySwiper'
      >

      </Swiper> */}
    </>
  )
}
