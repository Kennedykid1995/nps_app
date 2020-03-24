import React, {useState, useEffect} from 'react';
import MainHeadline from './components/mainHeadline'; 
import FourHeadlines from './components/fourHeadlines'; 
import BigHeadline from './components/bigHeadline'; 
import ScrollSection from './components/scrollSection'
const App = () => {
  return (
    <div className="App">
    <MainHeadline />
    <FourHeadlines />
    <BigHeadline />
    <ScrollSection />
    </div> 
  );
}

export default App;
