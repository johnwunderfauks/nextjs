import ReactDOM from "react-dom"
import React, {
  useRef, useEffect, useMemo, useState,
  useContext, useCallback
} from "react"
import { Vector2, NearestFilter, TextureLoader } from "three"
import * as THREE from "three";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer"
import { OutlinePass } from "three/examples/jsm/postprocessing/OutlinePass"
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass"
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass"
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader"
import '../styles/canvas-test.css'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { useSpring, a } from 'react-spring/three'

extend({ OrbitControls, EffectComposer, RenderPass, OutlinePass, ShaderPass })

const Controls = () => {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} target={[0, 0, 0]} enableDamping args={[camera, gl.domElement]} />
}

function useHover() {
  const ref = useRef()
  const setHovered = useContext(context)
  const onPointerOver = useCallback(() => setHovered(state => [...state, ref.current]), [])
  const onPointerOut = useCallback(() => setHovered(state => state.filter(mesh => mesh !== ref.current)), [])

  return { ref, onPointerOver, onPointerOut }
}

const Thing = ({ radius = 1, detail = 64, color = "indianred", ...props }) => {
  return (
    <mesh {...props} {...useHover()}>
      <dodecahedronGeometry attach="geometry" args={[50]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}


const gradientMaps2 = () => {
  var textureLoader = new TextureLoader();
  var threeTone = textureLoader.load('../../images/swirltest/threeTone.jpg');
  threeTone.minFilter = NearestFilter;
  threeTone.magFilter = NearestFilter;

  var fiveTone = textureLoader.load('../../images/swirltest/fiveTone.jpg');
  fiveTone.minFilter = NearestFilter;
  fiveTone.magFilter = NearestFilter;

  return {
    none: null,
    threeTone: threeTone,
    fiveTone: fiveTone
  };
}

const shaderTest = {

  vertex_shader:
    `uniform float offset;
        void main() {
            vec4 pos = modelViewMatrix * vec4( position + normal * offset, 1.0 );
            gl_Position = projectionMatrix * pos;
        }`
  ,
  fragment_shader:
    `void main(){
            gl_FragColor = vec4( 1.0, .4, 0.0, 1.0 );
        }`

}

const Box = ({ radius = 1, detail = 64, color = "indianred", ...props }) => {

  // This reference will give us direct access to the mesh
  const { size, viewport } = useThree()
  // const obj = useLoader(OBJLoader, "./m.obj")
  const aspect = size.width / viewport.width
  const [spring, setSpring] = useSpring(() => ({
    scale: [1, 1, 1],
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    config: { mass: 3, friction: 40, tension: 800 }
  }))

  var textureLoader = new TextureLoader();
  var threeTone = textureLoader.load('../../images/swirltest/threeTone.jpg');
  threeTone.minFilter = NearestFilter;
  threeTone.magFilter = NearestFilter;

  var shaderM = new THREE.ShaderMaterial({
    uniforms: {
      type: "f",
      value: 1.
    },
    wireframe: true,
    vertexShader: shaderTest.vertex_shader,
    fragmentShader: shaderTest.fragment_shader
  })


  // Set up state for the hovered and active state
  const [obj, set] = useState()
  useMemo(() => {
    // new MTLLoader().load(
    //     'http://localhost:3000/assets/obj/scene.mtl',
    //     materials => {
    //         materials.preload()
    const Loader = new OBJLoader()
    //Loader.setMaterials(materials)
    Loader.load(
      'http://localhost:3000/assets/obj/Scene-3MB.obj',
      obj => {
        obj.traverse(function (child) {
          //This allow us to check if the children is an instance of the Mesh constructor
          console.log(child.type)
          if (child.type === 'Mesh') {
            //child.material.color = new THREE.Color(0X000000);
            //child.material = new THREE.MeshPhongMaterial({ color: "green", specular: 0xf, shininess: 3 });


            //console.log(threeTone)
            child.material = shaderM;
            //child.material = new THREE.MeshToonMaterial( { color: "green", gradientMap: threeTone } );
            // //Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
            child.geometry.computeVertexNormals();
          }

        });
        //console.warn(obj)
        set(obj)

      })
    //     }
    // )
  }, [])
  return (
    //{...spring}
    <mesh  {...props} {...useHover()}>
      {obj ? <primitive object={obj} dispose={null} /> : null}
    </mesh>
  )
}

const context = React.createContext()
const Outline = ({ children }) => {
  const { gl, scene, camera, size } = useThree()
  const composer = useRef()
  const [hovered, set] = useState([])
  const aspect = useMemo(() => new Vector2(size.width, size.height), [size])
  useEffect(() => composer.current.setSize(size.width, size.height), [size])
  useFrame(() => composer.current.render(), 1)
  return (
    <context.Provider value={set}>
      {children}
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <outlinePass
          attachArray="passes"
          args={[aspect, scene, camera]}
          selectedObjects={hovered}
          visibleEdgeColor="#000000"
          hiddenEdgeColor="#ffffff"
          edgeStrength={10}
          edgeGlow={0}
          pulsePeriod={0}

          edgeThickness={1}
        />
        <shaderPass attachArray="passes" args={[FXAAShader]} uniforms-resolution-value={[1 / size.width, 1 / size.height]} />
      </effectComposer>
    </context.Provider>
  )
}

const App = () => (
  <div style={{ height: "100vh", backgroundColor: "beige" }}>
    {/* pixelRatio={window.devicePixelRatio} orthographic */}
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight />
      <pointLight position={[3, 3, 3]} />

      <Controls />
      <Outline>
        {/* <Thing position={[0, 50, 0]} color="hotpink" />
      <Thing position={[-50, -50, 0]} color="indianred" />
      <Thing position={[50, -50, 0]} color="lightgreen" /> */}
        <Box position={[0, 0, 0]} color="lightgreen" />
      </Outline>

    </Canvas>
  </div>
)

export default App
