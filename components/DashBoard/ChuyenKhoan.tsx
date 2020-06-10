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
import { transferMoney, getBudgetId } from '../../src/api';

const DashBoardContainer = styled(Box)`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background:background: #FFFACD;
`;

const ChuyenKhoan: React.FC = () => {
  const [taiKhoan, setTaiKhoan] = useState('');
  const [sotien, setSotien] = useState(0);
  return (
    <DashBoardContainer>
      <Grid container justify="center" style={{ height: '100%' }}>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => {
                transferMoney(getBudgetId(), taiKhoan, sotien)
                  .then(res => {
                    if (res.data.status === 'success') {
                      Router.push('/chuyenkhoan4');
                    } else {
                      alert('So tai khoan hoac so tien khong du dieu kien, xin vui long thu lai');
                    }
                  })
                  .catch(err => {
                    alert('Something went wrong, please try again');
                  });
              }}
            >
              CHUYEN KHOAN
            </BigButton>
          </Box>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">CHUYEN KHOAN</Typography>
            <br />
            <Typography component="p">NHAP TAI KHOAN DEN</Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              type="text"
              value={taiKhoan}
              onChange={(e: any): unknown => setTaiKhoan(e.target.value)}
            />
            <Typography component="p">NHAP SO TIEN</Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              type="number"
              value={sotien}
              onChange={(e: any): unknown => setSotien(Number(e.target.value))}
            />
          </Box>
        </Grid>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => {
                Router.push('/');
              }}
            >
              HUY BO
            </BigButton>
          </Box>
        </Grid>
      </Grid>
    </DashBoardContainer>
  );
};

export default ChuyenKhoan;
