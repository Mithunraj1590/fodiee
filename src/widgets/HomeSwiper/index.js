"use client"
import React from 'react'
import Style from "./HomeSwiper.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import SwiperCard from '@/components/utils/SwiperCard';

const HomeSwiper = ({ data }) => {
    return (
        <section className={`${Style.home_swiper} bg-secondary py-[50px]  lg:py-[100px] overflow-hidden `}>
            <div className="container">
            <div className={`${data?.direction=="top" ? "block" : "hidden"} border border-[#fff] text-center pt-[30px] lg:pt-[50px] border-b-0`}>
                   <p className='text-white text-sm lg:text-[20px] max-w-[743px] text-center m-auto'>{data?.description}</p>
                </div>
                <div className={`${Style.slider} relative py-[50px]`}>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".testimonial-nav-prev",
                            nextEl: ".testimonial-nav-next",
                        }}
                      
                        modules={[Navigation]}
                        className={Style.swiper}
                    >
                        {data?.card?.map((data, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    <SwiperCard data={data}></SwiperCard>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                    <button
                        className={`${Style.testimonial_nav} rotate-180 testimonial-nav-prev w-[95px] h-[80px] rounded-full hidden lg:flex justify-center items-center absolute top-[35%] left-0 -translate-x-2/4 -translate-y-2/4 z-10 transition-all ease-in-out duration-300 will-change-transform hover:scale-[1.1] cursor-pointer`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            width="97px" height="98px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                d="M0.504,97.998 L17.791,49.001 L0.504,0.005 L97.001,49.001 L0.504,97.998 Z" />
                        </svg>
                    </button>
                    <button
                        className={`${Style.testimonial_nav} testimonial-nav-next w-[95px] h-[80px] rounded-full hidden lg:flex justify-center items-center absolute top-[35%] right-0 translate-x-2/4 -translate-y-2/4 z-10 transition-all ease-in-out duration-300 will-change-transform hover:scale-[1.1] cursor-pointer`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xlink="http://www.w3.org/1999/xlink"
                            width="97px" height="98px">
                            <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                                d="M0.504,97.998 L17.791,49.001 L0.504,0.005 L97.001,49.001 L0.504,97.998 Z" />
                        </svg>
                    </button>

                </div>
                <div className={`${data?.direction=="bottom" ? "block" : "hidden"} border border-[#fff] text-center pb-[30px] lg:pb-[50px] border-t-0`}>
                   <p className='text-white text-sm lg:text-[20px] max-w-[743px] text-center m-auto'>{data?.description}</p>
                </div>
            </div>
        </section>
    )
}

export default HomeSwiper