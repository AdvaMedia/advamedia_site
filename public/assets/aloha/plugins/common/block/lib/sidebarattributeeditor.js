/*!
 * Aloha Editor
 * Author & Copyright (c) 2010 Gentics Software GmbH
 * aloha-sales@gentics.com
 * Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
define(["aloha/jquery","block/blockmanager","aloha/sidebar","block/editormanager"],function(a,b,c,d){return new(Class.extend({_sidebar:null,init:function(){this._sidebar=c.right.show(),b.bind("block-selection-change",this._onBlockSelectionChange,this)},_onBlockSelectionChange:function(b){var c=this;if(!this._sidebar)return;c._sidebar.container.find(".aloha-sidebar-panels").children().remove(),c._sidebar.panels={},a.each(b,function(){var b=this.getSchema(),e=this,f=[];if(!b)return;c._sidebar.addPanel({title:e.getTitle(),expanded:!0,onInit:function(){var c=a("<form />");c.submit(function(){return!1}),a.each(b,function(a,b){var g=d.createEditor(b);g.bind("change",function(b){e.attr(a,b)}),e.bind("change",function(){g.setValue(e.attr(a))}),c.append(g.render()),g.setValue(e.attr(a)),f.push(g)}),this.setContent(c)},deactivate:function(){a.each(f,function(a,b){b._deactivate()}),this.isActive=!1,this.content.parent("li").hide(),this.effectiveElement=null}})})}}))});