import { useRouter } from "next/router";
import React from "react";
import usePost from "../../hooks/usePost";
import { ClipLoader } from "react-spinners";
import Header from "../../Components/Header";
import PostItem from "../../Components/posts/PostItem";
import Form from "../../Components/Form";
import CommentFeed from "../../Components/posts/CommentFeed";

type Props = {};

function PostView({}: Props) {
  const router = useRouter();
  const { postId } = router.query;

  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
      </div>
    );
  }
  return (
    <>
      <Header label="Tweet" showBackArrow />
      <PostItem data={fetchedPost} />
      <Form
        postId={postId as string}
        isComment
        placeholder="Tweet your reply"
      />
      <CommentFeed comments={fetchedPost?.comments} />
    </>
  );
}

export default PostView;
