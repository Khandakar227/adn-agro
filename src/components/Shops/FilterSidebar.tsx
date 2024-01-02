import CategorySidebar from "./CategorySidebar";
import PriceRangeSlider from "./PriceRangeSlider";

export default function FilterSidebar() {
  return (
    <div className="bg-white rounded-2xl shadow">
        <h4 className="font-viga bg-primary rounded-t-2xl text-white text-xl p-3">Product Filters</h4>        
        <CategorySidebar/>
        <PriceRangeSlider/>
    </div>
  )
}
