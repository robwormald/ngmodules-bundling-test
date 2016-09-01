import { Component, Input } from '@angular/core';
export var GeneratedComponent000062 = (function () {
    function GeneratedComponent000062() {
        this.myName = "000062";
    }
    GeneratedComponent000062.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000062',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000124 [parentName]=\"myName\"></my-comp-000124>\n      <my-comp-000125 [parentName]=\"myName\"></my-comp-000125>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000062.ctorParameters = [];
    GeneratedComponent000062.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000062;
}());
