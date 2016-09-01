import { Component, Input } from '@angular/core';
export var GeneratedComponent000170 = (function () {
    function GeneratedComponent000170() {
        this.myName = "000170";
    }
    GeneratedComponent000170.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000170',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000340 [parentName]=\"myName\"></my-comp-000340>\n      <my-comp-000341 [parentName]=\"myName\"></my-comp-000341>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000170.ctorParameters = [];
    GeneratedComponent000170.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000170;
}());
