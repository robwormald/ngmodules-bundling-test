var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Observable } from '../Observable';
import { ScalarObservable } from './ScalarObservable';
import { EmptyObservable } from './EmptyObservable';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export var ArrayLikeObservable = (function (_super) {
    __extends(ArrayLikeObservable, _super);
    function ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler) {
        _super.call(this);
        this.arrayLike = arrayLike;
        this.scheduler = scheduler;
        if (!mapFn && !scheduler && arrayLike.length === 1) {
            this._isScalar = true;
            this.value = arrayLike[0];
        }
        if (mapFn) {
            this.mapFn = mapFn.bind(thisArg);
        }
    }
    ArrayLikeObservable.create = function (arrayLike, mapFn, thisArg, scheduler) {
        var length = arrayLike.length;
        if (length === 0) {
            return new EmptyObservable();
        }
        else if (length === 1 && !mapFn) {
            return new ScalarObservable(arrayLike[0], scheduler);
        }
        else {
            return new ArrayLikeObservable(arrayLike, mapFn, thisArg, scheduler);
        }
    };
    ArrayLikeObservable.dispatch = function (state) {
        var arrayLike = state.arrayLike, index = state.index, length = state.length, mapFn = state.mapFn, subscriber = state.subscriber;
        if (subscriber.closed) {
            return;
        }
        if (index >= length) {
            subscriber.complete();
            return;
        }
        var result = mapFn ? mapFn(arrayLike[index], index) : arrayLike[index];
        subscriber.next(result);
        state.index = index + 1;
        this.schedule(state);
    };
    ArrayLikeObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, arrayLike = _a.arrayLike, mapFn = _a.mapFn, scheduler = _a.scheduler;
        var length = arrayLike.length;
        if (scheduler) {
            return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
                arrayLike: arrayLike, index: index, length: length, mapFn: mapFn, subscriber: subscriber
            });
        }
        else {
            for (var i = 0; i < length && !subscriber.closed; i++) {
                var result = mapFn ? mapFn(arrayLike[i], i) : arrayLike[i];
                subscriber.next(result);
            }
            subscriber.complete();
        }
    };
    return ArrayLikeObservable;
}(Observable));
//# sourceMappingURL=ArrayLikeObservable.js.map