import { Component, Input } from '@angular/core';
export var GeneratedComponent000129 = (function () {
    function GeneratedComponent000129() {
        this.myName = "000129";
    }
    GeneratedComponent000129.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000129',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000258 [parentName]=\"myName\"></my-comp-000258>\n      <my-comp-000259 [parentName]=\"myName\"></my-comp-000259>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000129.ctorParameters = [];
    GeneratedComponent000129.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000129;
}());
