import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import styled from 'styled-components';
import { Box, Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/reducers';
import AppBar from './AppBar';
import BottomBar from './BottomBar';
import { Alert } from './common';
import { showToast, hideToast } from '../redux/actions/toastActions';

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
  children: any;
  selectedID: number;
  showBottomBar?: boolean;
}

const PanelContent = styled(Box)`
  width: 100%;
  flex: 100000 1 auto;
  display: flex;
  overflow: hidden;
`;

const PanelFrame: NextPage<PanelFrameProps> = ({
  children,
  selectedID,
  showBottomBar
}: PanelFrameProps) => {
  const { open, severity, message } = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();
  return (
    <PanelFrameContainer>
      <AppBar />
      <PanelContent>{children}</PanelContent>
      {showBottomBar === false ? null : <BottomBar selectedID={selectedID} />}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={(): any => dispatch(hideToast())}
      >
        <Alert severity={severity} onClose={(): any => dispatch(hideToast())}>
          {message}
        </Alert>
      </Snackbar>
    </PanelFrameContainer>
  );
};

export default PanelFrame;
