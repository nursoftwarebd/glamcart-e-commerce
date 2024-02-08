import { myOrder } from "@/data/myorder";

const MyOrder = () => {
  return (
    <div className="bg-white">
      <div className="py-3 px-5 border-borderAccount border-b-[.75px] flex items-center justify-between">
        <h4 className="font-rajdhani text-accountBlack text-xl leading-6 tracking-[2%] font-semibold">
          My Order
        </h4>
      </div>
      <div className="px-5 py-6.5">
        <table className="w-full ">
          <thead className="border ">
            <tr>
              <th className="text-start border">Order #</th>
              <th className="text-start border">Date</th>
              <th className="text-start border">Order amount</th>
              <th className="text-start border">status</th>
              <th className="text-start border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myOrder.map((item, index) => (
              <tr key={index}>
                <td>{item.order}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
                <td>{item.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
