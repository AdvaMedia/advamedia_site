/*!
 * Aloha Editor
 * Author & Copyright (c) 2010 Gentics Software GmbH
 * aloha-sales@gentics.com
 * Licensed unter the terms of http://www.aloha-editor.com/license.html
 *
 *
 * Aloha List Enforcer
 * -------------------
 * Enforces a one top-level list per editable policy ;-)
 * This plugin will register editables and enforce lists in them. List enforced
 * editables will be permitted to contain, exactly one top-level element which
 * must be a (OL or a UL) list element.
 */
define(["aloha","aloha/jquery","aloha/plugin","aloha/floatingmenu","aloha/console"],function(a,b,c,d,e){function g(a,c){if(b.inArray(a[0],f)===-1)return;a.find(".GENTICS_temporary").remove();var d=!1;a.find("li").each(function(){if(b.trim(b(this).text())!=="")return d=!0,!1}),d||a.html(c);var e=a.find(">ul,>ol"),g=e.length,h;if(g>1){var i=b(e[0]);for(h=1;h<g;++h)i.append(b(e[h]).find(">li")),b(e[h]).remove()}a.find(">*:not(ul,ol)").remove()}var f=[];return c.create("listenforcer",{languages:["en","de"],_constructor:function(){this._super("listenforcer")},init:function(){var c=this,d=this.settings.editables||[],f,h,i=d.length;for(h=0;h<i;h++)f=d[h],typeof f=="string"||f.nodeName||f instanceof b?this.addEditableToEnforcementList(b(f)[0]):e.warn("Aloha List Enforcer Plugin",'Object "'+f.toString()+'" can not '+"be used as a jQuery selector with which to register"+" an editable to be list enforced.");a.bind("aloha-editable-activated",function(a,b){g(b.editable.obj,'<ul><li><br class="GENTICS_temporary" /></li></ul>')}),a.bind("aloha-editable-deactivated",function(a,b){g(b.editable.obj,"")}),a.bind("aloha-smart-content-changed",function(a,b){g(b.editable.obj,'<ul><li><br class="GENTICS_temporary" /></li></ul>')})},addEditableToEnforcementList:function(a){a&&f.push(a)}})});