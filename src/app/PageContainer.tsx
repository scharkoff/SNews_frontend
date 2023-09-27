import Head from 'next/head';
import React from 'react';

export interface PageContainerProps {
  keywords: string[];
  description: string;
  title: string;
  children: React.ReactElement;
}

export default function PageContainer({
  keywords,
  description,
  title,
  children,
}: PageContainerProps) {
  return (
    <>
      <Head>
        <meta name="keywords" content={keywords.join(',')} />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
}
