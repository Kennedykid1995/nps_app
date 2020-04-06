import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=26cf207a661b4974a24e4a4ae5259757'

const Sec = styled.div`

`
const SecCol = styled.div`
    display: flex;
    flex-direction: row;
 
`
const NewsCardCol = styled.div`
  width: auto; 
  display: flex; 
  flex-direction: column; 
  align-items: flex-start; 
  text-align: left; 
  padding: 10px;
`

const NewsCard = styled.div`
  width: auto; 
  display: flex; 
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center; 
  text-align: left; 
  padding: 10px; 
`
const NewsTitleTop = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: black; 
  text-decoration: none; 
`
const NewsTitle = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  color: black; 
  text-decoration: none; 
`
const ImgSecTop = styled.section`
    width: 100%;
`
const ImgSec = styled.section`
    width: 45%;
`
const NewsImgTop = styled.img`
    width: 100%; 
`
const NewsImg = styled.img`
    width: 100%; 
`
const NewsSecTop = styled.section`
    width: 100%; 
    margin-left: 5px;  
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
        <div>
        <SecCol>
            {data.slice(1, 3).map(article => (
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
        <Sec>
            {data.slice(3, 5).map(article => (
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
        </div>
    )

}
export default FourHeadlines