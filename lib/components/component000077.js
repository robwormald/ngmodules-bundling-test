import { Component, Input } from '@angular/core';
export var GeneratedComponent000077 = (function () {
    function GeneratedComponent000077() {
        this.myName = "000077";
    }
    GeneratedComponent000077.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000077',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000154 [parentName]=\"myName\"></my-comp-000154>\n      <my-comp-000155 [parentName]=\"myName\"></my-comp-000155>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000077.ctorParameters = [];
    GeneratedComponent000077.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000077;
}());
