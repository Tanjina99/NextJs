"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

const BikeProducts = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
  const bikeData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/all-products");
      setProducts(response.data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    bikeData();
  }, []);

  if (products === null) {
    return <p className="text-center">Loading...</p>; 
  }

  return (
    <div className="p-4">
    <div>
      <Table className="border border-gray-300 shadow-md">
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Engine</TableHead>
            <TableHead>Horsepower</TableHead>
            <TableHead>Torque</TableHead>
            <TableHead>Weight</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.length > 0 ? (
            products.map((bike) => (
              <TableRow key={bike._id}>
                <TableCell>
                  <img
                    src={bike.image}
                    alt={bike.productname}
                    className="w-16 h-16 object-cover rounded"
                  />
                </TableCell>
                <TableCell>{bike.productname}</TableCell>
                <TableCell>${bike.msrp}</TableCell>
                <TableCell>{bike.engine}</TableCell>
                <TableCell>{bike.horsepower}</TableCell>
                <TableCell>{bike.torque}</TableCell>
                <TableCell>{bike.weight}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-4">
                No products found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  </div>

  );
};

export default BikeProducts;
