import { Component, Input } from '@angular/core';
export var GeneratedComponent000180 = (function () {
    function GeneratedComponent000180() {
        this.myName = "000180";
    }
    GeneratedComponent000180.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000180',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000360 [parentName]=\"myName\"></my-comp-000360>\n      <my-comp-000361 [parentName]=\"myName\"></my-comp-000361>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000180.ctorParameters = [];
    GeneratedComponent000180.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000180;
}());
