import React from "react";

const AllProducts = () => {
      return (
            <div className="my-10 space-y-2">
                  <h2 className="text-4xl">সব পণ্য</h2>
                  <div className="flex justify-between">
                        <p>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
                        <div className="flex items-center space-x-4">
                              <p>সাজান </p>
                              <select
                                    defaultValue="Pick a color"
                                    className="select"
                              >
                                    <option>
                                          ডিফল্ট
                                    </option>
                                    <option>দাম: কম থেকে বেশি</option>
                                    <option>দাম: বেশি থেকে কম</option>
                              </select>
                        </div>
                  </div>
            </div>
      );
};

export default AllProducts;
