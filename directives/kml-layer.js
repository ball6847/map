import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
var INPUTS = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex', 'options'];
var OUTPUTS = ['click', 'defaultviewport_changed', 'status_changed'];
var KmlLayer = /** @class */ (function (_super) {
    tslib_1.__extends(KmlLayer, _super);
    function KmlLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'KmlLayer', INPUTS, OUTPUTS) || this;
    }
    KmlLayer.decorators = [
        { type: Directive, args: [{
                    selector: 'ngui-map > kml-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    KmlLayer.ctorParameters = function () { return [
        { type: NguiMapComponent, },
    ]; };
    return KmlLayer;
}(BaseMapDirective));
export { KmlLayer };
//# sourceMappingURL=kml-layer.js.map