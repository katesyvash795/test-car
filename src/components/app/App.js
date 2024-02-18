
import React, { Suspense } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Nav, Link } from './AppStyled';

import { Home } from '../pages/Home';
import { Catalog } from '../pages/Catalog';

import { Favourites } from 'components/pages/Favorite';

export const App =()=> {



  return (
    <div className="App">
      <Nav>
        <Link to="/home" end>
          Home
        </Link>
        <Link to="/catalog"> 
          Catalog
        </Link>
        <Link to="/favorite">
          Favorite
        </Link>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorite" element={<Favourites/>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
