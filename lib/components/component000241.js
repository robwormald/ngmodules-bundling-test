import { Component, Input } from '@angular/core';
export var GeneratedComponent000241 = (function () {
    function GeneratedComponent000241() {
        this.myName = "000241";
    }
    GeneratedComponent000241.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000241',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000482 [parentName]=\"myName\"></my-comp-000482>\n      <my-comp-000483 [parentName]=\"myName\"></my-comp-000483>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000241.ctorParameters = [];
    GeneratedComponent000241.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000241;
}());
