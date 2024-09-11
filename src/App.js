import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Header from './components/Header/Header';
import Singin from './pages/Sing-in/Sing-in';
import User from './pages/User/User';



function App() {
  return (
    
    <Router>
      
    <div className="App">
    
      <Header />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/sign-in' element={<Singin />}/>
         <Route path='/user' element={<User />}/>
         

      </Routes>
      
      <Footer />
     
    </div>
    
    </Router>
    
  );
}

export default App;
