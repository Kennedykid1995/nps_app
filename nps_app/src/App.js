import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; 
import {Link} from 'react-router-dom'; 
import styled from 'styled-components'

const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=26cf207a661b4974a24e4a4ae5259757'

const NewsCard = styled.div`
  width: 300px; 
  height: 150px; 
  border: 1px solid black;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  text-align: left; 
`
const NewsImg = styled.img`
  width: 125px; 
  height: 125px
  border: 1 px solid red;
  padding: 5px; 
`
const NewsTitle = styled(Link)`
  fontSize: 20px;
  fontWeight: bold;
  color: black; 
  text-decoration: none; 
`

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
    {data.map(article  => (
      //each of the articles should display:
      //image
      //title
      //URL link within the title.
      <NewsCard key={article.publishedAt}>
        <NewsImg src={article.urlToImage} />
        <section>
        <NewsTitle to={article.url}>{article.title}</NewsTitle>
        </section>
      </NewsCard>
    ))}
    </div> 
  );
}

export default App;
