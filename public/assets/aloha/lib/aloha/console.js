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
define(["aloha/core","util/class","aloha/jquery"],function(a,b,c){var d=window.console,e=b.extend({init:function(){if(typeof a.settings.logLevels=="undefined"||!a.settings.logLevels)a.settings.logLevels={error:!0,warn:!0};if(typeof a.settings.logHistory=="undefined"||!a.settings.logHistory)a.settings.logHistory={};a.settings.logHistory.maxEntries||(a.settings.logHistory.maxEntries=100),a.settings.logHistory.highWaterMark||(a.settings.logHistory.highWaterMark=90),a.settings.logHistory.levels||(a.settings.logHistory.levels={error:!0,warn:!0}),this.flushLogHistory(),a.trigger("aloha-logger-ready")},logHistory:[],highWaterMarkReached:!1,log:function(b,c,e){typeof c=="undefined"&&(e=b),typeof c!="string"&&c&&c.toString&&(c=c.toString()),typeof e=="undefined"&&(e=c,c=undefined);if(typeof b=="undefined"||!b)b="log";b=b.toLowerCase();if(typeof a.settings.logLevels=="undefined")return;if(!a.settings.logLevels[b])return;c=c||"Unkown Aloha Component",this.addToLogHistory({level:b,component:c,message:e,date:new Date});switch(b){case"error":window.console&&d.error&&(!c&&!e?d.error("Error occured without message and component"):d.error(c+": "+e));break;case"warn":window.console&&d.warn&&d.warn(c+": "+e);break;case"info":window.console&&d.info&&d.info(c+": "+e);break;case"debug":window.console&&d.log&&d.log(c+" ["+b+"]: "+e);break;default:window.console&&d.log&&d.log(c+" ["+b+"]: "+e)}},error:function(a,b){this.log("error",a,b)},warn:function(a,b){this.log("warn",a,b)},info:function(a,b){this.log("info",a,b)},debug:function(a,b){this.log("debug",a,b)},deprecated:function(b,c){this.log("warn",b,c);if(a.settings.logLevels.deprecated)throw new Error(c)},isLogLevelEnabled:function(b){return a.settings&&a.settings.logLevels&&a.settings.logLevels[b]},isErrorEnabled:function(){return this.isLogLevelEnabled("error")},isWarnEnabled:function(){return this.isLogLevelEnabled("warn")},isInfoEnabled:function(){return this.isLogLevelEnabled("info")},isDebugEnabled:function(){return this.isLogLevelEnabled("debug")},addToLogHistory:function(b){a.settings.logHistory||this.init();if(a.settings.logHistory.maxEntries<=0||!a.settings.logHistory.levels[b.level])return;this.logHistory.push(b),this.highWaterMarkReached||this.logHistory.length>=a.settings.logHistory.maxEntries*a.settings.logHistory.highWaterMark/100&&(a.trigger("aloha-log-full"),this.highWaterMarkReached=!0);while(this.logHistory.length>a.settings.logHistory.maxEntries)this.logHistory.shift()},getLogHistory:function(){return this.logHistory},flushLogHistory:function(){this.logHistory=[],this.highWaterMarkReached=!1}});return e=new e,a.Log=a.Console=e});