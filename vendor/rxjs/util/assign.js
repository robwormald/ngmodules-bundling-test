import { root } from './root';
var Object = root.Object;
if (typeof Object.assign != 'function') {
    (function () {
        Object.assign = function assignPolyfill(target) {
            var sources = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                sources[_i - 1] = arguments[_i];
            }
            if (target === undefined || target === null) {
                throw new TypeError('cannot convert undefined or null to object');
            }
            var output = Object(target);
            var len = sources.length;
            for (var index = 0; index < len; index++) {
                var source = sources[index];
                if (source !== undefined && source !== null) {
                    for (var key in source) {
                        if (source.hasOwnProperty(key)) {
                            output[key] = source[key];
                        }
                    }
                }
            }
            return output;
        };
    })();
}
export var assign = Object.assign;
//# sourceMappingURL=assign.js.map