import { Grid } from '@material-ui/core';
import { NextPage } from 'next';
import React, { useState } from 'react';
import PanelFrame from '../components/PanelFrame';

const App: NextPage = () => {
  return <PanelFrame selectedID={1} />;
};

export default App;
