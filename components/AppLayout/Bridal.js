import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser , faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoImage from "../../public/logo2.png";
import Card from './Card';
import './Card.module.css';
import Cart from '../Cart';
import CartIcon from '../CartIcon';

export const Bridal = ({ children }) => {

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
              <Card title="" link="/card1" imgSrc="/b1.webp">
              Heavily embellished traditional angrakha with intricate hand craftsmanship of making it a highly flattering bridal dress dabka, naqshi, sequins, gotah and crystals.
             <br/>
             Rs.400000
              </Card>
             <Card title="" link="/card2" imgSrc="/b2.webp">
            Pure exclusively woven raw silk, with an intricately hand embellished neckline and also with kalidaar features added volume making it a highly flattering bridal dress.
             <br/>
             Rs.450000
              </Card>

              <Card title="" link="/card3"  imgSrc="/b3.webp">
              Angrakha with intricate hand craftsmanship of dabka, naqshi, in a gorgeous tye dye coral hues. This kalidaar features added volume making it a highly flattering.
             <br/>
             Rs.350000
              </Card>
              <Card title="" link="/card4" imgSrc="/b4.webp">
              An enchanting brocade canvas makes a comeback this season in a gorgeous tye dye coral hues. This kalidaar features added volume making it a highly flattering silhouette
             <br/>
             Rs.780000
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
