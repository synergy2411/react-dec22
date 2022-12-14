import React, { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Expenses from './Components/Expenses/Expenses';
import AuthContext from './context/authContext';
import './App.css';
import Auth from './Components/Auth/Auth';
import ParentDemo from './Components/Demo/HooksDemo/ParentDemo';
import Header from './Components/Header/Header';
import Products, { Overview, Specification } from './Components/Products/Products';

const UseReducerDemo = React.lazy(() => import('./Components/Demo/HooksDemo/UseReducerDemo'))
const LazyAuth = React.lazy(() => import("./Components/Auth/Auth"))

function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
  // const routeConfig = [
  //   {
  //     id: "r001",
  //     path: "/",
  //     element: () => <p>Expenses loaded</p>
  //   }
  // ]

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn: (val: boolean) => { setLoggedIn(val) }, token: null }}>
      <div className="container">
        <Header />

        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            {/* {routeConfig.map(route => <Route path={route.path} key={route.id} element={() => route.element} />)} */}
            <Route path="/" element={<Expenses />} />
            <Route path='/auth' element={<LazyAuth />} />
            <Route path='/hooks' element={<ParentDemo />} />
            <Route path='/reducer' element={<UseReducerDemo />} />
            {/* <Route path='/products/*' element={<Products />}> */}
            <Route path='/products' element={<Products />}>
              <Route path='/products/:productId/:qty/overview' element={<Overview />} />
              <Route path='/products/specification' element={<Specification />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
