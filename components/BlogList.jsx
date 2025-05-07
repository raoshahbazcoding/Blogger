

// import { blog_data } from "@/Assets/assets";
import React, { useState ,useEffect} from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {

  const [menue, setMenue] = useState("All")  //whenever we load website By defualt we are on All catgroy page thtah Why Intialize value is All

  const [ blogs , setBlogs] = useState([])
  const fetchBlogs = async ()=>{
    const response = await axios.get('/api/blog')
    setBlogs(response.data.blogs)
    console.log(response.data.blogs)

  }

  useEffect(() => {
    fetchBlogs();
  }, [])
  

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button  onClick={()=>setMenue('All')} className={menue=="All"?"bg-black text-white py-1 px-4 rounded-sm":""}>All</button>
        <button onClick={()=>setMenue('Technology')} className={menue=="Technology"?"bg-black text-white py-1 px-4 rounded-sm":""} >Technology</button>
        <button onClick={()=>setMenue('Startup')} className={menue=="Startup"?"bg-black text-white py-1 px-4 rounded-sm":""} >Startup</button>
        <button onClick={()=>setMenue('Lifestyle')} className={menue=="Lifestyle"?"bg-black text-white py-1 px-4 rounded-sm":""} >Lifestyle</button>
      </div>  

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
      {blogs.filter((item)=> menue=="All"?true:item.category==menue ).map((item,index)=>{
        return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
      })}
      </div>
      <hr className="mt-10" />

          {/* News Latter */}
        <div className="my-8">
        <h3 className="text-2xl sm:text-3xl text-center font-medium mt-10">
            News Latter
          </h3>
          <form
            className="flex justify-between max-w-[500px] scale-75 sm:scale-100 shadow-[7px_7px_0px_#000000] mx-auto mt-10 border border-black "
            action=""
          >
            <input
              type="email"
              placeholder="Enter Your Email "
              className="pl-4 outline-none"
            />
            <button
              className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
    </div>
  );
};

export default BlogList;
