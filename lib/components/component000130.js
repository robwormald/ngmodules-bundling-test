import { Component, Input } from '@angular/core';
export var GeneratedComponent000130 = (function () {
    function GeneratedComponent000130() {
        this.myName = "000130";
    }
    GeneratedComponent000130.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000130',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000260 [parentName]=\"myName\"></my-comp-000260>\n      <my-comp-000261 [parentName]=\"myName\"></my-comp-000261>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000130.ctorParameters = [];
    GeneratedComponent000130.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000130;
}());
