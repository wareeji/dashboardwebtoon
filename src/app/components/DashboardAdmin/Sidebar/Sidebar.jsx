import Image from "next/image";
import NoAvatar from "/public/noavatar.png";
import MenuLink from "./SidebarItem.jsx";
import Link from "next/link";

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Comics",
        path: "/",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-[40px]">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full"
          src={NoAvatar}
          alt=""
          width="70"
          height="70"
        />

        <div className="flex flex-col">
          <span className="font-medium">6400823</span>
          <span className="font-medium">Waree Jinanun</span>
          <span className="text-[12px] text-[#9c9a9a]">Administrator</span>
        </div>
      </div>

      <ul className="flex flex-col gap-4 mt-8">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="underline text-[#9c9a9a] " >{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <Link href="" className="cursor-pointer p-[20px] mt-[15px] flex gap-[10px] items-center rounded-[10px] bg-none w-full hover:bg-[#adaaaaec]">
        <MdLogout />
        Logout
      </Link>

    </aside>
  )
}
