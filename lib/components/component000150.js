import { Component, Input } from '@angular/core';
export var GeneratedComponent000150 = (function () {
    function GeneratedComponent000150() {
        this.myName = "000150";
    }
    GeneratedComponent000150.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000150',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000300 [parentName]=\"myName\"></my-comp-000300>\n      <my-comp-000301 [parentName]=\"myName\"></my-comp-000301>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000150.ctorParameters = [];
    GeneratedComponent000150.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000150;
}());
