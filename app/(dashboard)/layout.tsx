import { FC, ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-primary-surface w-full h-screen">
        <Navbar />
        <div className="px-[25px] py-[37px]">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
