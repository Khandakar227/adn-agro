import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineShoppingCart, AiOutlinePhone, AiOutlineMenu } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import Seachbar from "./Seachbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
                <div className="relative">
                    <button className="p-3 rounded-3xl bg-white shadow"><AiOutlineShoppingCart/></button>
                    <span className="cart-item-count">3</span>
                </div>
            </div>

            <button className="p-3 rounded-3xl bg-white shadow">
                <AiOutlineMenu size={20}/>
            </button>
        </div>
    </div>
    </div>
    </>
  )
}


{/* <Link href={"/shop"} className="nav-btn">
<span>Shops</span>
<RiArrowDownSLine/>
</Link> */}