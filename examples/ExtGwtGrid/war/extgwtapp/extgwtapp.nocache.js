function extgwtapp(){var l='',kc='\n--><\/script>',F='" for "gwt:onLoadErrorFn"',D='" for "gwt:onPropertyErrorFn"',Eb='"<script src=\\"',n='"><\/script>',p='#',jc=');',r='/',qb='0DCDB0A6CB0E6319F4BE3251500664B3.cache.js',tb='8E1E87EB675F3807CE05041182078109.cache.js',rb='965E0075354DE6DCFA707FDD3AE2AFE5.cache.js',nc='<script id="',ac='<script><!--\n',A='=',q='?',C='Bad handler "',lb='Cross-site hosted mode not yet implemented. See issue ',pb='D811B7AB92994C5331384F70656BEB4B.cache.js',ub='D946F9105E18756623847F4F752FA660.cache.js',Cb='DOMContentLoaded',sb='E1764826F40EC0DDBA9178F44ED09307.cache.js',o='SCRIPT',Fb='\\"><\/scr" + "ipt>"',mc='__gwt_marker_extgwtapp',s='base',nb='begin',cb='bootstrap',u='clear.cache.gif',z='content',ic='document.write(',lc='end',ec='evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),',gc='evtGroup: "moduleStartup", millis:(new Date()).getTime(),',m='extgwtapp',ib='gecko',jb='gecko1_8',yb='gwt.hybrid',vb='gwt/standard/standard.css',E='gwt:onLoadErrorFn',B='gwt:onPropertyErrorFn',y='gwt:property',Bb='head',Ab='href',mb='http://code.google.com/p/google-web-toolkit/issues/detail?id=2079',hb='ie6',gb='ie8',t='img',wb='link',Db='loadExternalRefs',v='meta',cc='moduleName:"extgwtapp", subSystem:"startup",',dc='moduleStartup',fb='msie',w='name',bb='opera',xb='rel',eb='safari',ob='selectingPermutation',x='startup',zb='stylesheet',fc='type: "end"});',hc='type: "moduleRequested"});',kb='unknown',ab='user.agent',db='webkit',bc='window.__gwtStatsEvent && window.__gwtStatsEvent({';var pc=window,k=document,oc=pc.__gwtStatsEvent?function(a){return pc.__gwtStatsEvent(a)}:null,yc,uc,tc=l,Bc={},ed=[],bd=[],sc=[],Ec,ad;oc&&oc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:nb});if(!pc.__gwt_stylesLoaded){pc.__gwt_stylesLoaded={}}if(!pc.__gwt_scriptsLoaded){pc.__gwt_scriptsLoaded={}}function zc(){try{return pc.external&&(pc.external.gwtOnLoad&&pc.location.search.indexOf(yb)==-1)}catch(a){return false}}
function Ac(){if(yc&&uc){yc(Ec,m,tc);oc&&oc({moduleName:m,subSystem:x,evtGroup:dc,millis:(new Date()).getTime(),type:lc})}}
function xc(){var j,h=mc,i;k.write(nc+h+n);i=k.getElementById(h);j=i&&i.previousSibling;while(j&&j.tagName!=o){j=j.previousSibling}function f(b){var a=b.lastIndexOf(p);if(a==-1){a=b.length}var c=b.indexOf(q);if(c==-1){c=b.length}var d=b.lastIndexOf(r,Math.min(c,a));return d>=0?b.substring(0,d+1):l}
;if(j&&j.src){tc=f(j.src)}if(tc==l){var e=k.getElementsByTagName(s);if(e.length>0){tc=e[e.length-1].href}else{tc=f(k.location.href)}}else if(tc.match(/^\w+:\/\//)){}else{var g=k.createElement(t);g.src=tc+u;tc=f(g.src)}if(i){i.parentNode.removeChild(i)}}
function Fc(){var f=document.getElementsByTagName(v);for(var d=0,g=f.length;d<g;++d){var e=f[d],h=e.getAttribute(w),b;if(h){if(h==y){b=e.getAttribute(z);if(b){var i,c=b.indexOf(A);if(c>=0){h=b.substring(0,c);i=b.substring(c+1)}else{h=b;i=l}Bc[h]=i}}else if(h==B){b=e.getAttribute(z);if(b){try{ad=eval(b)}catch(a){alert(C+b+D)}}}else if(h==E){b=e.getAttribute(z);if(b){try{Ec=eval(b)}catch(a){alert(C+b+F)}}}}}}
function dd(d,e){var a=sc;for(var b=0,c=d.length-1;b<c;++b){a=a[d[b]]||(a[d[b]]=[])}a[d[c]]=e}
function wc(d){var e=bd[d](),b=ed[d];if(e in b){return e}var a=[];for(var c in b){a[b[c]]=c}if(ad){ad(d,a,e)}throw null}
bd[ab]=function(){var d=navigator.userAgent.toLowerCase();var b=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(d.indexOf(bb)!=-1){return bb}else if(d.indexOf(db)!=-1){return eb}else if(d.indexOf(fb)!=-1){if(document.documentMode>=8){return gb}else{var c=/msie ([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){var e=b(c);if(e>=6000){return hb}}}}else if(d.indexOf(ib)!=-1){var c=/rv:([0-9]+)\.([0-9]+)/.exec(d);if(c&&c.length==3){if(b(c)>=1008)return jb}return ib}return kb};ed[ab]={gecko:0,gecko1_8:1,ie6:2,ie8:3,opera:4,safari:5};extgwtapp.onScriptLoad=function(a){extgwtapp=null;yc=a;Ac()};if(zc()){alert(lb+mb);return}xc();Fc();oc&&oc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:ob});var cd;try{dd([ib],pb);dd([gb],qb);dd([bb],rb);dd([jb],sb);dd([hb],tb);dd([eb],ub);cd=sc[wc(ab)]}catch(a){return}var Dc;function Cc(){if(!uc){uc=true;if(!__gwt_stylesLoaded[vb]){var a=k.createElement(wb);__gwt_stylesLoaded[vb]=a;a.setAttribute(xb,zb);a.setAttribute(Ab,tc+vb);k.getElementsByTagName(Bb)[0].appendChild(a)}Ac();if(k.removeEventListener){k.removeEventListener(Cb,Cc,false)}if(Dc){clearInterval(Dc)}}}
if(k.addEventListener){k.addEventListener(Cb,function(){Cc()},false)}var Dc=setInterval(function(){if(/loaded|complete/.test(k.readyState)){Cc()}},50);oc&&oc({moduleName:m,subSystem:x,evtGroup:cb,millis:(new Date()).getTime(),type:lc});oc&&oc({moduleName:m,subSystem:x,evtGroup:Db,millis:(new Date()).getTime(),type:nb});var vc=Eb+tc+cd+Fb;k.write(ac+bc+cc+ec+fc+bc+cc+gc+hc+ic+vc+jc+kc)}
extgwtapp();