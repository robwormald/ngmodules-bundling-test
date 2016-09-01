import { Component, Input } from '@angular/core';
export var GeneratedComponent000104 = (function () {
    function GeneratedComponent000104() {
        this.myName = "000104";
    }
    GeneratedComponent000104.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000104',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000208 [parentName]=\"myName\"></my-comp-000208>\n      <my-comp-000209 [parentName]=\"myName\"></my-comp-000209>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000104.ctorParameters = [];
    GeneratedComponent000104.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000104;
}());
