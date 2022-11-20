// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,c=n.__lookupSetter__;function l(e,t){return e[t]}function f(e,t){return e.get(t)}function _(e,t,r){e[t]=r}function p(e,t,r){e.set(r,t)}function s(e,t,r,n){var o,a,i,u,c,s;return(u=e[0]).get&&u.set&&(o=f),(c=e[1]).get&&c.set&&(a=f),(s=e[2]).get&&s.set&&(i=p),o||a||i?function(e,t,r,n,o){var a,i,u,c,l,f,_,p,s,b,v,y,d,g;if(!((d=t[0])<=0))for(_=(c=r[0])<0?(1-d)*c:0,p=(l=r[1])<0?(1-d)*l:0,s=(f=r[2])<0?(1-d)*f:0,b=e[0],v=e[1],y=e[2],a=n[0],i=n[1],u=n[2],g=0;g<d;g++)0===i(v,p)&&u(y,s,o(a(b,_))),_+=c,p+=l,s+=f}(e,t,r,[o=o||l,a=a||l,i=i||_],n):function(e,t,r,n){var o,a,i,u,c,l,f,_,p,s,b;if(!((s=t[0])<=0))for(u=(o=r[0])<0?(1-s)*o:0,c=(a=r[1])<0?(1-s)*a:0,l=(i=r[2])<0?(1-s)*i:0,f=e[0],_=e[1],p=e[2],b=0;b<s;b++)0===_[c]&&(p[l]=n(f[u])),u+=o,c+=a,l+=i}(e,t,r,n)}function b(e,t,r,n,o){var a,i,u,c,s,b;return(c=e[0]).get&&c.set&&(a=f),(s=e[1]).get&&s.set&&(i=f),(b=e[2]).get&&b.set&&(u=p),a||i||u?function(e,t,r,n,o,a){var i,u,c,l,f,_,p,s,b,v,y,d,g,j;if(!((g=t[0])<=0))for(p=n[0],s=n[1],b=n[2],l=r[0],f=r[1],_=r[2],v=e[0],y=e[1],d=e[2],i=o[0],u=o[1],c=o[2],j=0;j<g;j++)0===u(y,s)&&c(d,b,a(i(v,p))),p+=l,s+=f,b+=_}(e,t,r,n,[a=a||l,i=i||l,u=u||_],o):function(e,t,r,n,o){var a,i,u,c,l,f,_,p,s,b,v;if(!((b=t[0])<=0))for(c=n[0],l=n[1],f=n[2],a=r[0],i=r[1],u=r[2],_=e[0],p=e[1],s=e[2],v=0;v<b;v++)0===p[l]&&(s[f]=o(_[c])),c+=a,l+=i,f+=u}(e,t,r,n,o)}t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var l,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((f="value"in r)&&(u.call(e,t)||c.call(e,t)?(l=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=l):e[t]=r.value),_="get"in r,p="set"in r,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e},t(s,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:b});export{s as default,b as ndarray};
//# sourceMappingURL=mod.js.map
