import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import ChuyenKhoan4 from '../components/DashBoard/ChuyenKhoan4';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <ChuyenKhoan4 />
    </PanelFrame>
  );
};

export default App;
