import CategorySidebar from "./CategorySidebar";
import PriceRangeSlider from "./PriceRangeSlider";

export default function FilterSidebar() {
  return (
    <div className="bg-white rounded-2xl shadow overflow-auto h-full md:h-auto">
        <h4 className="font-viga bg-primary md:rounded-t-2xl text-white text-xl p-3">Product Filters</h4>        
        <CategorySidebar/>
        <PriceRangeSlider/>
    </div>
  )
}
