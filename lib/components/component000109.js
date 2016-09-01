import { Component, Input } from '@angular/core';
export var GeneratedComponent000109 = (function () {
    function GeneratedComponent000109() {
        this.myName = "000109";
    }
    GeneratedComponent000109.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000109',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000218 [parentName]=\"myName\"></my-comp-000218>\n      <my-comp-000219 [parentName]=\"myName\"></my-comp-000219>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000109.ctorParameters = [];
    GeneratedComponent000109.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000109;
}());
