import { useRouter } from "next/router";
import React from "react";
import { ClipLoader } from "react-spinners";
import Header from "../../Components/Header";
import PostFeed from "../../Components/posts/PostFeed";
import UserBio from "../../Components/users/UserBio";
import UserHero from "../../Components/users/UserHero";
import useUser from "../../hooks/useUser";

type Props = {};

const UserView = (props: Props) => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }
  return (
    <>
      <Header showBackArrow label={fetchedUser?.name} />
      <UserHero userId={userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId={userId as string} />
    </>
  );
};

export default UserView;
