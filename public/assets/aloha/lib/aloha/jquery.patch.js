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
// use specified jQuery or load jQuery
define(["aloha/jquery"],function(a){a.data=function(a){return function(b,c,d,e){if(!a.acceptData(b))return;var f=a.expando,g=typeof c=="string",h,i=b.nodeType,j=i?a.cache:b,k=i?b[a.expando]:b[a.expando]&&a.expando;if((!k||e&&k&&(!j[k]||!j[k][f]))&&g&&d===undefined)return;k||(i?b[a.expando]=k=++a.uuid:k=a.expando),j[k]||(j[k]={},i||(j[k].toJSON=a.noop));if(typeof c=="object"||typeof c=="function")e?j[k][f]=a.extend(j[k][f],c):j[k]=a.extend(j[k],c);return h=j[k],e&&(h[f]||(h[f]={}),h=h[f]),d!==undefined&&(h[a.camelCase(c)]=d),c==="events"&&!h[c]?h[f]&&h[f].events:g?h[a.camelCase(c)]:h}}(a)});