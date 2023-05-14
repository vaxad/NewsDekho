
import './App.css';

import React, {  useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



const App=()=>{
  

  const[progress,setProgress]=useState(0);
  let apiKey=process.env.REACT_APP_NEWS_API;
  
  // setProgress=(prog)=>{
  //     setProgress(prog);
  // }
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#ffffff'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route exact path="" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={3} country="IN" category="general"/>}></Route>
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={10} country="IN" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={10} country="IN" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={10} country="IN" category="health"/>}></Route>
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={10} country="IN" category="science"/>}></Route>
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={10} country="IN" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={10} country="IN" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  
}

export default App