import CategoryBar from "./CategoryBar"

export default function ProductSection() {
  return (
    <div className="p-4 rounded-lg shadow bg-white max-w-5xl mx-auto">
        <h3 className="pt-10 font-viga text-3xl text-center">Our Products</h3>
        <div className="pt-8 pb-4">
            <CategoryBar/>
        </div>
    </div>
  )
}

