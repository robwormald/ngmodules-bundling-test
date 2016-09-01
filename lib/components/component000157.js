import { Component, Input } from '@angular/core';
export var GeneratedComponent000157 = (function () {
    function GeneratedComponent000157() {
        this.myName = "000157";
    }
    GeneratedComponent000157.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000157',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000314 [parentName]=\"myName\"></my-comp-000314>\n      <my-comp-000315 [parentName]=\"myName\"></my-comp-000315>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000157.ctorParameters = [];
    GeneratedComponent000157.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000157;
}());
