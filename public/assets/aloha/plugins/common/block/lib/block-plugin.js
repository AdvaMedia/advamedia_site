/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
/**
 * @name block
 * @namespace Block plugin
 */
define(["aloha","aloha/plugin","aloha/jquery","aloha/contenthandlermanager","block/blockmanager","block/sidebarattributeeditor","block/block","block/editormanager","block/blockcontenthandler","block/editor","css!block/css/block.css","block/jquery-ui-1.8.16.custom.min"],function(a,b,c,d,e,f,g,h,i,j){var k=b.create("block",{settings:{},init:function(){var b=this;e.registerBlockType("DebugBlock",g.DebugBlock),e.registerBlockType("DefaultBlock",g.DefaultBlock),h.register("string",j.StringEditor),h.register("number",j.NumberEditor),h.register("url",j.UrlEditor),h.register("email",j.EmailEditor),h.register("select",j.SelectEditor),h.register("button",j.ButtonEditor),d.register("block",i),e.registerEventHandlers(),e.initializeBlockLevelDragDrop(),a.bind("aloha-ready",function(){b._createBlocks(),b.settings.sidebarAttributeEditor!==!1&&f.init()})},_createBlocks:function(){this.settings.defaults||(this.settings.defaults={}),c.each(this.settings.defaults,function(a,b){c(a).alohaBlock(b)})}});return c.fn.alohaBlock=function(a){return a=a||{},c(this).each(function(b,c){e._blockify(c,a)}),c(this)},k});