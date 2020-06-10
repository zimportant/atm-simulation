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
  background: #fffacd;
`;

const DashBoard: React.FC = () => {
  return (
    <DashBoardContainer>
      <Grid container justify="center" style={{ height: '100%' }}>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push('/ruttien')}
            >
              RUT TIEN
            </BigButton>
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push('/chuyenkhoan')}
            >
              CHUYEN KHOAN
            </BigButton>
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push('/dichvukhac')}
            >
              DICH VU KHAC
            </BigButton>
          </Box>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">MENU</Typography>
            <br />
            <Typography component="p">
              He thong dich vu ATM simulation cung cap bao gom Rut Tien, Chuyen Khoan, Truy Van So
              Du, Lich Su Giao Dich, Doi Ma Pin, va Dich Vu Khac.
            </Typography>
            <br />
            <Typography component="p">
              Quy khach vui long lua chon dich vu tren man hinh de tiep tuc.
            </Typography>
          </Box>
        </Grid>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push('/truyvansodu')}
            >
              TRUY VAN SO DU
            </BigButton>
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push('/lichsugiaodich')}
            >
              LICH SU GIAO DICH
            </BigButton>
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => Router.push('/doimapin')}
            >
              DOI MA PIN
            </BigButton>
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.localStorage.setItem('ISLOGIN', '');
                  Router.push('/dangnhap');
                }
              }}
            >
              DANG XUAT
            </BigButton>
          </Box>
        </Grid>
      </Grid>
    </DashBoardContainer>
  );
};

export default DashBoard;
