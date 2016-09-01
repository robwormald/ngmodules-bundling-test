import { Component, Input } from '@angular/core';
export var GeneratedComponent000009 = (function () {
    function GeneratedComponent000009() {
        this.myName = "000009";
    }
    GeneratedComponent000009.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000009',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000018 [parentName]=\"myName\"></my-comp-000018>\n      <my-comp-000019 [parentName]=\"myName\"></my-comp-000019>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000009.ctorParameters = [];
    GeneratedComponent000009.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000009;
}());
