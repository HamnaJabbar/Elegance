import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "../../public/logo2.png";
import styles from "./Footer.module.css"; 

export const Aboutus = ({ children }) => {

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
            <br />
            <br /> 
            <h1 className="text-xl font-semibold">About Us</h1>
            <br />
            <br />
            <p className="text-gray-600">
              Welcome to WearwithElegance. Your one-stop destination for elegant fashion.
            </p> 
            <p className={`${styles.leftAlign} ${styles.aboutPara} px-20`}>
              Launched in 2021, the Elegance has come a long way in such a short span of time. Starting off with only 6 employees, Elegance now has multiple outlets nationally and internationally.
              <br/>
              <br/>
             Our moto is to to break the barriers of the Pakistani fashion industry by making fashion affordable for everyone while maintaining the best quality. Proven time and again since then that their philosophy and their belief in their concepts are widely acceptable and eagerly awaited. Elegance is now a phenomenon, with one of the most innovative ways of brand conceptualization and management.
             <br/>
              <br/>
            Elegance was a fruition of an incredible vision to make a difference in the fashion scene, they both collected money to start the company Elegance, their first-ever boutique was a small cozy outlet in zamzama commercial, consistently packed with crowds.
            <br/>
              <br/>
            Elegance puts in a lot of effort in making their designs different in every season and that's why they stand out. The only Pakistani Brand to introduce new designs every week. The innovative color combinations, motifs, and embroidery styles are an instant hit with women of all genres, the affordable pricing, the high demand for their product results in them being almost always sold out.

            </p>
          </div>
        </div>
      </header>
      {children}
      <footer className={`bg-gray-100 text-center p-4 ${styles.footer}`}>
      Elegance Copyright © WearwithElegance 2021. All rights reserved
      </footer>
    </div>
  );
};
