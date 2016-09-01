import { Component, Input } from '@angular/core';
export var GeneratedComponent000213 = (function () {
    function GeneratedComponent000213() {
        this.myName = "000213";
    }
    GeneratedComponent000213.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000213',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000426 [parentName]=\"myName\"></my-comp-000426>\n      <my-comp-000427 [parentName]=\"myName\"></my-comp-000427>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000213.ctorParameters = [];
    GeneratedComponent000213.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000213;
}());
