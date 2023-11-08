import Image from "next/image";
import Link from "next/link";

import { sidebarMenu } from "@/constant/sidebarMenu";

const Sidebar = () => {
  return (
    <div className="w-[290px] bg-white h-screen flex flex-col px-4 py-[18px] z-20">
      <Image
        src="/Logo.svg"
        alt="Logo"
        width={169}
        height={69}
      />
      <div className="mt-[42px] flex flex-col space-y-4">
        {sidebarMenu.map((menu, index) => {
          return (
            <div key={index}>
              <h2 className="text-base font-semibold">{menu.category}</h2>
              {menu.subMenu.map((menu, index) => {
                return (
                  <Link
                    href={menu.link}
                    key={index}
                    className="flex items-center space-x-3 p-3 hover:bg-primary-border rounded-xl">
                    <Image
                      src={menu.icon}
                      alt={menu.name}
                      width={18}
                      height={18}
                    />
                    <p className="text-[12px]">{menu.name}</p>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
