import Head from "next/head";

type TSettings = {
  title: string;
  description: string;
  link: string;
};

export default function Meta({ title, description, link }: TSettings) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href={link} type="image/x-icon" />
      <meta name="description" content={description} />
    </Head>
  );
}
