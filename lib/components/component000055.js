import { Component, Input } from '@angular/core';
export var GeneratedComponent000055 = (function () {
    function GeneratedComponent000055() {
        this.myName = "000055";
    }
    GeneratedComponent000055.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000055',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000110 [parentName]=\"myName\"></my-comp-000110>\n      <my-comp-000111 [parentName]=\"myName\"></my-comp-000111>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000055.ctorParameters = [];
    GeneratedComponent000055.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000055;
}());
