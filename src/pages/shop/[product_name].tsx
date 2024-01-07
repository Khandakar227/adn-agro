import BreadCrumb from "@/components/BreadCrumb"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProductImage from "@/components/ShopProduct/ProductImage"
import ProductQuantityButton from "@/components/ShopProduct/ProductQuantityButton"
import { ProductFull, products } from "@/data/product"
import { GetStaticPaths, GetStaticPropsContext } from "next"

type ProductPageProps = {
  product:ProductFull
}

function Product({product}:ProductPageProps) {

  return (
    <>
      <Navbar minScrollYOffset={-1}/>
      <main className="bg-secondary pt-28">
        <BreadCrumb/>
        <div className="px-4 py-8 mx-auto max-w-5xl">
          <section className="md:grid md:grid-cols-2 gap-4">
            <div>
              <ProductImage images={product.images} product_name={product.name}/>
            </div>
            <div className="pl-2">
              <h3 className="pb-2 text-3xl font-viga">{product.name}</h3>
              <div className="flex gap-8 pb-2">
                  {
                      product.price && product.price != product.discountPrice ?
                      <>
                          <span className="text-red-600 font-bold text-2xl">${product.discountPrice} </span>
                          <span className="text-gray-400 font-bold text-2xl"> <del>${product.price}</del> </span>
                      </>
                      :
                      <span className="text-gray-400 font-bold text-2xl"> ${product.discountPrice} </span>
                  }
              </div>
              <p className="pb-2 font-viga text-gray-600">*price per {product.perUnit}</p>
            
              <div className="py-10">
                <div className="w-full">
                  <ProductQuantityButton/>
                  <button className="w-full py-3 max-w-xs px-4 bg-primary rounded-full text-white font-viga my-4">Add to Cart</button>
                </div>

                <div className="pt-6 gap-2 flex items-center">
                  <span className="pb-1">Category: </span>
                  <p className="font-viga">
                    {
                      product.category.map((c, i) => (i == 0 ? "" : ", ") + c)
                    }
                  </p>
                </div>

                
                <div className="pt-3 pb-6 gap-2 flex items-center">
                  <span className="pb-1">Tags: </span>
                  <p className="font-viga">
                    {
                      product.tags.map((t, i) => (i == 0 ? "" : ", ") + t)
                    }
                  </p>
                </div>

                <hr />
                
                <div className="pt-8">
                    {product.summary}
                </div>
              </div>
            </div>
          </section>
          <div className="my-12 bg-white rounded-lg shadow-sm p-2">
            <h4 className="font-viga text-2xl">Description</h4>
            <div className="py-2">
              {product.description}
            </div>
          </div>
        </div>

        
      </main>
      <Footer/>
    </>
  )
}

export default Product


export async function getStaticProps(ctx:GetStaticPropsContext) {
  const pName = ctx?.params?.product_name;
  const product = products.find(p => p.name == pName);
  return {
    props: {
      product,
    },
  }
}

export const getStaticPaths = (async () => {
  return {
    paths: [
      ...products.map(p => ({params: { product_name: p.name }}))
    ],
    fallback: true, // false or "blocking"
  }
}) satisfies GetStaticPaths;