import { Component, Input } from '@angular/core';
export var GeneratedComponent000231 = (function () {
    function GeneratedComponent000231() {
        this.myName = "000231";
    }
    GeneratedComponent000231.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000231',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000462 [parentName]=\"myName\"></my-comp-000462>\n      <my-comp-000463 [parentName]=\"myName\"></my-comp-000463>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000231.ctorParameters = [];
    GeneratedComponent000231.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000231;
}());
