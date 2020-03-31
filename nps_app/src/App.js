import React, {useState, useEffect} from 'react';
import TopBar from './components/TopBar'; 
import MainHeadline from './components/mainHeadline'; 
import FourHeadlines from './components/fourHeadlines'; 
import BigHeadline from './components/bigHeadline'; 
import ScrollSection from './components/scrollSection';
import styled from 'styled-components';

const App = () => {
  return (
    <div className="App">
    <TopBar/>
    <MainHeadline />
    <FourHeadlines />
    <BigHeadline />
    <ScrollSection />
    </div> 
  );
}

export default App;
