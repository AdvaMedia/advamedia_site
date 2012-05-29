/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
/**
 * @name block.editor
 * @namespace Block attribute editors
 */
define(["aloha/jquery","aloha/observable"],function(a,b){var c=Class.extend(b,{schema:null,_constructor:function(a){this.schema=a},render:function(){},getValue:function(){},setValue:function(a){},destroy:function(){},_deactivate:function(){this.trigger("change",this.getValue()),this.destroy()}}),d=c.extend({formInputElementDefinition:null,_$formInputElement:null,render:function(){var b=a('<div class="aloha-block-editor" />'),c=GENTICS.Utils.guid();return b.append(this.renderLabel().attr("id",c)),b.append(this.renderFormElement().attr("id",c)),b},renderLabel:function(){var b=a("<label />");return b.html(this.schema.label),b},renderFormElement:function(){var b=this;return this._$formInputElement=a(this.formInputElementDefinition),this.afterRenderFormElement(this._$formInputElement),this._$formInputElement.change(function(){b.trigger("change",b.getValue())}),this._$formInputElement},afterRenderFormElement:function(a){},getValue:function(){return this._$formInputElement.val()},setValue:function(a){this._$formInputElement.val(a)},destroy:function(){this._$formInputElement.remove()}}),e=d.extend({formInputElementDefinition:'<input type="text" />'}),f=d.extend({formInputElementDefinition:'<input type="range" />',afterRenderFormElement:function(a){if(!this.schema.range)return;this.schema.range.min&&a.attr("min",this.schema.range.min),this.schema.range.max&&a.attr("max",this.schema.range.max),this.schema.range.step&&a.attr("step",this.schema.range.step)}}),g=d.extend({formInputElementDefinition:'<input type="url" />'}),h=d.extend({formInputElementDefinition:'<input type="email" />'}),i=d.extend({formInputElementDefinition:"<select />",afterRenderFormElement:function(b){a.each(this.schema.values,function(){var c=this;b.append(a("<option />").attr("value",c.key).html(c.label))})}}),j=d.extend({formInputElementDefinition:"<button />",afterRenderFormElement:function(a){var b=this;a.html(this.schema.buttonLabel),a.click(function(){b.schema.callback()})}});return{AbstractEditor:c,AbstractFormElementEditor:d,StringEditor:e,NumberEditor:f,UrlEditor:g,EmailEditor:h,SelectEditor:i,ButtonEditor:j}});