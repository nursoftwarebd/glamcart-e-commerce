import BlogPaginations from "@/components/screen/Blog/BlogPaginations";
import { blogData } from "@/data/blogData";
import Image from "next/image";

export const metadata = {
  title: "NIRVOYA - Blog Page",
  description: "Generated by Nur IT Software LTD.",
};

const BlogPage = () => {
  return (
    <>
      <section className="py-13  bg-backgroundPage">
        <div className="container_fluid">
          {/* heading */}
          <div className="flex items-center justify-center">
            <div className="space-y-3 text-center">
              <h2 className="text-heading36 font-semibold text-black3D leading-[54px] tracking-[2%]">
                Our Awesome Articles for you
              </h2>
              <p className="leading-6 text-grayView max-w-[817px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                risus euismod ultrices blandit vel pellentesque suscipit. Nec
                platea eu hac consequat consequat arcu hendrerit urna, mi. Erat
                neque
              </p>
            </div>
          </div>
          <div className="mt-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-7 2xl:gap-x-10">
            {blogData.map((blogData) => {
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
            })}
          </div>
          <BlogPaginations />
        </div>
      </section>
    </>
  );
};

export default BlogPage;
