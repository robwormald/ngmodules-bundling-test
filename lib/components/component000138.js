import { Component, Input } from '@angular/core';
export var GeneratedComponent000138 = (function () {
    function GeneratedComponent000138() {
        this.myName = "000138";
    }
    GeneratedComponent000138.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000138',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000276 [parentName]=\"myName\"></my-comp-000276>\n      <my-comp-000277 [parentName]=\"myName\"></my-comp-000277>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000138.ctorParameters = [];
    GeneratedComponent000138.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000138;
}());
