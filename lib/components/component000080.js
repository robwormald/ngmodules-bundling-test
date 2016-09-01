import { Component, Input } from '@angular/core';
export var GeneratedComponent000080 = (function () {
    function GeneratedComponent000080() {
        this.myName = "000080";
    }
    GeneratedComponent000080.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000080',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000160 [parentName]=\"myName\"></my-comp-000160>\n      <my-comp-000161 [parentName]=\"myName\"></my-comp-000161>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000080.ctorParameters = [];
    GeneratedComponent000080.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000080;
}());
