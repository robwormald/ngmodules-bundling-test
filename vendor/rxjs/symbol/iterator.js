import { root } from '../util/root';
export var $$iterator;
var Symbol = root.Symbol;
if (typeof Symbol === 'function') {
    if (Symbol.iterator) {
        $$iterator = Symbol.iterator;
    }
    else if (typeof Symbol.for === 'function') {
        $$iterator = Symbol.for('iterator');
    }
}
else {
    if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
        // Bug for mozilla version
        $$iterator = '@@iterator';
    }
    else if (root.Map) {
        // es6-shim specific logic
        var keys = Object.getOwnPropertyNames(root.Map.prototype);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (key !== 'entries' && key !== 'size' && root.Map.prototype[key] === root.Map.prototype['entries']) {
                $$iterator = key;
                break;
            }
        }
    }
    else {
        $$iterator = '@@iterator';
    }
}
//# sourceMappingURL=iterator.js.map