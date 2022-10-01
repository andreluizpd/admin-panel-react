import React from 'react';
import { Outlet } from 'react-router-dom';

const Agency = () => {
  return (
    <div>
      <h1>Você está em: Agências</h1>

      <Outlet />
    </div>
  );
};

export default Agency;
