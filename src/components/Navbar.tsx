import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineShoppingCart, AiOutlinePhone, AiOutlineMenu } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import Seachbar from "./Seachbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import useScrollDirection, { ScrollDirection } from "@/hooks/scrollDirection";

const navlinks = [
    { label: "Home", href: "/" },
    { label: "Shops", href: "/shops" },
    { label: "Pages", href: "/pages" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
]

export default function Navbar() {
    const router = useRouter();
    const [showDrawer, setShowDrawer] = useState(false);
    const {data:scrollData} = useScrollDirection();
    useEffect(() => {
        console.log(router)
    }, []);


  return (
    <>
    <div className="fixed top-0 left-0 w-full z-10">
    <div className={`bg-primary text-xs md:text-sm transition-all ${scrollData.direction == ScrollDirection.DOWN ? 'h-0 p-0' : "p-1"}`}>
        <div className="flex gap-1 items-center justify-between max-w-4xl mx-auto">
            <div className="flex gap-4 items-center">
                <FaRegClock/>
                <p>Mon - Fri: <time className="font-bold">9:00am - 9:00pm</time></p>
                <span> | </span>
                <AiOutlinePhone/>
                <p>Call us: <b>+1-202-555-0168</b></p>
            </div>

            <div className="flex gap-4 items-center">
                <p>Language: <b>English</b></p>
                <p>Currency: <b>BDT৳</b></p>
            </div>
        </div>
    </div>

    <div className={`py-4 px-4 sticky top-0  transition-all ${scrollData.postion.y > 10 ? 'bg-white shadow' : ""}`}>
        <div className="flex items-center justify-between gap-8 max-w-4xl mx-auto">
            <Link href={"/"}>
                <Image src={"/ADN Logo.png"} alt="ADN Logo" height={45} width={71} />
            </Link>
            <nav className="hidden gap-6 justify-between items-center md:flex">
                {
                    navlinks.map((link) =>
                    <Link key={link.label} href={link.href} className={`nav-btn ${router.asPath == link.href ? "nav-active" : ""}`}>
                        <span>{link.label}</span>
                    </Link>
                    )
                }
            </nav>

            <Seachbar />
            
            <div className="hidden sm:flex gap-3 items-center justify-center">
                <button className="p-3 rounded-3xl bg-white shadow"><FaRegUser/></button>
                <CartItemButton/>
            </div>
            <button className="p-3 rounded-3xl bg-white shadow md:hidden" onClick={() => setShowDrawer(true)}>
                <AiOutlineMenu size={20}/>
            </button>
        </div>
    </div>
    </div>
    {/* Phone nav drawer */}
    <div className={`fixed p-8 top-0 right-0 w-full h-full transition-all ${showDrawer ? "z-10" : "delay-500 -z-10"}`}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-950 bg-opacity-10" onClick={() => setShowDrawer(false)}></div>
        <div className={`absolute top-0 right-0 bg-white transition-transform duration-500 shadow border-l h-full min-w-60 ${showDrawer ? "translate-x-0" : "translate-x-full"}`}>
            <div className="pt-10">
                {
                    navlinks.map((link) =>
                    <Link key={link.label} href={link.href} className={`nav-btn py-2 border ${router.asPath == link.href ? "nav-active" : ""}`}>
                        <span>{link.label}</span>
                    </Link>
                    )
                }
                <div className="pt-6 px-6 font-viga text-primary-dark sm:hidden">
                    <Link href={"/"}className="px-4 block mb-2 flex items-center gap-4">
                        <span className="rounded-3xl p-3 bg-white shadow inline-block"><FaRegUser/></span>
                        <span>Profile</span>
                    </Link>
                    <Link href={"/"}className="px-4 block mb-2 flex items-center gap-4 pt-2">
                        <CartItemButton/>
                        <span>Cart item</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

const CartItemButton = ({className}:{className?:string}) => {
    return (
        <div className={`relative ${className}`}>
            <button className="p-3 rounded-3xl bg-white shadow"><AiOutlineShoppingCart/></button>
            <span className="cart-item-count">3</span>
        </div>
    )
}

{/* <Link href={"/shop"} className="nav-btn">
<span>Shops</span>
<RiArrowDownSLine/>
</Link> */}