/*!
* CommandManager file is part of Aloha Editor Project http://aloha-editor.org
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
* along with CommandManager program. If not, see <http://www.gnu.org/licenses/>.
*/
define(["aloha/core","aloha/registry","aloha/engine","util/dom","aloha/contenthandlermanager"],function(a,b,c,d,e){var f={execCommand:function(b,f,g,h){if(!h){if(!a.getSelection().getRangeCount())return;h=a.getSelection().getRangeAt(0)}b=="insertHTML"&&(g=e.handleContent(g,{contenthandler:a.settings.contentHandler.insertHtml})),c.execCommand(b,f,g,h);if(a.getSelection().getRangeCount()){h=a.getSelection().getRangeAt(0);var i=h.commonAncestorContainer.parentNode,j=new window.GENTICS.Utils.RangeObject;j.startContainer=h.startContainer,j.startOffset=h.startOffset,j.endContainer=h.endContainer,j.endOffset=h.endOffset,d.doCleanup({merge:!0,removeempty:!1},j,i),j.select()}a.trigger("aloha-command-executed",b)},queryCommandEnabled:function(b,d){if(!d){if(!a.getSelection().getRangeCount())return;d=a.getSelection().getRangeAt(0)}return c.queryCommandEnabled(b,d)},queryCommandIndeterm:function(b,d){if(!d){if(!a.getSelection().getRangeCount())return;d=a.getSelection().getRangeAt(0)}return c.queryCommandIndeterm(b,d)},queryCommandState:function(b,d){if(!d){if(!a.getSelection().getRangeCount())return;d=a.getSelection().getRangeAt(0)}return c.queryCommandState(b,d)},queryCommandSupported:function(a){return c.queryCommandSupported(a)},queryCommandValue:function(b,d){if(!d){if(!a.getSelection().getRangeCount())return;d=a.getSelection().getRangeAt(0)}return c.queryCommandValue(b,d)},querySupportedCommands:function(){var a=[],b;for(b in c.commands)a.push(b);return a}};return f=new(b.extend(f)),a.execCommand=f.execCommand,a.queryCommandEnabled=f.queryCommandEnabled,a.queryCommandIndeterm=f.queryCommandIndeterm,a.queryCommandState=f.queryCommandState,a.queryCommandSupported=f.queryCommandSupported,a.queryCommandValue=f.queryCommandValue,a.querySupportedCommands=f.querySupportedCommands,f});