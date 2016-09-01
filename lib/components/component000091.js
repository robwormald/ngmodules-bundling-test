import { Component, Input } from '@angular/core';
export var GeneratedComponent000091 = (function () {
    function GeneratedComponent000091() {
        this.myName = "000091";
    }
    GeneratedComponent000091.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000091',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000182 [parentName]=\"myName\"></my-comp-000182>\n      <my-comp-000183 [parentName]=\"myName\"></my-comp-000183>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000091.ctorParameters = [];
    GeneratedComponent000091.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000091;
}());
