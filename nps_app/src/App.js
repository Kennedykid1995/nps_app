import React, {useState, useEffect} from 'react';
import MainHeadline from './components/mainHeadline'; 
import FourHeadlines from './components/fourHeadlines'; 
import BigHeadline from './components/bigHeadline'; 
import ScrollSection from './components/scrollSection';
import styled from 'styled-components';

const TopSection = styled.div`
  display: flex; 
  flex-direction: row;
`
const App = () => {
  return (
    <div className="App">
    <TopSection>
    <MainHeadline />
    <FourHeadlines />
    </TopSection>
    <BigHeadline />
    <ScrollSection />
    </div> 
  );
}

export default App;
