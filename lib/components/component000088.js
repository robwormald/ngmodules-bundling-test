import { Component, Input } from '@angular/core';
export var GeneratedComponent000088 = (function () {
    function GeneratedComponent000088() {
        this.myName = "000088";
    }
    GeneratedComponent000088.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000088',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000176 [parentName]=\"myName\"></my-comp-000176>\n      <my-comp-000177 [parentName]=\"myName\"></my-comp-000177>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000088.ctorParameters = [];
    GeneratedComponent000088.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000088;
}());
