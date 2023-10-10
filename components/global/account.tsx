"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AccountOptions() {
  const { data: session } = useSession();
  if (session) {
    return <button onClick={() => signOut()}>Sign Out</button>;
  }
  return <button onClick={() => signIn()}>Sign In</button>;
}
