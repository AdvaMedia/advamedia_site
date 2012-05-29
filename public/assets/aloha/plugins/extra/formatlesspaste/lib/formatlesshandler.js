/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
define(["aloha","aloha/jquery","aloha/contenthandlermanager"],function(a,b,c){var d=window.GENTICS,e=c.createHandler({enabled:!1,handleContent:function(a){typeof a=="string"?a=b("<div>"+a+"</div>"):a instanceof b&&(a=b("<div>").append(a));if(a.find(".aloha-block").length>0)return;return this.enabled&&this.removeFormatting(a),a.html()},removeFormatting:function(a){var c=this.strippedElements;a.find(c.join(",")).each(function(){b(this).contents().unwrap()})}});return e});