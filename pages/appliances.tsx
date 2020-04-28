import { faRecycle, faFireAlt, faStarOfLife, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@material-ui/core';
import { useTheme, withTheme } from '@material-ui/core/styles';
import { NextPage } from 'next';
import React, { useState } from 'react';
import styled from 'styled-components';
import AppliancesContent from '../components/Appliances/AppliancesContent';
import { AppliancesState } from '../components/Appliances/ApplianceSetting';
import { ControlContainerGrid, SectionContainerGrid } from '../components/common';
import { ControlComponentAppliances } from '../components/ControlComponent';
import { ControlItemDescription } from '../components/ControlItem';
import { FACircularIconSmall } from '../components/FACircularIcon';
import PanelFrame from '../components/PanelFrame';

const App: NextPage = () => {
  const [selectedId, setSelectedId] = useState(0);
  const theme = useTheme();

  return <PanelFrame selectedID={3} />;
};

export default App;
