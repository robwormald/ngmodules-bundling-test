import { Component, Input } from '@angular/core';
export var GeneratedComponent000100 = (function () {
    function GeneratedComponent000100() {
        this.myName = "000100";
    }
    GeneratedComponent000100.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000100',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000200 [parentName]=\"myName\"></my-comp-000200>\n      <my-comp-000201 [parentName]=\"myName\"></my-comp-000201>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000100.ctorParameters = [];
    GeneratedComponent000100.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000100;
}());
