import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import Agency from '../pages/Agency';
import CreateAgency from '../pages/Agency/Create';
import AgenciesList from '../pages/Agency/List';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRoutes = () => {
  const { userIsLogged } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {userIsLogged ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='agency' element={<Agency />}>
              <Route path=':agencyId' element={<>temp1</>} />
              <Route path='new' element={<CreateAgency />} />
              <Route index element={<AgenciesList />} />
            </Route>
          </>
        ) : (
          <Route path='/' element={<Login />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
