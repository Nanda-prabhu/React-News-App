import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import axios from 'axios';

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`)
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
        console.log(news);
      })


  },[]);
  
  return (

    <div className="App">

      <Header />
      <div className="wrapper">
        <p className='text-pa'>Recent news</p>
        <div className="card-wrapper">
        {
          news.map(val => (
            <Card image={val.urlToImage} title={val.title} desc={val.content}/>
          ))
        }
         
        </div>
      </div>

    </div>
  )
}

export default App




/* <p>{import.meta.env.VITE_API_KEY}</p> */




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

// const [count, setCount] = useState(0)

/* <div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
</div> */