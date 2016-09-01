import { Component, Input } from '@angular/core';
export var GeneratedComponent000024 = (function () {
    function GeneratedComponent000024() {
        this.myName = "000024";
    }
    GeneratedComponent000024.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000024',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000048 [parentName]=\"myName\"></my-comp-000048>\n      <my-comp-000049 [parentName]=\"myName\"></my-comp-000049>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000024.ctorParameters = [];
    GeneratedComponent000024.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000024;
}());
