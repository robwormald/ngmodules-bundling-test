import { Component, Input } from '@angular/core';
export var GeneratedComponent000203 = (function () {
    function GeneratedComponent000203() {
        this.myName = "000203";
    }
    GeneratedComponent000203.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000203',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000406 [parentName]=\"myName\"></my-comp-000406>\n      <my-comp-000407 [parentName]=\"myName\"></my-comp-000407>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000203.ctorParameters = [];
    GeneratedComponent000203.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000203;
}());
