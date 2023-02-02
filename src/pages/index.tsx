import { MainLayout } from "@/layouts/MainLayout";
import { Post } from "../components/Post/index";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Post />
        <Post />
        <Post />
      </MainLayout>
    </>
  );
}
