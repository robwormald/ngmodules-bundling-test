import { Component, Input } from '@angular/core';
export var GeneratedComponent000085 = (function () {
    function GeneratedComponent000085() {
        this.myName = "000085";
    }
    GeneratedComponent000085.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000085',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000170 [parentName]=\"myName\"></my-comp-000170>\n      <my-comp-000171 [parentName]=\"myName\"></my-comp-000171>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000085.ctorParameters = [];
    GeneratedComponent000085.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000085;
}());
