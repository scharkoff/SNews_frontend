import React from 'react';
import axios from '@/configs/axios';
import { MainLayout } from '@/layouts/MainLayout';
import { Post } from '../entities/Post/index';
import { PostDTO } from '@/entities/Post/types/post-dto';
import { CommentDTO } from '@/entities/Comment/types/comment-dto';

interface HomeProps {
  posts: PostDTO[];
  lastComments: CommentDTO[];
}

export default function Home({ posts, lastComments }: HomeProps) {
  return (
    <>
      <MainLayout lastComments={lastComments}>
        {posts?.map((post: PostDTO) => (
          <Post
            key={post?.id}
            id={post?.id}
            title={post?.title}
            body={post?.body}
            views={post?.views}
            tags={post?.tags}
            createdAt={post?.createdAt}
            updatedAt={post?.updatedAt}
            user={post?.user}
          />
        ))}
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await axios.get('/posts');
  const lastComments = await axios.get('/comments/lasts/5');

  return {
    props: {
      posts: posts.data,
      lastComments: lastComments.data,
    },
  };
}
