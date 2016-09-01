import { Component, Input } from '@angular/core';
export var GeneratedComponent000113 = (function () {
    function GeneratedComponent000113() {
        this.myName = "000113";
    }
    GeneratedComponent000113.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000113',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000226 [parentName]=\"myName\"></my-comp-000226>\n      <my-comp-000227 [parentName]=\"myName\"></my-comp-000227>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000113.ctorParameters = [];
    GeneratedComponent000113.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000113;
}());
