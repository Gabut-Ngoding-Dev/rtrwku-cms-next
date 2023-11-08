import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <nav className="w-full bg-white flex justify-end px-[18px] py-[22px]">
      <div className="flex items-center space-x-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1>Administrator</h1>
        <Image
          src="/icons/ChevronDown.svg"
          alt="Down"
          width={18}
          height={18}
        />
        <Image
          src="/icons/Bell.svg"
          alt="Bell"
          width={24}
          height={24}
        />
      </div>
    </nav>
  );
};

export default Navbar;
