import { Component, Input } from '@angular/core';
export var GeneratedComponent000222 = (function () {
    function GeneratedComponent000222() {
        this.myName = "000222";
    }
    GeneratedComponent000222.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000222',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000444 [parentName]=\"myName\"></my-comp-000444>\n      <my-comp-000445 [parentName]=\"myName\"></my-comp-000445>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000222.ctorParameters = [];
    GeneratedComponent000222.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000222;
}());
