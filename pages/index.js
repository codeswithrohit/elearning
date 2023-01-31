/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";



export default function Home() {
  const [datas, setDatas] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
         `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setDatas(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setDatas(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };

  
  return (
  <div>
      <Head>
        <title>Creative</title>
        <meta name="Creative" content="Web Mall (India) Pvt. Ltd." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

 
      <div className="container">
      <h1 className='text-orange-600 m-10 font-bold text-2xl text-center'>
          My Small Project for Creative Web Mall (India) Pvt. Ltd.
      </h1>
        
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 row m-2">
        {datas.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h6 className="card-subtitle mb-2 text-muted text-center text-pink-500">
                    {item.email}
                  </h6>
                  <p className="card-text font-semibold">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={4}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"flex justify-center"}
        pageClassName={"flex list-style-none"}
        pageLinkClassName={"page-link text-xl py-3 px-6 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"}
        previousClassName={"page-item disabled"}
        previousLinkClassName={"page-link text-xl py-3 px-6 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-500 pointer-events-none focus:shadow-none"}
        nextClassName={"page-item disabled"}
        nextLinkClassName={"page-link text-xl py-3 px-6 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-500 pointer-events-none focus:shadow-none"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link text-xl py-3 px-6 relative block border-0 bg-transparent outline-none transition-all duration-300 rounded-md text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"}
        activeClassName={"active"}
      />
    </div>







    </div>
  )
}