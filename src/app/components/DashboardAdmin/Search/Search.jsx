import { MdSearch } from "react-icons/md";

export default function Search({ placeholder }) {
    
    return (
        <div className="flex items-center gap-[30px]">
            <div className="flex items-center gap-[10px] p-[10px] bg-[#3a3838] rounded-[10px]">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="pl-[10px] bg-transparent border-none outline-none "
                />
                <MdSearch />
            </div>
        </div>
    )
}
