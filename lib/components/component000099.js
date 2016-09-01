import { Component, Input } from '@angular/core';
export var GeneratedComponent000099 = (function () {
    function GeneratedComponent000099() {
        this.myName = "000099";
    }
    GeneratedComponent000099.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000099',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000198 [parentName]=\"myName\"></my-comp-000198>\n      <my-comp-000199 [parentName]=\"myName\"></my-comp-000199>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000099.ctorParameters = [];
    GeneratedComponent000099.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000099;
}());
