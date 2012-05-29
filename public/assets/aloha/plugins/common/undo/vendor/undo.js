/*
 * Undo.js - A undo/redo framework for JavaScript
 * 
 * http://jzaefferer.github.com/undo
 *
 * Copyright (c) 2011 JÃ¶rn Zaefferer
 * MIT licensed.
 */
(function(){function c(a,b){for(name in b){var c=b[name];c!==undefined&&(a[name]=c)}return a}var a=function(){},b=function(b,d){var e;return d&&d.hasOwnProperty("constructor")?e=d.constructor:e=function(){return b.apply(this,arguments)},a.prototype=b.prototype,e.prototype=new a,d&&c(e.prototype,d),e.prototype.constructor=e,e.__super__=b.prototype,e},d;typeof exports!="undefined"?d=exports:d=this.Undo={},d.Stack=function(){this.commands=[],this.stackPosition=-1,this.savePosition=-1},c(d.Stack.prototype,{execute:function(a){this._clearRedo(),a.execute(),this.commands.push(a),this.stackPosition++,this.changed()},undo:function(){this.commands[this.stackPosition].undo(),this.stackPosition--,this.changed()},canUndo:function(){return this.stackPosition>=0},redo:function(){this.stackPosition++,this.commands[this.stackPosition].redo(),this.changed()},canRedo:function(){return this.stackPosition<this.commands.length-1},save:function(){this.savePosition=this.stackPosition,this.changed()},dirty:function(){return this.stackPosition!=this.savePosition},_clearRedo:function(){this.commands=this.commands.slice(0,this.stackPosition+1)},changed:function(){}}),d.Command=function(a){this.name=a};var e=new Error("override me!");c(d.Command.prototype,{execute:function(){throw e},undo:function(){throw e},redo:function(){this.execute()}}),d.Command.extend=function(a){var c=b(this,a);return c.extend=d.Command.extend,c}}).call(this);