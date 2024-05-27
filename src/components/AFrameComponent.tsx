import React from 'react';
import 'aframe';
import { Entity, Scene, } from 'aframe-react';

const AFrameComponent: React.FC = () => (
  <Scene>
    <Entity primitive="a-box" position="0 1 -5" rotation="0 45 0" color="#4CC3D9"></Entity>
    <Entity primitive="a-sky" color="#ECECEC"></Entity>
    <Entity primitive="a-box" static-body="friction: 0;" position="0 0 -4" rotation="-90 0 0" width="7" height="7" depth="0.2" material="src: #grass; repeat: 1 1;"></Entity>
    <Entity primitive="a-sphere" obstacle="strength: 9999" dynamic-body="mass: 0.3;" position="2 1 -3" radius="0.5" color="orange"></Entity>
    <Entity primitive="a-cylinder" position="-1 1 -5" radius="0.5" height="1.5" color="#FFC65D"></Entity>
    <Entity primitive="a-camera" position="0 1.6 0">
      <Entity primitive="a-cursor" animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"></Entity>
    </Entity>
  </Scene>
);

export default AFrameComponent;
