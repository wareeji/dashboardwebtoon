'use client'
import { usePathname } from "next/navigation";
import Link from "next/link"

export default function NavTopItem({ item }) {
    const pathname = usePathname()

    return (
        <Link href={item.path} className={`cursor-pointer my-2 ml-3 flex gap-3 items-center p-[20px] hover:bg-[#adaaaaec] hover:rounded-[10px] 
        ${pathname === item.path ? 'bg-[#f3ebebec] text-[#2d2d2dec] font-bold rounded-[10px]' : ''}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}
