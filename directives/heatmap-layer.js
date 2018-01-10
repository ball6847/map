import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
var INPUTS = ['data', 'dissipating', 'gradient', 'maxIntensity', 'opacity', 'radius', 'options'];
var OUTPUTS = [];
var HeatmapLayer = /** @class */ (function (_super) {
    tslib_1.__extends(HeatmapLayer, _super);
    function HeatmapLayer(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'HeatmapLayer', INPUTS, OUTPUTS) || this;
        // declare OUTPUTS for AOT compiler
        _this.libraryName = 'visualization';
        return _this;
    }
    HeatmapLayer.decorators = [
        { type: Directive, args: [{
                    selector: 'ngui-map > heatmap-layer',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    HeatmapLayer.ctorParameters = function () { return [
        { type: NguiMapComponent, },
    ]; };
    return HeatmapLayer;
}(BaseMapDirective));
export { HeatmapLayer };
//# sourceMappingURL=heatmap-layer.js.map