import { Component, Input } from '@angular/core';
export var GeneratedComponent000095 = (function () {
    function GeneratedComponent000095() {
        this.myName = "000095";
    }
    GeneratedComponent000095.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000095',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000190 [parentName]=\"myName\"></my-comp-000190>\n      <my-comp-000191 [parentName]=\"myName\"></my-comp-000191>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000095.ctorParameters = [];
    GeneratedComponent000095.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000095;
}());
