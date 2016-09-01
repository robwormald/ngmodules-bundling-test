import { Component, Input } from '@angular/core';
export var GeneratedComponent000188 = (function () {
    function GeneratedComponent000188() {
        this.myName = "000188";
    }
    GeneratedComponent000188.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000188',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000376 [parentName]=\"myName\"></my-comp-000376>\n      <my-comp-000377 [parentName]=\"myName\"></my-comp-000377>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000188.ctorParameters = [];
    GeneratedComponent000188.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000188;
}());
