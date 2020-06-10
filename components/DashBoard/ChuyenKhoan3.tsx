import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Router from 'next/router';
import { RectBtnContainer, RectContainer, BigButton } from '../common';

const DashBoardContainer = styled(Box)`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background:background: #FFFACD;
`;

const ChuyenKhoan3: React.FC = () => {
  const [money, setMoney] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedMoney: string = window.localStorage.getItem('MONEY') ?? '1000000';
      setMoney(Number(savedMoney));
    }
  }, []);
  return (
    <DashBoardContainer>
      <Grid container justify="center" style={{ height: '100%' }}>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push('/chuyenkhoan4')}
            >
              IN HOA DON
            </BigButton>
            <BigButton variant="contained" color="secondary">
              KHONG IN HOA DON
            </BigButton>
          </Box>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">CHUYEN KHOAN</Typography>
            <br />
          </Box>
        </Grid>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton variant="contained" color="secondary" onClick={() => Router.push('/')}>
              HUY BO
            </BigButton>
          </Box>
        </Grid>
      </Grid>
    </DashBoardContainer>
  );
};

export default ChuyenKhoan3;
