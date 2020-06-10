import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import LichSuGiaoDich from '../components/DashBoard/LichSuGiaoDich';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <LichSuGiaoDich />
    </PanelFrame>
  );
};

export default App;
