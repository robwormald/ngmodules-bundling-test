import { Component, Input } from '@angular/core';
export var GeneratedComponent000142 = (function () {
    function GeneratedComponent000142() {
        this.myName = "000142";
    }
    GeneratedComponent000142.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000142',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000284 [parentName]=\"myName\"></my-comp-000284>\n      <my-comp-000285 [parentName]=\"myName\"></my-comp-000285>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000142.ctorParameters = [];
    GeneratedComponent000142.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000142;
}());
