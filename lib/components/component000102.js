import { Component, Input } from '@angular/core';
export var GeneratedComponent000102 = (function () {
    function GeneratedComponent000102() {
        this.myName = "000102";
    }
    GeneratedComponent000102.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000102',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000204 [parentName]=\"myName\"></my-comp-000204>\n      <my-comp-000205 [parentName]=\"myName\"></my-comp-000205>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000102.ctorParameters = [];
    GeneratedComponent000102.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000102;
}());
