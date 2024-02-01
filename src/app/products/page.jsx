import ProductCard from '@/components/screen/ProductCard';
import { products } from "@/data/products";
const page = () => {
  return (
    <>
      <div className='container_fluid'>
      <div className='pt-10 flex gap-9 2xl:gap-14'>
         <div className='w-[300px]'>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, magni repellendus? Molestiae cumque similique modi obcaecati quia repudiandae sunt recusandae quam maiores adipisci. Autem aliquam porro, vero maxime facilis veritatis!
         </div>
        <div className='w-full'> 
          <div className='grid grid-cols-3 gap-6'>
             {products.map((product, index)=>(
              <ProductCard key={index} product={product} />
             ))}
          </div>
          </div>  
      </div>
      </div>  
    </>
  );
};

export default page;