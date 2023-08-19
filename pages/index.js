import Image from "next/image";
import BgImage from '../public/bg.jpeg';
import Link from "next/link";
import Logo from "../public/logo2.png";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-content items-center relative">
      <Image src={BgImage} alt="bg" fill className="absolute" />
      <div className="relative z-10 text-white px-10 py-5 text-center max-w-screen-sm bg-white-900/90 rounded-md backdrop-blur-sm ml-4">
        <Image src={Logo} alt="logo2" className="mx-auto mb-4" />
        <Link href="/post/new" className="btn">
        Tap to Discover Your Perfect Look with Elegance!➡
        </Link>
      </div>
    </div>
  );
}

