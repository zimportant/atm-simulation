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

interface RutTien2Props {
  withdraw: number;
}

const RutTien2: React.FC<RutTien2Props> = ({ withdraw }: RutTien2Props) => {
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
            {money - withdraw >= 0 ? (
              <BigButton variant="contained" color="secondary">
                IN HOA DON
              </BigButton>
            ) : null}
          </Box>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">RUT TIEN</Typography>
            <br />
            {money - withdraw >= 0 ? (
              <>
                <Typography component="p">{`So du hien tai cua quy khach la: ${money} VND`}</Typography>
                <Typography component="p">
                  {`Sau khi giao dich con lai: ${money - withdraw} VND`}
                </Typography>
                <Typography component="p">Quy khach co muon in hoa don?</Typography>
              </>
            ) : (
              <>
                <Typography component="p">Tai khoan quy khach khong du tien giao dich</Typography>
              </>
            )}
          </Box>
        </Grid>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            {money - withdraw >= 0 ? (
              <BigButton
                variant="contained"
                color="secondary"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.localStorage.setItem('MONEY', String(money - withdraw));
                  }
                  Router.push('/ruttien3');
                }}
              >
                TIEP TUC
              </BigButton>
            ) : null}
            <BigButton variant="contained" color="secondary" onClick={() => Router.push('/')}>
              HUY BO
            </BigButton>
          </Box>
        </Grid>
      </Grid>
    </DashBoardContainer>
  );
};

export default RutTien2;
