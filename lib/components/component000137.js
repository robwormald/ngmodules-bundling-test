import { Component, Input } from '@angular/core';
export var GeneratedComponent000137 = (function () {
    function GeneratedComponent000137() {
        this.myName = "000137";
    }
    GeneratedComponent000137.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000137',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000274 [parentName]=\"myName\"></my-comp-000274>\n      <my-comp-000275 [parentName]=\"myName\"></my-comp-000275>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000137.ctorParameters = [];
    GeneratedComponent000137.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000137;
}());
