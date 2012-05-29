/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
define(["aloha/core","aloha/jquery","aloha/command","aloha/selection","util/dom","aloha/contenthandlermanager","aloha/console"],function(a,b,c,d,e,f,g){c.register("inserthtml",{action:function(c,d){function m(a){var c=b(a),f;if(!e.insertIntoDOM(c,d,h,!1)){f=c.contents(),(e.isBlockLevelElement(a)||e.isListElement(a))&&m(b("<br/>").get(0));for(j=f.length-1;j>=0;--j)m(f[j])}}var h=b(e.getEditingHostOf(d.startContainer)),i=d.commonAncestorContainer,j,k,l=[];c=f.handleContent(c,{contenthandler:a.settings.contentHandler.insertHtml});if(typeof c=="string")c=b("<div>"+c+"</div>");else{if(!(c instanceof b))throw"INVALID_VALUE_ERR";c=b("<div>").append(c)}l=c.contents(),e.removeRange(d);for(j=l.length-1;j>=0;--j)m(l[j]);l.length>0?d=e.setCursorAfter(l.get(l.length-1)):d.select(),e.doCleanup({merge:!0,removeempty:!0},d,i);try{d.select()}catch(n){g.warn("Error:",n)}}})});