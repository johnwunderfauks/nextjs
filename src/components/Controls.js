import React, { useRef } from "react";

import { useFrame, useThree, extend } from "react-three-fiber";

import { useSpring } from "react-spring/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

export default function Controls({ focusPosition, setFocusPosition }) {
  const { camera, gl } = useThree();
  const orbitRef = useRef();

  const { targetSpring } = useSpring({
    /* Irrelevant, always reads last value */
    /* from: { targetSpring: focusPosition.prev }, */
    targetSpring: focusPosition.next
  });

  const { positionSpring } = useSpring({
    /* Irrelevant, always reads last value */
    /*from: { positionSpring: focusPosition.cameraY },*/
    positionSpring: focusPosition.next,
    onRest: () => {
      if (focusPosition.active) {
        setFocusPosition({ ...focusPosition, active: false });
      }
    }
  });

  useFrame(() => {
    if (
      orbitRef.current.target.y !== focusPosition.next &&
      focusPosition.active
    ) {
      orbitRef.current.target.y = targetSpring.value;
    }

    if (camera.position.y < focusPosition.next && focusPosition.active) {
      camera.position.y = positionSpring.value;
    }
    orbitRef.current.update();
  });

  return <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />;
}
