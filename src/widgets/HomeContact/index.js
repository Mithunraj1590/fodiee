import React from 'react'
import Style from "./HomeContact.module.scss"

const HomeContact = ({ data }) => {
    return (
        <section className={`${Style.home_contact} bg-primary py-[50px] lg:py-[150px]`}>
            <div className="container">
                <div className="flex flex-wrap justify-center lg:justify-between items-center gap-[20px]">
                    <div className='text-center'>
                        <a className="text-white text-[24px]" href={`tel:${data?.number}`}>{data?.number}</a>
                    </div>
                    <div className='w-[250px] text-center'>
                        <p className='text-white font-black text-[30px] :'>{data?.time}</p>
                    </div>
                    <div>
                        <address className='text-white text-[24px]'>
                            {data?.address}
                        </address>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeContact