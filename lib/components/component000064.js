import { Component, Input } from '@angular/core';
export var GeneratedComponent000064 = (function () {
    function GeneratedComponent000064() {
        this.myName = "000064";
    }
    GeneratedComponent000064.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000064',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000128 [parentName]=\"myName\"></my-comp-000128>\n      <my-comp-000129 [parentName]=\"myName\"></my-comp-000129>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000064.ctorParameters = [];
    GeneratedComponent000064.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000064;
}());
