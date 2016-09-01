import { Component, Input } from '@angular/core';
export var GeneratedComponent000173 = (function () {
    function GeneratedComponent000173() {
        this.myName = "000173";
    }
    GeneratedComponent000173.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000173',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000346 [parentName]=\"myName\"></my-comp-000346>\n      <my-comp-000347 [parentName]=\"myName\"></my-comp-000347>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000173.ctorParameters = [];
    GeneratedComponent000173.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000173;
}());
