"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import React from "react";
interface ICategory {
      id: string;
      slug: string;
      nameBn: string;
      icon: string;
}
const ActiveLinks = ({ links }) => {
      const pathName = usePathname().replace(/\//g, "");

      // const isActive =links[0].slug === pathName;
      // console.log(isActive)
      return (
            <>
                  {links.map((link: ICategory, i: number) => (
                        <li key={i}>
                              <Link
                                    className={
                                          link.slug === pathName
                                                ? "bg-green-700 text-white"
                                                : ""
                                    }
                                    href={link.slug}
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
