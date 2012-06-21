(function(){var e=tinymce.DOM,t=tinymce.dom.Element,n=tinymce.dom.Event,r=tinymce.each,i=tinymce.is;tinymce.create("tinymce.plugins.InlinePopups",{init:function(t,n){t.onBeforeRenderUI.add(function(){t.windowManager=new tinymce.InlineWindowManager(t),e.loadCSS(n+"/skins/"+(t.settings.inlinepopups_skin||"clearlooks2")+"/window.css")})},getInfo:function(){return{longname:"InlinePopups",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/inlinepopups",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.create("tinymce.InlineWindowManager:tinymce.WindowManager",{InlineWindowManager:function(e){var t=this;t.parent(e),t.zIndex=3e5,t.count=0,t.windows={}},open:function(r,i){var s=this,o,u="",f=s.editor,l=0,c=0,h,p,v,m,g,y,w,E;return r=r||{},i=i||{},r.inline?(E=s._frontWindow(),E&&e.get(E.id+"_ifr")&&(E.focussedElement=e.get(E.id+"_ifr").contentWindow.document.activeElement),r.type||(s.bookmark=f.selection.getBookmark(1)),o=e.uniqueId(),h=e.getViewPort(),r.width=parseInt(r.width||320),r.height=parseInt(r.height||240)+(tinymce.isIE?8:0),r.min_width=parseInt(r.min_width||150),r.min_height=parseInt(r.min_height||100),r.max_width=parseInt(r.max_width||2e3),r.max_height=parseInt(r.max_height||2e3),r.left=r.left||Math.round(Math.max(h.x,h.x+h.w/2-r.width/2)),r.top=r.top||Math.round(Math.max(h.y,h.y+h.h/2-r.height/2)),r.movable=r.resizable=!0,i.mce_width=r.width,i.mce_height=r.height,i.mce_inline=!0,i.mce_window_id=o,i.mce_auto_focus=r.auto_focus,s.features=r,s.params=i,s.onOpen.dispatch(s,r,i),r.type&&(u+=" mceModal",r.type&&(u+=" mce"+r.type.substring(0,1).toUpperCase()+r.type.substring(1)),r.resizable=!1),r.statusbar&&(u+=" mceStatusbar"),r.resizable&&(u+=" mceResizable"),r.minimizable&&(u+=" mceMinimizable"),r.maximizable&&(u+=" mceMaximizable"),r.movable&&(u+=" mceMovable"),s._addAll(e.doc.body,["div",{id:o,role:"dialog","aria-labelledby":r.type?o+"_content":o+"_title","class":(f.settings.inlinepopups_skin||"clearlooks2")+(tinymce.isIE&&window.getSelection?" ie9":""),style:"width:100px;height:100px"},["div",{id:o+"_wrapper","class":"mceWrapper"+u},["div",{id:o+"_top","class":"mceTop"},["div",{"class":"mceLeft"}],["div",{"class":"mceCenter"}],["div",{"class":"mceRight"}],["span",{id:o+"_title"},r.title||""]],["div",{id:o+"_middle","class":"mceMiddle"},["div",{id:o+"_left","class":"mceLeft",tabindex:"0"}],["span",{id:o+"_content"}],["div",{id:o+"_right","class":"mceRight",tabindex:"0"}]],["div",{id:o+"_bottom","class":"mceBottom"},["div",{"class":"mceLeft"}],["div",{"class":"mceCenter"}],["div",{"class":"mceRight"}],["span",{id:o+"_status"},"Content"]],["a",{"class":"mceMove",tabindex:"-1",href:"javascript:;"}],["a",{"class":"mceMin",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{"class":"mceMax",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{"class":"mceMed",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{"class":"mceClose",tabindex:"-1",href:"javascript:;",onmousedown:"return false;"}],["a",{id:o+"_resize_n","class":"mceResize mceResizeN",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_s","class":"mceResize mceResizeS",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_w","class":"mceResize mceResizeW",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_e","class":"mceResize mceResizeE",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_nw","class":"mceResize mceResizeNW",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_ne","class":"mceResize mceResizeNE",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_sw","class":"mceResize mceResizeSW",tabindex:"-1",href:"javascript:;"}],["a",{id:o+"_resize_se","class":"mceResize mceResizeSE",tabindex:"-1",href:"javascript:;"}]]]),e.setStyles(o,{top:-1e4,left:-1e4}),tinymce.isGecko&&e.setStyle(o,"overflow","auto"),r.type||(l+=e.get(o+"_left").clientWidth,l+=e.get(o+"_right").clientWidth,c+=e.get(o+"_top").clientHeight,c+=e.get(o+"_bottom").clientHeight),e.setStyles(o,{top:r.top,left:r.left,width:r.width+l,height:r.height+c}),w=r.url||r.file,w&&(tinymce.relaxedDomain&&(w+=(w.indexOf("?")==-1?"?":"&")+"mce_rdomain="+tinymce.relaxedDomain),w=tinymce._addVer(w)),r.type?(e.add(o+"_wrapper","a",{id:o+"_ok","class":"mceButton mceOk",href:"javascript:;",onmousedown:"return false;"},"Ok"),r.type=="confirm"&&e.add(o+"_wrapper","a",{"class":"mceButton mceCancel",href:"javascript:;",onmousedown:"return false;"},"Cancel"),e.add(o+"_middle","div",{"class":"mceIcon"}),e.setHTML(o+"_content",r.content.replace("\n","<br />")),n.add(o,"keyup",function(e){var t=27;if(e.keyCode===t)return r.button_func(!1),n.cancel(e)}),n.add(o,"keydown",function(t){var r,i=9;if(t.keyCode===i)return r=e.select("a.mceCancel",o+"_wrapper")[0],r&&r!==t.target?r.focus():e.get(o+"_ok").focus(),n.cancel(t)})):(e.add(o+"_content","iframe",{id:o+"_ifr",src:'javascript:""',frameBorder:0,style:"border:0;width:10px;height:10px"}),e.setStyles(o+"_ifr",{width:r.width,height:r.height}),e.setAttrib(o+"_ifr","src",w)),v=n.add(o,"mousedown",function(t){var r=t.target,i,u;i=s.windows[o],s.focus(o);if(r.nodeName=="A"||r.nodeName=="a"){if(r.className=="mceClose")return s.close(null,o),n.cancel(t);if(r.className=="mceMax")i.oldPos=i.element.getXY(),i.oldSize=i.element.getSize(),u=e.getViewPort(),u.w-=2,u.h-=2,i.element.moveTo(u.x,u.y),i.element.resizeTo(u.w,u.h),e.setStyles(o+"_ifr",{width:u.w-i.deltaWidth,height:u.h-i.deltaHeight}),e.addClass(o+"_wrapper","mceMaximized");else if(r.className=="mceMed")i.element.moveTo(i.oldPos.x,i.oldPos.y),i.element.resizeTo(i.oldSize.w,i.oldSize.h),i.iframeElement.resizeTo(i.oldSize.w-i.deltaWidth,i.oldSize.h-i.deltaHeight),e.removeClass(o+"_wrapper","mceMaximized");else{if(r.className=="mceMove")return s._startDrag(o,t,r.className);if(e.hasClass(r,"mceResize"))return s._startDrag(o,t,r.className.substring(13))}}}),m=n.add(o,"click",function(e){var t=e.target;s.focus(o);if(t.nodeName=="A"||t.nodeName=="a")switch(t.className){case"mceClose":return s.close(null,o),n.cancel(e);case"mceButton mceOk":case"mceButton mceCancel":return r.button_func(t.className=="mceButton mceOk"),n.cancel(e)}}),n.add([o+"_left",o+"_right"],"focus",function(t){var n=e.get(o+"_ifr");if(n){var r=n.contentWindow.document.body,i=e.select(":input:enabled,*[tabindex=0]",r);t.target.id===o+"_left"?i[i.length-1].focus():i[0].focus()}else e.get(o+"_ok").focus()}),y=s.windows[o]={id:o,mousedown_func:v,click_func:m,element:new t(o,{blocker:1,container:f.getContainer()}),iframeElement:new t(o+"_ifr"),features:r,deltaWidth:l,deltaHeight:c},y.iframeElement.on("focus",function(){s.focus(o)}),s.count==0&&s.editor.getParam("dialog_type","modal")=="modal"?(e.add(e.doc.body,"div",{id:"mceModalBlocker","class":(s.editor.settings.inlinepopups_skin||"clearlooks2")+"_modalBlocker",style:{zIndex:s.zIndex-1}}),e.show("mceModalBlocker"),e.setAttrib(e.doc.body,"aria-hidden","true")):e.setStyle("mceModalBlocker","z-index",s.zIndex-1),(tinymce.isIE6||/Firefox\/2\./.test(navigator.userAgent)||tinymce.isIE&&!e.boxModel)&&e.setStyles("mceModalBlocker",{position:"absolute",left:h.x,top:h.y,width:h.w-2,height:h.h-2}),e.setAttrib(o,"aria-hidden","false"),s.focus(o),s._fixIELayout(o,1),e.get(o+"_ok")&&e.get(o+"_ok").focus(),s.count++,y):s.parent(r,i)},focus:function(t){var n=this,r;if(r=n.windows[t])r.zIndex=this.zIndex++,r.element.setStyle("zIndex",r.zIndex),r.element.update(),t+="_wrapper",e.removeClass(n.lastId,"mceFocus"),e.addClass(t,"mceFocus"),n.lastId=t,r.focussedElement?r.focussedElement.focus():e.get(t+"_ok")?e.get(r.id+"_ok").focus():e.get(r.id+"_ifr")&&e.get(r.id+"_ifr").focus()},_addAll:function(e,t){var n,r,s=this,o=tinymce.DOM;if(i(t,"string"))e.appendChild(o.doc.createTextNode(t));else if(t.length){e=e.appendChild(o.create(t[0],t[1]));for(n=2;n<t.length;n++)s._addAll(e,t[n])}},_startDrag:function(r,i,s){function O(){if(c)return;o._fixIELayout(r,0),e.add(l.body,"div",{id:"mceEventBlocker","class":"mceEventBlocker "+(o.editor.settings.inlinepopups_skin||"clearlooks2"),style:{zIndex:o.zIndex+1}}),(tinymce.isIE6||tinymce.isIE&&!e.boxModel)&&e.setStyles("mceEventBlocker",{position:"absolute",left:E.x,top:E.y,width:E.w-2,height:E.h-2}),c=new t("mceEventBlocker"),c.update(),m=p.getXY(),g=p.getSize(),S=w.x+m.x-E.x,x=w.y+m.y-E.y,e.add(c.get(),"div",{id:"mcePlaceHolder","class":"mcePlaceHolder",style:{left:S,top:x,width:g.w,height:g.h}}),y=new t("mcePlaceHolder")}var o=this,u,f,l=e.doc,c,h=o.windows[r],p=h.element,v=p.getXY(),m,g,y,w,E,S,x,T,N,C,k,L,A;return w={x:0,y:0},E=e.getViewPort(),E.w-=2,E.h-=2,T=i.screenX,N=i.screenY,C=k=L=A=0,u=n.add(l,"mouseup",function(t){return n.remove(l,"mouseup",u),n.remove(l,"mousemove",f),c&&c.remove(),p.moveBy(C,k),p.resizeBy(L,A),g=p.getSize(),e.setStyles(r+"_ifr",{width:g.w-h.deltaWidth,height:g.h-h.deltaHeight}),o._fixIELayout(r,1),n.cancel(t)}),s!="Move"&&O(),f=n.add(l,"mousemove",function(e){var t,r,i;O(),t=e.screenX-T,r=e.screenY-N;switch(s){case"ResizeW":C=t,L=0-t;break;case"ResizeE":L=t;break;case"ResizeN":case"ResizeNW":case"ResizeNE":s=="ResizeNW"?(C=t,L=0-t):s=="ResizeNE"&&(L=t),k=r,A=0-r;break;case"ResizeS":case"ResizeSW":case"ResizeSE":s=="ResizeSW"?(C=t,L=0-t):s=="ResizeSE"&&(L=t),A=r;break;case"mceMove":C=t,k=r}return L<(i=h.features.min_width-g.w)&&(C!==0&&(C+=L-i),L=i),A<(i=h.features.min_height-g.h)&&(k!==0&&(k+=A-i),A=i),L=Math.min(L,h.features.max_width-g.w),A=Math.min(A,h.features.max_height-g.h),C=Math.max(C,E.x-(S+E.x)),k=Math.max(k,E.y-(x+E.y)),C=Math.min(C,E.w+E.x-(S+g.w+E.x)),k=Math.min(k,E.h+E.y-(x+g.h+E.y)),C+k!==0&&(S+C<0&&(C=0),x+k<0&&(k=0),y.moveTo(S+C,x+k)),L+A!==0&&y.resizeTo(g.w+L,g.h+A),n.cancel(e)}),n.cancel(i)},resizeBy:function(e,t,n){var r=this.windows[n];r&&(r.element.resizeBy(e,t),r.iframeElement.resizeBy(e,t))},close:function(t,r){var i=this,s,o=e.doc,u,r;r=i._findId(r||t);if(!i.windows[r]){i.parent(t);return}i.count--,i.count==0&&(e.remove("mceModalBlocker"),e.setAttrib(e.doc.body,"aria-hidden","false"),i.editor.focus());if(s=i.windows[r])i.onClose.dispatch(i),n.remove(o,"mousedown",s.mousedownFunc),n.remove(o,"click",s.clickFunc),n.clear(r),n.clear(r+"_ifr"),e.setAttrib(r+"_ifr","src",'javascript:""'),s.element.remove(),delete i.windows[r],u=i._frontWindow(),u&&i.focus(u.id)},_frontWindow:function(){var e,t=0;return r(this.windows,function(n){n.zIndex>t&&(e=n,t=n.zIndex)}),e},setTitle:function(t,n){var r;t=this._findId(t);if(r=e.get(t+"_title"))r.innerHTML=e.encode(n)},alert:function(t,n,r){var i=this,s;s=i.open({title:i,type:"alert",button_func:function(e){n&&n.call(e||i,e),i.close(null,s.id)},content:e.encode(i.editor.getLang(t,t)),inline:1,width:400,height:130})},confirm:function(t,n,r){var i=this,s;s=i.open({title:i,type:"confirm",button_func:function(e){n&&n.call(e||i,e),i.close(null,s.id)},content:e.encode(i.editor.getLang(t,t)),inline:1,width:400,height:130})},_findId:function(t){var n=this;return typeof t=="string"?t:(r(n.windows,function(n){var r=e.get(n.id+"_ifr");if(r&&t==r.contentWindow)return t=n.id,!1}),t)},_fixIELayout:function(t,n){var i,s;if(!tinymce.isIE6)return;r(["n","s","w","e","nw","ne","sw","se"],function(r){var i=e.get(t+"_resize_"+r);e.setStyles(i,{width:n?i.clientWidth:"",height:n?i.clientHeight:"",cursor:e.getStyle(i,"cursor",1)}),e.setStyle(t+"_bottom","bottom","-1px"),i=0});if(i=this.windows[t])i.element.hide(),i.element.show(),r(e.select("div,a",t),function(e,t){e.currentStyle.backgroundImage!="none"&&(s=new Image,s.src=e.currentStyle.backgroundImage.replace(/url\(\"(.+)\"\)/,"$1"))}),e.get(t).style.filter=""}}),tinymce.PluginManager.add("inlinepopups",tinymce.plugins.InlinePopups)})();