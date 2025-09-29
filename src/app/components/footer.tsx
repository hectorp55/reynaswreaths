import React from 'react';
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex w-full bg-(--apricot) text-white p-10">
        <div className="flex flex-col w-1/2 justify-center items-center">
            <span>124 Business Address</span>
            <span>(956)-123-4567</span>
            <span>8am-10pm</span>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center">
            <span>Follow Us</span>
            <div className="flex">
              <span className="text-[40px]"><FaInstagramSquare/></span>
              <span className="text-[40px]"><FaFacebookSquare/></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer