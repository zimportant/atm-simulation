import { Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import { ControlItemDescription } from '../components/ControlItem';
import PanelFrame from '../components/PanelFrame';
import { ControlComponentCctv } from '../components/ControlComponent';
import SecurityContent, { SecurityContentProps } from '../components/Security/SecurityContent';

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const theme = useTheme();
  return <PanelFrame selectedID={5} />;
};

export default App;
