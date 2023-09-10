import React from 'react';
import axios from '@/configs/axios';
import FullPost from '@/widgets/FullPost';
import { MainLayout } from '../../layouts/MainLayout/index';
import { PostDTO } from '@/entities/Post/types/post-dto';
import { GetServerSidePropsContext } from 'next';

export interface PostProps {
  post: PostDTO;
}

export default function Post({ post }: PostProps) {
  return (
    <MainLayout>
      <FullPost post={post} />
    </MainLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const post = await axios.get(`/posts/${context?.params?.id}`);

  return {
    props: {
      post: post.data,
    },
  };
}
