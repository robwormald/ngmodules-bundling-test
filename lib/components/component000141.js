import { Component, Input } from '@angular/core';
export var GeneratedComponent000141 = (function () {
    function GeneratedComponent000141() {
        this.myName = "000141";
    }
    GeneratedComponent000141.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000141',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000282 [parentName]=\"myName\"></my-comp-000282>\n      <my-comp-000283 [parentName]=\"myName\"></my-comp-000283>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000141.ctorParameters = [];
    GeneratedComponent000141.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000141;
}());
