import { Component, Input } from '@angular/core';
export var GeneratedComponent000107 = (function () {
    function GeneratedComponent000107() {
        this.myName = "000107";
    }
    GeneratedComponent000107.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000107',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000214 [parentName]=\"myName\"></my-comp-000214>\n      <my-comp-000215 [parentName]=\"myName\"></my-comp-000215>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000107.ctorParameters = [];
    GeneratedComponent000107.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000107;
}());
