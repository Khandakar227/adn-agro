import BreadCrumb from "@/components/BreadCrumb"
import Navbar from "@/components/Navbar"
import ProductDetailCard from "@/components/ProductDetailCard"
import FilterSidebar from "@/components/Shops/FilterSidebar"
import { products } from "@/data/products"

function Shops() {
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
                <div className="flex gap-8 flex-col col-span-2">
                  {
                    products.map((product, i) => <ProductDetailCard key={i+product.name} product={product} />)
                  }
                </div>
              </div>
          </div>
      </main>
    </>
  )
}

export default Shops