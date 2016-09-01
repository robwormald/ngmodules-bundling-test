import { Component, Input } from '@angular/core';
export var GeneratedComponent000159 = (function () {
    function GeneratedComponent000159() {
        this.myName = "000159";
    }
    GeneratedComponent000159.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000159',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000318 [parentName]=\"myName\"></my-comp-000318>\n      <my-comp-000319 [parentName]=\"myName\"></my-comp-000319>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000159.ctorParameters = [];
    GeneratedComponent000159.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000159;
}());
