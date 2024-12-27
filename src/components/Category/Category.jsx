import React from "react";
import "../Category/Category.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Category = () => {
  return (
    <>
      <div className="h=20 w-full pb-16 bg-transparent"></div>
      <div className="overflow-x-auto">
        <div className="justify-between bg-white flex gap-2 px-2 py-2 mt-2 c-shadow whitespace-nowrap md:px-24">
          <div className="flex">
            <h1 className="font-semibold cursor-pointer">ALL CATEGORY</h1>
            <ChevronDownIcon className="size-6 ml-1 cursor-pointer" />
          </div>
          <p className="text-gray-700 font-medium text-sm hover:text-cyan-600 cursor-pointer">
            Cars
          </p>
          <p className="text-gray-700 font-medium text-sm hover:text-cyan-600 cursor-pointer">
            Motorcycle
          </p>
          <p className="text-gray-700 font-medium text-sm hover:text-cyan-600 cursor-pointer">
            Mobile Phones
          </p>
          <p className="text-gray-700 font-medium text-sm hover:text-cyan-600 cursor-pointer">
            For Sale: Houses & Apartments
          </p>
          <p className="text-gray-700 font-medium text-sm hover:text-cyan-600 cursor-pointer">
            Scooters
          </p>
          <p className="text-gray-700 font-medium text-sm hover:text-cyan-600 cursor-pointer">
            Commercial & Other Vehicles
          </p>
          <p className="text-gray-700 font-medium text-sm hover:text-cyan-600 cursor-pointer">
            For Rent: Houses & Apartments
          </p>
        </div>
      </div>
    </>
  );
};

export default Category;
