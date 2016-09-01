import { Component, Input } from '@angular/core';
export var GeneratedComponent000154 = (function () {
    function GeneratedComponent000154() {
        this.myName = "000154";
    }
    GeneratedComponent000154.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000154',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000308 [parentName]=\"myName\"></my-comp-000308>\n      <my-comp-000309 [parentName]=\"myName\"></my-comp-000309>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000154.ctorParameters = [];
    GeneratedComponent000154.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000154;
}());
