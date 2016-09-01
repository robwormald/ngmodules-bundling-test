import { Component, Input } from '@angular/core';
export var GeneratedComponent000248 = (function () {
    function GeneratedComponent000248() {
        this.myName = "000248";
    }
    GeneratedComponent000248.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000248',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000496 [parentName]=\"myName\"></my-comp-000496>\n      <my-comp-000497 [parentName]=\"myName\"></my-comp-000497>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000248.ctorParameters = [];
    GeneratedComponent000248.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000248;
}());
