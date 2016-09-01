import { Component, Input } from '@angular/core';
export var GeneratedComponent000140 = (function () {
    function GeneratedComponent000140() {
        this.myName = "000140";
    }
    GeneratedComponent000140.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000140',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000280 [parentName]=\"myName\"></my-comp-000280>\n      <my-comp-000281 [parentName]=\"myName\"></my-comp-000281>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000140.ctorParameters = [];
    GeneratedComponent000140.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000140;
}());
