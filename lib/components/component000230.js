import { Component, Input } from '@angular/core';
export var GeneratedComponent000230 = (function () {
    function GeneratedComponent000230() {
        this.myName = "000230";
    }
    GeneratedComponent000230.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000230',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000460 [parentName]=\"myName\"></my-comp-000460>\n      <my-comp-000461 [parentName]=\"myName\"></my-comp-000461>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000230.ctorParameters = [];
    GeneratedComponent000230.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000230;
}());
