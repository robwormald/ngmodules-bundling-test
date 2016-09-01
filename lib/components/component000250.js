import { Component, Input } from '@angular/core';
export var GeneratedComponent000250 = (function () {
    function GeneratedComponent000250() {
        this.myName = "000250";
    }
    GeneratedComponent000250.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000250',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000500 [parentName]=\"myName\"></my-comp-000500>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000250.ctorParameters = [];
    GeneratedComponent000250.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000250;
}());
