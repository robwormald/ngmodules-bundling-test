import { root } from '../util/root';
/**
 * @param PromiseCtor
 * @return {Promise<T>}
 * @method toPromise
 * @owner Observable
 */
export function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root.Rx && root.Rx.config && root.Rx.config.Promise) {
            PromiseCtor = root.Rx.config.Promise;
        }
        else if (root.Promise) {
            PromiseCtor = root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
//# sourceMappingURL=toPromise.js.map