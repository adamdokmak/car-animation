import Image from "next/image";
import { CartIcon } from "@/components/svgFiles";

export default function Nav() {
    return (
      <nav className="flex h-fit w-full items-center justify-between px-10 py-5 fixed top-0 z-50 bg-[#ECEDEE]">
        <figure className="w-16">
          <Image
            alt="logo"
            src={"/carLogo.png"}
            width={1798}
            height={988}
            className="object-cover"
          />
        </figure>
        <div className='flex justify-end items-center w-full gap-10'>
          <ul className='hidden sm:flex justify-center items-center gap-4 text-black text-xs'>
            <li>Home</li>
            <li>About up</li>
            <li>Preview</li>
            <li>Features</li>
            <li>Sign up</li>
          </ul>
        <CartIcon />
        </div>
      </nav>
    )
}