import { Component, Input } from '@angular/core';
export var GeneratedComponent000053 = (function () {
    function GeneratedComponent000053() {
        this.myName = "000053";
    }
    GeneratedComponent000053.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000053',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000106 [parentName]=\"myName\"></my-comp-000106>\n      <my-comp-000107 [parentName]=\"myName\"></my-comp-000107>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000053.ctorParameters = [];
    GeneratedComponent000053.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000053;
}());
