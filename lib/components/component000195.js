import { Component, Input } from '@angular/core';
export var GeneratedComponent000195 = (function () {
    function GeneratedComponent000195() {
        this.myName = "000195";
    }
    GeneratedComponent000195.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000195',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000390 [parentName]=\"myName\"></my-comp-000390>\n      <my-comp-000391 [parentName]=\"myName\"></my-comp-000391>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000195.ctorParameters = [];
    GeneratedComponent000195.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000195;
}());
