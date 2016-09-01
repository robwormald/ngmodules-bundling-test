import { Component, Input } from '@angular/core';
export var GeneratedComponent000225 = (function () {
    function GeneratedComponent000225() {
        this.myName = "000225";
    }
    GeneratedComponent000225.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000225',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000450 [parentName]=\"myName\"></my-comp-000450>\n      <my-comp-000451 [parentName]=\"myName\"></my-comp-000451>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000225.ctorParameters = [];
    GeneratedComponent000225.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000225;
}());
