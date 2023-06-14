import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyLayout from './components/MyLayout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
