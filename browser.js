// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__;function f(e,t,r,o){var n,a,i,l,u,f,c,_,p,d,y;if(!((d=t[0])<=0))for(l=(n=r[0])<0?(1-d)*n:0,u=(a=r[1])<0?(1-d)*a:0,f=(i=r[2])<0?(1-d)*i:0,c=e[0],_=e[1],p=e[2],y=0;y<d;y++)0===_[u]&&(p[f]=o(c[l])),l+=n,u+=a,f+=i}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||u.call(e,t)?(f=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},e(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,o,n){var a,i,l,u,f,c,_,p,d,y,b;if(!((y=t[0])<=0))for(u=o[0],f=o[1],c=o[2],a=r[0],i=r[1],l=r[2],_=e[0],p=e[1],d=e[2],b=0;b<y;b++)0===p[f]&&(d[c]=n(_[u])),u+=a,f+=i,c+=l}}),f},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).mskunary=t();
//# sourceMappingURL=browser.js.map