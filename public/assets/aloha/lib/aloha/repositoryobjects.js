/*!
 * This file is part of Aloha Editor
 * Author & Copyright (c) 2010 Gentics Software GmbH, aloha@gentics.com
 * Licensed unter the terms of http://www.aloha-editor.com/license.html
 */
define(["aloha/core","util/class"],function(a,b){var c=window.GENTICS;a.RepositoryObject=function(){},a.RepositoryDocument=b.extend({_constructor:function(a){var b=a;this.type="document";if(!b.id||!b.name||!b.repositoryId)return;c.Utils.applyProperties(this,a),this.baseType="document"}}),a.RepositoryFolder=b.extend({_constructor:function(a){var b=a;this.type="folder";if(!b.id||!b.name||!b.repositoryId)return;c.Utils.applyProperties(this,a),this.baseType="folder"}})});