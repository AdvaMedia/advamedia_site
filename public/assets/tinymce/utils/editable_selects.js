/**
 * editable_selects.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
var TinyMCE_EditableSelects={editSelectElm:null,init:function(){var e=document.getElementsByTagName("select"),t,n=document,r;for(t=0;t<e.length;t++)e[t].className.indexOf("mceEditableSelect")!=-1&&(r=new Option(tinyMCEPopup.editor.translate("value"),"__mce_add_custom__"),r.className="mceAddSelectValue",e[t].options[e[t].options.length]=r,e[t].onchange=TinyMCE_EditableSelects.onChangeEditableSelect)},onChangeEditableSelect:function(e){var t=document,n,r=window.event?window.event.srcElement:e.target;r.options[r.selectedIndex].value=="__mce_add_custom__"&&(n=t.createElement("input"),n.id=r.id+"_custom",n.name=r.name+"_custom",n.type="text",n.style.width=r.offsetWidth+"px",r.parentNode.insertBefore(n,r),r.style.display="none",n.focus(),n.onblur=TinyMCE_EditableSelects.onBlurEditableSelectInput,n.onkeydown=TinyMCE_EditableSelects.onKeyDown,TinyMCE_EditableSelects.editSelectElm=r)},onBlurEditableSelectInput:function(){var e=TinyMCE_EditableSelects.editSelectElm;e&&(e.previousSibling.value!=""?(addSelectValue(document.forms[0],e.id,e.previousSibling.value,e.previousSibling.value),selectByValue(document.forms[0],e.id,e.previousSibling.value)):selectByValue(document.forms[0],e.id,""),e.style.display="inline",e.parentNode.removeChild(e.previousSibling),TinyMCE_EditableSelects.editSelectElm=null)},onKeyDown:function(e){e=e||window.event,e.keyCode==13&&TinyMCE_EditableSelects.onBlurEditableSelectInput()}};