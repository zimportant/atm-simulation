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
`;

interface RutTien3Props {
  withdraw: number;
}

const RutTien3: React.FC<RutTien3Props> = ({ withdraw }: RutTien3Props) => {
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
        <Grid container item xs={3} />
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">RUT TIEN</Typography>
            <br />
            <Typography component="p">Giao dich thanh cong!</Typography>
            <Typography component="p">Xin vui long rut the ATM truoc, sau do nhan tien.</Typography>
          </Box>
        </Grid>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
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
