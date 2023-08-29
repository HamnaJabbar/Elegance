import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoImage from "../../public/logo2.png";
import Card from './Card';
import './Card.module.css';
import Cart from '../Cart';
import CartIcon from '../CartIcon';

export const Scarfs = ({ children }) => {
  const { user } = useUser();
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

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
                Ready-to-wear
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
           
           
            <div className="flex gap-2 mt-4">
              <Card title="" link="/card1" imgSrc="/s1.webp">
              PURE PIMA LAWN DIGITAL PRINTED DUPATTA D000178

             <br/>
             RS.1,750.00
              </Card>
             <Card title="" link="/card2" imgSrc="/s2.webp">
             White Embroided DIGITAL PRINTED Scarf D000158
             <br/>
             RS.1,950.00
              </Card>

              <Card title="" link="/card3"  imgSrc="/s3.webp">
              Peech PIMA LAWN DIGITAL PRINTED Scarf D000172
             <br/>
             RS.1,550.00
              </Card>
              <Card title="" link="/card4" imgSrc="/s4.webp">
              Blue PIMA LAWN DIGITAL PRINTED Scarf D000198
             <br/>
             RS.1,850.00
              </Card>
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
