import { Component, Input } from '@angular/core';
export var GeneratedComponent000239 = (function () {
    function GeneratedComponent000239() {
        this.myName = "000239";
    }
    GeneratedComponent000239.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000239',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000478 [parentName]=\"myName\"></my-comp-000478>\n      <my-comp-000479 [parentName]=\"myName\"></my-comp-000479>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000239.ctorParameters = [];
    GeneratedComponent000239.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000239;
}());
