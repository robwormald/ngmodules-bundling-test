import { Component, Input } from '@angular/core';
export var GeneratedComponent000119 = (function () {
    function GeneratedComponent000119() {
        this.myName = "000119";
    }
    GeneratedComponent000119.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000119',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000238 [parentName]=\"myName\"></my-comp-000238>\n      <my-comp-000239 [parentName]=\"myName\"></my-comp-000239>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000119.ctorParameters = [];
    GeneratedComponent000119.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000119;
}());
