import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import _ from 'lodash';
import { connect } from 'react-redux';
import PanelFrame from '../components/PanelFrame';
import DashBoard from '../components/DashBoard/DashBoard';

const App: NextPage = () => {
  return (
    <PanelFrame selectedID={0}>
      <DashBoard />
    </PanelFrame>
  );
};

export default App;
