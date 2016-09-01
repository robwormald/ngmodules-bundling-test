import { Component, Input } from '@angular/core';
export var GeneratedComponent000121 = (function () {
    function GeneratedComponent000121() {
        this.myName = "000121";
    }
    GeneratedComponent000121.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000121',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000242 [parentName]=\"myName\"></my-comp-000242>\n      <my-comp-000243 [parentName]=\"myName\"></my-comp-000243>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000121.ctorParameters = [];
    GeneratedComponent000121.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000121;
}());
