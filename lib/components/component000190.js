import { Component, Input } from '@angular/core';
export var GeneratedComponent000190 = (function () {
    function GeneratedComponent000190() {
        this.myName = "000190";
    }
    GeneratedComponent000190.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000190',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000380 [parentName]=\"myName\"></my-comp-000380>\n      <my-comp-000381 [parentName]=\"myName\"></my-comp-000381>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000190.ctorParameters = [];
    GeneratedComponent000190.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000190;
}());
