import { Component, Input } from '@angular/core';
export var GeneratedComponent000019 = (function () {
    function GeneratedComponent000019() {
        this.myName = "000019";
    }
    GeneratedComponent000019.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000019',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000038 [parentName]=\"myName\"></my-comp-000038>\n      <my-comp-000039 [parentName]=\"myName\"></my-comp-000039>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000019.ctorParameters = [];
    GeneratedComponent000019.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000019;
}());
