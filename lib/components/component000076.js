import { Component, Input } from '@angular/core';
export var GeneratedComponent000076 = (function () {
    function GeneratedComponent000076() {
        this.myName = "000076";
    }
    GeneratedComponent000076.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000076',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000152 [parentName]=\"myName\"></my-comp-000152>\n      <my-comp-000153 [parentName]=\"myName\"></my-comp-000153>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000076.ctorParameters = [];
    GeneratedComponent000076.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000076;
}());
