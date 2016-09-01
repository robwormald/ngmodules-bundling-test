import { Component, Input } from '@angular/core';
export var GeneratedComponent000052 = (function () {
    function GeneratedComponent000052() {
        this.myName = "000052";
    }
    GeneratedComponent000052.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000052',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000104 [parentName]=\"myName\"></my-comp-000104>\n      <my-comp-000105 [parentName]=\"myName\"></my-comp-000105>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000052.ctorParameters = [];
    GeneratedComponent000052.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000052;
}());
