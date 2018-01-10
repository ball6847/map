import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
var INPUTS = [];
var OUTPUTS = [];
var BicyclingLayer = /** @class */ (function (_super) {
    tslib_1.__extends(BicyclingLayer, _super);
    // declare INPUTS for AOT compiler
    // declare OUTPUTS for AOT compiler
    function BicyclingLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'BicyclingLayer', INPUTS, OUTPUTS) || this;
    }
    BicyclingLayer.decorators = [
        { type: Directive, args: [{
                    selector: 'ngui-map > bicycling-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    BicyclingLayer.ctorParameters = function () { return [
        { type: NguiMapComponent, },
    ]; };
    return BicyclingLayer;
}(BaseMapDirective));
export { BicyclingLayer };
//# sourceMappingURL=bicycling-layer.js.map