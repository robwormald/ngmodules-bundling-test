import { Component, Input } from '@angular/core';
export var GeneratedComponent000196 = (function () {
    function GeneratedComponent000196() {
        this.myName = "000196";
    }
    GeneratedComponent000196.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000196',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000392 [parentName]=\"myName\"></my-comp-000392>\n      <my-comp-000393 [parentName]=\"myName\"></my-comp-000393>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000196.ctorParameters = [];
    GeneratedComponent000196.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000196;
}());
