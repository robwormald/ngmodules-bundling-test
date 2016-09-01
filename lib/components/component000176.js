import { Component, Input } from '@angular/core';
export var GeneratedComponent000176 = (function () {
    function GeneratedComponent000176() {
        this.myName = "000176";
    }
    GeneratedComponent000176.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000176',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000352 [parentName]=\"myName\"></my-comp-000352>\n      <my-comp-000353 [parentName]=\"myName\"></my-comp-000353>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000176.ctorParameters = [];
    GeneratedComponent000176.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000176;
}());
