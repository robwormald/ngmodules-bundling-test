import { Component, Input } from '@angular/core';
export var GeneratedComponent000017 = (function () {
    function GeneratedComponent000017() {
        this.myName = "000017";
    }
    GeneratedComponent000017.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000017',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000034 [parentName]=\"myName\"></my-comp-000034>\n      <my-comp-000035 [parentName]=\"myName\"></my-comp-000035>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000017.ctorParameters = [];
    GeneratedComponent000017.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000017;
}());
