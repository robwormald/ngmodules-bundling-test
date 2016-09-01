import { Component, Input } from '@angular/core';
export var GeneratedComponent000149 = (function () {
    function GeneratedComponent000149() {
        this.myName = "000149";
    }
    GeneratedComponent000149.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000149',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000298 [parentName]=\"myName\"></my-comp-000298>\n      <my-comp-000299 [parentName]=\"myName\"></my-comp-000299>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000149.ctorParameters = [];
    GeneratedComponent000149.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000149;
}());
