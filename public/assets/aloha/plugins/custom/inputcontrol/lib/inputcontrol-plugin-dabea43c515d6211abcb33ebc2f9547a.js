/*!
* Aloha Editor
* Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Author Nicolas Karageuzian
* Licensed unter the terms of http://www.aloha-editor.com/license.html
# https://github.com/temistokles/Aloha-Plugin-InputControl
*/
define(["aloha/plugin","aloha"],function(n,e){"use strict";return n.create("inputcontrol",{_constructor:function(){this._super("inputcontrol")},init:function(){var n=this;n.bindEvents()},config:{enableFilter:!1,allowchars:new RegExp("."),enableMask:!1},bindEvents:function(){var n=this;e.bind("aloha-editable-created",function(a,t){var i=n.getEditableConfig(t.obj);i.enableFilter&&t.obj.keypress(function(n){var a,t=n.which,l=!0;return a=String.fromCharCode(t),i.allowchars instanceof RegExp&&(e.Log.debug(e,"Keycode : ["+t+"] char : '"+a+"'"),l=l&&i.allowchars.test(a)),l}),i.disableEnter&&(t.obj.unbind("keydown"),t.obj.keydown(function(n){return 13===n.keyCode?!1:!0})),i.enableMask&&t.obj.blur(function(){var n=$(this);return i.type===Number&&("NaN"===new Number(n.text()).toString()?n.addClass("aloha-input-invalid"):n.removeClass("aloha-input-invalid")),"number"==typeof i.maxlength&&(i.striphtml?n.text().length>=i.maxlength?n.addClass("aloha-input-invalid"):n.removeClass("aloha-input-invalid"):n.html().length>=i.maxlength?n.addClass("aloha-input-invalid"):n.removeClass("aloha-input-invalid")),!0})})}})});