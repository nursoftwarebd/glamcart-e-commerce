import SectionTitle from '@/components/shared/SectionTitle/SectionTitle';
import { categoryData } from "@/data/category";
import CategoryItems from './CategoryItems';

const Category = () => {
  return (
    <section className='pt-13 bg-backgroundPage'>
      <div className='container_fluid'>
          {/* title */}
          <SectionTitle heading={"Category"} />
           {/* all category */}
          <div className='mt-8 grid lg:grid-cols-4 2xl:grid-cols-5 gap-[13px]'>
           {categoryData.map((category, index)=>(
             <CategoryItems key={index} category={category} />
           ))} 
          
          </div>
           
      </div>
    </section>
  );
};

export default Category;