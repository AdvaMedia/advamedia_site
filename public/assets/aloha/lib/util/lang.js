/*!
 * This file is part of Aloha Editor
 * Author & Copyright (c) 2010 Gentics Software GmbH, aloha@gentics.com
 * Licensed unter the terms of http://www.aloha-editor.com/license.html
 */
// Ensure GENTICS Namespace
GENTICS=window.GENTICS||{},GENTICS.Utils=GENTICS.Utils||{},define("util/lang",[],function(){}),function(a,b){var c=a.alohaQuery||a.jQuery,d=c,e=a.GENTICS,f=a.Class,g=a.console;e.Utils.applyProperties=function(a,b){var c;for(c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},e.Utils.uniqeString4=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},e.Utils.guid=function(){var a=e.Utils.uniqeString4;return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(window);