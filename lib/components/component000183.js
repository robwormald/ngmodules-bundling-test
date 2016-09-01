import { Component, Input } from '@angular/core';
export var GeneratedComponent000183 = (function () {
    function GeneratedComponent000183() {
        this.myName = "000183";
    }
    GeneratedComponent000183.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000183',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000366 [parentName]=\"myName\"></my-comp-000366>\n      <my-comp-000367 [parentName]=\"myName\"></my-comp-000367>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000183.ctorParameters = [];
    GeneratedComponent000183.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000183;
}());
