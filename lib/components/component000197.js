import { Component, Input } from '@angular/core';
export var GeneratedComponent000197 = (function () {
    function GeneratedComponent000197() {
        this.myName = "000197";
    }
    GeneratedComponent000197.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000197',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000394 [parentName]=\"myName\"></my-comp-000394>\n      <my-comp-000395 [parentName]=\"myName\"></my-comp-000395>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000197.ctorParameters = [];
    GeneratedComponent000197.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000197;
}());
