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
import { Button } from "./ui/button";

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
        products.map((item) => (
          <Card key={item._id}>
            <div>
                <Image src={item.image} alt={item.productname} height={1080} width={1920} className="aspect-video w-full"/>
            </div>
            <CardHeader>
              <CardTitle>{item.productname}</CardTitle>
              <CardDescription>MSRP: ${item.msrp}</CardDescription>
            </CardHeader>
            <CardContent>
            <p><strong>Engine:</strong> {item.engine}</p>
              <p><strong>Horsepower:</strong> {item.horsepower}</p>
              <p><strong>Torque:</strong> {item.torque}</p>
              <p><strong>Weight:</strong> {item.weight}</p>
            </CardContent>
            <CardFooter>
           <Button>View All</Button>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};

export default BikeHome;
