import { Component, Input } from '@angular/core';
export var GeneratedComponent000007 = (function () {
    function GeneratedComponent000007() {
        this.myName = "000007";
    }
    GeneratedComponent000007.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000007',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000014 [parentName]=\"myName\"></my-comp-000014>\n      <my-comp-000015 [parentName]=\"myName\"></my-comp-000015>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000007.ctorParameters = [];
    GeneratedComponent000007.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000007;
}());
