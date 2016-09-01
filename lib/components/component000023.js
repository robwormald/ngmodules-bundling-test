import { Component, Input } from '@angular/core';
export var GeneratedComponent000023 = (function () {
    function GeneratedComponent000023() {
        this.myName = "000023";
    }
    GeneratedComponent000023.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000023',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000046 [parentName]=\"myName\"></my-comp-000046>\n      <my-comp-000047 [parentName]=\"myName\"></my-comp-000047>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000023.ctorParameters = [];
    GeneratedComponent000023.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000023;
}());
