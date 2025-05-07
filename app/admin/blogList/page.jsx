'use client'
import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [blogs, setBlogs] = useState([])
  const fetchBLogs = async()=>{
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs)
  }


  // For Delete Blogs
  const deleteBlog = async (mongoID)=>{
    const response = await axios.delete(('/api/blog'),{
      params:{
        id:mongoID
      }
    })
    toast.success(response.data.msg)
    fetchBLogs()
  }

  useEffect(() => { 
    fetchBLogs ()
  }, [])
  


  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
      <h1>
        All BLogs
      </h1>
      <div className='relative h-[80vh] max-w-[1250px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-200'>
          <thead className='text-sm text-gray-700 text-left uppercase bg-gray-50 '>
            <tr>
              <th scope='col ' className='hidden sm:block px-6 py-3'>Author Name </th>
              <th scope='col ' className=' px-6 py-3'>Blog Title </th>
              <th scope='col ' className=' px-6 py-3'> Date </th>
              <th scope='col ' className='px-6 py-3'>
                Action
              </th>
            </tr>

          </thead>

          <tbody className='text-gray-700'>
            {blogs.map((item,index)=>{
              return <BlogTableItem key={index} mongoID={item._id} title={item.title} author={item.author} authorImg={item.authorImg} date={item.date} deleteBlog={deleteBlog}/>
            })}
              
          </tbody>

        </table>

      </div>
     
    </div>
  )
}

export default page
