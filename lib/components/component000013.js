import { Component, Input } from '@angular/core';
export var GeneratedComponent000013 = (function () {
    function GeneratedComponent000013() {
        this.myName = "000013";
    }
    GeneratedComponent000013.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000013',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000026 [parentName]=\"myName\"></my-comp-000026>\n      <my-comp-000027 [parentName]=\"myName\"></my-comp-000027>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000013.ctorParameters = [];
    GeneratedComponent000013.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000013;
}());
