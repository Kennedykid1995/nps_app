import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=26cf207a661b4974a24e4a4ae5259757'

const NewsCard = styled.div`
  width: auto; 
  border: 1px solid blue;
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  text-align: left; 
  margin: 10px; 
`
const NewsTitle = styled(Link)`
  fontSize: 20px;
  fontWeight: bold;
  color: black; 
  text-decoration: none; 
`

const FourHeadlines = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data.articles);
                console.log(res.data.articles)
            });
    }, [])
    return (
        <div>
            {data.slice(1, 5).map(article => (
                //each of the articles should display:
                //image
                //title
                //URL link within the title.
                <NewsCard key={article.publishedAt}>
                    <section>
                        <NewsTitle to={article.url}>{article.title}</NewsTitle>
                    </section>
                </NewsCard>
            ))}
            </div>
    )

}
export default FourHeadlines