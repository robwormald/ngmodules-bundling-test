import { Component, Input } from '@angular/core';
export var GeneratedComponent000249 = (function () {
    function GeneratedComponent000249() {
        this.myName = "000249";
    }
    GeneratedComponent000249.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000249',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000498 [parentName]=\"myName\"></my-comp-000498>\n      <my-comp-000499 [parentName]=\"myName\"></my-comp-000499>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000249.ctorParameters = [];
    GeneratedComponent000249.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000249;
}());
