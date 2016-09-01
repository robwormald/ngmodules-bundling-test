import { Component, Input } from '@angular/core';
export var GeneratedComponent000179 = (function () {
    function GeneratedComponent000179() {
        this.myName = "000179";
    }
    GeneratedComponent000179.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000179',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000358 [parentName]=\"myName\"></my-comp-000358>\n      <my-comp-000359 [parentName]=\"myName\"></my-comp-000359>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000179.ctorParameters = [];
    GeneratedComponent000179.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000179;
}());
