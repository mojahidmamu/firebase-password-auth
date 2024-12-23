import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';
import Resister from './Component/Resister/Resister';

const Ma = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Resister></Resister>
    </div>
  );
};

export default Ma;