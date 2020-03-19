import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 

const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=26cf207a661b4974a24e4a4ae5259757'

const App = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setData(res.data.articles);
      console.log(res.data.articles)
    });
  }, [])
  console.log(data)

  return (
    <div className="App">
    NEWS APP
    {data.map(article => (
      //each of the articles should display:
      //image
      //title
      //URL link within the title.
      <div key={article.publishedAt}>
        <img src={article.urlToImage} />
        <Link to={article.url}>{article.title}</Link>
      </div>
    ))}
    </div> 
  );
}

export default App;
