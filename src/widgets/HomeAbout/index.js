import React from 'react'

const HomeAbout = ({data}) => {
  return (
    <section className='bg-secondary lg:h-[100vh] py-[100px]'>
       <div className="container h-full">
            <div className='flex h-full max-w-[894px] lg:m-auto'>
                <p className='text-white lg:mt-auto text-[20px] text-center'>{data?.description}</p>
                <div className='flex'>
                  
                </div>
            </div>
       </div>
    </section>
  )
}

export default HomeAbout