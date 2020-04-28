import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import Router from 'next/router';
import PanelFrame from '../components/PanelFrame';
import DashBoard from '../components/DashBoard/DashBoard';

const App: NextPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLogin = Boolean(window.localStorage.getItem('ISLOGIN'));
      if (!isLogin) {
        Router.push('/dangnhap');
      }
    }
  }, []);
  return (
    <PanelFrame>
      <DashBoard />
    </PanelFrame>
  );
};

export default App;
