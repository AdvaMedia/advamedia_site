/*!
 * Aloha Editor
 * Author & Copyright (c) 2010 Gentics Software GmbH
 * aloha-sales@gentics.com
 * Licensed unter the terms of http://www.aloha-editor.com/license.html
 */
define(["aloha/jquery","aloha/registry"],function(a,b){return new(b.extend({createHandler:function(a){if(typeof a.handleContent!="function")throw"ContentHandler has no function handleContent().";var b=Class.extend({handleContent:function(a){}},a);return new b},handleContent:function(b,c){var d,e=this.getEntries();if(typeof c.contenthandler=="undefined"){c.contenthandler=[];for(d in e)e.hasOwnProperty(d)&&c.contenthandler.push(d)}for(d in e)if(e.hasOwnProperty(d)){if(a.inArray(d,c.contenthandler)<0)continue;typeof e[d].handleContent=="function"?b=e[d].handleContent(b,c):console.error("A valid content handler needs the method handleContent.")}return b}}))});