import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import ChuyenKhoan3 from '../components/DashBoard/ChuyenKhoan3';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <ChuyenKhoan3 />
    </PanelFrame>
  );
};

export default App;
