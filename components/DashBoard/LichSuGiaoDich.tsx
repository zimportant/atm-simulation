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
import { transactionHistory, getUserId } from '../../src/api';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { BANKING_BUDGET_ID } from '../../src/api';

const DashBoardContainer = styled(Box)`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  background:background: #FFFACD;
`;

interface Transaction {
  sender: String;
  receiver: String;
  amount: Number;
  type: String;
  status: String;
  date: String;
}

const LichSuGiaoDich: React.FC = () => {
  const [history, setHistory] = useState<Transaction[]>([]);
  useEffect(() => {
    transactionHistory(getUserId()).then(res => {
      console.log(res.data.data);
      setHistory(res.data.data);
    });
  }, []);

  return (
    <DashBoardContainer>
      <Grid container justify="center" style={{ height: '100%' }}>
        <Grid container item xs={3} justify="center">
          <Box display="flex" flexDirection="column" justifyContent="space-evenly">
            <BigButton
              variant="contained"
              color="secondary"
              onClick={() => {
                const input = document.getElementById('lichsugiaodich');
                if (input !== null) {
                  html2canvas(input).then(canvas => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    pdf.addImage(imgData, 'PNG', 0, 0);
                    pdf.save('lichsugiaodich.pdf');
                  });
                }
              }}
            >
              IN HOA DON
            </BigButton>
          </Box>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="start">
            <br />
            <Typography component="h2">LICH SU GIAO DICH</Typography>
            <br />

            <div
              id="lichsugiaodich"
              style={{
                padding: '0 20px',
                height: '80vh',
                overflow: 'scroll'
              }}
            >
              {history.map(({ sender, receiver, amount, type, status, date }) => {
                console.log(receiver);
                return (
                  <Card key={`${date}`}>
                    <CardContent>
                      <Typography variant="h5">
                        {sender === getUserId()
                          ? receiver === '5ee0cee79806167870caa2f0'
                            ? 'Rut Tien '
                            : 'Chuyen khoan '
                          : 'Nhan duoc '}{' '}
                        {amount} VND
                      </Typography>
                      <Typography variant="h6">Trang Thai: {status}</Typography>
                      <Typography variant="h6">
                        Thoi Gian Giao Dich {new Date(`${date}`).toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
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

export default LichSuGiaoDich;
