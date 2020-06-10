import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import DoiMaPin3 from '../components/DashBoard/DoiMaPin3';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <DoiMaPin3 />
    </PanelFrame>
  );
};

export default App;
