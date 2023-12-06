import React from 'react'
import Style from "./HomeTopings.module.scss"
import Image from 'next/image'

const HomeTopings = ({ data }) => {
    return (
        <section className={`${Style.home_topings} py-[100px] relative overflow-hidden`}>
            <div className="container relative">
                <div className="text-center">
                    <h2 className={`ttl ${Style.title} text-[50px] lg:text-[100px] text-white`}>{data?.title}</h2>
                    <h3 className={` ${Style.subtitle} ttl text-[#3c0e00]  text-[30px] lg:text-[50px] lg:text-[100px] font-black italic`}>{data?.subtitle}</h3>
                </div>
                <div className={Style.image_wrap}>
                    <figure className={Style.figure}>
                        <Image src={data?.image} fill alt="topings"></Image>
                    </figure>
                </div>
                <div className='max-w-[1113px] m-auto text-center pt-[50px]'>
                    <p className='text-white text-sm lg:text-[24px]'>{data?.description}</p>
                </div>
                <div className={`${Style.shape} absolute top-0 w-full h-full`}>
                    <figure className="w-full max-h-max">
                        <Image src={data?.shape} fill alt="topings"></Image>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default HomeTopings