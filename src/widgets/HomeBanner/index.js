import React from 'react'
import Style from "./HomeBaneer.module.scss"
import Image from 'next/image'

const HomeBanner = ({ data }) => {
    return (
        <section className={`${Style.homebanner} bg-primary`}>
            <div className="absolute top-[30%] lg:top-[50%] w-full">
                <div className="container">
                    <div className='text-center'>
                        <h1 className={`ttl text-white text-[70px] leading-[1.7] lg:text-h1 ${Style.title} relative z-10`}>{data?.title}</h1>
                        <div className={`${Style.banner_wrap} bg-secondary rounded-full`}>
                            <figure className={Style.figure}>
                                <Image src={data?.image} fill alt="banner"></Image>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeBanner