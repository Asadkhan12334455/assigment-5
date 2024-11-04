"use client";
import React from 'react'
import Header from "./components/Header";
import Image from 'next/image'

const index = () => {
  return (
    <div className='h-screen'>
      <Header />
      <div className='flex h-[80vh] p-12'>
        <div className='w-1/2 flex flex-col justify-center items-start'>
          <h1 className='text-[44px] font-bold mb-4 Libre Bodoni'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className='text-[32px] text-[#787054] mb-6 Libre Bodoni'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className='bg-[#A29875] rounded-[10px] text-[30px] text-white py-2 px-6 border-none Libre Bodoni'>Explore Now</button>
        </div>
      
      <div className='w-1/2 flex justify-center items-center'>
      <Image
            src={"/figma.svg"}
            alt="Figma Logo"
            width={462}
            height={647}
          />
      </div>
      </div>
    </div>
  )
}

export default index