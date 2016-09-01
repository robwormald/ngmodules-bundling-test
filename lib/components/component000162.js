import { Component, Input } from '@angular/core';
export var GeneratedComponent000162 = (function () {
    function GeneratedComponent000162() {
        this.myName = "000162";
    }
    GeneratedComponent000162.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000162',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000324 [parentName]=\"myName\"></my-comp-000324>\n      <my-comp-000325 [parentName]=\"myName\"></my-comp-000325>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000162.ctorParameters = [];
    GeneratedComponent000162.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000162;
}());
