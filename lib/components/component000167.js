import { Component, Input } from '@angular/core';
export var GeneratedComponent000167 = (function () {
    function GeneratedComponent000167() {
        this.myName = "000167";
    }
    GeneratedComponent000167.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000167',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000334 [parentName]=\"myName\"></my-comp-000334>\n      <my-comp-000335 [parentName]=\"myName\"></my-comp-000335>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000167.ctorParameters = [];
    GeneratedComponent000167.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000167;
}());
