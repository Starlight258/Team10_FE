import { Outlet } from "react-router-dom";
import GNB from "../components/atoms/GNB";

const OwnerMainLayout = () => {
  return (
    <>
      <GNB />
      <main className="w-[1280px] mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
};

export default OwnerMainLayout;
