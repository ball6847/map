import * as tslib_1 from "tslib";
import { Injectable, Inject, Optional, NgZone } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { NG_MAP_CONFIG_TOKEN } from './config';
import { isMapsApiLoaded } from './util';
import { first } from 'rxjs/operator/first';
var NgMapApiLoader = /** @class */ (function () {
    function NgMapApiLoader(config) {
        this.config = config;
        this.api$ = first.call(new ReplaySubject(1));
        this.config = this.config || { apiUrl: 'https://maps.google.com/maps/api/js' };
    }
    NgMapApiLoader.prototype.ngOnDestroy = function () {
        this.api$.complete();
    };
    return NgMapApiLoader;
}());
export { NgMapApiLoader };
var NgMapAsyncCallbackApiLoader = /** @class */ (function (_super) {
    tslib_1.__extends(NgMapAsyncCallbackApiLoader, _super);
    function NgMapAsyncCallbackApiLoader(zone, config) {
        var _this = _super.call(this, config) || this;
        _this.zone = zone;
        return _this;
    }
    NgMapAsyncCallbackApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            window['nguiMapRef'] = window['nguiMapRef'] || [];
            window['nguiMapRef'].push({ zone: this.zone, componentFn: function () { return _this.api$.next(google.maps); } });
            this.addGoogleMapsApi();
        }
    };
    NgMapAsyncCallbackApiLoader.prototype.addGoogleMapsApi = function () {
        window['initNguiMap'] = window['initNguiMap'] || function () {
            window['nguiMapRef'].forEach(function (nguiMapRef) {
                nguiMapRef.zone.run(function () { nguiMapRef.componentFn(); });
            });
            window['nguiMapRef'].splice(0, window['nguiMapRef'].length);
        };
        var script = document.createElement('script');
        script.id = 'ngui-map-api';
        // script.src = "https://maps.google.com/maps/api/js?callback=initNguiMap";
        var apiUrl = this.config.apiUrl;
        apiUrl += apiUrl.indexOf('?') !== -1 ? '&' : '?';
        script.src = apiUrl + 'callback=initNguiMap';
        document.querySelector('body').appendChild(script);
    };
    NgMapAsyncCallbackApiLoader.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgMapAsyncCallbackApiLoader.ctorParameters = function () { return [
        { type: NgZone, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NG_MAP_CONFIG_TOKEN,] },] },
    ]; };
    return NgMapAsyncCallbackApiLoader;
}(NgMapApiLoader));
export { NgMapAsyncCallbackApiLoader };
var NgMapAsyncApiLoader = /** @class */ (function (_super) {
    tslib_1.__extends(NgMapAsyncApiLoader, _super);
    function NgMapAsyncApiLoader(config) {
        return _super.call(this, config) || this;
    }
    NgMapAsyncApiLoader.prototype.load = function () {
        var _this = this;
        if (typeof window === 'undefined') {
            return;
        }
        if (isMapsApiLoaded()) {
            this.api$.next(google.maps);
        }
        else if (!document.querySelector('#ngui-map-api')) {
            var script = document.createElement('script');
            script.id = 'ngui-map-api';
            script.async = true;
            script.onload = function () { return _this.api$.next(google.maps); };
            script.src = this.config.apiUrl;
            document.querySelector('body').appendChild(script);
        }
    };
    NgMapAsyncApiLoader.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgMapAsyncApiLoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NG_MAP_CONFIG_TOKEN,] },] },
    ]; };
    return NgMapAsyncApiLoader;
}(NgMapApiLoader));
export { NgMapAsyncApiLoader };
//# sourceMappingURL=api-loader.js.map