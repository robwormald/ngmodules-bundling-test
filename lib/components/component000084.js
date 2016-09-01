import { Component, Input } from '@angular/core';
export var GeneratedComponent000084 = (function () {
    function GeneratedComponent000084() {
        this.myName = "000084";
    }
    GeneratedComponent000084.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000084',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000168 [parentName]=\"myName\"></my-comp-000168>\n      <my-comp-000169 [parentName]=\"myName\"></my-comp-000169>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000084.ctorParameters = [];
    GeneratedComponent000084.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000084;
}());
