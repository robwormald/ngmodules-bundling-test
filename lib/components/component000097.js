import { Component, Input } from '@angular/core';
export var GeneratedComponent000097 = (function () {
    function GeneratedComponent000097() {
        this.myName = "000097";
    }
    GeneratedComponent000097.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000097',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000194 [parentName]=\"myName\"></my-comp-000194>\n      <my-comp-000195 [parentName]=\"myName\"></my-comp-000195>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000097.ctorParameters = [];
    GeneratedComponent000097.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000097;
}());
