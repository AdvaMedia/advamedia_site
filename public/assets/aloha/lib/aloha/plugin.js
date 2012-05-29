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
define(["aloha/core","aloha/jquery","util/class","aloha/pluginmanager","aloha/console"],function(a,b,c,d,e){var f=c.extend({name:null,defaults:{},settings:{},dependencies:[],_constructor:function(a){typeof a!="string"?e.error("Cannot initialise unnamed plugin, skipping"):this.name=a},checkDependencies:function(){var c=!0,d=this;return b.each(this.dependencies,function(){a.isPluginLoaded(this)||(c=!1,e.error("plugin."+d.name,'Required plugin "'+this+'" not found.'))}),c},init:function(){},getEditableConfig:function(a){var c=null,d=!1,e=this;return this.settings.editables&&b.each(this.settings.editables,function(f,g){if(a.is(f)){d=!0;if(g instanceof Array)c=[],c=b.merge(c,g);else if(typeof g=="object"){c={};for(var h in g)g.hasOwnProperty(h)&&(g[h]instanceof Array||(typeof g[h]=="object"?(c[h]={},c[h]=b.extend(!0,c[h],e.config[h],g[h])):c[h]=g[h]))}else c=g}}),d||(typeof this.settings.config=="undefined"||!this.settings.config?c=this.config:c=this.settings.config),c},makeClean:function(a){},getUID:function(a){return e.deprecated("plugin","getUID() is deprecated. Use plugin.name instead."),this.name},i18n:function(b,c){return e.deprecated("plugin","i18n() is deprecated. Use plugin.t() instead."),a.i18n(this,b,c)},toString:function(){return this.name},log:function(a,b){e.deprecated("plugin","log() is deprecated. Use Aloha.console instead."),e.log(a,this,b)}});return f.create=function(c,e){var g=new(f.extend(e))(c);return g.settings=b.extendObjects(!0,g.defaults,a.settings[c]),d.register(g),g},f});