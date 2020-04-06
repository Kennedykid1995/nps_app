import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=26cf207a661b4974a24e4a4ae5259757'

const NewsCard = styled.div`
  width: auto; 
  height: auto; 
  display: flex; 
  flex-direction: column; 
  justify-content: center; 
  text-align: left; 
`
const NewsImg = styled.img` 
    width: 100%; 
    padding-top: 10px; 
    padding-bottom: 10px;
`
const NewsTitle = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: black; 
  text-decoration: none; 
`
const NewsDescription= styled.p`
    font-size: 15px; 
    color: black;
`
const GrayBox = styled.section`
    background: #e8e8e8; 
    widht: 100%; 
    padding: 10px; 
`

const BigHeadline = () => {
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
            {data.slice(5, 6).map(article => (
                //each of the articles should display:
                //image
                //title
                //URL link within the title.
                <NewsCard key={article.publishedAt}>
                    <section>
                        <NewsTitle to={article.url}>{article.title}</NewsTitle>
                    </section>
                    <NewsImg src={article.urlToImage} />
                    <GrayBox>
                        <NewsDescription>
                            {article.description}
                        </NewsDescription>
                    </GrayBox>
                </NewsCard>
            ))}
        </div>
    )

}

export default BigHeadline; 