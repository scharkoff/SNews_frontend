import React from 'react';
import axios from '@/configs/axios';
import FullPost from '@/widgets/FullPost';
import { MainLayout } from '../../layouts/MainLayout/index';
import { PostDTO } from '@/entities/Post/types/post-dto';
import { GetServerSidePropsContext } from 'next';
import { CommentDTO } from '@/entities/Comment/types/comment-dto';

export interface PostProps {
  post: PostDTO;
  comments: CommentDTO[];
  lastComments: CommentDTO[];
}

export default function Post({ post, comments, lastComments }: PostProps) {
  return (
    <MainLayout lastComments={lastComments}>
      <FullPost post={post} comments={comments} />
    </MainLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const post = await axios.get(`/posts/${context?.params?.id}`);
  const comments = await axios.get(`/comments/post/${context?.params?.id}`);
  const lastComments = await axios.get('/comments/lasts/5');

  return {
    props: {
      post: post.data,
      comments: comments.data,
      lastComments: lastComments.data,
    },
  };
}
