'use client'

import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {

  const [data , setData] = useState(null);

const fetchBlogData  =async ()=>{
  const respose = await axios.get('/api/blog',{
    params:{
      id:params.id
    }
  })
  setData(respose.data)

} 
 useEffect (()=>{
    fetchBlogData();
 }),[]



  return ( data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center '>
          <Link href='/'>
          <Image src={assets.logo} width={280} alt='' className='w-[130px] sm:w-auto'/>
          </Link>
          <button className='flex items-center gap-2  font-medium py-1  px-3 sm:py-3  sm:px-6  border border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt=''/>
          </button>
      </div>


    <div className='text-center my-24'>
      <h1 className='border border-black shadow-[-7px_7px_0px_#000000] py-8 text-2xl font-serif capitalize'>
        {data.title}
      </h1>

      <Image src={data.authorImg} width={80} alt='' height={80}  className='mx-auto mt-6 border border-white rounded-full'/>
      <p className='mt-1 pb-2 text-md max-w-[740px] mx-auto italic font-medium'>
        {data.author}
      </p>
      
      
      </div> 
    </div>
    <div className=' mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10 '>
      <Image src={data.image} width={1280} height={720} alt='' className='border-4  border-white' />
      <h1 className='my-8  text-[26px]'>Introduction:</h1>
      <p>
        {data.description}
      </p>
      <h3 className='my-5 text-[18px] font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
      <p className='my-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatem laborum animi mollitia accusamus suscipit unde sapiente aut dolor itaque aliquam exercitationem hic error provident ducimus aperiam, vel fugit quos.
      </p>
      <p className='my-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatem laborum animi mollitia accusamus suscipit unde sapiente aut dolor itaque aliquam exercitationem hic error provident ducimus aperiam, vel fugit quos.
      </p>
      <h3 className='my-5 text-[18px] font-semibold'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
      <p className='my-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatem laborum animi mollitia accusamus suscipit unde sapiente aut dolor itaque aliquam exercitationem hic error provident ducimus aperiam, vel fugit quos.
      </p>
      <p className='my-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatem laborum animi mollitia accusamus suscipit unde sapiente aut dolor itaque aliquam exercitationem hic error provident ducimus aperiam, vel fugit quos.
      </p>



      <div className='my-24'>
        <p className='text-black font-semibold my-4'>
          Share This Article On Socail Media
        </p>
        <div className='flex'>
        <Image src={assets.facebook_icon} height={60} width={60}/>
        <Image src={assets.twitter_icon} height={60} width={60}/>
        <Image src={assets.googleplus_icon} height={60} width={60}/>
        </div>
      </div>
      </div>

    <Footer/>
    </>:<></>
  )
}

export default page
