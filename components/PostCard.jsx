import Link from 'next/link';
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <section className="flex flex-col gap-3 w-[200px] flex-grow flex-shrink-0 bg-white shadow-md p-3 rounded-md">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </h2>
        <div className="text-gray-500 text-sm">{post.date}</div>
      </div>
      <p>{post.description}</p>
    </section>
  );
};

export default PostCard;
