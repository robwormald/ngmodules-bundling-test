import { Component, Input } from '@angular/core';
export var GeneratedComponent000189 = (function () {
    function GeneratedComponent000189() {
        this.myName = "000189";
    }
    GeneratedComponent000189.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000189',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000378 [parentName]=\"myName\"></my-comp-000378>\n      <my-comp-000379 [parentName]=\"myName\"></my-comp-000379>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000189.ctorParameters = [];
    GeneratedComponent000189.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000189;
}());
