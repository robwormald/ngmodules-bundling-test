import { Component, Input } from '@angular/core';
export var GeneratedComponent000125 = (function () {
    function GeneratedComponent000125() {
        this.myName = "000125";
    }
    GeneratedComponent000125.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000125',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000250 [parentName]=\"myName\"></my-comp-000250>\n      <my-comp-000251 [parentName]=\"myName\"></my-comp-000251>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000125.ctorParameters = [];
    GeneratedComponent000125.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000125;
}());
