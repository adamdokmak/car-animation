import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex h-fit py-10 w-full flex-col items-start justify-around gap-5 bg-[#242424] p-5 text-white sm:flex-row sm:items-center md:min-h-fit ">
      <figure className="w-1/4">
        <Image
          alt="logo"
          src={"/carLogo.png"}
          width={1798}
          height={988}
          className="object-cover"
        />
      </figure>
      <div className="flex h-full w-full items-start justify-between md:justify-around">
        <ul className="flex flex-col gap-4 text-sm font-light sm:text-lg lg:text-sm">
          <li className="text-lg font-semibold sm:text-xl lg:text-lg">
            About us
          </li>
          <li>News</li>
          <li>Careers</li>
          <li>Investors</li>
        </ul>
        <ul className="flex flex-col gap-4 text-sm font-light sm:text-lg lg:text-sm">
          <li className="text-lg font-semibold sm:text-xl lg:text-lg">
            Get help
          </li>
          <li>Order status</li>
          <li>Returns</li>
          <li>Contact Us</li>
        </ul>
        <ul className="flex flex-col gap-4 text-sm font-light sm:text-lg lg:text-sm">
          <li className="text-lg font-semibold sm:text-xl lg:text-lg">
            Find a store
          </li>
          <li>Map</li>
        </ul>
      </div>
    </footer>
  );
}
