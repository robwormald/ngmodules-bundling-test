import { Component, Input } from '@angular/core';
export var GeneratedComponent000175 = (function () {
    function GeneratedComponent000175() {
        this.myName = "000175";
    }
    GeneratedComponent000175.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000175',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000350 [parentName]=\"myName\"></my-comp-000350>\n      <my-comp-000351 [parentName]=\"myName\"></my-comp-000351>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000175.ctorParameters = [];
    GeneratedComponent000175.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000175;
}());
