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
// Do not add dependencies that require depend on aloha/core
define(["aloha/jquery","util/class"],function(a,b){return new(b.extend({plugins:{},init:function(a,b){var c=this,d=Aloha&&Aloha.settings?Aloha.settings.plugins||{}:{},e,f,g;for(g in d)d.hasOwnProperty(g)&&(f=this.plugins[g]||!1,f&&(f.settings=d[g]||{}));if(!b.length)for(g in this.plugins)this.plugins.hasOwnProperty(g)&&b.push(g);for(e=0;e<b.length;++e)g=b[e],f=this.plugins[g]||!1,f&&(f.settings=f.settings||{},typeof f.settings.enabled=="undefined"&&(f.settings.enabled=!0),f.settings.enabled&&f.checkDependencies()&&f.init());a()},register:function(a){if(!a.name)throw new Error("Plugin does not have an name.");if(this.plugins[a.name])throw new Error('Already registered the plugin "'+a.name+'"!');this.plugins[a.name]=a},makeClean:function(a){var b,c;for(c in this.plugins)this.plugins.hasOwnProperty(c)&&(Aloha.Log.isDebugEnabled()&&Aloha.Log.debug(this,"Passing contents of HTML Element with id { "+a.attr("id")+" } for cleaning to plugin { "+c+" }"),this.plugins[c].makeClean(a))},toString:function(){return"pluginmanager"}}))});