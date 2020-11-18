import Head from 'next/head';
import { useQuery } from 'react-query';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';

const fetchData = () => {
  return {
    data: 1,
  };
};

export async function getStaticProps() {
  const queryCache = new QueryCache();

  await queryCache.prefetchQuery('data', fetchData);

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  };
}
export default function Home() {
  const { data, isFetching } = useQuery('data', fetchData);

  console.log(data);
  if (isFetching) return <div>Loading</div>;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
      {data && data.data}
    </div>
  );
}
