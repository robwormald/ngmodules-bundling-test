import { Component, Input } from '@angular/core';
export var GeneratedComponent000018 = (function () {
    function GeneratedComponent000018() {
        this.myName = "000018";
    }
    GeneratedComponent000018.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000018',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000036 [parentName]=\"myName\"></my-comp-000036>\n      <my-comp-000037 [parentName]=\"myName\"></my-comp-000037>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000018.ctorParameters = [];
    GeneratedComponent000018.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000018;
}());
