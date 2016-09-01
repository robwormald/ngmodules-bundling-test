import { Component, Input } from '@angular/core';
export var GeneratedComponent000051 = (function () {
    function GeneratedComponent000051() {
        this.myName = "000051";
    }
    GeneratedComponent000051.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000051',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000102 [parentName]=\"myName\"></my-comp-000102>\n      <my-comp-000103 [parentName]=\"myName\"></my-comp-000103>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000051.ctorParameters = [];
    GeneratedComponent000051.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000051;
}());
