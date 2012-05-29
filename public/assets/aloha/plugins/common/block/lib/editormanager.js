/*!
 * Aloha Editor
 * Author & Copyright (c) 2010 Gentics Software GmbH
 * aloha-sales@gentics.com
 * Licensed unter the terms of http://www.aloha-editor.com/license.html
 */
define(["aloha/registry"],function(a){return new(a.extend({createEditor:function(a){if(!this.has(a.type))throw'Editor for type "'+a.type+'" not found.';var b=this.get(a.type);return new b(a)}}))});