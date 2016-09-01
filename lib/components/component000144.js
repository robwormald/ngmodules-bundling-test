import { Component, Input } from '@angular/core';
export var GeneratedComponent000144 = (function () {
    function GeneratedComponent000144() {
        this.myName = "000144";
    }
    GeneratedComponent000144.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000144',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000288 [parentName]=\"myName\"></my-comp-000288>\n      <my-comp-000289 [parentName]=\"myName\"></my-comp-000289>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000144.ctorParameters = [];
    GeneratedComponent000144.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000144;
}());
