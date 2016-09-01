import { Component, Input } from '@angular/core';
export var GeneratedComponent000171 = (function () {
    function GeneratedComponent000171() {
        this.myName = "000171";
    }
    GeneratedComponent000171.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000171',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000342 [parentName]=\"myName\"></my-comp-000342>\n      <my-comp-000343 [parentName]=\"myName\"></my-comp-000343>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000171.ctorParameters = [];
    GeneratedComponent000171.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000171;
}());
