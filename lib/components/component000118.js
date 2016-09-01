import { Component, Input } from '@angular/core';
export var GeneratedComponent000118 = (function () {
    function GeneratedComponent000118() {
        this.myName = "000118";
    }
    GeneratedComponent000118.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000118',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000236 [parentName]=\"myName\"></my-comp-000236>\n      <my-comp-000237 [parentName]=\"myName\"></my-comp-000237>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000118.ctorParameters = [];
    GeneratedComponent000118.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000118;
}());
