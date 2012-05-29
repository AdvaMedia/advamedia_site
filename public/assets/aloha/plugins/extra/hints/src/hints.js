/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/
// Start Closure
(function(a,b){var c=a.alohaQuery,d=c,e=a.GENTICS,f=a.Aloha;f.Hints=new(f.Plugin.extend({_constructor:function(){this._super("hints")},languages:["en","de"],init:function(){d("body").bind("aloha",function(a){f.editables[0].obj.poshytip({content:"Move your mouse and click in the yellow outlined areas to start editing.",className:"tip-twitter",showTimeout:1,alignTo:"target",alignX:"left",alignY:"center",offsetX:15}).poshytip("show")})}}))})(window);