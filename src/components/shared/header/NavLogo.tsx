// 'use client'
import Image from "next/image";
import Link from "next/link";

import React from "react";
import ActiveLinks from "./activeLinks";
import { useSession } from "@/lib/auth-client";
import UserMenu from "./UserMenu";


const getCategory = async()=>{
      const response = await fetch('https://openapi.programming-hero.com/api/bazardor/categories');
      return response.json();
}
const bdDate = new Date().toLocaleDateString("bn-BD", {
      weekday: "long",
      timeZone: "Asia/Dhaka",
      year: "numeric",
      month: "short",
      day: "numeric",
});




const NavLogo = async() => {
      const links = await getCategory();
     
      // console.log("Navlinks API",links)
      return (
            <>
                  <div className="bg-base-100 border-b-1 border-gray-100">
                        <div className="navbar container mx-auto   ">
                              <div className="navbar-start ">
                                    <Link
                                          className="flex items-center  "
                                          href="/"
                                    >
                                          <span className="text-3xl bg-green-700 rounded-xl flex items-center justify-center p-1 mr-3">
                                                🛒
                                          </span>
                                          <div>
                                                <p className="text-2xl">
                                                      {" "}
                                                      বাজার দর
                                                </p>
                                                <small className="">
                                                      {" "}
                                                      {bdDate}
                                                </small>
                                          </div>
                                    </Link>
                              </div>
                              <div className="navbar-end space-x-3 ">
                                  <UserMenu></UserMenu>
                              </div>
                        </div>
                  </div>
                  <div className="container mx-auto border-b-1 border-gray-100">
                        <div className="navbar-center">
                              <ul className="menu menu-horizontal px-1">
                                    <ActiveLinks links={links}></ActiveLinks>
                              </ul>
                        </div>
                  </div>
            </>
      );
};

export default NavLogo;
