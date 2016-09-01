import { Component, Input } from '@angular/core';
export var GeneratedComponent000120 = (function () {
    function GeneratedComponent000120() {
        this.myName = "000120";
    }
    GeneratedComponent000120.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000120',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000240 [parentName]=\"myName\"></my-comp-000240>\n      <my-comp-000241 [parentName]=\"myName\"></my-comp-000241>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000120.ctorParameters = [];
    GeneratedComponent000120.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000120;
}());
