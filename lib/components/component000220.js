import { Component, Input } from '@angular/core';
export var GeneratedComponent000220 = (function () {
    function GeneratedComponent000220() {
        this.myName = "000220";
    }
    GeneratedComponent000220.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000220',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000440 [parentName]=\"myName\"></my-comp-000440>\n      <my-comp-000441 [parentName]=\"myName\"></my-comp-000441>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000220.ctorParameters = [];
    GeneratedComponent000220.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000220;
}());
