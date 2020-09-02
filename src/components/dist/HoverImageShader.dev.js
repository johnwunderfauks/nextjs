"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HoverImageShader = void 0;

/**
 * @author TheFrost / https://codepen.io/frost084/full/OKZNRm
 */
var HoverImageShader = {
  vertexShader: "\n    varying vec2 vUv; \n\n    void main() {\n      vUv = uv;\n\n      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    }\n  ",
  fragmentShader: "\n    precision highp float; \n\n    uniform sampler2D texture;\n    uniform float imageAspectRatio;\n    uniform float aspectRatio;\n    uniform float opacity;\n    uniform float hover;\n    varying vec2 vUv;\n\n    float exponentialInOut(float t) {\n      return t == 0.0 || t == 1.0 \n        ? t \n        : t < 0.5\n          ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\n          : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\n    } \n\n    void main() {\n      vec2 uv = vUv;\n\n      // fix aspectRatio\n      float u = imageAspectRatio/aspectRatio;\n      if(imageAspectRatio > aspectRatio) {\n        u = 1. / u;\n      }\n\n      uv.y *= u;\n      uv.y -= (u)/2.-.5;\n\n      // hover effect\n      float zoomLevel = .2;\n      float hoverLevel = exponentialInOut(min(1., (distance(vec2(.5), uv) * hover) + hover));\n      uv *= 1. - zoomLevel * hoverLevel;\n      uv += zoomLevel / 2. * hoverLevel;\n      uv = clamp(uv, 0., 1.);\n      vec4 color = texture2D(texture, uv);\n      if(hoverLevel > 0.) {\n        hoverLevel = 1.-abs(hoverLevel-.5)*2.;\n        //Pixel displace\n        uv.y += color.r * hoverLevel * .05;\n        color = texture2D(texture, uv);\n        // RGBshift\n        color.r = texture2D(texture, uv+(hoverLevel)*0.01).r;\n        color.g = texture2D(texture, uv-(hoverLevel)*0.01).g;\n      }\n\n      gl_FragColor = mix(vec4(1.,1.,1.,opacity), color, opacity);\n    }\n  ",
  uniforms: {
    texture: {
      type: 't',
      value: ''
    },
    imageAspectRatio: {
      type: 'f',
      value: 1.0
    },
    aspectRatio: {
      type: 'f',
      value: 1.0
    },
    opacity: {
      type: 'f',
      value: 1.0
    },
    hover: {
      type: 'f',
      value: 0.0
    }
  }
};
exports.HoverImageShader = HoverImageShader;