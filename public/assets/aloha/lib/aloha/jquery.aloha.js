/*!
* This file is part of Aloha Editor Project http://aloha-editor.org
* Copyright Â© 2010-2011 Gentics Software GmbH, aloha@gentics.com
* Contributors http://aloha-editor.org/contribution.php 
* Licensed unter the terms of http://www.aloha-editor.org/license.html
*/
/*
* Aloha Editor is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.*
*
* Aloha Editor is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <http://www.gnu.org/licenses/>.
*/
define(["aloha/core","aloha/selection","aloha/jquery","aloha/console"],function(a,b,c,d){var e=window.XMLSerializer;c.fn.between=function(a,b){var c,d;this[0].nodeType!==3?(c=this.children().size(),b>c&&(b=c),b<=0?this.prepend(a):this.children().eq(b-1).after(a)):b<=0?this.before(a):b>=this[0].length?this.after(a):(d=this[0].data,this[0].data=d.substring(0,b),this.after(d.substring(b,d.length)),this.after(a))},c.fn.contentEditable=function(a){var b=c(this),e="contenteditable";return c.browser.msie&&parseInt(c.browser.version,10)==7&&(e="contentEditable"),typeof a=="undefined"?typeof b[0]=="undefined"?(d.error("The jquery object did not contain any valid elements."),undefined):typeof b[0].isContentEditable=="undefined"?(d.warn("Could not determine whether the is editable or not. I assume it is."),!0):b[0].isContentEditable:(a===""?b.removeAttr(e):(a&&a!=="false"?a="true":a="false",b.attr(e,a)),b)},c.fn.aloha=function(){var b=c(this);return a.bind("aloha-ready",function(){b.each(function(){a.isEditable(this)||new a.Editable(c(this))})}),b},c.fn.mahalo=function(){return this.each(function(){a.isEditable(this)&&a.getEditableById(c(this).attr("id")).destroy()})},c.fn.contentEditableSelectionChange=function(a){var d=this;return this.keyup(function(c){var d=b.getRangeObject();a(c)}),this.dblclick(function(b){a(b)}),this.mousedown(function(a){d.selectionStarted=!0}),c(document).mouseup(function(c){b.eventOriginalTarget=d,d.selectionStarted&&a(c),b.eventOriginalTarget=!1,d.selectionStarted=!1}),this},c.fn.outerHtml=c.fn.outerHtml||function(){var a=c(this),b=a.get(0);if(typeof b.outerHTML!="undefined")return b.outerHTML;try{return(new e).serializeToString(b)}catch(d){try{return b.xml}catch(d){}}},c.fn.zap=function(){return this.each(function(){c(this.childNodes).insertBefore(this)}).remove()},c.fn.textNodes=function(a,b){var d=[],e=function(f){if(f.nodeType===3&&c.trim(f.data)&&!b||f.nodeType===3&&b||f.nodeName=="BR"&&!a)d.push(f);else for(var g=0,h=f.childNodes.length;g<h;++g)e(f.childNodes[g])};return e(this[0]),c(d)},c.extendObjects=c.fn.extendObjects=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!c.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(b in a){d=h[b],e=a[b];if(h===e)continue;k&&e&&(c.isPlainObject(e)||(f=c.isArray(e)))?(f?(f=!1,g=d&&c.isArray(d)?d:[]):g=d&&c.isPlainObject(d)?d:{},c.isArray(e)?h[b]=e:h[b]=c.extendObjects(k,g,e)):e!==undefined&&(h[b]=e)}return h},c.isBoolean=function(a){return a===!0||a===!1},c.isNumeric=function(a){return!isNaN(a-0)}});