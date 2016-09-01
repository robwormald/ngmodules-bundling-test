import { Component, Input } from '@angular/core';
export var GeneratedComponent000123 = (function () {
    function GeneratedComponent000123() {
        this.myName = "000123";
    }
    GeneratedComponent000123.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000123',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000246 [parentName]=\"myName\"></my-comp-000246>\n      <my-comp-000247 [parentName]=\"myName\"></my-comp-000247>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000123.ctorParameters = [];
    GeneratedComponent000123.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000123;
}());
