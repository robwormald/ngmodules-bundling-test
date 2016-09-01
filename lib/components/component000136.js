import { Component, Input } from '@angular/core';
export var GeneratedComponent000136 = (function () {
    function GeneratedComponent000136() {
        this.myName = "000136";
    }
    GeneratedComponent000136.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000136',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000272 [parentName]=\"myName\"></my-comp-000272>\n      <my-comp-000273 [parentName]=\"myName\"></my-comp-000273>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000136.ctorParameters = [];
    GeneratedComponent000136.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000136;
}());
