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
import { updatePassword, getUsername } from '../../src/api';

const DashBoardContainer = styled(Box)`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background:background: #FFFACD;
`;

interface DoiMapPin2Props {
  password: string;
}

const DoiMaPin2: React.FC<DoiMapPin2Props> = ({ password }: DoiMapPin2Props) => {
  const [newPassword, setNewPassword] = useState('');
  const [cnewPassword, setCnewPassword] = useState('');
  return (
    <DashBoardContainer>
      <Grid container justify="center" style={{ height: '100%' }}>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => {
                if (newPassword !== cnewPassword) {
                  alert('Mat khau moi khong khop, quy khach vui long nhap lai');
                  return;
                }
                let realPassword = atob(password);

                updatePassword(getUsername(), realPassword, newPassword).then(res => {
                  if (res.data.status === 'success') {
                    Router.push('/doimapin3');
                  } else {
                    alert('Mat khau nhap khong chinh xac, xin vui long thu lai');
                  }
                });
              }}
            >
              TIEP TUC
            </BigButton>
          </Box>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">DOI MA PIN</Typography>
            <br />
            <Typography component="p">Nhap Ma PIN Moi</Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              value={newPassword}
              onChange={e => {
                setNewPassword(e.target.value);
              }}
              type="password"
            />
            <Typography component="p">Xac Nhan Ma PIN Moi</Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              value={cnewPassword}
              onChange={e => {
                setCnewPassword(e.target.value);
              }}
              type="password"
            />
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

export default DoiMaPin2;
