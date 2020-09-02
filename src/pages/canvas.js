import { TextureLoader, WebGLRenderTarget, Object3D, LinearFilter,Vector2 } from "three"
import * as THREE from "three";

import React, { useState, Suspense, useMemo, useRef,useContext, useCallback, useEffect } from "react"
import { Canvas, useLoader, useThree, useFrame, addEffect } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import BackfaceMaterial from "../components/diamonds/backface-material"
import RefractionMaterial from "../components/diamonds/refraction-material"
import diamondUrl from "../components/diamonds/assets/diamond.glb"
import textureUrl from "../components/diamonds/assets/233.jpg"
import testImage from '../images/canvas.jpg'
import '../styles/canvas-test.css'
import noOneObj from '../obj/scene.obj'

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { useSpring, a } from 'react-spring/three'
import Controls from '../components/Controls'

import TestShader from '../components/Shaders/TestShader'

const App = () => {
    function Background() {
        const { viewport, aspect } = useThree()
        const texture = useLoader(TextureLoader, testImage)
        useMemo(() => (texture.minFilter = LinearFilter), [])
        // Calculates a plane filling the screen similar to background-size: cover
        const adaptedHeight = 3800 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)

        const adaptedWidth = 5000 * (aspect > 5000 / 3800 ? viewport.width / 5000 : viewport.height / 3800)
        return (
            <mesh layers={1} scale={[adaptedWidth, adaptedHeight, 1]}>
                <planeBufferGeometry attach="geometry" />
                <meshBasicMaterial attach="material" map={texture} depthTest={false} />
            </mesh>
        )
    }


    function Diamonds() {
        const { size, viewport, gl, scene, camera, clock } = useThree()
        const model = useRef()
        const gltf = useLoader(GLTFLoader, diamondUrl)

        // Create Fbo's and materials
        const [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial] = useMemo(() => {
            const envFbo = new WebGLRenderTarget(size.width, size.height)
            const backfaceFbo = new WebGLRenderTarget(size.width, size.height)
            const backfaceMaterial = new BackfaceMaterial()
            const refractionMaterial = new RefractionMaterial({ envMap: envFbo.texture, backfaceMap: backfaceFbo.texture, resolution: [size.width, size.height] })
            return [envFbo, backfaceFbo, backfaceMaterial, refractionMaterial]
        }, [size])

        // Create random position data
        const dummy = useMemo(() => new Object3D(), [])
        const diamonds = useMemo(
            () =>
                new Array(80).fill().map((_, i) => ({
                    position: [i < 5 ? 0 : viewport.width / 2 - Math.random() * viewport.width, 40 - Math.random() * 40, i < 5 ? 26 : 10 - Math.random() * 20],
                    factor: 0.1 + Math.random(),
                    direction: Math.random() < 0.5 ? -1 : 1,
                    rotation: [Math.sin(Math.random()) * Math.PI, Math.sin(Math.random()) * Math.PI, Math.cos(Math.random()) * Math.PI]
                })),
            []
        )

        // Render-loop
        useFrame(() => {
            // Update instanced diamonds
            diamonds.forEach((data, i) => {
                const t = clock.getElapsedTime()
                data.position[1] -= (data.factor / 5) * data.direction
                if (data.direction === 1 ? data.position[1] < -50 : data.position[1] > 50)
                    data.position = [i < 5 ? 0 : viewport.width / 2 - Math.random() * viewport.width, 50 * data.direction, data.position[2]]
                const { position, rotation, factor } = data
                dummy.position.set(position[0], position[1], position[2])
                dummy.rotation.set(rotation[0] + t * factor, rotation[1] + t * factor, rotation[2] + t * factor)
                dummy.scale.set(1 + factor, 1 + factor, 1 + factor)
                dummy.updateMatrix()
                model.current.setMatrixAt(i, dummy.matrix)
            })
            model.current.instanceMatrix.needsUpdate = true
            // Render env to fbo
            gl.autoClear = false
            camera.layers.set(1)
            gl.setRenderTarget(envFbo)
            gl.render(scene, camera)
            // Render cube backfaces to fbo
            camera.layers.set(0)
            model.current.material = backfaceMaterial
            gl.setRenderTarget(backfaceFbo)
            gl.clearDepth()
            gl.render(scene, camera)
            // Render env to screen
            camera.layers.set(1)
            gl.setRenderTarget(null)
            gl.render(scene, camera)
            gl.clearDepth()
            // Render cube with refraction material to screen
            camera.layers.set(0)
            model.current.material = refractionMaterial
            gl.render(scene, camera)
        }, 1)

        return (
            <instancedMesh ref={model} args={[null, null, diamonds.length]}>
                <bufferGeometry dispose={false} attach="geometry" {...gltf.__$[1].geometry} />
                <wireframeGeometry></wireframeGeometry>
                <meshBasicMaterial attach="material" />
            </instancedMesh>
        )
    }

    function NoOne() {
        const planeSize = 40;
        const texture = useLoader(TextureLoader, noOneObj)
        // texture.wrapS = THREE.RepeatWrapping
        // texture.wrapT = THREE.RepeatWrapping;
        // texture.magFilter = THREE.NearestFilter;
        const repeats = planeSize / 2;
        texture.repeat.set(repeats, repeats);
        return (
            <mesh>
                <planeGeometry attach="geometry" planeSize={planeSize} ></planeGeometry>
                <meshPhongMaterial attach="material" map={texture} />
            </mesh>
        )
    }

    function Frame(props) {
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

        var shaderMaterial3 = new THREE.ShaderMaterial( {
            uniforms: {
                color: { vec3: [0, 0, 0] },
                opacity: { float: 1 },
                "uOutlineWidth": { float: 0.01 },
                "uOutlineNoise" : { float: 1 },
                "uOutlineNoiseStrength" : { float : .6}
            },
            vertexShader: TestShader.vertexShader,
            fragmentShader: TestShader.fragmentShader
        
        } );

        // Set up state for the hovered and active state
        const [obj, set] = useState()
        useMemo(() => {
            new MTLLoader().load(
                'http://localhost:3000/assets/obj/frame.mtl',
                materials => {
                    materials.preload()
                    const Loader = new OBJLoader()
                    Loader.setMaterials(materials)
                    Loader.load(
                        'http://localhost:3000/assets/obj/frame.obj',
                        obj => {
                            obj.traverse(function (child) {
                                //This allow us to check if the children is an instance of the Mesh constructor
                                // console.log(child.type)
                                if (child.type === 'Group') {
                                    //child.material.color = new THREE.Color(0X000000);
                                    child.material = shaderMaterial3

                                    //Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
                                    // child.geometry.computeVertexNormals();
                                }
                            });
                            console.warn(obj)
                            set(obj)
                        })
                }
            )
        }, [])
        return (
            <a.mesh {...spring} >
                {obj ? <primitive object={obj} dispose={null} /> : null}
                {/* <orbitControls ref={controls}/> */}
                <meshPhysicalMaterial attach="material" color="black" />
            </a.mesh>
        )
    }

    function People(props) {
        const ref = useRef()
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
        {/* <meshBasicMaterial attach="material" color="red" side={THREE.BackSide} roughness={0.75} metalness={0.5} wireFrame={true} /> */ }

        const meshLambertMat = new THREE.MeshLambertMaterial({
            color: 'white',
            side: THREE.BackSide,
            wireframe: false
        })
        meshLambertMat.onBeforeCompile = (shader) => {
            const token = '#include <begin_vertex>'
            const customTransform = `
                vec3 transformed = position + objectNormal*0.01;
            `
            shader.vertexShader =
                shader.vertexShader.replace(token, customTransform)
        }

        var colors = ["ffffff", "cccccc"];
        var gradientMap = new THREE.DataTexture(colors, colors.length, 1, THREE.LuminanceFormat);
        gradientMap.minFilter = THREE.NearestFilter;
        gradientMap.magFilter = THREE.NearestFilter;
        gradientMap.generateMipmaps = false;
        var diffuseColor = new THREE.Color().setHSL(.5, 0.5, 1 * 0.5 + 0.1).multiplyScalar(1 - .5 * 0.2);
        var meshToonMat = new THREE.MeshToonMaterial({
            color: "black",
            gradientMap: gradientMap
        });

        var shaderMaterial3 = new THREE.ShaderMaterial( {
            uniforms: {
                color: { vec3: [0, 0, 0] },
                opacity: { float: 1 },
                "uOutlineWidth": { float: 0.01 },
                "uOutlineNoise" : { float: 1 },
                "uOutlineNoiseStrength" : { float : .6}
            },
            vertexShader: TestShader.vertexShader,
            fragmentShader: TestShader.fragmentShader
        
        } );


        // Set up state for the hovered and active state
        const [obj, set] = useState()
        useMemo(() => {
            new MTLLoader().load(
                'http://localhost:3000/assets/obj/scene.mtl',
                materials => {
                    materials.preload()
                    const Loader = new OBJLoader()

                     Loader.setMaterials(materials)
                
           
            Loader.load(
                // 'http://localhost:3000/assets/obj/scene-def.obj',
                'http://localhost:3000/assets/obj/Scene-3MB.obj',
                obj => {
                    obj.traverse(function (child) {
                        //This allow us to check if the children is an instance of the Mesh constructor
                        // console.log(child.type)
                        if (child.type === 'Mesh') {

                            // var phongMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111, shininess: 5 } );
                            child.material = shaderMaterial3;
                            // child.receiveShadow = true;
                            // child.castShadow = true;

                            //child.material = new THREE.MeshBasicMaterial({color:"black",wireframe:true});
                            //Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
                            child.geometry.computeVertexNormals();
                        }
                    });
                    console.warn(obj)
                    set(obj)
                })
            }
            )
        }, [])

        // const bindDrag = useDrag(
        //   ({ offset: [x, y], vxvy: [vx, vy], down, ...props }) =>
        //     setSpring({ position: [x / aspect, -y / aspect, 0], rotation: [y / aspect, x / aspect, 0] }),
        //   { pointerEvents: true }
        // )
        //castShadow {...bindDrag()}
        return (
            //{...spring}
            //castShadow receiveShadow
            <a.mesh>
                {obj ? <primitive object={obj} dispose={null} /> : null}
                {/* <orbitControls ref={controls}/> */}
                {/* <meshPhysicalMaterial attach="material" color="black" /> */}


                {/* <meshPhongMaterial attach="material" color="black"/> */}
                {/* <boxGeometry attach="geometry" args={[2, 2, 2]} />
                <meshBasicMaterial attach="material" color="red" side={THREE.BackSide} roughness={0.75} metalness={0.5} wireFrame={true} /> */}

            </a.mesh>
        )
    }

    function Box(props) {
        
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

        // Set up state for the hovered and active state
        const [obj, set] = useState()

        var shaderMaterialBox = new THREE.ShaderMaterial( {
            uniforms: {
                color: { vec3: [1, 1, 1] },
                opacity: { float: 1 },
            },
            vertexShader: TestShader.vertexShader,
            fragmentShader: TestShader.fragmentShader
        
        } );

        useMemo(() => {
            new MTLLoader().load(
                //'http://id21.wunderfauks.com/assets/obj/scene.mtl',
                'http://localhost:3000/assets/obj/boxes.mtl',
                materials => {
                    materials.preload()
                    //   const eye = new TextureLoader().load(Eyes)
                    //   const shorts = new TextureLoader().load(Shorts)
                    //   const shirt = new TextureLoader().load(Shirt)

                    const Loader = new OBJLoader()
                    Loader.setMaterials(materials)
                    Loader.load(
                        //'http://id21.wunderfauks.com/assets/obj/scene.obj', 
                        'http://localhost:3000/assets/obj/boxes.obj',
                        obj => {
                            obj.traverse(function (child) {
                                //This allow us to check if the children is an instance of the Mesh constructor
                                // console.log(child.type)
                                if (child.type === 'Mesh') {
                                    //child.material = shaderMaterialBox
                                    //child.material.color = new THREE.Color(0Xffffff);
                                    //child.material = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x111111, shininess: 1 });
                                    //Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
                                    child.geometry.computeVertexNormals();
                                }
                            });
                            console.warn(obj)
                            set(obj)
                        })
                }
            )
        }, [])
        return (
            //{...spring}
            <a.mesh  >
                {obj ?
                    <primitive object={obj} dispose={null} />

                    : null}
                {/* <orbitControls ref={controls}/> */}
                {/* <planeGeometry geometry={obj.planeGeometry} /> */}
                {/* <meshPhysicalMaterial attach="material" color="green" /> */}

            </a.mesh>
        )
    }

    const [focusPosition, setFocusPosition] = useState({
        active: false,
        prev: 0,
        next: 0,
        cameraY: 0
    });
    return (

        <div style={{ height: "100vh" }}>
            {/* <Canvas camera={{ fov: 50, position: [0, 0, 30] }}>
                <Suspense fallback={null}>
                    <Background />

                </Suspense>
            </Canvas> */}
            <Canvas colorManagement 
                // onCreated={({ gl }) => {
                //     gl.shadowMap.enabled = true;
                //     gl.shadowMap.type = THREE.PCFSoftShadowMap;
                // }}
                gl={{ alpha: true,  }}
                camera={{ fov: 75, position: [0, 0, 5] }}
                onCreated={({ gl }) => {
                    // gl.setClearColor('white')
                    // gl.toneMapping = THREE.ACESFilmicToneMapping
                    // gl.outputEncoding = THREE.sRGBEncoding
                }}
            >
                <Controls
                    focusPosition={focusPosition}
                    setFocusPosition={setFocusPosition}
                />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {/* <ambientLight intensity={2} /> */}
                {/* {/* <pointLight position={[10, 10, 10]} /> */}
                {/* <spotLight position={[2, 5, 0]} penumbra="1" castShadow /> */}
                {/* <mesh receiveShadow position={[0, 0, -1]}>
                    <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
                    <meshPhongMaterial attach="material" color="#272727" />
                </mesh> */}
                {/* <pointLight intensity={0.3} />
                <ambientLight intensity={2} />
                <spotLight
                    castShadow
                    intensity={0.2}
                    angle={Math.PI / 7}
                    position={[150, 150, 250]}
                    penumbra={1}
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                /> */}
                {/* <pointLight position={[100, 100, 100]} intensity={1} color="white" />
                <pointLight position={[-100, -100, -100]} intensity={1} color="white" /> */}
                <Frame position={[0, 0, 0]} />
                {/* <pointLight color={0xffffff} intensity={.8} decay={18}
                 position={[6, -3 -3]} castShadow={false} shadowCameraNear={.1} shadowCameraFar={25} shadowBias={0.0015} /> */}
                  <Box position={[0, 0, 0]} />
                <People position={[0, 0, 0]} />


            </Canvas>
        </div>
    )


}

export default App
