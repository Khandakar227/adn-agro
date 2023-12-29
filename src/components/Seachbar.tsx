import { FaSearch } from "react-icons/fa";

export default function Seachbar() {
  return (
    <div className="flex items-stretch justify-stretch">
        <input className="max-w-xs w-full bg-white outline-none py-1 px-4 rounded-tl-3xl rounded-bl-3xl border border-[#D0EBCF]" placeholder="Search for product..." type="search" name="search" id="search" />
        <button className="py-2 px-6 bg-primary text-white rounded-tr-3xl rounded-br-3xl">
            <FaSearch />
        </button>
    </div>
  )
}
