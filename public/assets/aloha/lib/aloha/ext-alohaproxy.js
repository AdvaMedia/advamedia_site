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
define(["aloha/jquery","aloha/ext","aloha/repositorymanager","aloha/console","i18n!aloha/nls/i18n"],function(a,b,c,d){b.data.AlohaProxy=function(){var a={};a[b.data.Api.actions.read]=!0,b.data.AlohaProxy.superclass.constructor.call(this,{api:a}),this.params={queryString:null,objectTypeFilter:null,filter:null,inFolderId:null,orderBy:null,maxItems:null,skipCount:null,renditionFilter:null,repositoryId:null}};var e=Aloha.require("i18n!aloha/nls/i18n");b.extend(b.data.AlohaProxy,b.data.DataProxy,{doRequest:function(b,e,f,g,h,i,j){a.extend(this.params,f);try{c.query(this.params,function(a){h.call(i,g.readRecords(a),j,!0)})}catch(k){return d.error("Ext.data.AlohaProxy","An error occured while querying repositories."),this.fireEvent("loadexception",this,null,j,k),this.fireEvent("exception",this,"response",b,j,null,k),!1}},setObjectTypeFilter:function(a){this.params.objectTypeFilter=a},getObjectTypeFilter:function(){return this.params.objectTypeFilter},setParams:function(b){a.extend(this.params,b)}})});