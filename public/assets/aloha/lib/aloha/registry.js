/*!
 * This file is part of Aloha Editor
 * Author & Copyright (c) 2010 Gentics Software GmbH, aloha@gentics.com
 * Licensed unter the terms of http://www.aloha-editor.com/license.html
 */
/**
 * Registry base class.
 * TODO: document that it also contains Observable.
 *
 */
define(["aloha/jquery","aloha/observable"],function(a,b){return Class.extend(b,{_entries:null,_constructor:function(){this._entries={}},register:function(a,b){this._entries[a]=b,this.trigger("register",b,a)},unregister:function(a){var b=this._entries[a];delete this._entries[a],this.trigger("unregister",b,a)},get:function(a){return this._entries[a]},has:function(a){return this._entries[a]?!0:!1},getEntries:function(){return a.extend({},this._entries)}})});