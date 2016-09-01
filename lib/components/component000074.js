import { Component, Input } from '@angular/core';
export var GeneratedComponent000074 = (function () {
    function GeneratedComponent000074() {
        this.myName = "000074";
    }
    GeneratedComponent000074.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000074',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000148 [parentName]=\"myName\"></my-comp-000148>\n      <my-comp-000149 [parentName]=\"myName\"></my-comp-000149>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000074.ctorParameters = [];
    GeneratedComponent000074.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000074;
}());
