import { Component, Input } from '@angular/core';
export var GeneratedComponent000216 = (function () {
    function GeneratedComponent000216() {
        this.myName = "000216";
    }
    GeneratedComponent000216.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000216',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000432 [parentName]=\"myName\"></my-comp-000432>\n      <my-comp-000433 [parentName]=\"myName\"></my-comp-000433>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000216.ctorParameters = [];
    GeneratedComponent000216.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000216;
}());
