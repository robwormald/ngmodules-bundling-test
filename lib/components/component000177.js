import { Component, Input } from '@angular/core';
export var GeneratedComponent000177 = (function () {
    function GeneratedComponent000177() {
        this.myName = "000177";
    }
    GeneratedComponent000177.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000177',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000354 [parentName]=\"myName\"></my-comp-000354>\n      <my-comp-000355 [parentName]=\"myName\"></my-comp-000355>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000177.ctorParameters = [];
    GeneratedComponent000177.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000177;
}());
