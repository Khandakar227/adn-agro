import Footer from "@/components/Footer"
import BannerSection from "@/components/Home/BannerSection"
import ContactSection from "@/components/Home/ContactSection"
import FeatureSection from "@/components/Home/FeatureSection"
import HeaderSection from "@/components/Home/HeaderSection"
import ProductSection from "@/components/Home/ProductSection"
import SaleSection from "@/components/Home/SaleSection"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className="bg-secondary">
        <HeaderSection/>
        <SaleSection/>
        <BannerSection/>
        <ProductSection/>
        <FeatureSection/>
        <ContactSection/>
        <Footer/>
      </main>
    </>
  )
}
