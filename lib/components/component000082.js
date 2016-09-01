import { Component, Input } from '@angular/core';
export var GeneratedComponent000082 = (function () {
    function GeneratedComponent000082() {
        this.myName = "000082";
    }
    GeneratedComponent000082.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000082',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000164 [parentName]=\"myName\"></my-comp-000164>\n      <my-comp-000165 [parentName]=\"myName\"></my-comp-000165>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000082.ctorParameters = [];
    GeneratedComponent000082.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000082;
}());
