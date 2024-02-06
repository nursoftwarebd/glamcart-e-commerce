import Tabs from "@/components/screen/User/Tabs";
import { tabs } from "@/data/tabs";

const page = () => {
  return (
    <div>
      <h3>tab here</h3>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default page;
