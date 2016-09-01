import { Component, Input } from '@angular/core';
export var GeneratedComponent000219 = (function () {
    function GeneratedComponent000219() {
        this.myName = "000219";
    }
    GeneratedComponent000219.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000219',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000438 [parentName]=\"myName\"></my-comp-000438>\n      <my-comp-000439 [parentName]=\"myName\"></my-comp-000439>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000219.ctorParameters = [];
    GeneratedComponent000219.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000219;
}());
