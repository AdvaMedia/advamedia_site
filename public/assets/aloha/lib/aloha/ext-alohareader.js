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
define(["aloha/ext"],function(a){a.data.AlohaObjectReader=function(b,c){b={},a.applyIf(b,{idProperty:"id",root:"items",totalProperty:"results",fields:["id","url","name","type","weight","path","repositoryId"]}),a.data.JsonReader.superclass.constructor.call(this,b,b.fields)},a.extend(a.data.AlohaObjectReader,a.data.JsonReader,{})});