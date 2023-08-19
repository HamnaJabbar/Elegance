import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import LogoImage from "../../public/logo2.png";
import ImageCarousel from "./ImageCarousel"; 


export const AppLayout = ({ children }) => {
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
          <div onClick={toggleUserInfo}>
            <FontAwesomeIcon
              icon={faUser}
              className="text-yellow-500 cursor-pointer"
            />
            {showUserInfo && (
              <div className="bg-white p-2 absolute top-10 right-0 rounded-md shadow-md">
                <div className="flex flex-col items-center text-gray-800 font-bold">
                  <Image
                    src={user.picture}
                    alt={user.name}
                    height={50}
                    width={50}
                    className="rounded-full mb-2"
                  />
                  <div>{user.name}</div>
                  <div>{user.email}</div>
                </div>
                <Link
                  href="/api/auth/logout"
                  className="text-gray-500 text-sm mt-2"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};
