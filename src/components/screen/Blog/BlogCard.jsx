import React from 'react'
import Image from "next/image";


const BlogCard = ({blogData}) => {
    return (
        <div key={blogData.id}>
          <div className="space-y-6">
            <Image
              src={blogData.img}
              alt={`blog image ${blogData.title}`}
              className="w-full h-full rounded-xl"
            />

            <div>
              <h3 className="text-2xl text-contactLabel leading-8 tracking-[5%] font-semibold ">
                Digital Payment will be Top Payment In Next 10 Years
              </h3>
              <div className="py-4 flex items-center gap-2  text-sm text-contactLabel leading-6">
                <p className="font-medium">{blogData.date}</p>
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <p className="font-medium">Technology</p>
              </div>
              <p className="leading-[27px] text-textBody">
                {blogData.description}
              </p>
            </div>
            <div className="pt-6">
              <button className="w-[160px] h-[44px] flex items-center justify-center rounded-[5px] bg-secondary hover:bg-transparent hover:border-[2px] hover:border-secondary text-white hover:text-secondary duration-300">
                <span className="font-medium leading-6">Read More</span>
              </button>
            </div>
          </div>
        </div>
      );
}

export default BlogCard
