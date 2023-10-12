"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import ProfileImage from "./profileImg";
import Link from "next/link";

export default function AccountOptions() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex gap-2">
        <Link href={"/profile"}>Profile</Link>
        <ProfileImage imageSrc={session.user?.image!} large={false} />
      </div>
    );
  }
  return <button onClick={() => signIn()}>Sign In</button>;
}
