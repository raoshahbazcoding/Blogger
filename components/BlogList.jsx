

import { blog_data } from "@/Assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {

  const [menue, setMenue] = useState("All")  //whenever we load website By defualt we are on All catgroy page thtah Why Intialize value is All

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button  onClick={()=>setMenue('All')} className={menue=="All"?"bg-black text-white py-1 px-4 rounded-sm":""}>All</button>
        <button onClick={()=>setMenue('Technology')} className={menue=="Technology"?"bg-black text-white py-1 px-4 rounded-sm":""} >Technology</button>
        <button onClick={()=>setMenue('Startup')} className={menue=="Startup"?"bg-black text-white py-1 px-4 rounded-sm":""} >Startup</button>
        <button onClick={()=>setMenue('Lifestyle')} className={menue=="Lifestyle"?"bg-black text-white py-1 px-4 rounded-sm":""} >Lifestyle</button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
      {blog_data.filter((item)=> menue=="All"?true:item.category==menue ).map((item,index)=>{
        return <BlogItem key={index} image={item.image} title={item.title} description={item.description} category={item.category}/>
      })}
      </div>
    </div>
  );
};

export default BlogList;
