/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){tinymce.create("tinymce.plugins.SearchReplacePlugin",{init:function(e,t){function n(n){window.focus(),e.windowManager.open({file:t+"/searchreplace.htm",width:420+parseInt(e.getLang("searchreplace.delta_width",0)),height:170+parseInt(e.getLang("searchreplace.delta_height",0)),inline:1,auto_focus:0},{mode:n,search_string:e.selection.getContent({format:"text"}),plugin_url:t})}e.addCommand("mceSearch",function(){n("search")}),e.addCommand("mceReplace",function(){n("replace")}),e.addButton("search",{title:"searchreplace.search_desc",cmd:"mceSearch"}),e.addButton("replace",{title:"searchreplace.replace_desc",cmd:"mceReplace"}),e.addShortcut("ctrl+f","searchreplace.search_desc","mceSearch")},getInfo:function(){return{longname:"Search/Replace",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/searchreplace",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("searchreplace",tinymce.plugins.SearchReplacePlugin)})();