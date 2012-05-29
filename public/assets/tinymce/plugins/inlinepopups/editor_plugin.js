(function(){var a=tinymce.DOM,b=tinymce.dom.Element,c=tinymce.dom.Event,d=tinymce.each,e=tinymce.is;tinymce.create("tinymce.plugins.InlinePopups",{init:function(b,c){b.onBeforeRenderUI.add(function(){b.windowManager=new tinymce.InlineWindowManager(b),a.loadCSS(c+"/skins/"+(b.settings.inlinepopups_skin||"clearlooks2")+"/window.css")})},getInfo:function(){return{longname:"InlinePopups",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/inlinepopups",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.create("tinymce.InlineWindowManager:tinymce.WindowManager",{InlineWindowManager:function(a){var b=this;b.parent(a),b.zIndex=3e5,b.count=0,b.windows={}},open:function(d,e){var f=this,g,h="",i=f.editor,j=0,k=0,l,m,n,o,p,q,r,s;return d=d||{},e=e||{},d.inline?(s=f._frontWindow(),s&&a.get(s.id+"_ifr")&&(s.focussedElement=a.get(s.id+"_ifr").contentWindow.document.activeElement),d.type||(f.bookmark=i.selection.getBookmark(1)),g=a.uniqueId(),l=a.getViewPort(),d.width=parseInt(d.width||320),d.height=parseInt(d.height||240)+(tinymce.isIE?8:0),d.min_width=parseInt(d.min_width||150),d.min_height=parseInt(d.min_height||100),d.max_width=parseInt(d.max_width||2e3),d.max_height=parseInt(d.max_height||2e3),d.left=d.left||Math.round(Math.max(l.x,l.x+l.w/2-d.width/2)),d.top=d.top||Math.round(Math.max(l.y,l.y+l.h/2-d.height/2)),d.movable=d.resizable=!0,e.mce_width=d.width,e.mce_height=d.height,e.mce_inline=!0,e.mce_window_id=g,e.mce_auto_focus=d.auto_focus,f.features=d,f.params=e,f.onOpen.dispatch(f,d,e),d.type&&(h+=" mceModal",d.type&&(h+=" mce"+d.type.substring(0,1).toUpperCase()+d.type.substring(1)),d.resizable=!1),d.statusbar&&(h+=" mceStatusbar"),d.resizable&&(h+=" mceResizable"),d.minimizable&&(h+=" mceMinimizable"),d.maximizable&&(h+=" mceMaximizable"),d.movable&&(h+=" mceMovable"),f._addAll(a.doc.body,["div",{id:g,role:"dialog","aria-labelledby":d.type?g+"_content":g+"_title","class":(i.settings.inlinepopups_skin||"clearlooks2")+(tinymce.isIE&&window.getSelection?" ie9":""),style:"width:100px;height:100px"},["div",{id:g+"_wrapper","class":"mceWrapper"+h},["div",{id:g+"_top","class":"mceTop"},["div",{"class":"mceLeft"}],["div",{"class":"mceCenter"}],["div",{"class":"mceRight"}],["span",{id:g+"_title"},d.title||""]],["div",{id:g+"_middle","class":"mceMiddle"},["div",{id:g+"_left","class":"mceLeft",tabindex:"0"}],["span",{id:g+"_content"}],["div",{id:g+"_right","class":"mceRight",tabindex:"0"}]],["div",{id:g+"_bottom","class":"mceBottom"},["div",{"class":"mceLeft"}],["div",{"class":"mceCenter"}],["div",{"class":"mceRight"}],["span",{id:g+"_status"},"Content"]],["a",{"class":"mceMove",tabindex:"-1",href:"javascript:;"}],["a",{"class":"mceMin",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{"class":"mceMax",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{"class":"mceMed",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{"class":"mceClose",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{id:g+"_resize_n","class":"mceResize mceResizeN",tabindex:"-1",href:"javascript:;"}],["a",{id:g+"_resize_s","class":"mceResize mceResizeS",tabindex:"-1",href:"javascript:;"}],["a",{id:g+"_resize_w","class":"mceResize mceResizeW",tabindex:"-1",href:"javascript:;"}],["a",{id:g+"_resize_e","class":"mceResize mceResizeE",tabindex:"-1",href:"javascript:;"}],["a",{id:g+"_resize_nw","class":"mceResize mceResizeNW",tabindex:"-1",href:"javascript:;"}],["a",{id:g+"_resize_ne","class":"mceResize mceResizeNE",tabindex:"-1",href:"javascript:;"}],["a",{id:g+"_resize_sw","class":"mceResize mceResizeSW",tabindex:"-1",href:"javascript:;"}],["a",{id:g+"_resize_se","class":"mceResize mceResizeSE",tabindex:"-1",href:"javascript:;"}]]]),a.setStyles(g,{top:-1e4,left:-1e4}),tinymce.isGecko&&a.setStyle(g,"overflow","auto"),d.type||(j+=a.get(g+"_left").clientWidth,j+=a.get(g+"_right").clientWidth,k+=a.get(g+"_top").clientHeight,k+=a.get(g+"_bottom").clientHeight),a.setStyles(g,{top:d.top,left:d.left,width:d.width+j,height:d.height+k}),r=d.url||d.file,r&&(tinymce.relaxedDomain&&(r+=(r.indexOf("?")==-1?"?":"&")+"mce_rdomain="+tinymce.relaxedDomain),r=tinymce._addVer(r)),d.type?(a.add(g+"_wrapper","a",{id:g+"_ok","class":"mceButton mceOk",href:"javascript:;",onmousedown:"return false;"},"Ok"),d.type=="confirm"&&a.add(g+"_wrapper","a",{"class":"mceButton mceCancel",href:"javascript:;",onmousedown:"return false;"},"Cancel"),a.add(g+"_middle","div",{"class":"mceIcon"}),a.setHTML(g+"_content",d.content.replace("\n","<br />")),c.add(g,"keyup",function(a){var b=27;if(a.keyCode===b)return d.button_func(!1),c.cancel(a)}),c.add(g,"keydown",function(b){var d,e=9;if(b.keyCode===e)return d=a.select("a.mceCancel",g+"_wrapper")[0],d&&d!==b.target?d.focus():a.get(g+"_ok").focus(),c.cancel(b)})):(a.add(g+"_content","iframe",{id:g+"_ifr",src:'javascript:""',frameBorder:0,style:"border:0;width:10px;height:10px"}),a.setStyles(g+"_ifr",{width:d.width,height:d.height}),a.setAttrib(g+"_ifr","src",r)),n=c.add(g,"mousedown",function(b){var d=b.target,e,h;e=f.windows[g],f.focus(g);if(d.nodeName=="A"||d.nodeName=="a"){if(d.className=="mceClose")return f.close(null,g),c.cancel(b);if(d.className=="mceMax")e.oldPos=e.element.getXY(),e.oldSize=e.element.getSize(),h=a.getViewPort(),h.w-=2,h.h-=2,e.element.moveTo(h.x,h.y),e.element.resizeTo(h.w,h.h),a.setStyles(g+"_ifr",{width:h.w-e.deltaWidth,height:h.h-e.deltaHeight}),a.addClass(g+"_wrapper","mceMaximized");else if(d.className=="mceMed")e.element.moveTo(e.oldPos.x,e.oldPos.y),e.element.resizeTo(e.oldSize.w,e.oldSize.h),e.iframeElement.resizeTo(e.oldSize.w-e.deltaWidth,e.oldSize.h-e.deltaHeight),a.removeClass(g+"_wrapper","mceMaximized");else{if(d.className=="mceMove")return f._startDrag(g,b,d.className);if(a.hasClass(d,"mceResize"))return f._startDrag(g,b,d.className.substring(13))}}}),o=c.add(g,"click",function(a){var b=a.target;f.focus(g);if(b.nodeName=="A"||b.nodeName=="a")switch(b.className){case"mceClose":return f.close(null,g),c.cancel(a);case"mceButton mceOk":case"mceButton mceCancel":return d.button_func(b.className=="mceButton mceOk"),c.cancel(a)}}),c.add([g+"_left",g+"_right"],"focus",function(b){var c=a.get(g+"_ifr");if(c){var d=c.contentWindow.document.body,e=a.select(":input:enabled,*[tabindex=0]",d);b.target.id===g+"_left"?e[e.length-1].focus():e[0].focus()}else a.get(g+"_ok").focus()}),q=f.windows[g]={id:g,mousedown_func:n,click_func:o,element:new b(g,{blocker:1,container:i.getContainer()}),iframeElement:new b(g+"_ifr"),features:d,deltaWidth:j,deltaHeight:k},q.iframeElement.on("focus",function(){f.focus(g)}),f.count==0&&f.editor.getParam("dialog_type","modal")=="modal"?(a.add(a.doc.body,"div",{id:"mceModalBlocker","class":(f.editor.settings.inlinepopups_skin||"clearlooks2")+"_modalBlocker",style:{zIndex:f.zIndex-1}}),a.show("mceModalBlocker"),a.setAttrib(a.doc.body,"aria-hidden","true")):a.setStyle("mceModalBlocker","z-index",f.zIndex-1),(tinymce.isIE6||/Firefox\/2\./.test(navigator.userAgent)||tinymce.isIE&&!a.boxModel)&&a.setStyles("mceModalBlocker",{position:"absolute",left:l.x,top:l.y,width:l.w-2,height:l.h-2}),a.setAttrib(g,"aria-hidden","false"),f.focus(g),f._fixIELayout(g,1),a.get(g+"_ok")&&a.get(g+"_ok").focus(),f.count++,q):f.parent(d,e)},focus:function(b){var c=this,d;if(d=c.windows[b])d.zIndex=this.zIndex++,d.element.setStyle("zIndex",d.zIndex),d.element.update(),b+="_wrapper",a.removeClass(c.lastId,"mceFocus"),a.addClass(b,"mceFocus"),c.lastId=b,d.focussedElement?d.focussedElement.focus():a.get(b+"_ok")?a.get(d.id+"_ok").focus():a.get(d.id+"_ifr")&&a.get(d.id+"_ifr").focus()},_addAll:function(a,b){var c,d,f=this,g=tinymce.DOM;if(e(b,"string"))a.appendChild(g.doc.createTextNode(b));else if(b.length){a=a.appendChild(g.create(b[0],b[1]));for(c=2;c<b.length;c++)f._addAll(a,b[c])}},_startDrag:function(d,e,f){function B(){if(k)return;g._fixIELayout(d,0),a.add(j.body,"div",{id:"mceEventBlocker","class":"mceEventBlocker "+(g.editor.settings.inlinepopups_skin||"clearlooks2"),style:{zIndex:g.zIndex+1}}),(tinymce.isIE6||tinymce.isIE&&!a.boxModel)&&a.setStyles("mceEventBlocker",{position:"absolute",left:s.x,top:s.y,width:s.w-2,height:s.h-2}),k=new b("mceEventBlocker"),k.update(),o=m.getXY(),p=m.getSize(),t=r.x+o.x-s.x,u=r.y+o.y-s.y,a.add(k.get(),"div",{id:"mcePlaceHolder","class":"mcePlaceHolder",style:{left:t,top:u,width:p.w,height:p.h}}),q=new b("mcePlaceHolder")}var g=this,h,i,j=a.doc,k,l=g.windows[d],m=l.element,n=m.getXY(),o,p,q,r,s,t,u,v,w,x,y,z,A;return r={x:0,y:0},s=a.getViewPort(),s.w-=2,s.h-=2,v=e.screenX,w=e.screenY,x=y=z=A=0,h=c.add(j,"mouseup",function(b){return c.remove(j,"mouseup",h),c.remove(j,"mousemove",i),k&&k.remove(),m.moveBy(x,y),m.resizeBy(z,A),p=m.getSize(),a.setStyles(d+"_ifr",{width:p.w-l.deltaWidth,height:p.h-l.deltaHeight}),g._fixIELayout(d,1),c.cancel(b)}),f!="Move"&&B(),i=c.add(j,"mousemove",function(a){var b,d,e;B(),b=a.screenX-v,d=a.screenY-w;switch(f){case"ResizeW":x=b,z=0-b;break;case"ResizeE":z=b;break;case"ResizeN":case"ResizeNW":case"ResizeNE":f=="ResizeNW"?(x=b,z=0-b):f=="ResizeNE"&&(z=b),y=d,A=0-d;break;case"ResizeS":case"ResizeSW":case"ResizeSE":f=="ResizeSW"?(x=b,z=0-b):f=="ResizeSE"&&(z=b),A=d;break;case"mceMove":x=b,y=d}return z<(e=l.features.min_width-p.w)&&(x!==0&&(x+=z-e),z=e),A<(e=l.features.min_height-p.h)&&(y!==0&&(y+=A-e),A=e),z=Math.min(z,l.features.max_width-p.w),A=Math.min(A,l.features.max_height-p.h),x=Math.max(x,s.x-(t+s.x)),y=Math.max(y,s.y-(u+s.y)),x=Math.min(x,s.w+s.x-(t+p.w+s.x)),y=Math.min(y,s.h+s.y-(u+p.h+s.y)),x+y!==0&&(t+x<0&&(x=0),u+y<0&&(y=0),q.moveTo(t+x,u+y)),z+A!==0&&q.resizeTo(p.w+z,p.h+A),c.cancel(a)}),c.cancel(e)},resizeBy:function(a,b,c){var d=this.windows[c];d&&(d.element.resizeBy(a,b),d.iframeElement.resizeBy(a,b))},close:function(b,d){var e=this,f,g=a.doc,h,d;d=e._findId(d||b);if(!e.windows[d]){e.parent(b);return}e.count--,e.count==0&&(a.remove("mceModalBlocker"),a.setAttrib(a.doc.body,"aria-hidden","false"),e.editor.focus());if(f=e.windows[d])e.onClose.dispatch(e),c.remove(g,"mousedown",f.mousedownFunc),c.remove(g,"click",f.clickFunc),c.clear(d),c.clear(d+"_ifr"),a.setAttrib(d+"_ifr","src",'javascript:""'),f.element.remove(),delete e.windows[d],h=e._frontWindow(),h&&e.focus(h.id)},_frontWindow:function(){var a,b=0;return d(this.windows,function(c){c.zIndex>b&&(a=c,b=c.zIndex)}),a},setTitle:function(b,c){var d;b=this._findId(b);if(d=a.get(b+"_title"))d.innerHTML=a.encode(c)},alert:function(b,c,d){var e=this,f;f=e.open({title:e,type:"alert",button_func:function(a){c&&c.call(a||e,a),e.close(null,f.id)},content:a.encode(e.editor.getLang(b,b)),inline:1,width:400,height:130})},confirm:function(b,c,d){var e=this,f;f=e.open({title:e,type:"confirm",button_func:function(a){c&&c.call(a||e,a),e.close(null,f.id)},content:a.encode(e.editor.getLang(b,b)),inline:1,width:400,height:130})},_findId:function(b){var c=this;return typeof b=="string"?b:(d(c.windows,function(c){var d=a.get(c.id+"_ifr");if(d&&b==d.contentWindow)return b=c.id,!1}),b)},_fixIELayout:function(b,c){var e,f;if(!tinymce.isIE6)return;d(["n","s","w","e","nw","ne","sw","se"],function(d){var e=a.get(b+"_resize_"+d);a.setStyles(e,{width:c?e.clientWidth:"",height:c?e.clientHeight:"",cursor:a.getStyle(e,"cursor",1)}),a.setStyle(b+"_bottom","bottom","-1px"),e=0});if(e=this.windows[b])e.element.hide(),e.element.show(),d(a.select("div,a",b),function(a,b){a.currentStyle.backgroundImage!="none"&&(f=new Image,f.src=a.currentStyle.backgroundImage.replace(/url\(\"(.+)\"\)/,"$1"))}),a.get(b).style.filter=""}}),tinymce.PluginManager.add("inlinepopups",tinymce.plugins.InlinePopups)})();