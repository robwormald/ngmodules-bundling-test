import { Component, Input } from '@angular/core';
export var GeneratedComponent000014 = (function () {
    function GeneratedComponent000014() {
        this.myName = "000014";
    }
    GeneratedComponent000014.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000014',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000028 [parentName]=\"myName\"></my-comp-000028>\n      <my-comp-000029 [parentName]=\"myName\"></my-comp-000029>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000014.ctorParameters = [];
    GeneratedComponent000014.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000014;
}());
