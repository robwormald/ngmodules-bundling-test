import { Component, Input } from '@angular/core';
export var GeneratedComponent000146 = (function () {
    function GeneratedComponent000146() {
        this.myName = "000146";
    }
    GeneratedComponent000146.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000146',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000292 [parentName]=\"myName\"></my-comp-000292>\n      <my-comp-000293 [parentName]=\"myName\"></my-comp-000293>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000146.ctorParameters = [];
    GeneratedComponent000146.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000146;
}());
