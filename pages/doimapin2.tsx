import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import PanelFrame from '../components/PanelFrame';
import DoiMaPin2 from '../components/DashBoard/DoiMaPin2';

const App: NextPage = ({ query }: any) => {
  return (
    <PanelFrame>
      <DoiMaPin2 password={query.password} />
    </PanelFrame>
  );
};

App.getInitialProps = ({ query }) => {
  return { query };
};

export default App;
