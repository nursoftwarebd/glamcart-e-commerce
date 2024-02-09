const LogInModal = ({ openModal, setOpenModal }) => {
  return (
    <div
      className="backdrop flex bg-black bg-opacity-50 justify-center items-center overflow-x-hidden 
  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    >
      <div className="w-[680px] h-auto  rounded-[16px] bg-[#ffffff]">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nobis
          quam cupiditate autem doloremque ex tempore quisquam maxime, odio,
          quidem, at ab! Odio ipsam non atque totam enim placeat similique!
        </h3>
      </div>
    </div>
  );
};

export default LogInModal;
