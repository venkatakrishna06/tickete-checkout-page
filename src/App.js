
import React from 'react';
import NavBar from './Components/NavBar';
import HelpPage from './Pages/HelpPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';


function App() {
  return (
   <div className='App'>

<NavBar></NavBar>
<HomePage></HomePage>
<HelpPage></HelpPage>
<Footer></Footer>


   </div>
  );
}

export default App;
