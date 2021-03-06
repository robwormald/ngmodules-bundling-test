/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/component000451';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_GeneratedComponent000451_Host:import0.RenderComponentType = (null as any);
class _View_GeneratedComponent000451_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _GeneratedComponent000451_0_4:import3.GeneratedComponent000451;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GeneratedComponent000451_Host0,renderType_GeneratedComponent000451_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-comp-000451',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_GeneratedComponent0004510(this.viewUtils,this.injector(0),this._appEl_0);
    this._GeneratedComponent000451_0_4 = new import3.GeneratedComponent000451();
    this._appEl_0.initComponent(this._GeneratedComponent000451_0_4,[],compView_0);
    compView_0.create(this._GeneratedComponent000451_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.GeneratedComponent000451) && (0 === requestNodeIndex))) { return this._GeneratedComponent000451_0_4; }
    return notFoundResult;
  }
}
function viewFactory_GeneratedComponent000451_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_GeneratedComponent000451_Host === (null as any))) { (renderType_GeneratedComponent000451_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_GeneratedComponent000451_Host0(viewUtils,parentInjector,declarationEl);
}
export const GeneratedComponent000451NgFactory:import9.ComponentFactory<import3.GeneratedComponent000451> = new import9.ComponentFactory<import3.GeneratedComponent000451>('my-comp-000451',viewFactory_GeneratedComponent000451_Host0,import3.GeneratedComponent000451);
const styles_GeneratedComponent000451:any[] = [];
var renderType_GeneratedComponent000451:import0.RenderComponentType = (null as any);
class _View_GeneratedComponent0004510 extends import1.AppView<import3.GeneratedComponent000451> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_GeneratedComponent0004510,renderType_GeneratedComponent000451,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'span',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'style','padding-left: 5px');
    this._text_6 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(2,'component ',this.context.myName,', parent is ',this.context.parentName,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_GeneratedComponent0004510(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.GeneratedComponent000451> {
  if ((renderType_GeneratedComponent000451 === (null as any))) { (renderType_GeneratedComponent000451 = viewUtils.createRenderComponentType('/Users/robwormald/Dev/demos/ngmodules-bundling-test/src/components/component000451.ts class GeneratedComponent000451 - inline template',0,import8.ViewEncapsulation.None,styles_GeneratedComponent000451,{})); }
  return new _View_GeneratedComponent0004510(viewUtils,parentInjector,declarationEl);
}