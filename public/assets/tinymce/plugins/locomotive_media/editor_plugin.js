/**
 * LocomotiveMedia plugin
 *
 * Copyright 2011, Didier Lafforgue
 * Released under MIT License.
 *
 */
(function(){var a=function(a,b){var c={},d;tinymce.isWebKit&&a.getWin().focus(),b.get("image")?tinymce.extend(c,{src:b.get("url")}):tinymce.extend(c,{href:b.get("url")}),d=a.selection.getNode();if(!d||d.nodeName!="IMG"&&d.nodeName!="A"){if(b.get("image"))a.execCommand("mceInsertContent",!1,'<img id="__mce_tmp" />',{skip_undo:1});else{var e=a.selection.getContent();e==""&&(e=b.get("filename")),a.execCommand("mceInsertContent",!1,'<a id="__mce_tmp" >'+e+"</a>",{skip_undo:1})}a.dom.setAttribs("__mce_tmp",c),a.dom.setAttrib("__mce_tmp","id",""),a.undoManager.add()}else a.dom.setAttribs(d,c)};tinymce.create("tinymce.plugins.LocomotiveMediaPicker",{init:function(b,c){view=new Locomotive.Views.ContentAssets.PickerView({collection:new Locomotive.Models.ContentAssetsCollection}),b.addCommand("locomotiveMedia",function(){view.options.on_select=function(c){a(b,c),view.close()},view.render()}),b.addButton("locomotive_media",{title:"locomotive_media.image_desc",cmd:"locomotiveMedia"})},getInfo:function(){return{longname:"Locomotive Media Picker",author:"Didier Lafforgue",authorurl:"http://www.locomotivecms.com",infourl:"http://www.locomotivecms.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("locomotive_media",tinymce.plugins.LocomotiveMediaPicker)})();