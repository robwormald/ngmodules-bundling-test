import { Component, Input } from '@angular/core';
export var GeneratedComponent000065 = (function () {
    function GeneratedComponent000065() {
        this.myName = "000065";
    }
    GeneratedComponent000065.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000065',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000130 [parentName]=\"myName\"></my-comp-000130>\n      <my-comp-000131 [parentName]=\"myName\"></my-comp-000131>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000065.ctorParameters = [];
    GeneratedComponent000065.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000065;
}());
