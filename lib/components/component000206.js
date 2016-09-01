import { Component, Input } from '@angular/core';
export var GeneratedComponent000206 = (function () {
    function GeneratedComponent000206() {
        this.myName = "000206";
    }
    GeneratedComponent000206.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000206',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000412 [parentName]=\"myName\"></my-comp-000412>\n      <my-comp-000413 [parentName]=\"myName\"></my-comp-000413>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000206.ctorParameters = [];
    GeneratedComponent000206.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000206;
}());
