import { Component, Input } from '@angular/core';
export var GeneratedComponent000187 = (function () {
    function GeneratedComponent000187() {
        this.myName = "000187";
    }
    GeneratedComponent000187.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000187',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000374 [parentName]=\"myName\"></my-comp-000374>\n      <my-comp-000375 [parentName]=\"myName\"></my-comp-000375>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000187.ctorParameters = [];
    GeneratedComponent000187.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000187;
}());
