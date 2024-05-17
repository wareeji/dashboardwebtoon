import Link from "next/link"
import Image from "next/image"

export default function NavbarItem({ address, icon }) {
    return (
        <Link href={address} className="cursor-pointer">
            <Image src={icon} />
        </Link>
    )
}
