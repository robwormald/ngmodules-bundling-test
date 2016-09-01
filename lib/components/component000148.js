import { Component, Input } from '@angular/core';
export var GeneratedComponent000148 = (function () {
    function GeneratedComponent000148() {
        this.myName = "000148";
    }
    GeneratedComponent000148.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000148',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000296 [parentName]=\"myName\"></my-comp-000296>\n      <my-comp-000297 [parentName]=\"myName\"></my-comp-000297>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000148.ctorParameters = [];
    GeneratedComponent000148.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000148;
}());
