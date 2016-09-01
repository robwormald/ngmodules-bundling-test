import { Component, Input } from '@angular/core';
export var GeneratedComponent000234 = (function () {
    function GeneratedComponent000234() {
        this.myName = "000234";
    }
    GeneratedComponent000234.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000234',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000468 [parentName]=\"myName\"></my-comp-000468>\n      <my-comp-000469 [parentName]=\"myName\"></my-comp-000469>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000234.ctorParameters = [];
    GeneratedComponent000234.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000234;
}());
