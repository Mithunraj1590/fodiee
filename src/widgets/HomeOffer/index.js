import Image from 'next/image'
import React from 'react'
import Style from "./HomeOffer.module.scss"

const HomeOffer = ({ data }) => {
    return (
        <section className='py-[50px] lg:py-[100px] bg-[#280000] relative overflow-hidden'>
            <div className='bg-[#390101] text-center py-[60px] lg:py-[120px]'>
                <div className="container">
                    <div className='absolute top-[50%] -translate-y-[50%] z-10 flex justify-center w-full left-0'>
                        <h2 className='ttl drop-shadow-md leading-[1.4] text-[150px] lg:text-[200px] font-medium text-white'>{data?.title}</h2>
                    </div>
                    <div className={Style.image_wrap}>
                        <figure className={Style.figure}>
                            <Image src={data?.image} fill alt='offer'></Image>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeOffer