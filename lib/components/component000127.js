import { Component, Input } from '@angular/core';
export var GeneratedComponent000127 = (function () {
    function GeneratedComponent000127() {
        this.myName = "000127";
    }
    GeneratedComponent000127.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000127',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000254 [parentName]=\"myName\"></my-comp-000254>\n      <my-comp-000255 [parentName]=\"myName\"></my-comp-000255>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000127.ctorParameters = [];
    GeneratedComponent000127.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000127;
}());
