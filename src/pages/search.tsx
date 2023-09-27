import axios from '@/configs/axios';
import { MainLayout } from '@/layouts/MainLayout';
import { Post } from '../entities/Post/index';
import { CommentDTO } from '@/entities/Comment/types/comment-dto';
import { SearchResultDTO } from '@/stores/SearchStore';
import { GetServerSidePropsContext } from 'next';

interface SearchPageProps {
  searchResults: SearchResultDTO;
  lastComments: CommentDTO[];
  query: string;
}

export default function SearchPage({
  searchResults,
  lastComments,
  query,
}: SearchPageProps) {
  return (
    <MainLayout lastComments={lastComments}>
      {searchResults?.items?.length == 0 && (
        <div
          style={{ textAlign: 'center', margin: '10px 0', fontStyle: 'italic' }}
        >
          По запросу <b>&laquo;{query}&raquo;</b> ничего не найдено
        </div>
      )}

      {searchResults?.items?.length != 0 && (
        <div
          style={{ textAlign: 'center', margin: '10px 0', fontStyle: 'italic' }}
        >
          Результат по запросу <b>&laquo;{query}&raquo;</b>
        </div>
      )}

      {searchResults?.items?.map((post) => (
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
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const title = context.query.title || '';

  const searchResults = await axios.get(`/posts/search?title=${title}`);
  const lastComments = await axios.get('/comments/lasts/5');

  return {
    props: {
      searchResults: searchResults.data,
      lastComments: lastComments.data,
      query: title,
    },
  };
}
