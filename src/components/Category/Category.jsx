import React from "react";
import "../Category/Category.css";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Category = () => {
  return (
    <div className="justify-between bg-white flex px-24 py-2 mt-2 c-shadow">
      <div className="flex">
        <h1 className="font-semibold cursor-pointer">ALL CATEGORY</h1>
        <ChevronDownIcon className="size-6 ml-1 cursor-pointer"/>
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
        Commercial & Other Verhicles
      </p>
      <p className="text-gray-700 font-medium text-sm hover:text-cyan-600 cursor-pointer">
        For Rent: Houses & Apartments
      </p>
    </div>
  );
};

export default Category;
