import BreadCrumb from "@/components/BreadCrumb"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProductDetailCard from "@/components/ProductDetailCard"
import FilterSidebar from "@/components/Shops/FilterSidebar"
import Pagination from "@/components/Shops/Pagination"
import SortingButton from "@/components/Shops/SortingButton"
import { FaFilter } from "react-icons/fa";
import { products } from "@/data/products"
import { useFilter } from "@/hooks/useFilter"
import { useSorting } from "@/hooks/useSorting"
import { useEffect, useState } from "react"

function Shops() {
  const [showFilter, setShowFilter] = useState(false);
  const [filter, _] = useFilter();
  const [sort, __] = useSorting();
  useEffect(() => {
    const queryParam = new URLSearchParams();
    queryParam.set('min', filter.minAmount.toString());
    queryParam.set('max', filter.maxAmount.toString());
    queryParam.set('category', filter.category);
    queryParam.set('sort', sort);

    console.log(queryParam.toString())

  }, [filter, sort])
  return (
    <>
      <Navbar minScrollYOffset={-1}/>
      <main className="pt-28">
          <BreadCrumb/>
          <div className="bg-secondary py-11 px-4">
              <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3 md:gap-9">
    
                <div className={`filter-sidebar ${showFilter ? '' : 'hidden md:block'}`}>
                  <div className="absolute z-0 bg-black bg-opacity-15 top-0 left-0 right-0 bottom-0 md:hidden" onClick={() =>setShowFilter(false)}/>
                  <div className="min-w-48 max-w-64 md:max-w-full relative">
                      <h3 className="font-viga text-2xl mini-underline hidden md:block">Shop Products</h3>
                      <FilterSidebar />
                  </div>
                </div>

                <div className="col-span-3 md:col-span-2">
                  <div className="pb-9 flex justify-between items-center">
                    <SortingButton/>
                    <button className="md:hidden text-text-medium p-1" title="Filter" onClick={() => setShowFilter(true)}><FaFilter size={28}/></button>
                  </div>
                  <div className="flex gap-8 flex-col">
                    {
                      products.map((product, i) => <ProductDetailCard key={i+product.name} product={product} />)
                    }
                  </div>
                  <div className="pt-10 pb-5">
                    <Pagination/>
                  </div>
                </div>
              
              </div>
          </div>
      </main>
      <Footer/>
    </>
  )
}

export default Shops