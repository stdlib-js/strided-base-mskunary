// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,o=Object.prototype,a=o.toString,n=o.__defineGetter__,l=o.__defineSetter__,i=o.__lookupGetter__,u=o.__lookupSetter__;function c(e,r,t,o){var a,n,l,i,u,c,_,f,p,b,y;if(!((b=r[0])<=0))for(i=(a=t[0])<0?(1-b)*a:0,u=(n=t[1])<0?(1-b)*n:0,c=(l=t[2])<0?(1-b)*l:0,_=e[0],f=e[1],p=e[2],y=0;y<b;y++)0===f[u]&&(p[c]=o(_[i])),i+=a,u+=n,c+=l}function _(e,r,t,o,a){var n,l,i,u,c,_,f,p,b,y,d;if(!((y=r[0])<=0))for(u=o[0],c=o[1],_=o[2],n=t[0],l=t[1],i=t[2],f=e[0],p=e[1],b=e[2],d=0;d<y;d++)0===p[c]&&(b[_]=a(f[u])),u+=n,c+=l,_+=i}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(e,r)||u.call(e,r)?(c=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&n&&n.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e},r(c,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:_});export{c as default,_ as ndarray};
//# sourceMappingURL=mod.js.map
