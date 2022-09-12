import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SignUp/>}/>
              <Route path="/login" element={<LogIn/>}/>
          </Routes>
      </BrowserRouter>

  );
};

export default App;
