import { Component, Input } from '@angular/core';
export var GeneratedComponent000244 = (function () {
    function GeneratedComponent000244() {
        this.myName = "000244";
    }
    GeneratedComponent000244.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000244',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000488 [parentName]=\"myName\"></my-comp-000488>\n      <my-comp-000489 [parentName]=\"myName\"></my-comp-000489>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000244.ctorParameters = [];
    GeneratedComponent000244.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000244;
}());
