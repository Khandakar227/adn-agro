import { categories } from "@/data/categories"
import CategoryBar from "./CategoryBar"
import { useState } from "react"
import ProductCard from "../ProductCard";

export default function ProductSection() {
  const [categorySelected, selectCategory] = useState(categories[0]);
  return (
    
    <div className="py-16">
        <div className="p-4 rounded-lg shadow bg-white max-w-5xl mx-auto">
            <h3 className="pt-10 font-viga text-3xl text-center">Our Products</h3>
            <div className="py-8">
                <CategoryBar categories={categories} active={categorySelected} setActive={selectCategory}/>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 justify-center items-center">
              {
                Array.from({length:9}).map((_,i) => <ProductCard name="Fresh Strawberry" image="/item.jpg" discountPrice={8.99} price={12.99} key={"product-"+ i} />)
              }
            </div>
            <div className="py-8 mx-auto text-center">
              <button className="px-8 py-3 bg-white text-primary border border-primary rounded-full font-medium">View all</button>
            </div>
        </div>
    </div>
  )
}

