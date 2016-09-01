import { Component, Input } from '@angular/core';
export var GeneratedComponent000103 = (function () {
    function GeneratedComponent000103() {
        this.myName = "000103";
    }
    GeneratedComponent000103.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000103',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000206 [parentName]=\"myName\"></my-comp-000206>\n      <my-comp-000207 [parentName]=\"myName\"></my-comp-000207>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000103.ctorParameters = [];
    GeneratedComponent000103.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000103;
}());
