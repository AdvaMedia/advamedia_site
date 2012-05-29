/**
 * element_common.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
function initCommonAttributes(a){var b=document.forms[0],c=tinyMCEPopup.editor.dom;setFormValue("title",c.getAttrib(a,"title")),setFormValue("id",c.getAttrib(a,"id")),selectByValue(b,"class",c.getAttrib(a,"class"),!0),setFormValue("style",c.getAttrib(a,"style")),selectByValue(b,"dir",c.getAttrib(a,"dir")),setFormValue("lang",c.getAttrib(a,"lang")),setFormValue("onfocus",c.getAttrib(a,"onfocus")),setFormValue("onblur",c.getAttrib(a,"onblur")),setFormValue("onclick",c.getAttrib(a,"onclick")),setFormValue("ondblclick",c.getAttrib(a,"ondblclick")),setFormValue("onmousedown",c.getAttrib(a,"onmousedown")),setFormValue("onmouseup",c.getAttrib(a,"onmouseup")),setFormValue("onmouseover",c.getAttrib(a,"onmouseover")),setFormValue("onmousemove",c.getAttrib(a,"onmousemove")),setFormValue("onmouseout",c.getAttrib(a,"onmouseout")),setFormValue("onkeypress",c.getAttrib(a,"onkeypress")),setFormValue("onkeydown",c.getAttrib(a,"onkeydown")),setFormValue("onkeyup",c.getAttrib(a,"onkeyup"))}function setFormValue(a,b){document.forms[0].elements[a]&&(document.forms[0].elements[a].value=b)}function insertDateTime(a){document.getElementById(a).value=getDateTime(new Date,"%Y-%m-%dT%H:%M:%S")}function getDateTime(a,b){return b=b.replace("%D","%m/%d/%y"),b=b.replace("%r","%I:%M:%S %p"),b=b.replace("%Y",""+a.getFullYear()),b=b.replace("%y",""+a.getYear()),b=b.replace("%m",addZeros(a.getMonth()+1,2)),b=b.replace("%d",addZeros(a.getDate(),2)),b=b.replace("%H",""+addZeros(a.getHours(),2)),b=b.replace("%M",""+addZeros(a.getMinutes(),2)),b=b.replace("%S",""+addZeros(a.getSeconds(),2)),b=b.replace("%I",""+((a.getHours()+11)%12+1)),b=b.replace("%p",""+(a.getHours()<12?"AM":"PM")),b=b.replace("%%","%"),b}function addZeros(a,b){var c;a=""+a;if(a.length<b)for(c=0;c<b-a.length;c++)a="0"+a;return a}function selectByValue(a,b,c,d,e){if(!a||!a.elements[b])return;var f=a.elements[b],g=!1;for(var h=0;h<f.options.length;h++){var i=f.options[h];i.value==c||e&&i.value.toLowerCase()==c.toLowerCase()?(i.selected=!0,g=!0):i.selected=!1}if(!g&&d&&c!=""){var i=new Option("Value: "+c,c);i.selected=!0,f.options[f.options.length]=i}return g}function setAttrib(a,b,c){var d=document.forms[0],e=d.elements[b.toLowerCase()];tinyMCEPopup.editor.dom.setAttrib(a,b,c||e.value)}function setAllCommonAttribs(a){setAttrib(a,"title"),setAttrib(a,"id"),setAttrib(a,"class"),setAttrib(a,"style"),setAttrib(a,"dir"),setAttrib(a,"lang")}function insertInlineElement(a){var b=tinyMCEPopup.editor,c=b.dom;b.getDoc().execCommand("FontName",!1,"mceinline"),tinymce.each(c.select("span,font"),function(b){(b.style.fontFamily=="mceinline"||b.face=="mceinline")&&c.replace(c.create(a,{"data-mce-new":1}),b,1)})}tinyMCEPopup.requireLangPack(),SXE={currentAction:"insert",inst:tinyMCEPopup.editor,updateElement:null},SXE.focusElement=SXE.inst.selection.getNode(),SXE.initElementDialog=function(a){addClassesToList("class","xhtmlxtras_styles"),TinyMCE_EditableSelects.init(),a=a.toLowerCase();var b=SXE.inst.dom.getParent(SXE.focusElement,a.toUpperCase());b!=null&&b.nodeName.toUpperCase()==a.toUpperCase()&&(SXE.currentAction="update"),SXE.currentAction=="update"&&(initCommonAttributes(b),SXE.updateElement=b),document.forms[0].insert.value=tinyMCEPopup.getLang(SXE.currentAction,"Insert",!0)},SXE.insertElement=function(a){var b=SXE.inst.dom.getParent(SXE.focusElement,a.toUpperCase()),c,d;if(b==null){var e=SXE.inst.selection.getContent();if(e.length>0){d=a,insertInlineElement(a);var f=tinymce.grep(SXE.inst.dom.select(a));for(var g=0;g<f.length;g++){var b=f[g];SXE.inst.dom.getAttrib(b,"data-mce-new")&&(b.id="",b.setAttribute("id",""),b.removeAttribute("id"),b.removeAttribute("data-mce-new"),setAllCommonAttribs(b))}}}else setAllCommonAttribs(b);SXE.inst.nodeChanged(),tinyMCEPopup.execCommand("mceEndUndoLevel")},SXE.removeElement=function(a){a=a.toLowerCase(),elm=SXE.inst.dom.getParent(SXE.focusElement,a.toUpperCase()),elm&&elm.nodeName.toUpperCase()==a.toUpperCase()&&(tinyMCE.execCommand("mceRemoveNode",!1,elm),SXE.inst.nodeChanged(),tinyMCEPopup.execCommand("mceEndUndoLevel"))},SXE.showRemoveButton=function(){document.getElementById("remove").style.display=""},SXE.containsClass=function(a,b){return a.className.indexOf(b)>-1?!0:!1},SXE.removeClass=function(a,b){if(a.className==null||a.className==""||!SXE.containsClass(a,b))return!0;var c=a.className.split(" "),d="";for(var e=0,f=c.length;e<f;e++)c[e]!=b&&(d+=c[e]+" ");a.className=d.substring(0,d.length-1)},SXE.addClass=function(a,b){return SXE.containsClass(a,b)||(a.className?a.className+=" "+b:a.className=b),!0};