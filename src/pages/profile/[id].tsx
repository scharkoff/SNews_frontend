import React from 'react';
import axios from '@/configs/axios';
import UserProfile from '@/widgets/UserProfile';
import { MainLayout } from '@/layouts/MainLayout';
import { PostDTO } from '@/entities/Post/types/post-dto';
import { CommentDTO } from '@/entities/Comment/types/comment-dto';

interface ProfilePageProps {
  posts: PostDTO[];
  comments: CommentDTO[];
}

export default function Profile({ posts, comments }: ProfilePageProps) {
  return (
    <MainLayout>
      <UserProfile posts={posts} comments={comments} />
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const posts = await axios.get(`/posts/user/${1}`);
  const comments = await axios.get(`/comments/user/${1}`);

  return {
    props: {
      posts: posts.data,
      comments: comments.data,
    },
  };
}
