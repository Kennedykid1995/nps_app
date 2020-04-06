import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=26cf207a661b4974a24e4a4ae5259757'

const SecCol = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap; 
`
const NewsCardCol = styled.div`
  width: 45%; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  text-align: left; 
  padding: 10px;
`
const NewsTitleTop = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: black; 
  text-decoration: none; 
`
const ImgSecTop = styled.section`
    width: 100%;
`
const NewsImgTop = styled.img`
    width: 100%;
    overflow: hidden;
`
const NewsSecTop = styled.section`
    width: 100%; 
    margin-left: 5px;
`

const ScrollSection = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data.articles);
                console.log(res.data.articles)
            });
    }, [])
    return (
        <SecCol>
            {data.slice(6).map(article => (
                //each of the articles should display:
                //image
                //title
                //URL link within the title.
                <NewsCardCol key={article.publishedAt}>
                        <ImgSecTop>
                            <NewsImgTop src={article.urlToImage} />
                        </ImgSecTop>
                        <NewsSecTop>
                            <NewsTitleTop to={article.url}>{article.title}</NewsTitleTop>
                        </NewsSecTop>
                    </NewsCardCol>
            ))}
        </SecCol>
    )

}

export default ScrollSection; 