import { Component, Input } from '@angular/core';
export var GeneratedComponent000061 = (function () {
    function GeneratedComponent000061() {
        this.myName = "000061";
    }
    GeneratedComponent000061.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000061',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000122 [parentName]=\"myName\"></my-comp-000122>\n      <my-comp-000123 [parentName]=\"myName\"></my-comp-000123>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000061.ctorParameters = [];
    GeneratedComponent000061.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000061;
}());
