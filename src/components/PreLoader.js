import React, { useRef, useEffect, useState } from 'react'
import { TweenMax } from 'gsap'
import '../styles/canvas.css'
const Page = (props) => {
  const canvas = useRef(null);
  // const { height, width } = useWindowDimensions();
  const [tex, setTex] = useState(null)

  let swirlAni = useRef(null)
  let cc
  // let texture

  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height
  //   };
  // }

  // function useWindowDimensions() {
  //   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }

  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);

  //   return windowDimensions;
  // }

  useEffect(() => {
    var image = document.getElementById('image');
    var texture;
    if (image) {
      image.onload = () => {
        setTimeout(() => {
          //console.log("drawing image")
          //console.log(window.fx)

          cc = window.fx.canvas()
          texture = cc.texture(image);
          setTex(texture)
          cc.draw(texture).update().replace(image);
          TweenMax.to('.rotate', 1, { opacity: 1, delay: .5 })

          //console.log('loaded')
          let x = 205;
          let y = 94;

          let start = false

          swirlAni.current = setInterval(() => {


            if (!start) {
              x = x - 8
              y = y - 6

              if (x < 400) {
                start = true
              }

            }
            else
              if (start) {
                // if (start) {
                x = x + 8
                y = y + 6
                // }
                if (y > window.innerHeight) {
                  start = false
                }
              }
            // console.log(cc)
            if (cc) {
              cc.draw(texture).swirl(x, y, 900, 5).update();
            }

          }, 80)
        }, 600)
      }

    }

    if (!props.isLoading) {
      //console.log('clear')
      TweenMax.to('#pre-loader', 0.8, { opacity: 0, display: 'none' })
      if (tex)
        tex.destroy()
      //setTimeout(() => {
      clearInterval(swirlAni.current)
    }

  }, [props.isLoading]);

  return (

    <div id='pre-loader'  >
      <div className="rotate" id="container" style={{ textAlign: 'center', opacity: 0 }}  >
        <img src={require('../images/swirltest/test4.jpg')} id="image" />
        {/* {(width < 768) ? 
        <img src={require('../images/canvas.jpg')} id="image" style={{ width: window.innerHeight*1.3, height: window.innerHeight*1.3 }} />
         :
        (
          <img src={require('../images/canvas.jpg')} id="image" style={{ width: window.innerHeight, height: window.innerHeight }} />
        )} */}
      </div>
      <p>Redefining Spaces</p>

    </div>
  )

}

export default Page