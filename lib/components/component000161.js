import { Component, Input } from '@angular/core';
export var GeneratedComponent000161 = (function () {
    function GeneratedComponent000161() {
        this.myName = "000161";
    }
    GeneratedComponent000161.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000161',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000322 [parentName]=\"myName\"></my-comp-000322>\n      <my-comp-000323 [parentName]=\"myName\"></my-comp-000323>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000161.ctorParameters = [];
    GeneratedComponent000161.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000161;
}());
