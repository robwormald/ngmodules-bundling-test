import { Component, Input } from '@angular/core';
export var GeneratedComponent000165 = (function () {
    function GeneratedComponent000165() {
        this.myName = "000165";
    }
    GeneratedComponent000165.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000165',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000330 [parentName]=\"myName\"></my-comp-000330>\n      <my-comp-000331 [parentName]=\"myName\"></my-comp-000331>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000165.ctorParameters = [];
    GeneratedComponent000165.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000165;
}());
