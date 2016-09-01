import { Component, Input } from '@angular/core';
export var GeneratedComponent000245 = (function () {
    function GeneratedComponent000245() {
        this.myName = "000245";
    }
    GeneratedComponent000245.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000245',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000490 [parentName]=\"myName\"></my-comp-000490>\n      <my-comp-000491 [parentName]=\"myName\"></my-comp-000491>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000245.ctorParameters = [];
    GeneratedComponent000245.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000245;
}());
