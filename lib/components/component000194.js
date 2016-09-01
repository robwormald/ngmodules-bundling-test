import { Component, Input } from '@angular/core';
export var GeneratedComponent000194 = (function () {
    function GeneratedComponent000194() {
        this.myName = "000194";
    }
    GeneratedComponent000194.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000194',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000388 [parentName]=\"myName\"></my-comp-000388>\n      <my-comp-000389 [parentName]=\"myName\"></my-comp-000389>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000194.ctorParameters = [];
    GeneratedComponent000194.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000194;
}());
