import { Component, Input } from '@angular/core';
export var GeneratedComponent000089 = (function () {
    function GeneratedComponent000089() {
        this.myName = "000089";
    }
    GeneratedComponent000089.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000089',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000178 [parentName]=\"myName\"></my-comp-000178>\n      <my-comp-000179 [parentName]=\"myName\"></my-comp-000179>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000089.ctorParameters = [];
    GeneratedComponent000089.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000089;
}());
