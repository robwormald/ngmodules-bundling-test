import { Component, Input } from '@angular/core';
export var GeneratedComponent000181 = (function () {
    function GeneratedComponent000181() {
        this.myName = "000181";
    }
    GeneratedComponent000181.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000181',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000362 [parentName]=\"myName\"></my-comp-000362>\n      <my-comp-000363 [parentName]=\"myName\"></my-comp-000363>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000181.ctorParameters = [];
    GeneratedComponent000181.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000181;
}());
