import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import NhapRutTien from '../components/DashBoard/NhapRutTien';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <NhapRutTien />
    </PanelFrame>
  );
};

export default App;
