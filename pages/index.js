/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ITEMS_PER_PAGE = 10

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    // Fetch data from API on component mount
    fetchData(currentPage)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchData = async (page) => {
    const offset = (page - 1) * ITEMS_PER_PAGE
    const res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${offset}&_limit=${ITEMS_PER_PAGE}`)
    setItems(res.data)
    setTotalPages(Math.ceil(res.headers['x-total-count'] / ITEMS_PER_PAGE))
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    fetchData(page)
  }

  
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
      <div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 pt-4'>
              {items.map((item) => (
                  <div
                      key={item.id}
                      className='border shadow-lg rounded-lg hover:scale-105 duration-300'
                  >

                      <div className='flex justify-between px-2 py-4'>
                          <p className='font-bold text-pink-500'>{item.title}</p>

                      </div>
                  </div>
              ))}
          </div>

      <div class="flex space-x-16 justify-center mt-10">
        {currentPage > 1 && (
          <button class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}

<span>Page No. {currentPage} of {totalPages}</span>

        {currentPage < totalPages && (
          <button  class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
    </div>







    </div>
  )
}
