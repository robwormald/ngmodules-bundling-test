import { Component, Input } from '@angular/core';
export var GeneratedComponent000132 = (function () {
    function GeneratedComponent000132() {
        this.myName = "000132";
    }
    GeneratedComponent000132.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000132',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000264 [parentName]=\"myName\"></my-comp-000264>\n      <my-comp-000265 [parentName]=\"myName\"></my-comp-000265>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000132.ctorParameters = [];
    GeneratedComponent000132.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000132;
}());
