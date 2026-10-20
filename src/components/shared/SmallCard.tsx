import { IProduct } from "@/type/type";
import Link from "next/link";
import React from "react";

interface SmallCardProps {
      product: IProduct;
}

const SmallCard = ({ product }: SmallCardProps) => {
      // console.log(product);

      return (
            <Link href={ `/product/${product.id}`}>
                            <div className="card w-full  rounded-2xl border border-[#dce5dd] hover:border-[#028411] bg-[#fbfdfb] shadow-none">
                  <div className="card-body gap-0 p-4">
                        {/* Product Info */}
                        <div className="flex items-center gap-3">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
                                    {product.image}
                              </div>

                              <div>
                                    <h2 className="text-lg font-bold text-gray-900">
                                          {product.nameBn}
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                          প্রতি {product.unit}
                                    </p>
                              </div>
                        </div>

                        {/* Price and Change */}
                        <div className="mt-3 flex items-end justify-between">
                              <div>
                                    <p className="text-sm text-gray-500">
                                          আজকের দাম
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">
                                          {product.today} টাকা
                                    </p>
                              </div>
                              {product.change.pct > 0 ? (
                                    <>
                                          <span className=" badge mb-1 rounded-full border-0 bg-[#f0f5f0] px-2.5 py-3 text-xs text-red-500 font-semibold ">
                                                ▲ {product.change.pct}
                                          </span>
                                    </>
                              ) : (
                                    <>
                                          <span className=" badge mb-1 rounded-full border-0 bg-[#f0f5f0] px-2.5 py-3 text-xs text-green-500 font-semibold ">
                                                ▼ { Math.abs(product.change.pct) }
                                          </span>
                                    </>
                              )}
                        </div>
                  </div>
            </div>
            </Link>

      );
};

export default SmallCard;
