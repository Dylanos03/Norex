"use client";

import { redirect } from "next/navigation";
import ProfileImage from "../global/profileImg";
import { useSession } from "next-auth/react";

function ProfileInfo() {
  const { data: session } = useSession();
  if (!session) redirect("/");
  return (
    <div className="flex justify-center items-center gap-4">
      <div>
        <ProfileImage large={true} imageSrc={session.user?.image!} />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{session.user?.name}</h1>
        <p>
          Coins in portfolio: <span>10</span>
        </p>
        <p>
          Overall price change: <span>-4%</span>
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo;
