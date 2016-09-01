import { Component, Input } from '@angular/core';
export var GeneratedComponent000199 = (function () {
    function GeneratedComponent000199() {
        this.myName = "000199";
    }
    GeneratedComponent000199.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000199',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000398 [parentName]=\"myName\"></my-comp-000398>\n      <my-comp-000399 [parentName]=\"myName\"></my-comp-000399>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000199.ctorParameters = [];
    GeneratedComponent000199.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000199;
}());
