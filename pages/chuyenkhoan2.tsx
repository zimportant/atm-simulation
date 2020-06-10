import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import ChuyenKhoan2 from '../components/DashBoard/ChuyenKhoan2';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <ChuyenKhoan2 />
    </PanelFrame>
  );
};

export default App;
