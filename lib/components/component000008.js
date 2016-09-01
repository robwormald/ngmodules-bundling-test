import { Component, Input } from '@angular/core';
export var GeneratedComponent000008 = (function () {
    function GeneratedComponent000008() {
        this.myName = "000008";
    }
    GeneratedComponent000008.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000008',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000016 [parentName]=\"myName\"></my-comp-000016>\n      <my-comp-000017 [parentName]=\"myName\"></my-comp-000017>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000008.ctorParameters = [];
    GeneratedComponent000008.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000008;
}());
