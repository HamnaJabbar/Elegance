import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser , faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoImage from "../../public/logo2.png";
import ImageCarousel from "./ImageCarousel"; 
import Cart from '../Cart';
import CartIcon from '../CartIcon';


export const AppLayout = ({ children }) => {


  return (
    <div className="h-screen max-h-screen flex flex-col">
      <header className="bg-white-800 p-2 fixed w-full top-0 z-50 flex justify-between items-center">
        <div className="mx-auto">
          <div className="flex items-center flex-col gap-2">
            <Image src={LogoImage} alt="Logo" width={150} height={100} />
           
            <div className="flex gap-2 mt-2">
              <Link href="/" className="text-gray-800">
                HOME
              </Link>
              <Link href="/post/ready" className="text-gray-800">
                Ready to wear
              </Link>
              <Link href="/post/bridal" className="text-gray-800">
                Bridal
              </Link>
              <Link href="/post/scarfs" className="text-gray-800">
                Scarfs
              </Link>
              <Link href="/post/about" className="text-gray-800">
                About Us
              </Link>
            </div>
            <div className="mt-4">
              <ImageCarousel />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          
          <CartIcon />
         
          </div>
          
        
      </header>
      {children}
      <Cart/>
    </div>
  );
};
