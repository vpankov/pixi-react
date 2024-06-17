import { applyDefaultProps, TYPES } from '@pixi/react';
import { createHost } from '@react-spring/animated';

var primitives = Object.keys(TYPES);
var host = createHost(primitives, {
  // eslint-disable-next-line consistent-return
  applyAnimatedValues: function applyAnimatedValues(instance, props) {
    if (!(instance.nodeType || instance.pluginName)) {
      return false;
    }
    var applyProps = typeof (instance === null || instance === void 0 ? void 0 : instance.applyProps) === 'function' ? instance.applyProps : applyDefaultProps;
    applyProps(instance, {}, props);
  }
});
var animated = host.animated;

var BitmapText = animated[TYPES.BitmapText];
var Container = animated[TYPES.Container];
var Graphics = animated[TYPES.Graphics];
var NineSlicePlane = animated[TYPES.NineSlicePlane];
var ParticleContainer = animated[TYPES.ParticleContainer];
var Sprite = animated[TYPES.Sprite];
var AnimatedSprite = animated[TYPES.AnimatedSprite];
var Text = animated[TYPES.Text];
var TilingSprite = animated[TYPES.TilingSprite];
var SimpleMesh = animated[TYPES.SimpleMesh];
var SimpleRope = animated[TYPES.SimpleRope];

export { AnimatedSprite, BitmapText, Container, Graphics, NineSlicePlane, ParticleContainer, SimpleMesh, SimpleRope, Sprite, Text, TilingSprite };
//# sourceMappingURL=index.es-dev.js.map
