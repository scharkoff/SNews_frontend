import React from 'react';
import axios from '@/configs/axios';
import useUserStore from '@/stores/UserStore';
import { MainLayout } from '@/layouts/MainLayout';
import { Post } from '../entities/Post/index';
import { PostDTO } from '@/entities/Post/types/post-dto';
import { CommentDTO } from '@/entities/Comment/types/comment-dto';
import { observer } from 'mobx-react';
import useSearchStore from '@/stores/SearchStore';
import searchStore from '@/stores/SearchStore';
import PageContainer from '@/app/PageContainer';

interface HomeProps {
  posts: PostDTO[];
  lastComments: CommentDTO[];
}

function Home({ posts, lastComments }: HomeProps) {
  const { items } = searchStore.searchResults;

  return (
    <PageContainer
      title="Главная страница"
      keywords={['SNews, новости, посты, обзоры']}
      description="SNews - новостной блог форум. Делись событиями с друзьями, выкладывай записи, регистрируйся"
    >
      <MainLayout lastComments={lastComments}>
        {items &&
          items?.map((post: PostDTO) => (
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
    </PageContainer>
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

export default observer(Home);
