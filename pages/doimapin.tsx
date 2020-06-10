import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import DoiMaPin from '../components/DashBoard/DoiMaPin';

const App: NextPage = () => {
  return (
    <PanelFrame>
      <DoiMaPin />
    </PanelFrame>
  );
};

export default App;
