import React from 'react'
import Style from "./HomeAboutDetail.module.scss"

const HomeAboutDetail = ({data}) => {
    return (
        <section className={`${Style.about_detail} overflow-hidden  `}>
            
                <div className="grid grid-cols-1 lg:grid-cols-2 ">
                    <div className='bg-[#280000] px-[15px] lg:px-[100px] py-[100px]'>
                    <p className='text-white text-ms lg:text-[25px] text-center'>{data?.description}</p>
                    </div>
                    <div className='bg-[#380000] px-[15px] lg:px-[100px] py-[100px]'>
                      <h2 className='ttl text-white font-black text-[50px] lg:text-[120px] text-center leading-[1.2]'>{data?.title}</h2>
                    </div>
                </div>
         
        </section>
    )
}

export default HomeAboutDetail