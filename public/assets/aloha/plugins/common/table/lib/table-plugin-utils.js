define(["aloha/jquery"],function(a){var b={cellIndexToGridColumn:function(a,c,d){var e=null;return b.walkCells(a,function(a,b,f,g,h){if(a===c&&b===d)return e=f,!1}),e},walkCells:function(a,c){var d=[];for(var e=0;e<a.length;e++){var f=a[e].cells,g=0;for(var h=0;h<f.length;h++){var i=f[h],j=b.colspan(i),k=b.rowspan(i);while(d[h+g])d[h+g]-=1,g+=1;if(!1===c(e,h,h+g,j,k))return;for(var l=0;l<j;l++){if(d[h+g+l])throw"an impossible case has occurred";d[h+g+l]=k-1}g+=j-1}for(;h+g<d.length;g++)d[h+g]&&(d[h+g]-=1)}},makeGrid:function(a){var c=[];return b.walkCells(a,function(b,d,e,f,g){var h=a[b].cells[d];for(var i=0;i<g;i++){c[b+i]=c[b+i]||[];for(var j=0;j<f;j++)c[b+i][e+j]={cell:h,colspan:f,rowspan:g,spannedX:j,spannedY:i}}}),c},containsDomCell:function(a){return 0===a.spannedX&&0===a.spannedY},leftDomCell:function(a,b,c){do{var d=a[b][c];if(0===d.spannedY)return d.cell;c-=d.spannedX+1}while(c>=0);return null},splitCell:function(c,d){var e=a(c),f=b.colspan(c),g=b.rowspan(c);if(1===f&&1===g)return;var h=e.parent(),i=h.parent().children(),j=h.index(),k=e.index(),l=b.makeGrid(i),m=b.cellIndexToGridColumn(i,j,k);for(var n=0;n<g;n++)for(var o=0===n?1:0;o<f;o++){var p=b.leftDomCell(l,j+n,m);null==p?i.eq(j+n).prepend(d()):a(p).after(d())}e.removeAttr("colspan"),e.removeAttr("rowspan")},rowspan:function(b){return parseInt(a(b).attr("rowspan"))||1},colspan:function(b){return parseInt(a(b).attr("colspan"))||1},walkGrid:function(a,b){for(var c=0;c<a.length;c++)for(var d=0;d<a[c].length;d++)if(!1===b(a[c][d],d,c))return},walkGridInsideRect:function(a,c,d){b.walkGrid(a,function(a,b,e){if(e>=c.top&&e<c.bottom&&b>=c.left&&b<c.right)return d(a,b,e)})},leftTrimArray:function(a){for(var b=0;b<a.length;b++)if(null!=a[b])return a.slice(b,a.length);return[]},makeContour:function(a,c){var d=[],e=[],f=[],g=[];return b.walkGrid(a,function(a,b,h){if(c(a,b,h)){if(null==d[h]||b<d[h])d[h]=b;if(null==e[h]||b>e[h])e[h]=b;if(null==f[b]||h<f[b])f[b]=h;if(null==g[b]||h>g[b])g[b]=h}}),d=b.leftTrimArray(d),e=b.leftTrimArray(e),f=b.leftTrimArray(f),g=b.leftTrimArray(g),{left:d,right:e,top:f,bottom:g}},indexOfAnyBut:function(a,b){for(var c=0;c<a.length;c++)if(b!==a[c])return c;return-1},isConsecutive:function(a){for(var b=1;b<a.length;b++)if(1!==Math.abs(a[b]-a[b-1]))return!1;return!0}};return b});