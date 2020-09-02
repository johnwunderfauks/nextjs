import React, { useMemo, useState, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

import Shader1 from "../components/Shaders/shader01";

const url =
  "https://images.unsplash.com/photo-1528459199957-0ff28496a7f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1282&q=80";

const Image = ({ url }) => {
  const [mouse, set] = useState([0, 0, 0]);
  const ref = useRef();
  const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);

  useFrame(() => {
    ref.current.material.uniforms.mouse.value = mouse;
  });

  var vertexShader = ` varying vec2 vUv; 
  varying vec3 vPosition;

  void main() {
    vUv = uv;

    vPosition = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;
  var fragmentShader =  `
  
  float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
  }

  varying vec2 vUv;
  uniform sampler2D texture;
  uniform vec3 mouse;
  varying vec3 vPosition;
  
  void main()	{
      vec2 uv = vUv;

      vec2 direction = normalize(vPosition.xy - mouse.xy);

      float dist = distance(vPosition, mouse);

      float proximity = 1. - map(dist, 0., 5., 0., 1.);

      vec2 effectUV = vUv + direction * proximity * 0.05;
      vec2 effectUV2 = mix(vUv, mouse.xy + vec2(.6), proximity);

      vec4 color = texture2D(texture, effectUV2);


      gl_FragColor = vec4(proximity,proximity,proximity, 1.);
      gl_FragColor = vec4(direction,0., 1.);
      gl_FragColor = color;

  }
`

  return (
    <mesh
      ref={ref}
      onPointerOut={e => set([0, 0, 0])}
      onPointerMove={({ clientX, clientY }) => {
        const x = (clientX / window.innerWidth) * 2 - 1;
        const y = -(clientY / window.innerHeight) * 2 + 1;

        set([x, y, 0]);
      }}
    >
      <planeBufferGeometry attach="geometry" args={[4, 5]} />
      <shaderMaterial
        attach="material"
        args={[Shader1]}
        uniforms-texture-value={texture}
      />
    </mesh>
  );
};

export default function App() {
  return (
    
      <Canvas>
        <Image url={url} />
      </Canvas>
    
  );
}
