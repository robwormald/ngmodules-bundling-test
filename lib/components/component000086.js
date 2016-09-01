import { Component, Input } from '@angular/core';
export var GeneratedComponent000086 = (function () {
    function GeneratedComponent000086() {
        this.myName = "000086";
    }
    GeneratedComponent000086.decorators = [
        { type: Component, args: [{
                    selector: 'my-comp-000086',
                    template: "<div>\n    <span>component {{myName}}, parent is {{parentName}}</span>\n    <div style=\"padding-left: 5px\">\n      <my-comp-000172 [parentName]=\"myName\"></my-comp-000172>\n      <my-comp-000173 [parentName]=\"myName\"></my-comp-000173>\n    </div></div>\n  "
                },] },
    ];
    GeneratedComponent000086.ctorParameters = [];
    GeneratedComponent000086.propDecorators = {
        'parentName': [{ type: Input },],
    };
    return GeneratedComponent000086;
}());
