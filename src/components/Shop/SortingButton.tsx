import { useSorting } from "@/hooks/useSorting"
import { ChangeEvent } from "react"

export default function SortingButton() {
    const [sort, setSort] = useSorting();

    function changeHandler(e:ChangeEvent) {
        setSort((e.target as HTMLSelectElement).value);
    }
    
    return (
    <>
    <div className="shadow border pr-4 py-[2px] w-max rounded-full font-viga overflow-hidden">
        <select onChange={changeHandler} value={sort} name="sort" id="sort" className="outline-none pl-4 py-3 bg-transparent">
            <option value="default"> Default Sorting </option>
            <option value="price-low-to-high"> Price Low to High </option>
            <option value="price-high-to-low"> Price High to Low </option>
        </select>
    </div>
    </>
  )
}
