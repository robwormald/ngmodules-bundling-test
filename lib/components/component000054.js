import { Component, Input } from '@angular/core';
export var GeneratedComponent000054 = (function () {
    function GeneratedComponent000054() {
        this.myName = "000054";
    }
    GeneratedComponent000054.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000054',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000108 [parentName]=\"myName\"></my-comp-000108>\n      <my-comp-000109 [parentName]=\"myName\"></my-comp-000109>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000054.ctorParameters = [];
    GeneratedComponent000054.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000054;
}());
