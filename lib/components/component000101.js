import { Component, Input } from '@angular/core';
export var GeneratedComponent000101 = (function () {
    function GeneratedComponent000101() {
        this.myName = "000101";
    }
    GeneratedComponent000101.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000101',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000202 [parentName]=\"myName\"></my-comp-000202>\n      <my-comp-000203 [parentName]=\"myName\"></my-comp-000203>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000101.ctorParameters = [];
    GeneratedComponent000101.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000101;
}());
