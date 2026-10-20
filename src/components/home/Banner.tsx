import Image from "next/image";
import React from "react";
const bdDate = new Date().toLocaleDateString("bn-BD", {
      weekday: "long",
      timeZone: "Asia/Dhaka",
      year: "numeric",
      month: "short",
      day: "numeric",
});
const Banner = () => {
      return (
            <div className="card bg-green-50  grid  grid-cols-1 md:grid-cols-2 items-center lg:card-side  bg-base-100 shadow-sm my-20">
                  <div className="card-body space-y-5">
                        <span className="bg-green-100 px-5 py-2 rounded-xl text-green-800 text-md max-inline-max">
                              {bdDate}
                        </span>
                        <h2 className="card-title text-5xl">
                              আজকের বাজারের দাম এক নজরে
                        </h2>
                        <p className="text-lg">
                              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                              বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক
                              এবং দামের পরিবর্তন এক জায়গায়।
                        </p>
                        <div className="card-actions">
                              <a href="#allproduct" className="btn btn-primary">
                                    সব পণ্য দেখুন{" "}
                              </a>
                        </div>
                  </div>
                  <figure>
                        <Image
                              src="/bazar-hero.png"
                              width={450}
                              height={450}
                              alt="Online Market"
                        ></Image>
                  </figure>
            </div>
      );
};

export default Banner;
