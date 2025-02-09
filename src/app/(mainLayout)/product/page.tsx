import BikeProducts from "@/components/BikeProducts";
import React from "react";

const AllProduct = () => {
  return (
    <div className="py-20 max-w-[1250px] mx-auto">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-6 tracking-wide">
        Our Latest Bikes!
      </h1>

      <BikeProducts />
    </div>
  );
};

export default AllProduct;
