import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-around p-2 items-center fixed bg-white z-10">
        <div className="font-extrabold text-3xl">Norex</div>
        <div className="flex gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Home</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
