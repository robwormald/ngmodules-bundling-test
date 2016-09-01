import { Component, Input } from '@angular/core';
export var GeneratedComponent000122 = (function () {
    function GeneratedComponent000122() {
        this.myName = "000122";
    }
    GeneratedComponent000122.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000122',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000244 [parentName]=\"myName\"></my-comp-000244>\n      <my-comp-000245 [parentName]=\"myName\"></my-comp-000245>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000122.ctorParameters = [];
    GeneratedComponent000122.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000122;
}());
