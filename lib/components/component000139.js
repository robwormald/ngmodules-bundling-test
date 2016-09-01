import { Component, Input } from '@angular/core';
export var GeneratedComponent000139 = (function () {
    function GeneratedComponent000139() {
        this.myName = "000139";
    }
    GeneratedComponent000139.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000139',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000278 [parentName]=\"myName\"></my-comp-000278>\n      <my-comp-000279 [parentName]=\"myName\"></my-comp-000279>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000139.ctorParameters = [];
    GeneratedComponent000139.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000139;
}());
