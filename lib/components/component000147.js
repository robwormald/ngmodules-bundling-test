import { Component, Input } from '@angular/core';
export var GeneratedComponent000147 = (function () {
    function GeneratedComponent000147() {
        this.myName = "000147";
    }
    GeneratedComponent000147.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000147',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000294 [parentName]=\"myName\"></my-comp-000294>\n      <my-comp-000295 [parentName]=\"myName\"></my-comp-000295>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000147.ctorParameters = [];
    GeneratedComponent000147.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000147;
}());
