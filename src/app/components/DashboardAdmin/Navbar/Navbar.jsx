'use client'
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="p-[20px] mb-[20px] rounded-[10px] bg-[#222121] flex justify-between items-center ">
      <div className="font-bold text-[20px] text-[#9c9a9a] capitalize">{pathname.split("/").pop()}</div>

      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px] p-[10px] bg-[#3a3838] rounded-[10px]">
          <input type="text" placeholder="Search..." className="pl-[10px] bg-transparent outline-none" />
          <MdSearch />
        </div>

        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </nav>
  )
}
