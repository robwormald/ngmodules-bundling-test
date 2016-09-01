import { Component, Input } from '@angular/core';
export var GeneratedComponent000223 = (function () {
    function GeneratedComponent000223() {
        this.myName = "000223";
    }
    GeneratedComponent000223.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000223',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000446 [parentName]=\"myName\"></my-comp-000446>\n      <my-comp-000447 [parentName]=\"myName\"></my-comp-000447>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000223.ctorParameters = [];
    GeneratedComponent000223.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000223;
}());
