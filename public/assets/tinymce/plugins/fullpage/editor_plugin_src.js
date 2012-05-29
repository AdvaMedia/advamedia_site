/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){var a=tinymce.each,b=tinymce.html.Node;tinymce.create("tinymce.plugins.FullPagePlugin",{init:function(a,b){var c=this;c.editor=a,a.addCommand("mceFullPageProperties",function(){a.windowManager.open({file:b+"/fullpage.htm",width:430+parseInt(a.getLang("fullpage.delta_width",0)),height:495+parseInt(a.getLang("fullpage.delta_height",0)),inline:1},{plugin_url:b,data:c._htmlToData()})}),a.addButton("fullpage",{title:"fullpage.desc",cmd:"mceFullPageProperties"}),a.onBeforeSetContent.add(c._setContent,c),a.onGetContent.add(c._getContent,c)},getInfo:function(){return{longname:"Fullpage",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/fullpage",version:tinymce.majorVersion+"."+tinymce.minorVersion}},_htmlToData:function(){function h(a,b){var c=a.attr(b);return c||""}var b=this._parseHeader(),c={},d,e,f,g=this.editor;return c.fontface=g.getParam("fullpage_default_fontface",""),c.fontsize=g.getParam("fullpage_default_fontsize",""),e=b.firstChild,e.type==7&&(c.xml_pi=!0,f=/encoding="([^"]+)"/.exec(e.value),f&&(c.docencoding=f[1])),e=b.getAll("#doctype")[0],e&&(c.doctype="<!DOCTYPE"+e.value+">"),e=b.getAll("title")[0],e&&e.firstChild&&(c.metatitle=e.firstChild.value),a(b.getAll("meta"),function(a){var b=a.attr("name"),d=a.attr("http-equiv"),e;b?c["meta"+b.toLowerCase()]=a.attr("content"):d=="Content-Type"&&(e=/charset\s*=\s*(.*)\s*/gi.exec(a.attr("content")),e&&(c.docencoding=e[1]))}),e=b.getAll("html")[0],e&&(c.langcode=h(e,"lang")||h(e,"xml:lang")),e=b.getAll("link")[0],e&&e.attr("rel")=="stylesheet"&&(c.stylesheet=e.attr("href")),e=b.getAll("body")[0],e&&(c.langdir=h(e,"dir"),c.style=h(e,"style"),c.visited_color=h(e,"vlink"),c.link_color=h(e,"link"),c.active_color=h(e,"alink")),c},_dataToHtml:function(c){function j(a,b,c){a.attr(b,c?c:undefined)}function k(a){e.firstChild?e.insert(a,e.firstChild):e.append(a)}var d,e,f,g,h,i=this.editor.dom;d=this._parseHeader(),e=d.getAll("head")[0],e||(g=d.getAll("html")[0],e=new b("head",1),g.firstChild?g.insert(e,g.firstChild,!0):g.append(e)),g=d.firstChild,c.xml_pi?(h='version="1.0"',c.docencoding&&(h+=' encoding="'+c.docencoding+'"'),g.type!=7&&(g=new b("xml",7),d.insert(g,d.firstChild,!0)),g.value=h):g&&g.type==7&&g.remove(),g=d.getAll("#doctype")[0],c.doctype?(g||(g=new b("#doctype",10),c.xml_pi?d.insert(g,d.firstChild):k(g)),g.value=c.doctype.substring(9,c.doctype.length-1)):g&&g.remove(),g=d.getAll("title")[0],c.metatitle&&(g||(g=new b("title",1),g.append(new b("#text",3)).value=c.metatitle,k(g))),c.docencoding&&(g=null,a(d.getAll("meta"),function(a){a.attr("http-equiv")=="Content-Type"&&(g=a)}),g||(g=new b("meta",1),g.attr("http-equiv","Content-Type"),g.shortEnded=!0,k(g)),g.attr("content","text/html; charset="+c.docencoding)),a("keywords,description,author,copyright,robots".split(","),function(a){var e=d.getAll("meta"),f,h,i=c["meta"+a];for(f=0;f<e.length;f++){h=e[f];if(h.attr("name")==a){i?h.attr("content",i):h.remove();return}}i&&(g=new b("meta",1),g.attr("name",a),g.attr("content",i),g.shortEnded=!0,k(g))}),g=d.getAll("link")[0],g&&g.attr("rel")=="stylesheet"?c.stylesheet?g.attr("href",c.stylesheet):g.remove():c.stylesheet&&(g=new b("link",1),g.attr({rel:"stylesheet",text:"text/css",href:c.stylesheet}),g.shortEnded=!0,k(g)),g=d.getAll("body")[0],g&&(j(g,"dir",c.langdir),j(g,"style",c.style),j(g,"vlink",c.visited_color),j(g,"link",c.link_color),j(g,"alink",c.active_color),i.setAttribs(this.editor.getBody(),{style:c.style,dir:c.dir,vLink:c.visited_color,link:c.link_color,aLink:c.active_color})),g=d.getAll("html")[0],g&&(j(g,"lang",c.langcode),j(g,"xml:lang",c.langcode)),f=(new tinymce.html.Serializer({validate:!1,indent:!0,apply_source_formatting:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"})).serialize(d),this.head=f.substring(0,f.indexOf("</body>"))},_parseHeader:function(){return(new tinymce.html.DomParser({validate:!1,root_name:"#document"})).parse(this.head)},_setContent:function(b,c){function l(a){return a.replace(/<\/?[A-Z]+/g,function(a){return a.toLowerCase()})}var d=this,e,f,g=c.content,h,i="",j=d.editor.dom,k;if(c.format=="raw"&&d.head)return;if(c.source_view&&b.getParam("fullpage_hide_in_source_view"))return;g=g.replace(/<(\/?)BODY/gi,"<$1body"),e=g.indexOf("<body"),e!=-1?(e=g.indexOf(">",e),d.head=l(g.substring(0,e+1)),f=g.indexOf("</body",e),f==-1&&(f=g.length),c.content=g.substring(e+1,f),d.foot=l(g.substring(f))):(d.head=this._getDefaultHeader(),d.foot="\n</body>\n</html>"),h=d._parseHeader(),a(h.getAll("style"),function(a){a.firstChild&&(i+=a.firstChild.value)}),k=h.getAll("body")[0],k&&j.setAttribs(d.editor.getBody(),{style:k.attr("style")||"",dir:k.attr("dir")||"",vLink:k.attr("vlink")||"",link:k.attr("link")||"",aLink:k.attr("alink")||""}),j.remove("fullpage_styles"),i&&(j.add(d.editor.getDoc().getElementsByTagName("head")[0],"style",{id:"fullpage_styles"},i),k=j.get("fullpage_styles"),k.styleSheet&&(k.styleSheet.cssText=i))},_getDefaultHeader:function(){var a="",b=this.editor,c,d="";b.getParam("fullpage_default_xml_pi")&&(a+='<?xml version="1.0" encoding="'+b.getParam("fullpage_default_encoding","ISO-8859-1")+'" ?>\n'),a+=b.getParam("fullpage_default_doctype",'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'),a+="\n<html>\n<head>\n";if(c=b.getParam("fullpage_default_title"))a+="<title>"+c+"</title>\n";if(c=b.getParam("fullpage_default_encoding"))a+='<meta http-equiv="Content-Type" content="text/html; charset='+c+'" />\n';if(c=b.getParam("fullpage_default_font_family"))d+="font-family: "+c+";";if(c=b.getParam("fullpage_default_font_size"))d+="font-size: "+c+";";if(c=b.getParam("fullpage_default_text_color"))d+="color: "+c+";";return a+="</head>\n<body"+(d?' style="'+d+'"':"")+">\n",a},_getContent:function(a,b){var c=this;if(!b.source_view||!a.getParam("fullpage_hide_in_source_view"))b.content=tinymce.trim(c.head)+"\n"+tinymce.trim(b.content)+"\n"+tinymce.trim(c.foot)}}),tinymce.PluginManager.add("fullpage",tinymce.plugins.FullPagePlugin)})();