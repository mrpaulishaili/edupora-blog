import Link from 'next/link';
import { getAllPublished } from '../lib/notion';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <main>
      <div className={styles.cards}>
        {posts.map((post, index) => (
          <section
            key={index}
            className="flex flex-col gap-3 w-[200px] flex-grow flex-shrink-0 bg-white shadow-md p-3 rounded-md"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold">
                <Link href={`/posts/${post.slug}`}>
                  <a className={styles.action}>{post.title}</a>
                </Link>
              </h2>
              <div className="text-gray-500 text-sm">{post.date}</div>
            </div>
            <p>{post.description}</p>
          </section>
        ))}
      </div>
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
