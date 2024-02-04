import AboutProduct from '@/components/screen/ProductDetails/AboutProduct';
import SliderProduct from '@/components/screen/ProductDetails/SliderProduct';

const page = () => {
  return (
    <div className='pt-10  bg-backgroundPage'>
      <div className='container_fluid'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
         <div className='border border-red-600 h-fit'>
         <SliderProduct />
         </div>
         <div>
           <AboutProduct />
         </div>
      </div>
      </div>
    </div>
  );
};

export default page;