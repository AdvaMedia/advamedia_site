/*!
* This file is part of Aloha Editor Project http://aloha-editor.org
* Copyright (c) 2010-2011 Gentics Software GmbH, aloha@gentics.com
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
define(["aloha/ext","aloha/repositorymanager"],function(a,b){a.tree.AlohaTreeLoader=function(b){a.apply(this,b),a.tree.AlohaTreeLoader.superclass.constructor.call(this)},a.extend(a.tree.AlohaTreeLoader,a.tree.TreeLoader,{paramOrder:["node","id"],nodeParameter:"id",directFn:function(a,c,d){var e={inFolderId:a.id,objectTypeFilter:this.objectTypeFilter,repositoryId:a.repositoryId};b.getChildren(e,function(b){var c={};c={status:!0,scope:this,argument:{callback:d,node:a}},typeof d=="function"&&d(b,c)})},createNode:function(b){return b.name&&(b.text=b.name),b.hasMoreItems&&(b.leaf=!b.hasMoreItems),b.objectType&&(b.cls=b.objectType),a.tree.TreeLoader.prototype.createNode.call(this,b)},objectTypeFilter:null,setObjectTypeFilter:function(a){this.objectTypeFilter=a},getObjectTypeFilter:function(){return this.objectTypeFilter}})});