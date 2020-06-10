import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import ChuyenKhoan from '../components/DashBoard/ChuyenKhoan';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <ChuyenKhoan />
    </PanelFrame>
  );
};

export default App;
