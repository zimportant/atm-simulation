import { NextPage } from 'next';
import React from 'react';
import { SVG } from '@svgdotjs/svg.js';
import VoiceController, { VoiceControllerWithFrame } from '../components/VoiceController';

const App: NextPage = () => {
  return <VoiceControllerWithFrame />;
};

export default App;
