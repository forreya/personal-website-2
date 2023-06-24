import React from 'react';

import { Transition, Moon, Letter, Orbit, OrbitObject } from './styles';

function LoadingOverlay({loading}) {
  return (
    <Transition>
        <Letter>R</Letter>
        <Moon>
          <Orbit>
            <OrbitObject />
          </Orbit>
        </Moon>
        <Letter>L</Letter>
      </Transition>
  );
}

export default LoadingOverlay;