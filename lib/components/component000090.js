import { Component, Input } from '@angular/core';
export var GeneratedComponent000090 = (function () {
    function GeneratedComponent000090() {
        this.myName = "000090";
    }
    GeneratedComponent000090.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000090',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000180 [parentName]=\"myName\"></my-comp-000180>\n      <my-comp-000181 [parentName]=\"myName\"></my-comp-000181>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000090.ctorParameters = [];
    GeneratedComponent000090.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000090;
}());
