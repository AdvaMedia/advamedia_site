/*!
* This file is part of Aloha Editor Project http://aloha-editor.org
* Copyright ï¿½ 2010-2011 Gentics Software GmbH, aloha@gentics.com
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
define(["aloha/jquery"],function(a,b){var c=a;return{_eventHandlers:null,bind:function(a,b,c){this._eventHandlers=this._eventHandlers||{},this._eventHandlers[a]||(this._eventHandlers[a]=[]),this._eventHandlers[a].push({handler:b,scope:c?c:window})},unbind:function(a,b){this._eventHandlers=this._eventHandlers||{};if(!this._eventHandlers[a])return;b?this._eventHandlers[a]=c.grep(this._eventHandlers[a],function(a){return a.handler===b?!1:!0}):this._eventHandlers[a]=[]},trigger:function(a){this._eventHandlers=this._eventHandlers||{};if(!this._eventHandlers[a])return;var b=[];c.each(arguments,function(a,c){a>0&&b.push(c)}),c.each(this._eventHandlers[a],function(a,c){c.handler.apply(c.scope,b)})},unbindAll:function(){this._eventHandlers=null}}});