import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
// import { UserButton, currentUser } from '@clerk/nextjs'
import UserButton from "@/components/user-button";

const Navbar = async () => {
  const user = await {};
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      {/* <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Star</p>
        <Image
          src="/fuzzieLogo.png"
          width={15}
          height={15}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">nite</p>
      </aside> */}

      <div className="w-32 h-16 overflow-hidden flex justify-center items-center">
        <Image
          src="/starnitelogo.png"
          alt=""
          width={0}
          height={0}
          className="w-[120%] h-[220%]"
          unoptimized
        />
      </div>

      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {user ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {user ? <UserButton /> : null}
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
