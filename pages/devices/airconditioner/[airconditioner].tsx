import { NextPage } from 'next';
import React from 'react';
import { SVG } from '@svgdotjs/svg.js';
import AirConditioner, {
  AirConditionerProps,
  AirConditionerWithFrame
} from '../../../components/AirConditioner';

const App: NextPage<AirConditionerProps> = ({
  airConditionerId,
  currentTemperature
}: AirConditionerProps) => {
  return (
    <AirConditionerWithFrame
      airConditionerId={airConditionerId}
      currentTemperature={currentTemperature}
    />
  );
};

App.getInitialProps = async ({ res, query }: any) => {
  return { airConditionerId: 12, currentTemperature: 23 };
};

export default App;
