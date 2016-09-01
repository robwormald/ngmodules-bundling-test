import { Component, Input } from '@angular/core';
export var GeneratedComponent000184 = (function () {
    function GeneratedComponent000184() {
        this.myName = "000184";
    }
    GeneratedComponent000184.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000184',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000368 [parentName]=\"myName\"></my-comp-000368>\n      <my-comp-000369 [parentName]=\"myName\"></my-comp-000369>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000184.ctorParameters = [];
    GeneratedComponent000184.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000184;
}());
