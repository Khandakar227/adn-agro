import { capitalize } from "@/libs";
import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function BreadCrumb() {
    const router = useRouter();
    const [routePaths, setRouterPaths] = useState([] as string[]);

    useEffect(() => {
        const links = router.asPath.split('/');
        links.shift();
        setRouterPaths(links);
    }, [])
    return (
    <div className="p-2 text-text-medium mx-auto max-w-4xl text-sm">
        <Link href={"/"}>Home</Link>
        {
            routePaths.map((link, i) =>
                <div className="contents" key={link}>
                    <span className="px-1"> | </span>
                    <Link href={"/"+ routePaths.slice(0, i + 1).join('/')}>{decodeURIComponent(capitalize(link))}</Link>
                </div>
            )
        }
    </div>
  )
}
