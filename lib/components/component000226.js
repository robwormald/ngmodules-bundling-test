import { Component, Input } from '@angular/core';
export var GeneratedComponent000226 = (function () {
    function GeneratedComponent000226() {
        this.myName = "000226";
    }
    GeneratedComponent000226.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000226',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000452 [parentName]=\"myName\"></my-comp-000452>\n      <my-comp-000453 [parentName]=\"myName\"></my-comp-000453>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000226.ctorParameters = [];
    GeneratedComponent000226.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000226;
}());
