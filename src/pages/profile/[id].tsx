import { MainLayout } from '@/layouts/MainLayout';
import React from 'react';
import UserProfile from '../../widgets/UserProfile/index';

interface ProfilePageProps {
  userId: number;
}

export default function Profile({ userId }: ProfilePageProps) {
  return (
    <MainLayout>
      <UserProfile userId={userId} />
    </MainLayout>
  );
}
