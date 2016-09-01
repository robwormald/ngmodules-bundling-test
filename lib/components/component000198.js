import { Component, Input } from '@angular/core';
export var GeneratedComponent000198 = (function () {
    function GeneratedComponent000198() {
        this.myName = "000198";
    }
    GeneratedComponent000198.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000198',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000396 [parentName]=\"myName\"></my-comp-000396>\n      <my-comp-000397 [parentName]=\"myName\"></my-comp-000397>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000198.ctorParameters = [];
    GeneratedComponent000198.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000198;
}());
