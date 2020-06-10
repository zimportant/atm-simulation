import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import DichVuKhac from '../components/DashBoard/DichVuKhac';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <DichVuKhac />
    </PanelFrame>
  );
};

export default App;
