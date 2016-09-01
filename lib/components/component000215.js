import { Component, Input } from '@angular/core';
export var GeneratedComponent000215 = (function () {
    function GeneratedComponent000215() {
        this.myName = "000215";
    }
    GeneratedComponent000215.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000215',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000430 [parentName]=\"myName\"></my-comp-000430>\n      <my-comp-000431 [parentName]=\"myName\"></my-comp-000431>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000215.ctorParameters = [];
    GeneratedComponent000215.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000215;
}());
