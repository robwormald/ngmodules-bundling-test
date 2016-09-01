import { Component, Input } from '@angular/core';
export var GeneratedComponent000131 = (function () {
    function GeneratedComponent000131() {
        this.myName = "000131";
    }
    GeneratedComponent000131.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000131',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000262 [parentName]=\"myName\"></my-comp-000262>\n      <my-comp-000263 [parentName]=\"myName\"></my-comp-000263>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000131.ctorParameters = [];
    GeneratedComponent000131.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000131;
}());
