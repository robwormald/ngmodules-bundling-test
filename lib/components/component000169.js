import { Component, Input } from '@angular/core';
export var GeneratedComponent000169 = (function () {
    function GeneratedComponent000169() {
        this.myName = "000169";
    }
    GeneratedComponent000169.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000169',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000338 [parentName]=\"myName\"></my-comp-000338>\n      <my-comp-000339 [parentName]=\"myName\"></my-comp-000339>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000169.ctorParameters = [];
    GeneratedComponent000169.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000169;
}());
