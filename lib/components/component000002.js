import { Component, Input } from '@angular/core';
export var GeneratedComponent000002 = (function () {
    function GeneratedComponent000002() {
        this.myName = "000002";
    }
    GeneratedComponent000002.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000002',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000004 [parentName]=\"myName\"></my-comp-000004>\n      <my-comp-000005 [parentName]=\"myName\"></my-comp-000005>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000002.ctorParameters = [];
    GeneratedComponent000002.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000002;
}());
