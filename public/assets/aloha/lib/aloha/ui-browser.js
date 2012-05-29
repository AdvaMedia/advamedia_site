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
define(["aloha/ext","aloha/ui"],function(a,b){var c=window.Class;b.Browser=c.extend({_constructor:function(){this.onSelect=null;var b=this;this.grid=new a.grid.GridPanel({region:"center",autoScroll:!0,store:new a.data.Store({proxy:new a.data.AlohaProxy,reader:new a.data.AlohaObjectReader}),columns:[{id:"name",header:"Name",width:100,sortable:!0,dataIndex:"name"},{header:"URL",renderer:function(a){return a},width:300,sortable:!0,dataIndex:"url"}],stripeRows:!0,autoExpandColumn:"name",height:350,width:600,title:"Objectlist",stateful:!0,stateId:"grid",selModel:new a.grid.RowSelectionModel({singleSelect:!0}),listeners:{dblclick:function(a){b.onItemSelect()}}}),this.grid.getSelectionModel().on({selectionchange:function(a,c,d){var e=b.grid.getSelectionModel().getSelected();e?this.win.buttons[1].enable():this.win.buttons[1].disable()},scope:this}),this.tree=new a.tree.TreePanel({region:"center",useArrows:!0,autoScroll:!0,animate:!0,enableDD:!0,containerScroll:!0,border:!1,loader:new a.tree.AlohaTreeLoader,root:{nodeType:"async",text:"Aloha Repositories",draggable:!1,id:"aloha"},rootVisible:!1,listeners:{beforeload:function(a){this.loader.baseParams={node:a.attributes}}}}),this.tree.getSelectionModel().on({selectionchange:function(a,c){if(c){var d=c.attributes;b.grid.store.load({params:{inFolderId:d.id,objectTypeFilter:b.objectTypeFilter,repositoryId:d.repositoryId}})}},scope:this}),this.nav=new a.Panel({title:"Navigation",region:"west",width:300,layout:"fit",collapsible:!0,items:[this.tree]}),this.win=new a.Window({title:"Resource Selector",layout:"border",width:800,height:300,closeAction:"hide",onEsc:function(){this.hide()},defaultButton:this.nav,plain:!0,initHidden:!0,items:[this.nav,this.grid],buttons:[{text:"Close",handler:function(){b.win.hide()}},{text:"Select",disabled:!0,handler:function(){b.onItemSelect()}}],toFront:function(b){return this.manager=this.manager||a.WindowMgr,this.manager.bringToFront(this),this.setZIndex(9999999999),this}}),this.onItemSelect=function(){var a=this.grid.getSelectionModel(),b=a?a.getSelected():null,c=b?b.data:null;this.win.hide(),typeof this.onSelect=="function"&&this.onSelect.call(this,c)}},setObjectTypeFilter:function(a){this.objectTypeFilter=a},getObjectTypeFilter:function(){return this.objectTypeFilter},show:function(){this.win.show(),this.win.toFront(!0),this.win.focus()}})});