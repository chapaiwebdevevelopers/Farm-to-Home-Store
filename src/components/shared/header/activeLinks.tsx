"use client";
import { ICategory } from "@/type/type";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface linksProps{
      links:ICategory[]
}
const ActiveLinks = ({ links }:linksProps) => {
      const pathName = usePathname();
      // console.log(links)

      // const isActive =links[0].slug === pathName;
      // console.log(pathName)
      return (
            <>
                  {links.map((link: ICategory, i: number) => (
                        <li key={i}>
                              <Link
                                    className={
                                          `/categories/${link.slug}` === pathName
                                                ? "bg-green-700 text-white"
                                                : ""
                                    }
                                    href={`/categories/${link.slug}`}
                              >
                                    <button>
                                          {link.icon} {link.nameBn}
                                    </button>
                              </Link>
                        </li>
                  ))}
            </>
      );
};

export default ActiveLinks;
