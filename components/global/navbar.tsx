import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import AccountOptions from "./account";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-around p-2 items-center fixed bg-white z-10">
        <Link href={"/"}>
          <h1 className="font-extrabold text-3xl">Norex</h1>
        </Link>

        <div className="flex gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/search"}>Search</Link>
          <Link href={"/"}>NFTs</Link>
          <Link href={"/"}>Account</Link>
          <AccountOptions />
        </div>
      </div>
    </>
  );
}

export default Navbar;
