import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src='/logo.png'
           alt="logo" priority
           width={50}
           height={50} />
        </Link>
        </div>
        <p className="text-slate-600"><span>&#169;</span>2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;