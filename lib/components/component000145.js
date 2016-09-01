import { Component, Input } from '@angular/core';
export var GeneratedComponent000145 = (function () {
    function GeneratedComponent000145() {
        this.myName = "000145";
    }
    GeneratedComponent000145.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000145',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000290 [parentName]=\"myName\"></my-comp-000290>\n      <my-comp-000291 [parentName]=\"myName\"></my-comp-000291>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000145.ctorParameters = [];
    GeneratedComponent000145.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000145;
}());
