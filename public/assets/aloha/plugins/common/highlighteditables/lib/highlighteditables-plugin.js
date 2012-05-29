/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
define(["aloha","aloha/jquery","aloha/plugin","css!highlighteditables/css/highlighteditables.css"],function(a,b,c){var d=window.GENTICS;return c.create("highlighteditables",{init:function(){var b=this;d.Utils.Position.addMouseMoveCallback(function(){var b,c;for(b=0;b<a.editables.length;b++)c=a.editables[b],!a.activeEditable&&!c.isDisabled()&&c.obj.addClass("aloha-editable-highlight")}),d.Utils.Position.addMouseStopCallback(function(){b.fade()}),a.bind("aloha-editable-activated",function(a,c){b.fade()})},fade:function(){var c,d,e=function(){b(this).css("outline","")};for(c=0;c<a.editables.length;c++)d=a.editables[c].obj,d.hasClass("aloha-editable-highlight")&&d.css("outline",d.css("outlineColor")+" "+d.css("outlineStyle")+" "+d.css("outlineWidth")).removeClass("aloha-editable-highlight").animate({outlineWidth:"0px"},300,"swing",e)}})});