import { Component, Input } from '@angular/core';
export var GeneratedComponent000202 = (function () {
    function GeneratedComponent000202() {
        this.myName = "000202";
    }
    GeneratedComponent000202.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000202',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000404 [parentName]=\"myName\"></my-comp-000404>\n      <my-comp-000405 [parentName]=\"myName\"></my-comp-000405>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000202.ctorParameters = [];
    GeneratedComponent000202.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000202;
}());
