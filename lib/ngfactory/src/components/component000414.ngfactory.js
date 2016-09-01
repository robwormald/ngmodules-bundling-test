var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/component000414';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_GeneratedComponent000414_Host = null;
var _View_GeneratedComponent000414_Host0 = (function (_super) {
    __extends(_View_GeneratedComponent000414_Host0, _super);
    function _View_GeneratedComponent000414_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GeneratedComponent000414_Host0, renderType_GeneratedComponent000414_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_GeneratedComponent000414_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-comp-000414', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_GeneratedComponent0004140(this.viewUtils, this.injector(0), this._appEl_0);
        this._GeneratedComponent000414_0_4 = new import3.GeneratedComponent000414();
        this._appEl_0.initComponent(this._GeneratedComponent000414_0_4, [], compView_0);
        compView_0.create(this._GeneratedComponent000414_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_GeneratedComponent000414_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import3.GeneratedComponent000414) && (0 === requestNodeIndex))) {
            return this._GeneratedComponent000414_0_4;
        }
        return notFoundResult;
    };
    return _View_GeneratedComponent000414_Host0;
}(import1.AppView));
function viewFactory_GeneratedComponent000414_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GeneratedComponent000414_Host === null)) {
        (renderType_GeneratedComponent000414_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_GeneratedComponent000414_Host0(viewUtils, parentInjector, declarationEl);
}
export var GeneratedComponent000414NgFactory = new import9.ComponentFactory('my-comp-000414', viewFactory_GeneratedComponent000414_Host0, import3.GeneratedComponent000414);
var styles_GeneratedComponent000414 = [];
var renderType_GeneratedComponent000414 = null;
var _View_GeneratedComponent0004140 = (function (_super) {
    __extends(_View_GeneratedComponent0004140, _super);
    function _View_GeneratedComponent0004140(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_GeneratedComponent0004140, renderType_GeneratedComponent000414, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_GeneratedComponent0004140.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'span', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'div', null);
        this.renderer.setElementAttribute(this._el_5, 'style', 'padding-left: 5px');
        this._text_6 = this.renderer.createText(this._el_5, '\n    ', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this._expr_0 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    };
    _View_GeneratedComponent0004140.prototype.detectChangesInternal = function (throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = import4.interpolate(2, 'component ', this.context.myName, ', parent is ', this.context.parentName, '');
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_GeneratedComponent0004140;
}(import1.AppView));
export function viewFactory_GeneratedComponent0004140(viewUtils, parentInjector, declarationEl) {
    if ((renderType_GeneratedComponent000414 === null)) {
        (renderType_GeneratedComponent000414 = viewUtils.createRenderComponentType('/Users/robwormald/Dev/demos/ngmodules-bundling-test/src/components/component000414.ts class GeneratedComponent000414 - inline template', 0, import8.ViewEncapsulation.None, styles_GeneratedComponent000414, {}));
    }
    return new _View_GeneratedComponent0004140(viewUtils, parentInjector, declarationEl);
}
