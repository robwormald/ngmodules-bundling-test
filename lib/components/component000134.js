import { Component, Input } from '@angular/core';
export var GeneratedComponent000134 = (function () {
    function GeneratedComponent000134() {
        this.myName = "000134";
    }
    GeneratedComponent000134.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000134',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000268 [parentName]=\"myName\"></my-comp-000268>\n      <my-comp-000269 [parentName]=\"myName\"></my-comp-000269>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000134.ctorParameters = [];
    GeneratedComponent000134.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000134;
}());
