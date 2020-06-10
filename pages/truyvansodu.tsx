import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import TruyVanSoDu from '../components/DashBoard/TruyVanSoDu';

const App: NextPage<any> = ({ query }: any) => {
  return (
    <PanelFrame>
      <TruyVanSoDu withdraw={query.withdraw} />
    </PanelFrame>
  );
};

App.getInitialProps = ({ query }) => {
  return { query };
};

export default App;
