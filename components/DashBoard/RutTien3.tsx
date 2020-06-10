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

interface RutTien3Props {
  amount: number;
  date: string;
}

const RutTien3: React.FC<RutTien3Props> = ({ amount, date }: RutTien3Props) => {
  return (
    <DashBoardContainer>
      <Grid container justify="center" style={{ height: '100%' }}>
        <Grid container item xs={3} />
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">RUT TIEN</Typography>
            <br />

            <Typography component="p">Giao dich thanh cong!</Typography>
            <Typography component="p">Xin vui long rut the ATM truoc, sau do nhan tien.</Typography>

            <div id="ruttien" style={{ alignSelf: 'flex-start' }}>
              <Typography component="p">Quy khach da rut {amount} VND</Typography>
              <Typography component="p">
                Thoi gian giao dich {new Date(date).toLocaleString()}
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  const pdf = new (require('jspdf'))();
                  pdf.text('Hoa don', 20, 20);
                  pdf.text(`Quy khach da rut ${amount} VND`, 20, 30);
                  pdf.text(`Thoi gian giao dich ${new Date(date).toLocaleString()} VND`, 20, 40);
                  pdf.save('ruttien.pdf');
                }
              }}
            >
              IN HOA DON
            </BigButton>
            <BigButton variant="contained" color="secondary" onClick={() => Router.push('/')}>
              HOAN TAT
            </BigButton>
          </Box>
        </Grid>
      </Grid>
    </DashBoardContainer>
  );
};

export default RutTien3;
