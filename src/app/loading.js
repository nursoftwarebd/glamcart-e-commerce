import preloader from '../assets/images/preloader.gif'

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center z-[9999]">
        <div className="w-[100px] h-[100px] rounded-full border-10 border-r-0 border-blue-500 animate-spin"></div>
      </div>
    </>
  );
}
