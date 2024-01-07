import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function Pagination() {
  return (
    <div className="flex gap-4 items-center justify-end font-viga">
      <button><IoChevronBack/></button>
      {
        Array.from({length:3}).map((_,i) => <button key={"page-no:"+i} className={`${!i ? 'bg-primary-light text-white' : 'bg-white'} text-sm rounded-md py-2 px-3 shadow-md`}>{i+1}</button>)
      }
      <button><IoChevronForward/></button>
    </div>
  )
}
