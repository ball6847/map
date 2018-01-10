import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { BaseMapDirective } from './base-map-directive';
import { NguiMapComponent } from '../components/ngui-map.component';
var INPUTS = [
    'options',
    'circleOptions', 'drawingControl', 'drawingControlOptions', 'drawingMode',
    'map', 'markerOptions', 'polygonOptions', 'polylineOptions', 'rectangleOptions'
];
var OUTPUTS = [
    'circlecomplete', 'markercomplete', 'overlaycomplete',
    'polygoncomplete', 'polylinecomplete', 'rectanglecomplete'
];
var DrawingManager = /** @class */ (function (_super) {
    tslib_1.__extends(DrawingManager, _super);
    function DrawingManager(nguiMapComp) {
        var _this = _super.call(this, nguiMapComp, 'DrawingManager', INPUTS, OUTPUTS) || this;
        _this.libraryName = 'drawing';
        return _this;
    }
    DrawingManager.decorators = [
        { type: Directive, args: [{
                    selector: 'ngui-map > drawing-manager',
                    inputs: INPUTS,
                    outputs: OUTPUTS,
                },] },
    ];
    /** @nocollapse */
    DrawingManager.ctorParameters = function () { return [
        { type: NguiMapComponent, },
    ]; };
    return DrawingManager;
}(BaseMapDirective));
export { DrawingManager };
//# sourceMappingURL=drawing-manager.js.map