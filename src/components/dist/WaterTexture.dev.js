"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaterTexture = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WaterTexture =
/*#__PURE__*/
function () {
  function WaterTexture(options) {
    _classCallCheck(this, WaterTexture);

    this.size = 64;
    this.radius = this.size * 0.1;
    this.width = this.height = this.size;

    if (options.debug) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.radius = this.width * 0.05;
    }

    this.initTexture();
    if (options.debug) document.body.append(this.canvas);
  } // Initialize our canvas


  _createClass(WaterTexture, [{
    key: "initTexture",
    value: function initTexture() {
      this.canvas = document.createElement("canvas");
      this.canvas.id = "WaterTexture";
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.ctx = this.canvas.getContext("2d");
      this.clear();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "update",
    value: function update() {}
  }]);

  return WaterTexture;
}();

exports.WaterTexture = WaterTexture;