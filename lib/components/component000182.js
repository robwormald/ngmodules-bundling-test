import { Component, Input } from '@angular/core';
export var GeneratedComponent000182 = (function () {
    function GeneratedComponent000182() {
        this.myName = "000182";
    }
    GeneratedComponent000182.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000182',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000364 [parentName]=\"myName\"></my-comp-000364>\n      <my-comp-000365 [parentName]=\"myName\"></my-comp-000365>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000182.ctorParameters = [];
    GeneratedComponent000182.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000182;
}());
