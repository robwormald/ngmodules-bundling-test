import { Component, Input } from '@angular/core';
export var GeneratedComponent000209 = (function () {
    function GeneratedComponent000209() {
        this.myName = "000209";
    }
    GeneratedComponent000209.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000209',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000418 [parentName]=\"myName\"></my-comp-000418>\n      <my-comp-000419 [parentName]=\"myName\"></my-comp-000419>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000209.ctorParameters = [];
    GeneratedComponent000209.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000209;
}());
