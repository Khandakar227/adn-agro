import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoWhatsapp, IoLogoYoutube, IoLocationOutline  } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-24 bg-white">
        <div className="flex gap-4 max-w-5xl mx-auto flex-wrap justify-evenly items-start">
            <div className="max-w-64 w-full">
                <Image src="/ADN.png" width={72} height={45} alt="ADN logo"/>
                <p className="text-primary-dark text-xs pb-2">Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus</p>
                <SocialProfiles />
                <Address/>
                <ContactInfo/>
            </div>

            <div className="min-w-48">
                <h3 className="font-viga text-xl pb-4">Useful Links</h3>
                <div className="flex flex-col gap-2 text-primary-dark">
                    <Link href={"/"}>About Us</Link>
                    <Link href={"/"}>Contact Us</Link>
                    <Link href={"/"}>Shop by Categorie</Link>
                    <Link href={"/"}>From the Blog</Link>
                    <Link href={"/"}>Shopping Cart</Link>
                    <Link href={"/"}>FAQ,s</Link>
                </div>
            </div>

            <div className="min-w-48">
                <h3 className="font-viga text-xl pb-4">Customer Care</h3>
                <div className="flex flex-col gap-2 text-primary-dark">
                <Link href={"/"}>My Account</Link>
                <Link href={"/"}>Payment & Delivery</Link>
                <Link href={"/"}>FAQ</Link>
                <Link href={"/"}>Customer Support</Link>
                <Link href={"/"}>Licenses & Permits</Link>
                <Link href={"/"}>Our partners</Link>
                </div>
            </div>

            <div className="min-w-48">
                <h3 className="font-viga text-xl pb-4">Product Categories</h3>
                <ul className="text-primary-dark list-disc">
                    <li className="py-1"><Link href={"/"}>Fruits & Vegetables</Link></li>
                    <li className="py-1"><Link href={"/"}>Snacks & Canned Goods</Link></li>
                    <li className="py-1"><Link href={"/"}>Cereal & Pasta</Link></li>
                    <li className="py-1"><Link href={"/"}>Coffe & Tea</Link></li>
                    <li className="py-1"><Link href={"/"}>Bakery,  Flour & Sweeteners</Link></li>
                    <li className="py-1"><Link href={"/"}>Herbs & Spices</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

const SocialProfiles = () => {
    return (
        <>
            <div className="flex gap-4 pb-4">
                <button className="text-primary-dark"><IoLogoFacebook size={20}/></button>
                <button className="text-primary-dark"><IoLogoInstagram size={20}/></button>
                <button className="text-primary-dark"><IoLogoWhatsapp size={20}/></button>
                <button className="text-primary-dark"><IoLogoYoutube size={20}/></button>
                <button className="text-primary-dark"><IoLogoLinkedin size={20}/></button>
            </div>
        </>
    )
}

const Address = () => {
    return (
        <div className="flex gap-4 pb-4 items-center">
            <span className="p-4 rounded-full shadow-md text-primary-dark border">
                <IoLocationOutline size={24}/>
            </span>
            <p className="font-viga">Flat No- C Banani, Dhaka- 1213, Bangladesh</p>
        </div>
    )
}

const ContactInfo = () => {
    return (
        <div className="flex gap-4 pb-4 items-center">
            <span className="p-4 rounded-full shadow-md text-primary-dark border">
                <FaHeadset size={24}/>
            </span>
            <div>
                <p className="text-gray-400 text-sm">Mon - Fri: 9:00 am - 9:00 pm</p>
                <p className="font-viga">+880-130-862-6445<br/>+880-164-296-7727</p>
            </div>
        </div>
    )
}