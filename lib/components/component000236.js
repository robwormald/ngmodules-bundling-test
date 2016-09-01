import { Component, Input } from '@angular/core';
export var GeneratedComponent000236 = (function () {
    function GeneratedComponent000236() {
        this.myName = "000236";
    }
    GeneratedComponent000236.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000236',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000472 [parentName]=\"myName\"></my-comp-000472>\n      <my-comp-000473 [parentName]=\"myName\"></my-comp-000473>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000236.ctorParameters = [];
    GeneratedComponent000236.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000236;
}());
