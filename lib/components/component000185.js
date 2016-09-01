import { Component, Input } from '@angular/core';
export var GeneratedComponent000185 = (function () {
    function GeneratedComponent000185() {
        this.myName = "000185";
    }
    GeneratedComponent000185.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000185',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000370 [parentName]=\"myName\"></my-comp-000370>\n      <my-comp-000371 [parentName]=\"myName\"></my-comp-000371>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000185.ctorParameters = [];
    GeneratedComponent000185.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000185;
}());
