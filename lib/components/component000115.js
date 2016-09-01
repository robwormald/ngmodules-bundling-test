import { Component, Input } from '@angular/core';
export var GeneratedComponent000115 = (function () {
    function GeneratedComponent000115() {
        this.myName = "000115";
    }
    GeneratedComponent000115.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000115',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000230 [parentName]=\"myName\"></my-comp-000230>\n      <my-comp-000231 [parentName]=\"myName\"></my-comp-000231>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000115.ctorParameters = [];
    GeneratedComponent000115.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000115;
}());
