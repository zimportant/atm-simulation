import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';
import { RectBtnContainer, RectContainer, BigButton } from '../common';

const DashBoardContainer = styled(Box)`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background:background: #FFFACD;
`;

const RutTien: React.FC = () => {
  return (
    <DashBoardContainer>
      <Grid container justify="center" style={{ height: '100%' }}>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push({ pathname: '/ruttien2', query: { withdraw: 100000 } })}
            >
              100.000 VND
            </BigButton>
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push({ pathname: '/ruttien2', query: { withdraw: 200000 } })}
            >
              200.000 VND
            </BigButton>
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push({ pathname: '/ruttien2', query: { withdraw: 500000 } })}
            >
              500.000 VND
            </BigButton>
          </Box>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">RUT TIEN</Typography>
            <br />
            <Typography component="p">Quy khach vui long nhap so tien can rut.</Typography>
          </Box>
        </Grid>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push({ pathname: '/ruttien2', query: { withdraw: 1000000 } })}
            >
              1.000.000 VND
            </BigButton>
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push({ pathname: '/ruttien2', query: { withdraw: 2000000 } })}
            >
              2.000.000 VND
            </BigButton>
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push('/nhapruttien')}
            >
              NHAP SO TIEN
            </BigButton>
            <BigButton variant="contained" color="secondary" onClick={() => Router.push('/')}>
              HUY BO
            </BigButton>
          </Box>
        </Grid>
      </Grid>
    </DashBoardContainer>
  );
};

export default RutTien;
