import { Component, Input } from '@angular/core';
export var GeneratedComponent000229 = (function () {
    function GeneratedComponent000229() {
        this.myName = "000229";
    }
    GeneratedComponent000229.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000229',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000458 [parentName]=\"myName\"></my-comp-000458>\n      <my-comp-000459 [parentName]=\"myName\"></my-comp-000459>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000229.ctorParameters = [];
    GeneratedComponent000229.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000229;
}());
