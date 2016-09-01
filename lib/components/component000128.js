import { Component, Input } from '@angular/core';
export var GeneratedComponent000128 = (function () {
    function GeneratedComponent000128() {
        this.myName = "000128";
    }
    GeneratedComponent000128.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000128',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000256 [parentName]=\"myName\"></my-comp-000256>\n      <my-comp-000257 [parentName]=\"myName\"></my-comp-000257>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000128.ctorParameters = [];
    GeneratedComponent000128.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000128;
}());
