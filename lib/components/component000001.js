import { Component, Input } from '@angular/core';
export var GeneratedComponent000001 = (function () {
    function GeneratedComponent000001() {
        this.myName = "000001";
    }
    GeneratedComponent000001.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000001',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000002 [parentName]=\"myName\"></my-comp-000002>\n      <my-comp-000003 [parentName]=\"myName\"></my-comp-000003>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000001.ctorParameters = [];
    GeneratedComponent000001.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000001;
}());
