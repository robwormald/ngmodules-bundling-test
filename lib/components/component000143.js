import { Component, Input } from '@angular/core';
export var GeneratedComponent000143 = (function () {
    function GeneratedComponent000143() {
        this.myName = "000143";
    }
    GeneratedComponent000143.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000143',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000286 [parentName]=\"myName\"></my-comp-000286>\n      <my-comp-000287 [parentName]=\"myName\"></my-comp-000287>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000143.ctorParameters = [];
    GeneratedComponent000143.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000143;
}());
