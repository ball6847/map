import { Input, Output, Directive, EventEmitter, ElementRef, } from '@angular/core';
import { NgMapApiLoader } from '../services/api-loader';
import { OptionBuilder } from '../services/option-builder';
var PlacesAutoComplete = /** @class */ (function () {
    function PlacesAutoComplete(optionBuilder, elementRef, apiLoader) {
        var _this = this;
        this.optionBuilder = optionBuilder;
        this.elementRef = elementRef;
        this.apiLoader = apiLoader;
        this.place_changed = new EventEmitter();
        this.initialized$ = new EventEmitter();
        // only called when map is ready
        this.initialize = function () {
            _this.objectOptions =
                _this.optionBuilder.googlizeAllInputs(['bounds', 'componentRestrictions', 'types'], _this);
            _this.autocomplete = new google.maps.places.Autocomplete(_this.elementRef.nativeElement, _this.objectOptions);
            _this.autocomplete.addListener('place_changed', function (place) {
                _this.place_changed.emit(_this.autocomplete.getPlace());
            });
            _this.initialized$.emit(_this.autocomplete);
        };
        apiLoader.load();
        apiLoader.api$.subscribe(function () { return _this.initialize(); });
    }
    PlacesAutoComplete.decorators = [
        { type: Directive, args: [{
                    selector: '[places-auto-complete]'
                },] },
    ];
    /** @nocollapse */
    PlacesAutoComplete.ctorParameters = function () { return [
        { type: OptionBuilder, },
        { type: ElementRef, },
        { type: NgMapApiLoader, },
    ]; };
    PlacesAutoComplete.propDecorators = {
        'bounds': [{ type: Input, args: ['bounds',] },],
        'componentRestrictions': [{ type: Input, args: ['componentRestrictions',] },],
        'types': [{ type: Input, args: ['types',] },],
        'place_changed': [{ type: Output, args: ['place_changed',] },],
        'initialized$': [{ type: Output },],
    };
    return PlacesAutoComplete;
}());
export { PlacesAutoComplete };
//# sourceMappingURL=places-auto-complete.js.map