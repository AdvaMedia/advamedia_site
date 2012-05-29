/*!
* This file is part of Aloha Editor Project http://aloha-editor.org
* Copyright Â© 2010-2011 Gentics Software GmbH, aloha@gentics.com
* Contributors http://aloha-editor.org/contribution.php 
* Licensed unter the terms of http://www.aloha-editor.org/license.html
*/
/*
* Aloha Editor is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.*
*
* Aloha Editor is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with this program. If not, see <http://www.gnu.org/licenses/>.
*/
define(["aloha/core","util/class","aloha/jquery"],function(a,b,c){var d=window.GENTICS;a.Message=b.extend({_constructor:function(a){this.title=a.title,this.text=a.text,this.type=a.type,this.callback=a.callback},toString:function(){return this.type+": "+this.message}}),a.Message.Type={CONFIRM:"confirm",ALERT:"alert",WAIT:"wait"},a.MessageLine=b.extend({messages:[],add:function(a){var b="",d=this.messages.length,e;this.messages[d]=a;while(d>4)this.messages.shift(),--d;for(e=0;e<d;e++)b+=this.messages[e].toString()+"<br/>";c("#gtx_aloha_messageline").html(b)}}),a.MessageLine=new a.MessageLine});