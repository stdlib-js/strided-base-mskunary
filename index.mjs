// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-accessor-array@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-setter@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-getter@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-setter@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.2.1-esm/index.mjs";function d(r,d,o,m){var f,j,v,c,l,p;return c=r[0],s(c)&&(f=e(a(c))),l=r[1],s(l)&&(j=e(a(l))),p=r[2],s(p)&&(v=t(a(p))),f||j||v?function(r,s,e,t,n){var i,a,d,o,m,f,j,v,c,l,p,h,b,y;if(!((b=s[0])<=0))for(j=(o=e[0])<0?(1-b)*o:0,v=(m=e[1])<0?(1-b)*m:0,c=(f=e[2])<0?(1-b)*f:0,l=r[0],p=r[1],h=r[2],i=t[0],a=t[1],d=t[2],y=0;y<b;y++)0===a(p,v)&&d(h,c,n(i(l,j))),j+=o,v+=m,c+=f}(r,d,o,[f=f||n(a(c)),j=j||n(a(l)),v=v||i(a(p))],m):function(r,s,e,t){var n,i,a,d,o,m,f,j,v,c,l;if(!((c=s[0])<=0))for(d=(n=e[0])<0?(1-c)*n:0,o=(i=e[1])<0?(1-c)*i:0,m=(a=e[2])<0?(1-c)*a:0,f=r[0],j=r[1],v=r[2],l=0;l<c;l++)0===j[o]&&(v[m]=t(f[d])),d+=n,o+=i,m+=a}(r,d,o,m)}function o(r,d,o,m,f){var j,v,c,l,p,h;return l=r[0],s(l)&&(j=e(a(l))),p=r[1],s(p)&&(v=e(a(p))),h=r[2],s(h)&&(c=t(a(h))),j||v||c?function(r,s,e,t,n,i){var a,d,o,m,f,j,v,c,l,p,h,b,y,u;if(!((y=s[0])<=0))for(v=t[0],c=t[1],l=t[2],m=e[0],f=e[1],j=e[2],p=r[0],h=r[1],b=r[2],a=n[0],d=n[1],o=n[2],u=0;u<y;u++)0===d(h,c)&&o(b,l,i(a(p,v))),v+=m,c+=f,l+=j}(r,d,o,m,[j=j||n(a(l)),v=v||n(a(p)),c=c||i(a(h))],f):function(r,s,e,t,n){var i,a,d,o,m,f,j,v,c,l,p;if(!((l=s[0])<=0))for(o=t[0],m=t[1],f=t[2],i=e[0],a=e[1],d=e[2],j=r[0],v=r[1],c=r[2],p=0;p<l;p++)0===v[m]&&(c[f]=n(j[o])),o+=i,m+=a,f+=d}(r,d,o,m,f)}r(d,"ndarray",o);export{d as default,o as ndarray};
//# sourceMappingURL=index.mjs.map
