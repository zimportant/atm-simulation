import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import styled from 'styled-components';
import { Box, Snackbar } from '@material-ui/core';
import AppBar from './AppBar';
import BottomBar from './BottomBar';
import { Alert } from './common';

const PanelFrameContainer = styled(Box)`
  width: 100% !important;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

interface PanelFrameProps {
  children?: any;
}

const PanelContent = styled(Box)`
  width: 100%;
  flex: 100000 1 auto;
  display: flex;
  overflow: hidden;
`;

const PanelFrame: NextPage<PanelFrameProps> = ({ children }: PanelFrameProps) => {
  return (
    <PanelFrameContainer>
      <AppBar />
      <PanelContent>{children}</PanelContent>
    </PanelFrameContainer>
  );
};

export default PanelFrame;
