import { useState } from 'react';
import Expenses from './Components/Expenses/Expenses';
import AuthContext from './context/authContext';
import './App.css';
import Auth from './Components/Auth/Auth';
import UseReducerDemo from './Components/Demo/HooksDemo/UseReducerDemo';


function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn: (val: boolean) => { setLoggedIn(val) }, token: null }}>
      <div className="container">
        <h1>Hello React</h1>
        {/* <Auth /> */}

        <UseReducerDemo />

        {/* <Expenses /> */}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
