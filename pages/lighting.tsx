import { Grid } from '@material-ui/core';
import { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import ControlComponent from '../components/ControlComponent';
import { ControlItemDescription } from '../components/ControlItem';
import LightingContent, { LightingContentProps } from '../components/Lighting/LightingContent';
import { LightingState } from '../components/Lighting/LightingSetting';
import PanelFrame from '../components/PanelFrame';

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);

  return <PanelFrame selectedID={2} />;
};

export default App;
