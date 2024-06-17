'use strict';

var react = require('@pixi/react');
var animated$1 = require('@react-spring/animated');

var primitives = Object.keys(react.TYPES);
var host = animated$1.createHost(primitives, {
  // eslint-disable-next-line consistent-return
  applyAnimatedValues: function applyAnimatedValues(instance, props) {
    if (!(instance.nodeType || instance.pluginName)) {
      return false;
    }
    var applyProps = typeof (instance === null || instance === void 0 ? void 0 : instance.applyProps) === 'function' ? instance.applyProps : react.applyDefaultProps;
    applyProps(instance, {}, props);
  }
});
var animated = host.animated;

var BitmapText = animated[react.TYPES.BitmapText];
var Container = animated[react.TYPES.Container];
var Graphics = animated[react.TYPES.Graphics];
var NineSlicePlane = animated[react.TYPES.NineSlicePlane];
var ParticleContainer = animated[react.TYPES.ParticleContainer];
var Sprite = animated[react.TYPES.Sprite];
var AnimatedSprite = animated[react.TYPES.AnimatedSprite];
var Text = animated[react.TYPES.Text];
var TilingSprite = animated[react.TYPES.TilingSprite];
var SimpleMesh = animated[react.TYPES.SimpleMesh];
var SimpleRope = animated[react.TYPES.SimpleRope];

exports.AnimatedSprite = AnimatedSprite;
exports.BitmapText = BitmapText;
exports.Container = Container;
exports.Graphics = Graphics;
exports.NineSlicePlane = NineSlicePlane;
exports.ParticleContainer = ParticleContainer;
exports.SimpleMesh = SimpleMesh;
exports.SimpleRope = SimpleRope;
exports.Sprite = Sprite;
exports.Text = Text;
exports.TilingSprite = TilingSprite;
//# sourceMappingURL=index.cjs-dev.js.map
