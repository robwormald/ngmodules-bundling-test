import { Component, Input } from '@angular/core';
export var GeneratedComponent000246 = (function () {
    function GeneratedComponent000246() {
        this.myName = "000246";
    }
    GeneratedComponent000246.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000246',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000492 [parentName]=\"myName\"></my-comp-000492>\n      <my-comp-000493 [parentName]=\"myName\"></my-comp-000493>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000246.ctorParameters = [];
    GeneratedComponent000246.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000246;
}());
