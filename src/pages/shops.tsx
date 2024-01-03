import BreadCrumb from "@/components/BreadCrumb"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProductDetailCard from "@/components/ProductDetailCard"
import FilterSidebar from "@/components/Shops/FilterSidebar"
import Pagination from "@/components/Shops/Pagination"
import SortingButton from "@/components/Shops/SortingButton"
import { products } from "@/data/products"
import { useFilter } from "@/hooks/useFilter"
import { useSorting } from "@/hooks/useSorting"
import { useEffect } from "react"

function Shops() {
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
                <div className="min-w-48">
                    <h3 className="font-viga text-2xl mini-underline">Shop Products</h3>
                    <FilterSidebar />
                </div>

                <div className="col-span-2">
                  <div className="pb-9">
                    <SortingButton/>
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