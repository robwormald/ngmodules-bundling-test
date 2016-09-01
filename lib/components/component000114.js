import { Component, Input } from '@angular/core';
export var GeneratedComponent000114 = (function () {
    function GeneratedComponent000114() {
        this.myName = "000114";
    }
    GeneratedComponent000114.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000114',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000228 [parentName]=\"myName\"></my-comp-000228>\n      <my-comp-000229 [parentName]=\"myName\"></my-comp-000229>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000114.ctorParameters = [];
    GeneratedComponent000114.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000114;
}());
