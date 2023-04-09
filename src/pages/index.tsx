import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { Post } from '../entities/Post/index';
import axios from '@/configs/axios';
import { PostDTO } from '@/entities/Post/types/post-dto';

interface HomeProps {
  posts: PostDTO[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <MainLayout>
        {posts.map((post: PostDTO) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            views={post.views}
            tags={post.tags}
            createdAt={post.createdAt}
            updatedAt={post.updatedAt}
            user={post.user}
          />
        ))}
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await axios.get('/posts');

  return {
    props: {
      posts: posts.data,
    },
  };
}
