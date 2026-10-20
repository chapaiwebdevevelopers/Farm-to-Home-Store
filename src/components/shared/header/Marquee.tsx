// "use client"
import { IProduct } from "@/type/type";
import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const getProudcts = async () => {
      const res = await fetch(
            "https://openapi.programming-hero.com/api/bazardor/products",
      );
      return res.json();
};

const Marquee = async () => {
      const products = await getProudcts();
      // console.log(products);
      return (
            <div className="bg-base-100   border-b-1 border-gray-100 py-2">
                  <ul>
                        <MarqueeText
                              direction="right"
                              duration={15}
                              pauseOnHover={true}
                        >
                              {products.map((product: IProduct) => (
                                    <li className="px-3" key={product.id}>
                                        
                                          {product.image}  
                                          {product.nameBn}
                                           {product.today} টাকা/{product.unit}
                                          {product.change.pct > 0 ? (
                                                <span className="text-red-500">
                                                      ▲{" "}
                                                      {Math.abs(
                                                            product.change.pct,
                                                      )}
                                                </span>
                                          ) : (
                                                <span className="text-green-500">
                                                      ▼{" "}
                                                      {Math.abs(
                                                            product.change.pct,
                                                      )}
                                                </span>
                                          )}
                                    </li>
                              ))}
                        </MarqueeText>
                  </ul>
            </div>
      );
};

export default Marquee;
