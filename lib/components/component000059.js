import { Component, Input } from '@angular/core';
export var GeneratedComponent000059 = (function () {
    function GeneratedComponent000059() {
        this.myName = "000059";
    }
    GeneratedComponent000059.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000059',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000118 [parentName]=\"myName\"></my-comp-000118>\n      <my-comp-000119 [parentName]=\"myName\"></my-comp-000119>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000059.ctorParameters = [];
    GeneratedComponent000059.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000059;
}());
