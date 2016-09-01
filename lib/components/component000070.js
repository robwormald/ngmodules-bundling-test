import { Component, Input } from '@angular/core';
export var GeneratedComponent000070 = (function () {
    function GeneratedComponent000070() {
        this.myName = "000070";
    }
    GeneratedComponent000070.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000070',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000140 [parentName]=\"myName\"></my-comp-000140>\n      <my-comp-000141 [parentName]=\"myName\"></my-comp-000141>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000070.ctorParameters = [];
    GeneratedComponent000070.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000070;
}());
