import { Component, Input } from '@angular/core';
export var GeneratedComponent000135 = (function () {
    function GeneratedComponent000135() {
        this.myName = "000135";
    }
    GeneratedComponent000135.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000135',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000270 [parentName]=\"myName\"></my-comp-000270>\n      <my-comp-000271 [parentName]=\"myName\"></my-comp-000271>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000135.ctorParameters = [];
    GeneratedComponent000135.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000135;
}());
