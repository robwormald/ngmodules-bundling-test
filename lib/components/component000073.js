import { Component, Input } from '@angular/core';
export var GeneratedComponent000073 = (function () {
    function GeneratedComponent000073() {
        this.myName = "000073";
    }
    GeneratedComponent000073.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000073',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000146 [parentName]=\"myName\"></my-comp-000146>\n      <my-comp-000147 [parentName]=\"myName\"></my-comp-000147>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000073.ctorParameters = [];
    GeneratedComponent000073.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000073;
}());
