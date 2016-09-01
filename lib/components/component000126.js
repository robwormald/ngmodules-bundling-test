import { Component, Input } from '@angular/core';
export var GeneratedComponent000126 = (function () {
    function GeneratedComponent000126() {
        this.myName = "000126";
    }
    GeneratedComponent000126.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000126',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000252 [parentName]=\"myName\"></my-comp-000252>\n      <my-comp-000253 [parentName]=\"myName\"></my-comp-000253>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000126.ctorParameters = [];
    GeneratedComponent000126.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000126;
}());
