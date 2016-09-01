import { Component, Input } from '@angular/core';
export var GeneratedComponent000066 = (function () {
    function GeneratedComponent000066() {
        this.myName = "000066";
    }
    GeneratedComponent000066.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000066',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000132 [parentName]=\"myName\"></my-comp-000132>\n      <my-comp-000133 [parentName]=\"myName\"></my-comp-000133>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000066.ctorParameters = [];
    GeneratedComponent000066.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000066;
}());
