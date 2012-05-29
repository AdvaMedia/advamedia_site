/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
/**
 * Paste Plugin
 * ------------
 * The paste plugin intercepts all browser paste events that target aloha-
 * editables, and redirects the events into a hidden div. Once pasting is done
 * into this div, its contents will be processed by registered content handlers
 * before being copied into the active editable, at the current range.
 */
define(["aloha/core","aloha/plugin","aloha/jquery","aloha/command","aloha/console"],function(a,b,c,d,e){function k(){h=a.getSelection().getRangeAt(0),i=a.activeEditable,j.css({top:g.scrollTop(),left:g.scrollLeft()-200}),j.contents().remove(),i&&i.obj.blur(),f.Utils.Dom.setCursorInto(j.get(0)),j.focus()}function l(){var b=this,d;if(h&&i){i.obj.click(),d=j.html(),c.browser.msie&&/^&nbsp;/.test(d)&&(d=d.substring(6));var f=h.startContainer;f.nodeType==3&&f.parentNode.nodeName=="P"&&f.parentNode.childNodes.length==1&&/^(\s|%A0)$/.test(escape(f.data))&&(f.data="",h.startOffset=0,h.endContainer==f&&(h.endOffset=0)),a.queryCommandSupported("insertHTML")?a.execCommand("insertHTML",!1,d,h):e.error("Common.Paste",'Command "insertHTML" not available. Enable the plugin "common/commands".')}h=void 0,i=void 0,j.contents().remove()}var f=window.GENTICS,g=c(window),h=null,i=null,j=c('<div id="pasteContainer" style="position:absolute; clip:rect(0px, 0px, 0px, 0px); width: 1px; height: 1px;"></div>').contentEditable(!0);return b.create("paste",{settings:{},init:function(){var b=this;c("body").append(j),a.bind("aloha-editable-created",function(d,e){c.browser.msie?b.settings.noclipboardaccess?e.obj.bind("beforepaste",function(a){k(),a.stopPropagation()}):e.obj.bind("paste",function(b){k();var c=document.selection.createRange();return c.execCommand("paste"),l(),b.metaKey=void 0,a.activeEditable.smartContentChange(b),b.stopPropagation(),!1}):e.obj.bind("paste",function(b){k(),window.setTimeout(function(){l(),a.activeEditable.smartContentChange(b)},10),b.stopPropagation()})}),c.browser.msie&&b.settings.noclipboardaccess&&j.bind("paste",function(b){window.setTimeout(function(){l(),a.activeEditable.smartContentChange(b),b.stopPropagation()},10)})},register:function(a){e.deprecated("Plugins.Paste","register() for pasteHandler is deprecated. Use the ContentHandler Plugin instead.")}})});