import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import { theme } from '@styles';

const BackgroundScene = () => {
  
  return (
    <Canvas>
      <color attach='background' args={[theme.colors.darkBlack]} />
      <ambientLight />
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={.3} 
        enableRotate={false}
        enableZoom={false} />
      <Stars 
        radius={80}
        depth={50}
        count={4000}
        factor={4}
        saturation={0}
        fade />
    </Canvas>
  )
};

export { BackgroundScene };
