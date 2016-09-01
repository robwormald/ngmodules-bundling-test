import { Component, Input } from '@angular/core';
export var GeneratedComponent000063 = (function () {
    function GeneratedComponent000063() {
        this.myName = "000063";
    }
    GeneratedComponent000063.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000063',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000126 [parentName]=\"myName\"></my-comp-000126>\n      <my-comp-000127 [parentName]=\"myName\"></my-comp-000127>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000063.ctorParameters = [];
    GeneratedComponent000063.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000063;
}());
