import { Component, Input } from '@angular/core';
export var GeneratedComponent000228 = (function () {
    function GeneratedComponent000228() {
        this.myName = "000228";
    }
    GeneratedComponent000228.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000228',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000456 [parentName]=\"myName\"></my-comp-000456>\n      <my-comp-000457 [parentName]=\"myName\"></my-comp-000457>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000228.ctorParameters = [];
    GeneratedComponent000228.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000228;
}());
