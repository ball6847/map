import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
var INPUTS = [];
var OUTPUTS = [];
var TransitLayer = /** @class */ (function (_super) {
    tslib_1.__extends(TransitLayer, _super);
    // declare INPUTS for AOT compiler
    // declare OUTPUTS for AOT compiler
    function TransitLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TransitLayer', INPUTS, OUTPUTS) || this;
    }
    TransitLayer.decorators = [
        { type: Directive, args: [{
                    selector: 'ngui-map > transit-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    TransitLayer.ctorParameters = function () { return [
        { type: NguiMapComponent, },
    ]; };
    return TransitLayer;
}(BaseMapDirective));
export { TransitLayer };
//# sourceMappingURL=transit-layer.js.map