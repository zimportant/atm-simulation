import { Grid } from '@material-ui/core';
import { NextPage } from 'next';
import React, { useState } from 'react';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import ControlComponent from '../components/ControlComponent';
import { ControlItemDescription } from '../components/ControlItem';
import PanelFrame from '../components/PanelFrame';

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);

  return <PanelFrame selectedID={7} />;
};

export default App;
