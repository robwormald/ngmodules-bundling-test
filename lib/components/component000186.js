import { Component, Input } from '@angular/core';
export var GeneratedComponent000186 = (function () {
    function GeneratedComponent000186() {
        this.myName = "000186";
    }
    GeneratedComponent000186.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000186',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000372 [parentName]=\"myName\"></my-comp-000372>\n      <my-comp-000373 [parentName]=\"myName\"></my-comp-000373>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000186.ctorParameters = [];
    GeneratedComponent000186.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000186;
}());
