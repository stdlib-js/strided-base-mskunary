"use strict";var s=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw (t=0, e)}};};var G=s(function(qr,w){
function T(r,t,e,u,i){var v,a,n,c,q,o,p,x,f,m,y;if(m=t[0],!(m<=0))for(c=u[0],q=u[1],o=u[2],v=e[0],a=e[1],n=e[2],p=r[0],x=r[1],f=r[2],y=0;y<m;y++)x[q]===0&&(f[o]=i(p[c])),c+=v,q+=a,o+=n}w.exports=T
});var B=s(function(or,z){
var S=require('@stdlib/strided-base-stride2offset/dist'),U=G();function V(r,t,e,u){var i,v;return v=t[0],i=[S(v,e[0]),S(v,e[1]),S(v,e[2])],U(r,t,e,i,u)}z.exports=V
});var d=s(function(mr,C){
function W(r,t,e,u,i,v){var a,n,c,q,o,p,x,f,m,y,b,j,A,N;if(A=t[0],!(A<=0))for(x=u[0],f=u[1],m=u[2],q=e[0],o=e[1],p=e[2],y=r[0],b=r[1],j=r[2],a=i[0],n=i[1],c=i[2],N=0;N<A;N++)n(b,f)===0&&c(j,m,v(a(y,x))),x+=q,f+=o,m+=p}C.exports=W
});var E=s(function(xr,D){
var l=require('@stdlib/strided-base-stride2offset/dist'),X=d();function Y(r,t,e,u,i){var v,a;return a=t[0],v=[l(a,e[0]),l(a,e[1]),l(a,e[2])],X(r,t,e,v,u,i)}D.exports=Y
});var J=s(function(fr,I){
var O=require('@stdlib/array-base-assert-is-accessor-array/dist'),F=require('@stdlib/array-base-accessor-getter/dist'),Z=require('@stdlib/array-base-accessor-setter/dist'),H=require('@stdlib/array-base-getter/dist'),_=require('@stdlib/array-base-setter/dist'),g=require('@stdlib/array-dtype/dist'),$=B(),h=E();function rr(r,t,e,u){var i,v,a,n,c,q;return n=r[0],O(n)&&(i=F(g(n))),c=r[1],O(c)&&(v=F(g(c))),q=r[2],O(q)&&(a=Z(g(q))),i||v||a?(i=i||H(g(n)),v=v||H(g(c)),a=a||_(g(q)),h(r,t,e,[i,v,a],u)):$(r,t,e,u)}I.exports=rr
});var P=s(function(yr,M){
var R=require('@stdlib/array-base-assert-is-accessor-array/dist'),K=require('@stdlib/array-base-accessor-getter/dist'),er=require('@stdlib/array-base-accessor-setter/dist'),L=require('@stdlib/array-base-getter/dist'),vr=require('@stdlib/array-base-setter/dist'),k=require('@stdlib/array-dtype/dist'),ar=G(),tr=d();function ir(r,t,e,u,i){var v,a,n,c,q,o;return c=r[0],R(c)&&(v=K(k(c))),q=r[1],R(q)&&(a=K(k(q))),o=r[2],R(o)&&(n=er(k(o))),v||a||n?(v=v||L(k(c)),a=a||L(k(q)),n=n||vr(k(o)),tr(r,t,e,u,[v,a,n],i)):ar(r,t,e,u,i)}M.exports=ir
});var ur=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Q=J(),nr=P();ur(Q,"ndarray",nr);module.exports=Q;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
