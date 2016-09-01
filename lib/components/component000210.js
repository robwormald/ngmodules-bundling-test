import { Component, Input } from '@angular/core';
export var GeneratedComponent000210 = (function () {
    function GeneratedComponent000210() {
        this.myName = "000210";
    }
    GeneratedComponent000210.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000210',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000420 [parentName]=\"myName\"></my-comp-000420>\n      <my-comp-000421 [parentName]=\"myName\"></my-comp-000421>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000210.ctorParameters = [];
    GeneratedComponent000210.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000210;
}());
