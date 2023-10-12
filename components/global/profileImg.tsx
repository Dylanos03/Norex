import Link from "next/link";
import Image from "next/image";

function ProfileImage({
  imageSrc,
  large,
}: {
  imageSrc: string;
  large: boolean;
}) {
  return (
    <Link href="/">
      <Image
        src={imageSrc}
        alt={"profile"}
        className={large ? "w-64 rounded-full" : "w-6 rounded-full"}
      />
    </Link>
  );
}

export default ProfileImage;
