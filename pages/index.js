/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Posts from '../components/Posts';
import Pagination from '../components/Pagination';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  
  return (
  <div>
      <Head>
        <title>Creative</title>
        <meta name="Creative" content="Web Mall (India) Pvt. Ltd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

	  







 
    <div className='container mt-5'>
      <h1 className='text-orange-600 m-10 font-bold text-2xl text-center'>
          My Small Project for Creative Web Mall (India) Pvt. Ltd.
      </h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>







    </div>
  )
}
