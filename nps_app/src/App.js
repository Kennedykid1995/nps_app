import React, {useState, useEffect} from 'react';
import MainHeadline from './components/mainHeadline'; 
import FourHeadlines from './components/fourHeadlines'; 
import BigHeadline from './components/bigHeadline'; 
const App = () => {
  return (
    <div className="App">
    NEWS APP
    <MainHeadline />
    <FourHeadlines />
    <BigHeadline />
    </div> 
  );
}

export default App;
