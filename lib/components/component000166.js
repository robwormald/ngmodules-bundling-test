import { Component, Input } from '@angular/core';
export var GeneratedComponent000166 = (function () {
    function GeneratedComponent000166() {
        this.myName = "000166";
    }
    GeneratedComponent000166.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000166',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000332 [parentName]=\"myName\"></my-comp-000332>\n      <my-comp-000333 [parentName]=\"myName\"></my-comp-000333>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000166.ctorParameters = [];
    GeneratedComponent000166.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000166;
}());
