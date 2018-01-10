import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/**
 *  service for navigator.geolocation methods
 */
var NavigatorGeolocation = /** @class */ (function () {
    function NavigatorGeolocation() {
    }
    NavigatorGeolocation.prototype.getCurrentPosition = function (geoLocationOptions) {
        geoLocationOptions = geoLocationOptions || { timeout: 5000 };
        return new Observable(function (responseObserver) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    responseObserver.next(position);
                    responseObserver.complete();
                }, function (evt) { return responseObserver.error(evt); }, geoLocationOptions);
            }
            else {
                responseObserver.error('Browser Geolocation service failed.');
            }
        });
    };
    NavigatorGeolocation.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NavigatorGeolocation.ctorParameters = function () { return []; };
    return NavigatorGeolocation;
}());
export { NavigatorGeolocation };
//# sourceMappingURL=navigator-geolocation.js.map