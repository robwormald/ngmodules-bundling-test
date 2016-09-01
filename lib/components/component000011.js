import { Component, Input } from '@angular/core';
export var GeneratedComponent000011 = (function () {
    function GeneratedComponent000011() {
        this.myName = "000011";
    }
    GeneratedComponent000011.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000011',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000022 [parentName]=\"myName\"></my-comp-000022>\n      <my-comp-000023 [parentName]=\"myName\"></my-comp-000023>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000011.ctorParameters = [];
    GeneratedComponent000011.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000011;
}());
