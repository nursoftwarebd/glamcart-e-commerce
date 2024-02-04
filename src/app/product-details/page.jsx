import SliderProduct from '@/components/screen/ProductDetails/SliderProduct';

const page = () => {
  return (
    <div className='pt-10  bg-backgroundPage'>
      <div className='container_fluid'>
      <div className='grid grid-cols-2 gap-10'>
         <div className='border border-red-600'>
         <SliderProduct />
         </div>
      </div>
      </div>
    </div>
  );
};

export default page;