import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import useUser from "../hooks/useUser";

type AvatarProps = {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
};

function Avatar({ userId, isLarge, hasBorder }: AvatarProps) {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();

      const url = `/users/${userId}`;
      router.push(url);
    },
    [router, userId]
  );

  return (
    <div
      className={`${hasBorder ? "border-4 border-black" : ""}
  ${isLarge ? "h-32 w-32" : "h-12 w-12"} 
    rounded-full hover:opacity-90 transition cursor-pointer relative
  `}
    >
      <Image
        fill
        style={{ objectFit: "cover", borderRadius: "100%" }}
        alt="Avatar"
        onClick={onClick}
        src={fetchedUser?.profileImage || "/images/placeholder.jpg"}
      />
    </div>
  );
}

export default Avatar;
