import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <><div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4'>
              {posts.map(post => (
                  <div
                      key={post._id}
                      className='border shadow-lg rounded-lg hover:scale-105 duration-300'
                  >

                      <div className='flex justify-between px-2 py-4'>
                          <p className='font-bold text-pink-500'>{post.title}</p>

                      </div>
                  </div>
              ))}
          </div></>
  
  );
};

export default Posts;