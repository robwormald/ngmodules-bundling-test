import { Component, Input } from '@angular/core';
export var GeneratedComponent000160 = (function () {
    function GeneratedComponent000160() {
        this.myName = "000160";
    }
    GeneratedComponent000160.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000160',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000320 [parentName]=\"myName\"></my-comp-000320>\n      <my-comp-000321 [parentName]=\"myName\"></my-comp-000321>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000160.ctorParameters = [];
    GeneratedComponent000160.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000160;
}());
