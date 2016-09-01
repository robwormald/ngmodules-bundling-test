import { Component, Input } from '@angular/core';
export var GeneratedComponent000192 = (function () {
    function GeneratedComponent000192() {
        this.myName = "000192";
    }
    GeneratedComponent000192.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000192',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000384 [parentName]=\"myName\"></my-comp-000384>\n      <my-comp-000385 [parentName]=\"myName\"></my-comp-000385>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000192.ctorParameters = [];
    GeneratedComponent000192.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000192;
}());
