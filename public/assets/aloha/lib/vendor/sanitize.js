/**
 * Copyright (c) 2010 by Gabriel Birke
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function Sanitize(){var a,b,c;c=arguments[0]||{},this.config={},this.config.elements=c.elements?c.elements:[],this.config.attributes=c.attributes?c.attributes:{},this.config.attributes[Sanitize.ALL]=this.config.attributes[Sanitize.ALL]?this.config.attributes[Sanitize.ALL]:[],this.config.allow_comments=c.allow_comments?c.allow_comments:!1,this.allowed_elements={},this.config.protocols=c.protocols?c.protocols:{},this.config.add_attributes=c.add_attributes?c.add_attributes:{},this.dom=c.dom?c.dom:document;for(a=0;a<this.config.elements.length;a++)this.allowed_elements[this.config.elements[a]]=!0;this.config.remove_element_contents={},this.config.remove_all_contents=!1;if(c.remove_contents)if(c.remove_contents instanceof Array)for(a=0;a<c.remove_contents.length;a++)this.config.remove_element_contents[c.remove_contents[a]]=!0;else this.config.remove_all_contents=!0;this.transformers=c.transformers?c.transformers:[],this.filters=c.filters?c.filters:[]}Sanitize.REGEX_PROTOCOL=/^([A-Za-z0-9\+\-\.\&\;\*\s]*?)(?:\:|&*0*58|&*x0*3a)/i,Sanitize.RELATIVE="__relative__",Sanitize.prototype.clean_node=function(a){function c(a,b){var c;for(c=0;c<b.length;c++)if(b[c]==a)return c;return-1}function d(){var a=[],b={},c,d;for(c=0;c<arguments.length;c++){if(!arguments[c]||!arguments[c].length)continue;for(d=0;d<arguments[c].length;d++){if(b[arguments[c][d]])continue;b[arguments[c][d]]=!0,a.push(arguments[c][d])}}return a}function e(a){var b;for(var c=0;c<this.filters.length;c++)if(!this.filters[c](a)){b=a.cloneNode(!0),this.current_element.appendChild(b);return}switch(a.nodeType){case 1:f.call(this,a);break;case 3:var b=a.cloneNode(!1);this.current_element.appendChild(b);break;case 5:var b=a.cloneNode(!1);this.current_element.appendChild(b);break;case 8:if(this.config.allow_comments){var b=a.cloneNode(!1);this.current_element.appendChild(b)};default:}}function f(a){var b,f,h,i,j,k,l,m,n,o,p,q,r=g.call(this,a);a=r.node,j=a.nodeName.toLowerCase(),i=this.current_element;if(this.allowed_elements[j]||r.whitelist){this.current_element=this.dom.createElement(a.nodeName),i.appendChild(this.current_element),k=d(this.config.attributes[j],this.config.attributes.__ALL__,r.attr_whitelist);for(b=0;b<k.length;b++)m=k[b],l=a.attributes[m],l&&(q=!0,this.config.protocols[j]&&this.config.protocols[j][m]&&(o=this.config.protocols[j][m],p=l.nodeValue.toLowerCase().match(Sanitize.REGEX_PROTOCOL),p?q=c(p[1],o)!=-1:q=c(Sanitize.RELATIVE,o)!=-1),q&&(n=document.createAttribute(m),n.value=l.nodeValue,this.current_element.setAttributeNode(n)));if(this.config.add_attributes[j])for(m in this.config.add_attributes[j])n=document.createAttribute(m),n.value=this.config.add_attributes[j][m],this.current_element.setAttributeNode(n)}else if(c(a,this.whitelist_nodes)!=-1){this.current_element=a.cloneNode(!0);while(this.current_element.childNodes.length>0)this.current_element.removeChild(this.current_element.firstChild);i.appendChild(this.current_element)}if(!this.config.remove_all_contents&&!this.config.remove_element_contents[j])for(b=0;b<a.childNodes.length;b++)e.call(this,a.childNodes[b]);this.current_element.normalize&&this.current_element.normalize(),this.current_element=i}function g(a){var b={attr_whitelist:[],node:a,whitelist:!1},e,f,g;for(e=0;e<this.transformers.length;e++){g=this.transformers[e]({allowed_elements:this.allowed_elements,config:this.config,node:a,node_name:a.nodeName.toLowerCase(),whitelist_nodes:this.whitelist_nodes,dom:this.dom});if(g==null)continue;if(typeof g!="object")throw new Error("transformer output must be an object or null");if(g.whitelist_nodes&&g.whitelist_nodes instanceof Array)for(f=0;f<g.whitelist_nodes.length;f++)c(g.whitelist_nodes[f],this.whitelist_nodes)==-1&&this.whitelist_nodes.push(g.whitelist_nodes[f]);b.whitelist=g.whitelist?!0:!1,g.attr_whitelist&&(b.attr_whitelist=d(b.attr_whitelist,g.attr_whitelist)),b.node=g.node?g.node:b.node}return b}var b=this.dom.createDocumentFragment();this.current_element=b,this.whitelist_nodes=[];for(i=0;i<a.childNodes.length;i++)e.call(this,a.childNodes[i]);return b.normalize&&b.normalize(),b};