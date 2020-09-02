"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  function e(r) {
    if (n[r]) return n[r].exports;
    var i = n[r] = {
      exports: {},
      id: r,
      loaded: !1
    };
    return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
  }

  var n = {};
  return e.m = t, e.c = n, e.p = "", e(0);
}([function (t, e, n) {
  t.exports = n(52);
}, function (t, e) {
  var n = t.exports = {
    version: "2.4.0"
  };
  "number" == typeof __e && (__e = n);
}, function (t, e) {
  var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n);
}, function (t, e, n) {
  t.exports = !n(11)(function () {
    return 7 != Object.defineProperty({}, "a", {
      get: function get() {
        return 7;
      }
    }).a;
  });
}, function (t, e) {
  var n = {}.hasOwnProperty;

  t.exports = function (t, e) {
    return n.call(t, e);
  };
}, function (t, e, n) {
  var r = n(10),
      i = n(38),
      o = n(27),
      a = Object.defineProperty;
  e.f = n(3) ? Object.defineProperty : function (t, e, n) {
    if (r(t), e = o(e, !0), r(n), i) try {
      return a(t, e, n);
    } catch (s) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (t[e] = n.value), t;
  };
}, function (t, e, n) {
  var r = n(74),
      i = n(17);

  t.exports = function (t) {
    return r(i(t));
  };
}, function (t, e, n) {
  var r = n(2),
      i = n(1),
      o = n(36),
      a = n(8),
      s = "prototype",
      u = function u(t, e, n) {
    var l,
        c,
        f,
        h = t & u.F,
        d = t & u.G,
        p = t & u.S,
        _ = t & u.P,
        v = t & u.B,
        m = t & u.W,
        x = d ? i : i[e] || (i[e] = {}),
        b = x[s],
        g = d ? r : p ? r[e] : (r[e] || {})[s];

    d && (n = e);

    for (l in n) {
      c = !h && g && void 0 !== g[l], c && l in x || (f = c ? g[l] : n[l], x[l] = d && "function" != typeof g[l] ? n[l] : v && c ? o(f, r) : m && g[l] == f ? function (t) {
        var e = function e(_e, n, r) {
          if (this instanceof t) {
            switch (arguments.length) {
              case 0:
                return new t();

              case 1:
                return new t(_e);

              case 2:
                return new t(_e, n);
            }

            return new t(_e, n, r);
          }

          return t.apply(this, arguments);
        };

        return e[s] = t[s], e;
      }(f) : _ && "function" == typeof f ? o(Function.call, f) : f, _ && ((x.virtual || (x.virtual = {}))[l] = f, t & u.R && b && !b[l] && a(b, l, f)));
    }
  };

  u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
}, function (t, e, n) {
  var r = n(5),
      i = n(14);
  t.exports = n(3) ? function (t, e, n) {
    return r.f(t, e, i(1, n));
  } : function (t, e, n) {
    return t[e] = n, t;
  };
}, function (t, e, n) {
  var r = n(25)("wks"),
      i = n(15),
      o = n(2).Symbol,
      a = "function" == typeof o,
      s = t.exports = function (t) {
    return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t));
  };

  s.store = r;
}, function (t, e, n) {
  var r = n(12);

  t.exports = function (t) {
    if (!r(t)) throw TypeError(t + " is not an object!");
    return t;
  };
}, function (t, e) {
  t.exports = function (t) {
    try {
      return !!t();
    } catch (e) {
      return !0;
    }
  };
}, function (t, e) {
  t.exports = function (t) {
    return "object" == _typeof(t) ? null !== t : "function" == typeof t;
  };
}, function (t, e, n) {
  var r = n(44),
      i = n(18);

  t.exports = Object.keys || function (t) {
    return r(t, i);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    };
  };
}, function (t, e) {
  var n = 0,
      r = Math.random();

  t.exports = function (t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
  };
}, function (t, e, n) {
  !function (e, n) {
    t.exports = n();
  }(this, function () {
    return function (t) {
      function e(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
          exports: {},
          id: r,
          loaded: !1
        };
        return t[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
      }

      var n = {};
      return e.m = t, e.c = n, e.p = "", e(0);
    }([function (t, e, n) {
      t.exports = n(77);
    }, function (t, e) {
      "use strict";

      e.__esModule = !0, e["default"] = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      };
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      e.__esModule = !0;
      var i = n(100),
          o = r(i);

      e["default"] = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o["default"])(t, r.key, r);
          }
        }

        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      }();
    }, function (t, e, n) {
      t.exports = {
        "default": n(108),
        __esModule: !0
      };
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(7),
          l = r(u),
          c = void 0,
          f = (new Float32Array([0, 0, .1, 1, 0, .2, 2, 0, .3, 3, 0, .4]), new Float32Array([1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1]), function (t, e, n) {
        return void 0 === e.cacheAttribLoc && (e.cacheAttribLoc = {}), void 0 === e.cacheAttribLoc[n] && (e.cacheAttribLoc[n] = t.getAttribLocation(e, n)), e.cacheAttribLoc[n];
      }),
          h = function () {
        function t() {
          (0, o["default"])(this, t), this.canvas, this._viewport = [0, 0, 0, 0], this._enabledVertexAttribute = [], this.identityMatrix = l["default"].mat4.create(), this._normalMatrix = l["default"].mat3.create(), this._inverseModelViewMatrix = l["default"].mat3.create(), this._modelMatrix = l["default"].mat4.create(), this._matrix = l["default"].mat4.create(), this._lastMesh = null, this._hasArrayInstance, this._extArrayInstance, this._hasCheckedExt = !1, l["default"].mat4.identity(this.identityMatrix, this.identityMatrix), this.isMobile = !1, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (this.isMobile = !0);
        }

        return (0, s["default"])(t, [{
          key: "init",
          value: function value(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];

            if (null !== t && void 0 !== t) {
              void 0 !== this.canvas && null !== this.canvas && this.destroy(), this.canvas = t, this.setSize(window.innerWidth, window.innerHeight);
              var n = this.canvas.getContext("webgl", e) || this.canvas.getContext("experimental-webgl", e);
              this.initWithGL(n);
            }
          }
        }, {
          key: "initWithGL",
          value: function value(t) {
            this.canvas || (this.canvas = t.canvas), c = this.gl = t;
            var e = ["EXT_shader_texture_lod", "EXT_sRGB", "EXT_frag_depth", "OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear", "OES_standard_derivatives", "WEBGL_depth_texture", "EXT_texture_filter_anisotropic", "ANGLE_instanced_arrays", "WEBGL_draw_buffers"];
            this.extensions = {};

            for (var n = 0; n < e.length; n++) {
              this.extensions[e[n]] = c.getExtension(e[n]);
            }

            this.VERTEX_SHADER = c.VERTEX_SHADER, this.FRAGMENT_SHADER = c.FRAGMENT_SHADER, this.COMPILE_STATUS = c.COMPILE_STATUS, this.DEPTH_TEST = c.DEPTH_TEST, this.CULL_FACE = c.CULL_FACE, this.BLEND = c.BLEND, this.POINTS = c.POINTS, this.LINES = c.LINES, this.TRIANGLES = c.TRIANGLES, this.LINEAR = c.LINEAR, this.NEAREST = c.NEAREST, this.LINEAR_MIPMAP_NEAREST = c.LINEAR_MIPMAP_NEAREST, this.MIRRORED_REPEAT = c.MIRRORED_REPEAT, this.CLAMP_TO_EDGE = c.CLAMP_TO_EDGE, this.SCISSOR_TEST = c.SCISSOR_TEST, this.enable(this.DEPTH_TEST), this.enable(this.CULL_FACE), this.enable(this.BLEND);
          }
        }, {
          key: "setViewport",
          value: function value(t, e, n, r) {
            var i = !1;
            t !== this._viewport[0] && (i = !0), e !== this._viewport[1] && (i = !0), n !== this._viewport[2] && (i = !0), r !== this._viewport[3] && (i = !0), i && (c.viewport(t, e, n, r), this._viewport = [t, e, n, r]);
          }
        }, {
          key: "scissor",
          value: function value(t, e, n, r) {
            c.scissor(t, e, n, r);
          }
        }, {
          key: "clear",
          value: function value(t, e, n, r) {
            c.clearColor(t, e, n, r), c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
          }
        }, {
          key: "setMatrices",
          value: function value(t) {
            this.camera = t, this.rotate(this.identityMatrix);
          }
        }, {
          key: "useShader",
          value: function value(t) {
            this.shader = t, this.shaderProgram = this.shader.shaderProgram;
          }
        }, {
          key: "rotate",
          value: function value(t) {
            l["default"].mat4.copy(this._modelMatrix, t), l["default"].mat4.multiply(this._matrix, this.camera.matrix, this._modelMatrix), l["default"].mat3.fromMat4(this._normalMatrix, this._matrix), l["default"].mat3.invert(this._normalMatrix, this._normalMatrix), l["default"].mat3.transpose(this._normalMatrix, this._normalMatrix), l["default"].mat3.fromMat4(this._inverseModelViewMatrix, this._matrix), l["default"].mat3.invert(this._inverseModelViewMatrix, this._inverseModelViewMatrix);
          }
        }, {
          key: "draw",
          value: function value(t, e) {
            if (t.length) for (var n = 0; n < t.length; n++) {
              this.draw(t[n]);
            } else {
              if (t.instancedAttributes.length > 0) return void this.drawInstance(t);
              t.vao ? this._bindVao(t) : this._lastMesh !== t && this._bindBuffers(t), void 0 !== this.camera && (this.shader.uniform("uProjectionMatrix", "mat4", this.camera.projection), this.shader.uniform("uViewMatrix", "mat4", this.camera.matrix)), this.shader.uniform("uModelMatrix", "mat4", this._modelMatrix), this.shader.uniform("uNormalMatrix", "mat3", this._normalMatrix), this.shader.uniform("uModelViewMatrixInverse", "mat3", this._inverseModelViewMatrix);
              var r = t.drawType;
              void 0 !== e && (r = e), r === c.POINTS ? c.drawArrays(r, 0, t.vertexSize) : c.drawElements(r, t.iBuffer.numItems, c.UNSIGNED_SHORT, 0), t.vao && this._unbindVao(t);
            }
          }
        }, {
          key: "drawInstance",
          value: function value(t) {
            if (!this._hasCheckedExt) {
              var e = this.getExtension("ANGLE_instanced_arrays");
              e ? (this._hasArrayInstance = !0, this._extArrayInstance = e) : this._hasArrayInstance = !1, this._hasCheckedExt = !0;
            }

            if (this._hasArrayInstance) if (t.length) for (var n = 0; n < t.length; n++) {
              this.drawInstance(t[n], mDrawingType);
            } else {
              var r = [],
                  i = this._extArrayInstance;
              this._lastMesh !== t && this._bindBuffers(t);

              for (var o = 1, a = 0; a < t.instancedAttributes.length; a++) {
                var s = t.instancedAttributes[a];
                c.bindBuffer(c.ARRAY_BUFFER, s.buffer);
                var u = f(c, this.shaderProgram, s.name);
                c.vertexAttribPointer(u, s.itemSize, c.FLOAT, !1, 4 * s.itemSize, 0), i.vertexAttribDivisorANGLE(u, 1), r.push(u), -1 === this._enabledVertexAttribute.indexOf(u) && (c.enableVertexAttribArray(u), this._enabledVertexAttribute.push(u)), o = s.numInstance;
              }

              this._instanceCount = o, void 0 !== this.camera && (this.shader.uniform("uProjectionMatrix", "mat4", this.camera.projection), this.shader.uniform("uViewMatrix", "mat4", this.camera.matrix)), this.shader.uniform("uModelMatrix", "mat4", this._modelMatrix), this.shader.uniform("uNormalMatrix", "mat3", this._normalMatrix), this.shader.uniform("uModelViewMatrixInverse", "mat3", this._inverseModelViewMatrix), i.drawElementsInstancedANGLE(t.drawType, t.iBuffer.numItems, c.UNSIGNED_SHORT, 0, this._instanceCount), r.map(function (t) {
                i.vertexAttribDivisorANGLE(t, 0);
              });
            }
          }
        }, {
          key: "_bindVao",
          value: function value(t) {
            t.bindVAO();
          }
        }, {
          key: "_unbindVao",
          value: function value(t) {
            t.unbindVAO();
          }
        }, {
          key: "_bindBuffers",
          value: function value(t) {
            for (var e = 0; e < t.attributes.length; e++) {
              var n = t.attributes[e];
              c.bindBuffer(c.ARRAY_BUFFER, n.buffer);
              var r = f(c, this.shaderProgram, n.name);
              c.vertexAttribPointer(r, n.itemSize, c.FLOAT, !1, 0, 0), -1 === this._enabledVertexAttribute.indexOf(r) && (c.enableVertexAttribArray(r), this._enabledVertexAttribute.push(r));
            }

            c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, t.iBuffer), this._lastMesh = t;
          }
        }, {
          key: "setSize",
          value: function value(t, e) {
            // console.log(e)
            this._width = t, this._height = e - 50, this.canvas.width = this._width, this.canvas.height = this._height, this._aspectRatio = this._width / this._height, c && this.viewport(0, 0, this._width, this._height);
          }
        }, {
          key: "showExtensions",
          value: function value() {
            for (var t in this.extensions) {
              this.extensions[t] && void 0;
            }
          }
        }, {
          key: "checkExtension",
          value: function value(t) {
            return !!this.extensions[t];
          }
        }, {
          key: "getExtension",
          value: function value(t) {
            return this.extensions[t];
          }
        }, {
          key: "enableAlphaBlending",
          value: function value() {
            c.blendFunc(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA);
          }
        }, {
          key: "enableAdditiveBlending",
          value: function value() {
            c.blendFunc(c.ONE, c.ONE);
          }
        }, {
          key: "enable",
          value: function value(t) {
            c.enable(t);
          }
        }, {
          key: "disable",
          value: function value(t) {
            c.disable(t);
          }
        }, {
          key: "viewport",
          value: function value(t, e, n, r) {
            this.setViewport(t, e, n, r);
          }
        }, {
          key: "destroy",
          value: function value() {
            if (this.canvas.parentNode) try {
              this.canvas.parentNode.removeChild(this.canvas);
            } catch (t) {}
            this.canvas = null;
          }
        }, {
          key: "width",
          get: function get() {
            return this._width;
          }
        }, {
          key: "height",
          get: function get() {
            return this._height;
          }
        }, {
          key: "aspectRatio",
          get: function get() {
            return this._aspectRatio;
          }
        }]), t;
      }(),
          d = new h();

      e["default"] = d, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      e.__esModule = !0;
      var i = n(102),
          o = r(i),
          a = n(99),
          s = r(a),
          u = n(57),
          l = r(u);

      e["default"] = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, l["default"])(e)));
        t.prototype = (0, s["default"])(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (o["default"] ? (0, o["default"])(t, e) : t.__proto__ = e);
      };
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      e.__esModule = !0;
      var i = n(57),
          o = r(i);

      e["default"] = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, o["default"])(e)) && "function" != typeof e ? t : e;
      };
    }, function (t, e, n) {
      e.glMatrix = n(10), e.mat2 = n(141), e.mat2d = n(142), e.mat3 = n(70), e.mat4 = n(143), e.quat = n(144), e.vec2 = n(145), e.vec3 = n(71), e.vec4 = n(72);
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(4),
          l = r(u),
          c = (n(146), function (t, e) {
        if (t.length !== e.length) return !1;

        for (var n = 0; n < t.length; n++) {
          if (t[n] !== e[n]) return !1;
        }

        return !0;
      }),
          f = function f(t) {
        return t.slice ? t.slice(0) : new Float32Array(t);
      },
          h = void 0,
          d = n(49),
          p = n(150),
          _ = {
        "float": "uniform1f",
        vec2: "uniform2fv",
        vec3: "uniform3fv",
        vec4: "uniform4fv",
        "int": "uniform1i",
        mat3: "uniformMatrix3fv",
        mat4: "uniformMatrix4fv"
      },
          v = function () {
        function t() {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? d : arguments[0],
              n = arguments.length <= 1 || void 0 === arguments[1] ? p : arguments[1];
          (0, o["default"])(this, t), h = l["default"].gl, this.parameters = [], this.uniformTextures = [], e || (e = d), n || (n = d);

          var r = this._createShaderProgram(e, !0),
              i = this._createShaderProgram(n, !1);

          this._attachShaderProgram(r, i);
        }

        return (0, s["default"])(t, [{
          key: "bind",
          value: function value() {
            l["default"].shader !== this && (h.useProgram(this.shaderProgram), l["default"].useShader(this), this.uniformTextures = []);
          }
        }, {
          key: "uniform",
          value: function value(t, e, n) {
            for (var r = _[e] || e, i = !1, o = void 0, a = -1, s = 0; s < this.parameters.length; s++) {
              if (o = this.parameters[s], o.name === t) {
                i = !0, a = s;
                break;
              }
            }

            var u = !1;
            if (i ? (this.shaderProgram[t] = o.uniformLoc, u = o.isNumber) : (u = "uniform1i" === r || "uniform1f" === r, this.shaderProgram[t] = h.getUniformLocation(this.shaderProgram, t), u ? this.parameters.push({
              name: t,
              type: r,
              value: n,
              uniformLoc: this.shaderProgram[t],
              isNumber: u
            }) : this.parameters.push({
              name: t,
              type: r,
              value: f(n),
              uniformLoc: this.shaderProgram[t],
              isNumber: u
            }), a = this.parameters.length - 1), this.parameters[a].uniformLoc) if (-1 === r.indexOf("Matrix")) {
              if (u) {
                var l = this.parameters[a].value !== n || !i;
                l && (h[r](this.shaderProgram[t], n), this.parameters[a].value = n);
              } else c(this.parameters[a].value, n) && i || (h[r](this.shaderProgram[t], n), this.parameters[a].value = f(n));
            } else c(this.parameters[a].value, n) && i || (h[r](this.shaderProgram[t], !1, n), this.parameters[a].value = f(n));
          }
        }, {
          key: "_createShaderProgram",
          value: function value(t, e) {
            var n = e ? l["default"].VERTEX_SHADER : l["default"].FRAGMENT_SHADER,
                r = h.createShader(n);
            return h.shaderSource(r, t), h.compileShader(r), h.getShaderParameter(r, h.COMPILE_STATUS) ? r : null;
          }
        }, {
          key: "_attachShaderProgram",
          value: function value(t, e) {
            this.shaderProgram = h.createProgram(), h.attachShader(this.shaderProgram, t), h.attachShader(this.shaderProgram, e), h.linkProgram(this.shaderProgram);
          }
        }]), t;
      }();

      e["default"] = v, t.exports = e["default"];
    }, function (t, e) {
      var n = t.exports = {
        version: "2.4.0"
      };
      "number" == typeof __e && (__e = n);
    }, function (t, e) {
      var n = {};
      n.EPSILON = 1e-6, n.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, n.RANDOM = Math.random, n.ENABLE_SIMD = !1, n.SIMD_AVAILABLE = n.ARRAY_TYPE === Float32Array && "SIMD" in this, n.USE_SIMD = n.ENABLE_SIMD && n.SIMD_AVAILABLE, n.setMatrixArrayType = function (t) {
        n.ARRAY_TYPE = t;
      };
      var r = Math.PI / 180;
      n.toRadian = function (t) {
        return t * r;
      }, n.equals = function (t, e) {
        return Math.abs(t - e) <= n.EPSILON * Math.max(1, Math.abs(t), Math.abs(e));
      }, t.exports = n;
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(4),
          l = r(u),
          c = function () {
        function t(e, n) {
          (0, o["default"])(this, t), this._mesh = e, this._shader = n;
        }

        return (0, s["default"])(t, [{
          key: "draw",
          value: function value() {
            this._shader.bind(), l["default"].draw(this.mesh);
          }
        }, {
          key: "mesh",
          get: function get() {
            return this._mesh;
          }
        }, {
          key: "shader",
          get: function get() {
            return this._shader;
          }
        }]), t;
      }();

      e["default"] = c, t.exports = e["default"];
    }, function (t, e) {
      var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = n);
    }, function (t, e, n) {
      var r = n(117),
          i = n(35);

      t.exports = function (t) {
        return r(i(t));
      };
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      e.__esModule = !0;
      var i = n(3),
          o = r(i),
          a = n(101),
          s = r(a);

      e["default"] = function u(t, e, n) {
        null === t && (t = Function.prototype);
        var r = (0, s["default"])(t, e);

        if (void 0 === r) {
          var i = (0, o["default"])(t);
          return null === i ? void 0 : u(i, e, n);
        }

        if ("value" in r) return r.value;
        var a = r.get;
        return void 0 !== a ? a.call(n) : void 0;
      };
    }, function (t, e, n) {
      t.exports = !n(25)(function () {
        return 7 != Object.defineProperty({}, "a", {
          get: function get() {
            return 7;
          }
        }).a;
      });
    }, function (t, e) {
      var n = {}.hasOwnProperty;

      t.exports = function (t, e) {
        return n.call(t, e);
      };
    }, function (t, e, n) {
      var r = n(24),
          i = n(61),
          o = n(46),
          a = Object.defineProperty;
      e.f = n(15) ? Object.defineProperty : function (t, e, n) {
        if (r(t), e = o(e, !0), r(n), i) try {
          return a(t, e, n);
        } catch (s) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t;
      };
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(4),
          l = r(u),
          c = n(7),
          f = r(c),
          h = void 0,
          d = f["default"].vec3,
          p = function p(t, e, n) {
        return void 0 === e.cacheAttribLoc && (e.cacheAttribLoc = {}), void 0 === e.cacheAttribLoc[n] && (e.cacheAttribLoc[n] = t.getAttribLocation(e, n)), e.cacheAttribLoc[n];
      },
          _ = function () {
        function t() {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? 4 : arguments[0];
          (0, o["default"])(this, t), h = l["default"].gl, this.drawType = e, this._attributes = [], this._instancedAttributes = [], this._vertexSize = 0, this._vertices = [], this._texCoords = [], this._normals = [], this._faceNormals = [], this._tangents = [], this._indices = [], this._faces = [], this._extVAO = l["default"].getExtension("OES_vertex_array_object");
        }

        return (0, s["default"])(t, [{
          key: "bindVAO",
          value: function value(t) {
            this._extVAO && (this.shader = t, this._vao || void (this._vao = this._extVAO.createVertexArrayOES()), this._extVAO.bindVertexArrayOES(this._vao));
          }
        }, {
          key: "unbindVAO",
          value: function value() {
            this._extVAO && this._extVAO.bindVertexArrayOES(null);
          }
        }, {
          key: "deleteVAO",
          value: function value() {
            this._extVAO && this._extVAO.deleteVertexArrayOES(this._vao);
          }
        }, {
          key: "bufferVertex",
          value: function value(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                n = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2];

            if (this._vertexSize = t.length, this.bufferData(t, "aVertexPosition", 3, e), this._vertices = t, this._normals.length < this._vertices.length) {
              for (var r = [], i = 0; i < t.length; i++) {
                r.push([1, 0, 0]);
              }

              this.bufferNormal(r, e);
            }

            this._indices.length > 0 && this.drawType === l["default"].TRIANGLES && n && this.generateFaces();
          }
        }, {
          key: "bufferTexCoord",
          value: function value(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            this.bufferData(t, "aTextureCoord", 2, e), this._texCoords = t;
          }
        }, {
          key: "bufferNormal",
          value: function value(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            this.bufferData(t, "aNormal", 3, e), this._normals = t;
          }
        }, {
          key: "bufferIndex",
          value: function value(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                n = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                r = e ? h.DYNAMIC_DRAW : h.STATIC_DRAW;
            this._indices = t, this.iBuffer || (this.iBuffer = h.createBuffer()), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, this.iBuffer), h.bufferData(h.ELEMENT_ARRAY_BUFFER, new Uint16Array(t), r), this.iBuffer.itemSize = 1, this.iBuffer.numItems = t.length, this._vertices.length > 0 && this.drawType === l["default"].TRIANGLES && n && this.generateFaces();
          }
        }, {
          key: "bufferData",
          value: function e(t, n, r) {
            var i = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3],
                o = -1,
                a = 0,
                s = i ? h.DYNAMIC_DRAW : h.STATIC_DRAW,
                e = [],
                u = void 0,
                l = void 0;

            for (r || (r = t[0].length), a = 0; a < this._attributes.length; a++) {
              if (this._attributes[a].name === n) {
                this._attributes[a].data = t, o = a;
                break;
              }
            }

            for (a = 0; a < t.length; a++) {
              for (var c = 0; c < t[a].length; c++) {
                e.push(t[a][c]);
              }
            }

            if (-1 === o) {
              if (u = h.createBuffer(), h.bindBuffer(h.ARRAY_BUFFER, u), l = new Float32Array(e), h.bufferData(h.ARRAY_BUFFER, l, s), this._attributes.push({
                name: n,
                data: t,
                itemSize: r,
                buffer: u,
                dataArray: l
              }), this.vao) {
                h.enableVertexAttribArray(f);
                var f = p(h, this.shader.shaderProgram, n);
                h.vertexAttribPointer(f, r, h.FLOAT, !1, 0, 0);
              }
            } else {
              u = this._attributes[o].buffer, h.bindBuffer(h.ARRAY_BUFFER, u), l = new Float32Array(e), h.bufferData(h.ARRAY_BUFFER, l, s);

              var d = this._attributes.find(function (t) {
                return t.name === n;
              });

              d.data = t, d.itemSize = r, d.dataArray = l;
            }
          }
        }, {
          key: "bufferInstance",
          value: function value(t, e) {
            if (l["default"].checkExtension("ANGLE_instanced_arrays")) {
              var n = -1,
                  r = 0,
                  i = h.STATIC_DRAW,
                  o = [],
                  a = void 0,
                  s = void 0,
                  u = t.length,
                  c = t[0].length;

              for (r = 0; r < this._instancedAttributes.length; r++) {
                if (this._instancedAttributes[r].name === e) {
                  this._instancedAttributes[r].data = t, n = r;
                  break;
                }
              }

              for (r = 0; r < t.length; r++) {
                for (var f = 0; f < t[r].length; f++) {
                  o.push(t[r][f]);
                }
              }

              if (-1 === n) a = h.createBuffer(), h.bindBuffer(h.ARRAY_BUFFER, a), s = new Float32Array(o), h.bufferData(h.ARRAY_BUFFER, s, i), this._instancedAttributes.push({
                name: e,
                data: t,
                itemSize: c,
                buffer: a,
                dataArray: s,
                numInstance: u
              });else {
                a = this._instancedAttributes[n].buffer, h.bindBuffer(h.ARRAY_BUFFER, a), s = new Float32Array(o), h.bufferData(h.ARRAY_BUFFER, s, i);

                var d = this._instancedAttributes.find(function (t) {
                  return t.name === e;
                });

                d.data = t, d.itemSize = c, d.dataArray = s;
              }
            }
          }
        }, {
          key: "computeNormals",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
            this.generateFaces(), t ? this._computeFaceNormals() : this._computeVertexNormals();
          }
        }, {
          key: "computeTangents",
          value: function value() {}
        }, {
          key: "_computeFaceNormals",
          value: function value() {
            for (var t = void 0, e = void 0, n = [], r = 0; r < this._indices.length; r += 3) {
              t = r / 3, e = this._faces[t];
              var i = e.normal;
              n[e.indices[0]] = i, n[e.indices[1]] = i, n[e.indices[2]] = i;
            }

            this.bufferNormal(n);
          }
        }, {
          key: "_computeVertexNormals",
          value: function value() {
            for (var t = void 0, e = d.create(), n = [], r = 0; r < this._vertices.length; r++) {
              d.set(e, 0, 0, 0);

              for (var i = 0; i < this._faces.length; i++) {
                t = this._faces[i], t.indices.indexOf(r) >= 0 && (e[0] += t.normal[0], e[1] += t.normal[1], e[2] += t.normal[2]);
              }

              d.normalize(e, e), n.push([e[0], e[1], e[2]]);
            }

            this.bufferNormal(n);
          }
        }, {
          key: "generateFaces",
          value: function value() {
            for (var t = void 0, e = void 0, n = void 0, r = void 0, i = void 0, o = void 0, a = (d.create(), d.create(), d.create(), 0); a < this._indices.length; a += 3) {
              t = this._indices[a], e = this._indices[a + 1], n = this._indices[a + 2], r = this._vertices[t], i = this._vertices[e], o = this._vertices[n];
              var s = {
                indices: [t, e, n],
                vertices: [r, i, o]
              };

              this._faces.push(s);
            }
          }
        }, {
          key: "vao",
          get: function get() {
            return this._vao;
          }
        }, {
          key: "vertices",
          get: function get() {
            return this._vertices;
          }
        }, {
          key: "normals",
          get: function get() {
            return this._normals;
          }
        }, {
          key: "coords",
          get: function get() {
            return this._texCoords;
          }
        }, {
          key: "indices",
          get: function get() {
            return this._indices;
          }
        }, {
          key: "attributes",
          get: function get() {
            return this._attributes;
          }
        }, {
          key: "instancedAttributes",
          get: function get() {
            return this._instancedAttributes;
          }
        }, {
          key: "vertexSize",
          get: function get() {
            return this._vertexSize;
          }
        }, {
          key: "hasNormals",
          get: function get() {
            return 0 !== this._normals.length;
          }
        }, {
          key: "hasTangents",
          get: function get() {
            return 0 !== this._tangents.length;
          }
        }, {
          key: "faces",
          get: function get() {
            return this._faces;
          }
        }]), t;
      }();

      e["default"] = _, t.exports = e["default"];
    }, function (t, e, n) {
      var r = n(12),
          i = n(9),
          o = n(59),
          a = n(20),
          s = "prototype",
          u = function u(t, e, n) {
        var l,
            c,
            f,
            h = t & u.F,
            d = t & u.G,
            p = t & u.S,
            _ = t & u.P,
            v = t & u.B,
            m = t & u.W,
            x = d ? i : i[e] || (i[e] = {}),
            b = x[s],
            g = d ? r : p ? r[e] : (r[e] || {})[s];

        d && (n = e);

        for (l in n) {
          c = !h && g && void 0 !== g[l], c && l in x || (f = c ? g[l] : n[l], x[l] = d && "function" != typeof g[l] ? n[l] : v && c ? o(f, r) : m && g[l] == f ? function (t) {
            var e = function e(_e2, n, r) {
              if (this instanceof t) {
                switch (arguments.length) {
                  case 0:
                    return new t();

                  case 1:
                    return new t(_e2);

                  case 2:
                    return new t(_e2, n);
                }

                return new t(_e2, n, r);
              }

              return t.apply(this, arguments);
            };

            return e[s] = t[s], e;
          }(f) : _ && "function" == typeof f ? o(Function.call, f) : f, _ && ((x.virtual || (x.virtual = {}))[l] = f, t & u.R && b && !b[l] && a(b, l, f)));
        }
      };

      u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u;
    }, function (t, e, n) {
      var r = n(17),
          i = n(28);
      t.exports = n(15) ? function (t, e, n) {
        return r.f(t, e, i(1, n));
      } : function (t, e, n) {
        return t[e] = n, t;
      };
    }, function (t, e, n) {
      var r = n(44)("wks"),
          i = n(29),
          o = n(12).Symbol,
          a = "function" == typeof o,
          s = t.exports = function (t) {
        return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t));
      };

      s.store = r;
    }, function (t, e) {
      "use strict";

      function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var r = function () {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
          }
        }

        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      }(),
          i = 60,
          o = function () {
        function t() {
          n(this, t), this._delayTasks = [], this._nextTasks = [], this._deferTasks = [], this._highTasks = [], this._usurpTask = [], this._enterframeTasks = [], this._idTable = 0, this._loop();
        }

        return r(t, [{
          key: "addEF",
          value: function value(t, e) {
            e = e || [];
            var n = this._idTable;
            return this._enterframeTasks[n] = {
              func: t,
              params: e
            }, this._idTable++, n;
          }
        }, {
          key: "removeEF",
          value: function value(t) {
            return void 0 !== this._enterframeTasks[t] && (this._enterframeTasks[t] = null), -1;
          }
        }, {
          key: "delay",
          value: function value(t, e, n) {
            var r = new Date().getTime(),
                i = {
              func: t,
              params: e,
              delay: n,
              time: r
            };

            this._delayTasks.push(i);
          }
        }, {
          key: "defer",
          value: function value(t, e) {
            var n = {
              func: t,
              params: e
            };

            this._deferTasks.push(n);
          }
        }, {
          key: "next",
          value: function value(t, e) {
            var n = {
              func: t,
              params: e
            };

            this._nextTasks.push(n);
          }
        }, {
          key: "usurp",
          value: function value(t, e) {
            var n = {
              func: t,
              params: e
            };

            this._usurpTask.push(n);
          }
        }, {
          key: "_process",
          value: function value() {
            var t = 0,
                e = void 0,
                n = void 0,
                r = void 0;

            for (t = 0; t < this._enterframeTasks.length; t++) {
              e = this._enterframeTasks[t], null !== e && void 0 !== e && e.func(e.params);
            }

            for (; this._highTasks.length > 0;) {
              e = this._highTasks.pop(), e.func(e.params);
            }

            var o = new Date().getTime();

            for (t = 0; t < this._delayTasks.length; t++) {
              e = this._delayTasks[t], o - e.time > e.delay && (e.func(e.params), this._delayTasks.splice(t, 1));
            }

            for (o = new Date().getTime(), n = 1e3 / i; this._deferTasks.length > 0;) {
              if (e = this._deferTasks.shift(), r = new Date().getTime(), !(n > r - o)) {
                this._deferTasks.unshift(e);

                break;
              }

              e.func(e.params);
            }

            for (o = new Date().getTime(), n = 1e3 / i; this._usurpTask.length > 0;) {
              e = this._usurpTask.shift(), r = new Date().getTime(), n > r - o && e.func(e.params);
            }

            this._highTasks = this._highTasks.concat(this._nextTasks), this._nextTasks = [], this._usurpTask = [];
          }
        }, {
          key: "_loop",
          value: function value() {
            var t = this;
            this._process(), window.requestAnimationFrame(function () {
              return t._loop();
            });
          }
        }]), t;
      }(),
          a = new o();

      e["default"] = a;
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var i = n(18),
          o = r(i),
          a = {};
      a.plane = function (t, e, n) {
        for (var r = arguments.length <= 3 || void 0 === arguments[3] ? "xy" : arguments[3], i = arguments.length <= 4 || void 0 === arguments[4] ? 4 : arguments[4], a = [], s = [], u = [], l = [], c = t / n, f = e / n, h = 1 / n, d = .5 * -t, p = .5 * -e, _ = 0, v = 0; n > v; v++) {
          for (var m = 0; n > m; m++) {
            var x = c * v + d,
                b = f * m + p,
                g = v / n,
                M = m / n;
            "xz" === r ? (a.push([x, 0, b + f]), a.push([x + c, 0, b + f]), a.push([x + c, 0, b]), a.push([x, 0, b]), s.push([g, 1 - (M + h)]), s.push([g + h, 1 - (M + h)]), s.push([g + h, 1 - M]), s.push([g, 1 - M]), l.push([0, 1, 0]), l.push([0, 1, 0]), l.push([0, 1, 0]), l.push([0, 1, 0])) : "yz" === r ? (a.push([0, b, x]), a.push([0, b, x + c]), a.push([0, b + f, x + c]), a.push([0, b + f, x]), s.push([g, M]), s.push([g + h, M]), s.push([g + h, M + h]), s.push([g, M + h]), l.push([1, 0, 0]), l.push([1, 0, 0]), l.push([1, 0, 0]), l.push([1, 0, 0])) : (a.push([x, b, 0]), a.push([x + c, b, 0]), a.push([x + c, b + f, 0]), a.push([x, b + f, 0]), s.push([g, M]), s.push([g + h, M]), s.push([g + h, M + h]), s.push([g, M + h]), l.push([0, 0, 1]), l.push([0, 0, 1]), l.push([0, 0, 1]), l.push([0, 0, 1])), u.push(4 * _ + 0), u.push(4 * _ + 1), u.push(4 * _ + 2), u.push(4 * _ + 0), u.push(4 * _ + 2), u.push(4 * _ + 3), _++;
          }
        }

        var y = new o["default"](i);
        return y.bufferVertex(a), y.bufferTexCoord(s), y.bufferIndex(u), y.bufferNormal(l), y;
      }, a.sphere = function (t, e) {
        function n(n, r) {
          var i = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
              o = n / e * Math.PI - .5 * Math.PI,
              a = r / e * Math.PI * 2,
              s = i ? 1 : t,
              u = [];
          u[1] = Math.sin(o) * s;
          var l = Math.cos(o) * s;
          u[0] = Math.cos(a) * l, u[2] = Math.sin(a) * l;
          var c = 1e4;
          return u[0] = Math.floor(u[0] * c) / c, u[1] = Math.floor(u[1] * c) / c, u[2] = Math.floor(u[2] * c) / c, u;
        }

        for (var r = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2], i = arguments.length <= 3 || void 0 === arguments[3] ? 4 : arguments[3], a = [], s = [], u = [], l = [], c = 1 / e, f = 0, h = 0; e > h; h++) {
          for (var d = 0; e > d; d++) {
            a.push(n(h, d)), a.push(n(h + 1, d)), a.push(n(h + 1, d + 1)), a.push(n(h, d + 1)), l.push(n(h, d, !0)), l.push(n(h + 1, d, !0)), l.push(n(h + 1, d + 1, !0)), l.push(n(h, d + 1, !0));

            var p = d / e,
                _ = h / e;

            s.push([1 - p, _]), s.push([1 - p, _ + c]), s.push([1 - p - c, _ + c]), s.push([1 - p - c, _]), u.push(4 * f + 0), u.push(4 * f + 1), u.push(4 * f + 2), u.push(4 * f + 0), u.push(4 * f + 2), u.push(4 * f + 3), f++;
          }
        }

        r && u.reverse();
        var v = new o["default"](i);
        return v.bufferVertex(a), v.bufferTexCoord(s), v.bufferIndex(u), v.bufferNormal(l), v;
      }, a.cube = function (t, e, n) {
        var r = arguments.length <= 3 || void 0 === arguments[3] ? 4 : arguments[3];
        e = e || t, n = n || t;
        var i = t / 2,
            a = e / 2,
            s = n / 2,
            u = [],
            l = [],
            c = [],
            f = [],
            h = 0;
        u.push([-i, a, -s]), u.push([i, a, -s]), u.push([i, -a, -s]), u.push([-i, -a, -s]), f.push([0, 0, -1]), f.push([0, 0, -1]), f.push([0, 0, -1]), f.push([0, 0, -1]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([i, a, -s]), u.push([i, a, s]), u.push([i, -a, s]), u.push([i, -a, -s]), f.push([1, 0, 0]), f.push([1, 0, 0]), f.push([1, 0, 0]), f.push([1, 0, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([i, a, s]), u.push([-i, a, s]), u.push([-i, -a, s]), u.push([i, -a, s]), f.push([0, 0, 1]), f.push([0, 0, 1]), f.push([0, 0, 1]), f.push([0, 0, 1]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([-i, a, s]), u.push([-i, a, -s]), u.push([-i, -a, -s]), u.push([-i, -a, s]), f.push([-1, 0, 0]), f.push([-1, 0, 0]), f.push([-1, 0, 0]), f.push([-1, 0, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([-i, a, s]), u.push([i, a, s]), u.push([i, a, -s]), u.push([-i, a, -s]), f.push([0, 1, 0]), f.push([0, 1, 0]), f.push([0, 1, 0]), f.push([0, 1, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++, u.push([-i, -a, -s]), u.push([i, -a, -s]), u.push([i, -a, s]), u.push([-i, -a, s]), f.push([0, -1, 0]), f.push([0, -1, 0]), f.push([0, -1, 0]), f.push([0, -1, 0]), l.push([0, 0]), l.push([1, 0]), l.push([1, 1]), l.push([0, 1]), c.push(4 * h + 0), c.push(4 * h + 1), c.push(4 * h + 2), c.push(4 * h + 0), c.push(4 * h + 2), c.push(4 * h + 3), h++;
        var d = new o["default"](r);
        return d.bufferVertex(u), d.bufferTexCoord(l), d.bufferIndex(c), d.bufferNormal(f), d;
      }, a.skybox = function (t) {
        var e = arguments.length <= 1 || void 0 === arguments[1] ? 4 : arguments[1],
            n = [],
            r = [],
            i = [],
            a = [],
            s = 0;
        n.push([t, t, -t]), n.push([-t, t, -t]), n.push([-t, -t, -t]), n.push([t, -t, -t]), a.push([0, 0, -1]), a.push([0, 0, -1]), a.push([0, 0, -1]), a.push([0, 0, -1]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * s + 0), i.push(4 * s + 1), i.push(4 * s + 2), i.push(4 * s + 0), i.push(4 * s + 2), i.push(4 * s + 3), s++, n.push([t, -t, -t]), n.push([t, -t, t]), n.push([t, t, t]), n.push([t, t, -t]), a.push([1, 0, 0]), a.push([1, 0, 0]), a.push([1, 0, 0]), a.push([1, 0, 0]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * s + 0), i.push(4 * s + 1), i.push(4 * s + 2), i.push(4 * s + 0), i.push(4 * s + 2), i.push(4 * s + 3), s++, n.push([-t, t, t]), n.push([t, t, t]), n.push([t, -t, t]), n.push([-t, -t, t]), a.push([0, 0, 1]), a.push([0, 0, 1]), a.push([0, 0, 1]), a.push([0, 0, 1]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * s + 0), i.push(4 * s + 1), i.push(4 * s + 2), i.push(4 * s + 0), i.push(4 * s + 2), i.push(4 * s + 3), s++, n.push([-t, -t, t]), n.push([-t, -t, -t]), n.push([-t, t, -t]), n.push([-t, t, t]), a.push([-1, 0, 0]), a.push([-1, 0, 0]), a.push([-1, 0, 0]), a.push([-1, 0, 0]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * s + 0), i.push(4 * s + 1), i.push(4 * s + 2), i.push(4 * s + 0), i.push(4 * s + 2), i.push(4 * s + 3), s++, n.push([t, t, t]), n.push([-t, t, t]), n.push([-t, t, -t]), n.push([t, t, -t]), a.push([0, 1, 0]), a.push([0, 1, 0]), a.push([0, 1, 0]), a.push([0, 1, 0]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * s + 0), i.push(4 * s + 1), i.push(4 * s + 2), i.push(4 * s + 0), i.push(4 * s + 2), i.push(4 * s + 3), s++, n.push([t, -t, -t]), n.push([-t, -t, -t]), n.push([-t, -t, t]), n.push([t, -t, t]), a.push([0, -1, 0]), a.push([0, -1, 0]), a.push([0, -1, 0]), a.push([0, -1, 0]), r.push([0, 0]), r.push([1, 0]), r.push([1, 1]), r.push([0, 1]), i.push(4 * s + 0), i.push(4 * s + 1), i.push(4 * s + 2), i.push(4 * s + 0), i.push(4 * s + 2), i.push(4 * s + 3);
        var u = new o["default"](e);
        return u.bufferVertex(n), u.bufferTexCoord(r), u.bufferIndex(i), u.bufferNormal(a), u;
      }, a.bigTriangle = function () {
        var t = [2, 1, 0],
            e = [[-1, -1], [-1, 4], [4, -1]],
            n = new o["default"]();
        return n.bufferData(e, "aPosition", 2), n.bufferIndex(t), n;
      }, e["default"] = a, t.exports = e["default"];
    }, function (t, e, n) {
      var r = n(26);

      t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    }, function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (e) {
          return !0;
        }
      };
    }, function (t, e) {
      t.exports = function (t) {
        return "object" == _typeof(t) ? null !== t : "function" == typeof t;
      };
    }, function (t, e, n) {
      var r = n(66),
          i = n(36);

      t.exports = Object.keys || function (t) {
        return r(t, i);
      };
    }, function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        };
      };
    }, function (t, e) {
      var n = 0,
          r = Math.random();

      t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
      };
    }, function (t, e) {
      t.exports = "// simpleColor.frag\n\n#define SHADER_NAME SIMPLE_COLOR\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform vec3 color;\nuniform float opacity;\n\nvoid main(void) {\n    gl_FragColor = vec4(color, opacity);\n}";
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(7),
          l = r(u),
          c = function () {
        function t() {
          (0, o["default"])(this, t), this._matrix = l["default"].mat4.create(), this._quat = l["default"].quat.create(), this._orientation = l["default"].mat4.create(), this._projection = l["default"].mat4.create(), this.position = l["default"].vec3.create();
        }

        return (0, s["default"])(t, [{
          key: "lookAt",
          value: function value(t, e) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? [0, 1, 0] : arguments[2];
            this._eye = vec3.clone(t), this._center = vec3.clone(e), l["default"].vec3.copy(this.position, t), l["default"].mat4.identity(this._matrix), l["default"].mat4.lookAt(this._matrix, t, e, n);
          }
        }, {
          key: "setFromOrientation",
          value: function value(t, e, n, r) {
            l["default"].quat.set(this._quat, t, e, n, r), l["default"].mat4.fromQuat(this._orientation, this._quat), l["default"].mat4.translate(this._matrix, this._orientation, this.positionOffset);
          }
        }, {
          key: "setProjection",
          value: function value(t) {
            this._projection = l["default"].mat4.clone(t);
          }
        }, {
          key: "setView",
          value: function value(t) {
            this._matrix = l["default"].mat4.clone(t);
          }
        }, {
          key: "setFromViewProj",
          value: function value(t, e) {
            this.setView(t), this.setProjection(e);
          }
        }, {
          key: "matrix",
          get: function get() {
            return this._matrix;
          }
        }, {
          key: "viewMatrix",
          get: function get() {
            return this._matrix;
          }
        }, {
          key: "projection",
          get: function get() {
            return this._projection;
          }
        }, {
          key: "projectionMatrix",
          get: function get() {
            return this._projection;
          }
        }, {
          key: "eye",
          get: function get() {
            return this._eye;
          }
        }, {
          key: "center",
          get: function get() {
            return this._center;
          }
        }]), t;
      }();

      e["default"] = c, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(5),
          d = r(h),
          p = n(31),
          _ = r(p),
          v = n(54),
          m = r(v),
          x = n(7),
          b = r(x),
          g = b["default"].mat4,
          M = b["default"].vec3,
          y = g.create(),
          E = M.create(),
          S = function (t) {
        function e() {
          return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
        }

        return (0, d["default"])(e, t), (0, l["default"])(e, [{
          key: "setPerspective",
          value: function value(t, e, n, r) {
            this._fov = t, this._near = n, this._far = r, this._aspectRatio = e, b["default"].mat4.perspective(this._projection, t, e, n, r);
          }
        }, {
          key: "setAspectRatio",
          value: function value(t) {
            this._aspectRatio = t, b["default"].mat4.perspective(this.projection, this._fov, t, this._near, this._far);
          }
        }, {
          key: "generateRay",
          value: function value(t, e) {
            var n = this.projectionMatrix,
                r = this.viewMatrix;
            return g.multiply(y, n, r), g.invert(y, y), M.transformMat4(E, t, y), M.sub(E, E, this.position), M.normalize(E, E), e ? (e.origin = this.position, e.direction = E) : e = new m["default"](this.position, E), e;
          }
        }]), e;
      }(_["default"]);

      e["default"] = S, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = function () {
        function t() {
          var e = this,
              n = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
          (0, o["default"])(this, t), this._req = new XMLHttpRequest(), this._req.addEventListener("load", function (t) {
            return e._onLoaded(t);
          }), this._req.addEventListener("progress", function (t) {
            return e._onProgress(t);
          }), n && (this._req.responseType = "arraybuffer");
        }

        return (0, s["default"])(t, [{
          key: "load",
          value: function value(t, e) {
            this._callback = e, this._req.open("GET", t), this._req.send();
          }
        }, {
          key: "_onLoaded",
          value: function value() {
            this._callback(this._req.response);
          }
        }, {
          key: "_onProgress",
          value: function value() {}
        }]), t;
      }();

      e["default"] = u, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(22),
          l = r(u),
          c = function () {
        function t(e) {
          var n = this,
              r = arguments.length <= 1 || void 0 === arguments[1] ? .1 : arguments[1];
          (0, o["default"])(this, t), this.easing = r, this._value = e, this._targetValue = e, this._efIndex = l["default"].addEF(function () {
            return n._update();
          });
        }

        return (0, s["default"])(t, [{
          key: "_update",
          value: function value() {
            var t = 1e-4;
            this._checkLimit(), this._value += (this._targetValue - this._value) * this.easing, Math.abs(this._targetValue - this._value) < t && (this._value = this._targetValue);
          }
        }, {
          key: "setTo",
          value: function value(t) {
            this._targetValue = this._value = t;
          }
        }, {
          key: "add",
          value: function value(t) {
            this._targetValue += t;
          }
        }, {
          key: "limit",
          value: function value(t, e) {
            return t > e ? void this.limit(e, t) : (this._min = t, this._max = e, void this._checkLimit());
          }
        }, {
          key: "_checkLimit",
          value: function value() {
            void 0 !== this._min && this._targetValue < this._min && (this._targetValue = this._min), void 0 !== this._max && this._targetValue > this._max && (this._targetValue = this._max);
          }
        }, {
          key: "destroy",
          value: function value() {
            l["default"].removeEF(this._efIndex);
          }
        }, {
          key: "value",
          set: function set(t) {
            this._targetValue = t;
          },
          get: function get() {
            return this._value;
          }
        }, {
          key: "targetValue",
          get: function get() {
            return this._targetValue;
          }
        }]), t;
      }();

      e["default"] = c, t.exports = e["default"];
    }, function (t, e) {
      t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    }, function (t, e) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function (t, e) {
      t.exports = {};
    }, function (t, e) {
      t.exports = !0;
    }, function (t, e, n) {
      var r = n(24),
          i = n(123),
          o = n(36),
          a = n(43)("IE_PROTO"),
          s = function s() {},
          u = "prototype",
          _l = function l() {
        var t,
            e = n(60)("iframe"),
            r = o.length,
            i = ">";

        for (e.style.display = "none", n(116).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + i), t.close(), _l = t.F; r--;) {
          delete _l[u][o[r]];
        }

        return _l();
      };

      t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (s[u] = r(t), n = new s(), s[u] = null, n[a] = t) : n = _l(), void 0 === e ? n : i(n, e);
      };
    }, function (t, e, n) {
      var r = n(41),
          i = n(28),
          o = n(13),
          a = n(46),
          s = n(16),
          u = n(61),
          l = Object.getOwnPropertyDescriptor;
      e.f = n(15) ? l : function (t, e) {
        if (t = o(t), e = a(e, !0), u) try {
          return l(t, e);
        } catch (n) {}
        return s(t, e) ? i(!r.f.call(t, e), t[e]) : void 0;
      };
    }, function (t, e) {
      e.f = {}.propertyIsEnumerable;
    }, function (t, e, n) {
      var r = n(17).f,
          i = n(16),
          o = n(21)("toStringTag");

      t.exports = function (t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
          configurable: !0,
          value: e
        });
      };
    }, function (t, e, n) {
      var r = n(44)("keys"),
          i = n(29);

      t.exports = function (t) {
        return r[t] || (r[t] = i(t));
      };
    }, function (t, e, n) {
      var r = n(12),
          i = "__core-js_shared__",
          o = r[i] || (r[i] = {});

      t.exports = function (t) {
        return o[t] || (o[t] = {});
      };
    }, function (t, e) {
      var n = Math.ceil,
          r = Math.floor;

      t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
      };
    }, function (t, e, n) {
      var r = n(26);

      t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function (t, e, n) {
      var r = n(12),
          i = n(9),
          o = n(38),
          a = n(48),
          s = n(17).f;

      t.exports = function (t) {
        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
          value: a.f(t)
        });
      };
    }, function (t, e, n) {
      e.f = n(21);
    }, function (t, e) {
      t.exports = "// basic.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}";
    }, function (t, e) {
      t.exports = "// copy.frag\n\n#define SHADER_NAME COPY_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\n\nvarying vec2 vTextureCoord;\nuniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = texture2D(texture, vTextureCoord);\n}";
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(4),
          l = r(u),
          c = n(147),
          f = r(c),
          h = void 0,
          d = 131072,
          p = 7,
          _ = 31,
          v = function () {
        function t(e) {
          var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
              r = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2];
          if ((0, o["default"])(this, t), h = l["default"].gl, r) return void (this.texture = e);
          var i = e.length > 6;
          e[0].mipmapCount && (i = e[0].mipmapCount > 1), this.texture = h.createTexture(), this.magFilter = n.magFilter || h.LINEAR, this.minFilter = n.minFilter || h.LINEAR_MIPMAP_LINEAR, this.wrapS = n.wrapS || h.CLAMP_TO_EDGE, this.wrapT = n.wrapT || h.CLAMP_TO_EDGE, i || this.minFilter != h.LINEAR_MIPMAP_LINEAR || (this.minFilter = h.LINEAR), h.bindTexture(h.TEXTURE_CUBE_MAP, this.texture);
          var a = [h.TEXTURE_CUBE_MAP_POSITIVE_X, h.TEXTURE_CUBE_MAP_NEGATIVE_X, h.TEXTURE_CUBE_MAP_POSITIVE_Y, h.TEXTURE_CUBE_MAP_NEGATIVE_Y, h.TEXTURE_CUBE_MAP_POSITIVE_Z, h.TEXTURE_CUBE_MAP_NEGATIVE_Z],
              s = 1,
              u = 0;
          if (s = e.length / 6, this.numLevels = s, i) for (var c = 0; 6 > c; c++) {
            for (var f = 0; s > f; f++) {
              h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1), u = c * s + f, e[u].shape ? h.texImage2D(a[c], f, h.RGBA, e[u].shape[0], e[u].shape[1], 0, h.RGBA, h.FLOAT, e[u].data) : h.texImage2D(a[c], f, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[u]), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_T, this.wrapT), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MIN_FILTER, this.minFilter);
            }
          } else {
            for (var d = 0, p = 0; 6 > p; p++) {
              d = p * s, h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1), e[d].shape ? h.texImage2D(a[p], 0, h.RGBA, e[d].shape[0], e[d].shape[1], 0, h.RGBA, h.FLOAT, e[d].data) : h.texImage2D(a[p], 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e[d]), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_T, this.wrapT), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MIN_FILTER, this.minFilter);
            }

            h.generateMipmap(h.TEXTURE_CUBE_MAP);
          }
          h.bindTexture(h.TEXTURE_CUBE_MAP, null);
        }

        return (0, s["default"])(t, [{
          key: "bind",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
            l["default"].shader && (h.activeTexture(h.TEXTURE0 + t), h.bindTexture(h.TEXTURE_CUBE_MAP, this.texture), h.uniform1i(l["default"].shader.uniformTextures[t], t), this._bindIndex = t);
          }
        }, {
          key: "unbind",
          value: function value() {
            h.bindTexture(h.TEXTURE_CUBE_MAP, null);
          }
        }]), t;
      }();

      v.parseDDS = function (t) {
        var e = (0, f["default"])(t),
            n = e.flags,
            r = new Int32Array(t, 0, _),
            i = 1;
        n & d && (i = Math.max(1, r[p]));
        var o = e.images.map(function (e) {
          var n = new Float32Array(t.slice(e.offset, e.offset + e.length));
          return {
            data: n,
            shape: e.shape,
            mipmapCount: i
          };
        });
        return new v(o);
      }, e["default"] = v, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      function i(t) {
        return 0 !== t && !(t & t - 1);
      }

      function o(t) {
        var e = t.width || t.videoWidth,
            n = t.height || t.videoHeight;
        return e && n ? i(e) && i(n) : !1;
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(4),
          f = r(c),
          h = void 0,
          d = function () {
        function t(e) {
          var n = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
              r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
          if ((0, s["default"])(this, t), h = f["default"].gl, n) this._texture = e;else {
            this._mSource = e, this._texture = h.createTexture(), this._isVideo = "VIDEO" === e.tagName, this.magFilter = r.magFilter || h.LINEAR, this.minFilter = r.minFilter || h.LINEAR_MIPMAP_NEAREST, this.wrapS = r.wrapS || h.MIRRORED_REPEAT, this.wrapT = r.wrapT || h.MIRRORED_REPEAT;
            var i = e.width || e.videoWidth;
            i ? o(e) || (this.wrapS = this.wrapT = h.CLAMP_TO_EDGE, this.minFilter === h.LINEAR_MIPMAP_NEAREST && (this.minFilter = h.LINEAR)) : (this.wrapS = this.wrapT = h.CLAMP_TO_EDGE, this.minFilter === h.LINEAR_MIPMAP_NEAREST && (this.minFilter = h.LINEAR)), h.bindTexture(h.TEXTURE_2D, this._texture), h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !0), e.exposure ? h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, e.shape[0], e.shape[1], 0, h.RGBA, h.FLOAT, e.data) : h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, e), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this.minFilter), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, this.wrapT);
            var a = f["default"].getExtension("EXT_texture_filter_anisotropic");

            if (a) {
              var u = h.getParameter(a.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
              h.texParameterf(h.TEXTURE_2D, a.TEXTURE_MAX_ANISOTROPY_EXT, u);
            }

            this.minFilter === h.LINEAR_MIPMAP_NEAREST && h.generateMipmap(h.TEXTURE_2D), h.bindTexture(h.TEXTURE_2D, null);
          }
        }

        return (0, l["default"])(t, [{
          key: "minFilter",
          value: function value(t) {
            return t !== h.LINEAR && t !== h.NEAREST && t !== h.LINEAR_MIPMAP_NEAREST ? this : (this.minFilter = t, this);
          }
        }, {
          key: "magFilter",
          value: function value(t) {
            return t !== h.LINEAR && t !== h.NEAREST && t !== h.LINEAR_MIPMAP_NEAREST ? this : (this.magFilter = t, this);
          }
        }, {
          key: "wrapS",
          value: function value(t) {
            return t !== h.CLAMP_TO_EDGE && t !== h.REPEAT && t !== h.MIRRORED_REPEAT ? this : (this.wrapS = t, this);
          }
        }, {
          key: "wrapT",
          value: function value(t) {
            return t !== h.CLAMP_TO_EDGE && t !== h.REPEAT && t !== h.MIRRORED_REPEAT ? this : (this.wrapT = t, this);
          }
        }, {
          key: "updateTexture",
          value: function value(t) {
            t && (this._mSource = t), h.bindTexture(h.TEXTURE_2D, this._texture), h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !0), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, this._mSource), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this.minFilter), this.minFilter === h.LINEAR_MIPMAP_NEAREST && h.generateMipmap(h.TEXTURE_2D), h.bindTexture(h.TEXTURE_2D, null);
          }
        }, {
          key: "bind",
          value: function value(t) {
            void 0 === t && (t = 0), f["default"].shader && (h.activeTexture(h.TEXTURE0 + t), h.bindTexture(h.TEXTURE_2D, this._texture), this._bindIndex = t);
          }
        }, {
          key: "texture",
          get: function get() {
            return this._texture;
          }
        }]), t;
      }(),
          p = void 0,
          _ = void 0,
          v = void 0;

      d.whiteTexture = function () {
        if (void 0 === p) {
          var t = document.createElement("canvas");
          t.width = t.height = 4;
          var e = t.getContext("2d");
          e.fillStyle = "#fff", e.fillRect(0, 0, 4, 4), p = new d(t);
        }

        return p;
      }, d.greyTexture = function () {
        if (void 0 === _) {
          var t = document.createElement("canvas");
          t.width = t.height = 4;
          var e = t.getContext("2d");
          e.fillStyle = "rgb(127, 127, 127)", e.fillRect(0, 0, 4, 4), _ = new d(t);
        }

        return _;
      }, d.blackTexture = function () {
        if (void 0 === v) {
          var t = document.createElement("canvas");
          t.width = t.height = 4;
          var e = t.getContext("2d");
          e.fillStyle = "rgb(127, 127, 127)", e.fillRect(0, 0, 4, 4), v = new d(t);
        }

        return v;
      }, e["default"] = d, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(5),
          d = r(h),
          p = n(31),
          _ = r(p),
          v = n(7),
          m = r(v),
          x = function (t) {
        function e() {
          (0, s["default"])(this, e);
          var t = (0, f["default"])(this, (0, o["default"])(e).call(this)),
              n = m["default"].vec3.clone([0, 0, 5]),
              r = m["default"].vec3.create(),
              i = m["default"].vec3.clone([0, -1, 0]);
          return t.lookAt(n, r, i), t.ortho(1, -1, 1, -1), t;
        }

        return (0, d["default"])(e, t), (0, l["default"])(e, [{
          key: "setBoundary",
          value: function value(t, e, n, r) {
            this.ortho(t, e, n, r);
          }
        }, {
          key: "ortho",
          value: function value(t, e, n, r) {
            this.left = t, this.right = e, this.top = n, this.bottom = r, m["default"].mat4.ortho(this._projection, t, e, n, r, 0, 1e4);
          }
        }]), e;
      }(_["default"]);

      e["default"] = x, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(7),
          l = r(u),
          c = (l["default"].mat4, l["default"].vec3),
          f = c.create(),
          h = c.create(),
          d = c.create(),
          p = c.create(),
          _ = c.create(),
          v = c.create(),
          m = c.create(),
          x = c.create(),
          b = function () {
        function t(e, n) {
          (0, o["default"])(this, t), this.origin = c.clone(e), this.direction = c.clone(n);
        }

        return (0, s["default"])(t, [{
          key: "at",
          value: function value(t) {
            return c.copy(p, this.direction), c.scale(p, p, t), c.add(p, p, this.origin), p;
          }
        }, {
          key: "lookAt",
          value: function value(t) {
            c.sub(this.direction, t, this.origin), c.normalize(this.origin, this.origin);
          }
        }, {
          key: "closestPointToPoint",
          value: function value(t) {
            var e = c.create();
            c.sub(t, this.origin);
            var n = c.dot(e, this.direction);
            return 0 > n ? c.clone(this.origin) : (c.copy(e, this.direction), c.scale(e, e, n), c.add(e, e, this.origin), e);
          }
        }, {
          key: "distanceToPoint",
          value: function value(t) {
            return Math.sqrt(this.distanceSqToPoint(t));
          }
        }, {
          key: "distanceSqToPoint",
          value: function value(t) {
            var e = c.create();
            c.sub(e, t, this.origin);
            var n = c.dot(e, this.direction);
            return 0 > n ? c.squaredDistance(this.origin, t) : (c.copy(e, this.direction), c.scale(e, e, n), c.add(e, e, this.origin), c.squaredDistance(e, t));
          }
        }, {
          key: "intersectsSphere",
          value: function value(t, e) {
            return this.distanceToPoint(t) <= e;
          }
        }, {
          key: "intersectSphere",
          value: function value(t, e) {
            var n = c.create();
            c.sub(n, t, this.origin);
            var r = c.dot(n, this.direction),
                i = c.dot(n, n) - r * r,
                o = e * e;
            if (i > o) return null;
            var a = Math.sqrt(o - i),
                s = r - a,
                u = r + a;
            return 0 > s && 0 > u ? null : 0 > s ? this.at(u) : this.at(s);
          }
        }, {
          key: "distanceToPlane",
          value: function value(t, e) {
            c.dot(e, this.direction);
          }
        }, {
          key: "intersectTriangle",
          value: function value(t, e, n) {
            var r = arguments.length <= 3 || void 0 === arguments[3] ? !0 : arguments[3];
            c.copy(f, t), c.copy(h, e), c.copy(d, n), c.sub(_, h, f), c.sub(v, d, f), c.cross(m, _, v);
            var i = c.dot(this.direction, m),
                o = void 0;

            if (i > 0) {
              if (r) return null;
              o = 1;
            } else {
              if (!(0 > i)) return null;
              o = -1, i = -i;
            }

            c.sub(x, this.origin, f), c.cross(v, x, v);
            var a = o * c.dot(this.direction, v);
            if (0 > a) return null;
            c.cross(_, _, x);
            var s = o * c.dot(this.direction, _);
            if (0 > s) return null;
            if (a + s > i) return null;
            var u = -o * c.dot(x, m);
            return 0 > u ? null : this.at(u / i);
          }
        }]), t;
      }();

      e["default"] = b, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(7),
          l = function () {
        function t() {
          (0, o["default"])(this, t), this._needUpdate = !0, this._x = 0, this._y = 0, this._z = 0, this._sx = 1, this._sy = 1, this._sz = 1, this._rx = 0, this._ry = 0, this._rz = 0, this._position = u.vec3.create(), this._scale = u.vec3.fromValues(1, 1, 1), this._rotation = u.vec3.create(), this._matrix = u.mat4.create(), this._matrixRotation = u.mat4.create(), this._matrixScale = u.mat4.create(), this._matrixTranslation = u.mat4.create(), this._matrixQuaternion = u.mat4.create(), this._quat = u.quat.create();
        }

        return (0, s["default"])(t, [{
          key: "_update",
          value: function value() {
            u.vec3.set(this._scale, this._sx, this._sy, this._sz), u.vec3.set(this._rotation, this._rx, this._ry, this._rz), u.vec3.set(this._position, this._x, this._y, this._z), u.mat4.identity(this._matrixTranslation, this._matrixTranslation), u.mat4.identity(this._matrixScale, this._matrixScale), u.mat4.identity(this._matrixRotation, this._matrixRotation), u.mat4.rotateX(this._matrixRotation, this._matrixRotation, this._rx), u.mat4.rotateY(this._matrixRotation, this._matrixRotation, this._ry), u.mat4.rotateZ(this._matrixRotation, this._matrixRotation, this._rz), u.mat4.fromQuat(this._matrixQuaternion, this._quat), u.mat4.mul(this._matrixRotation, this._matrixQuaternion, this._matrixRotation), u.mat4.scale(this._matrixScale, this._matrixScale, this._scale), u.mat4.translate(this._matrixTranslation, this._matrixTranslation, this._position), u.mat4.mul(this._matrix, this._matrixTranslation, this._matrixRotation), u.mat4.mul(this._matrix, this._matrix, this._matrixScale), this._needUpdate = !1;
          }
        }, {
          key: "setRotationFromQuaternion",
          value: function value(t) {
            u.quat.copy(this._quat, t), this._needUpdate = !0;
          }
        }, {
          key: "matrix",
          get: function get() {
            return this._needUpdate && this._update(), this._matrix;
          }
        }, {
          key: "x",
          get: function get() {
            return this._x;
          },
          set: function set(t) {
            this._needUpdate = !0, this._x = t;
          }
        }, {
          key: "y",
          get: function get() {
            return this._y;
          },
          set: function set(t) {
            this._needUpdate = !0, this._y = t;
          }
        }, {
          key: "z",
          get: function get() {
            return this._z;
          },
          set: function set(t) {
            this._needUpdate = !0, this._z = t;
          }
        }, {
          key: "scaleX",
          get: function get() {
            return this._sx;
          },
          set: function set(t) {
            this._needUpdate = !0, this._sx = t;
          }
        }, {
          key: "scaleY",
          get: function get() {
            return this._sy;
          },
          set: function set(t) {
            this._needUpdate = !0, this._sy = t;
          }
        }, {
          key: "scaleZ",
          get: function get() {
            return this._sz;
          },
          set: function set(t) {
            this._needUpdate = !0, this._sz = t;
          }
        }, {
          key: "rotationX",
          get: function get() {
            return this._rx;
          },
          set: function set(t) {
            this._needUpdate = !0, this._rx = t;
          }
        }, {
          key: "rotationY",
          get: function get() {
            return this._ry;
          },
          set: function set(t) {
            this._needUpdate = !0, this._ry = t;
          }
        }, {
          key: "rotationZ",
          get: function get() {
            return this._rz;
          },
          set: function set(t) {
            this._needUpdate = !0, this._rz = t;
          }
        }]), t;
      }();

      e["default"] = l, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(34),
          l = r(u),
          c = n(22),
          f = r(c),
          h = n(7),
          d = r(h),
          p = function p(t, e) {
        var n = e || {};
        return t.touches ? (n.x = t.touches[0].pageX, n.y = t.touches[0].pageY) : (n.x = t.clientX, n.y = t.clientY), n;
      },
          _ = function () {
        function t(e) {
          var n = this,
              r = arguments.length <= 1 || void 0 === arguments[1] ? window : arguments[1],
              i = arguments.length <= 2 || void 0 === arguments[2] ? 500 : arguments[2];
          (0, o["default"])(this, t), this._target = e, this._listenerTarget = r, this._mouse = {}, this._preMouse = {}, this.center = d["default"].vec3.create(), this._up = d["default"].vec3.fromValues(0, 1, 0), this.radius = new l["default"](i), this.position = d["default"].vec3.fromValues(0, 0, this.radius.value), this.positionOffset = d["default"].vec3.create(), this._rx = new l["default"](0), this._rx.limit(-Math.PI / 2, Math.PI / 2), this._ry = new l["default"](0), this._preRX = 0, this._preRY = 0, this._isLockZoom = !1, this._isLockRotation = !1, this._isInvert = !1, this.sensitivity = 1, this._listenerTarget.addEventListener("mousewheel", function (t) {
            return n._onWheel(t);
          }), this._listenerTarget.addEventListener("DOMMouseScroll", function (t) {
            return n._onWheel(t);
          }), this._listenerTarget.addEventListener("mousedown", function (t) {
            return n._onDown(t);
          }), this._listenerTarget.addEventListener("touchstart", function (t) {
            return n._onDown(t);
          }), this._listenerTarget.addEventListener("mousemove", function (t) {
            return n._onMove(t);
          }), this._listenerTarget.addEventListener("touchmove", function (t) {
            return n._onMove(t);
          }), window.addEventListener("touchend", function () {
            return n._onUp();
          }), window.addEventListener("mouseup", function () {
            return n._onUp();
          }), f["default"].addEF(function () {
            return n._loop();
          });
        }

        return (0, s["default"])(t, [{
          key: "lock",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
            this._isLockZoom = t, this._isLockRotation = t;
          }
        }, {
          key: "lockZoom",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
            this._isLockZoom = t;
          }
        }, {
          key: "lockRotation",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
            this._isLockRotation = t;
          }
        }, {
          key: "inverseControl",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
            this._isInvert = t;
          }
        }, {
          key: "_onDown",
          value: function value(t) {
            this._isLockRotation || (this._isMouseDown = !0, p(t, this._mouse), p(t, this._preMouse), this._preRX = this._rx.targetValue, this._preRY = this._ry.targetValue);
          }
        }, {
          key: "_onMove",
          value: function value(t) {
            if (!this._isLockRotation && (p(t, this._mouse), t.touches && t.preventDefault(), this._isMouseDown)) {
              var e = -(this._mouse.x - this._preMouse.x);
              this._isInvert && (e *= -1), this._ry.value = this._preRY - .01 * e * this.sensitivity;
              var n = -(this._mouse.y - this._preMouse.y);
              this._isInvert && (n *= -1), this._rx.value = this._preRX - .01 * n * this.sensitivity;
            }
          }
        }, {
          key: "_onUp",
          value: function value() {
            this._isLockRotation || (this._isMouseDown = !1);
          }
        }, {
          key: "_onWheel",
          value: function value(t) {
            if (!this._isLockZoom) {
              var e = t.wheelDelta,
                  n = t.detail,
                  r = 0;
              r = n ? e ? e / n / 40 * n > 0 ? 1 : -1 : -n / 3 : e / 120, this.radius.add(2 * -r);
            }
          }
        }, {
          key: "_loop",
          value: function value() {
            this._updatePosition(), this._target && this._updateCamera();
          }
        }, {
          key: "_updatePosition",
          value: function value() {
            this.position[1] = Math.sin(this._rx.value) * this.radius.value;
            var t = Math.cos(this._rx.value) * this.radius.value;
            this.position[0] = Math.cos(this._ry.value + .5 * Math.PI) * t, this.position[2] = Math.sin(this._ry.value + .5 * Math.PI) * t, d["default"].vec3.add(this.position, this.position, this.positionOffset);
          }
        }, {
          key: "_updateCamera",
          value: function value() {
            this._target.lookAt(this.position, this.center, this._up);
          }
        }, {
          key: "rx",
          get: function get() {
            return this._rx;
          }
        }, {
          key: "ry",
          get: function get() {
            return this._ry;
          }
        }]), t;
      }();

      e["default"] = _, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      e.__esModule = !0;
      var i = n(104),
          o = r(i),
          a = n(103),
          s = r(a),
          u = "function" == typeof s["default"] && "symbol" == _typeof(o["default"]) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof s["default"] && t.constructor === s["default"] ? "symbol" : _typeof(t);
      };
      e["default"] = "function" == typeof s["default"] && "symbol" === u(o["default"]) ? function (t) {
        return "undefined" == typeof t ? "undefined" : u(t);
      } : function (t) {
        return t && "function" == typeof s["default"] && t.constructor === s["default"] ? "symbol" : "undefined" == typeof t ? "undefined" : u(t);
      };
    }, function (t, e) {
      var n = {}.toString;

      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    }, function (t, e, n) {
      var r = n(112);

      t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;

        switch (n) {
          case 1:
            return function (n) {
              return t.call(e, n);
            };

          case 2:
            return function (n, r) {
              return t.call(e, n, r);
            };

          case 3:
            return function (n, r, i) {
              return t.call(e, n, r, i);
            };
        }

        return function () {
          return t.apply(e, arguments);
        };
      };
    }, function (t, e, n) {
      var r = n(26),
          i = n(12).document,
          o = r(i) && r(i.createElement);

      t.exports = function (t) {
        return o ? i.createElement(t) : {};
      };
    }, function (t, e, n) {
      t.exports = !n(15) && !n(25)(function () {
        return 7 != Object.defineProperty(n(60)("div"), "a", {
          get: function get() {
            return 7;
          }
        }).a;
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(38),
          i = n(19),
          o = n(68),
          a = n(20),
          s = n(16),
          u = n(37),
          l = n(119),
          c = n(42),
          f = n(65),
          h = n(21)("iterator"),
          d = !([].keys && "next" in [].keys()),
          p = "@@iterator",
          _ = "keys",
          v = "values",
          m = function m() {
        return this;
      };

      t.exports = function (t, e, n, x, b, g, M) {
        l(n, e, x);

        var y,
            E,
            S,
            w = function w(t) {
          if (!d && t in F) return F[t];

          switch (t) {
            case _:
              return function () {
                return new n(this, t);
              };

            case v:
              return function () {
                return new n(this, t);
              };
          }

          return function () {
            return new n(this, t);
          };
        },
            A = e + " Iterator",
            T = b == v,
            I = !1,
            F = t.prototype,
            R = F[h] || F[p] || b && F[b],
            D = R || w(b),
            O = b ? T ? w("entries") : D : void 0,
            P = "Array" == e ? F.entries || R : R;

        if (P && (S = f(P.call(new t())), S !== Object.prototype && (c(S, A, !0), r || s(S, h) || a(S, h, m))), T && R && R.name !== v && (I = !0, D = function D() {
          return R.call(this);
        }), r && !M || !d && !I && F[h] || a(F, h, D), u[e] = D, u[A] = m, b) if (y = {
          values: T ? D : w(v),
          keys: g ? D : w(_),
          entries: O
        }, M) for (E in y) {
          E in F || o(F, E, y[E]);
        } else i(i.P + i.F * (d || I), e, y);
        return y;
      };
    }, function (t, e, n) {
      var r = n(66),
          i = n(36).concat("length", "prototype");

      e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, i);
      };
    }, function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    }, function (t, e, n) {
      var r = n(16),
          i = n(69),
          o = n(43)("IE_PROTO"),
          a = Object.prototype;

      t.exports = Object.getPrototypeOf || function (t) {
        return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
      };
    }, function (t, e, n) {
      var r = n(16),
          i = n(13),
          o = n(114)(!1),
          a = n(43)("IE_PROTO");

      t.exports = function (t, e) {
        var n,
            s = i(t),
            u = 0,
            l = [];

        for (n in s) {
          n != a && r(s, n) && l.push(n);
        }

        for (; e.length > u;) {
          r(s, n = e[u++]) && (~o(l, n) || l.push(n));
        }

        return l;
      };
    }, function (t, e, n) {
      var r = n(19),
          i = n(9),
          o = n(25);

      t.exports = function (t, e) {
        var n = (i.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), r(r.S + r.F * o(function () {
          n(1);
        }), "Object", a);
      };
    }, function (t, e, n) {
      t.exports = n(20);
    }, function (t, e, n) {
      var r = n(35);

      t.exports = function (t) {
        return Object(r(t));
      };
    }, function (t, e, n) {
      var r = n(10),
          i = {};
      i.create = function () {
        var t = new r.ARRAY_TYPE(9);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, i.fromMat4 = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[4], t[4] = e[5], t[5] = e[6], t[6] = e[8], t[7] = e[9], t[8] = e[10], t;
      }, i.clone = function (t) {
        var e = new r.ARRAY_TYPE(9);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
      }, i.fromValues = function (t, e, n, i, o, a, s, u, l) {
        var c = new r.ARRAY_TYPE(9);
        return c[0] = t, c[1] = e, c[2] = n, c[3] = i, c[4] = o, c[5] = a, c[6] = s, c[7] = u, c[8] = l, c;
      }, i.set = function (t, e, n, r, i, o, a, s, u, l) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = s, t[7] = u, t[8] = l, t;
      }, i.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, i.transpose = function (t, e) {
        if (t === e) {
          var n = e[1],
              r = e[2],
              i = e[5];
          t[1] = e[3], t[2] = e[6], t[3] = n, t[5] = e[7], t[6] = r, t[7] = i;
        } else t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8];

        return t;
      }, i.invert = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = e[4],
            s = e[5],
            u = e[6],
            l = e[7],
            c = e[8],
            f = c * a - s * l,
            h = -c * o + s * u,
            d = l * o - a * u,
            p = n * f + r * h + i * d;
        return p ? (p = 1 / p, t[0] = f * p, t[1] = (-c * r + i * l) * p, t[2] = (s * r - i * a) * p, t[3] = h * p, t[4] = (c * n - i * u) * p, t[5] = (-s * n + i * o) * p, t[6] = d * p, t[7] = (-l * n + r * u) * p, t[8] = (a * n - r * o) * p, t) : null;
      }, i.adjoint = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = e[4],
            s = e[5],
            u = e[6],
            l = e[7],
            c = e[8];
        return t[0] = a * c - s * l, t[1] = i * l - r * c, t[2] = r * s - i * a, t[3] = s * u - o * c, t[4] = n * c - i * u, t[5] = i * o - n * s, t[6] = o * l - a * u, t[7] = r * u - n * l, t[8] = n * a - r * o, t;
      }, i.determinant = function (t) {
        var e = t[0],
            n = t[1],
            r = t[2],
            i = t[3],
            o = t[4],
            a = t[5],
            s = t[6],
            u = t[7],
            l = t[8];
        return e * (l * o - a * u) + n * (-l * i + a * s) + r * (u * i - o * s);
      }, i.multiply = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = e[6],
            c = e[7],
            f = e[8],
            h = n[0],
            d = n[1],
            p = n[2],
            _ = n[3],
            v = n[4],
            m = n[5],
            x = n[6],
            b = n[7],
            g = n[8];
        return t[0] = h * r + d * a + p * l, t[1] = h * i + d * s + p * c, t[2] = h * o + d * u + p * f, t[3] = _ * r + v * a + m * l, t[4] = _ * i + v * s + m * c, t[5] = _ * o + v * u + m * f, t[6] = x * r + b * a + g * l, t[7] = x * i + b * s + g * c, t[8] = x * o + b * u + g * f, t;
      }, i.mul = i.multiply, i.translate = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = e[6],
            c = e[7],
            f = e[8],
            h = n[0],
            d = n[1];
        return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = s, t[5] = u, t[6] = h * r + d * a + l, t[7] = h * i + d * s + c, t[8] = h * o + d * u + f, t;
      }, i.rotate = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = e[6],
            c = e[7],
            f = e[8],
            h = Math.sin(n),
            d = Math.cos(n);
        return t[0] = d * r + h * a, t[1] = d * i + h * s, t[2] = d * o + h * u, t[3] = d * a - h * r, t[4] = d * s - h * i, t[5] = d * u - h * o, t[6] = l, t[7] = c, t[8] = f, t;
      }, i.scale = function (t, e, n) {
        var r = n[0],
            i = n[1];
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = i * e[3], t[4] = i * e[4], t[5] = i * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
      }, i.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = e[0], t[7] = e[1], t[8] = 1, t;
      }, i.fromRotation = function (t, e) {
        var n = Math.sin(e),
            r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = 0, t[3] = -n, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = e[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
      }, i.fromMat2d = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = 0, t[3] = e[2], t[4] = e[3], t[5] = 0, t[6] = e[4], t[7] = e[5], t[8] = 1, t;
      }, i.fromQuat = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = n + n,
            s = r + r,
            u = i + i,
            l = n * a,
            c = r * a,
            f = r * s,
            h = i * a,
            d = i * s,
            p = i * u,
            _ = o * a,
            v = o * s,
            m = o * u;

        return t[0] = 1 - f - p, t[3] = c - m, t[6] = h + v, t[1] = c + m, t[4] = 1 - l - p, t[7] = d - _, t[2] = h - v, t[5] = d + _, t[8] = 1 - l - f, t;
      }, i.normalFromMat4 = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = e[4],
            s = e[5],
            u = e[6],
            l = e[7],
            c = e[8],
            f = e[9],
            h = e[10],
            d = e[11],
            p = e[12],
            _ = e[13],
            v = e[14],
            m = e[15],
            x = n * s - r * a,
            b = n * u - i * a,
            g = n * l - o * a,
            M = r * u - i * s,
            y = r * l - o * s,
            E = i * l - o * u,
            S = c * _ - f * p,
            w = c * v - h * p,
            A = c * m - d * p,
            T = f * v - h * _,
            I = f * m - d * _,
            F = h * m - d * v,
            R = x * F - b * I + g * T + M * A - y * w + E * S;
        return R ? (R = 1 / R, t[0] = (s * F - u * I + l * T) * R, t[1] = (u * A - a * F - l * w) * R, t[2] = (a * I - s * A + l * S) * R, t[3] = (i * I - r * F - o * T) * R, t[4] = (n * F - i * A + o * w) * R, t[5] = (r * A - n * I - o * S) * R, t[6] = (_ * E - v * y + m * M) * R, t[7] = (v * g - p * E - m * b) * R, t[8] = (p * y - _ * g + m * x) * R, t) : null;
      }, i.str = function (t) {
        return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
      }, i.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2));
      }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t;
      }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t;
      }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t;
      }, i.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t;
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8];
      }, i.equals = function (t, e) {
        var n = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = t[6],
            c = t[7],
            f = t[8],
            h = e[0],
            d = e[1],
            p = e[2],
            _ = e[3],
            v = e[4],
            m = e[5],
            x = t[6],
            b = e[7],
            g = e[8];
        return Math.abs(n - h) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(i - d) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(o - p) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(p)) && Math.abs(a - _) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(_)) && Math.abs(s - v) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(v)) && Math.abs(u - m) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(m)) && Math.abs(l - x) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(x)) && Math.abs(c - b) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(b)) && Math.abs(f - g) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(g));
      }, t.exports = i;
    }, function (t, e, n) {
      var r = n(10),
          i = {};
      i.create = function () {
        var t = new r.ARRAY_TYPE(3);
        return t[0] = 0, t[1] = 0, t[2] = 0, t;
      }, i.clone = function (t) {
        var e = new r.ARRAY_TYPE(3);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
      }, i.fromValues = function (t, e, n) {
        var i = new r.ARRAY_TYPE(3);
        return i[0] = t, i[1] = e, i[2] = n, i;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
      }, i.set = function (t, e, n, r) {
        return t[0] = e, t[1] = n, t[2] = r, t;
      }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t;
      }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t;
      }, i.sub = i.subtract, i.multiply = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t;
      }, i.mul = i.multiply, i.divide = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t;
      }, i.div = i.divide, i.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t;
      }, i.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t;
      }, i.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t;
      }, i.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t;
      }, i.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t;
      }, i.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t;
      }, i.scaleAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t;
      }, i.distance = function (t, e) {
        var n = e[0] - t[0],
            r = e[1] - t[1],
            i = e[2] - t[2];
        return Math.sqrt(n * n + r * r + i * i);
      }, i.dist = i.distance, i.squaredDistance = function (t, e) {
        var n = e[0] - t[0],
            r = e[1] - t[1],
            i = e[2] - t[2];
        return n * n + r * r + i * i;
      }, i.sqrDist = i.squaredDistance, i.length = function (t) {
        var e = t[0],
            n = t[1],
            r = t[2];
        return Math.sqrt(e * e + n * n + r * r);
      }, i.len = i.length, i.squaredLength = function (t) {
        var e = t[0],
            n = t[1],
            r = t[2];
        return e * e + n * n + r * r;
      }, i.sqrLen = i.squaredLength, i.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
      }, i.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t;
      }, i.normalize = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = n * n + r * r + i * i;
        return o > 0 && (o = 1 / Math.sqrt(o), t[0] = e[0] * o, t[1] = e[1] * o, t[2] = e[2] * o), t;
      }, i.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }, i.cross = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = n[0],
            s = n[1],
            u = n[2];
        return t[0] = i * u - o * s, t[1] = o * a - r * u, t[2] = r * s - i * a, t;
      }, i.lerp = function (t, e, n, r) {
        var i = e[0],
            o = e[1],
            a = e[2];
        return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t;
      }, i.hermite = function (t, e, n, r, i, o) {
        var a = o * o,
            s = a * (2 * o - 3) + 1,
            u = a * (o - 2) + o,
            l = a * (o - 1),
            c = a * (3 - 2 * o);
        return t[0] = e[0] * s + n[0] * u + r[0] * l + i[0] * c, t[1] = e[1] * s + n[1] * u + r[1] * l + i[1] * c, t[2] = e[2] * s + n[2] * u + r[2] * l + i[2] * c, t;
      }, i.bezier = function (t, e, n, r, i, o) {
        var a = 1 - o,
            s = a * a,
            u = o * o,
            l = s * a,
            c = 3 * o * s,
            f = 3 * u * a,
            h = u * o;
        return t[0] = e[0] * l + n[0] * c + r[0] * f + i[0] * h, t[1] = e[1] * l + n[1] * c + r[1] * f + i[1] * h, t[2] = e[2] * l + n[2] * c + r[2] * f + i[2] * h, t;
      }, i.random = function (t, e) {
        e = e || 1;
        var n = 2 * r.RANDOM() * Math.PI,
            i = 2 * r.RANDOM() - 1,
            o = Math.sqrt(1 - i * i) * e;
        return t[0] = Math.cos(n) * o, t[1] = Math.sin(n) * o, t[2] = i * e, t;
      }, i.transformMat4 = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = n[3] * r + n[7] * i + n[11] * o + n[15];
        return a = a || 1, t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a, t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a, t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a, t;
      }, i.transformMat3 = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2];
        return t[0] = r * n[0] + i * n[3] + o * n[6], t[1] = r * n[1] + i * n[4] + o * n[7], t[2] = r * n[2] + i * n[5] + o * n[8], t;
      }, i.transformQuat = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = n[0],
            s = n[1],
            u = n[2],
            l = n[3],
            c = l * r + s * o - u * i,
            f = l * i + u * r - a * o,
            h = l * o + a * i - s * r,
            d = -a * r - s * i - u * o;
        return t[0] = c * l + d * -a + f * -u - h * -s, t[1] = f * l + d * -s + h * -a - c * -u, t[2] = h * l + d * -u + c * -s - f * -a, t;
      }, i.rotateX = function (t, e, n, r) {
        var i = [],
            o = [];
        return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0], o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r), o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t;
      }, i.rotateY = function (t, e, n, r) {
        var i = [],
            o = [];
        return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r), o[1] = i[1], o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r), t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t;
      }, i.rotateZ = function (t, e, n, r) {
        var i = [],
            o = [];
        return i[0] = e[0] - n[0], i[1] = e[1] - n[1], i[2] = e[2] - n[2], o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), o[2] = i[2], t[0] = o[0] + n[0], t[1] = o[1] + n[1], t[2] = o[2] + n[2], t;
      }, i.forEach = function () {
        var t = i.create();
        return function (e, n, r, i, o, a) {
          var s, u;

          for (n || (n = 3), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; u > s; s += n) {
            t[0] = e[s], t[1] = e[s + 1], t[2] = e[s + 2], o(t, t, a), e[s] = t[0], e[s + 1] = t[1], e[s + 2] = t[2];
          }

          return e;
        };
      }(), i.angle = function (t, e) {
        var n = i.fromValues(t[0], t[1], t[2]),
            r = i.fromValues(e[0], e[1], e[2]);
        i.normalize(n, n), i.normalize(r, r);
        var o = i.dot(n, r);
        return o > 1 ? 0 : Math.acos(o);
      }, i.str = function (t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
      }, i.equals = function (t, e) {
        var n = t[0],
            i = t[1],
            o = t[2],
            a = e[0],
            s = e[1],
            u = e[2];
        return Math.abs(n - a) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(a)) && Math.abs(i - s) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(o - u) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(u));
      }, t.exports = i;
    }, function (t, e, n) {
      var r = n(10),
          i = {};
      i.create = function () {
        var t = new r.ARRAY_TYPE(4);
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
      }, i.clone = function (t) {
        var e = new r.ARRAY_TYPE(4);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
      }, i.fromValues = function (t, e, n, i) {
        var o = new r.ARRAY_TYPE(4);
        return o[0] = t, o[1] = e, o[2] = n, o[3] = i, o;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
      }, i.set = function (t, e, n, r, i) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t;
      }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t;
      }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t;
      }, i.sub = i.subtract, i.multiply = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t[2] = e[2] * n[2], t[3] = e[3] * n[3], t;
      }, i.mul = i.multiply, i.divide = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t[2] = e[2] / n[2], t[3] = e[3] / n[3], t;
      }, i.div = i.divide, i.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t[2] = Math.ceil(e[2]), t[3] = Math.ceil(e[3]), t;
      }, i.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t[2] = Math.floor(e[2]), t[3] = Math.floor(e[3]), t;
      }, i.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t[2] = Math.min(e[2], n[2]), t[3] = Math.min(e[3], n[3]), t;
      }, i.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t[2] = Math.max(e[2], n[2]), t[3] = Math.max(e[3], n[3]), t;
      }, i.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t[2] = Math.round(e[2]), t[3] = Math.round(e[3]), t;
      }, i.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t;
      }, i.scaleAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t;
      }, i.distance = function (t, e) {
        var n = e[0] - t[0],
            r = e[1] - t[1],
            i = e[2] - t[2],
            o = e[3] - t[3];
        return Math.sqrt(n * n + r * r + i * i + o * o);
      }, i.dist = i.distance, i.squaredDistance = function (t, e) {
        var n = e[0] - t[0],
            r = e[1] - t[1],
            i = e[2] - t[2],
            o = e[3] - t[3];
        return n * n + r * r + i * i + o * o;
      }, i.sqrDist = i.squaredDistance, i.length = function (t) {
        var e = t[0],
            n = t[1],
            r = t[2],
            i = t[3];
        return Math.sqrt(e * e + n * n + r * r + i * i);
      }, i.len = i.length, i.squaredLength = function (t) {
        var e = t[0],
            n = t[1],
            r = t[2],
            i = t[3];
        return e * e + n * n + r * r + i * i;
      }, i.sqrLen = i.squaredLength, i.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t;
      }, i.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t[2] = 1 / e[2], t[3] = 1 / e[3], t;
      }, i.normalize = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = n * n + r * r + i * i + o * o;
        return a > 0 && (a = 1 / Math.sqrt(a), t[0] = n * a, t[1] = r * a, t[2] = i * a, t[3] = o * a), t;
      }, i.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
      }, i.lerp = function (t, e, n, r) {
        var i = e[0],
            o = e[1],
            a = e[2],
            s = e[3];
        return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t[2] = a + r * (n[2] - a), t[3] = s + r * (n[3] - s), t;
      }, i.random = function (t, e) {
        return e = e || 1, t[0] = r.RANDOM(), t[1] = r.RANDOM(), t[2] = r.RANDOM(), t[3] = r.RANDOM(), i.normalize(t, t), i.scale(t, t, e), t;
      }, i.transformMat4 = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3];
        return t[0] = n[0] * r + n[4] * i + n[8] * o + n[12] * a, t[1] = n[1] * r + n[5] * i + n[9] * o + n[13] * a, t[2] = n[2] * r + n[6] * i + n[10] * o + n[14] * a, t[3] = n[3] * r + n[7] * i + n[11] * o + n[15] * a, t;
      }, i.transformQuat = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = n[0],
            s = n[1],
            u = n[2],
            l = n[3],
            c = l * r + s * o - u * i,
            f = l * i + u * r - a * o,
            h = l * o + a * i - s * r,
            d = -a * r - s * i - u * o;
        return t[0] = c * l + d * -a + f * -u - h * -s, t[1] = f * l + d * -s + h * -a - c * -u, t[2] = h * l + d * -u + c * -s - f * -a, t[3] = e[3], t;
      }, i.forEach = function () {
        var t = i.create();
        return function (e, n, r, i, o, a) {
          var s, u;

          for (n || (n = 4), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; u > s; s += n) {
            t[0] = e[s], t[1] = e[s + 1], t[2] = e[s + 2], t[3] = e[s + 3], o(t, t, a), e[s] = t[0], e[s + 1] = t[1], e[s + 2] = t[2], e[s + 3] = t[3];
          }

          return e;
        };
      }(), i.str = function (t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
      }, i.equals = function (t, e) {
        var n = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            s = e[0],
            u = e[1],
            l = e[2],
            c = e[3];
        return Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - u) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - c) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(c));
      }, t.exports = i;
    }, function (t, e) {
      t.exports = "// bigTriangle.vert\n\n#define SHADER_NAME BIG_TRIANGLE_VERTEX\n\nprecision mediump float;\n#define GLSLIFY 1\nattribute vec2 aPosition;\nvarying vec2 vTextureCoord;\n\nvoid main(void) {\n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    vTextureCoord = aPosition * .5 + .5;\n}";
    }, function (t, e) {
      t.exports = "// generalWithNormal.vert\n\n#define SHADER_NAME GENERAL_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\n\nuniform vec3 position;\nuniform vec3 scale;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	vec3 pos      = aVertexPosition * scale;\n	pos           += position;\n	gl_Position   = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(pos, 1.0);\n	\n	vTextureCoord = aTextureCoord;\n	vNormal       = normalize(uNormalMatrix * aNormal);\n}";
    }, function (t, e) {
      t.exports = "// basic.frag\n\n#define SHADER_NAME SKYBOX_FRAGMENT\n\nprecision mediump float;\n#define GLSLIFY 1\nuniform samplerCube texture;\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\n\nvoid main(void) {\n    gl_FragColor = textureCube(texture, vVertex);\n}";
    }, function (t, e) {
      t.exports = "// basic.vert\n\n#define SHADER_NAME SKYBOX_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vVertex;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	mat4 matView = uViewMatrix;\n	matView[3][0] = 0.0;\n	matView[3][1] = 0.0;\n	matView[3][2] = 0.0;\n	\n	gl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n	vTextureCoord = aTextureCoord;\n	\n	vVertex = aVertexPosition;\n	vNormal = aNormal;\n}";
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(7),
          l = r(u),
          c = n(4),
          f = r(c),
          h = n(8),
          d = r(h),
          p = n(52),
          _ = r(p),
          v = n(51),
          m = r(v),
          x = n(18),
          b = r(x),
          g = n(23),
          M = r(g),
          y = n(11),
          E = r(y),
          S = n(79),
          w = r(S),
          A = n(78),
          T = r(A),
          I = n(22),
          F = r(I),
          R = n(94),
          D = r(R),
          O = n(34),
          P = r(O),
          k = n(98),
          L = r(k),
          C = n(56),
          N = r(C),
          B = n(96),
          V = r(B),
          U = n(31),
          z = r(U),
          j = n(53),
          G = r(j),
          X = n(32),
          Y = r(X),
          q = n(80),
          H = r(q),
          W = n(54),
          Q = r(W),
          K = n(55),
          Z = r(K),
          J = n(33),
          $ = r(J),
          tt = n(93),
          et = r(tt),
          nt = n(92),
          rt = r(nt),
          it = n(83),
          ot = r(it),
          at = n(81),
          st = r(at),
          ut = n(82),
          lt = r(ut),
          ct = n(84),
          ft = r(ct),
          ht = n(85),
          dt = r(ht),
          pt = n(87),
          _t = r(pt),
          vt = n(86),
          mt = r(vt),
          xt = n(88),
          bt = r(xt),
          gt = n(90),
          Mt = r(gt),
          yt = n(91),
          Et = r(yt),
          St = n(89),
          wt = r(St),
          At = n(97),
          Tt = r(At),
          It = function () {
        function t() {
          (0, o["default"])(this, t), this.glm = l["default"], this.GL = f["default"], this.GLTool = f["default"], this.GLShader = d["default"], this.GLTexture = _["default"], this.GLCubeTexture = m["default"], this.Mesh = b["default"], this.Geom = M["default"], this.Batch = E["default"], this.FrameBuffer = w["default"], this.CubeFrameBuffer = T["default"], this.Scheduler = F["default"], this.EventDispatcher = D["default"], this.EaseNumber = P["default"], this.TweenNumber = L["default"], this.Camera = z["default"], this.CameraOrtho = G["default"], this.CameraPerspective = Y["default"], this.Ray = Q["default"], this.CameraCube = H["default"], this.OrbitalControl = N["default"], this.QuatRotation = V["default"], this.BinaryLoader = $["default"], this.ObjLoader = et["default"], this.HDRLoader = rt["default"], this.BatchCopy = ot["default"], this.BatchAxis = st["default"], this.BatchBall = lt["default"], this.BatchBall = lt["default"], this.BatchLine = dt["default"], this.BatchSkybox = _t["default"], this.BatchSky = mt["default"], this.BatchDotsPlane = ft["default"], this.Scene = bt["default"], this.View = Mt["default"], this.View3D = Et["default"], this.Object3D = Z["default"], this.ShaderLibs = Tt["default"], this.ShaderUtils = wt["default"];

          for (var e in l["default"]) {
            l["default"][e] && (window[e] = l["default"][e]);
          }
        }

        return (0, s["default"])(t, [{
          key: "log",
          value: function value() {
            void (navigator.userAgent.indexOf("Chrome") > -1);

            for (var t in this) {
              this[t] && void 0;
            }
          }
        }]), t;
      }(),
          Ft = new It();

      e["default"] = Ft, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(4),
          l = r(u),
          c = n(51),
          f = r(c),
          h = void 0,
          d = function () {
        function t(e) {
          var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
          (0, o["default"])(this, t), h = l["default"].gl, this._size = e, this.magFilter = n.magFilter || h.LINEAR, this.minFilter = n.minFilter || h.LINEAR, this.wrapS = n.wrapS || h.CLAMP_TO_EDGE, this.wrapT = n.wrapT || h.CLAMP_TO_EDGE, this._init();
        }

        return (0, s["default"])(t, [{
          key: "_init",
          value: function value() {
            this.texture = h.createTexture(), this.glTexture = new f["default"](this.texture, {}, !0), h.bindTexture(h.TEXTURE_CUBE_MAP, this.texture), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MAG_FILTER, this.magFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_MIN_FILTER, this.minFilter), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_S, this.wrapS), h.texParameteri(h.TEXTURE_CUBE_MAP, h.TEXTURE_WRAP_T, this.wrapT);

            for (var t = [h.TEXTURE_CUBE_MAP_POSITIVE_X, h.TEXTURE_CUBE_MAP_NEGATIVE_X, h.TEXTURE_CUBE_MAP_POSITIVE_Y, h.TEXTURE_CUBE_MAP_NEGATIVE_Y, h.TEXTURE_CUBE_MAP_POSITIVE_Z, h.TEXTURE_CUBE_MAP_NEGATIVE_Z], e = 0; e < t.length; e++) {
              h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1), h.texImage2D(t[e], 0, h.RGBA, this.width, this.height, 0, h.RGBA, h.FLOAT, null);
            }

            this._frameBuffers = [];

            for (var n = 0; n < t.length; n++) {
              var r = h.createFramebuffer();
              h.bindFramebuffer(h.FRAMEBUFFER, r), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, t[n], this.texture, 0);
              var i = h.checkFramebufferStatus(h.FRAMEBUFFER);
              i !== h.FRAMEBUFFER_COMPLETE && void 0, this._frameBuffers.push(r);
            }

            h.bindFramebuffer(h.FRAMEBUFFER, null), h.bindRenderbuffer(h.RENDERBUFFER, null), h.bindTexture(h.TEXTURE_CUBE_MAP, null);
          }
        }, {
          key: "bind",
          value: function value(t) {
            l["default"].viewport(0, 0, this.width, this.height), h.bindFramebuffer(h.FRAMEBUFFER, this._frameBuffers[t]);
          }
        }, {
          key: "unbind",
          value: function value() {
            h.bindFramebuffer(h.FRAMEBUFFER, null), l["default"].viewport(0, 0, l["default"].width, l["default"].height);
          }
        }, {
          key: "getTexture",
          value: function value() {
            return this.glTexture;
          }
        }, {
          key: "width",
          get: function get() {
            return this._size;
          }
        }, {
          key: "height",
          get: function get() {
            return this._size;
          }
        }]), t;
      }();

      e["default"] = d, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      function i(t) {
        return 0 !== t && !(t & t - 1);
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var o = n(1),
          a = r(o),
          s = n(2),
          u = r(s),
          l = n(4),
          c = r(l),
          f = n(52),
          h = r(f),
          d = void 0,
          p = void 0,
          _ = function () {
        function t(e, n) {
          var r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
              o = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
          (0, a["default"])(this, t), d = c["default"].gl, p = c["default"].checkExtension("WEBGL_depth_texture"), this.width = e, this.height = n, this._multipleTargets = o, this.magFilter = r.magFilter || d.LINEAR, this.minFilter = r.minFilter || d.LINEAR, this.wrapS = r.wrapS || d.CLAMP_TO_EDGE, this.wrapT = r.wrapT || d.CLAMP_TO_EDGE, this.useDepth = r.useDepth || !0, this.useStencil = r.useStencil || !1, this.texelType = r.type, i(this.width) && i(this.height) || (this.wrapS = this.wrapT = d.CLAMP_TO_EDGE, this.minFilter === d.LINEAR_MIPMAP_NEAREST && (this.minFilter = d.LINEAR)), this._init();
        }

        return (0, u["default"])(t, [{
          key: "_init",
          value: function value() {
            if (this._textures = [], this._multipleTargets) for (var t = 0; 4 > t; t++) {
              var e = d.createTexture(),
                  n = new h["default"](e, !0);

              this._textures.push(n);
            } else this.texture = d.createTexture(), this.glTexture = new h["default"](this.texture, !0), this._textures.push(this.glTexture);
            this.depthTexture = d.createTexture(), this.glDepthTexture = new h["default"](this.depthTexture, !0), this.frameBuffer = d.createFramebuffer(), d.bindFramebuffer(d.FRAMEBUFFER, this.frameBuffer);
            var r = c["default"].getExtension("WEBGL_draw_buffers");
            !r && this._multipleTargets && void 0;
            var i = d.UNSIGNED_BYTE,
                o = c["default"].getExtension("OES_texture_half_float");
            c["default"].checkExtension("OES_texture_float") ? i = d.FLOAT : o && (i = o.HALF_FLOAT_OES), c["default"].isMobile && i === d.FLOAT && o && (i = o.HALF_FLOAT_OES), this.texelType && (i = this.texelType);

            for (var a = 0; a < this._textures.length; a++) {
              d.bindTexture(d.TEXTURE_2D, this._textures[a].texture), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, this.magFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, this.minFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, this.wrapS), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, this.wrapT), d.texImage2D(d.TEXTURE_2D, 0, d.RGBA, this.width, this.height, 0, d.RGBA, i, null);
            }

            p && (d.bindTexture(d.TEXTURE_2D, this.depthTexture), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MAG_FILTER, this.magFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_MIN_FILTER, this.minFilter), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_S, this.wrapS), d.texParameteri(d.TEXTURE_2D, d.TEXTURE_WRAP_T, this.wrapT), d.texImage2D(d.TEXTURE_2D, 0, d.DEPTH_COMPONENT, this.width, this.height, 0, d.DEPTH_COMPONENT, d.UNSIGNED_SHORT, null));

            for (var s = 0; s < this._textures.length; s++) {
              d.framebufferTexture2D(d.FRAMEBUFFER, d.COLOR_ATTACHMENT0 + s, d.TEXTURE_2D, this._textures[s].texture, 0);
            }

            if (this._multipleTargets && r.drawBuffersWEBGL([r.COLOR_ATTACHMENT0_WEBGL, r.COLOR_ATTACHMENT1_WEBGL, r.COLOR_ATTACHMENT2_WEBGL, r.COLOR_ATTACHMENT3_WEBGL]), d.framebufferTexture2D(d.FRAMEBUFFER, d.DEPTH_ATTACHMENT, d.TEXTURE_2D, this.depthTexture, 0), this.minFilter === d.LINEAR_MIPMAP_NEAREST) for (var u = 0; u < this._textures.length; u++) {
              d.bindTexture(d.TEXTURE_2D, this._textures[u].texture), d.generateMipmap(d.TEXTURE_2D);
            }
            var l = d.checkFramebufferStatus(d.FRAMEBUFFER);
            l != d.FRAMEBUFFER_COMPLETE && void 0, d.bindTexture(d.TEXTURE_2D, null), d.bindRenderbuffer(d.RENDERBUFFER, null), d.bindFramebuffer(d.FRAMEBUFFER, null), this.clear();
          }
        }, {
          key: "bind",
          value: function value() {
            c["default"].viewport(0, 0, this.width, this.height), d.bindFramebuffer(d.FRAMEBUFFER, this.frameBuffer);
          }
        }, {
          key: "unbind",
          value: function value() {
            d.bindFramebuffer(d.FRAMEBUFFER, null), c["default"].viewport(0, 0, c["default"].width, c["default"].height);
          }
        }, {
          key: "clear",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                e = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                n = arguments.length <= 2 || void 0 === arguments[2] ? 0 : arguments[2],
                r = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3];
            this.bind(), c["default"].clear(t, e, n, r), this.unbind();
          }
        }, {
          key: "getTexture",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
            return this._textures[t];
          }
        }, {
          key: "getDepthTexture",
          value: function value() {
            return this.glDepthTexture;
          }
        }, {
          key: "minFilter",
          value: function value(t) {
            return t !== d.LINEAR && t !== d.NEAREST && t !== d.LINEAR_MIPMAP_NEAREST ? this : (this.minFilter = t, this);
          }
        }, {
          key: "magFilter",
          value: function value(t) {
            return t !== d.LINEAR && t !== d.NEAREST && t !== d.LINEAR_MIPMAP_NEAREST ? this : (this.magFilter = t, this);
          }
        }, {
          key: "wrapS",
          value: function value(t) {
            return t !== d.CLAMP_TO_EDGE && t !== d.REPEAT && t !== d.MIRRORED_REPEAT ? this : (this.wrapS = t, this);
          }
        }, {
          key: "wrapT",
          value: function value(t) {
            return t !== d.CLAMP_TO_EDGE && t !== d.REPEAT && t !== d.MIRRORED_REPEAT ? this : (this.wrapT = t, this);
          }
        }]), t;
      }();

      e["default"] = _, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(5),
          d = r(h),
          p = n(32),
          _ = r(p),
          v = n(7),
          m = r(v),
          x = m["default"].vec3,
          b = [[x.fromValues(0, 0, 0), x.fromValues(1, 0, 0), x.fromValues(0, -1, 0)], [x.fromValues(0, 0, 0), x.fromValues(-1, 0, 0), x.fromValues(0, -1, 0)], [x.fromValues(0, 0, 0), x.fromValues(0, 1, 0), x.fromValues(0, 0, 1)], [x.fromValues(0, 0, 0), x.fromValues(0, -1, 0), x.fromValues(0, 0, -1)], [x.fromValues(0, 0, 0), x.fromValues(0, 0, 1), x.fromValues(0, -1, 0)], [x.fromValues(0, 0, 0), x.fromValues(0, 0, -1), x.fromValues(0, -1, 0)]],
          g = function (t) {
        function e() {
          (0, s["default"])(this, e);
          var t = (0, f["default"])(this, (0, o["default"])(e).call(this));
          return t.setPerspective(Math.PI / 2, 1, .1, 1e3), t;
        }

        return (0, d["default"])(e, t), (0, l["default"])(e, [{
          key: "face",
          value: function value(t) {
            var e = b[t];
            this.lookAt(e[0], e[1], e[2]);
          }
        }]), e;
      }(_["default"]);

      e["default"] = g, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(6),
          l = r(u),
          c = n(5),
          f = r(c),
          h = n(4),
          d = r(h),
          p = n(18),
          _ = r(p),
          v = n(8),
          m = r(v),
          x = n(11),
          b = r(x),
          g = n(149),
          M = n(148),
          y = function (t) {
        function e() {
          (0, s["default"])(this, e);
          var t = [],
              n = [],
              r = [0, 1, 2, 3, 4, 5],
              i = 9999;
          t.push([-i, 0, 0]), t.push([i, 0, 0]), t.push([0, -i, 0]), t.push([0, i, 0]), t.push([0, 0, -i]), t.push([0, 0, i]), n.push([1, 0, 0]), n.push([1, 0, 0]), n.push([0, 1, 0]), n.push([0, 1, 0]), n.push([0, 0, 1]), n.push([0, 0, 1]);
          var a = new _["default"](d["default"].LINES);
          a.bufferVertex(t), a.bufferIndex(r), a.bufferData(n, "aColor", 3);
          var u = new m["default"](g, M);
          return (0, l["default"])(this, (0, o["default"])(e).call(this, a, u));
        }

        return (0, f["default"])(e, t), e;
      }(b["default"]);

      e["default"] = y, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(14),
          d = r(h),
          p = n(5),
          _ = r(p),
          v = n(23),
          m = r(v),
          x = n(8),
          b = r(x),
          g = n(11),
          M = r(g),
          y = n(74),
          E = n(30),
          S = function (t) {
        function e() {
          (0, s["default"])(this, e);
          var t = m["default"].sphere(1, 24),
              n = new b["default"](y, E);
          return (0, f["default"])(this, (0, o["default"])(e).call(this, t, n));
        }

        return (0, _["default"])(e, t), (0, l["default"])(e, [{
          key: "draw",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? [0, 0, 0] : arguments[0],
                n = arguments.length <= 1 || void 0 === arguments[1] ? [1, 1, 1] : arguments[1],
                r = arguments.length <= 2 || void 0 === arguments[2] ? [1, 1, 1] : arguments[2],
                i = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3];
            this.shader.bind(), this.shader.uniform("position", "uniform3fv", t), this.shader.uniform("scale", "uniform3fv", n), this.shader.uniform("color", "uniform3fv", r), this.shader.uniform("opacity", "uniform1f", i), (0, d["default"])((0, o["default"])(e.prototype), "draw", this).call(this);
          }
        }]), e;
      }(M["default"]);

      e["default"] = S, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(14),
          d = r(h),
          p = n(5),
          _ = r(p),
          v = n(23),
          m = r(v),
          x = n(8),
          b = r(x),
          g = n(11),
          M = r(g),
          y = n(73),
          E = n(50),
          S = function (t) {
        function e() {
          (0, s["default"])(this, e);
          var t = m["default"].bigTriangle(),
              n = new b["default"](y, E),
              r = (0, f["default"])(this, (0, o["default"])(e).call(this, t, n));
          return n.bind(), n.uniform("texture", "uniform1i", 0), r;
        }

        return (0, _["default"])(e, t), (0, l["default"])(e, [{
          key: "draw",
          value: function value(t) {
            this.shader.bind(), t.bind(0), (0, d["default"])((0, o["default"])(e.prototype), "draw", this).call(this);
          }
        }]), e;
      }(M["default"]);

      e["default"] = S, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(14),
          d = r(h),
          p = n(5),
          _ = r(p),
          v = n(4),
          m = r(v),
          x = n(18),
          b = r(x),
          g = n(8),
          M = r(g),
          y = n(11),
          E = r(y),
          S = n(151),
          w = n(30),
          A = function (t) {
        function e() {
          (0, s["default"])(this, e);
          var t = [],
              n = [],
              r = 0,
              i = 100,
              a = 50,
              u = a / i,
              l = void 0,
              c = void 0;

          for (l = -a / 2; a > l; l += u) {
            for (c = -a / 2; a > c; c += u) {
              t.push([l, c, 0]), n.push(r), r++, t.push([l, 0, c]), n.push(r), r++;
            }
          }

          var h = new b["default"](m["default"].POINTS);
          h.bufferVertex(t), h.bufferIndex(n);
          var d = new M["default"](S, w),
              p = (0, f["default"])(this, (0, o["default"])(e).call(this, h, d));
          return p.color = [1, 1, 1], p.opacity = .5, p;
        }

        return (0, _["default"])(e, t), (0, l["default"])(e, [{
          key: "draw",
          value: function value() {
            this.shader.bind(), this.shader.uniform("color", "uniform3fv", this.color), this.shader.uniform("opacity", "uniform1f", this.opacity), (0, d["default"])((0, o["default"])(e.prototype), "draw", this).call(this);
          }
        }]), e;
      }(E["default"]);

      e["default"] = A, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(14),
          d = r(h),
          p = n(5),
          _ = r(p),
          v = n(4),
          m = r(v),
          x = n(18),
          b = r(x),
          g = n(8),
          M = r(g),
          y = n(11),
          E = r(y),
          S = n(49),
          w = n(30),
          A = function (t) {
        function e() {
          (0, s["default"])(this, e);
          var t = [],
              n = [0, 1],
              r = [[0, 0], [1, 1]];
          t.push([0, 0, 0]), t.push([0, 0, 0]);
          var i = new b["default"](m["default"].LINES);
          i.bufferVertex(t), i.bufferTexCoord(r), i.bufferIndex(n);
          var a = new M["default"](S, w);
          return (0, f["default"])(this, (0, o["default"])(e).call(this, i, a));
        }

        return (0, _["default"])(e, t), (0, l["default"])(e, [{
          key: "draw",
          value: function value(t, n) {
            var r = arguments.length <= 2 || void 0 === arguments[2] ? [1, 1, 1] : arguments[2],
                i = arguments.length <= 3 || void 0 === arguments[3] ? 1 : arguments[3];
            this._mesh.bufferVertex([t, n]), this._shader.bind(), this._shader.uniform("color", "vec3", r), this._shader.uniform("opacity", "float", i), (0, d["default"])((0, o["default"])(e.prototype), "draw", this).call(this);
          }
        }]), e;
      }(E["default"]);

      e["default"] = A, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(14),
          d = r(h),
          p = n(5),
          _ = r(p),
          v = n(23),
          m = r(v),
          x = n(8),
          b = r(x),
          g = n(11),
          M = r(g),
          y = n(155),
          E = n(50),
          S = function (t) {
        function e() {
          var t = arguments.length <= 0 || void 0 === arguments[0] ? 50 : arguments[0],
              n = arguments.length <= 1 || void 0 === arguments[1] ? 24 : arguments[1];
          (0, s["default"])(this, e);
          var r = m["default"].sphere(t, n, !0),
              i = new b["default"](y, E);
          return (0, f["default"])(this, (0, o["default"])(e).call(this, r, i));
        }

        return (0, _["default"])(e, t), (0, l["default"])(e, [{
          key: "draw",
          value: function value(t) {
            this.shader.bind(), t.bind(0), (0, d["default"])((0, o["default"])(e.prototype), "draw", this).call(this);
          }
        }]), e;
      }(M["default"]);

      e["default"] = S, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(14),
          d = r(h),
          p = n(5),
          _ = r(p),
          v = n(23),
          m = r(v),
          x = n(8),
          b = r(x),
          g = n(11),
          M = r(g),
          y = n(76),
          E = n(75),
          S = function (t) {
        function e() {
          var t = arguments.length <= 0 || void 0 === arguments[0] ? 20 : arguments[0];
          (0, s["default"])(this, e);
          var n = m["default"].skybox(t),
              r = new b["default"](y, E);
          return (0, f["default"])(this, (0, o["default"])(e).call(this, n, r));
        }

        return (0, _["default"])(e, t), (0, l["default"])(e, [{
          key: "draw",
          value: function value(t) {
            this.shader.bind(), t.bind(0), (0, d["default"])((0, o["default"])(e.prototype), "draw", this).call(this);
          }
        }]), e;
      }(M["default"]);

      e["default"] = S, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(22),
          l = r(u),
          c = n(4),
          f = r(c),
          h = n(32),
          d = r(h),
          p = n(53),
          _ = r(p),
          v = n(56),
          m = r(v),
          x = function () {
        function t() {
          var e = this;
          (0, o["default"])(this, t), this._children = [], this._matrixIdentity = mat4.create(), this._init(), this._initTextures(), this._initViews(), this._efIndex = l["default"].addEF(function () {
            return e._loop();
          }), window.addEventListener("resize", function () {
            return e.resize();
          });
        }

        return (0, s["default"])(t, [{
          key: "update",
          value: function value() {}
        }, {
          key: "render",
          value: function value() {}
        }, {
          key: "stop",
          value: function value() {
            -1 !== this._efIndex && (this._efIndex = l["default"].removeEF(this._efIndex));
          }
        }, {
          key: "start",
          value: function value() {
            var t = this;
            -1 === this._efIndex && (this._efIndex = l["default"].addEF(function () {
              return t._loop();
            }));
          }
        }, {
          key: "resize",
          value: function value() {
            f["default"].setSize(window.innerWidth, window.innerHeight), this.camera.setAspectRatio(f["default"].aspectRatio);
          }
        }, {
          key: "addChild",
          value: function value(t) {
            this._children.push(t);
          }
        }, {
          key: "removeChild",
          value: function value(t) {
            var e = this._children.indexOf(t);

            return -1 == e ? void 0 : void this._children.splice(e, 1);
          }
        }, {
          key: "_initTextures",
          value: function value() {}
        }, {
          key: "_initViews",
          value: function value() {}
        }, {
          key: "_renderChildren",
          value: function value() {
            for (var t = void 0, e = 0; e < this._children.length; e++) {
              t = this._children[e], t.toRender();
            }

            f["default"].rotate(this._matrixIdentity);
          }
        }, {
          key: "_init",
          value: function value() {
            this.camera = new d["default"](), this.camera.setPerspective(45 * Math.PI / 180, f["default"].aspectRatio, .1, 100), this.orbitalControl = new m["default"](this.camera, window, 15), this.orbitalControl.radius.value = 10, this.cameraOrtho = new _["default"]();
          }
        }, {
          key: "_loop",
          value: function value() {
            f["default"].viewport(0, 0, f["default"].width, f["default"].height), f["default"].setMatrices(this.camera), this.update(), this._renderChildren(), this.render();
          }
        }]), t;
      }();

      e["default"] = x, t.exports = e["default"];
    }, function (t, e) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var n = {},
          r = function r(t) {
        return t.length ? "vec" + t.length : "float";
      };

      n.addUniforms = function (t, e) {
        var n = "";

        for (var i in e) {
          var o = e[i],
              a = r(o);
          n += "uniform " + a + " " + i + ";\n";
        }

        return t = t.replace("{{UNIFORMS}}", n);
      }, n.bindUniforms = function (t, e) {
        for (var n in e) {
          var i = e[n],
              o = r(i);
          t.uniform(n, o, i);
        }
      }, e["default"] = n, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(8),
          l = r(u),
          c = function () {
        function t(e, n) {
          (0, o["default"])(this, t), this.shader = new l["default"](e, n), this._init();
        }

        return (0, s["default"])(t, [{
          key: "_init",
          value: function value() {}
        }, {
          key: "render",
          value: function value() {}
        }]), t;
      }();

      e["default"] = c, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(5),
          d = r(h),
          p = n(55),
          _ = r(p),
          v = n(8),
          m = r(v),
          x = n(4),
          b = r(x),
          g = function (t) {
        function e(t, n) {
          (0, s["default"])(this, e);
          var r = (0, f["default"])(this, (0, o["default"])(e).call(this));
          return r._children = [], r.shader = new m["default"](t, n), r._init(), r._matrixTemp = mat4.create(), r;
        }

        return (0, d["default"])(e, t), (0, l["default"])(e, [{
          key: "_init",
          value: function value() {}
        }, {
          key: "addChild",
          value: function value(t) {
            this._children.push(t);
          }
        }, {
          key: "removeChild",
          value: function value(t) {
            var e = this._children.indexOf(t);

            return -1 == e ? void 0 : void this._children.splice(e, 1);
          }
        }, {
          key: "toRender",
          value: function value(t) {
            void 0 === t && (t = mat4.create()), mat4.mul(this._matrixTemp, t, this.matrix), b["default"].rotate(this._matrixTemp), this.render();

            for (var e = 0; e < this._children.length; e++) {
              var n = this._children[e];
              n.toRender(this.matrix);
            }
          }
        }, {
          key: "render",
          value: function value() {}
        }]), e;
      }(_["default"]);

      e["default"] = g, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(5),
          d = r(h),
          p = n(33),
          _ = r(p),
          v = n(95),
          m = r(v),
          x = function (t) {
        function e() {
          return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).call(this, !0));
        }

        return (0, d["default"])(e, t), (0, l["default"])(e, [{
          key: "parse",
          value: function value(t) {
            return (0, m["default"])(t);
          }
        }, {
          key: "_onLoaded",
          value: function value() {
            var t = this.parse(this._req.response);
            this._callback && this._callback(t);
          }
        }]), e;
      }(_["default"]);

      x.parse = function (t) {
        return (0, m["default"])(t);
      }, e["default"] = x, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(3),
          o = r(i),
          a = n(1),
          s = r(a),
          u = n(2),
          l = r(u),
          c = n(6),
          f = r(c),
          h = n(14),
          d = r(h),
          p = n(5),
          _ = r(p),
          v = n(33),
          m = r(v),
          x = n(18),
          b = r(x),
          g = function (t) {
        function e() {
          return (0, s["default"])(this, e), (0, f["default"])(this, (0, o["default"])(e).apply(this, arguments));
        }

        return (0, _["default"])(e, t), (0, l["default"])(e, [{
          key: "load",
          value: function value(t, n) {
            var r = arguments.length <= 2 || void 0 === arguments[2] ? 4 : arguments[2];
            this._drawType = r, (0, d["default"])((0, o["default"])(e.prototype), "load", this).call(this, t, n);
          }
        }, {
          key: "_onLoaded",
          value: function value() {
            this.parseObj(this._req.response);
          }
        }, {
          key: "parseObj",
          value: function value(t) {
            function e(t) {
              var e = parseInt(t);
              return 3 * (e >= 0 ? e - 1 : e + h.length / 3);
            }

            function n(t) {
              var e = parseInt(t);
              return 3 * (e >= 0 ? e - 1 : e + d.length / 3);
            }

            function r(t) {
              var e = parseInt(t);
              return 2 * (e >= 0 ? e - 1 : e + p.length / 2);
            }

            function i(t, e, n) {
              l.push([h[t], h[t + 1], h[t + 2]]), l.push([h[e], h[e + 1], h[e + 2]]), l.push([h[n], h[n + 1], h[n + 2]]), _.push(3 * v + 0), _.push(3 * v + 1), _.push(3 * v + 2), v++;
            }

            function o(t, e, n) {
              c.push([p[t], p[t + 1]]), c.push([p[e], p[e + 1]]), c.push([p[n], p[n + 1]]);
            }

            function a(t, e, n) {
              f.push([d[t], d[t + 1], d[t + 2]]), f.push([d[e], d[e + 1], d[e + 2]]), f.push([d[n], d[n + 1], d[n + 2]]);
            }

            function s(t, s, u, l, c, f, h, d, p, _, v, m) {
              var x = e(t),
                  b = e(s),
                  g = e(u),
                  M = void 0;
              void 0 === l ? i(x, b, g) : (M = e(l), i(x, b, M), i(b, g, M)), void 0 !== c && (x = r(c), b = r(f), g = r(h), void 0 === l ? o(x, b, g) : (M = r(d), o(x, b, M), o(b, g, M))), void 0 !== p && (x = n(p), b = n(_), g = n(v), void 0 === l ? a(x, b, g) : (M = n(m), a(x, b, M), a(b, g, M)));
            }

            for (var u = t.split("\n"), l = [], c = [], f = [], h = [], d = [], p = [], _ = [], v = 0, m = void 0, x = /v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, b = /vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, g = /vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/, M = /f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/, y = /f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/, E = /f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/, S = /f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/, w = 0; w < u.length; w++) {
              var A = u[w];
              A = A.trim(), 0 !== A.length && "#" !== A.charAt(0) && (null !== (m = x.exec(A)) ? h.push(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])) : null !== (m = b.exec(A)) ? d.push(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])) : null !== (m = g.exec(A)) ? p.push(parseFloat(m[1]), parseFloat(m[2])) : null !== (m = M.exec(A)) ? s(m[1], m[2], m[3], m[4]) : null !== (m = y.exec(A)) ? s(m[2], m[5], m[8], m[11], m[3], m[6], m[9], m[12]) : null !== (m = E.exec(A)) ? s(m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15], m[4], m[8], m[12], m[16]) : null !== (m = S.exec(A)) && s(m[2], m[5], m[8], m[11], void 0, void 0, void 0, void 0, m[3], m[6], m[9], m[12]));
            }

            return this._generateMeshes({
              positions: l,
              coords: c,
              normals: f,
              indices: _
            });
          }
        }, {
          key: "_generateMeshes",
          value: function value(t) {
            var e = 65535,
                n = t.normals.length > 0,
                r = t.coords.length > 0,
                i = void 0;

            if (t.positions.length > e) {
              var o = [],
                  a = 0,
                  s = {};

              for (s.positions = t.positions.concat(), s.coords = t.coords.concat(), s.indices = t.indices.concat(), s.normals = t.normals.concat(); t.indices.length > 0;) {
                for (var u = Math.min(e, t.positions.length), l = t.indices.splice(0, u), c = [], f = [], h = [], d = void 0, p = 0, _ = 0; _ < l.length; _++) {
                  l[_] > p && (p = l[_]), d = l[_], c.push(s.positions[d]), r && f.push(s.coords[d]), n && h.push(s.normals[d]), l[_] -= a;
                }

                a = p + 1, i = new b["default"](this._drawType), i.bufferVertex(c), r && i.bufferTexCoord(f), i.bufferIndex(l), n && i.bufferNormal(h), o.push(i);
              }

              return this._callback && this._callback(o, s), o;
            }

            return i = new b["default"](this._drawType), i.bufferVertex(t.positions), r && i.bufferTexCoord(t.coords), i.bufferIndex(t.indices), n && i.bufferNormal(t.normals), this._callback && this._callback(i, t), i;
          }
        }]), e;
      }(m["default"]);

      g.parse = function (t) {
        var e = new g();
        return e.parseObj(t);
      }, e["default"] = g, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = !0;

      try {
        var l = document.createEvent("CustomEvent");
        l = null;
      } catch (c) {
        u = !1;
      }

      var f = function () {
        function t() {
          (0, o["default"])(this, t), this._eventListeners = {};
        }

        return (0, s["default"])(t, [{
          key: "addEventListener",
          value: function value(t, e) {
            return null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {}), this._eventListeners[t] || (this._eventListeners[t] = []), this._eventListeners[t].push(e), this;
          }
        }, {
          key: "on",
          value: function value(t, e) {
            return this.addEventListener(t, e);
          }
        }, {
          key: "removeEventListener",
          value: function value(t, e) {
            null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {});
            var n = this._eventListeners[t];
            if ("undefined" == typeof n) return this;

            for (var r = n.length, i = 0; r > i; i++) {
              n[i] === e && (n.splice(i, 1), i--, r--);
            }

            return this;
          }
        }, {
          key: "off",
          value: function value(t, e) {
            return this.removeEventListener(t, e);
          }
        }, {
          key: "dispatchEvent",
          value: function value(t) {
            null !== this._eventListeners && void 0 !== this._eventListeners || (this._eventListeners = {});
            var e = t.type;

            try {
              null === t.target && (t.target = this), t.currentTarget = this;
            } catch (n) {
              var r = {
                type: e,
                detail: t.detail,
                dispatcher: this
              };
              return this.dispatchEvent(r);
            }

            var i = this._eventListeners[e];
            if (null !== i && void 0 !== i) for (var o = this._copyArray(i), a = o.length, s = 0; a > s; s++) {
              var u = o[s];
              u.call(this, t);
            }
            return this;
          }
        }, {
          key: "dispatchCustomEvent",
          value: function value(t, e) {
            var n = void 0;
            return u ? (n = document.createEvent("CustomEvent"), n.dispatcher = this, n.initCustomEvent(t, !1, !1, e)) : n = {
              type: t,
              detail: e,
              dispatcher: this
            }, this.dispatchEvent(n);
          }
        }, {
          key: "trigger",
          value: function value(t, e) {
            return this.dispatchCustomEvent(t, e);
          }
        }, {
          key: "_destroy",
          value: function value() {
            if (null !== this._eventListeners) {
              for (var t in this._eventListeners) {
                if (this._eventListeners.hasOwnProperty(t)) {
                  for (var e = this._eventListeners[t], n = e.length, r = 0; n > r; r++) {
                    e[r] = null;
                  }

                  delete this._eventListeners[t];
                }
              }

              this._eventListeners = null;
            }
          }
        }, {
          key: "_copyArray",
          value: function value(t) {
            for (var e = new Array(t.length), n = e.length, r = 0; n > r; r++) {
              e[r] = t[r];
            }

            return e;
          }
        }]), t;
      }();

      e["default"] = f, t.exports = e["default"];
    }, function (t, e) {
      "use strict";

      function n(t, e, n, r, i, o) {
        function a(e) {
          var n = 0;

          do {
            e[n++] = t[r];
          } while (++r < _ && n < e.length);

          return n;
        }

        function s(e, n, i) {
          var o = 0;

          do {
            e[n + o++] = t[r];
          } while (++r < _ && i > o);

          return o;
        }

        function u(t, e, n, r) {
          var i = 4 * r,
              o = s(e, n, i);
          if (i > o) throw new Error("Error reading raw pixels: got " + o + " bytes, expected " + i);
        }

        for (var l = new Array(4), c = null, f = void 0, h = void 0, d = void 0, p = new Array(2), _ = t.length; o > 0;) {
          if (a(l) < l.length) throw new Error("Error reading bytes: expected " + l.length);
          if (2 !== l[0] || 2 !== l[1] || 0 !== (128 & l[2])) return e[n++] = l[0], e[n++] = l[1], e[n++] = l[2], e[n++] = l[3], void u(t, e, n, i * o - 1);
          if (((255 & l[2]) << 8 | 255 & l[3]) !== i) throw new Error("Wrong scanline width " + ((255 & l[2]) << 8 | 255 & l[3]) + ", expected " + i);
          null === c && (c = new Array(4 * i)), f = 0;

          for (var v = 0; 4 > v; v++) {
            for (h = (v + 1) * i; h > f;) {
              if (a(p) < p.length) throw new Error("Error reading 2-byte buffer");

              if ((255 & p[0]) > 128) {
                if (d = (255 & p[0]) - 128, 0 === d || d > h - f) throw new Error("Bad scanline data");

                for (; d-- > 0;) {
                  c[f++] = p[1];
                }
              } else {
                if (d = 255 & p[0], 0 === d || d > h - f) throw new Error("Bad scanline data");

                if (c[f++] = p[1], --d > 0) {
                  if (s(c, f, d) < d) throw new Error("Error reading non-run data");
                  f += d;
                }
              }
            }
          }

          for (var m = 0; i > m; m++) {
            e[n + 0] = c[m], e[n + 1] = c[m + i], e[n + 2] = c[m + 2 * i], e[n + 3] = c[m + 3 * i], n += 4;
          }

          o--;
        }
      }

      function r(t) {
        function e() {
          var e = "";

          do {
            var n = t[r];

            if (n === c) {
              ++r;
              break;
            }

            e += String.fromCharCode(n);
          } while (++r < l);

          return e;
        }

        t instanceof ArrayBuffer && (t = new Uint8Array(t));

        for (var r = 0, l = t.length, c = 10, f = 0, h = 0, d = 1, p = 1, _ = !1, v = 0; 20 > v; v++) {
          var m = e(),
              x = void 0;
          if (x = m.match(i)) ;else if (x = m.match(s)) _ = !0;else if (x = m.match(a)) d = Number(x[1]);else if (x = m.match(o)) ;else if (x = m.match(u)) {
            h = Number(x[1]), f = Number(x[2]);
            break;
          }
        }

        if (!_) throw new Error("File is not run length encoded!");
        var b = new Uint8Array(f * h * 4),
            g = f,
            M = h;
        n(t, b, 0, r, g, M);

        for (var y = new Float32Array(f * h * 4), E = 0; E < b.length; E += 4) {
          var S = b[E + 0] / 255,
              w = b[E + 1] / 255,
              A = b[E + 2] / 255,
              T = b[E + 3],
              I = Math.pow(2, T - 128);
          S *= I, w *= I, A *= I;
          var F = E;
          y[F + 0] = S, y[F + 1] = w, y[F + 2] = A, y[F + 3] = 1;
        }

        return {
          shape: [f, h],
          exposure: d,
          gamma: p,
          data: y
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var i = "#\\?RADIANCE",
          o = "#.*",
          a = "EXPOSURE=\\s*([0-9]*[.][0-9]*)",
          s = "FORMAT=32-bit_rle_rgbe",
          u = "-Y ([0-9]+) \\+X ([0-9]+)";
      e["default"] = r, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(1),
          o = r(i),
          a = n(2),
          s = r(a),
          u = n(7),
          l = r(u),
          c = n(34),
          f = r(c),
          h = n(22),
          d = r(h),
          p = function p(t, e) {
        var n = e || {};
        return t.touches ? (n.x = t.touches[0].pageX, n.y = t.touches[0].pageY) : (n.x = t.clientX, n.y = t.clientY), n;
      },
          _ = function () {
        function t(e) {
          var n = this,
              r = arguments.length <= 1 || void 0 === arguments[1] ? window : arguments[1],
              i = arguments.length <= 2 || void 0 === arguments[2] ? .1 : arguments[2];
          (0, o["default"])(this, t), this._target = e, this._listenerTarget = r, this.matrix = l["default"].mat4.create(), this.m = l["default"].mat4.create(), this._vZaxis = l["default"].vec3.clone([0, 0, 0]), this._zAxis = l["default"].vec3.clone([0, 0, 1]), this.preMouse = {
            x: 0,
            y: 0
          }, this.mouse = {
            x: 0,
            y: 0
          }, this._isMouseDown = !1, this._rotation = l["default"].quat.create(), this.tempRotation = l["default"].quat.create(), this._rotateZMargin = 0, this._offset = .004, this._slerp = -1, this._isLocked = !1, this._diffX = new f["default"](0, i), this._diffY = new f["default"](0, i), this._listenerTarget.addEventListener("mousedown", function (t) {
            return n._onDown(t);
          }), this._listenerTarget.addEventListener("touchstart", function (t) {
            return n._onDown(t);
          }), this._listenerTarget.addEventListener("mousemove", function (t) {
            return n._onMove(t);
          }), this._listenerTarget.addEventListener("touchmove", function (t) {
            return n._onMove(t);
          }), window.addEventListener("touchend", function () {
            return n._onUp();
          }), window.addEventListener("mouseup", function () {
            return n._onUp();
          }), d["default"].addEF(function () {
            return n._loop();
          });
        }

        return (0, s["default"])(t, [{
          key: "inverseControl",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
            this._isInvert = t;
          }
        }, {
          key: "lock",
          value: function value() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
            this._isLocked = t;
          }
        }, {
          key: "setCameraPos",
          value: function value(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? .1 : arguments[1];

            if (this.easing = e, !(this._slerp > 0)) {
              var n = l["default"].quat.clone(this._rotation);
              this._updateRotation(n), this._rotation = l["default"].quat.clone(n), this._currDiffX = this.diffX = 0, this._currDiffY = this.diffY = 0, this._isMouseDown = !1, this._isRotateZ = 0, this._targetQuat = l["default"].quat.clone(t), this._slerp = 1;
            }
          }
        }, {
          key: "resetQuat",
          value: function value() {
            this._rotation = l["default"].quat.clone([0, 0, 1, 0]), this.tempRotation = l["default"].quat.clone([0, 0, 0, 0]), this._targetQuat = void 0, this._slerp = -1;
          }
        }, {
          key: "_onDown",
          value: function value(t) {
            if (!this._isLocked) {
              var e = p(t),
                  n = l["default"].quat.clone(this._rotation);
              this._updateRotation(n), this._rotation = n, this._isMouseDown = !0, this._isRotateZ = 0, this.preMouse = {
                x: e.x,
                y: e.y
              }, e.y < this._rotateZMargin || e.y > window.innerHeight - this._rotateZMargin ? this._isRotateZ = 1 : (e.x < this._rotateZMargin || e.x > window.innerWidth - this._rotateZMargin) && (this._isRotateZ = 2), this._diffX.setTo(0), this._diffY.setTo(0);
            }
          }
        }, {
          key: "_onMove",
          value: function value(t) {
            this._isLocked || p(t, this.mouse);
          }
        }, {
          key: "_onUp",
          value: function value() {
            this._isLocked || (this._isMouseDown = !1);
          }
        }, {
          key: "_updateRotation",
          value: function value(t) {
            this._isMouseDown && !this._isLocked && (this._diffX.value = -(this.mouse.x - this.preMouse.x), this._diffY.value = this.mouse.y - this.preMouse.y, this._isInvert && (this._diffX.value = -this._diffX.targetValue, this._diffY.value = -this._diffY.targetValue));
            var e = void 0,
                n = void 0;
            if (this._isRotateZ > 0) 1 === this._isRotateZ ? (e = -this._diffX.value * this._offset, e *= this.preMouse.y < this._rotateZMargin ? -1 : 1, n = l["default"].quat.clone([0, 0, Math.sin(e), Math.cos(e)]), l["default"].quat.multiply(n, t, n)) : (e = -this._diffY.value * this._offset, e *= this.preMouse.x < this._rotateZMargin ? 1 : -1, n = l["default"].quat.clone([0, 0, Math.sin(e), Math.cos(e)]), l["default"].quat.multiply(n, t, n));else {
              var r = l["default"].vec3.clone([this._diffX.value, this._diffY.value, 0]),
                  i = l["default"].vec3.create();
              l["default"].vec3.cross(i, r, this._zAxis), l["default"].vec3.normalize(i, i), e = l["default"].vec3.length(r) * this._offset, n = l["default"].quat.clone([Math.sin(e) * i[0], Math.sin(e) * i[1], Math.sin(e) * i[2], Math.cos(e)]), l["default"].quat.multiply(t, n, t);
            }
          }
        }, {
          key: "_loop",
          value: function value() {
            l["default"].mat4.identity(this.m), void 0 === this._targetQuat ? (l["default"].quat.set(this.tempRotation, this._rotation[0], this._rotation[1], this._rotation[2], this._rotation[3]), this._updateRotation(this.tempRotation)) : (this._slerp += .1 * (0 - this._slerp), this._slerp < 5e-4 ? (l["default"].quat.copy(this._rotation, this._targetQuat), l["default"].quat.copy(this.tempRotation, this._targetQuat), this._targetQuat = void 0, this._diffX.setTo(0), this._diffY.setTo(0), this._slerp = -1) : (l["default"].quat.set(this.tempRotation, 0, 0, 0, 0), l["default"].quat.slerp(this.tempRotation, this._targetQuat, this._rotation, this._slerp))), l["default"].vec3.transformQuat(this._vZaxis, this._vZaxis, this.tempRotation), l["default"].mat4.fromQuat(this.matrix, this.tempRotation);
          }
        }, {
          key: "easing",
          set: function set(t) {
            this._diffX.easing = t, this._diffY.easing = t;
          },
          get: function get() {
            return this._diffX.easing;
          }
        }]), t;
      }();

      e["default"] = _, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var i = n(30),
          o = r(i),
          a = n(73),
          s = r(a),
          u = n(74),
          l = r(u),
          c = n(50),
          f = r(c),
          h = n(49),
          d = r(h),
          p = n(76),
          _ = r(p),
          v = n(75),
          m = r(v),
          x = n(152),
          b = r(x),
          g = n(153),
          M = r(g),
          y = n(154),
          E = r(y),
          S = {
        simpleColorFrag: o["default"],
        bigTriangleVert: s["default"],
        generalVert: l["default"],
        copyFrag: f["default"],
        basicVert: d["default"],
        skyboxVert: _["default"],
        skyboxFrag: m["default"],
        pbrVert: b["default"],
        pbrColorFrag: M["default"],
        pbrTextureFrag: E["default"]
      };

      e["default"] = S, t.exports = e["default"];
    }, function (t, e, n) {
      "use strict";

      function r(t) {
        return t && t.__esModule ? t : {
          "default": t
        };
      }

      function i(t) {
        switch (t) {
          default:
          case "linear":
            return f.Linear.None;

          case "expIn":
            return f.Exponential.In;

          case "expOut":
            return f.Exponential.Out;

          case "expInOut":
            return f.Exponential.InOut;

          case "cubicIn":
            return f.Cubic.In;

          case "cubicOut":
            return f.Cubic.Out;

          case "cubicInOut":
            return f.Cubic.InOut;

          case "quarticIn":
            return f.Quartic.In;

          case "quarticOut":
            return f.Quartic.Out;

          case "quarticInOut":
            return f.Quartic.InOut;

          case "quinticIn":
            return f.Quintic.In;

          case "quinticOut":
            return f.Quintic.Out;

          case "quinticInOut":
            return f.Quintic.InOut;

          case "sinusoidalIn":
            return f.Sinusoidal.In;

          case "sinusoidalOut":
            return f.Sinusoidal.Out;

          case "sinusoidalInOut":
            return f.Sinusoidal.InOut;

          case "circularIn":
            return f.Circular.In;

          case "circularOut":
            return f.Circular.Out;

          case "circularInOut":
            return f.Circular.InOut;

          case "elasticIn":
            return f.Elastic.In;

          case "elasticOut":
            return f.Elastic.Out;

          case "elasticInOut":
            return f.Elastic.InOut;

          case "backIn":
            return f.Back.In;

          case "backOut":
            return f.Back.Out;

          case "backInOut":
            return f.Back.InOut;

          case "bounceIn":
            return f.Bounce["in"];

          case "bounceOut":
            return f.Bounce.out;

          case "bounceInOut":
            return f.Bounce.inOut;
        }
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      });

      var o = n(1),
          a = r(o),
          s = n(2),
          u = r(s),
          l = n(22),
          c = r(l),
          f = {
        Linear: {
          None: function None(t) {
            return t;
          }
        },
        Quadratic: {
          In: function In(t) {
            return t * t;
          },
          Out: function Out(t) {
            return t * (2 - t);
          },
          InOut: function InOut(t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
          }
        },
        Cubic: {
          In: function In(t) {
            return t * t * t;
          },
          Out: function Out(t) {
            return --t * t * t + 1;
          },
          InOut: function InOut(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
          }
        },
        Quartic: {
          In: function In(t) {
            return t * t * t * t;
          },
          Out: function Out(t) {
            return 1 - --t * t * t * t;
          },
          InOut: function InOut(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
          }
        },
        Quintic: {
          In: function In(t) {
            return t * t * t * t * t;
          },
          Out: function Out(t) {
            return --t * t * t * t * t + 1;
          },
          InOut: function InOut(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
          }
        },
        Sinusoidal: {
          In: function In(t) {
            return 1 - Math.cos(t * Math.PI / 2);
          },
          Out: function Out(t) {
            return Math.sin(t * Math.PI / 2);
          },
          InOut: function InOut(t) {
            return .5 * (1 - Math.cos(Math.PI * t));
          }
        },
        Exponential: {
          In: function In(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
          },
          Out: function Out(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          },
          InOut: function InOut(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2);
          }
        },
        Circular: {
          In: function In(t) {
            return 1 - Math.sqrt(1 - t * t);
          },
          Out: function Out(t) {
            return Math.sqrt(1 - --t * t);
          },
          InOut: function InOut(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          }
        },
        Elastic: {
          In: function In(t) {
            var e = void 0,
                n = .1,
                r = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = r / 4) : e = r * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r)));
          },
          Out: function Out(t) {
            var e = void 0,
                n = .1,
                r = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = r / 4) : e = r * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / r) + 1);
          },
          InOut: function InOut(t) {
            var e = void 0,
                n = .1,
                r = .4;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = r / 4) : e = r * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / r) * .5 + 1);
          }
        },
        Back: {
          In: function In(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          Out: function Out(t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1;
          },
          InOut: function InOut(t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
          }
        },
        Bounce: {
          "in": function _in(t) {
            return 1 - f.Bounce.out(1 - t);
          },
          out: function out(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
          },
          inOut: function inOut(t) {
            return .5 > t ? .5 * f.Bounce["in"](2 * t) : .5 * f.Bounce.out(2 * t - 1) + .5;
          }
        }
      },
          h = function () {
        function t(e) {
          var n = this,
              r = arguments.length <= 1 || void 0 === arguments[1] ? "expOut" : arguments[1],
              i = arguments.length <= 2 || void 0 === arguments[2] ? .01 : arguments[2];
          (0, a["default"])(this, t), this._value = e, this._startValue = e, this._targetValue = e, this._counter = 1, this.speed = i, this.easing = r, this._needUpdate = !0, this._efIndex = c["default"].addEF(function () {
            return n._update();
          });
        }

        return (0, u["default"])(t, [{
          key: "_update",
          value: function value() {
            var t = this._counter + this.speed;
            return t > 1 && (t = 1), this._counter === t ? void (this._needUpdate = !1) : (this._counter = t, void (this._needUpdate = !0));
          }
        }, {
          key: "limit",
          value: function value(t, e) {
            return t > e ? void this.limit(e, t) : (this._min = t, this._max = e, void this._checkLimit());
          }
        }, {
          key: "setTo",
          value: function value(t) {
            this._value = t, this._targetValue = t, this._counter = 1;
          }
        }, {
          key: "_checkLimit",
          value: function value() {
            void 0 !== this._min && this._targetValue < this._min && (this._targetValue = this._min), void 0 !== this._max && this._targetValue > this._max && (this._targetValue = this._max);
          }
        }, {
          key: "destroy",
          value: function value() {
            c["default"].removeEF(this._efIndex);
          }
        }, {
          key: "value",
          set: function set(t) {
            this._startValue = this._value, this._targetValue = t, this._checkLimit(), this._counter = 0;
          },
          get: function get() {
            if (this._needUpdate) {
              var t = i(this.easing),
                  e = t(this._counter);
              this._value = this._startValue + e * (this._targetValue - this._startValue), this._needUpdate = !1;
            }

            return this._value;
          }
        }, {
          key: "targetValue",
          get: function get() {
            return this._targetValue;
          }
        }]), t;
      }();

      e["default"] = h, t.exports = e["default"];
    }, function (t, e, n) {
      t.exports = {
        "default": n(105),
        __esModule: !0
      };
    }, function (t, e, n) {
      t.exports = {
        "default": n(106),
        __esModule: !0
      };
    }, function (t, e, n) {
      t.exports = {
        "default": n(107),
        __esModule: !0
      };
    }, function (t, e, n) {
      t.exports = {
        "default": n(109),
        __esModule: !0
      };
    }, function (t, e, n) {
      t.exports = {
        "default": n(110),
        __esModule: !0
      };
    }, function (t, e, n) {
      t.exports = {
        "default": n(111),
        __esModule: !0
      };
    }, function (t, e, n) {
      n(130);
      var r = n(9).Object;

      t.exports = function (t, e) {
        return r.create(t, e);
      };
    }, function (t, e, n) {
      n(131);
      var r = n(9).Object;

      t.exports = function (t, e, n) {
        return r.defineProperty(t, e, n);
      };
    }, function (t, e, n) {
      n(132);
      var r = n(9).Object;

      t.exports = function (t, e) {
        return r.getOwnPropertyDescriptor(t, e);
      };
    }, function (t, e, n) {
      n(133), t.exports = n(9).Object.getPrototypeOf;
    }, function (t, e, n) {
      n(134), t.exports = n(9).Object.setPrototypeOf;
    }, function (t, e, n) {
      n(137), n(135), n(138), n(139), t.exports = n(9).Symbol;
    }, function (t, e, n) {
      n(136), n(140), t.exports = n(48).f("iterator");
    }, function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    }, function (t, e) {
      t.exports = function () {};
    }, function (t, e, n) {
      var r = n(13),
          i = n(128),
          o = n(127);

      t.exports = function (t) {
        return function (e, n, a) {
          var s,
              u = r(e),
              l = i(u.length),
              c = o(a, l);

          if (t && n != n) {
            for (; l > c;) {
              if (s = u[c++], s != s) return !0;
            }
          } else for (; l > c; c++) {
            if ((t || c in u) && u[c] === n) return t || c || 0;
          }

          return !t && -1;
        };
      };
    }, function (t, e, n) {
      var r = n(27),
          i = n(64),
          o = n(41);

      t.exports = function (t) {
        var e = r(t),
            n = i.f;
        if (n) for (var a, s = n(t), u = o.f, l = 0; s.length > l;) {
          u.call(t, a = s[l++]) && e.push(a);
        }
        return e;
      };
    }, function (t, e, n) {
      t.exports = n(12).document && document.documentElement;
    }, function (t, e, n) {
      var r = n(58);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == r(t) ? t.split("") : Object(t);
      };
    }, function (t, e, n) {
      var r = n(58);

      t.exports = Array.isArray || function (t) {
        return "Array" == r(t);
      };
    }, function (t, e, n) {
      "use strict";

      var r = n(39),
          i = n(28),
          o = n(42),
          a = {};
      n(20)(a, n(21)("iterator"), function () {
        return this;
      }), t.exports = function (t, e, n) {
        t.prototype = r(a, {
          next: i(1, n)
        }), o(t, e + " Iterator");
      };
    }, function (t, e) {
      t.exports = function (t, e) {
        return {
          value: e,
          done: !!t
        };
      };
    }, function (t, e, n) {
      var r = n(27),
          i = n(13);

      t.exports = function (t, e) {
        for (var n, o = i(t), a = r(o), s = a.length, u = 0; s > u;) {
          if (o[n = a[u++]] === e) return n;
        }
      };
    }, function (t, e, n) {
      var r = n(29)("meta"),
          i = n(26),
          o = n(16),
          a = n(17).f,
          s = 0,
          u = Object.isExtensible || function () {
        return !0;
      },
          l = !n(25)(function () {
        return u(Object.preventExtensions({}));
      }),
          c = function c(t) {
        a(t, r, {
          value: {
            i: "O" + ++s,
            w: {}
          }
        });
      },
          f = function f(t, e) {
        if (!i(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;

        if (!o(t, r)) {
          if (!u(t)) return "F";
          if (!e) return "E";
          c(t);
        }

        return t[r].i;
      },
          h = function h(t, e) {
        if (!o(t, r)) {
          if (!u(t)) return !0;
          if (!e) return !1;
          c(t);
        }

        return t[r].w;
      },
          d = function d(t) {
        return l && p.NEED && u(t) && !o(t, r) && c(t), t;
      },
          p = t.exports = {
        KEY: r,
        NEED: !1,
        fastKey: f,
        getWeak: h,
        onFreeze: d
      };
    }, function (t, e, n) {
      var r = n(17),
          i = n(24),
          o = n(27);
      t.exports = n(15) ? Object.defineProperties : function (t, e) {
        i(t);

        for (var n, a = o(e), s = a.length, u = 0; s > u;) {
          r.f(t, n = a[u++], e[n]);
        }

        return t;
      };
    }, function (t, e, n) {
      var r = n(13),
          i = n(63).f,
          o = {}.toString,
          a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
          s = function s(t) {
        try {
          return i(t);
        } catch (e) {
          return a.slice();
        }
      };

      t.exports.f = function (t) {
        return a && "[object Window]" == o.call(t) ? s(t) : i(r(t));
      };
    }, function (t, e, n) {
      var r = n(26),
          i = n(24),
          o = function o(t, e) {
        if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
      };

      t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
          try {
            r = n(59)(Function.call, n(40).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array);
          } catch (i) {
            e = !0;
          }

          return function (t, n) {
            return o(t, n), e ? t.__proto__ = n : r(t, n), t;
          };
        }({}, !1) : void 0),
        check: o
      };
    }, function (t, e, n) {
      var r = n(45),
          i = n(35);

      t.exports = function (t) {
        return function (e, n) {
          var o,
              a,
              s = String(i(e)),
              u = r(n),
              l = s.length;
          return 0 > u || u >= l ? t ? "" : void 0 : (o = s.charCodeAt(u), 55296 > o || o > 56319 || u + 1 === l || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
        };
      };
    }, function (t, e, n) {
      var r = n(45),
          i = Math.max,
          o = Math.min;

      t.exports = function (t, e) {
        return t = r(t), 0 > t ? i(t + e, 0) : o(t, e);
      };
    }, function (t, e, n) {
      var r = n(45),
          i = Math.min;

      t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0;
      };
    }, function (t, e, n) {
      "use strict";

      var r = n(113),
          i = n(120),
          o = n(37),
          a = n(13);
      t.exports = n(62)(Array, "Array", function (t, e) {
        this._t = a(t), this._i = 0, this._k = e;
      }, function () {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]]);
      }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
    }, function (t, e, n) {
      var r = n(19);
      r(r.S, "Object", {
        create: n(39)
      });
    }, function (t, e, n) {
      var r = n(19);
      r(r.S + r.F * !n(15), "Object", {
        defineProperty: n(17).f
      });
    }, function (t, e, n) {
      var r = n(13),
          i = n(40).f;
      n(67)("getOwnPropertyDescriptor", function () {
        return function (t, e) {
          return i(r(t), e);
        };
      });
    }, function (t, e, n) {
      var r = n(69),
          i = n(65);
      n(67)("getPrototypeOf", function () {
        return function (t) {
          return i(r(t));
        };
      });
    }, function (t, e, n) {
      var r = n(19);
      r(r.S, "Object", {
        setPrototypeOf: n(125).set
      });
    }, function (t, e) {}, function (t, e, n) {
      "use strict";

      var r = n(126)(!0);
      n(62)(String, "String", function (t) {
        this._t = String(t), this._i = 0;
      }, function () {
        var t,
            e = this._t,
            n = this._i;
        return n >= e.length ? {
          value: void 0,
          done: !0
        } : (t = r(e, n), this._i += t.length, {
          value: t,
          done: !1
        });
      });
    }, function (t, e, n) {
      "use strict";

      var r = n(12),
          i = n(16),
          o = n(15),
          a = n(19),
          s = n(68),
          u = n(122).KEY,
          l = n(25),
          c = n(44),
          f = n(42),
          h = n(29),
          d = n(21),
          p = n(48),
          _ = n(47),
          v = n(121),
          m = n(115),
          x = n(118),
          b = n(24),
          g = n(13),
          M = n(46),
          y = n(28),
          E = n(39),
          S = n(124),
          w = n(40),
          A = n(17),
          T = n(27),
          I = w.f,
          F = A.f,
          R = S.f,
          _D = r.Symbol,
          O = r.JSON,
          P = O && O.stringify,
          k = "prototype",
          L = d("_hidden"),
          C = d("toPrimitive"),
          N = {}.propertyIsEnumerable,
          B = c("symbol-registry"),
          V = c("symbols"),
          U = c("op-symbols"),
          z = Object[k],
          j = "function" == typeof _D,
          G = r.QObject,
          X = !G || !G[k] || !G[k].findChild,
          Y = o && l(function () {
        return 7 != E(F({}, "a", {
          get: function get() {
            return F(this, "a", {
              value: 7
            }).a;
          }
        })).a;
      }) ? function (t, e, n) {
        var r = I(z, e);
        r && delete z[e], F(t, e, n), r && t !== z && F(z, e, r);
      } : F,
          q = function q(t) {
        var e = V[t] = E(_D[k]);
        return e._k = t, e;
      },
          H = j && "symbol" == _typeof(_D.iterator) ? function (t) {
        return "symbol" == _typeof(t);
      } : function (t) {
        return t instanceof _D;
      },
          W = function W(t, e, n) {
        return t === z && W(U, e, n), b(t), e = M(e, !0), b(n), i(V, e) ? (n.enumerable ? (i(t, L) && t[L][e] && (t[L][e] = !1), n = E(n, {
          enumerable: y(0, !1)
        })) : (i(t, L) || F(t, L, y(1, {})), t[L][e] = !0), Y(t, e, n)) : F(t, e, n);
      },
          Q = function Q(t, e) {
        b(t);

        for (var n, r = m(e = g(e)), i = 0, o = r.length; o > i;) {
          W(t, n = r[i++], e[n]);
        }

        return t;
      },
          K = function K(t, e) {
        return void 0 === e ? E(t) : Q(E(t), e);
      },
          Z = function Z(t) {
        var e = N.call(this, t = M(t, !0));
        return this === z && i(V, t) && !i(U, t) ? !1 : e || !i(this, t) || !i(V, t) || i(this, L) && this[L][t] ? e : !0;
      },
          J = function J(t, e) {
        if (t = g(t), e = M(e, !0), t !== z || !i(V, e) || i(U, e)) {
          var n = I(t, e);
          return !n || !i(V, e) || i(t, L) && t[L][e] || (n.enumerable = !0), n;
        }
      },
          $ = function $(t) {
        for (var e, n = R(g(t)), r = [], o = 0; n.length > o;) {
          i(V, e = n[o++]) || e == L || e == u || r.push(e);
        }

        return r;
      },
          tt = function tt(t) {
        for (var e, n = t === z, r = R(n ? U : g(t)), o = [], a = 0; r.length > a;) {
          i(V, e = r[a++]) && (n ? i(z, e) : !0) && o.push(V[e]);
        }

        return o;
      };

      j || (_D = function D() {
        if (this instanceof _D) throw TypeError("Symbol is not a constructor!");

        var t = h(arguments.length > 0 ? arguments[0] : void 0),
            e = function e(n) {
          this === z && e.call(U, n), i(this, L) && i(this[L], t) && (this[L][t] = !1), Y(this, t, y(1, n));
        };

        return o && X && Y(z, t, {
          configurable: !0,
          set: e
        }), q(t);
      }, s(_D[k], "toString", function () {
        return this._k;
      }), w.f = J, A.f = W, n(63).f = S.f = $, n(41).f = Z, n(64).f = tt, o && !n(38) && s(z, "propertyIsEnumerable", Z, !0), p.f = function (t) {
        return q(d(t));
      }), a(a.G + a.W + a.F * !j, {
        Symbol: _D
      });

      for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) {
        d(et[nt++]);
      }

      for (var et = T(d.store), nt = 0; et.length > nt;) {
        _(et[nt++]);
      }

      a(a.S + a.F * !j, "Symbol", {
        "for": function _for(t) {
          return i(B, t += "") ? B[t] : B[t] = _D(t);
        },
        keyFor: function keyFor(t) {
          if (H(t)) return v(B, t);
          throw TypeError(t + " is not a symbol!");
        },
        useSetter: function useSetter() {
          X = !0;
        },
        useSimple: function useSimple() {
          X = !1;
        }
      }), a(a.S + a.F * !j, "Object", {
        create: K,
        defineProperty: W,
        defineProperties: Q,
        getOwnPropertyDescriptor: J,
        getOwnPropertyNames: $,
        getOwnPropertySymbols: tt
      }), O && a(a.S + a.F * (!j || l(function () {
        var t = _D();

        return "[null]" != P([t]) || "{}" != P({
          a: t
        }) || "{}" != P(Object(t));
      })), "JSON", {
        stringify: function stringify(t) {
          if (void 0 !== t && !H(t)) {
            for (var e, n, r = [t], i = 1; arguments.length > i;) {
              r.push(arguments[i++]);
            }

            return e = r[1], "function" == typeof e && (n = e), !n && x(e) || (e = function e(t, _e3) {
              return n && (_e3 = n.call(this, t, _e3)), H(_e3) ? void 0 : _e3;
            }), r[1] = e, P.apply(O, r);
          }
        }
      }), _D[k][C] || n(20)(_D[k], C, _D[k].valueOf), f(_D, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
    }, function (t, e, n) {
      n(47)("asyncIterator");
    }, function (t, e, n) {
      n(47)("observable");
    }, function (t, e, n) {
      n(129);

      for (var r = n(12), i = n(20), o = n(37), a = n(21)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; 5 > u; u++) {
        var l = s[u],
            c = r[l],
            f = c && c.prototype;
        f && !f[a] && i(f, a, l), o[l] = o.Array;
      }
    }, function (t, e, n) {
      var r = n(10),
          i = {};
      i.create = function () {
        var t = new r.ARRAY_TYPE(4);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, i.clone = function (t) {
        var e = new r.ARRAY_TYPE(4);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
      }, i.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, i.fromValues = function (t, e, n, i) {
        var o = new r.ARRAY_TYPE(4);
        return o[0] = t, o[1] = e, o[2] = n, o[3] = i, o;
      }, i.set = function (t, e, n, r, i) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t;
      }, i.transpose = function (t, e) {
        if (t === e) {
          var n = e[1];
          t[1] = e[2], t[2] = n;
        } else t[0] = e[0], t[1] = e[2], t[2] = e[1], t[3] = e[3];

        return t;
      }, i.invert = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = n * o - i * r;
        return a ? (a = 1 / a, t[0] = o * a, t[1] = -r * a, t[2] = -i * a, t[3] = n * a, t) : null;
      }, i.adjoint = function (t, e) {
        var n = e[0];
        return t[0] = e[3], t[1] = -e[1], t[2] = -e[2], t[3] = n, t;
      }, i.determinant = function (t) {
        return t[0] * t[3] - t[2] * t[1];
      }, i.multiply = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = n[0],
            u = n[1],
            l = n[2],
            c = n[3];
        return t[0] = r * s + o * u, t[1] = i * s + a * u, t[2] = r * l + o * c, t[3] = i * l + a * c, t;
      }, i.mul = i.multiply, i.rotate = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = Math.sin(n),
            u = Math.cos(n);
        return t[0] = r * u + o * s, t[1] = i * u + a * s, t[2] = r * -s + o * u, t[3] = i * -s + a * u, t;
      }, i.scale = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = n[0],
            u = n[1];
        return t[0] = r * s, t[1] = i * s, t[2] = o * u, t[3] = a * u, t;
      }, i.fromRotation = function (t, e) {
        var n = Math.sin(e),
            r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t;
      }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t;
      }, i.str = function (t) {
        return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }, i.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2));
      }, i.LDU = function (t, e, n, r) {
        return t[2] = r[2] / r[0], n[0] = r[0], n[1] = r[1], n[3] = r[3] - t[2] * n[1], [t, e, n];
      }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t;
      }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t;
      }, i.sub = i.subtract, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
      }, i.equals = function (t, e) {
        var n = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            s = e[0],
            u = e[1],
            l = e[2],
            c = e[3];
        return Math.abs(n - s) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(s)) && Math.abs(i - u) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(o - l) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(l)) && Math.abs(a - c) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(c));
      }, i.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t;
      }, i.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t;
      }, t.exports = i;
    }, function (t, e, n) {
      var r = n(10),
          i = {};
      i.create = function () {
        var t = new r.ARRAY_TYPE(6);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
      }, i.clone = function (t) {
        var e = new r.ARRAY_TYPE(6);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
      }, i.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
      }, i.fromValues = function (t, e, n, i, o, a) {
        var s = new r.ARRAY_TYPE(6);
        return s[0] = t, s[1] = e, s[2] = n, s[3] = i, s[4] = o, s[5] = a, s;
      }, i.set = function (t, e, n, r, i, o, a) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t;
      }, i.invert = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = e[4],
            s = e[5],
            u = n * o - r * i;
        return u ? (u = 1 / u, t[0] = o * u, t[1] = -r * u, t[2] = -i * u, t[3] = n * u, t[4] = (i * s - o * a) * u, t[5] = (r * a - n * s) * u, t) : null;
      }, i.determinant = function (t) {
        return t[0] * t[3] - t[1] * t[2];
      }, i.multiply = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = n[0],
            c = n[1],
            f = n[2],
            h = n[3],
            d = n[4],
            p = n[5];
        return t[0] = r * l + o * c, t[1] = i * l + a * c, t[2] = r * f + o * h, t[3] = i * f + a * h, t[4] = r * d + o * p + s, t[5] = i * d + a * p + u, t;
      }, i.mul = i.multiply, i.rotate = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = Math.sin(n),
            c = Math.cos(n);
        return t[0] = r * c + o * l, t[1] = i * c + a * l, t[2] = r * -l + o * c, t[3] = i * -l + a * c, t[4] = s, t[5] = u, t;
      }, i.scale = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = n[0],
            c = n[1];
        return t[0] = r * l, t[1] = i * l, t[2] = o * c, t[3] = a * c, t[4] = s, t[5] = u, t;
      }, i.translate = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = n[0],
            c = n[1];
        return t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = r * l + o * c + s, t[5] = i * l + a * c + u, t;
      }, i.fromRotation = function (t, e) {
        var n = Math.sin(e),
            r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = -n, t[3] = r, t[4] = 0, t[5] = 0, t;
      }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = e[1], t[4] = 0, t[5] = 0, t;
      }, i.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = e[0], t[5] = e[1], t;
      }, i.str = function (t) {
        return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
      }, i.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1);
      }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t;
      }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t;
      }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t;
      }, i.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t;
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5];
      }, i.equals = function (t, e) {
        var n = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = e[0],
            c = e[1],
            f = e[2],
            h = e[3],
            d = e[4],
            p = e[5];
        return Math.abs(n - l) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(i - c) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(c)) && Math.abs(o - f) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(a - h) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(h)) && Math.abs(s - d) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(d)) && Math.abs(u - p) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(p));
      }, t.exports = i;
    }, function (t, e, n) {
      var r = n(10),
          i = {
        scalar: {},
        SIMD: {}
      };
      i.create = function () {
        var t = new r.ARRAY_TYPE(16);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.clone = function (t) {
        var e = new r.ARRAY_TYPE(16);
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
      }, i.fromValues = function (t, e, n, i, o, a, s, u, l, c, f, h, d, p, _, v) {
        var m = new r.ARRAY_TYPE(16);
        return m[0] = t, m[1] = e, m[2] = n, m[3] = i, m[4] = o, m[5] = a, m[6] = s, m[7] = u, m[8] = l, m[9] = c, m[10] = f, m[11] = h, m[12] = d, m[13] = p, m[14] = _, m[15] = v, m;
      }, i.set = function (t, e, n, r, i, o, a, s, u, l, c, f, h, d, p, _, v) {
        return t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o, t[5] = a, t[6] = s, t[7] = u, t[8] = l, t[9] = c, t[10] = f, t[11] = h, t[12] = d, t[13] = p, t[14] = _, t[15] = v, t;
      }, i.identity = function (t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.scalar.transpose = function (t, e) {
        if (t === e) {
          var n = e[1],
              r = e[2],
              i = e[3],
              o = e[6],
              a = e[7],
              s = e[11];
          t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = n, t[6] = e[9], t[7] = e[13], t[8] = r, t[9] = o, t[11] = e[14], t[12] = i, t[13] = a, t[14] = s;
        } else t[0] = e[0], t[1] = e[4], t[2] = e[8], t[3] = e[12], t[4] = e[1], t[5] = e[5], t[6] = e[9], t[7] = e[13], t[8] = e[2], t[9] = e[6], t[10] = e[10], t[11] = e[14], t[12] = e[3], t[13] = e[7], t[14] = e[11], t[15] = e[15];

        return t;
      }, i.SIMD.transpose = function (t, e) {
        var n, r, i, o, a, s, u, l, c, f;
        return n = SIMD.Float32x4.load(e, 0), r = SIMD.Float32x4.load(e, 4), i = SIMD.Float32x4.load(e, 8), o = SIMD.Float32x4.load(e, 12), a = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(i, o, 0, 1, 4, 5), u = SIMD.Float32x4.shuffle(a, s, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(a, s, 1, 3, 5, 7), SIMD.Float32x4.store(t, 0, u), SIMD.Float32x4.store(t, 4, l), a = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), s = SIMD.Float32x4.shuffle(i, o, 2, 3, 6, 7), c = SIMD.Float32x4.shuffle(a, s, 0, 2, 4, 6), f = SIMD.Float32x4.shuffle(a, s, 1, 3, 5, 7), SIMD.Float32x4.store(t, 8, c), SIMD.Float32x4.store(t, 12, f), t;
      }, i.transpose = r.USE_SIMD ? i.SIMD.transpose : i.scalar.transpose, i.scalar.invert = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = e[4],
            s = e[5],
            u = e[6],
            l = e[7],
            c = e[8],
            f = e[9],
            h = e[10],
            d = e[11],
            p = e[12],
            _ = e[13],
            v = e[14],
            m = e[15],
            x = n * s - r * a,
            b = n * u - i * a,
            g = n * l - o * a,
            M = r * u - i * s,
            y = r * l - o * s,
            E = i * l - o * u,
            S = c * _ - f * p,
            w = c * v - h * p,
            A = c * m - d * p,
            T = f * v - h * _,
            I = f * m - d * _,
            F = h * m - d * v,
            R = x * F - b * I + g * T + M * A - y * w + E * S;
        return R ? (R = 1 / R, t[0] = (s * F - u * I + l * T) * R, t[1] = (i * I - r * F - o * T) * R, t[2] = (_ * E - v * y + m * M) * R, t[3] = (h * y - f * E - d * M) * R, t[4] = (u * A - a * F - l * w) * R, t[5] = (n * F - i * A + o * w) * R, t[6] = (v * g - p * E - m * b) * R, t[7] = (c * E - h * g + d * b) * R, t[8] = (a * I - s * A + l * S) * R, t[9] = (r * A - n * I - o * S) * R, t[10] = (p * y - _ * g + m * x) * R, t[11] = (f * g - c * y - d * x) * R, t[12] = (s * w - a * T - u * S) * R, t[13] = (n * T - r * w + i * S) * R, t[14] = (_ * b - p * M - v * x) * R, t[15] = (c * M - f * b + h * x) * R, t) : null;
      }, i.SIMD.invert = function (t, e) {
        var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            h = SIMD.Float32x4.load(e, 0),
            d = SIMD.Float32x4.load(e, 4),
            p = SIMD.Float32x4.load(e, 8),
            _ = SIMD.Float32x4.load(e, 12);

        return a = SIMD.Float32x4.shuffle(h, d, 0, 1, 4, 5), r = SIMD.Float32x4.shuffle(p, _, 0, 1, 4, 5), n = SIMD.Float32x4.shuffle(a, r, 0, 2, 4, 6), r = SIMD.Float32x4.shuffle(r, a, 1, 3, 5, 7), a = SIMD.Float32x4.shuffle(h, d, 2, 3, 6, 7), o = SIMD.Float32x4.shuffle(p, _, 2, 3, 6, 7), i = SIMD.Float32x4.shuffle(a, o, 0, 2, 4, 6), o = SIMD.Float32x4.shuffle(o, a, 1, 3, 5, 7), a = SIMD.Float32x4.mul(i, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.mul(r, a), u = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, a), s), u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), u), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), a = SIMD.Float32x4.mul(r, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), s), c = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(o, a)), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), a = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(r, 2, 3, 0, 1), o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), i = SIMD.Float32x4.swizzle(i, 2, 3, 0, 1), s = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), s), l = SIMD.Float32x4.mul(n, a), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), s = SIMD.Float32x4.sub(s, SIMD.Float32x4.mul(i, a)), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, a), l), l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1), a = SIMD.Float32x4.mul(n, r), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), l), c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, a), c), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, a), l), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(i, a)), a = SIMD.Float32x4.mul(n, o), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(i, a)), l = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), l), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(i, a), u), l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.mul(n, i), a = SIMD.Float32x4.swizzle(a, 1, 0, 3, 2), u = SIMD.Float32x4.add(SIMD.Float32x4.mul(o, a), u), c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(r, a)), a = SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(o, a)), c = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, a), c), f = SIMD.Float32x4.mul(n, s), f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 2, 3, 0, 1), f), f = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(f, 1, 0, 3, 2), f), a = SIMD.Float32x4.reciprocalApproximation(f), f = SIMD.Float32x4.sub(SIMD.Float32x4.add(a, a), SIMD.Float32x4.mul(f, SIMD.Float32x4.mul(a, a))), (f = SIMD.Float32x4.swizzle(f, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(f, s)), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(f, u)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(f, l)), SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(f, c)), t) : null;
      }, i.invert = r.USE_SIMD ? i.SIMD.invert : i.scalar.invert, i.scalar.adjoint = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = e[4],
            s = e[5],
            u = e[6],
            l = e[7],
            c = e[8],
            f = e[9],
            h = e[10],
            d = e[11],
            p = e[12],
            _ = e[13],
            v = e[14],
            m = e[15];
        return t[0] = s * (h * m - d * v) - f * (u * m - l * v) + _ * (u * d - l * h), t[1] = -(r * (h * m - d * v) - f * (i * m - o * v) + _ * (i * d - o * h)), t[2] = r * (u * m - l * v) - s * (i * m - o * v) + _ * (i * l - o * u), t[3] = -(r * (u * d - l * h) - s * (i * d - o * h) + f * (i * l - o * u)), t[4] = -(a * (h * m - d * v) - c * (u * m - l * v) + p * (u * d - l * h)), t[5] = n * (h * m - d * v) - c * (i * m - o * v) + p * (i * d - o * h), t[6] = -(n * (u * m - l * v) - a * (i * m - o * v) + p * (i * l - o * u)), t[7] = n * (u * d - l * h) - a * (i * d - o * h) + c * (i * l - o * u), t[8] = a * (f * m - d * _) - c * (s * m - l * _) + p * (s * d - l * f), t[9] = -(n * (f * m - d * _) - c * (r * m - o * _) + p * (r * d - o * f)), t[10] = n * (s * m - l * _) - a * (r * m - o * _) + p * (r * l - o * s), t[11] = -(n * (s * d - l * f) - a * (r * d - o * f) + c * (r * l - o * s)), t[12] = -(a * (f * v - h * _) - c * (s * v - u * _) + p * (s * h - u * f)), t[13] = n * (f * v - h * _) - c * (r * v - i * _) + p * (r * h - i * f), t[14] = -(n * (s * v - u * _) - a * (r * v - i * _) + p * (r * u - i * s)), t[15] = n * (s * h - u * f) - a * (r * h - i * f) + c * (r * u - i * s), t;
      }, i.SIMD.adjoint = function (t, e) {
        var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            h,
            d,
            p,
            n = SIMD.Float32x4.load(e, 0),
            r = SIMD.Float32x4.load(e, 4),
            i = SIMD.Float32x4.load(e, 8),
            o = SIMD.Float32x4.load(e, 12);
        return c = SIMD.Float32x4.shuffle(n, r, 0, 1, 4, 5), s = SIMD.Float32x4.shuffle(i, o, 0, 1, 4, 5), a = SIMD.Float32x4.shuffle(c, s, 0, 2, 4, 6), s = SIMD.Float32x4.shuffle(s, c, 1, 3, 5, 7), c = SIMD.Float32x4.shuffle(n, r, 2, 3, 6, 7), l = SIMD.Float32x4.shuffle(i, o, 2, 3, 6, 7), u = SIMD.Float32x4.shuffle(c, l, 0, 2, 4, 6), l = SIMD.Float32x4.shuffle(l, c, 1, 3, 5, 7), c = SIMD.Float32x4.mul(u, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.mul(s, c), h = SIMD.Float32x4.mul(a, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, c), f), h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, c), h), h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1), c = SIMD.Float32x4.mul(s, u), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), f), p = SIMD.Float32x4.mul(a, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(l, c)), p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, c), p), p = SIMD.Float32x4.swizzle(p, 2, 3, 0, 1), c = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 3, 0, 1), l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1), f = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, c), f), d = SIMD.Float32x4.mul(a, c), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), f = SIMD.Float32x4.sub(f, SIMD.Float32x4.mul(u, c)), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, c), d), d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1), c = SIMD.Float32x4.mul(a, s), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), d), p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(u, c), p), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, c), d), p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(u, c)), c = SIMD.Float32x4.mul(a, l), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(u, c)), d = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), d), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(u, c), h), d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(s, c)), c = SIMD.Float32x4.mul(a, u), c = SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), h = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, c), h), p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(s, c)), c = SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(l, c)), p = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, c), p), SIMD.Float32x4.store(t, 0, f), SIMD.Float32x4.store(t, 4, h), SIMD.Float32x4.store(t, 8, d), SIMD.Float32x4.store(t, 12, p), t;
      }, i.adjoint = r.USE_SIMD ? i.SIMD.adjoint : i.scalar.adjoint, i.determinant = function (t) {
        var e = t[0],
            n = t[1],
            r = t[2],
            i = t[3],
            o = t[4],
            a = t[5],
            s = t[6],
            u = t[7],
            l = t[8],
            c = t[9],
            f = t[10],
            h = t[11],
            d = t[12],
            p = t[13],
            _ = t[14],
            v = t[15],
            m = e * a - n * o,
            x = e * s - r * o,
            b = e * u - i * o,
            g = n * s - r * a,
            M = n * u - i * a,
            y = r * u - i * s,
            E = l * p - c * d,
            S = l * _ - f * d,
            w = l * v - h * d,
            A = c * _ - f * p,
            T = c * v - h * p,
            I = f * v - h * _;
        return m * I - x * T + b * A + g * w - M * S + y * E;
      }, i.SIMD.multiply = function (t, e, n) {
        var r = SIMD.Float32x4.load(e, 0),
            i = SIMD.Float32x4.load(e, 4),
            o = SIMD.Float32x4.load(e, 8),
            a = SIMD.Float32x4.load(e, 12),
            s = SIMD.Float32x4.load(n, 0),
            u = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(s, 3, 3, 3, 3), a))));
        SIMD.Float32x4.store(t, 0, u);
        var l = SIMD.Float32x4.load(n, 4),
            c = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(l, 3, 3, 3, 3), a))));
        SIMD.Float32x4.store(t, 4, c);
        var f = SIMD.Float32x4.load(n, 8),
            h = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(f, 3, 3, 3, 3), a))));
        SIMD.Float32x4.store(t, 8, h);
        var d = SIMD.Float32x4.load(n, 12),
            p = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 0, 0, 0, 0), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 1, 1, 1, 1), i), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 2, 2, 2, 2), o), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(d, 3, 3, 3, 3), a))));
        return SIMD.Float32x4.store(t, 12, p), t;
      }, i.scalar.multiply = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = e[4],
            u = e[5],
            l = e[6],
            c = e[7],
            f = e[8],
            h = e[9],
            d = e[10],
            p = e[11],
            _ = e[12],
            v = e[13],
            m = e[14],
            x = e[15],
            b = n[0],
            g = n[1],
            M = n[2],
            y = n[3];
        return t[0] = b * r + g * s + M * f + y * _, t[1] = b * i + g * u + M * h + y * v, t[2] = b * o + g * l + M * d + y * m, t[3] = b * a + g * c + M * p + y * x, b = n[4], g = n[5], M = n[6], y = n[7], t[4] = b * r + g * s + M * f + y * _, t[5] = b * i + g * u + M * h + y * v, t[6] = b * o + g * l + M * d + y * m, t[7] = b * a + g * c + M * p + y * x, b = n[8], g = n[9], M = n[10], y = n[11], t[8] = b * r + g * s + M * f + y * _, t[9] = b * i + g * u + M * h + y * v, t[10] = b * o + g * l + M * d + y * m, t[11] = b * a + g * c + M * p + y * x, b = n[12], g = n[13], M = n[14], y = n[15], t[12] = b * r + g * s + M * f + y * _, t[13] = b * i + g * u + M * h + y * v, t[14] = b * o + g * l + M * d + y * m, t[15] = b * a + g * c + M * p + y * x, t;
      }, i.multiply = r.USE_SIMD ? i.SIMD.multiply : i.scalar.multiply, i.mul = i.multiply, i.scalar.translate = function (t, e, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            h,
            d,
            p,
            _ = n[0],
            v = n[1],
            m = n[2];
        return e === t ? (t[12] = e[0] * _ + e[4] * v + e[8] * m + e[12], t[13] = e[1] * _ + e[5] * v + e[9] * m + e[13], t[14] = e[2] * _ + e[6] * v + e[10] * m + e[14], t[15] = e[3] * _ + e[7] * v + e[11] * m + e[15]) : (r = e[0], i = e[1], o = e[2], a = e[3], s = e[4], u = e[5], l = e[6], c = e[7], f = e[8], h = e[9], d = e[10], p = e[11], t[0] = r, t[1] = i, t[2] = o, t[3] = a, t[4] = s, t[5] = u, t[6] = l, t[7] = c, t[8] = f, t[9] = h, t[10] = d, t[11] = p, t[12] = r * _ + s * v + f * m + e[12], t[13] = i * _ + u * v + h * m + e[13], t[14] = o * _ + l * v + d * m + e[14], t[15] = a * _ + c * v + p * m + e[15]), t;
      }, i.SIMD.translate = function (t, e, n) {
        var r = SIMD.Float32x4.load(e, 0),
            i = SIMD.Float32x4.load(e, 4),
            o = SIMD.Float32x4.load(e, 8),
            a = SIMD.Float32x4.load(e, 12),
            s = SIMD.Float32x4(n[0], n[1], n[2], 0);
        e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11]), r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(s, 0, 0, 0, 0)), i = SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(s, 1, 1, 1, 1)), o = SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(s, 2, 2, 2, 2));
        var u = SIMD.Float32x4.add(r, SIMD.Float32x4.add(i, SIMD.Float32x4.add(o, a)));
        return SIMD.Float32x4.store(t, 12, u), t;
      }, i.translate = r.USE_SIMD ? i.SIMD.translate : i.scalar.translate, i.scalar.scale = function (t, e, n) {
        var r = n[0],
            i = n[1],
            o = n[2];
        return t[0] = e[0] * r, t[1] = e[1] * r, t[2] = e[2] * r, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * i, t[6] = e[6] * i, t[7] = e[7] * i, t[8] = e[8] * o, t[9] = e[9] * o, t[10] = e[10] * o, t[11] = e[11] * o, t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
      }, i.SIMD.scale = function (t, e, n) {
        var r,
            i,
            o,
            a = SIMD.Float32x4(n[0], n[1], n[2], 0);
        return r = SIMD.Float32x4.load(e, 0), SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(a, 0, 0, 0, 0))), i = SIMD.Float32x4.load(e, 4), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(i, SIMD.Float32x4.swizzle(a, 1, 1, 1, 1))), o = SIMD.Float32x4.load(e, 8), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(o, SIMD.Float32x4.swizzle(a, 2, 2, 2, 2))), t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
      }, i.scale = r.USE_SIMD ? i.SIMD.scale : i.scalar.scale, i.rotate = function (t, e, n, i) {
        var o,
            a,
            s,
            u,
            l,
            c,
            f,
            h,
            d,
            p,
            _,
            v,
            m,
            x,
            b,
            g,
            M,
            y,
            E,
            S,
            w,
            A,
            T,
            I,
            F = i[0],
            R = i[1],
            D = i[2],
            O = Math.sqrt(F * F + R * R + D * D);

        return Math.abs(O) < r.EPSILON ? null : (O = 1 / O, F *= O, R *= O, D *= O, o = Math.sin(n), a = Math.cos(n), s = 1 - a, u = e[0], l = e[1], c = e[2], f = e[3], h = e[4], d = e[5], p = e[6], _ = e[7], v = e[8], m = e[9], x = e[10], b = e[11], g = F * F * s + a, M = R * F * s + D * o, y = D * F * s - R * o, E = F * R * s - D * o, S = R * R * s + a, w = D * R * s + F * o, A = F * D * s + R * o, T = R * D * s - F * o, I = D * D * s + a, t[0] = u * g + h * M + v * y, t[1] = l * g + d * M + m * y, t[2] = c * g + p * M + x * y, t[3] = f * g + _ * M + b * y, t[4] = u * E + h * S + v * w, t[5] = l * E + d * S + m * w, t[6] = c * E + p * S + x * w, t[7] = f * E + _ * S + b * w, t[8] = u * A + h * T + v * I, t[9] = l * A + d * T + m * I, t[10] = c * A + p * T + x * I, t[11] = f * A + _ * T + b * I, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t);
      }, i.scalar.rotateX = function (t, e, n) {
        var r = Math.sin(n),
            i = Math.cos(n),
            o = e[4],
            a = e[5],
            s = e[6],
            u = e[7],
            l = e[8],
            c = e[9],
            f = e[10],
            h = e[11];
        return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[4] = o * i + l * r, t[5] = a * i + c * r, t[6] = s * i + f * r, t[7] = u * i + h * r, t[8] = l * i - o * r, t[9] = c * i - a * r, t[10] = f * i - s * r, t[11] = h * i - u * r, t;
      }, i.SIMD.rotateX = function (t, e, n) {
        var r = SIMD.Float32x4.splat(Math.sin(n)),
            i = SIMD.Float32x4.splat(Math.cos(n));
        e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        var o = SIMD.Float32x4.load(e, 4),
            a = SIMD.Float32x4.load(e, 8);
        return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, i), SIMD.Float32x4.mul(o, r))), t;
      }, i.rotateX = r.USE_SIMD ? i.SIMD.rotateX : i.scalar.rotateX, i.scalar.rotateY = function (t, e, n) {
        var r = Math.sin(n),
            i = Math.cos(n),
            o = e[0],
            a = e[1],
            s = e[2],
            u = e[3],
            l = e[8],
            c = e[9],
            f = e[10],
            h = e[11];
        return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * i - l * r, t[1] = a * i - c * r, t[2] = s * i - f * r, t[3] = u * i - h * r, t[8] = o * r + l * i, t[9] = a * r + c * i, t[10] = s * r + f * i, t[11] = u * r + h * i, t;
      }, i.SIMD.rotateY = function (t, e, n) {
        var r = SIMD.Float32x4.splat(Math.sin(n)),
            i = SIMD.Float32x4.splat(Math.cos(n));
        e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        var o = SIMD.Float32x4.load(e, 0),
            a = SIMD.Float32x4.load(e, 8);
        return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(a, i))), t;
      }, i.rotateY = r.USE_SIMD ? i.SIMD.rotateY : i.scalar.rotateY, i.scalar.rotateZ = function (t, e, n) {
        var r = Math.sin(n),
            i = Math.cos(n),
            o = e[0],
            a = e[1],
            s = e[2],
            u = e[3],
            l = e[4],
            c = e[5],
            f = e[6],
            h = e[7];
        return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t[0] = o * i + l * r, t[1] = a * i + c * r, t[2] = s * i + f * r, t[3] = u * i + h * r, t[4] = l * i - o * r, t[5] = c * i - a * r, t[6] = f * i - s * r, t[7] = h * i - u * r, t;
      }, i.SIMD.rotateZ = function (t, e, n) {
        var r = SIMD.Float32x4.splat(Math.sin(n)),
            i = SIMD.Float32x4.splat(Math.cos(n));
        e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
        var o = SIMD.Float32x4.load(e, 0),
            a = SIMD.Float32x4.load(e, 4);
        return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(o, i), SIMD.Float32x4.mul(a, r))), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, i), SIMD.Float32x4.mul(o, r))), t;
      }, i.rotateZ = r.USE_SIMD ? i.SIMD.rotateZ : i.scalar.rotateZ, i.fromTranslation = function (t, e) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
      }, i.fromScaling = function (t, e) {
        return t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.fromRotation = function (t, e, n) {
        var i,
            o,
            a,
            s = n[0],
            u = n[1],
            l = n[2],
            c = Math.sqrt(s * s + u * u + l * l);
        return Math.abs(c) < r.EPSILON ? null : (c = 1 / c, s *= c, u *= c, l *= c, i = Math.sin(e), o = Math.cos(e), a = 1 - o, t[0] = s * s * a + o, t[1] = u * s * a + l * i, t[2] = l * s * a - u * i, t[3] = 0, t[4] = s * u * a - l * i, t[5] = u * u * a + o, t[6] = l * u * a + s * i, t[7] = 0, t[8] = s * l * a + u * i, t[9] = u * l * a - s * i, t[10] = l * l * a + o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
      }, i.fromXRotation = function (t, e) {
        var n = Math.sin(e),
            r = Math.cos(e);
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = n, t[7] = 0, t[8] = 0, t[9] = -n, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.fromYRotation = function (t, e) {
        var n = Math.sin(e),
            r = Math.cos(e);
        return t[0] = r, t[1] = 0, t[2] = -n, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = n, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.fromZRotation = function (t, e) {
        var n = Math.sin(e),
            r = Math.cos(e);
        return t[0] = r, t[1] = n, t[2] = 0, t[3] = 0, t[4] = -n, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.fromRotationTranslation = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = r + r,
            u = i + i,
            l = o + o,
            c = r * s,
            f = r * u,
            h = r * l,
            d = i * u,
            p = i * l,
            _ = o * l,
            v = a * s,
            m = a * u,
            x = a * l;

        return t[0] = 1 - (d + _), t[1] = f + x, t[2] = h - m, t[3] = 0, t[4] = f - x, t[5] = 1 - (c + _), t[6] = p + v, t[7] = 0, t[8] = h + m, t[9] = p - v, t[10] = 1 - (c + d), t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t;
      }, i.getTranslation = function (t, e) {
        return t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
      }, i.getRotation = function (t, e) {
        var n = e[0] + e[5] + e[10],
            r = 0;
        return n > 0 ? (r = 2 * Math.sqrt(n + 1), t[3] = .25 * r, t[0] = (e[6] - e[9]) / r, t[1] = (e[8] - e[2]) / r, t[2] = (e[1] - e[4]) / r) : e[0] > e[5] & e[0] > e[10] ? (r = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / r, t[0] = .25 * r, t[1] = (e[1] + e[4]) / r, t[2] = (e[8] + e[2]) / r) : e[5] > e[10] ? (r = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / r, t[0] = (e[1] + e[4]) / r, t[1] = .25 * r, t[2] = (e[6] + e[9]) / r) : (r = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / r, t[0] = (e[8] + e[2]) / r, t[1] = (e[6] + e[9]) / r, t[2] = .25 * r), t;
      }, i.fromRotationTranslationScale = function (t, e, n, r) {
        var i = e[0],
            o = e[1],
            a = e[2],
            s = e[3],
            u = i + i,
            l = o + o,
            c = a + a,
            f = i * u,
            h = i * l,
            d = i * c,
            p = o * l,
            _ = o * c,
            v = a * c,
            m = s * u,
            x = s * l,
            b = s * c,
            g = r[0],
            M = r[1],
            y = r[2];

        return t[0] = (1 - (p + v)) * g, t[1] = (h + b) * g, t[2] = (d - x) * g, t[3] = 0, t[4] = (h - b) * M, t[5] = (1 - (f + v)) * M, t[6] = (_ + m) * M, t[7] = 0, t[8] = (d + x) * y, t[9] = (_ - m) * y, t[10] = (1 - (f + p)) * y, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t;
      }, i.fromRotationTranslationScaleOrigin = function (t, e, n, r, i) {
        var o = e[0],
            a = e[1],
            s = e[2],
            u = e[3],
            l = o + o,
            c = a + a,
            f = s + s,
            h = o * l,
            d = o * c,
            p = o * f,
            _ = a * c,
            v = a * f,
            m = s * f,
            x = u * l,
            b = u * c,
            g = u * f,
            M = r[0],
            y = r[1],
            E = r[2],
            S = i[0],
            w = i[1],
            A = i[2];

        return t[0] = (1 - (_ + m)) * M, t[1] = (d + g) * M, t[2] = (p - b) * M, t[3] = 0, t[4] = (d - g) * y, t[5] = (1 - (h + m)) * y, t[6] = (v + x) * y, t[7] = 0, t[8] = (p + b) * E, t[9] = (v - x) * E, t[10] = (1 - (h + _)) * E, t[11] = 0, t[12] = n[0] + S - (t[0] * S + t[4] * w + t[8] * A), t[13] = n[1] + w - (t[1] * S + t[5] * w + t[9] * A), t[14] = n[2] + A - (t[2] * S + t[6] * w + t[10] * A), t[15] = 1, t;
      }, i.fromQuat = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = n + n,
            s = r + r,
            u = i + i,
            l = n * a,
            c = r * a,
            f = r * s,
            h = i * a,
            d = i * s,
            p = i * u,
            _ = o * a,
            v = o * s,
            m = o * u;

        return t[0] = 1 - f - p, t[1] = c + m, t[2] = h - v, t[3] = 0, t[4] = c - m, t[5] = 1 - l - p, t[6] = d + _, t[7] = 0, t[8] = h + v, t[9] = d - _, t[10] = 1 - l - f, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
      }, i.frustum = function (t, e, n, r, i, o, a) {
        var s = 1 / (n - e),
            u = 1 / (i - r),
            l = 1 / (o - a);
        return t[0] = 2 * o * s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * o * u, t[6] = 0, t[7] = 0, t[8] = (n + e) * s, t[9] = (i + r) * u, t[10] = (a + o) * l, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = a * o * 2 * l, t[15] = 0, t;
      }, i.perspective = function (t, e, n, r, i) {
        var o = 1 / Math.tan(e / 2),
            a = 1 / (r - i);
        return t[0] = o / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = (i + r) * a, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = 2 * i * r * a, t[15] = 0, t;
      }, i.perspectiveFromFieldOfView = function (t, e, n, r) {
        var i = Math.tan(e.upDegrees * Math.PI / 180),
            o = Math.tan(e.downDegrees * Math.PI / 180),
            a = Math.tan(e.leftDegrees * Math.PI / 180),
            s = Math.tan(e.rightDegrees * Math.PI / 180),
            u = 2 / (a + s),
            l = 2 / (i + o);
        return t[0] = u, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = l, t[6] = 0, t[7] = 0, t[8] = -((a - s) * u * .5), t[9] = (i - o) * l * .5, t[10] = r / (n - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * n / (n - r), t[15] = 0, t;
      }, i.ortho = function (t, e, n, r, i, o, a) {
        var s = 1 / (e - n),
            u = 1 / (r - i),
            l = 1 / (o - a);
        return t[0] = -2 * s, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * u, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * l, t[11] = 0, t[12] = (e + n) * s, t[13] = (i + r) * u, t[14] = (a + o) * l, t[15] = 1, t;
      }, i.lookAt = function (t, e, n, o) {
        var a,
            s,
            u,
            l,
            c,
            f,
            h,
            d,
            p,
            _,
            v = e[0],
            m = e[1],
            x = e[2],
            b = o[0],
            g = o[1],
            M = o[2],
            y = n[0],
            E = n[1],
            S = n[2];

        return Math.abs(v - y) < r.EPSILON && Math.abs(m - E) < r.EPSILON && Math.abs(x - S) < r.EPSILON ? i.identity(t) : (h = v - y, d = m - E, p = x - S, _ = 1 / Math.sqrt(h * h + d * d + p * p), h *= _, d *= _, p *= _, a = g * p - M * d, s = M * h - b * p, u = b * d - g * h, _ = Math.sqrt(a * a + s * s + u * u), _ ? (_ = 1 / _, a *= _, s *= _, u *= _) : (a = 0, s = 0, u = 0), l = d * u - p * s, c = p * a - h * u, f = h * s - d * a, _ = Math.sqrt(l * l + c * c + f * f), _ ? (_ = 1 / _, l *= _, c *= _, f *= _) : (l = 0, c = 0, f = 0), t[0] = a, t[1] = l, t[2] = h, t[3] = 0, t[4] = s, t[5] = c, t[6] = d, t[7] = 0, t[8] = u, t[9] = f, t[10] = p, t[11] = 0, t[12] = -(a * v + s * m + u * x), t[13] = -(l * v + c * m + f * x), t[14] = -(h * v + d * m + p * x), t[15] = 1, t);
      }, i.str = function (t) {
        return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
      }, i.frob = function (t) {
        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2));
      }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t[2] = e[2] + n[2], t[3] = e[3] + n[3], t[4] = e[4] + n[4], t[5] = e[5] + n[5], t[6] = e[6] + n[6], t[7] = e[7] + n[7], t[8] = e[8] + n[8], t[9] = e[9] + n[9], t[10] = e[10] + n[10], t[11] = e[11] + n[11], t[12] = e[12] + n[12], t[13] = e[13] + n[13], t[14] = e[14] + n[14], t[15] = e[15] + n[15], t;
      }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t[2] = e[2] - n[2], t[3] = e[3] - n[3], t[4] = e[4] - n[4], t[5] = e[5] - n[5], t[6] = e[6] - n[6], t[7] = e[7] - n[7], t[8] = e[8] - n[8], t[9] = e[9] - n[9], t[10] = e[10] - n[10], t[11] = e[11] - n[11], t[12] = e[12] - n[12], t[13] = e[13] - n[13], t[14] = e[14] - n[14], t[15] = e[15] - n[15], t;
      }, i.sub = i.subtract, i.multiplyScalar = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t[2] = e[2] * n, t[3] = e[3] * n, t[4] = e[4] * n, t[5] = e[5] * n, t[6] = e[6] * n, t[7] = e[7] * n, t[8] = e[8] * n, t[9] = e[9] * n, t[10] = e[10] * n, t[11] = e[11] * n, t[12] = e[12] * n, t[13] = e[13] * n, t[14] = e[14] * n, t[15] = e[15] * n, t;
      }, i.multiplyScalarAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t[2] = e[2] + n[2] * r, t[3] = e[3] + n[3] * r, t[4] = e[4] + n[4] * r, t[5] = e[5] + n[5] * r, t[6] = e[6] + n[6] * r, t[7] = e[7] + n[7] * r, t[8] = e[8] + n[8] * r, t[9] = e[9] + n[9] * r, t[10] = e[10] + n[10] * r, t[11] = e[11] + n[11] * r, t[12] = e[12] + n[12] * r, t[13] = e[13] + n[13] * r, t[14] = e[14] + n[14] * r, t[15] = e[15] + n[15] * r, t;
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15];
      }, i.equals = function (t, e) {
        var n = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            s = t[4],
            u = t[5],
            l = t[6],
            c = t[7],
            f = t[8],
            h = t[9],
            d = t[10],
            p = t[11],
            _ = t[12],
            v = t[13],
            m = t[14],
            x = t[15],
            b = e[0],
            g = e[1],
            M = e[2],
            y = e[3],
            E = e[4],
            S = e[5],
            w = e[6],
            A = e[7],
            T = e[8],
            I = e[9],
            F = e[10],
            R = e[11],
            D = e[12],
            O = e[13],
            P = e[14],
            k = e[15];
        return Math.abs(n - b) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(b)) && Math.abs(i - g) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(g)) && Math.abs(o - M) <= r.EPSILON * Math.max(1, Math.abs(o), Math.abs(M)) && Math.abs(a - y) <= r.EPSILON * Math.max(1, Math.abs(a), Math.abs(y)) && Math.abs(s - E) <= r.EPSILON * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(u - S) <= r.EPSILON * Math.max(1, Math.abs(u), Math.abs(S)) && Math.abs(l - w) <= r.EPSILON * Math.max(1, Math.abs(l), Math.abs(w)) && Math.abs(c - A) <= r.EPSILON * Math.max(1, Math.abs(c), Math.abs(A)) && Math.abs(f - T) <= r.EPSILON * Math.max(1, Math.abs(f), Math.abs(T)) && Math.abs(h - I) <= r.EPSILON * Math.max(1, Math.abs(h), Math.abs(I)) && Math.abs(d - F) <= r.EPSILON * Math.max(1, Math.abs(d), Math.abs(F)) && Math.abs(p - R) <= r.EPSILON * Math.max(1, Math.abs(p), Math.abs(R)) && Math.abs(_ - D) <= r.EPSILON * Math.max(1, Math.abs(_), Math.abs(D)) && Math.abs(v - O) <= r.EPSILON * Math.max(1, Math.abs(v), Math.abs(O)) && Math.abs(m - P) <= r.EPSILON * Math.max(1, Math.abs(m), Math.abs(P)) && Math.abs(x - k) <= r.EPSILON * Math.max(1, Math.abs(x), Math.abs(k));
      }, t.exports = i;
    }, function (t, e, n) {
      var r = n(10),
          i = n(70),
          o = n(71),
          a = n(72),
          s = {};
      s.create = function () {
        var t = new r.ARRAY_TYPE(4);
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, s.rotationTo = function () {
        var t = o.create(),
            e = o.fromValues(1, 0, 0),
            n = o.fromValues(0, 1, 0);
        return function (r, i, a) {
          var u = o.dot(i, a);
          return -.999999 > u ? (o.cross(t, e, i), o.length(t) < 1e-6 && o.cross(t, n, i), o.normalize(t, t), s.setAxisAngle(r, t, Math.PI), r) : u > .999999 ? (r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 1, r) : (o.cross(t, i, a), r[0] = t[0], r[1] = t[1], r[2] = t[2], r[3] = 1 + u, s.normalize(r, r));
        };
      }(), s.setAxes = function () {
        var t = i.create();
        return function (e, n, r, i) {
          return t[0] = r[0], t[3] = r[1], t[6] = r[2], t[1] = i[0], t[4] = i[1], t[7] = i[2], t[2] = -n[0], t[5] = -n[1], t[8] = -n[2], s.normalize(e, s.fromMat3(e, t));
        };
      }(), s.clone = a.clone, s.fromValues = a.fromValues, s.copy = a.copy, s.set = a.set, s.identity = function (t) {
        return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
      }, s.setAxisAngle = function (t, e, n) {
        n = .5 * n;
        var r = Math.sin(n);
        return t[0] = r * e[0], t[1] = r * e[1], t[2] = r * e[2], t[3] = Math.cos(n), t;
      }, s.getAxisAngle = function (t, e) {
        var n = 2 * Math.acos(e[3]),
            r = Math.sin(n / 2);
        return 0 != r ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 1, t[1] = 0, t[2] = 0), n;
      }, s.add = a.add, s.multiply = function (t, e, n) {
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = n[0],
            u = n[1],
            l = n[2],
            c = n[3];
        return t[0] = r * c + a * s + i * l - o * u, t[1] = i * c + a * u + o * s - r * l, t[2] = o * c + a * l + r * u - i * s, t[3] = a * c - r * s - i * u - o * l, t;
      }, s.mul = s.multiply, s.scale = a.scale, s.rotateX = function (t, e, n) {
        n *= .5;
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = Math.sin(n),
            u = Math.cos(n);
        return t[0] = r * u + a * s, t[1] = i * u + o * s, t[2] = o * u - i * s, t[3] = a * u - r * s, t;
      }, s.rotateY = function (t, e, n) {
        n *= .5;
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = Math.sin(n),
            u = Math.cos(n);
        return t[0] = r * u - o * s, t[1] = i * u + a * s, t[2] = o * u + r * s, t[3] = a * u - i * s, t;
      }, s.rotateZ = function (t, e, n) {
        n *= .5;
        var r = e[0],
            i = e[1],
            o = e[2],
            a = e[3],
            s = Math.sin(n),
            u = Math.cos(n);
        return t[0] = r * u + i * s, t[1] = i * u - r * s, t[2] = o * u + a * s, t[3] = a * u - o * s, t;
      }, s.calculateW = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2];
        return t[0] = n, t[1] = r, t[2] = i, t[3] = Math.sqrt(Math.abs(1 - n * n - r * r - i * i)), t;
      }, s.dot = a.dot, s.lerp = a.lerp, s.slerp = function (t, e, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = e[0],
            c = e[1],
            f = e[2],
            h = e[3],
            d = n[0],
            p = n[1],
            _ = n[2],
            v = n[3];
        return o = l * d + c * p + f * _ + h * v, 0 > o && (o = -o, d = -d, p = -p, _ = -_, v = -v), 1 - o > 1e-6 ? (i = Math.acos(o), a = Math.sin(i), s = Math.sin((1 - r) * i) / a, u = Math.sin(r * i) / a) : (s = 1 - r, u = r), t[0] = s * l + u * d, t[1] = s * c + u * p, t[2] = s * f + u * _, t[3] = s * h + u * v, t;
      }, s.sqlerp = function () {
        var t = s.create(),
            e = s.create();
        return function (n, r, i, o, a, u) {
          return s.slerp(t, r, a, u), s.slerp(e, i, o, u), s.slerp(n, t, e, 2 * u * (1 - u)), n;
        };
      }(), s.invert = function (t, e) {
        var n = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            a = n * n + r * r + i * i + o * o,
            s = a ? 1 / a : 0;
        return t[0] = -n * s, t[1] = -r * s, t[2] = -i * s, t[3] = o * s, t;
      }, s.conjugate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = e[3], t;
      }, s.length = a.length, s.len = s.length, s.squaredLength = a.squaredLength, s.sqrLen = s.squaredLength, s.normalize = a.normalize, s.fromMat3 = function (t, e) {
        var n,
            r = e[0] + e[4] + e[8];
        if (r > 0) n = Math.sqrt(r + 1), t[3] = .5 * n, n = .5 / n, t[0] = (e[5] - e[7]) * n, t[1] = (e[6] - e[2]) * n, t[2] = (e[1] - e[3]) * n;else {
          var i = 0;
          e[4] > e[0] && (i = 1), e[8] > e[3 * i + i] && (i = 2);
          var o = (i + 1) % 3,
              a = (i + 2) % 3;
          n = Math.sqrt(e[3 * i + i] - e[3 * o + o] - e[3 * a + a] + 1), t[i] = .5 * n, n = .5 / n, t[3] = (e[3 * o + a] - e[3 * a + o]) * n, t[o] = (e[3 * o + i] + e[3 * i + o]) * n, t[a] = (e[3 * a + i] + e[3 * i + a]) * n;
        }
        return t;
      }, s.str = function (t) {
        return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }, s.exactEquals = a.exactEquals, s.equals = a.equals, t.exports = s;
    }, function (t, e, n) {
      var r = n(10),
          i = {};
      i.create = function () {
        var t = new r.ARRAY_TYPE(2);
        return t[0] = 0, t[1] = 0, t;
      }, i.clone = function (t) {
        var e = new r.ARRAY_TYPE(2);
        return e[0] = t[0], e[1] = t[1], e;
      }, i.fromValues = function (t, e) {
        var n = new r.ARRAY_TYPE(2);
        return n[0] = t, n[1] = e, n;
      }, i.copy = function (t, e) {
        return t[0] = e[0], t[1] = e[1], t;
      }, i.set = function (t, e, n) {
        return t[0] = e, t[1] = n, t;
      }, i.add = function (t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
      }, i.subtract = function (t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
      }, i.sub = i.subtract, i.multiply = function (t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;
      }, i.mul = i.multiply, i.divide = function (t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;
      }, i.div = i.divide, i.ceil = function (t, e) {
        return t[0] = Math.ceil(e[0]), t[1] = Math.ceil(e[1]), t;
      }, i.floor = function (t, e) {
        return t[0] = Math.floor(e[0]), t[1] = Math.floor(e[1]), t;
      }, i.min = function (t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
      }, i.max = function (t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
      }, i.round = function (t, e) {
        return t[0] = Math.round(e[0]), t[1] = Math.round(e[1]), t;
      }, i.scale = function (t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t;
      }, i.scaleAndAdd = function (t, e, n, r) {
        return t[0] = e[0] + n[0] * r, t[1] = e[1] + n[1] * r, t;
      }, i.distance = function (t, e) {
        var n = e[0] - t[0],
            r = e[1] - t[1];
        return Math.sqrt(n * n + r * r);
      }, i.dist = i.distance, i.squaredDistance = function (t, e) {
        var n = e[0] - t[0],
            r = e[1] - t[1];
        return n * n + r * r;
      }, i.sqrDist = i.squaredDistance, i.length = function (t) {
        var e = t[0],
            n = t[1];
        return Math.sqrt(e * e + n * n);
      }, i.len = i.length, i.squaredLength = function (t) {
        var e = t[0],
            n = t[1];
        return e * e + n * n;
      }, i.sqrLen = i.squaredLength, i.negate = function (t, e) {
        return t[0] = -e[0], t[1] = -e[1], t;
      }, i.inverse = function (t, e) {
        return t[0] = 1 / e[0], t[1] = 1 / e[1], t;
      }, i.normalize = function (t, e) {
        var n = e[0],
            r = e[1],
            i = n * n + r * r;
        return i > 0 && (i = 1 / Math.sqrt(i), t[0] = e[0] * i, t[1] = e[1] * i), t;
      }, i.dot = function (t, e) {
        return t[0] * e[0] + t[1] * e[1];
      }, i.cross = function (t, e, n) {
        var r = e[0] * n[1] - e[1] * n[0];
        return t[0] = t[1] = 0, t[2] = r, t;
      }, i.lerp = function (t, e, n, r) {
        var i = e[0],
            o = e[1];
        return t[0] = i + r * (n[0] - i), t[1] = o + r * (n[1] - o), t;
      }, i.random = function (t, e) {
        e = e || 1;
        var n = 2 * r.RANDOM() * Math.PI;
        return t[0] = Math.cos(n) * e, t[1] = Math.sin(n) * e, t;
      }, i.transformMat2 = function (t, e, n) {
        var r = e[0],
            i = e[1];
        return t[0] = n[0] * r + n[2] * i, t[1] = n[1] * r + n[3] * i, t;
      }, i.transformMat2d = function (t, e, n) {
        var r = e[0],
            i = e[1];
        return t[0] = n[0] * r + n[2] * i + n[4], t[1] = n[1] * r + n[3] * i + n[5], t;
      }, i.transformMat3 = function (t, e, n) {
        var r = e[0],
            i = e[1];
        return t[0] = n[0] * r + n[3] * i + n[6], t[1] = n[1] * r + n[4] * i + n[7], t;
      }, i.transformMat4 = function (t, e, n) {
        var r = e[0],
            i = e[1];
        return t[0] = n[0] * r + n[4] * i + n[12], t[1] = n[1] * r + n[5] * i + n[13], t;
      }, i.forEach = function () {
        var t = i.create();
        return function (e, n, r, i, o, a) {
          var s, u;

          for (n || (n = 2), r || (r = 0), u = i ? Math.min(i * n + r, e.length) : e.length, s = r; u > s; s += n) {
            t[0] = e[s], t[1] = e[s + 1], o(t, t, a), e[s] = t[0], e[s + 1] = t[1];
          }

          return e;
        };
      }(), i.str = function (t) {
        return "vec2(" + t[0] + ", " + t[1] + ")";
      }, i.exactEquals = function (t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }, i.equals = function (t, e) {
        var n = t[0],
            i = t[1],
            o = e[0],
            a = e[1];
        return Math.abs(n - o) <= r.EPSILON * Math.max(1, Math.abs(n), Math.abs(o)) && Math.abs(i - a) <= r.EPSILON * Math.max(1, Math.abs(i), Math.abs(a));
      }, t.exports = i;
    }, function (t, e) {
      t.exports = function () {
        throw new Error("It appears that you're using glslify in browserify without its transform applied. Make sure that you've set up glslify as a source transform: https://github.com/substack/node-browserify#browserifytransform");
      };
    }, function (t, e) {
      function n(t) {
        var e = new Int32Array(t, 0, v);
        if (e[m] !== o) throw new Error("Invalid magic number in DDS header");
        if (!e[E] & s) throw new Error("Unsupported format, must contain a FourCC code");
        var n,
            r,
            A = e[S];

        switch (A) {
          case u:
            n = 8, r = "dxt1";
            break;

          case l:
            n = 16, r = "dxt3";
            break;

          case c:
            n = 16, r = "dxt5";
            break;

          case h:
            r = "rgba32f";
            break;

          case f:
            var T = new Uint32Array(t.slice(128, 148));
            r = T[0];
            var I = T[1];
            if (T[2], T[3], T[4], I !== p || r !== _) throw new Error("Unsupported DX10 texture format " + r);
            r = "rgba32f";
            break;

          default:
            throw new Error("Unsupported FourCC code: " + i(A));
        }

        var F = e[b],
            R = 1;
        F & a && (R = Math.max(1, e[y]));
        var D = !1,
            O = e[w];
        O & d && (D = !0);
        var P,
            k = e[M],
            L = e[g],
            C = e[x] + 4,
            N = k,
            B = L,
            V = [];
        if (A === f && (C += 20), D) for (var U = 0; 6 > U; U++) {
          if ("rgba32f" !== r) throw new Error("Only RGBA32f cubemaps are supported");
          var z = 16;
          k = N, L = B;

          for (var j = Math.log(k) / Math.log(2) + 1, G = 0; j > G; G++) {
            P = k * L * z, V.push({
              offset: C,
              length: P,
              shape: [k, L]
            }), R > G && (C += P), k = Math.floor(k / 2), L = Math.floor(L / 2);
          }
        } else for (var G = 0; R > G; G++) {
          P = Math.max(4, k) / 4 * Math.max(4, L) / 4 * n, V.push({
            offset: C,
            length: P,
            shape: [k, L]
          }), C += P, k = Math.floor(k / 2), L = Math.floor(L / 2);
        }
        return {
          shape: [N, B],
          images: V,
          format: r,
          flags: F,
          cubemap: D
        };
      }

      function r(t) {
        return t.charCodeAt(0) + (t.charCodeAt(1) << 8) + (t.charCodeAt(2) << 16) + (t.charCodeAt(3) << 24);
      }

      function i(t) {
        return String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255);
      }

      var o = 542327876,
          a = 131072,
          s = 4,
          u = r("DXT1"),
          l = r("DXT3"),
          c = r("DXT5"),
          f = r("DX10"),
          h = 116,
          d = 512,
          p = 3,
          _ = 2,
          v = 31,
          m = 0,
          x = 1,
          b = 2,
          g = 3,
          M = 4,
          y = 7,
          E = 20,
          S = 21,
          w = 28;
      t.exports = n;
    }, function (t, e) {
      t.exports = "// axis.frag\n\n#define SHADER_NAME SIMPLE_TEXTURE\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	// vec3 color = vNormal;\n	vec3 color = vColor + vNormal * 0.0001;\n    gl_FragColor = vec4(color, 1.0);\n}";
    }, function (t, e) {
      t.exports = "// axis.vert\n\n#define SHADER_NAME BASIC_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aColor;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vColor;\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vColor = aColor;\n    vNormal = aNormal;\n}";
    }, function (t, e) {
      t.exports = "// basic.frag\n\n#define SHADER_NAME BASIC_FRAGMENT\n\nprecision lowp float;\n#define GLSLIFY 1\nvarying vec2 vTextureCoord;\nuniform float time;\n// uniform sampler2D texture;\n\nvoid main(void) {\n    gl_FragColor = vec4(vTextureCoord, sin(time) * .5 + .5, 1.0);\n}";
    }, function (t, e) {
      t.exports = "// basic.vert\n\n#define SHADER_NAME DOTS_PLANE_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec3 vNormal;\n\nvoid main(void) {\n    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition + aNormal * 0.000001, 1.0);\n\n    vNormal = aNormal;\n}";
    }, function (t, e) {
      t.exports = "// reflection.vert\n\n#define SHADER_NAME PBR_VERTEX\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform mat3 uNormalMatrix;\nuniform mat3 uModelViewMatrixInverse;\n\nuniform vec3 uPosition;\nuniform vec3 uScale;\n\nvarying vec2 vTextureCoord;\n\nvarying vec3 vNormal;\nvarying vec3 vPosition;\nvarying vec3 vWsPosition;\nvarying vec3 vEyePosition;\nvarying vec3 vWsNormal;\n\n\nvoid main(void) {\n	vec3 position 			= aVertexPosition * uScale + uPosition;\n	vec4 worldSpacePosition	= uModelMatrix * vec4(position, 1.0);\n    vec4 viewSpacePosition	= uViewMatrix * worldSpacePosition;\n	\n    vNormal					= uNormalMatrix * aNormal;\n    vPosition				= viewSpacePosition.xyz;\n	vWsPosition				= worldSpacePosition.xyz;\n	\n	vec4 eyeDirViewSpace	= viewSpacePosition - vec4( 0, 0, 0, 1 );\n	vEyePosition			= -vec3( uModelViewMatrixInverse * eyeDirViewSpace.xyz );\n	vWsNormal				= normalize( uModelViewMatrixInverse * vNormal );\n	\n    gl_Position				= uProjectionMatrix * viewSpacePosition;\n\n	vTextureCoord			= aTextureCoord;\n}\n";
    }, function (t, e) {
      t.exports = "// pbrColor.frag\n\n#define SHADER_NAME PBR_COLOR_FRAG\n\n#extension GL_EXT_shader_texture_lod : enable\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D 	uAoMap;\nuniform samplerCube uRadianceMap;\nuniform samplerCube uIrradianceMap;\n\nuniform vec3		uBaseColor;\nuniform float		uRoughness;\nuniform float		uMetallic;\nuniform float		uSpecular;\n\nuniform float		uExposure;\nuniform float		uGamma;\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n#define PI 3.1415926535897932384626433832795\n\n\n// Filmic tonemapping from\n// http://filmicgames.com/archives/75\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec3 EnvBRDFApprox( vec3 SpecularColor, float Roughness, float NoV )\n{\n	const vec4 c0 = vec4( -1, -0.0275, -0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, -0.04 );\n	vec4 r = Roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return SpecularColor * AB.x + AB.y;\n}\n\n\n// http://the-witness.net/news/2012/02/seamless-cube-map-filtering/\nvec3 fix_cube_lookup( vec3 v, float cube_size, float lod ) {\n	float M = max(max(abs(v.x), abs(v.y)), abs(v.z));\n	float scale = 1.0 - exp2(lod) / cube_size;\n	if (abs(v.x) != M) v.x *= scale;\n	if (abs(v.y) != M) v.y *= scale;\n	if (abs(v.z) != M) v.z *= scale;\n	return v;\n}\n\nvec3 correctGamma(vec3 color, float g) {\n	return pow(color, vec3(1.0/g));\n}\n\nvec3 getPbr(vec3 N, vec3 V, vec3 baseColor, float roughness, float metallic, float specular) {\n	vec3 diffuseColor	= baseColor - baseColor * metallic;\n	vec3 specularColor	= mix( vec3( 0.08 * specular ), baseColor, specular );	\n\n	vec3 color;\n	float roughness4 = pow(roughness, 4.0);\n	\n	// sample the pre-filtered cubemap at the corresponding mipmap level\n	float numMips		= 6.0;\n	float mip			= numMips - 1.0 + log2(roughness);\n	vec3 lookup			= -reflect( V, N );\n	lookup				= fix_cube_lookup( lookup, 512.0, mip );\n	vec3 radiance		= pow( textureCubeLodEXT( uRadianceMap, lookup, mip ).rgb, vec3( 2.2 ) );\n	vec3 irradiance		= pow( textureCube( uIrradianceMap, N ).rgb, vec3( 1 ) );\n	\n	// get the approximate reflectance\n	float NoV			= saturate( dot( N, V ) );\n	vec3 reflectance	= EnvBRDFApprox( specularColor, roughness4, NoV );\n	\n	// combine the specular IBL and the BRDF\n    vec3 diffuse  		= diffuseColor * irradiance;\n    vec3 _specular 		= radiance * reflectance;\n	color				= diffuse + _specular;\n\n	return color;\n}\n\nvoid main() {\n	vec3 N 				= normalize( vWsNormal );\n	vec3 V 				= normalize( vEyePosition );\n	\n	vec3 color 			= getPbr(N, V, uBaseColor, uRoughness, uMetallic, uSpecular);\n\n	vec3 ao 			= texture2D(uAoMap, vTextureCoord).rgb;\n	color 				*= ao;\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	// output the fragment color\n    gl_FragColor		= vec4( color, 1.0 );\n\n}\n\n";
    }, function (t, e) {
      t.exports = "// pbrTexture.frag\n\n#define SHADER_NAME PBR_TEXTURE_FRAG\n\n#extension GL_EXT_shader_texture_lod : enable\n\nprecision highp float;\n#define GLSLIFY 1\n\nuniform sampler2D 	uAoMap;\nuniform sampler2D 	uColorMap;\nuniform samplerCube uRadianceMap;\nuniform samplerCube uIrradianceMap;\n\nuniform float		uRoughness;\nuniform float		uMetallic;\nuniform float		uSpecular;\n\nuniform float		uExposure;\nuniform float		uGamma;\n\nvarying vec3        vNormal;\nvarying vec3        vPosition;\nvarying vec3		vEyePosition;\nvarying vec3		vWsNormal;\nvarying vec3		vWsPosition;\nvarying vec2 		vTextureCoord;\n\n#define saturate(x) clamp(x, 0.0, 1.0)\n#define PI 3.1415926535897932384626433832795\n\n\n// Filmic tonemapping from\n// http://filmicgames.com/archives/75\n\nconst float A = 0.15;\nconst float B = 0.50;\nconst float C = 0.10;\nconst float D = 0.20;\nconst float E = 0.02;\nconst float F = 0.30;\n\nvec3 Uncharted2Tonemap( vec3 x )\n{\n	return ((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;\n}\n\n// https://www.unrealengine.com/blog/physically-based-shading-on-mobile\nvec3 EnvBRDFApprox( vec3 SpecularColor, float Roughness, float NoV )\n{\n	const vec4 c0 = vec4( -1, -0.0275, -0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, -0.04 );\n	vec4 r = Roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( -9.28 * NoV ) ) * r.x + r.y;\n	vec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n	return SpecularColor * AB.x + AB.y;\n}\n\n\n// http://the-witness.net/news/2012/02/seamless-cube-map-filtering/\nvec3 fix_cube_lookup( vec3 v, float cube_size, float lod ) {\n	float M = max(max(abs(v.x), abs(v.y)), abs(v.z));\n	float scale = 1.0 - exp2(lod) / cube_size;\n	if (abs(v.x) != M) v.x *= scale;\n	if (abs(v.y) != M) v.y *= scale;\n	if (abs(v.z) != M) v.z *= scale;\n	return v;\n}\n\nvec3 correctGamma(vec3 color, float g) {\n	return pow(color, vec3(1.0/g));\n}\n\nvec3 getPbr(vec3 N, vec3 V, vec3 baseColor, float roughness, float metallic, float specular) {\n	vec3 diffuseColor	= baseColor - baseColor * metallic;\n	vec3 specularColor	= mix( vec3( 0.08 * specular ), baseColor, specular );	\n\n	vec3 color;\n	float roughness4 = pow(roughness, 4.0);\n	\n	// sample the pre-filtered cubemap at the corresponding mipmap level\n	float numMips		= 6.0;\n	float mip			= numMips - 1.0 + log2(roughness);\n	vec3 lookup			= -reflect( V, N );\n	lookup				= fix_cube_lookup( lookup, 512.0, mip );\n	vec3 radiance		= pow( textureCubeLodEXT( uRadianceMap, lookup, mip ).rgb, vec3( 2.2 ) );\n	vec3 irradiance		= pow( textureCube( uIrradianceMap, N ).rgb, vec3( 1 ) );\n	\n	// get the approximate reflectance\n	float NoV			= saturate( dot( N, V ) );\n	vec3 reflectance	= EnvBRDFApprox( specularColor, roughness4, NoV );\n	\n	// combine the specular IBL and the BRDF\n    vec3 diffuse  		= diffuseColor * irradiance;\n    vec3 _specular 		= radiance * reflectance;\n	color				= diffuse + _specular;\n\n	return color;\n}\n\nvoid main() {\n	vec3 N 				= normalize( vWsNormal );\n	vec3 V 				= normalize( vEyePosition );\n	vec3 baseColor		= texture2D( uColorMap, vTextureCoord).rgb;\n	\n	vec3 color 			= getPbr(N, V, baseColor, uRoughness, uMetallic, uSpecular);\n\n	vec3 ao 			= texture2D(uAoMap, vTextureCoord).rgb;\n	color 				*= ao;\n\n	// apply the tone-mapping\n	color				= Uncharted2Tonemap( color * uExposure );\n	// white balance\n	color				= color * ( 1.0 / Uncharted2Tonemap( vec3( 20.0 ) ) );\n	\n	// gamma correction\n	color				= pow( color, vec3( 1.0 / uGamma ) );\n\n	// output the fragment color\n    gl_FragColor		= vec4( color, 1.0 );\n\n}\n\n";
    }, function (t, e) {
      t.exports = "// sky.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\nvoid main(void) {\n	mat4 matView = uViewMatrix;\n	matView[3][0] = 0.0;\n	matView[3][1] = 0.0;\n	matView[3][2] = 0.0;\n	\n    gl_Position = uProjectionMatrix * matView * uModelMatrix * vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n    vNormal = aNormal;\n}";
    }]);
  });
}, function (t, e) {
  t.exports = function (t) {
    if (void 0 == t) throw TypeError("Can't call method on  " + t);
    return t;
  };
}, function (t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function (t, e) {
  t.exports = {};
}, function (t, e) {
  t.exports = !0;
}, function (t, e, n) {
  var r = n(10),
      i = n(80),
      o = n(18),
      a = n(24)("IE_PROTO"),
      s = function s() {},
      u = "prototype",
      _l2 = function l() {
    var t,
        e = n(37)("iframe"),
        r = o.length,
        i = ">";

    for (e.style.display = "none", n(73).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object</script" + i), t.close(), _l2 = t.F; r--;) {
      delete _l2[u][o[r]];
    }

    return _l2();
  };

  t.exports = Object.create || function (t, e) {
    var n;
    return null !== t ? (s[u] = r(t), n = new s(), s[u] = null, n[a] = t) : n = _l2(), void 0 === e ? n : i(n, e);
  };
}, function (t, e) {
  e.f = {}.propertyIsEnumerable;
}, function (t, e, n) {
  var r = n(5).f,
      i = n(4),
      o = n(9)("toStringTag");

  t.exports = function (t, e, n) {
    t && !i(t = n ? t : t.prototype, o) && r(t, o, {
      configurable: !0,
      value: e
    });
  };
}, function (t, e, n) {
  var r = n(25)("keys"),
      i = n(15);

  t.exports = function (t) {
    return r[t] || (r[t] = i(t));
  };
}, function (t, e, n) {
  var r = n(2),
      i = "__core-js_shared__",
      o = r[i] || (r[i] = {});

  t.exports = function (t) {
    return o[t] || (o[t] = {});
  };
}, function (t, e) {
  var n = Math.ceil,
      r = Math.floor;

  t.exports = function (t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t);
  };
}, function (t, e, n) {
  var r = n(12);

  t.exports = function (t, e) {
    if (!r(t)) return t;
    var n, i;
    if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
    if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
    if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
    throw TypeError("Can't convert object to primitive value");
  };
}, function (t, e, n) {
  var r = n(2),
      i = n(1),
      o = n(20),
      a = n(29),
      s = n(5).f;

  t.exports = function (t) {
    var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
    "_" == t.charAt(0) || t in e || s(e, t, {
      value: a.f(t)
    });
  };
}, function (t, e, n) {
  e.f = n(9);
}, function (t, e, n) {
  "use strict";

  function r() {
    i.call(this), this.setMaxListeners(20);
  }

  var i = n(101).EventEmitter;
  r.prototype = Object.create(i.prototype), r.prototype.constructor = r, r.prototype.off = function (t, e) {
    return e ? this.removeListener(t, e) : t ? this.removeAllListeners(t) : this.removeAllListeners();
  }, t.exports = r;
}, function (t, e) {
  "use strict";

  t.exports = {
    mbs: 0,
    secs: 0,
    update: function update(t, e, n, r) {
      var i,
          o = t.getAllResponseHeaders();

      if (o) {
        var a = o.match(/content-length: (\d+)/i);
        a && a.length && (i = a[1]);
      }

      if (i) {
        i = parseInt(i, 10);
        var s = i / 1024 / 1024,
            u = (Date.now() - e) / 1e3;
        this.secs += u, this.mbs += s, r && this.log(n, s, u);
      }
    },
    log: function log(t, e, n) {
      if (t) {
        "File loaded: " + t.substr(t.lastIndexOf("/") + 1) + " size:" + e.toFixed(2) + "mb time:" + n.toFixed(2) + "s speed:" + (e / n).toFixed(2) + "mbps";
      }

      "Total loaded: " + this.mbs.toFixed(2) + "mb time:" + this.secs.toFixed(2) + "s speed:" + this.getMbps().toFixed(2) + "mbps";
    },
    getMbps: function getMbps() {
      return this.mbs / this.secs;
    }
  };
}, function (t, e, n) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i = n(33),
      o = r(i),
      a = n(16),
      s = r(a),
      u = {},
      l = [],
      c = function c(t) {
    return assets.find(function (e) {
      return e.id === t;
    }).file;
  },
      f = function f(t) {
    var e = t.split(".");
    return e[e.length - 1];
  };

  u.init = function () {
    var t = {};
    l = o["default"].map(function (e) {
      var n = f(e.url),
          r = c(e.id),
          i = void 0;

      switch (n) {
        case "jpg":
        case "png":
          return i = new a.GLTexture(r), {
            id: e.id,
            file: i
          };

        case "hdr":
          var o = e.id.split("_")[0];
          i = s["default"].HDRLoader.parse(r);
          var u = {
            id: e.id,
            file: i
          };
          return t[o] || (t[o] = []), t[o].push(u), u;

        case "dds":
          return i = a.GLCubeTexture.parseDDS(r), {
            id: e.id,
            file: i
          };

        case "obj":
          var l = a.ObjLoader.parse(r);
          return {
            id: e.id,
            file: l
          };
      }
    });

    for (var e in t) {
      if (6 == t[e].length) {
        var n = [u.get(e + "_posx"), u.get(e + "_negx"), u.get(e + "_posy"), u.get(e + "_negy"), u.get(e + "_posz"), u.get(e + "_negz")],
            r = new s["default"].GLCubeTexture(n);
        l.push({
          id: e,
          file: r
        });
      }
    }

    l.length > 0;
  }, u.get = function (t) {
    return l.find(function (e) {
      return e.id === t;
    }).file;
  }, e["default"] = u, t.exports = e["default"];
}, function (t, e) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = [{
    id: "boxes",
    url: "assets/obj/boxes.obj",
    type: "text"
  }, {
    id: "frames",
    url: "assets/obj/frames.obj",
    type: "text"
  }, {
    id: "scene",
    url: "assets/obj/scene.obj",
    type: "text"
  }];
  e["default"] = n, t.exports = e["default"];
}, function (t, e, n) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  }

  e.__esModule = !0;
  var i = n(58),
      o = r(i),
      a = n(57),
      s = r(a),
      u = "function" == typeof s["default"] && "symbol" == _typeof(o["default"]) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof s["default"] && t.constructor === s["default"] ? "symbol" : _typeof(t);
  };
  e["default"] = "function" == typeof s["default"] && "symbol" === u(o["default"]) ? function (t) {
    return "undefined" == typeof t ? "undefined" : u(t);
  } : function (t) {
    return t && "function" == typeof s["default"] && t.constructor === s["default"] ? "symbol" : "undefined" == typeof t ? "undefined" : u(t);
  };
}, function (t, e) {
  var n = {}.toString;

  t.exports = function (t) {
    return n.call(t).slice(8, -1);
  };
}, function (t, e, n) {
  var r = n(69);

  t.exports = function (t, e, n) {
    if (r(t), void 0 === e) return t;

    switch (n) {
      case 1:
        return function (n) {
          return t.call(e, n);
        };

      case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };

      case 3:
        return function (n, r, i) {
          return t.call(e, n, r, i);
        };
    }

    return function () {
      return t.apply(e, arguments);
    };
  };
}, function (t, e, n) {
  var r = n(12),
      i = n(2).document,
      o = r(i) && r(i.createElement);

  t.exports = function (t) {
    return o ? i.createElement(t) : {};
  };
}, function (t, e, n) {
  t.exports = !n(3) && !n(11)(function () {
    return 7 != Object.defineProperty(n(37)("div"), "a", {
      get: function get() {
        return 7;
      }
    }).a;
  });
}, function (t, e, n) {
  "use strict";

  var r = n(20),
      i = n(7),
      o = n(45),
      a = n(8),
      s = n(4),
      u = n(19),
      l = n(76),
      c = n(23),
      f = n(43),
      h = n(9)("iterator"),
      d = !([].keys && "next" in [].keys()),
      p = "@@iterator",
      _ = "keys",
      v = "values",
      m = function m() {
    return this;
  };

  t.exports = function (t, e, n, x, b, g, M) {
    l(n, e, x);

    var y,
        E,
        S,
        w = function w(t) {
      if (!d && t in F) return F[t];

      switch (t) {
        case _:
          return function () {
            return new n(this, t);
          };

        case v:
          return function () {
            return new n(this, t);
          };
      }

      return function () {
        return new n(this, t);
      };
    },
        A = e + " Iterator",
        T = b == v,
        I = !1,
        F = t.prototype,
        R = F[h] || F[p] || b && F[b],
        D = R || w(b),
        O = b ? T ? w("entries") : D : void 0,
        P = "Array" == e ? F.entries || R : R;

    if (P && (S = f(P.call(new t())), S !== Object.prototype && (c(S, A, !0), r || s(S, h) || a(S, h, m))), T && R && R.name !== v && (I = !0, D = function D() {
      return R.call(this);
    }), r && !M || !d && !I && F[h] || a(F, h, D), u[e] = D, u[A] = m, b) if (y = {
      values: T ? D : w(v),
      keys: g ? D : w(_),
      entries: O
    }, M) for (E in y) {
      E in F || o(F, E, y[E]);
    } else i(i.P + i.F * (d || I), e, y);
    return y;
  };
}, function (t, e, n) {
  var r = n(22),
      i = n(14),
      o = n(6),
      a = n(27),
      s = n(4),
      u = n(38),
      l = Object.getOwnPropertyDescriptor;
  e.f = n(3) ? l : function (t, e) {
    if (t = o(t), e = a(e, !0), u) try {
      return l(t, e);
    } catch (n) {}
    return s(t, e) ? i(!r.f.call(t, e), t[e]) : void 0;
  };
}, function (t, e, n) {
  var r = n(44),
      i = n(18).concat("length", "prototype");

  e.f = Object.getOwnPropertyNames || function (t) {
    return r(t, i);
  };
}, function (t, e) {
  e.f = Object.getOwnPropertySymbols;
}, function (t, e, n) {
  var r = n(4),
      i = n(46),
      o = n(24)("IE_PROTO"),
      a = Object.prototype;

  t.exports = Object.getPrototypeOf || function (t) {
    return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
  };
}, function (t, e, n) {
  var r = n(4),
      i = n(6),
      o = n(71)(!1),
      a = n(24)("IE_PROTO");

  t.exports = function (t, e) {
    var n,
        s = i(t),
        u = 0,
        l = [];

    for (n in s) {
      n != a && r(s, n) && l.push(n);
    }

    for (; e.length > u;) {
      r(s, n = e[u++]) && (~o(l, n) || l.push(n));
    }

    return l;
  };
}, function (t, e, n) {
  t.exports = n(8);
}, function (t, e, n) {
  var r = n(17);

  t.exports = function (t) {
    return Object(r(t));
  };
}, function (t, e) {
  "use strict";

  t.exports = function () {
    try {
      return !!new Blob();
    } catch (t) {
      return !1;
    }
  }();
}, function (t, e, n) {
  "use strict";

  var r = n(30),
      i = n(50),
      o = 0;

  t.exports = function a(t) {
    var e,
        n = {},
        s = [],
        u = [],
        l = 0,
        c = 0,
        f = {},
        h = function h(n) {
      if (Array.isArray(n)) return n.forEach(h), e;
      var r,
          o = !!n.assets && Array.isArray(n.assets);
      return r = o ? a(v(n, t)) : i(v(n, t)), r.once("destroy", M), u.push(r), f[r.id] = r, e;
    },
        d = function d(t) {
      return arguments.length ? n[t] : s;
    },
        p = function p(t) {
      if (d(t)) return d(t);
      var e = null;
      return Object.keys(f).some(function (n) {
        return e = f[n].find && f[n].find(t), !!e;
      }), e;
    },
        _ = function _(t) {
      return t && t.split("?")[0].split(".").pop().toLowerCase();
    },
        v = function v(t, e) {
      if ("string" == typeof t) {
        var n = t;
        t = {
          url: n
        };
      }

      return void 0 === t.isTouchLocked && (t.isTouchLocked = e.isTouchLocked), void 0 === t.blob && (t.blob = e.blob), void 0 === t.basePath && (t.basePath = e.basePath), t.id = t.id || t.url || String(++o), t.type = t.type || _(t.url), t.crossOrigin = t.crossOrigin || e.crossOrigin, t.webAudioContext = t.webAudioContext || e.webAudioContext, t.log = e.log, t;
    },
        m = function m() {
      return c = u.length, u.forEach(function (t) {
        t.on("progress", x).once("complete", b).once("error", g).start();
      }), u = [], e;
    },
        x = function x(t) {
      var n = l + t;
      e.emit("progress", n / c);
    },
        b = function b(t, r, i) {
      Array.isArray(t) && (t = {
        id: r,
        file: t,
        type: i
      }), l++, e.emit("progress", l / c), n[t.id] = t.file, s.push(t), e.emit("childcomplete", t), y();
    },
        g = function g(t) {
      c--, e.listeners("error").length && e.emit("error", t), y();
    },
        M = function M(t) {
      f[t] = null, delete f[t], n[t] = null, delete n[t], s.some(function (e, n) {
        return e.id === t ? (s.splice(n, 1), !0) : void 0;
      });
    },
        y = function y() {
      l >= c && e.emit("complete", s, t.id, "group");
    },
        E = function E() {
      for (; u.length;) {
        u.pop().destroy();
      }

      return e.off("error"), e.off("progress"), e.off("complete"), s = [], n = {}, t.webAudioContext = null, c = 0, l = 0, Object.keys(f).forEach(function (t) {
        f[t].destroy();
      }), f = {}, e.emit("destroy", e.id), e;
    };

    return e = Object.create(r.prototype, {
      _events: {
        value: {}
      },
      id: {
        get: function get() {
          return t.id;
        }
      },
      add: {
        value: h
      },
      start: {
        value: m
      },
      get: {
        value: d
      },
      find: {
        value: p
      },
      getLoader: {
        value: function value(t) {
          return f[t];
        }
      },
      loaded: {
        get: function get() {
          return l >= c;
        }
      },
      file: {
        get: function get() {
          return s;
        }
      },
      destroy: {
        value: E
      }
    }), t = v(t || {}, {
      basePath: "",
      blob: !1,
      touchLocked: !1,
      crossOrigin: null,
      webAudioContext: null,
      log: !1
    }), Array.isArray(t.assets) && h(t.assets), Object.freeze(e);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(48);
  r.stats = n(31), t.exports = r;
}, function (t, e, n) {
  "use strict";

  var r = n(30),
      i = n(47),
      o = n(31);

  t.exports = function (t) {
    var e,
        n,
        a,
        s,
        u,
        l,
        c = t.id,
        f = t.basePath || "",
        h = t.url,
        d = t.type,
        p = t.crossOrigin,
        _ = t.isTouchLocked,
        v = t.blob && i,
        m = t.webAudioContext,
        x = t.log,
        b = function b() {
      switch (s = Date.now(), d) {
        case "json":
          w();
          break;

        case "jpg":
        case "png":
        case "gif":
        case "webp":
          A();
          break;

        case "mp3":
        case "ogg":
        case "opus":
        case "wav":
        case "m4a":
          D();
          break;

        case "ogv":
        case "mp4":
        case "webm":
        case "hls":
          O();
          break;

        case "bin":
        case "binary":
          M("arraybuffer");
          break;

        case "txt":
        case "text":
          M("text");
          break;

        default:
          throw "AssetsLoader ERROR: Unknown type for file with URL: " + f + h + " (" + d + ")";
      }
    },
        g = function g(t) {
      t && (l = {
        id: c,
        file: t,
        type: d
      }, e.emit("progress", 1), e.emit("complete", l, c, d), C());
    },
        M = function M(t, e) {
      n = e || E, a = new XMLHttpRequest(), a.open("GET", f + h, !0), a.responseType = t, a.addEventListener("progress", y), a.addEventListener("load", n), a.addEventListener("error", L), a.send();
    },
        y = function y(t) {
      t.lengthComputable && e.emit("progress", t.loaded / t.total);
    },
        E = function E() {
      S() && g(a.response);
    },
        S = function S() {
      return a && a.status < 400 ? (o.update(a, s, h, x), !0) : (L(a && a.statusText), !1);
    },
        w = function w() {
      M("json", function () {
        if (S()) {
          var t = a.response;
          "string" == typeof t && (t = JSON.parse(t)), g(t);
        }
      });
    },
        A = function A() {
      v ? F() : T();
    },
        T = function T() {
      a = new Image(), p && (a.crossOrigin = "anonymous"), a.addEventListener("error", L, !1), a.addEventListener("load", I, !1), a.src = f + h;
    },
        I = function I() {
      window.clearTimeout(u), g(a);
    },
        F = function F() {
      M("blob", function () {
        S() && (a = new Image(), a.addEventListener("error", L, !1), a.addEventListener("load", R, !1), a.src = window.URL.createObjectURL(a.response));
      });
    },
        R = function R() {
      window.URL.revokeObjectURL(a.src), g(a);
    },
        D = function D() {
      m ? P() : k("audio");
    },
        O = function O() {
      v ? M("blob") : k("video");
    },
        P = function P() {
      M("arraybuffer", function () {
        S() && m.decodeAudioData(a.response, function (t) {
          a = null, g(t);
        }, function (t) {
          L(t);
        });
      });
    },
        k = function k(t) {
      a = document.createElement(t), _ || (window.clearTimeout(u), u = window.setTimeout(I, 2e3), a.addEventListener("canplaythrough", I, !1)), a.addEventListener("error", L, !1), a.preload = "auto", a.src = f + h, a.load(), _ && g(a);
    },
        L = function L(t) {
      window.clearTimeout(u);
      var n = t;

      if (a && a.tagName && a.error) {
        var r = ["", "ABORTED", "NETWORK", "DECODE", "SRC_NOT_SUPPORTED"];
        n = "MediaError: " + r[a.error.code] + " " + a.src;
      } else a && a.statusText ? n = a.statusText : t && t.message ? n = t.message : t && t.type && (n = t.type);

      e.emit("error", 'Error loading "' + f + h + '" ' + n), N();
    },
        C = function C() {
      e.off("error"), e.off("progress"), e.off("complete"), a && (a.removeEventListener("progress", y), a.removeEventListener("load", n), a.removeEventListener("error", L), a.removeEventListener("load", I), a.removeEventListener("canplaythrough", I), a.removeEventListener("load", R));
    },
        N = function N() {
      C(), a && a.abort && a.readyState < 4 && a.abort(), a = null, m = null, l = null, window.clearTimeout(u), e.emit("destroy", c);
    };

    return e = Object.create(r.prototype, {
      _events: {
        value: {}
      },
      id: {
        value: t.id
      },
      start: {
        value: b
      },
      loaded: {
        get: function get() {
          return !!l;
        }
      },
      file: {
        get: function get() {
          return l;
        }
      },
      destroy: {
        value: N
      }
    }), Object.freeze(e);
  };
}, function (t, e, n) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i = n(55),
      o = r(i),
      a = n(59),
      s = r(a),
      u = n(60),
      l = r(u),
      c = n(62),
      f = r(c),
      h = n(61),
      d = r(h),
      p = n(16),
      _ = r(p),
      v = n(32),
      m = r(v),
      x = n(104),
      b = r(x),
      g = n(103),
      M = (r(g), function (t) {
    function e() {
      (0, s["default"])(this, e);
      var t = (0, f["default"])(this, (0, o["default"])(e).call(this));
      p.GL.enableAlphaBlending(), t.orbitalControl.rx.value = t.orbitalControl.ry.value = .3, t.orbitalControl.radius.value = 7, t.orbitalControl.radius.limit(5, 10), t.orbitalControl.rx.limit(-.05, 1), t._modelMatrix = mat4.create();
      var n = 1;
      return mat4.scale(t._modelMatrix, t._modelMatrix, vec3.fromValues(n, n, n)), t;
    }

    return (0, d["default"])(e, t), (0, l["default"])(e, [{
      key: "_initTextures",
      value: function value() {
        this.shader = new _["default"].GLShader(null, _["default"].ShaderLibs.simpleColorFrag), this.shaderOutline = new _["default"].GLShader(b["default"], _["default"].ShaderLibs.simpleColorFrag), this.shader.bind(), this.shader.uniform("color", "vec3", [1, 1, 1]), this.shader.uniform("opacity", "float", 1), this.shaderOutline.bind(), this.shaderOutline.uniform("color", "vec3", [0, 0, 0]), this.shaderOutline.uniform("opacity", "float", 1), this.shaderOutline.uniform("uOutlineWidth", "float", params.outlineWidth), this.shaderOutline.uniform("uOutlineNoise", "float", params.outlineNoise), this.shaderOutline.uniform("uOutlineNoiseStrength", "float", params.outlineNoiseStrength);
      }
    }, {
      key: "_initViews",
      value: function value() {
        this._bCopy = new _["default"].BatchCopy(), this._bSky = new _["default"].BatchSkybox(), this.meshFrames = m["default"].get("frames"), this.mesh = m["default"].get("scene"), this.meshBoxes = m["default"].get("boxes");
      }
    }, {
      key: "render",
      value: function value() {
        params.time += .01;
        var t = 1;
        p.GL.clear(t, t, t, 1), p.GL.rotate(this._modelMatrix), this.shader.bind(), p.GL.gl.cullFace(p.GL.gl.FRONT), p.GL.draw(this.meshBoxes), p.GL.gl.cullFace(p.GL.gl.BACK), p.GL.draw(this.mesh), this.shaderOutline.bind(), p.GL.draw(this.meshFrames), this.shaderOutline.uniform("uTime", "float", params.time), p.GL.gl.cullFace(p.GL.gl.FRONT), p.GL.draw(this.mesh), p.GL.gl.cullFace(p.GL.gl.BACK);
      }
    }, {
      key: "resize",
      value: function value() {
        p.GL.setSize(window.innerWidth, window.innerHeight), this.camera.setAspectRatio(p.GL.aspectRatio);
      }
    }]), e;
  }(p.Scene));

  e["default"] = M, t.exports = e["default"];
}, function (t, e, n) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  }

  function i() {
    if (_["default"].length > 0) {
      document.getElementById('show-3d').classList.add("isLoading");
      new f["default"]({
        assets: _["default"]
      }).on("error", function (t) {}).on("progress", function (t) {
        var e = document.getElementById('show-3d').querySelector(".Loading-Bar");
        e && (e.style.width = 100 * t + "%");
      }).on("complete", o).start();
    } else a();
  }

  function o(t) {
    window.assets = t;
    var e = document.getElementById('show-3d').querySelector(".Loading-Bar");
    e.style.width = "100%", a(), setTimeout(function () {
      document.getElementById('show-3d').classList.remove("isLoading");
      document.getElementById('message').style.display = "none";
      document.getElementById('loading-bar').style.display = "none";
    }, 250);
  }

  function a() {
    var t = document.createElement("canvas");
    t.className = "Main-Canvas", document.getElementById('show-3d').appendChild(t), s.GL.init(t), m["default"].init();
    new l["default"]();
  }

  n(102);

  var s = n(16),
      u = (r(s), n(51)),
      l = r(u),
      c = n(49),
      f = r(c),
      h = n(98),
      d = (r(h), n(105)),
      p = (r(d), n(33)),
      _ = r(p),
      v = n(32),
      m = r(v);

  document.body ? i() : window.addEventListener("DOMContentLoaded", i), window.params = {
    gamma: 2.2,
    exposure: 5,
    outlineWidth: .01,
    outlineNoise: 1,
    outlineNoiseStrength: .6,
    time: 0
  };
}, function (t, e, n) {
  t.exports = {
    "default": n(63),
    __esModule: !0
  };
}, function (t, e, n) {
  t.exports = {
    "default": n(64),
    __esModule: !0
  };
}, function (t, e, n) {
  t.exports = {
    "default": n(65),
    __esModule: !0
  };
}, function (t, e, n) {
  t.exports = {
    "default": n(66),
    __esModule: !0
  };
}, function (t, e, n) {
  t.exports = {
    "default": n(67),
    __esModule: !0
  };
}, function (t, e, n) {
  t.exports = {
    "default": n(68),
    __esModule: !0
  };
}, function (t, e) {
  "use strict";

  e.__esModule = !0, e["default"] = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  };
}, function (t, e, n) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  }

  e.__esModule = !0;
  var i = n(54),
      o = r(i);

  e["default"] = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o["default"])(t, r.key, r);
      }
    }

    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  }();
}, function (t, e, n) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  }

  e.__esModule = !0;
  var i = n(56),
      o = r(i),
      a = n(53),
      s = r(a),
      u = n(34),
      l = r(u);

  e["default"] = function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : (0, l["default"])(e)));
    t.prototype = (0, s["default"])(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (o["default"] ? (0, o["default"])(t, e) : t.__proto__ = e);
  };
}, function (t, e, n) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  }

  e.__esModule = !0;
  var i = n(34),
      o = r(i);

  e["default"] = function (t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" !== ("undefined" == typeof e ? "undefined" : (0, o["default"])(e)) && "function" != typeof e ? t : e;
  };
}, function (t, e, n) {
  n(88);
  var r = n(1).Object;

  t.exports = function (t, e) {
    return r.create(t, e);
  };
}, function (t, e, n) {
  n(89);
  var r = n(1).Object;

  t.exports = function (t, e, n) {
    return r.defineProperty(t, e, n);
  };
}, function (t, e, n) {
  n(90), t.exports = n(1).Object.getPrototypeOf;
}, function (t, e, n) {
  n(91), t.exports = n(1).Object.setPrototypeOf;
}, function (t, e, n) {
  n(94), n(92), n(95), n(96), t.exports = n(1).Symbol;
}, function (t, e, n) {
  n(93), n(97), t.exports = n(29).f("iterator");
}, function (t, e) {
  t.exports = function (t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t;
  };
}, function (t, e) {
  t.exports = function () {};
}, function (t, e, n) {
  var r = n(6),
      i = n(86),
      o = n(85);

  t.exports = function (t) {
    return function (e, n, a) {
      var s,
          u = r(e),
          l = i(u.length),
          c = o(a, l);

      if (t && n != n) {
        for (; l > c;) {
          if (s = u[c++], s != s) return !0;
        }
      } else for (; l > c; c++) {
        if ((t || c in u) && u[c] === n) return t || c || 0;
      }

      return !t && -1;
    };
  };
}, function (t, e, n) {
  var r = n(13),
      i = n(42),
      o = n(22);

  t.exports = function (t) {
    var e = r(t),
        n = i.f;
    if (n) for (var a, s = n(t), u = o.f, l = 0; s.length > l;) {
      u.call(t, a = s[l++]) && e.push(a);
    }
    return e;
  };
}, function (t, e, n) {
  t.exports = n(2).document && document.documentElement;
}, function (t, e, n) {
  var r = n(35);
  t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
    return "String" == r(t) ? t.split("") : Object(t);
  };
}, function (t, e, n) {
  var r = n(35);

  t.exports = Array.isArray || function (t) {
    return "Array" == r(t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(21),
      i = n(14),
      o = n(23),
      a = {};
  n(8)(a, n(9)("iterator"), function () {
    return this;
  }), t.exports = function (t, e, n) {
    t.prototype = r(a, {
      next: i(1, n)
    }), o(t, e + " Iterator");
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return {
      value: e,
      done: !!t
    };
  };
}, function (t, e, n) {
  var r = n(13),
      i = n(6);

  t.exports = function (t, e) {
    for (var n, o = i(t), a = r(o), s = a.length, u = 0; s > u;) {
      if (o[n = a[u++]] === e) return n;
    }
  };
}, function (t, e, n) {
  var r = n(15)("meta"),
      i = n(12),
      o = n(4),
      a = n(5).f,
      s = 0,
      u = Object.isExtensible || function () {
    return !0;
  },
      l = !n(11)(function () {
    return u(Object.preventExtensions({}));
  }),
      c = function c(t) {
    a(t, r, {
      value: {
        i: "O" + ++s,
        w: {}
      }
    });
  },
      f = function f(t, e) {
    if (!i(t)) return "symbol" == _typeof(t) ? t : ("string" == typeof t ? "S" : "P") + t;

    if (!o(t, r)) {
      if (!u(t)) return "F";
      if (!e) return "E";
      c(t);
    }

    return t[r].i;
  },
      h = function h(t, e) {
    if (!o(t, r)) {
      if (!u(t)) return !0;
      if (!e) return !1;
      c(t);
    }

    return t[r].w;
  },
      d = function d(t) {
    return l && p.NEED && u(t) && !o(t, r) && c(t), t;
  },
      p = t.exports = {
    KEY: r,
    NEED: !1,
    fastKey: f,
    getWeak: h,
    onFreeze: d
  };
}, function (t, e, n) {
  var r = n(5),
      i = n(10),
      o = n(13);
  t.exports = n(3) ? Object.defineProperties : function (t, e) {
    i(t);

    for (var n, a = o(e), s = a.length, u = 0; s > u;) {
      r.f(t, n = a[u++], e[n]);
    }

    return t;
  };
}, function (t, e, n) {
  var r = n(6),
      i = n(41).f,
      o = {}.toString,
      a = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      s = function s(t) {
    try {
      return i(t);
    } catch (e) {
      return a.slice();
    }
  };

  t.exports.f = function (t) {
    return a && "[object Window]" == o.call(t) ? s(t) : i(r(t));
  };
}, function (t, e, n) {
  var r = n(7),
      i = n(1),
      o = n(11);

  t.exports = function (t, e) {
    var n = (i.Object || {})[t] || Object[t],
        a = {};
    a[t] = e(n), r(r.S + r.F * o(function () {
      n(1);
    }), "Object", a);
  };
}, function (t, e, n) {
  var r = n(12),
      i = n(10),
      o = function o(t, e) {
    if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
  };

  t.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, r) {
      try {
        r = n(36)(Function.call, n(40).f(Object.prototype, "__proto__").set, 2), r(t, []), e = !(t instanceof Array);
      } catch (i) {
        e = !0;
      }

      return function (t, n) {
        return o(t, n), e ? t.__proto__ = n : r(t, n), t;
      };
    }({}, !1) : void 0),
    check: o
  };
}, function (t, e, n) {
  var r = n(26),
      i = n(17);

  t.exports = function (t) {
    return function (e, n) {
      var o,
          a,
          s = String(i(e)),
          u = r(n),
          l = s.length;
      return 0 > u || u >= l ? t ? "" : void 0 : (o = s.charCodeAt(u), 55296 > o || o > 56319 || u + 1 === l || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : (o - 55296 << 10) + (a - 56320) + 65536);
    };
  };
}, function (t, e, n) {
  var r = n(26),
      i = Math.max,
      o = Math.min;

  t.exports = function (t, e) {
    return t = r(t), 0 > t ? i(t + e, 0) : o(t, e);
  };
}, function (t, e, n) {
  var r = n(26),
      i = Math.min;

  t.exports = function (t) {
    return t > 0 ? i(r(t), 9007199254740991) : 0;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(70),
      i = n(77),
      o = n(19),
      a = n(6);
  t.exports = n(39)(Array, "Array", function (t, e) {
    this._t = a(t), this._i = 0, this._k = e;
  }, function () {
    var t = this._t,
        e = this._k,
        n = this._i++;
    return !t || n >= t.length ? (this._t = void 0, i(1)) : "keys" == e ? i(0, n) : "values" == e ? i(0, t[n]) : i(0, [n, t[n]]);
  }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
}, function (t, e, n) {
  var r = n(7);
  r(r.S, "Object", {
    create: n(21)
  });
}, function (t, e, n) {
  var r = n(7);
  r(r.S + r.F * !n(3), "Object", {
    defineProperty: n(5).f
  });
}, function (t, e, n) {
  var r = n(46),
      i = n(43);
  n(82)("getPrototypeOf", function () {
    return function (t) {
      return i(r(t));
    };
  });
}, function (t, e, n) {
  var r = n(7);
  r(r.S, "Object", {
    setPrototypeOf: n(83).set
  });
}, function (t, e) {}, function (t, e, n) {
  "use strict";

  var r = n(84)(!0);
  n(39)(String, "String", function (t) {
    this._t = String(t), this._i = 0;
  }, function () {
    var t,
        e = this._t,
        n = this._i;
    return n >= e.length ? {
      value: void 0,
      done: !0
    } : (t = r(e, n), this._i += t.length, {
      value: t,
      done: !1
    });
  });
}, function (t, e, n) {
  "use strict";

  var r = n(2),
      i = n(4),
      o = n(3),
      a = n(7),
      s = n(45),
      u = n(79).KEY,
      l = n(11),
      c = n(25),
      f = n(23),
      h = n(15),
      d = n(9),
      p = n(29),
      _ = n(28),
      v = n(78),
      m = n(72),
      x = n(75),
      b = n(10),
      g = n(6),
      M = n(27),
      y = n(14),
      E = n(21),
      S = n(81),
      w = n(40),
      A = n(5),
      T = n(13),
      I = w.f,
      F = A.f,
      R = S.f,
      _D2 = r.Symbol,
      O = r.JSON,
      P = O && O.stringify,
      k = "prototype",
      L = d("_hidden"),
      C = d("toPrimitive"),
      N = {}.propertyIsEnumerable,
      B = c("symbol-registry"),
      V = c("symbols"),
      U = c("op-symbols"),
      z = Object[k],
      j = "function" == typeof _D2,
      G = r.QObject,
      X = !G || !G[k] || !G[k].findChild,
      Y = o && l(function () {
    return 7 != E(F({}, "a", {
      get: function get() {
        return F(this, "a", {
          value: 7
        }).a;
      }
    })).a;
  }) ? function (t, e, n) {
    var r = I(z, e);
    r && delete z[e], F(t, e, n), r && t !== z && F(z, e, r);
  } : F,
      q = function q(t) {
    var e = V[t] = E(_D2[k]);
    return e._k = t, e;
  },
      H = j && "symbol" == _typeof(_D2.iterator) ? function (t) {
    return "symbol" == _typeof(t);
  } : function (t) {
    return t instanceof _D2;
  },
      W = function W(t, e, n) {
    return t === z && W(U, e, n), b(t), e = M(e, !0), b(n), i(V, e) ? (n.enumerable ? (i(t, L) && t[L][e] && (t[L][e] = !1), n = E(n, {
      enumerable: y(0, !1)
    })) : (i(t, L) || F(t, L, y(1, {})), t[L][e] = !0), Y(t, e, n)) : F(t, e, n);
  },
      Q = function Q(t, e) {
    b(t);

    for (var n, r = m(e = g(e)), i = 0, o = r.length; o > i;) {
      W(t, n = r[i++], e[n]);
    }

    return t;
  },
      K = function K(t, e) {
    return void 0 === e ? E(t) : Q(E(t), e);
  },
      Z = function Z(t) {
    var e = N.call(this, t = M(t, !0));
    return this === z && i(V, t) && !i(U, t) ? !1 : e || !i(this, t) || !i(V, t) || i(this, L) && this[L][t] ? e : !0;
  },
      J = function J(t, e) {
    if (t = g(t), e = M(e, !0), t !== z || !i(V, e) || i(U, e)) {
      var n = I(t, e);
      return !n || !i(V, e) || i(t, L) && t[L][e] || (n.enumerable = !0), n;
    }
  },
      $ = function $(t) {
    for (var e, n = R(g(t)), r = [], o = 0; n.length > o;) {
      i(V, e = n[o++]) || e == L || e == u || r.push(e);
    }

    return r;
  },
      tt = function tt(t) {
    for (var e, n = t === z, r = R(n ? U : g(t)), o = [], a = 0; r.length > a;) {
      i(V, e = r[a++]) && (n ? i(z, e) : !0) && o.push(V[e]);
    }

    return o;
  };

  j || (_D2 = function D() {
    if (this instanceof _D2) throw TypeError("Symbol is not a constructor!");

    var t = h(arguments.length > 0 ? arguments[0] : void 0),
        e = function e(n) {
      this === z && e.call(U, n), i(this, L) && i(this[L], t) && (this[L][t] = !1), Y(this, t, y(1, n));
    };

    return o && X && Y(z, t, {
      configurable: !0,
      set: e
    }), q(t);
  }, s(_D2[k], "toString", function () {
    return this._k;
  }), w.f = J, A.f = W, n(41).f = S.f = $, n(22).f = Z, n(42).f = tt, o && !n(20) && s(z, "propertyIsEnumerable", Z, !0), p.f = function (t) {
    return q(d(t));
  }), a(a.G + a.W + a.F * !j, {
    Symbol: _D2
  });

  for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) {
    d(et[nt++]);
  }

  for (var et = T(d.store), nt = 0; et.length > nt;) {
    _(et[nt++]);
  }

  a(a.S + a.F * !j, "Symbol", {
    "for": function _for(t) {
      return i(B, t += "") ? B[t] : B[t] = _D2(t);
    },
    keyFor: function keyFor(t) {
      if (H(t)) return v(B, t);
      throw TypeError(t + " is not a symbol!");
    },
    useSetter: function useSetter() {
      X = !0;
    },
    useSimple: function useSimple() {
      X = !1;
    }
  }), a(a.S + a.F * !j, "Object", {
    create: K,
    defineProperty: W,
    defineProperties: Q,
    getOwnPropertyDescriptor: J,
    getOwnPropertyNames: $,
    getOwnPropertySymbols: tt
  }), O && a(a.S + a.F * (!j || l(function () {
    var t = _D2();

    return "[null]" != P([t]) || "{}" != P({
      a: t
    }) || "{}" != P(Object(t));
  })), "JSON", {
    stringify: function stringify(t) {
      if (void 0 !== t && !H(t)) {
        for (var e, n, r = [t], i = 1; arguments.length > i;) {
          r.push(arguments[i++]);
        }

        return e = r[1], "function" == typeof e && (n = e), !n && x(e) || (e = function e(t, _e4) {
          return n && (_e4 = n.call(this, t, _e4)), H(_e4) ? void 0 : _e4;
        }), r[1] = e, P.apply(O, r);
      }
    }
  }), _D2[k][C] || n(8)(_D2[k], C, _D2[k].valueOf), f(_D2, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0);
}, function (t, e, n) {
  n(28)("asyncIterator");
}, function (t, e, n) {
  n(28)("observable");
}, function (t, e, n) {
  n(87);

  for (var r = n(2), i = n(8), o = n(19), a = n(9)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; 5 > u; u++) {
    var l = s[u],
        c = r[l],
        f = c && c.prototype;
    f && !f[a] && i(f, a, l), o[l] = o.Array;
  }
}, function (t, e, n) {
  t.exports = n(100), t.exports.color = n(99);
}, function (t, e) {
  var n = t.exports = n || {};
  n.color = n.color || {}, n.utils = n.utils || {}, n.utils.common = function () {
    var t = Array.prototype.forEach,
        e = Array.prototype.slice;
    return {
      BREAK: {},
      extend: function extend(t) {
        return this.each(e.call(arguments, 1), function (e) {
          for (var n in e) {
            this.isUndefined(e[n]) || (t[n] = e[n]);
          }
        }, this), t;
      },
      defaults: function defaults(t) {
        return this.each(e.call(arguments, 1), function (e) {
          for (var n in e) {
            this.isUndefined(t[n]) && (t[n] = e[n]);
          }
        }, this), t;
      },
      compose: function compose() {
        var t = e.call(arguments);
        return function () {
          for (var n = e.call(arguments), r = t.length - 1; r >= 0; r--) {
            n = [t[r].apply(this, n)];
          }

          return n[0];
        };
      },
      each: function each(e, n, r) {
        if (t && e.forEach === t) e.forEach(n, r);else if (e.length === e.length + 0) {
          for (var i = 0, o = e.length; o > i; i++) {
            if (i in e && n.call(r, e[i], i) === this.BREAK) return;
          }
        } else for (var i in e) {
          if (n.call(r, e[i], i) === this.BREAK) return;
        }
      },
      defer: function defer(t) {
        setTimeout(t, 0);
      },
      toArray: function toArray(t) {
        return t.toArray ? t.toArray() : e.call(t);
      },
      isUndefined: function isUndefined(t) {
        return void 0 === t;
      },
      isNull: function isNull(t) {
        return null === t;
      },
      isNaN: function isNaN(t) {
        return t !== t;
      },
      isArray: Array.isArray || function (t) {
        return t.constructor === Array;
      },
      isObject: function isObject(t) {
        return t === Object(t);
      },
      isNumber: function isNumber(t) {
        return t === t + 0;
      },
      isString: function isString(t) {
        return t === t + "";
      },
      isBoolean: function isBoolean(t) {
        return t === !1 || t === !0;
      },
      isFunction: function isFunction(t) {
        return "[object Function]" === Object.prototype.toString.call(t);
      }
    };
  }(), n.color.toString = function (t) {
    return function (e) {
      if (1 == e.a || t.isUndefined(e.a)) {
        for (var n = e.hex.toString(16); n.length < 6;) {
          n = "0" + n;
        }

        return "#" + n;
      }

      return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")";
    };
  }(n.utils.common), n.Color = n.color.Color = function (t, e, n, r) {
    function i(t, e, n) {
      Object.defineProperty(t, e, {
        get: function get() {
          return "RGB" === this.__state.space ? this.__state[e] : (a(this, e, n), this.__state[e]);
        },
        set: function set(t) {
          "RGB" !== this.__state.space && (a(this, e, n), this.__state.space = "RGB"), this.__state[e] = t;
        }
      });
    }

    function o(t, e) {
      Object.defineProperty(t, e, {
        get: function get() {
          return "HSV" === this.__state.space ? this.__state[e] : (s(this), this.__state[e]);
        },
        set: function set(t) {
          "HSV" !== this.__state.space && (s(this), this.__state.space = "HSV"), this.__state[e] = t;
        }
      });
    }

    function a(t, n, i) {
      if ("HEX" === t.__state.space) t.__state[n] = e.component_from_hex(t.__state.hex, i);else {
        if ("HSV" !== t.__state.space) throw "Corrupted color state";
        r.extend(t.__state, e.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v));
      }
    }

    function s(t) {
      var n = e.rgb_to_hsv(t.r, t.g, t.b);
      r.extend(t.__state, {
        s: n.s,
        v: n.v
      }), r.isNaN(n.h) ? r.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = n.h;
    }

    var u = function u() {
      if (this.__state = t.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
      this.__state.a = this.__state.a || 1;
    };

    return u.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], r.extend(u.prototype, {
      toString: function toString() {
        return n(this);
      },
      toOriginal: function toOriginal() {
        return this.__state.conversion.write(this);
      }
    }), i(u.prototype, "r", 2), i(u.prototype, "g", 1), i(u.prototype, "b", 0), o(u.prototype, "h"), o(u.prototype, "s"), o(u.prototype, "v"), Object.defineProperty(u.prototype, "a", {
      get: function get() {
        return this.__state.a;
      },
      set: function set(t) {
        this.__state.a = t;
      }
    }), Object.defineProperty(u.prototype, "hex", {
      get: function get() {
        return "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
      },
      set: function set(t) {
        this.__state.space = "HEX", this.__state.hex = t;
      }
    }), u;
  }(n.color.interpret = function (t, e) {
    var n,
        r,
        i = function i() {
      r = !1;
      var t = arguments.length > 1 ? e.toArray(arguments) : arguments[0];
      return e.each(o, function (i) {
        return i.litmus(t) ? (e.each(i.conversions, function (i, o) {
          return n = i.read(t), r === !1 && n !== !1 ? (r = n, n.conversionName = o, n.conversion = i, e.BREAK) : void 0;
        }), e.BREAK) : void 0;
      }), r;
    },
        o = [{
      litmus: e.isString,
      conversions: {
        THREE_CHAR_HEX: {
          read: function read(t) {
            var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            return null === e ? !1 : {
              space: "HEX",
              hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString())
            };
          },
          write: t
        },
        SIX_CHAR_HEX: {
          read: function read(t) {
            var e = t.match(/^#([A-F0-9]{6})$/i);
            return null === e ? !1 : {
              space: "HEX",
              hex: parseInt("0x" + e[1].toString())
            };
          },
          write: t
        },
        CSS_RGB: {
          read: function read(t) {
            var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            return null === e ? !1 : {
              space: "RGB",
              r: parseFloat(e[1]),
              g: parseFloat(e[2]),
              b: parseFloat(e[3])
            };
          },
          write: t
        },
        CSS_RGBA: {
          read: function read(t) {
            var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            return null === e ? !1 : {
              space: "RGB",
              r: parseFloat(e[1]),
              g: parseFloat(e[2]),
              b: parseFloat(e[3]),
              a: parseFloat(e[4])
            };
          },
          write: t
        }
      }
    }, {
      litmus: e.isNumber,
      conversions: {
        HEX: {
          read: function read(t) {
            return {
              space: "HEX",
              hex: t,
              conversionName: "HEX"
            };
          },
          write: function write(t) {
            return t.hex;
          }
        }
      }
    }, {
      litmus: e.isArray,
      conversions: {
        RGB_ARRAY: {
          read: function read(t) {
            return 3 != t.length ? !1 : {
              space: "RGB",
              r: t[0],
              g: t[1],
              b: t[2]
            };
          },
          write: function write(t) {
            return [t.r, t.g, t.b];
          }
        },
        RGBA_ARRAY: {
          read: function read(t) {
            return 4 != t.length ? !1 : {
              space: "RGB",
              r: t[0],
              g: t[1],
              b: t[2],
              a: t[3]
            };
          },
          write: function write(t) {
            return [t.r, t.g, t.b, t.a];
          }
        }
      }
    }, {
      litmus: e.isObject,
      conversions: {
        RGBA_OBJ: {
          read: function read(t) {
            return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a) ? {
              space: "RGB",
              r: t.r,
              g: t.g,
              b: t.b,
              a: t.a
            } : !1;
          },
          write: function write(t) {
            return {
              r: t.r,
              g: t.g,
              b: t.b,
              a: t.a
            };
          }
        },
        RGB_OBJ: {
          read: function read(t) {
            return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) ? {
              space: "RGB",
              r: t.r,
              g: t.g,
              b: t.b
            } : !1;
          },
          write: function write(t) {
            return {
              r: t.r,
              g: t.g,
              b: t.b
            };
          }
        },
        HSVA_OBJ: {
          read: function read(t) {
            return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a) ? {
              space: "HSV",
              h: t.h,
              s: t.s,
              v: t.v,
              a: t.a
            } : !1;
          },
          write: function write(t) {
            return {
              h: t.h,
              s: t.s,
              v: t.v,
              a: t.a
            };
          }
        },
        HSV_OBJ: {
          read: function read(t) {
            return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) ? {
              space: "HSV",
              h: t.h,
              s: t.s,
              v: t.v
            } : !1;
          },
          write: function write(t) {
            return {
              h: t.h,
              s: t.s,
              v: t.v
            };
          }
        }
      }
    }];

    return i;
  }(n.color.toString, n.utils.common), n.color.math = function () {
    var t;
    return {
      hsv_to_rgb: function hsv_to_rgb(t, e, n) {
        var r = Math.floor(t / 60) % 6,
            i = t / 60 - Math.floor(t / 60),
            o = n * (1 - e),
            a = n * (1 - i * e),
            s = n * (1 - (1 - i) * e),
            u = [[n, s, o], [a, n, o], [o, n, s], [o, a, n], [s, o, n], [n, o, a]][r];
        return {
          r: 255 * u[0],
          g: 255 * u[1],
          b: 255 * u[2]
        };
      },
      rgb_to_hsv: function rgb_to_hsv(t, e, n) {
        var r,
            i,
            o = Math.min(t, e, n),
            a = Math.max(t, e, n),
            s = a - o;
        return 0 == a ? {
          h: NaN,
          s: 0,
          v: 0
        } : (i = s / a, r = t == a ? (e - n) / s : e == a ? 2 + (n - t) / s : 4 + (t - e) / s, r /= 6, 0 > r && (r += 1), {
          h: 360 * r,
          s: i,
          v: a / 255
        });
      },
      rgb_to_hex: function rgb_to_hex(t, e, n) {
        var r = this.hex_with_component(0, 2, t);
        return r = this.hex_with_component(r, 1, e), r = this.hex_with_component(r, 0, n);
      },
      component_from_hex: function component_from_hex(t, e) {
        return t >> 8 * e & 255;
      },
      hex_with_component: function hex_with_component(e, n, r) {
        return r << (t = 8 * n) | e & ~(255 << t);
      }
    };
  }(), n.color.toString, n.utils.common);
}, function (t, e) {
  var n = t.exports = n || {};
  n.gui = n.gui || {}, n.utils = n.utils || {}, n.controllers = n.controllers || {}, n.dom = n.dom || {}, n.color = n.color || {}, n.utils.css = function () {
    return {
      load: function load(t, e) {
        e = e || document;
        var n = e.createElement("link");
        n.type = "text/css", n.rel = "stylesheet", n.href = t, e.getElementsByTagName("head")[0].appendChild(n);
      },
      inject: function inject(t, e) {
        e = e || document;
        var n = document.createElement("style");
        n.type = "text/css", n.innerHTML = t, e.getElementsByTagName("head")[0].appendChild(n);
      }
    };
  }(), n.utils.common = function () {
    var t = Array.prototype.forEach,
        e = Array.prototype.slice;
    return {
      BREAK: {},
      extend: function extend(t) {
        return this.each(e.call(arguments, 1), function (e) {
          for (var n in e) {
            this.isUndefined(e[n]) || (t[n] = e[n]);
          }
        }, this), t;
      },
      defaults: function defaults(t) {
        return this.each(e.call(arguments, 1), function (e) {
          for (var n in e) {
            this.isUndefined(t[n]) && (t[n] = e[n]);
          }
        }, this), t;
      },
      compose: function compose() {
        var t = e.call(arguments);
        return function () {
          for (var n = e.call(arguments), r = t.length - 1; r >= 0; r--) {
            n = [t[r].apply(this, n)];
          }

          return n[0];
        };
      },
      each: function each(e, n, r) {
        if (t && e.forEach === t) e.forEach(n, r);else if (e.length === e.length + 0) {
          for (var i = 0, o = e.length; o > i; i++) {
            if (i in e && n.call(r, e[i], i) === this.BREAK) return;
          }
        } else for (var i in e) {
          if (n.call(r, e[i], i) === this.BREAK) return;
        }
      },
      defer: function defer(t) {
        setTimeout(t, 0);
      },
      toArray: function toArray(t) {
        return t.toArray ? t.toArray() : e.call(t);
      },
      isUndefined: function isUndefined(t) {
        return void 0 === t;
      },
      isNull: function isNull(t) {
        return null === t;
      },
      isNaN: function isNaN(t) {
        return t !== t;
      },
      isArray: Array.isArray || function (t) {
        return t.constructor === Array;
      },
      isObject: function isObject(t) {
        return t === Object(t);
      },
      isNumber: function isNumber(t) {
        return t === t + 0;
      },
      isString: function isString(t) {
        return t === t + "";
      },
      isBoolean: function isBoolean(t) {
        return t === !1 || t === !0;
      },
      isFunction: function isFunction(t) {
        return "[object Function]" === Object.prototype.toString.call(t);
      }
    };
  }(), n.controllers.Controller = function (t) {
    var e = function e(t, _e5) {
      this.initialValue = t[_e5], this.domElement = document.createElement("div"), this.object = t, this.property = _e5, this.__onChange = void 0, this.__onFinishChange = void 0;
    };

    return t.extend(e.prototype, {
      onChange: function onChange(t) {
        return this.__onChange = t, this;
      },
      onFinishChange: function onFinishChange(t) {
        return this.__onFinishChange = t, this;
      },
      setValue: function setValue(t) {
        return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this;
      },
      getValue: function getValue() {
        return this.object[this.property];
      },
      updateDisplay: function updateDisplay() {
        return this;
      },
      isModified: function isModified() {
        return this.initialValue !== this.getValue();
      }
    }), e;
  }(n.utils.common), n.dom.dom = function (t) {
    function e(e) {
      if ("0" === e || t.isUndefined(e)) return 0;
      var n = e.match(i);
      return t.isNull(n) ? 0 : parseFloat(n[1]);
    }

    var n = {
      HTMLEvents: ["change"],
      MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
      KeyboardEvents: ["keydown"]
    },
        r = {};
    t.each(n, function (e, n) {
      t.each(e, function (t) {
        r[t] = n;
      });
    });
    var i = /(\d+(\.\d+)?)px/,
        o = {
      makeSelectable: function makeSelectable(t, e) {
        void 0 !== t && void 0 !== t.style && (t.onselectstart = e ? function () {
          return !1;
        } : function () {}, t.style.MozUserSelect = e ? "auto" : "none", t.style.KhtmlUserSelect = e ? "auto" : "none", t.unselectable = e ? "on" : "off");
      },
      makeFullscreen: function makeFullscreen(e, n, r) {
        t.isUndefined(n) && (n = !0), t.isUndefined(r) && (r = !0), e.style.position = "absolute", n && (e.style.left = 0, e.style.right = 0), r && (e.style.top = 0, e.style.bottom = 0);
      },
      fakeEvent: function fakeEvent(e, n, i, o) {
        i = i || {};
        var a = r[n];
        if (!a) throw new Error("Event type " + n + " not supported.");
        var s = document.createEvent(a);

        switch (a) {
          case "MouseEvents":
            var u = i.x || i.clientX || 0,
                l = i.y || i.clientY || 0;
            s.initMouseEvent(n, i.bubbles || !1, i.cancelable || !0, window, i.clickCount || 1, 0, 0, u, l, !1, !1, !1, !1, 0, null);
            break;

          case "KeyboardEvents":
            var c = s.initKeyboardEvent || s.initKeyEvent;
            t.defaults(i, {
              cancelable: !0,
              ctrlKey: !1,
              altKey: !1,
              shiftKey: !1,
              metaKey: !1,
              keyCode: void 0,
              charCode: void 0
            }), c(n, i.bubbles || !1, i.cancelable, window, i.ctrlKey, i.altKey, i.shiftKey, i.metaKey, i.keyCode, i.charCode);
            break;

          default:
            s.initEvent(n, i.bubbles || !1, i.cancelable || !0);
        }

        t.defaults(s, o), e.dispatchEvent(s);
      },
      bind: function bind(t, e, n, r) {
        return r = r || !1, t.addEventListener ? t.addEventListener(e, n, r) : t.attachEvent && t.attachEvent("on" + e, n), o;
      },
      unbind: function unbind(t, e, n, r) {
        return r = r || !1, t.removeEventListener ? t.removeEventListener(e, n, r) : t.detachEvent && t.detachEvent("on" + e, n), o;
      },
      addClass: function addClass(t, e) {
        if (void 0 === t.className) t.className = e;else if (t.className !== e) {
          var n = t.className.split(/ +/);
          -1 == n.indexOf(e) && (n.push(e), t.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, ""));
        }
        return o;
      },
      removeClass: function removeClass(t, e) {
        if (e) {
          if (void 0 === t.className) ;else if (t.className === e) t.removeAttribute("class");else {
            var n = t.className.split(/ +/),
                r = n.indexOf(e);
            -1 != r && (n.splice(r, 1), t.className = n.join(" "));
          }
        } else t.className = void 0;
        return o;
      },
      hasClass: function hasClass(t, e) {
        return new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)").test(t.className) || !1;
      },
      getWidth: function getWidth(t) {
        var n = getComputedStyle(t);
        return e(n["border-left-width"]) + e(n["border-right-width"]) + e(n["padding-left"]) + e(n["padding-right"]) + e(n.width);
      },
      getHeight: function getHeight(t) {
        var n = getComputedStyle(t);
        return e(n["border-top-width"]) + e(n["border-bottom-width"]) + e(n["padding-top"]) + e(n["padding-bottom"]) + e(n.height);
      },
      getOffset: function getOffset(t) {
        var e = {
          left: 0,
          top: 0
        };
        if (t.offsetParent) do {
          e.left += t.offsetLeft, e.top += t.offsetTop;
        } while (t = t.offsetParent);
        return e;
      },
      isActive: function isActive(t) {
        return t === document.activeElement && (t.type || t.href);
      }
    };
    return o;
  }(n.utils.common), n.controllers.OptionController = function (t, e, n) {
    var r = function r(t, i, o) {
      r.superclass.call(this, t, i);
      var a = this;

      if (this.__select = document.createElement("select"), n.isArray(o)) {
        var s = {};
        n.each(o, function (t) {
          s[t] = t;
        }), o = s;
      }

      n.each(o, function (t, e) {
        var n = document.createElement("option");
        n.innerHTML = e, n.setAttribute("value", t), a.__select.appendChild(n);
      }), this.updateDisplay(), e.bind(this.__select, "change", function () {
        var t = this.options[this.selectedIndex].value;
        a.setValue(t);
      }), this.domElement.appendChild(this.__select);
    };

    return r.superclass = t, n.extend(r.prototype, t.prototype, {
      setValue: function setValue(t) {
        var e = r.superclass.prototype.setValue.call(this, t);
        return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), e;
      },
      updateDisplay: function updateDisplay() {
        return this.__select.value = this.getValue(), r.superclass.prototype.updateDisplay.call(this);
      }
    }), r;
  }(n.controllers.Controller, n.dom.dom, n.utils.common), n.controllers.NumberController = function (t, e) {
    function n(t) {
      return t = t.toString(), t.indexOf(".") > -1 ? t.length - t.indexOf(".") - 1 : 0;
    }

    var r = function r(t, i, o) {
      r.superclass.call(this, t, i), o = o || {}, this.__min = o.min, this.__max = o.max, this.__step = o.step, e.isUndefined(this.__step) ? 0 == this.initialValue ? this.__impliedStep = 1 : this.__impliedStep = Math.pow(10, Math.floor(Math.log(this.initialValue) / Math.LN10)) / 10 : this.__impliedStep = this.__step, this.__precision = n(this.__impliedStep);
    };

    return r.superclass = t, e.extend(r.prototype, t.prototype, {
      setValue: function setValue(t) {
        return void 0 !== this.__min && t < this.__min ? t = this.__min : void 0 !== this.__max && t > this.__max && (t = this.__max), void 0 !== this.__step && t % this.__step != 0 && (t = Math.round(t / this.__step) * this.__step), r.superclass.prototype.setValue.call(this, t);
      },
      min: function min(t) {
        return this.__min = t, this;
      },
      max: function max(t) {
        return this.__max = t, this;
      },
      step: function step(t) {
        return this.__step = t, this;
      }
    }), r;
  }(n.controllers.Controller, n.utils.common), n.controllers.NumberControllerBox = function (t, e, n) {
    function r(t, e) {
      var n = Math.pow(10, e);
      return Math.round(t * n) / n;
    }

    var i = function i(t, r, o) {
      function a() {
        var t = parseFloat(h.__input.value);
        n.isNaN(t) || h.setValue(t);
      }

      function s() {
        a(), h.__onFinishChange && h.__onFinishChange.call(h, h.getValue());
      }

      function u(t) {
        e.bind(window, "mousemove", l), e.bind(window, "mouseup", c), f = t.clientY;
      }

      function l(t) {
        var e = f - t.clientY;
        h.setValue(h.getValue() + e * h.__impliedStep), f = t.clientY;
      }

      function c() {
        e.unbind(window, "mousemove", l), e.unbind(window, "mouseup", c);
      }

      this.__truncationSuspended = !1, i.superclass.call(this, t, r, o);
      var f,
          h = this;
      this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "change", a), e.bind(this.__input, "blur", s), e.bind(this.__input, "mousedown", u), e.bind(this.__input, "keydown", function (t) {
        13 === t.keyCode && (h.__truncationSuspended = !0, this.blur(), h.__truncationSuspended = !1);
      }), this.updateDisplay(), this.domElement.appendChild(this.__input);
    };

    return i.superclass = t, n.extend(i.prototype, t.prototype, {
      updateDisplay: function updateDisplay() {
        return this.__input.value = this.__truncationSuspended ? this.getValue() : r(this.getValue(), this.__precision), i.superclass.prototype.updateDisplay.call(this);
      }
    }), i;
  }(n.controllers.NumberController, n.dom.dom, n.utils.common), n.controllers.NumberControllerSlider = function (t, e, n, r, i) {
    function o(t, e, n, r, i) {
      return r + (i - r) * ((t - e) / (n - e));
    }

    var a = function a(t, n, r, i, s) {
      function u(t) {
        e.bind(window, "mousemove", l), e.bind(window, "mouseup", c), l(t);
      }

      function l(t) {
        t.preventDefault();
        var n = e.getOffset(f.__background),
            r = e.getWidth(f.__background);
        return f.setValue(o(t.clientX, n.left, n.left + r, f.__min, f.__max)), !1;
      }

      function c() {
        e.unbind(window, "mousemove", l), e.unbind(window, "mouseup", c), f.__onFinishChange && f.__onFinishChange.call(f, f.getValue());
      }

      a.superclass.call(this, t, n, {
        min: r,
        max: i,
        step: s
      });
      var f = this;
      this.__background = document.createElement("div"), this.__foreground = document.createElement("div"), e.bind(this.__background, "mousedown", u), e.addClass(this.__background, "slider"), e.addClass(this.__foreground, "slider-fg"), this.updateDisplay(), this.__background.appendChild(this.__foreground), this.domElement.appendChild(this.__background);
    };

    return a.superclass = t, a.useDefaultStyles = function () {
      n.inject(i);
    }, r.extend(a.prototype, t.prototype, {
      updateDisplay: function updateDisplay() {
        var t = (this.getValue() - this.__min) / (this.__max - this.__min);

        return this.__foreground.style.width = 100 * t + "%", a.superclass.prototype.updateDisplay.call(this);
      }
    }), a;
  }(n.controllers.NumberController, n.dom.dom, n.utils.css, n.utils.common, ".slider {\n  box-shadow: inset 0 2px 4px rgba(0,0,0,0.15);\n  height: 1em;\n  border-radius: 1em;\n  background-color: #eee;\n  padding: 0 0.5em;\n  overflow: hidden;\n}\n\n.slider-fg {\n  padding: 1px 0 2px 0;\n  background-color: #aaa;\n  height: 1em;\n  margin-left: -0.5em;\n  padding-right: 0.5em;\n  border-radius: 1em 0 0 1em;\n}\n\n.slider-fg:after {\n  display: inline-block;\n  border-radius: 1em;\n  background-color: #fff;\n  border:  1px solid #aaa;\n  content: '';\n  float: right;\n  margin-right: -1em;\n  margin-top: -1px;\n  height: 0.9em;\n  width: 0.9em;\n}"), n.controllers.FunctionController = function (t, e, n) {
    var r = function r(t, n, i) {
      r.superclass.call(this, t, n);
      var o = this;
      this.__button = document.createElement("div"), this.__button.innerHTML = void 0 === i ? "Fire" : i, e.bind(this.__button, "click", function (t) {
        return t.preventDefault(), o.fire(), !1;
      }), e.addClass(this.__button, "button"), this.domElement.appendChild(this.__button);
    };

    return r.superclass = t, n.extend(r.prototype, t.prototype, {
      fire: function fire() {
        this.__onChange && this.__onChange.call(this), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.getValue().call(this.object);
      }
    }), r;
  }(n.controllers.Controller, n.dom.dom, n.utils.common), n.controllers.BooleanController = function (t, e, n) {
    var r = function r(t, n) {
      function i() {
        o.setValue(!o.__prev);
      }

      r.superclass.call(this, t, n);
      var o = this;
      this.__prev = this.getValue(), this.__checkbox = document.createElement("input"), this.__checkbox.setAttribute("type", "checkbox"), e.bind(this.__checkbox, "change", i, !1), this.domElement.appendChild(this.__checkbox), this.updateDisplay();
    };

    return r.superclass = t, n.extend(r.prototype, t.prototype, {
      setValue: function setValue(t) {
        var e = r.superclass.prototype.setValue.call(this, t);
        return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), e;
      },
      updateDisplay: function updateDisplay() {
        return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0) : this.__checkbox.checked = !1, r.superclass.prototype.updateDisplay.call(this);
      }
    }), r;
  }(n.controllers.Controller, n.dom.dom, n.utils.common), n.color.toString = function (t) {
    return function (e) {
      if (1 == e.a || t.isUndefined(e.a)) {
        for (var n = e.hex.toString(16); n.length < 6;) {
          n = "0" + n;
        }

        return "#" + n;
      }

      return "rgba(" + Math.round(e.r) + "," + Math.round(e.g) + "," + Math.round(e.b) + "," + e.a + ")";
    };
  }(n.utils.common), n.color.interpret = function (t, e) {
    var n,
        r,
        i = function i() {
      r = !1;
      var t = arguments.length > 1 ? e.toArray(arguments) : arguments[0];
      return e.each(o, function (i) {
        return i.litmus(t) ? (e.each(i.conversions, function (i, o) {
          return n = i.read(t), r === !1 && n !== !1 ? (r = n, n.conversionName = o, n.conversion = i, e.BREAK) : void 0;
        }), e.BREAK) : void 0;
      }), r;
    },
        o = [{
      litmus: e.isString,
      conversions: {
        THREE_CHAR_HEX: {
          read: function read(t) {
            var e = t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            return null === e ? !1 : {
              space: "HEX",
              hex: parseInt("0x" + e[1].toString() + e[1].toString() + e[2].toString() + e[2].toString() + e[3].toString() + e[3].toString())
            };
          },
          write: t
        },
        SIX_CHAR_HEX: {
          read: function read(t) {
            var e = t.match(/^#([A-F0-9]{6})$/i);
            return null === e ? !1 : {
              space: "HEX",
              hex: parseInt("0x" + e[1].toString())
            };
          },
          write: t
        },
        CSS_RGB: {
          read: function read(t) {
            var e = t.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
            return null === e ? !1 : {
              space: "RGB",
              r: parseFloat(e[1]),
              g: parseFloat(e[2]),
              b: parseFloat(e[3])
            };
          },
          write: t
        },
        CSS_RGBA: {
          read: function read(t) {
            var e = t.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\,\s*(.+)\s*\)/);
            return null === e ? !1 : {
              space: "RGB",
              r: parseFloat(e[1]),
              g: parseFloat(e[2]),
              b: parseFloat(e[3]),
              a: parseFloat(e[4])
            };
          },
          write: t
        }
      }
    }, {
      litmus: e.isNumber,
      conversions: {
        HEX: {
          read: function read(t) {
            return {
              space: "HEX",
              hex: t,
              conversionName: "HEX"
            };
          },
          write: function write(t) {
            return t.hex;
          }
        }
      }
    }, {
      litmus: e.isArray,
      conversions: {
        RGB_ARRAY: {
          read: function read(t) {
            return 3 != t.length ? !1 : {
              space: "RGB",
              r: t[0],
              g: t[1],
              b: t[2]
            };
          },
          write: function write(t) {
            return [t.r, t.g, t.b];
          }
        },
        RGBA_ARRAY: {
          read: function read(t) {
            return 4 != t.length ? !1 : {
              space: "RGB",
              r: t[0],
              g: t[1],
              b: t[2],
              a: t[3]
            };
          },
          write: function write(t) {
            return [t.r, t.g, t.b, t.a];
          }
        }
      }
    }, {
      litmus: e.isObject,
      conversions: {
        RGBA_OBJ: {
          read: function read(t) {
            return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) && e.isNumber(t.a) ? {
              space: "RGB",
              r: t.r,
              g: t.g,
              b: t.b,
              a: t.a
            } : !1;
          },
          write: function write(t) {
            return {
              r: t.r,
              g: t.g,
              b: t.b,
              a: t.a
            };
          }
        },
        RGB_OBJ: {
          read: function read(t) {
            return e.isNumber(t.r) && e.isNumber(t.g) && e.isNumber(t.b) ? {
              space: "RGB",
              r: t.r,
              g: t.g,
              b: t.b
            } : !1;
          },
          write: function write(t) {
            return {
              r: t.r,
              g: t.g,
              b: t.b
            };
          }
        },
        HSVA_OBJ: {
          read: function read(t) {
            return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) && e.isNumber(t.a) ? {
              space: "HSV",
              h: t.h,
              s: t.s,
              v: t.v,
              a: t.a
            } : !1;
          },
          write: function write(t) {
            return {
              h: t.h,
              s: t.s,
              v: t.v,
              a: t.a
            };
          }
        },
        HSV_OBJ: {
          read: function read(t) {
            return e.isNumber(t.h) && e.isNumber(t.s) && e.isNumber(t.v) ? {
              space: "HSV",
              h: t.h,
              s: t.s,
              v: t.v
            } : !1;
          },
          write: function write(t) {
            return {
              h: t.h,
              s: t.s,
              v: t.v
            };
          }
        }
      }
    }];

    return i;
  }(n.color.toString, n.utils.common), n.GUI = n.gui.GUI = function (t, e, n, r, i, o, a, s, u, l, c, f, h, d, p) {
    function _(t, e, n, o) {
      if (void 0 === e[n]) throw new Error("Object " + e + ' has no property "' + n + '"');
      var a;
      if (o.color) a = new c(e, n);else {
        var s = [e, n].concat(o.factoryArgs);
        a = r.apply(t, s);
      }
      o.before instanceof i && (o.before = o.before.__li), x(t, a), d.addClass(a.domElement, "c");
      var u = document.createElement("span");
      d.addClass(u, "property-name"), u.innerHTML = a.property;
      var l = document.createElement("div");
      l.appendChild(u), l.appendChild(a.domElement);
      var f = v(t, l, o.before);
      return d.addClass(f, B.CLASS_CONTROLLER_ROW), d.addClass(f, _typeof(a.getValue())), m(t, f, a), t.__controllers.push(a), a;
    }

    function v(t, e, n) {
      var r = document.createElement("li");
      return e && r.appendChild(e), n ? t.__ul.insertBefore(r, params.before) : t.__ul.appendChild(r), t.onResize(), r;
    }

    function m(t, e, n) {
      if (n.__li = e, n.__gui = t, p.extend(n, {
        options: function options(e) {
          return arguments.length > 1 ? (n.remove(), _(t, n.object, n.property, {
            before: n.__li.nextElementSibling,
            factoryArgs: [p.toArray(arguments)]
          })) : p.isArray(e) || p.isObject(e) ? (n.remove(), _(t, n.object, n.property, {
            before: n.__li.nextElementSibling,
            factoryArgs: [e]
          })) : void 0;
        },
        name: function name(t) {
          return n.__li.firstElementChild.firstElementChild.innerHTML = t, n;
        },
        listen: function listen() {
          return n.__gui.listen(n), n;
        },
        remove: function remove() {
          return n.__gui.remove(n), n;
        }
      }), n instanceof u) {
        var r = new s(n.object, n.property, {
          min: n.__min,
          max: n.__max,
          step: n.__step
        });
        p.each(["updateDisplay", "onChange", "onFinishChange"], function (t) {
          var e = n[t],
              i = r[t];

          n[t] = r[t] = function () {
            var t = Array.prototype.slice.call(arguments);
            return e.apply(n, t), i.apply(r, t);
          };
        }), d.addClass(e, "has-slider"), n.domElement.insertBefore(r.domElement, n.domElement.firstElementChild);
      } else if (n instanceof s) {
        var i = function i(e) {
          return p.isNumber(n.__min) && p.isNumber(n.__max) ? (n.remove(), _(t, n.object, n.property, {
            before: n.__li.nextElementSibling,
            factoryArgs: [n.__min, n.__max, n.__step]
          })) : e;
        };

        n.min = p.compose(i, n.min), n.max = p.compose(i, n.max);
      } else n instanceof o ? (d.bind(e, "click", function () {
        d.fakeEvent(n.__checkbox, "click");
      }), d.bind(n.__checkbox, "click", function (t) {
        t.stopPropagation();
      })) : n instanceof a ? (d.bind(e, "click", function () {
        d.fakeEvent(n.__button, "click");
      }), d.bind(e, "mouseover", function () {
        d.addClass(n.__button, "hover");
      }), d.bind(e, "mouseout", function () {
        d.removeClass(n.__button, "hover");
      })) : n instanceof c && (d.addClass(e, "color"), n.updateDisplay = p.compose(function (t) {
        return e.style.borderLeftColor = n.__color.toString(), t;
      }, n.updateDisplay), n.updateDisplay());

      n.setValue = p.compose(function (e) {
        return t.getRoot().__preset_select && n.isModified() && A(t.getRoot(), !0), e;
      }, n.setValue);
    }

    function x(t, e) {
      var n = t.getRoot(),
          r = n.__rememberedObjects.indexOf(e.object);

      if (-1 != r) {
        var i = n.__rememberedObjectIndecesToControllers[r];

        if (void 0 === i && (i = {}, n.__rememberedObjectIndecesToControllers[r] = i), i[e.property] = e, n.load && n.load.remembered) {
          var o,
              a = n.load.remembered;
          if (a[t.preset]) o = a[t.preset];else {
            if (!a[P]) return;
            o = a[P];
          }

          if (o[r] && void 0 !== o[r][e.property]) {
            var s = o[r][e.property];
            e.initialValue = s, e.setValue(s);
          }
        }
      }
    }

    function b(t, e) {
      return document.location.href + "." + e;
    }

    function g(t) {
      function e() {
        l.style.display = t.useLocalStorage ? "block" : "none";
      }

      var n = t.__save_row = document.createElement("li");
      d.addClass(t.domElement, "has-save"), t.__ul.insertBefore(n, t.__ul.firstChild), d.addClass(n, "save-row");
      var r = document.createElement("span");
      r.innerHTML = "&nbsp;", d.addClass(r, "button gears");
      var i = document.createElement("span");
      i.innerHTML = "Save", d.addClass(i, "button"), d.addClass(i, "save");
      var o = document.createElement("span");
      o.innerHTML = "New", d.addClass(o, "button"), d.addClass(o, "save-as");
      var a = document.createElement("span");
      a.innerHTML = "Revert", d.addClass(a, "button"), d.addClass(a, "revert");
      var s = t.__preset_select = document.createElement("select");

      if (t.load && t.load.remembered ? p.each(t.load.remembered, function (e, n) {
        S(t, n, n == t.preset);
      }) : S(t, P, !1), d.bind(s, "change", function () {
        for (var e = 0; e < t.__preset_select.length; e++) {
          t.__preset_select[e].innerHTML = t.__preset_select[e].value;
        }

        t.preset = this.value;
      }), n.appendChild(s), n.appendChild(r), n.appendChild(i), n.appendChild(o), n.appendChild(a), k) {
        var u = document.getElementById("dg-save-locally"),
            l = document.getElementById("dg-local-explain");
        u.style.display = "block";
        var c = document.getElementById("dg-local-storage");
        "true" === localStorage.getItem(b(t, "isLocal")) && c.setAttribute("checked", "checked"), e(), d.bind(c, "change", function () {
          t.useLocalStorage = !t.useLocalStorage, e();
        });
      }

      var f = document.getElementById("dg-new-constructor");
      d.bind(f, "keydown", function (t) {
        !t.metaKey || 67 !== t.which && 67 != t.keyCode || I.hide();
      }), d.bind(r, "click", function () {
        f.innerHTML = JSON.stringify(t.getSaveObject(), void 0, 2), I.show(), f.focus(), f.select();
      }), d.bind(i, "click", function () {
        t.save();
      }), d.bind(o, "click", function () {
        var e = prompt("Enter a new preset name.");
        e && t.saveAs(e);
      }), d.bind(a, "click", function () {
        t.revert();
      });
    }

    function M(t) {
      function e(e) {
        return e.preventDefault(), i = e.clientX, d.addClass(t.__closeButton, B.CLASS_DRAG), d.bind(window, "mousemove", n), d.bind(window, "mouseup", r), !1;
      }

      function n(e) {
        return e.preventDefault(), t.width += i - e.clientX, t.onResize(), i = e.clientX, !1;
      }

      function r() {
        d.removeClass(t.__closeButton, B.CLASS_DRAG), d.unbind(window, "mousemove", n), d.unbind(window, "mouseup", r);
      }

      t.__resize_handle = document.createElement("div"), p.extend(t.__resize_handle.style, {
        width: "6px",
        marginLeft: "-3px",
        height: "200px",
        cursor: "ew-resize",
        position: "absolute"
      });
      var i;
      d.bind(t.__resize_handle, "mousedown", e), d.bind(t.__closeButton, "mousedown", e), t.domElement.insertBefore(t.__resize_handle, t.domElement.firstElementChild);
    }

    function y(t, e) {
      t.domElement.style.width = e + "px", t.__save_row && t.autoPlace && (t.__save_row.style.width = e + "px"), t.__closeButton && (t.__closeButton.style.width = e + "px");
    }

    function E(t, e) {
      var n = {};
      return p.each(t.__rememberedObjects, function (r, i) {
        var o = {},
            a = t.__rememberedObjectIndecesToControllers[i];
        p.each(a, function (t, n) {
          o[n] = e ? t.initialValue : t.getValue();
        }), n[i] = o;
      }), n;
    }

    function S(t, e, n) {
      var r = document.createElement("option");
      r.innerHTML = e, r.value = e, t.__preset_select.appendChild(r), n && (t.__preset_select.selectedIndex = t.__preset_select.length - 1);
    }

    function w(t) {
      for (var e = 0; e < t.__preset_select.length; e++) {
        t.__preset_select[e].value == t.preset && (t.__preset_select.selectedIndex = e);
      }
    }

    function A(t, e) {
      var n = t.__preset_select[t.__preset_select.selectedIndex];
      e ? n.innerHTML = n.value + "*" : n.innerHTML = n.value;
    }

    function T(t) {
      0 != t.length && f(function () {
        T(t);
      }), p.each(t, function (t) {
        t.updateDisplay();
      });
    }

    t.inject(n);

    var I,
        F,
        R = "dg",
        D = 72,
        O = 20,
        P = "Default",
        k = function () {
      try {
        return "localStorage" in window && null !== window.localStorage;
      } catch (t) {
        return !1;
      }
    }(),
        L = !0,
        C = !1,
        N = [],
        B = function B(t) {
      function e() {
        localStorage.setItem(b(r, "gui"), JSON.stringify(r.getSaveObject()));
      }

      function n() {
        var t = r.getRoot();
        t.width += 1, p.defer(function () {
          t.width -= 1;
        });
      }

      var r = this;
      this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), d.addClass(this.domElement, R), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], t = t || {}, t = p.defaults(t, {
        autoPlace: !0,
        width: B.DEFAULT_WIDTH
      }), t = p.defaults(t, {
        resizable: t.autoPlace,
        hideable: t.autoPlace
      }), p.isUndefined(t.load) ? t.load = {
        preset: P
      } : t.preset && (t.load.preset = t.preset), p.isUndefined(t.parent) && t.hideable && N.push(this), t.resizable = p.isUndefined(t.parent) && t.resizable, t.autoPlace && p.isUndefined(t.scrollable) && (t.scrollable = !0);
      var i = k && "true" === localStorage.getItem(b(this, "isLocal"));

      if (Object.defineProperties(this, {
        parent: {
          get: function get() {
            return t.parent;
          }
        },
        scrollable: {
          get: function get() {
            return t.scrollable;
          }
        },
        autoPlace: {
          get: function get() {
            return t.autoPlace;
          }
        },
        preset: {
          get: function get() {
            return r.parent ? r.getRoot().preset : t.load.preset;
          },
          set: function set(e) {
            r.parent ? r.getRoot().preset = e : t.load.preset = e, w(this), r.revert();
          }
        },
        width: {
          get: function get() {
            return t.width;
          },
          set: function set(e) {
            t.width = e, y(r, e);
          }
        },
        name: {
          get: function get() {
            return t.name;
          },
          set: function set(e) {
            t.name = e, a && (a.innerHTML = t.name);
          }
        },
        closed: {
          get: function get() {
            return t.closed;
          },
          set: function set(e) {
            t.closed = e, t.closed ? d.addClass(r.__ul, B.CLASS_CLOSED) : d.removeClass(r.__ul, B.CLASS_CLOSED), this.onResize(), r.__closeButton && (r.__closeButton.innerHTML = e ? B.TEXT_OPEN : B.TEXT_CLOSED);
          }
        },
        load: {
          get: function get() {
            return t.load;
          }
        },
        useLocalStorage: {
          get: function get() {
            return i;
          },
          set: function set(t) {
            k && (i = t, t ? d.bind(window, "unload", e) : d.unbind(window, "unload", e), localStorage.setItem(b(r, "isLocal"), t));
          }
        }
      }), p.isUndefined(t.parent)) {
        if (t.closed = !1, d.addClass(this.domElement, B.CLASS_MAIN), d.makeSelectable(this.domElement, !1), k && i) {
          r.useLocalStorage = !0;
          var o = localStorage.getItem(b(this, "gui"));
          o && (t.load = JSON.parse(o));
        }

        this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = B.TEXT_CLOSED, d.addClass(this.__closeButton, B.CLASS_CLOSE_BUTTON), this.domElement.appendChild(this.__closeButton), d.bind(this.__closeButton, "click", function () {
          r.closed = !r.closed;
        });
      } else {
        void 0 === t.closed && (t.closed = !0);
        var a = document.createTextNode(t.name);
        d.addClass(a, "controller-name");

        var s = v(r, a),
            u = function u(t) {
          return t.preventDefault(), r.closed = !r.closed, !1;
        };

        d.addClass(this.__ul, B.CLASS_CLOSED), d.addClass(s, "title"), d.bind(s, "click", u), t.closed || (this.closed = !1);
      }

      t.autoPlace && (p.isUndefined(t.parent) && (L && (F = document.createElement("div"), d.addClass(F, R), d.addClass(F, B.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(F), L = !1), F.appendChild(this.domElement), d.addClass(this.domElement, B.CLASS_AUTO_PLACE)), this.parent || y(r, t.width)), d.bind(window, "resize", function () {
        r.onResize();
      }), d.bind(this.__ul, "webkitTransitionEnd", function () {
        r.onResize();
      }), d.bind(this.__ul, "transitionend", function () {
        r.onResize();
      }), d.bind(this.__ul, "oTransitionEnd", function () {
        r.onResize();
      }), this.onResize(), t.resizable && M(this);
      r.getRoot();
      t.parent || n();
    };

    return B.toggleHide = function () {
      C = !C, p.each(N, function (t) {
        t.domElement.style.zIndex = C ? -999 : 999, t.domElement.style.opacity = C ? 0 : 1;
      });
    }, B.CLASS_AUTO_PLACE = "a", B.CLASS_AUTO_PLACE_CONTAINER = "ac", B.CLASS_MAIN = "main", B.CLASS_CONTROLLER_ROW = "cr", B.CLASS_TOO_TALL = "taller-than-window", B.CLASS_CLOSED = "closed", B.CLASS_CLOSE_BUTTON = "close-button", B.CLASS_DRAG = "drag", B.DEFAULT_WIDTH = 245, B.TEXT_CLOSED = "Close Controls", B.TEXT_OPEN = "Open Controls", d.bind(window, "keydown", function (t) {
      "text" === document.activeElement.type || t.which !== D && t.keyCode != D || B.toggleHide();
    }, !1), p.extend(B.prototype, {
      add: function add(t, e) {
        return _(this, t, e, {
          factoryArgs: Array.prototype.slice.call(arguments, 2)
        });
      },
      addColor: function addColor(t, e) {
        return _(this, t, e, {
          color: !0
        });
      },
      remove: function remove(t) {
        this.__ul.removeChild(t.__li), this.__controllers.slice(this.__controllers.indexOf(t), 1);
        var e = this;
        p.defer(function () {
          e.onResize();
        });
      },
      destroy: function destroy() {
        this.autoPlace && F.removeChild(this.domElement);
      },
      addFolder: function addFolder(t) {
        if (void 0 !== this.__folders[t]) throw new Error('You already have a folder in this GUI by the name "' + t + '"');
        var e = {
          name: t,
          parent: this
        };
        e.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[t] && (e.closed = this.load.folders[t].closed, e.load = this.load.folders[t]);
        var n = new B(e);
        this.__folders[t] = n;
        var r = v(this, n.domElement);
        return d.addClass(r, "folder"), n;
      },
      open: function open() {
        this.closed = !1;
      },
      close: function close() {
        this.closed = !0;
      },
      onResize: function onResize() {
        var t = this.getRoot();

        if (t.scrollable) {
          var e = d.getOffset(t.__ul).top,
              n = 0;
          p.each(t.__ul.childNodes, function (e) {
            t.autoPlace && e === t.__save_row || (n += d.getHeight(e));
          }), window.innerHeight - e - O < n ? (d.addClass(t.domElement, B.CLASS_TOO_TALL), t.__ul.style.height = window.innerHeight - e - O + "px") : (d.removeClass(t.domElement, B.CLASS_TOO_TALL), t.__ul.style.height = "auto");
        }

        t.__resize_handle && p.defer(function () {
          t.__resize_handle.style.height = t.__ul.offsetHeight + "px";
        }), t.__closeButton && (t.__closeButton.style.width = t.width + "px");
      },
      remember: function remember() {
        if (p.isUndefined(I) && (I = new h(), I.domElement.innerHTML = e), this.parent) throw new Error("You can only call remember on a top level GUI.");
        var t = this;
        p.each(Array.prototype.slice.call(arguments), function (e) {
          0 == t.__rememberedObjects.length && g(t), -1 == t.__rememberedObjects.indexOf(e) && t.__rememberedObjects.push(e);
        }), this.autoPlace && y(this, this.width);
      },
      getRoot: function getRoot() {
        for (var t = this; t.parent;) {
          t = t.parent;
        }

        return t;
      },
      getSaveObject: function getSaveObject() {
        var t = this.load;
        return t.closed = this.closed, this.__rememberedObjects.length > 0 && (t.preset = this.preset, t.remembered || (t.remembered = {}), t.remembered[this.preset] = E(this)), t.folders = {}, p.each(this.__folders, function (e, n) {
          t.folders[n] = e.getSaveObject();
        }), t;
      },
      save: function save() {
        this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = E(this), A(this, !1);
      },
      saveAs: function saveAs(t) {
        this.load.remembered || (this.load.remembered = {}, this.load.remembered[P] = E(this, !0)), this.load.remembered[t] = E(this), this.preset = t, S(this, t, !0);
      },
      revert: function revert(t) {
        p.each(this.__controllers, function (e) {
          this.getRoot().load.remembered ? x(t || this.getRoot(), e) : e.setValue(e.initialValue);
        }, this), p.each(this.__folders, function (t) {
          t.revert(t);
        }), t || A(this.getRoot(), !1);
      },
      listen: function listen(t) {
        var e = 0 == this.__listening.length;
        this.__listening.push(t), e && T(this.__listening);
      }
    }), B;
  }(n.utils.css, '<div id="dg-save" class="dg dialogue">\n\n  Here\'s the new load parameter for your <code>GUI</code>\'s constructor:\n\n  <textarea id="dg-new-constructor"></textarea>\n\n  <div id="dg-save-locally">\n\n    <input id="dg-local-storage" type="checkbox"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id="dg-local-explain">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>\'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n      \n    </div>\n    \n  </div>\n\n</div>', ".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity 0.1s linear;-o-transition:opacity 0.1s linear;-moz-transition:opacity 0.1s linear;transition:opacity 0.1s linear;border:0;position:absolute;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-x:hidden}.dg.a.has-save ul{margin-top:27px}.dg.a.has-save ul.closed{margin-top:0}.dg.a .save-row{position:fixed;top:0;z-index:1002}.dg li{-webkit-transition:height 0.1s ease-out;-o-transition:height 0.1s ease-out;-moz-transition:height 0.1s ease-out;transition:height 0.1s ease-out}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;overflow:hidden;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li > *{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:9px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2fa1d6}.dg .cr.number input[type=text]{color:#2fa1d6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2fa1d6}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n", n.controllers.factory = function (t, e, n, r, i, o, a) {
    return function (s, u) {
      var l = s[u];
      return a.isArray(arguments[2]) || a.isObject(arguments[2]) ? new t(s, u, arguments[2]) : a.isNumber(l) ? a.isNumber(arguments[2]) && a.isNumber(arguments[3]) ? new n(s, u, arguments[2], arguments[3]) : new e(s, u, {
        min: arguments[2],
        max: arguments[3]
      }) : a.isString(l) ? new r(s, u) : a.isFunction(l) ? new i(s, u, "") : a.isBoolean(l) ? new o(s, u) : void 0;
    };
  }(n.controllers.OptionController, n.controllers.NumberControllerBox, n.controllers.NumberControllerSlider, n.controllers.StringController = function (t, e, n) {
    var r = function r(t, n) {
      function i() {
        a.setValue(a.__input.value);
      }

      function o() {
        a.__onFinishChange && a.__onFinishChange.call(a, a.getValue());
      }

      r.superclass.call(this, t, n);
      var a = this;
      this.__input = document.createElement("input"), this.__input.setAttribute("type", "text"), e.bind(this.__input, "keyup", i), e.bind(this.__input, "change", i), e.bind(this.__input, "blur", o), e.bind(this.__input, "keydown", function (t) {
        13 === t.keyCode && this.blur();
      }), this.updateDisplay(), this.domElement.appendChild(this.__input);
    };

    return r.superclass = t, n.extend(r.prototype, t.prototype, {
      updateDisplay: function updateDisplay() {
        return e.isActive(this.__input) || (this.__input.value = this.getValue()), r.superclass.prototype.updateDisplay.call(this);
      }
    }), r;
  }(n.controllers.Controller, n.dom.dom, n.utils.common), n.controllers.FunctionController, n.controllers.BooleanController, n.utils.common), n.controllers.Controller, n.controllers.BooleanController, n.controllers.FunctionController, n.controllers.NumberControllerBox, n.controllers.NumberControllerSlider, n.controllers.OptionController, n.controllers.ColorController = function (t, e, n, r, i) {
    function o(t, e, n, r) {
      t.style.background = "", i.each(u, function (i) {
        t.style.cssText += "background: " + i + "linear-gradient(" + e + ", " + n + " 0%, " + r + " 100%); ";
      });
    }

    function a(t) {
      t.style.background = "", t.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", t.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", t.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);";
    }

    var s = function s(t, u) {
      function l(t) {
        d(t), e.bind(window, "mousemove", d), e.bind(window, "mouseup", c);
      }

      function c() {
        e.unbind(window, "mousemove", d), e.unbind(window, "mouseup", c);
      }

      function f() {
        var t = r(this.value);
        t !== !1 ? (_.__color.__state = t, _.setValue(_.__color.toOriginal())) : this.value = _.__color.toString();
      }

      function h() {
        e.unbind(window, "mousemove", p), e.unbind(window, "mouseup", h);
      }

      function d(t) {
        t.preventDefault();
        var n = e.getWidth(_.__saturation_field),
            r = e.getOffset(_.__saturation_field),
            i = (t.clientX - r.left + document.body.scrollLeft) / n,
            o = 1 - (t.clientY - r.top + document.body.scrollTop) / n;
        return o > 1 ? o = 1 : 0 > o && (o = 0), i > 1 ? i = 1 : 0 > i && (i = 0), _.__color.v = o, _.__color.s = i, _.setValue(_.__color.toOriginal()), !1;
      }

      function p(t) {
        t.preventDefault();
        var n = e.getHeight(_.__hue_field),
            r = e.getOffset(_.__hue_field),
            i = 1 - (t.clientY - r.top + document.body.scrollTop) / n;
        return i > 1 ? i = 1 : 0 > i && (i = 0), _.__color.h = 360 * i, _.setValue(_.__color.toOriginal()), !1;
      }

      s.superclass.call(this, t, u), this.__color = new n(this.getValue()), this.__temp = new n(0);

      var _ = this;

      this.domElement = document.createElement("div"), e.makeSelectable(this.domElement, !1), this.__selector = document.createElement("div"), this.__selector.className = "selector", this.__saturation_field = document.createElement("div"), this.__saturation_field.className = "saturation-field", this.__field_knob = document.createElement("div"), this.__field_knob.className = "field-knob", this.__field_knob_border = "2px solid ", this.__hue_knob = document.createElement("div"), this.__hue_knob.className = "hue-knob", this.__hue_field = document.createElement("div"), this.__hue_field.className = "hue-field", this.__input = document.createElement("input"), this.__input.type = "text", this.__input_textShadow = "0 1px 1px ", e.bind(this.__input, "keydown", function (t) {
        13 === t.keyCode && f.call(this);
      }), e.bind(this.__input, "blur", f), e.bind(this.__selector, "mousedown", function (t) {
        e.addClass(this, "drag").bind(window, "mouseup", function (t) {
          e.removeClass(_.__selector, "drag");
        });
      });
      var v = document.createElement("div");
      i.extend(this.__selector.style, {
        width: "122px",
        height: "102px",
        padding: "3px",
        backgroundColor: "#222",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.3)"
      }), i.extend(this.__field_knob.style, {
        position: "absolute",
        width: "12px",
        height: "12px",
        border: this.__field_knob_border + (this.__color.v < .5 ? "#fff" : "#000"),
        boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
        borderRadius: "12px",
        zIndex: 1
      }), i.extend(this.__hue_knob.style, {
        position: "absolute",
        width: "15px",
        height: "2px",
        borderRight: "4px solid #fff",
        zIndex: 1
      }), i.extend(this.__saturation_field.style, {
        width: "100px",
        height: "100px",
        border: "1px solid #555",
        marginRight: "3px",
        display: "inline-block",
        cursor: "pointer"
      }), i.extend(v.style, {
        width: "100%",
        height: "100%",
        background: "none"
      }), o(v, "top", "rgba(0,0,0,0)", "#000"), i.extend(this.__hue_field.style, {
        width: "15px",
        height: "100px",
        display: "inline-block",
        border: "1px solid #555",
        cursor: "ns-resize"
      }), a(this.__hue_field), i.extend(this.__input.style, {
        outline: "none",
        textAlign: "center",
        color: "#fff",
        border: 0,
        fontWeight: "bold",
        textShadow: this.__input_textShadow + "rgba(0,0,0,0.7)"
      }), e.bind(this.__saturation_field, "mousedown", l), e.bind(this.__field_knob, "mousedown", l), e.bind(this.__hue_field, "mousedown", function (t) {
        p(t), e.bind(window, "mousemove", p), e.bind(window, "mouseup", h);
      }), this.__saturation_field.appendChild(v), this.__selector.appendChild(this.__field_knob), this.__selector.appendChild(this.__saturation_field), this.__selector.appendChild(this.__hue_field), this.__hue_field.appendChild(this.__hue_knob), this.domElement.appendChild(this.__input), this.domElement.appendChild(this.__selector), this.updateDisplay();
    };

    s.superclass = t, i.extend(s.prototype, t.prototype, {
      updateDisplay: function updateDisplay() {
        var t = r(this.getValue());

        if (t !== !1) {
          var e = !1;
          i.each(n.COMPONENTS, function (n) {
            return i.isUndefined(t[n]) || i.isUndefined(this.__color.__state[n]) || t[n] === this.__color.__state[n] ? void 0 : (e = !0, {});
          }, this), e && i.extend(this.__color.__state, t);
        }

        i.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1;
        var a = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0,
            s = 255 - a;
        i.extend(this.__field_knob.style, {
          marginLeft: 100 * this.__color.s - 7 + "px",
          marginTop: 100 * (1 - this.__color.v) - 7 + "px",
          backgroundColor: this.__temp.toString(),
          border: this.__field_knob_border + "rgb(" + a + "," + a + "," + a + ")"
        }), this.__hue_knob.style.marginTop = 100 * (1 - this.__color.h / 360) + "px", this.__temp.s = 1, this.__temp.v = 1, o(this.__saturation_field, "left", "#fff", this.__temp.toString()), i.extend(this.__input.style, {
          backgroundColor: this.__input.value = this.__color.toString(),
          color: "rgb(" + a + "," + a + "," + a + ")",
          textShadow: this.__input_textShadow + "rgba(" + s + "," + s + "," + s + ",.7)"
        });
      }
    });
    var u = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
    return s;
  }(n.controllers.Controller, n.dom.dom, n.color.Color = function (t, e, n, r) {
    function i(t, e, n) {
      Object.defineProperty(t, e, {
        get: function get() {
          return "RGB" === this.__state.space ? this.__state[e] : (a(this, e, n), this.__state[e]);
        },
        set: function set(t) {
          "RGB" !== this.__state.space && (a(this, e, n), this.__state.space = "RGB"), this.__state[e] = t;
        }
      });
    }

    function o(t, e) {
      Object.defineProperty(t, e, {
        get: function get() {
          return "HSV" === this.__state.space ? this.__state[e] : (s(this), this.__state[e]);
        },
        set: function set(t) {
          "HSV" !== this.__state.space && (s(this), this.__state.space = "HSV"), this.__state[e] = t;
        }
      });
    }

    function a(t, n, i) {
      if ("HEX" === t.__state.space) t.__state[n] = e.component_from_hex(t.__state.hex, i);else {
        if ("HSV" !== t.__state.space) throw "Corrupted color state";
        r.extend(t.__state, e.hsv_to_rgb(t.__state.h, t.__state.s, t.__state.v));
      }
    }

    function s(t) {
      var n = e.rgb_to_hsv(t.r, t.g, t.b);
      r.extend(t.__state, {
        s: n.s,
        v: n.v
      }), r.isNaN(n.h) ? r.isUndefined(t.__state.h) && (t.__state.h = 0) : t.__state.h = n.h;
    }

    var u = function u() {
      if (this.__state = t.apply(this, arguments), this.__state === !1) throw "Failed to interpret color arguments";
      this.__state.a = this.__state.a || 1;
    };

    return u.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"], r.extend(u.prototype, {
      toString: function toString() {
        return n(this);
      },
      toOriginal: function toOriginal() {
        return this.__state.conversion.write(this);
      }
    }), i(u.prototype, "r", 2), i(u.prototype, "g", 1), i(u.prototype, "b", 0), o(u.prototype, "h"), o(u.prototype, "s"), o(u.prototype, "v"), Object.defineProperty(u.prototype, "a", {
      get: function get() {
        return this.__state.a;
      },
      set: function set(t) {
        this.__state.a = t;
      }
    }), Object.defineProperty(u.prototype, "hex", {
      get: function get() {
        return "HEX" !== !this.__state.space && (this.__state.hex = e.rgb_to_hex(this.r, this.g, this.b)), this.__state.hex;
      },
      set: function set(t) {
        this.__state.space = "HEX", this.__state.hex = t;
      }
    }), u;
  }(n.color.interpret, n.color.math = function () {
    var t;
    return {
      hsv_to_rgb: function hsv_to_rgb(t, e, n) {
        var r = Math.floor(t / 60) % 6,
            i = t / 60 - Math.floor(t / 60),
            o = n * (1 - e),
            a = n * (1 - i * e),
            s = n * (1 - (1 - i) * e),
            u = [[n, s, o], [a, n, o], [o, n, s], [o, a, n], [s, o, n], [n, o, a]][r];
        return {
          r: 255 * u[0],
          g: 255 * u[1],
          b: 255 * u[2]
        };
      },
      rgb_to_hsv: function rgb_to_hsv(t, e, n) {
        var r,
            i,
            o = Math.min(t, e, n),
            a = Math.max(t, e, n),
            s = a - o;
        return 0 == a ? {
          h: NaN,
          s: 0,
          v: 0
        } : (i = s / a, r = t == a ? (e - n) / s : e == a ? 2 + (n - t) / s : 4 + (t - e) / s, r /= 6, 0 > r && (r += 1), {
          h: 360 * r,
          s: i,
          v: a / 255
        });
      },
      rgb_to_hex: function rgb_to_hex(t, e, n) {
        var r = this.hex_with_component(0, 2, t);
        return r = this.hex_with_component(r, 1, e), r = this.hex_with_component(r, 0, n);
      },
      component_from_hex: function component_from_hex(t, e) {
        return t >> 8 * e & 255;
      },
      hex_with_component: function hex_with_component(e, n, r) {
        return r << (t = 8 * n) | e & ~(255 << t);
      }
    };
  }(), n.color.toString, n.utils.common), n.color.interpret, n.utils.common), n.utils.requestAnimationFrame = function () {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
      window.setTimeout(t, 1e3 / 60);
    };
  }(), n.dom.CenteredDiv = function (t, e) {
    var n = function n() {
      this.backgroundElement = document.createElement("div"), e.extend(this.backgroundElement.style, {
        backgroundColor: "rgba(0,0,0,0.8)",
        top: 0,
        left: 0,
        display: "none",
        zIndex: "1000",
        opacity: 0,
        WebkitTransition: "opacity 0.2s linear"
      }), t.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), e.extend(this.domElement.style, {
        position: "fixed",
        display: "none",
        zIndex: "1001",
        opacity: 0,
        WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear"
      }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement);
      var n = this;
      t.bind(this.backgroundElement, "click", function () {
        n.hide();
      });
    };

    return n.prototype.show = function () {
      var t = this;
      this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), e.defer(function () {
        t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)";
      });
    }, n.prototype.hide = function () {
      var e = this,
          n = function n() {
        e.domElement.style.display = "none", e.backgroundElement.style.display = "none", t.unbind(e.domElement, "webkitTransitionEnd", n), t.unbind(e.domElement, "transitionend", n), t.unbind(e.domElement, "oTransitionEnd", n);
      };

      t.bind(this.domElement, "webkitTransitionEnd", n), t.bind(this.domElement, "transitionend", n), t.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)";
    }, n.prototype.layout = function () {
      this.domElement.style.left = window.innerWidth / 2 - t.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - t.getHeight(this.domElement) / 2 + "px";
    }, n;
  }(n.dom.dom, n.utils.common), n.dom.dom, n.utils.common);
}, function (t, e) {
  function n() {
    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
  }

  function r(t) {
    return "function" == typeof t;
  }

  function i(t) {
    return "number" == typeof t;
  }

  function o(t) {
    return "object" == _typeof(t) && null !== t;
  }

  function a(t) {
    return void 0 === t;
  }

  t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (t) {
    if (!i(t) || 0 > t || isNaN(t)) throw TypeError("n must be a positive number");
    return this._maxListeners = t, this;
  }, n.prototype.emit = function (t) {
    var e, n, i, s, u, l;

    if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
      if (e = arguments[1], e instanceof Error) throw e;
      var c = new Error('Uncaught, unspecified "error" event. (' + e + ")");
      throw c.context = e, c;
    }

    if (n = this._events[t], a(n)) return !1;
    if (r(n)) switch (arguments.length) {
      case 1:
        n.call(this);
        break;

      case 2:
        n.call(this, arguments[1]);
        break;

      case 3:
        n.call(this, arguments[1], arguments[2]);
        break;

      default:
        s = Array.prototype.slice.call(arguments, 1), n.apply(this, s);
    } else if (o(n)) for (s = Array.prototype.slice.call(arguments, 1), l = n.slice(), i = l.length, u = 0; i > u; u++) {
      l[u].apply(this, s);
    }
    return !0;
  }, n.prototype.addListener = function (t, e) {
    var i;
    if (!r(e)) throw TypeError("listener must be a function");
    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (i = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, i && i > 0 && this._events[t].length > i && (this._events[t].warned = !0, "function" == typeof console.trace)), this;
  }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (t, e) {
    function n() {
      this.removeListener(t, n), i || (i = !0, e.apply(this, arguments));
    }

    if (!r(e)) throw TypeError("listener must be a function");
    var i = !1;
    return n.listener = e, this.on(t, n), this;
  }, n.prototype.removeListener = function (t, e) {
    var n, i, a, s;
    if (!r(e)) throw TypeError("listener must be a function");
    if (!this._events || !this._events[t]) return this;
    if (n = this._events[t], a = n.length, i = -1, n === e || r(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);else if (o(n)) {
      for (s = a; s-- > 0;) {
        if (n[s] === e || n[s].listener && n[s].listener === e) {
          i = s;
          break;
        }
      }

      if (0 > i) return this;
      1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e);
    }
    return this;
  }, n.prototype.removeAllListeners = function (t) {
    var e, n;
    if (!this._events) return this;
    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;

    if (0 === arguments.length) {
      for (e in this._events) {
        "removeListener" !== e && this.removeAllListeners(e);
      }

      return this.removeAllListeners("removeListener"), this._events = {}, this;
    }

    if (n = this._events[t], r(n)) this.removeListener(t, n);else if (n) for (; n.length;) {
      this.removeListener(t, n[n.length - 1]);
    }
    return delete this._events[t], this;
  }, n.prototype.listeners = function (t) {
    var e;
    return e = this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [];
  }, n.prototype.listenerCount = function (t) {
    if (this._events) {
      var e = this._events[t];
      if (r(e)) return 1;
      if (e) return e.length;
    }

    return 0;
  }, n.listenerCount = function (t, e) {
    return t.listenerCount(e);
  };
}, function (t, e) {}, function (t, e) {
  t.exports = "// copy.frag\nprecision highp float;\n#define GLSLIFY 1\n\nvoid main(void) {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n}";
}, function (t, e) {
  t.exports = "// basic.vert\n\nprecision highp float;\n#define GLSLIFY 1\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec3 aNormal;\n\nuniform mat4 uModelMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\n\nuniform float uOutlineWidth;\nuniform float uOutlineNoise;\nuniform float uOutlineNoiseStrength;\nuniform float uTime;\n\nvarying vec2 vTextureCoord;\nvarying vec3 vNormal;\n\n\nvec4 permute(vec4 x) {  return mod(((x*34.0)+1.0)*x, 289.0);    }\nvec4 taylorInvSqrt(vec4 r) {    return 1.79284291400159 - 0.85373472095314 * r; }\n\nfloat snoise(vec3 v){\n	const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n	const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n	\n	vec3 i  = floor(v + dot(v, C.yyy) );\n	vec3 x0 = v - i + dot(i, C.xxx) ;\n	\n	vec3 g = step(x0.yzx, x0.xyz);\n	vec3 l = 1.0 - g;\n	vec3 i1 = min( g.xyz, l.zxy );\n	vec3 i2 = max( g.xyz, l.zxy );\n	\n	vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n	vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n	vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n	\n	i = mod(i, 289.0 );\n	vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n	\n	float n_ = 1.0/7.0;\n	vec3  ns = n_ * D.wyz - D.xzx;\n	\n	vec4 j = p - 49.0 * floor(p * ns.z *ns.z);\n	\n	vec4 x_ = floor(j * ns.z);\n	vec4 y_ = floor(j - 7.0 * x_ );\n	\n	vec4 x = x_ *ns.x + ns.yyyy;\n	vec4 y = y_ *ns.x + ns.yyyy;\n	vec4 h = 1.0 - abs(x) - abs(y);\n	\n	vec4 b0 = vec4( x.xy, y.xy );\n	vec4 b1 = vec4( x.zw, y.zw );\n	\n	vec4 s0 = floor(b0)*2.0 + 1.0;\n	vec4 s1 = floor(b1)*2.0 + 1.0;\n	vec4 sh = -step(h, vec4(0.0));\n	\n	vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n	vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n	\n	vec3 p0 = vec3(a0.xy,h.x);\n	vec3 p1 = vec3(a0.zw,h.y);\n	vec3 p2 = vec3(a1.xy,h.z);\n	vec3 p3 = vec3(a1.zw,h.w);\n	\n	vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n	p0 *= norm.x;\n	p1 *= norm.y;\n	p2 *= norm.z;\n	p3 *= norm.w;\n	\n	vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n	m = m * m;\n	return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );\n}\n\nfloat snoise(float x, float y, float z){\n	return snoise(vec3(x, y, z));\n}\n\nvoid main(void) {\n	vec3 position = aVertexPosition;\n\n	vec4 orgPos = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 1.0);\n	float noise = snoise(vec3(orgPos.xyz * uOutlineNoise) + vec3(0.0, 0.0, uTime));\n	noise = noise * uOutlineNoiseStrength + 1.0;\n	position += aNormal * uOutlineWidth * noise;\n\n	gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(position, 1.0);\n	vTextureCoord = aTextureCoord;\n	vNormal = aNormal;\n}";
}, function (t, e) {
  var n = function n() {
    function t(t) {
      return i.appendChild(t.dom), t;
    }

    function e(t) {
      for (var e = 0; e < i.children.length; e++) {
        i.children[e].style.display = e === t ? "block" : "none";
      }

      r = t;
    }

    var r = 0,
        i = document.createElement("div");
    i.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", i.addEventListener("click", function (t) {
      t.preventDefault(), e(++r % i.children.length);
    }, !1);
    var o = (performance || Date).now(),
        a = o,
        s = 0,
        u = t(new n.Panel("FPS", "#0ff", "#002")),
        l = t(new n.Panel("MS", "#0f0", "#020"));
    if (self.performance && self.performance.memory) var c = t(new n.Panel("MB", "#f08", "#201"));
    return e(0), {
      REVISION: 16,
      dom: i,
      addPanel: t,
      showPanel: e,
      begin: function begin() {
        o = (performance || Date).now();
      },
      end: function end() {
        s++;
        var t = (performance || Date).now();

        if (l.update(t - o, 200), t > a + 1e3 && (u.update(1e3 * s / (t - a), 100), a = t, s = 0, c)) {
          var e = performance.memory;
          c.update(e.usedJSHeapSize / 1048576, e.jsHeapSizeLimit / 1048576);
        }

        return t;
      },
      update: function update() {
        o = this.end();
      },
      domElement: i,
      setMode: e
    };
  };

  n.Panel = function (t, e, n) {
    var r = 1 / 0,
        i = 0,
        o = Math.round,
        a = o(window.devicePixelRatio || 1),
        s = 80 * a,
        u = 48 * a,
        l = 3 * a,
        c = 2 * a,
        f = 3 * a,
        h = 15 * a,
        d = 74 * a,
        p = 30 * a,
        _ = document.createElement("canvas");

    _.width = s, _.height = u, _.style.cssText = "width:80px;height:48px";

    var v = _.getContext("2d");

    return v.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", v.textBaseline = "top", v.fillStyle = n, v.fillRect(0, 0, s, u), v.fillStyle = e, v.fillText(t, l, c), v.fillRect(f, h, d, p), v.fillStyle = n, v.globalAlpha = .9, v.fillRect(f, h, d, p), {
      dom: _,
      update: function update(u, m) {
        r = Math.min(r, u), i = Math.max(i, u), v.fillStyle = n, v.globalAlpha = 1, v.fillRect(0, 0, s, h), v.fillStyle = e, v.fillText(o(u) + " " + t + " (" + o(r) + "-" + o(i) + ")", l, c), v.drawImage(_, f + a, h, d - a, p, f, h, d - a, p), v.fillRect(f + d - a, h, a, p), v.fillStyle = n, v.globalAlpha = .9, v.fillRect(f + d - a, h, a, o((1 - u / m) * p));
      }
    };
  }, "object" == _typeof(t) && (t.exports = n);
}]);