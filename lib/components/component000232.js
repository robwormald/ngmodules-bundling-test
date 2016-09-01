import { Component, Input } from '@angular/core';
export var GeneratedComponent000232 = (function () {
    function GeneratedComponent000232() {
        this.myName = "000232";
    }
    GeneratedComponent000232.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000232',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000464 [parentName]=\"myName\"></my-comp-000464>\n      <my-comp-000465 [parentName]=\"myName\"></my-comp-000465>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000232.ctorParameters = [];
    GeneratedComponent000232.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000232;
}());
