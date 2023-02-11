import React from 'react';
import PostCard from './PostCard';

const Sect2 = ({ data }) => {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((value, index) => (
          <PostCard post={value} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Sect2;
