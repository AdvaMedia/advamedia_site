/*
 * Repository
 * Copyright (c) 2010 Nicolas Karageuzian - http://nka.me
 */
define(["aloha/jquery","aloha/repository","aloha/repository","i18n!aloha/nls/i18n"],function(a,b,c){var e=a,f=window.GENTICS,g=window.Aloha,h={_constructor:function(a,b){var c=new this.UploadFolder({id:"Uploads",name:"Uploads",displayName:"Uploads",parentId:"/",path:"Uploads",objectType:"folder",type:"folder",repositoryId:a});g.Log.info(g,"_constructor : Initializing default uploader"),this._super(a,b),this.uploadFolder=c,this.objects=[c];var d=this;this.uploadQueue={queue:[],push:function(a){this.queue.push(a)},pop:function(){var a=this.queue[0];return this.queue=this.queue.splice(1),a},processQueue:function(){var a;if(!this.processUpload){this.processUpload=!0;while(this.queue.length>0)a=this.pop(),a.startUpload();this.processUpload=!1}}}},config:{method:"POST",callback:function(a){return a},url:"",accept:"application/json",file_name_param:"filename",file_name_header:"X-File-Name",extra_headers:{},extra_post_data:{},send_multipart_form:!1,www_encoded:!1,image:{max_width:800,max_height:800},fieldName:function(){return"filename"}},query:function(a,b){g.Log.info(this,"Query Uploader");var c=[];a.inFolderId==this.repositoryId&&a.queryString==null?c=this.objects:c=this.objects.filter(function(b,c,d){var e=new RegExp(a.queryString,"i"),f=!1;try{(!a.queryString||b.url.match(e))&&a.inFolderId==b.parentId&&(f=!0)}catch(g){}return f}),b.call(this,c)},getChildren:function(a,b){d=[];var c=a.inFolderId.split("")[0];c==""&&(c="/"),d=this.objects.filter(function(a,b,d){return a.parentId==c?!0:!1}),b.call(this,d)},addFileUpload:function(a){var b="",c=this.objects.filter(function(b,c,d){return b.name==a.name?!0:!1});if(c.length>0)return c[0];var d=this.objects.length,f="ALOHA_idx_file"+d,g={};return e.extend(!0,g,this.config),this.objects.push(new this.UploadFile({file:a,id:f,name:a.name,displayName:a.name,parentId:"Uploads",path:"Uploads",url:"Uploads",objectType:"file",type:"file",ulProgress:0,parent:this.uploadFolder,repositoryId:this.repositoryId})),this.objects[d]},startFileUpload:function(a,b){var c="",d=this.objects.filter(function(b,c,d){return b.id==a?!0:!1});d.length>0?(e.extend(!0,b,this.upload_conf),d[0].upload_config=b,this.uploadQueue.push(d[0]),this.uploadQueue.processQueue()):g.Log.error(this,"No file with that id")},UploadFolder:g.RepositoryFolder.extend({_constructor:function(a){this._super(a)},getDataObject:function(a){return repo=g.RepositoryManager.getRepository(a.data.repositoryId),d=repo.objects.filter(function(b,c,d){return b.id==a.data.id&&b.file?!0:!1}),d.length>0?d[0]:null}}),UploadFile:g.RepositoryDocument.extend({_constructor:function(a){var b=this.xhr,c=this;this._super(a),b.upload.onprogress=function(a){c.loaded=a.loaded,c.total=a.total,c.ulProgress=a.loaded/a.total,g.trigger("aloha-upload-progress",c),b.onload=function(a){try{c.src=c.upload_config.callback(b.responseText),g.trigger("aloha-upload-success",c)}catch(d){g.trigger("aloha-upload-failure",c)}},b.onabort=function(){g.trigger("aloha-upload-abort",c)},b.onerror=function(a){g.trigger("aloha-upload-error",c)}}},xhr:new XMLHttpRequest,contentTypeHeader:"text/plain; charset=x-user-defined-binary",startUpload:function(){var b=this.xhr,c=this.upload_config,d=this,e;b.open(c.method,typeof c.url=="function"?c.url(number):c.url,!0),b.setRequestHeader("Cache-Control","no-cache"),b.setRequestHeader("X-Requested-With","XMLHttpRequest"),b.setRequestHeader(c.file_name_header,this.file.fileName),b.setRequestHeader("X-File-Size",this.file.fileSize),b.setRequestHeader("Accept",c.accept);if(!c.send_multipart_form){b.setRequestHeader("Content-Type",this.file.type+";base64"),b.overrideMimeType(this.file.type);var f=a("<canvas>").first(),h={},i=new Image;g.Log.debug(g,"Original Data (length:"+this.file.data.length+") = "+this.file.data.substring(0,30)),i.onload=function(){h={height:i.height,width:i.width},i.width>i.height?i.width>c.image.max_width&&(h.width=c.image.max_width,h.height=i.height*c.image.max_width/i.width):i.height>c.image.max_height&&(h.height=c.image.max_height,h.width=i.width*c.image.max_height/i.height);var a=document.createElement("canvas");a.setAttribute("width",h.width),a.setAttribute("height",h.height),a.getContext("2d").drawImage(i,0,0,i.width,i.height,0,0,h.width,h.height),e=a.toDataURL(d.file.type),g.Log.debug(g,"Sent Data (length:"+e.length+") = "+e.substring(0,30)),b.send(e)},i.src=this.file.data}else if(window.FormData){var j=new FormData;j.append(typeof c.fieldName=="function"?c.fieldName():c.fieldName,this.file),b.send(j)}else if(this.file.getAsBinary){var k=(1e12+Math.floor(Math.random()*8999999999998)).toString(),l="--",m="\r\n",n="";n+=l,n+=k,n+=m,n+='Content-Disposition: form-data; name="'+(typeof c.fieldName=="function"?c.fieldName():c.fieldName)+'"',n+='; filename="'+this.file.fileName+'"',n+=m,n+="Content-Type: application/octet-stream",n+=m,n+=m,n+=this.file.getAsBinary(),n+=m,n+=l,n+=k,n+=l,n+=m,b.setRequestHeader("content-type","multipart/form-data; boundary="+k),b.sendAsBinary(n)}else c.onBrowserIncompatible()}})};return b.extend(h)});