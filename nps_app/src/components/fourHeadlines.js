import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=26cf207a661b4974a24e4a4ae5259757'

const Sec = styled.div`
    margin-top: 50px; 
`
const NewsCard = styled.div`
  width: auto; 
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center; 
  text-align: left; 
  margin: 10px 0; 
`
const NewsTitle = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: black; 
  text-decoration: none; 
`
const ImgSec = styled.section`
    width: 45%;
`
const NewsImg = styled.img`
    width: 100%; 
`
const NewsSec = styled.section`
    width: 55%; 
    margin-left: 5px;  
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
        <Sec>
            {data.slice(1, 5).map(article => (
                //each of the articles should display:
                //image
                //title
                //URL link within the title.
                <NewsCard key={article.publishedAt}>
                    <ImgSec>
                        <NewsImg src={article.urlToImage} />
                    </ImgSec>
                    <NewsSec>
                        <NewsTitle to={article.url}>{article.title}</NewsTitle>
                    </NewsSec>
                </NewsCard>
            ))}
        </Sec>
    )

}
export default FourHeadlines