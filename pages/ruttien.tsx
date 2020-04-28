import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import RutTien from '../components/DashBoard/RutTien';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <RutTien />
    </PanelFrame>
  );
};

export default App;
