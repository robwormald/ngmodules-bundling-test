import { Component, Input } from '@angular/core';
export var GeneratedComponent000174 = (function () {
    function GeneratedComponent000174() {
        this.myName = "000174";
    }
    GeneratedComponent000174.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000174',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000348 [parentName]=\"myName\"></my-comp-000348>\n      <my-comp-000349 [parentName]=\"myName\"></my-comp-000349>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000174.ctorParameters = [];
    GeneratedComponent000174.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000174;
}());
