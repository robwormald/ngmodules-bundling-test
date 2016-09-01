import { Component, Input } from '@angular/core';
export var GeneratedComponent000218 = (function () {
    function GeneratedComponent000218() {
        this.myName = "000218";
    }
    GeneratedComponent000218.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000218',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000436 [parentName]=\"myName\"></my-comp-000436>\n      <my-comp-000437 [parentName]=\"myName\"></my-comp-000437>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000218.ctorParameters = [];
    GeneratedComponent000218.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000218;
}());
