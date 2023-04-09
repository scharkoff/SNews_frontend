import React from 'react';
import { MainLayout } from '../../layouts/MainLayout/index';
import { FullPost } from '@/components/FullPost';

export default function Home() {
  return (
    <MainLayout contentFullWidth={false}>
      <FullPost />
    </MainLayout>
  );
}
