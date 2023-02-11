import Section1 from '../components/Sect1';
import Sect2 from '../components/Sect2';
import Sect3 from '../components/Sect3';
import { getAllPublished } from '../lib/notion';

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <main>
      <Sect3 data={posts} />
      {/* <Section1 data={posts} /> */}
      <Sect2 data={posts} />
    </main>
  );
}
export const getStaticProps = async () => {
  const data = await getAllPublished();
  return {
    props: {
      posts: data,
    },
    revalidate: 60,
  };
};
