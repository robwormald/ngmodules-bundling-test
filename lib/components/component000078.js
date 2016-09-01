import { Component, Input } from '@angular/core';
export var GeneratedComponent000078 = (function () {
    function GeneratedComponent000078() {
        this.myName = "000078";
    }
    GeneratedComponent000078.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000078',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000156 [parentName]=\"myName\"></my-comp-000156>\n      <my-comp-000157 [parentName]=\"myName\"></my-comp-000157>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000078.ctorParameters = [];
    GeneratedComponent000078.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000078;
}());
