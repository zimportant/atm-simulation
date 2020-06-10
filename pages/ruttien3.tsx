import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import RutTien3 from '../components/DashBoard/RutTien3';

const App: NextPage<any> = ({ query }: any) => {
  return (
    <PanelFrame>
      <RutTien3 amount={query.amount} date={query.date} />
    </PanelFrame>
  );
};

App.getInitialProps = ({ query }) => {
  return { query };
};

export default App;
