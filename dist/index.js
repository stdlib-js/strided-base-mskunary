"use strict";var s=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var G=s(function(qr,w){
function T(r,t,v,u,i){var e,a,n,c,q,o,p,x,f,m,y;if(m=t[0],!(m<=0))for(c=u[0],q=u[1],o=u[2],e=v[0],a=v[1],n=v[2],p=r[0],x=r[1],f=r[2],y=0;y<m;y++)x[q]===0&&(f[o]=i(p[c])),c+=e,q+=a,o+=n}w.exports=T
});var B=s(function(or,z){
var S=require('@stdlib/strided-base-stride2offset/dist'),U=G();function V(r,t,v,u){var i,e;return e=t[0],i=[S(e,v[0]),S(e,v[1]),S(e,v[2])],U(r,t,v,i,u)}z.exports=V
});var d=s(function(mr,C){
function W(r,t,v,u,i,e){var a,n,c,q,o,p,x,f,m,y,b,j,A,N;if(A=t[0],!(A<=0))for(x=u[0],f=u[1],m=u[2],q=v[0],o=v[1],p=v[2],y=r[0],b=r[1],j=r[2],a=i[0],n=i[1],c=i[2],N=0;N<A;N++)n(b,f)===0&&c(j,m,e(a(y,x))),x+=q,f+=o,m+=p}C.exports=W
});var E=s(function(xr,D){
var l=require('@stdlib/strided-base-stride2offset/dist'),X=d();function Y(r,t,v,u,i){var e,a;return a=t[0],e=[l(a,v[0]),l(a,v[1]),l(a,v[2])],X(r,t,v,e,u,i)}D.exports=Y
});var J=s(function(fr,I){
var O=require('@stdlib/array-base-assert-is-accessor-array/dist'),F=require('@stdlib/array-base-accessor-getter/dist'),Z=require('@stdlib/array-base-accessor-setter/dist'),H=require('@stdlib/array-base-getter/dist'),_=require('@stdlib/array-base-setter/dist'),g=require('@stdlib/array-dtype/dist'),$=B(),h=E();function rr(r,t,v,u){var i,e,a,n,c,q;return n=r[0],O(n)&&(i=F(g(n))),c=r[1],O(c)&&(e=F(g(c))),q=r[2],O(q)&&(a=Z(g(q))),i||e||a?(i=i||H(g(n)),e=e||H(g(c)),a=a||_(g(q)),h(r,t,v,[i,e,a],u)):$(r,t,v,u)}I.exports=rr
});var P=s(function(yr,M){
var R=require('@stdlib/array-base-assert-is-accessor-array/dist'),K=require('@stdlib/array-base-accessor-getter/dist'),er=require('@stdlib/array-base-accessor-setter/dist'),L=require('@stdlib/array-base-getter/dist'),vr=require('@stdlib/array-base-setter/dist'),k=require('@stdlib/array-dtype/dist'),ar=G(),tr=d();function ir(r,t,v,u,i){var e,a,n,c,q,o;return c=r[0],R(c)&&(e=K(k(c))),q=r[1],R(q)&&(a=K(k(q))),o=r[2],R(o)&&(n=er(k(o))),e||a||n?(e=e||L(k(c)),a=a||L(k(q)),n=n||vr(k(o)),tr(r,t,v,u,[e,a,n],i)):ar(r,t,v,u,i)}M.exports=ir
});var ur=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Q=J(),nr=P();ur(Q,"ndarray",nr);module.exports=Q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
