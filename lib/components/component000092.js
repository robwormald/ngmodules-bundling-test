import { Component, Input } from '@angular/core';
export var GeneratedComponent000092 = (function () {
    function GeneratedComponent000092() {
        this.myName = "000092";
    }
    GeneratedComponent000092.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000092',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000184 [parentName]=\"myName\"></my-comp-000184>\n      <my-comp-000185 [parentName]=\"myName\"></my-comp-000185>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000092.ctorParameters = [];
    GeneratedComponent000092.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000092;
}());
