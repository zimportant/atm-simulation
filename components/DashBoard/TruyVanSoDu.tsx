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
import { getBudgetInfo, getBudgetId } from '../../src/api';

const DashBoardContainer = styled(Box)`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background:background: #FFFACD;
`;

interface TruyVanSoDuProps {
  withdraw: number;
}

const TruyVanSoDu: React.FC<TruyVanSoDuProps> = ({ withdraw }: TruyVanSoDuProps) => {
  const [saving, setSaving] = useState(0);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    getBudgetInfo(getBudgetId()).then(res => {
      setSaving(res.data.data.saving);
      setBalance(res.data.data.balance);
    });
  }, []);
  return (
    <DashBoardContainer>
      <Grid container justify="center" style={{ height: '100%' }}>
        <Grid container item xs={3} />
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">TRUY VAN SO DU</Typography>
            <br />
            <Typography component="p">{`So du trong tai khoan chinh cua quy khach la: ${balance} VND`}</Typography>
            <Typography component="p">{`So du trong tai khoan tiet kiem cua quy khach la: ${saving} VND`}</Typography>
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

export default TruyVanSoDu;
