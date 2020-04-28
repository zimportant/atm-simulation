import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import RutTien2 from '../components/DashBoard/RutTien2';

const App: NextPage<any> = ({ query }: any) => {
  return (
    <PanelFrame>
      <RutTien2 withdraw={query.withdraw} />
    </PanelFrame>
  );
};

App.getInitialProps = ({ query }) => {
  return { query };
};

export default App;
