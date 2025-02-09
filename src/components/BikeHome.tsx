"use client"
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types";
import axios from "axios";
import Image from "next/image";

const BikeHome = () => {
  const [products, setProducts] = useState<Product[] | []>([]);
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
  return (
    <div>
      {products?.length > 0 &&
        products.map((item, index) => (
          <Card key={item._id}>
            <div>
                <Image src={item.image} alt={item.productname} height={1080} width={1920} className="aspect-video w-full"/>
            </div>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default BikeHome;
