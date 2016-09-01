import { Component, Input } from '@angular/core';
export var GeneratedComponent000057 = (function () {
    function GeneratedComponent000057() {
        this.myName = "000057";
    }
    GeneratedComponent000057.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000057',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000114 [parentName]=\"myName\"></my-comp-000114>\n      <my-comp-000115 [parentName]=\"myName\"></my-comp-000115>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000057.ctorParameters = [];
    GeneratedComponent000057.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000057;
}());
