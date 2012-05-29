/*
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
define(["aloha","aloha/jquery","aloha/plugin","aloha/floatingmenu","i18n!horizontalruler/nls/i18n","i18n!aloha/nls/i18n","css!horizontalruler/css/horizontalruler.css"],function(a,b,c,d,e,f){var g=window.GENTICS;return c.create("horizontalruler",{_constructor:function(){this._super("horizontalruler")},languages:["en"],config:["hr"],init:function(){var c=this;this.insertButton=new a.ui.Button({name:"hr",iconClass:"aloha-button-horizontalruler",size:"small",onclick:function(a,b){c.insertHR()},tooltip:e.t("button.addhr.tooltip"),toggle:!1}),d.addButton("Aloha.continuoustext",this.insertButton,f.t("floatingmenu.tab.insert"),1),a.bind("aloha-editable-activated",function(d,e){if(a.activeEditable){c.cfg=c.getEditableConfig(a.activeEditable.obj);if(b.inArray("hr",c.cfg)==-1){c.insertButton.hide();return}c.insertButton.show()}})},insertHR:function(c){var d=this,e=a.Selection.getRangeObject();if(a.activeEditable){var f=b("<hr>");g.Utils.Dom.insertIntoDOM(f,e,b(a.activeEditable.obj),!0),e.select()}}})});