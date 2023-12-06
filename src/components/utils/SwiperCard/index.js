import React from 'react'
import Style from "./SwiperCard.module.scss"
import Image from 'next/image'

const SwiperCard = ({data}) => {
  return (
    <div className='w-ful h-auto '>
       <div className={Style.image_wrap}>
          <figure className={Style.figure}>
           <Image src={data?.image} fill alt="swiper"></Image>
          </figure>
       </div>
       <div className="absolute top-[40%] -translate-y-[50%] w-full z-0">
         <h2 className={`${Style.title} ttl text-[80px] lg:text-[150px] text-center`}>{data?.title}</h2>
       </div>
    </div>
  )
}

export default SwiperCard