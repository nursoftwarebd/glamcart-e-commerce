import { customerOrder } from "@/data/customerOrder";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="py-3 px-5 border-borderAccount border-b-[.75px] flex items-center justify-between">
        <h4 className="font-rajdhani text-accountBlack text-xl leading-6 tracking-[2%] font-semibold">
          My Order
        </h4>
      </div>
      <div className="px-5 pt-6.5 pb-13">
        <table className="w-full ">
          <thead className="border-[.75px] border-borderAccount bg-gradient-to-r from-[#E6E7EC]/[32.5%] via-[#E9EAED]/[24%] to-[#E7E9EE]/[28.5%]">
            <tr>
              <th className="order_th">Order #</th>
              <th className="order_th">Date</th>
              <th className="order_th">Order amount</th>
              <th className="order_th">status</th>
              <th className="order_th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customerOrder.map((item, index) => (
              <tr key={index}>
                <td className="order_td">{item.order}</td>
                <td className="order_td">{item.date}</td>
                <td className="order_td">{item.amount}</td>
                <td className="order_td">{item.status}</td>
                <td className="order_td">
                  <Link href={"#"}>{item.action}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
