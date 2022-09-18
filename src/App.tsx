import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/Login';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import { NavComponent } from './components/nav';

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <NavComponent/>
          <Routes>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/login" element={<LogIn/>}/>
              <Route path="/" element={<Main />}/>
          </Routes>
      </BrowserRouter>

  );
};

export default App;
