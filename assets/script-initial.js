if( Shopify.theme.theme_store_id == null ){var store_id = 'Possibly invalid theme';} else {var store_id = Shopify.theme.theme_store_id;}var version='Avenue v1.4.7',shop = Shopify.shop,name = Shopify.theme.name;  
console.log(version + ' | ' + store_id + ' | ' + shop + ' | ' + name);
//  lazysizes - v5.2.0 | https://github.com/aFarkas/lazysizes
!function(a,b){var c=b(a,a.document,Date);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}("undefined"!=typeof window?window:{},function(a,b,c){"use strict";var d,e;if(function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};e=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in e||(e[b]=c[b])}(),!b||!b.getElementsByClassName)return{init:function(){},cfg:e,noSupport:!0};var f=b.documentElement,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h].bind(a),k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,c,e,f,g){var h=b.createEvent("Event");return e||(e={}),e.instance=d,h.initEvent(c,!f,!g),h.detail=e,a.dispatchEvent(h),h},w=function(b,c){var d;!g&&(d=a.picturefill||e.pf)?(c&&c.src&&!b[i]("srcset")&&b.setAttribute("srcset",c.src),d({reevaluate:!0,elements:[b]})):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<e.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,d=0,f=e.throttleDelay,g=e.ricTimeout,h=function(){b=!1,d=c.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==e.ricTimeout&&(g=e.ricTimeout)}:A(function(){k(h)},!0);return function(a){var e;(a=!0===a)&&(g=33),b||(b=!0,e=f-(c.now()-d),e<0&&(e=0),a||e<9?i():k(i,e))}},C=function(a){var b,d,e=99,f=function(){b=null,a()},g=function(){var a=c.now()-d;a<e?k(g,e-a):(m||f)(f)};return function(){d=c.now(),b||(b=k(g,e))}},D=function(){var g,m,o,p,y,D,F,G,H,I,J,K,L=/^img$/i,M=/^iframe$/i,N="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),O=0,P=0,Q=0,R=-1,S=function(a){Q--,(!a||Q<0||!a.target)&&(Q=0)},T=function(a){return null==K&&(K="hidden"==x(b.body,"visibility")),K||!("hidden"==x(a.parentNode,"visibility")&&"hidden"==x(a,"visibility"))},U=function(a,c){var d,e=a,g=T(a);for(G-=c,J+=c,H-=c,I+=c;g&&(e=e.offsetParent)&&e!=b.body&&e!=f;)(g=(x(e,"opacity")||1)>0)&&"visible"!=x(e,"overflow")&&(d=e.getBoundingClientRect(),g=I>d.left&&H<d.right&&J>d.top-1&&G<d.bottom+1);return g},V=function(){var a,c,h,j,k,l,n,o,q,r,s,t,u=d.elements;if((p=e.loadMode)&&Q<8&&(a=u.length)){for(c=0,R++;c<a;c++)if(u[c]&&!u[c]._lazyRace)if(!N||d.prematureUnveil&&d.prematureUnveil(u[c]))ba(u[c]);else if((o=u[c][i]("data-expand"))&&(l=1*o)||(l=P),r||(r=!e.expand||e.expand<1?f.clientHeight>500&&f.clientWidth>500?500:370:e.expand,d._defEx=r,s=r*e.expFactor,t=e.hFac,K=null,P<s&&Q<1&&R>2&&p>2&&!b.hidden?(P=s,R=0):P=p>1&&R>1&&Q<6?r:O),q!==l&&(D=innerWidth+l*t,F=innerHeight+l,n=-1*l,q=l),h=u[c].getBoundingClientRect(),(J=h.bottom)>=n&&(G=h.top)<=F&&(I=h.right)>=n*t&&(H=h.left)<=D&&(J||I||H||G)&&(e.loadHidden||T(u[c]))&&(m&&Q<3&&!o&&(p<3||R<4)||U(u[c],l))){if(ba(u[c]),k=!0,Q>9)break}else!k&&m&&!j&&Q<4&&R<4&&p>2&&(g[0]||e.preloadAfterLoad)&&(g[0]||!o&&(J||I||H||G||"auto"!=u[c][i](e.sizesAttr)))&&(j=g[0]||u[c]);j&&!k&&ba(j)}},W=B(V),X=function(a){var b=a.target;if(b._lazyCache)return void delete b._lazyCache;S(a),s(b,e.loadedClass),t(b,e.loadingClass),u(b,Z),v(b,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](e.srcsetAttr);(b=e.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,d,f){var g,h,j,l,m,p;(m=v(a,"lazybeforeunveil",b)).defaultPrevented||(d&&(c?s(a,e.autosizesClass):a.setAttribute("sizes",d)),h=a[i](e.srcsetAttr),g=a[i](e.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),m={target:a},s(a,e.loadingClass),p&&(clearTimeout(o),o=k(S,2500),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(M.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,e.lazyClass),z(function(){var b=a.complete&&a.naturalWidth>1;p&&!b||(b&&s(a,"ls-is-cached"),X(m),a._lazyCache=!0,k(function(){"_lazyCache"in a&&delete a._lazyCache},9)),"lazy"==a.loading&&Q--},!0)}),ba=function(a){if(!a._lazyRace){var b,c=L.test(a.nodeName),d=c&&(a[i](e.sizesAttr)||a[i]("sizes")),f="auto"==d;(!f&&m||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,e.errorClass)||!r(a,e.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,Q++,aa(a,b,f,d,c))}},ca=C(function(){e.loadMode=3,W()}),da=function(){3==e.loadMode&&(e.loadMode=2),ca()},ea=function(){if(!m){if(c.now()-y<999)return void k(ea,999);m=!0,e.loadMode=3,W(),j("scroll",da,!0)}};return{_:function(){y=c.now(),d.elements=b.getElementsByClassName(e.lazyClass),g=b.getElementsByClassName(e.lazyClass+" "+e.preloadClass),j("scroll",W,!0),j("resize",W,!0),j("pageshow",function(a){if(a.persisted){var c=b.querySelectorAll("."+e.loadingClass);c.length&&c.forEach&&l(function(){c.forEach(function(a){a.complete&&ba(a)})})}}),a.MutationObserver?new MutationObserver(W).observe(f,{childList:!0,subtree:!0,attributes:!0}):(f[h]("DOMNodeInserted",W,!0),f[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ea():(j("load",ea),b[h]("DOMContentLoaded",W),k(ea,2e4)),d.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba,_aLSL:da}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;f<g;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),d=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width)&&d!==a._lazysizesWidth&&c(a,f,e,d))},f=function(){var b,c=a.length;if(c)for(b=0;b<c;b++)d(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(e.autosizesClass),j("resize",g)},checkElems:g,updateElem:d}}(),F=function(){!F.i&&b.getElementsByClassName&&(F.i=!0,E._(),D._())};return k(function(){e.init&&F()}),d={cfg:e,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}});
//  ls.object-fit.min.js
!function(a,b){if(a){var c=function(d){b(a.lazySizes,d),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c,d){"use strict";function e(a){var b=getComputedStyle(a,null)||{},c=b.fontFamily||"",d=c.match(m)||"",e=d&&c.match(n)||"";return e&&(e=e[1]),{fit:d&&d[1]||"",position:q[e]||e||"center"}}function f(){if(!i){var a=b.createElement("style");i=c.cfg.objectFitClass||"lazysizes-display-clone",b.querySelector("head").appendChild(a)}}function g(a){var b=a.previousElementSibling;b&&c.hC(b,i)&&(b.parentNode.removeChild(b),a.style.position=b.getAttribute("data-position")||"",a.style.visibility=b.getAttribute("data-visibility")||"")}function h(a,b){var d,e,h,j,k=c.cfg,l=function(){var b=a.currentSrc||a.src;b&&e!==b&&(e=b,j.backgroundImage="url("+(p.test(b)?JSON.stringify(b):b)+")",d||(d=!0,c.rC(h,k.loadingClass),c.aC(h,k.loadedClass)))},m=function(){c.rAF(l)};a._lazysizesParentFit=b.fit,a.addEventListener("lazyloaded",m,!0),a.addEventListener("load",m,!0),c.rAF(function(){var d=a,e=a.parentNode;"PICTURE"==e.nodeName.toUpperCase()&&(d=e,e=e.parentNode),g(d),i||f(),h=a.cloneNode(!1),j=h.style,h.addEventListener("load",function(){var a=h.currentSrc||h.src;a&&a!=o&&(h.src=o,h.srcset="")}),c.rC(h,k.loadedClass),c.rC(h,k.lazyClass),c.rC(h,k.autosizesClass),c.aC(h,k.loadingClass),c.aC(h,i),["data-parent-fit","data-parent-container","data-object-fit-polyfilled",k.srcsetAttr,k.srcAttr].forEach(function(a){h.removeAttribute(a)}),h.src=o,h.srcset="",j.backgroundRepeat="no-repeat",j.backgroundPosition=b.position,j.backgroundSize=b.fit,h.setAttribute("data-position",d.style.position),h.setAttribute("data-visibility",d.style.visibility),d.style.visibility="hidden",d.style.position="absolute",a.setAttribute("data-parent-fit",b.fit),a.setAttribute("data-parent-container","prev"),a.setAttribute("data-object-fit-polyfilled",""),a._objectFitPolyfilledDisplay=h,e.insertBefore(h,d),a._lazysizesParentFit&&delete a._lazysizesParentFit,a.complete&&l()})}var i,j=b.createElement("a").style,k="objectFit"in j,l=k&&"objectPosition"in j,m=/object-fit["']*\s*:\s*["']*(contain|cover)/,n=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,o="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",p=/\(|\)|'/,q={center:"center","50% 50%":"center"};if(!k||!l){var r=function(a){if(a.detail.instance==c){var b=a.target,d=e(b);return!(!d.fit||k&&"center"==d.position)&&(h(b,d),!0)}};a.addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b=a.target;null==b.getAttribute("data-object-fit-polyfilled")||b._objectFitPolyfilledDisplay||r(a)||c.rAF(function(){b.removeAttribute("data-object-fit-polyfilled")})}}),a.addEventListener("lazyunveilread",r,!0),d&&d.detail&&r(d)}});
//  ls.rias.min.js
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(b,c){var d,e,f,g,h=a.getComputedStyle(b);e=b.parentNode,g={isPicture:!(!e||!n.test(e.nodeName||""))},f=function(a,c){var d=b.getAttribute("data-"+a);if(!d){var e=h.getPropertyValue("--ls-"+a);e&&(d=e.trim())}if(d){if("true"==d)d=!0;else if("false"==d)d=!1;else if(m.test(d))d=parseFloat(d);else if("function"==typeof j[a])d=j[a](b,d);else if(r.test(d))try{d=JSON.parse(d)}catch(a){}g[a]=d}else a in j&&"function"!=typeof j[a]?g[a]=j[a]:c&&"function"==typeof j[a]&&(g[a]=j[a](b,d))};for(d in j)f(d);return c.replace(q,function(a,b){b in g||f(b,!0)}),g}function e(a,b){var c=[],d=function(a,c){return l[typeof b[c]]?b[c]:a};return c.srcset=[],b.absUrl&&(t.setAttribute("href",a),a=t.href),a=((b.prefix||"")+a+(b.postfix||"")).replace(q,d),b.widths.forEach(function(d){var e=b.widthmap[d]||d,f=b.aspectratio||b.ratio,g=!b.aspectratio&&j.traditionalRatio,h={u:a.replace(o,e).replace(p,f?g?Math.round(d*f):Math.round(d/f):""),w:d};c.push(h),c.srcset.push(h.c=h.u+" "+d+"w")}),c}function f(a,c,d){var f=0,g=0,h=d;if(a){if("container"===c.ratio){for(f=h.scrollWidth,g=h.scrollHeight;!(f&&g||h===b);)h=h.parentNode,f=h.scrollWidth,g=h.scrollHeight;f&&g&&(c.ratio=c.traditionalRatio?g/f:f/g)}a=e(a,c),a.isPicture=c.isPicture,v&&"IMG"==d.nodeName.toUpperCase()?d.removeAttribute(i.srcsetAttr):d.setAttribute(i.srcsetAttr,a.srcset.join(", ")),Object.defineProperty(d,"_lazyrias",{value:a,writable:!0})}}function g(a,b){var e=d(a,b);return j.modifyOptions.call(a,{target:a,details:e,detail:e}),c.fire(a,"lazyriasmodifyoptions",e),e}function h(a){return a.getAttribute(a.getAttribute("data-srcattr")||j.srcAttr)||a.getAttribute(i.srcsetAttr)||a.getAttribute(i.srcAttr)||a.getAttribute("data-pfsrcset")||""}var i,j,k=c.cfg,l={string:1,number:1},m=/^\-*\+*\d+\.*\d*$/,n=/^picture$/i,o=/\s*\{\s*width\s*\}\s*/i,p=/\s*\{\s*height\s*\}\s*/i,q=/\s*\{\s*([a-z0-9]+)\s*\}\s*/gi,r=/^\[.*\]|\{.*\}$/,s=/^(?:auto|\d+(px)?)$/,t=b.createElement("a"),u=b.createElement("img"),v="srcset"in u&&!("sizes"in u),w=!!a.HTMLPictureElement&&!v;!function(){var a,b=function(){},d={prefix:"",postfix:"",srcAttr:"data-src",absUrl:!1,modifyOptions:b,widthmap:{},ratio:!1,traditionalRatio:!1,aspectratio:!1};i=c&&c.cfg,i.supportsType||(i.supportsType=function(a){return!a}),i.rias||(i.rias={}),"widths"in(j=i.rias)||(j.widths=[],function(a){for(var b,c=0;!b||b<3e3;)c+=5,c>30&&(c+=1),b=36*c,a.push(b)}(j.widths));for(a in d)a in j||(j[a]=d[a])}(),addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b,d,e,k,l,m,n,p,q,r,t,u,v;if(b=a.target,a.detail.dataAttr&&!a.defaultPrevented&&!j.disabled&&(q=b.getAttribute(i.sizesAttr)||b.getAttribute("sizes"))&&s.test(q)){if(d=h(b),e=g(b,d),t=o.test(e.prefix)||o.test(e.postfix),e.isPicture&&(k=b.parentNode))for(l=k.getElementsByTagName("source"),m=0,n=l.length;m<n;m++)(t||o.test(p=h(l[m])))&&(f(p,e,l[m]),u=!0);t||o.test(d)?(f(d,e,b),u=!0):u&&(v=[],v.srcset=[],v.isPicture=!0,Object.defineProperty(b,"_lazyrias",{value:v,writable:!0})),u&&(w?b.removeAttribute(i.srcAttr):"auto"!=q&&(r={width:parseInt(q,10)},x({target:b,detail:r})))}}},!0);var x=function(){var d=function(a,b){return a.w-b.w},e=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;f<d;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},f=function(a,b){var d;return!a._lazyrias&&c.pWS&&(d=c.pWS(a.getAttribute(i.srcsetAttr||""))).length&&(Object.defineProperty(a,"_lazyrias",{value:d,writable:!0}),b&&a.parentNode&&(d.isPicture="PICTURE"==a.parentNode.nodeName.toUpperCase())),a._lazyrias},g=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.4,d)},h=function(b,c){var h,i,j,k,l,m;if(l=b._lazyrias,l.isPicture&&a.matchMedia)for(i=0,h=b.parentNode.getElementsByTagName("source"),j=h.length;i<j;i++)if(f(h[i])&&!h[i].getAttribute("type")&&(!(k=h[i].getAttribute("media"))||(matchMedia(k)||{}).matches)){l=h[i]._lazyrias;break}return(!l.w||l.w<c)&&(l.w=c,l.d=g(b),m=e(l.sort(d))),m},j=function(d){if(d.detail.instance==c){var e,g=d.target;if(!v&&(a.respimage||a.picturefill||k.pf))return void b.removeEventListener("lazybeforesizes",j);("_lazyrias"in g||d.detail.dataAttr&&f(g,!0))&&(e=h(g,d.detail.width))&&e.u&&g._lazyrias.cur!=e.u&&(g._lazyrias.cur=e.u,e.cached=!0,c.rAF(function(){g.setAttribute(i.srcAttr,e.u),g.setAttribute("src",e.u)}))}};return w?j=function(){}:addEventListener("lazybeforesizes",j),j}()});
//  ls.parent-fit.min.js
!function(a,b){if(a){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c){"use strict";if(a.addEventListener){var d=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,e=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,f=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,g=/^picture$/i,h=c.cfg,i=function(a){return getComputedStyle(a,null)||{}},j={getParent:function(b,c){var d=b,e=b.parentNode;return c&&"prev"!=c||!e||!g.test(e.nodeName||"")||(e=e.parentNode),"self"!=c&&(d="prev"==c?b.previousElementSibling:c&&(e.closest||a.jQuery)?(e.closest?e.closest(c):jQuery(e).closest(c)[0])||e:e),d},getFit:function(a){var b,c,d=i(a),g=d.content||d.fontFamily,h={fit:a._lazysizesParentFit||a.getAttribute("data-parent-fit")};return!h.fit&&g&&(b=g.match(e))&&(h.fit=b[1]),h.fit?(c=a._lazysizesParentContainer||a.getAttribute("data-parent-container"),!c&&g&&(b=g.match(f))&&(c=b[1]),h.parent=j.getParent(a,c)):h.fit=d.objectFit,h},getImageRatio:function(b){var c,e,f,i,j,k,l,m=b.parentNode,n=m&&g.test(m.nodeName||"")?m.querySelectorAll("source, img"):[b];for(c=0;c<n.length;c++)if(b=n[c],e=b.getAttribute(h.srcsetAttr)||b.getAttribute("srcset")||b.getAttribute("data-pfsrcset")||b.getAttribute("data-risrcset")||"",f=b._lsMedia||b.getAttribute("media"),f=h.customMedia[b.getAttribute("data-media")||f]||f,e&&(!f||(a.matchMedia&&matchMedia(f)||{}).matches)){i=parseFloat(b.getAttribute("data-aspectratio")),i||(j=e.match(d),j?"w"==j[2]?(k=j[1],l=j[3]):(k=j[3],l=j[1]):(k=b.getAttribute("width"),l=b.getAttribute("height")),i=k/l);break}return i},calculateSize:function(a,b){var c,d,e,f,g=this.getFit(a),h=g.fit,i=g.parent;return"width"==h||("contain"==h||"cover"==h)&&(e=this.getImageRatio(a))?(i?b=i.clientWidth:i=a,f=b,"width"==h?f=b:(d=i.clientHeight,(c=b/d)&&("cover"==h&&c<e||"contain"==h&&c>e)&&(f=b*(e/c))),f):b}};c.parentFit=j,b.addEventListener("lazybeforesizes",function(a){if(!a.defaultPrevented&&a.detail.instance==c){var b=a.target;a.detail.width=j.calculateSize(b,a.detail.width)}})}});
//  ls.respimg.min.j
!function(a,b){if(a){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c){"use strict";var d,e=c.cfg,f=b.createElement("img"),g="sizes"in f&&"srcset"in f,h=/\s+\d+h/g,i=function(){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,d=Array.prototype.forEach;return function(){var f=b.createElement("img"),g=function(b){var c,d,f=b.getAttribute(e.srcsetAttr);f&&(d=f.match(a))&&(c="w"==d[2]?d[1]/d[3]:d[3]/d[1],c&&b.setAttribute("data-aspectratio",c),b.setAttribute(e.srcsetAttr,f.replace(h,"")))},i=function(a){if(a.detail.instance==c){var b=a.target.parentNode;b&&"PICTURE"==b.nodeName&&d.call(b.getElementsByTagName("source"),g),g(a.target)}},j=function(){f.currentSrc&&b.removeEventListener("lazybeforeunveil",i)};b.addEventListener("lazybeforeunveil",i),f.onload=j,f.onerror=j,f.srcset="data:,a 1w 1h",f.complete&&j()}}();if(e.supportsType||(e.supportsType=function(a){return!a}),a.HTMLPictureElement&&g)return void(!c.hasHDescriptorFix&&b.msElementsFromPoint&&(c.hasHDescriptorFix=!0,i()));a.picturefill||e.pf||(e.pf=function(b){var c,e;if(!a.picturefill)for(c=0,e=b.elements.length;c<e;c++)d(b.elements[c])},d=function(){var f=function(a,b){return a.w-b.w},i=/^\s*\d+\.*\d*px\s*$/,j=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;f<d;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},k=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c=/\s/,d=function(b,c,d,e){a.push({c:c,u:d,w:1*e})};return function(e){return a=[],e=e.trim(),e.replace(h,"").replace(b,d),a.length||!e||c.test(e)||a.push({c:e,u:e,w:99}),a}}(),l=function(){l.init||(l.init=!0,addEventListener("resize",function(){var a,c=b.getElementsByClassName("lazymatchmedia"),e=function(){var a,b;for(a=0,b=c.length;a<b;a++)d(c[a])};return function(){clearTimeout(a),a=setTimeout(e,66)}}()))},m=function(b,d){var f,g=b.getAttribute("srcset")||b.getAttribute(e.srcsetAttr);!g&&d&&(g=b._lazypolyfill?b._lazypolyfill._set:b.getAttribute(e.srcAttr)||b.getAttribute("src")),b._lazypolyfill&&b._lazypolyfill._set==g||(f=k(g||""),d&&b.parentNode&&(f.isPicture="PICTURE"==b.parentNode.nodeName.toUpperCase(),f.isPicture&&a.matchMedia&&(c.aC(b,"lazymatchmedia"),l())),f._set=g,Object.defineProperty(b,"_lazypolyfill",{value:f,writable:!0}))},n=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.5,d)},o=function(b){return a.matchMedia?(o=function(a){return!a||(matchMedia(a)||{}).matches})(b):!b},p=function(a){var b,d,g,h,k,l,p;if(h=a,m(h,!0),k=h._lazypolyfill,k.isPicture)for(d=0,b=a.parentNode.getElementsByTagName("source"),g=b.length;d<g;d++)if(e.supportsType(b[d].getAttribute("type"),a)&&o(b[d].getAttribute("media"))){h=b[d],m(h),k=h._lazypolyfill;break}return k.length>1?(p=h.getAttribute("sizes")||"",p=i.test(p)&&parseInt(p,10)||c.gW(a,a.parentNode),k.d=n(a),!k.src||!k.w||k.w<p?(k.w=p,l=j(k.sort(f)),k.src=l):l=k.src):l=k[0],l},q=function(a){if(!g||!a.parentNode||"PICTURE"==a.parentNode.nodeName.toUpperCase()){var b=p(a);b&&b.u&&a._lazypolyfill.cur!=b.u&&(a._lazypolyfill.cur=b.u,b.cached=!0,a.setAttribute(e.srcAttr,b.u),a.setAttribute("src",b.u))}};return q.parse=k,q}(),e.loadedClass&&e.loadingClass&&function(){var a=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b){a.push(b+e.loadedClass),a.push(b+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a.join(", "))})}())});
//  ls.bgset.min.js
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";if(a.addEventListener){var d=c.cfg,e=/\s+/g,f=/\s*\|\s+|\s+\|\s*/g,g=/^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/,h=/^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/,i=/\(|\)|'/,j={contain:1,cover:1},k=function(a){var b=c.gW(a,a.parentNode);return(!a._lazysizesWidth||b>a._lazysizesWidth)&&(a._lazysizesWidth=b),a._lazysizesWidth},l=function(a){var b;return b=(getComputedStyle(a)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!j[b]&&j[a.style.backgroundSize]&&(b=a.style.backgroundSize),b},m=function(a,b){if(b){var c=b.match(h);c&&c[1]?a.setAttribute("type",c[1]):a.setAttribute("media",d.customMedia[b]||b)}},n=function(a,c,h){var i=b.createElement("picture"),j=c.getAttribute(d.sizesAttr),k=c.getAttribute("data-ratio"),l=c.getAttribute("data-optimumx");c._lazybgset&&c._lazybgset.parentNode==c&&c.removeChild(c._lazybgset),Object.defineProperty(h,"_lazybgset",{value:c,writable:!0}),Object.defineProperty(c,"_lazybgset",{value:i,writable:!0}),a=a.replace(e," ").split(f),i.style.display="none",h.className=d.lazyClass,1!=a.length||j||(j="auto"),a.forEach(function(a){var c,e=b.createElement("source");j&&"auto"!=j&&e.setAttribute("sizes",j),(c=a.match(g))?(e.setAttribute(d.srcsetAttr,c[1]),m(e,c[2]),m(e,c[3])):e.setAttribute(d.srcsetAttr,a),i.appendChild(e)}),j&&(h.setAttribute(d.sizesAttr,j),c.removeAttribute(d.sizesAttr),c.removeAttribute("sizes")),l&&h.setAttribute("data-optimumx",l),k&&h.setAttribute("data-ratio",k),i.appendChild(h),c.appendChild(i)},o=function(a){if(a.target._lazybgset){var b=a.target,d=b._lazybgset,e=b.currentSrc||b.src;if(e){var f=c.fire(d,"bgsetproxy",{src:e,useSrc:i.test(e)?JSON.stringify(e):e});f.defaultPrevented||(d.style.backgroundImage="url("+f.detail.useSrc+")")}b._lazybgsetLoading&&(c.fire(d,"_lazyloaded",{},!1,!0),delete b._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(a){var d,e,f;!a.defaultPrevented&&(d=a.target.getAttribute("data-bgset"))&&(f=a.target,e=b.createElement("img"),e.alt="",e._lazybgsetLoading=!0,a.detail.firesLoad=!0,n(d,f,e),setTimeout(function(){c.loader.unveil(e),c.rAF(function(){c.fire(e,"_lazyloaded",{},!0,!0),e.complete&&o({target:e})})}))}),b.addEventListener("load",o,!0),a.addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c&&a.target._lazybgset&&a.detail.dataAttr){var b=a.target._lazybgset,d=l(b);j[d]&&(a.target._lazysizesParentFit=d,c.rAF(function(){a.target.setAttribute("data-parent-fit",d),a.target._lazysizesParentFit&&delete a.target._lazysizesParentFit}))}},!0),b.documentElement.addEventListener("lazybeforesizes",function(a){!a.defaultPrevented&&a.target._lazybgset&&a.detail.instance==c&&(a.detail.width=k(a.target._lazybgset))})}});
