import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
var INPUTS = ['autoRefresh', 'options'];
var OUTPUTS = [];
var TrafficLayer = /** @class */ (function (_super) {
    tslib_1.__extends(TrafficLayer, _super);
    // declare OUTPUTS for AOT compiler
    function TrafficLayer(nguiMapComp) {
        return _super.call(this, nguiMapComp, 'TrafficLayer', INPUTS, OUTPUTS) || this;
    }
    TrafficLayer.decorators = [
        { type: Directive, args: [{
                    selector: 'ngui-map > traffic-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    TrafficLayer.ctorParameters = function () { return [
        { type: NguiMapComponent, },
    ]; };
    return TrafficLayer;
}(BaseMapDirective));
export { TrafficLayer };
//# sourceMappingURL=traffic-layer.js.map