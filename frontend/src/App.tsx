import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Expenses from './Components/Expenses/Expenses';
import AuthContext from './context/authContext';
import './App.css';
import Auth from './Components/Auth/Auth';
import UseReducerDemo from './Components/Demo/HooksDemo/UseReducerDemo';
import ParentDemo from './Components/Demo/HooksDemo/ParentDemo';
import Header from './Components/Header/Header';


function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn: (val: boolean) => { setLoggedIn(val) }, token: null }}>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<Expenses />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/hooks' element={<ParentDemo />} />
          <Route path='/reducer' element={<UseReducerDemo />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
