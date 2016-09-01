import { Component, Input } from '@angular/core';
export var GeneratedComponent000081 = (function () {
    function GeneratedComponent000081() {
        this.myName = "000081";
    }
    GeneratedComponent000081.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000081',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000162 [parentName]=\"myName\"></my-comp-000162>\n      <my-comp-000163 [parentName]=\"myName\"></my-comp-000163>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000081.ctorParameters = [];
    GeneratedComponent000081.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000081;
}());
