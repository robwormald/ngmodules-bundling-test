import { Component, Input } from '@angular/core';
export var GeneratedComponent000111 = (function () {
    function GeneratedComponent000111() {
        this.myName = "000111";
    }
    GeneratedComponent000111.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000111',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000222 [parentName]=\"myName\"></my-comp-000222>\n      <my-comp-000223 [parentName]=\"myName\"></my-comp-000223>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000111.ctorParameters = [];
    GeneratedComponent000111.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000111;
}());
