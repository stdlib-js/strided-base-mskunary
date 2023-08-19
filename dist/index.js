"use strict";var p=function(r,f){return function(){return f||r((f={exports:{}}).exports,f),f.exports}};var b=p(function(tr,R){
function Q(r,f,u,m){var n,a,i,t,e,v,x,y,q,c,o;if(c=f[0],!(c<=0))for(n=u[0],a=u[1],i=u[2],n<0?t=(1-c)*n:t=0,a<0?e=(1-c)*a:e=0,i<0?v=(1-c)*i:v=0,x=r[0],y=r[1],q=r[2],o=0;o<c;o++)y[e]===0&&(q[v]=m(x[t])),t+=n,e+=a,v+=i}R.exports=Q
});var w=p(function(ur,j){
function T(r,f,u,m,n){var a,i,t,e,v,x,y,q,c,o,s,N,g,l;if(g=f[0],!(g<=0))for(e=u[0],v=u[1],x=u[2],e<0?y=(1-g)*e:y=0,v<0?q=(1-g)*v:q=0,x<0?c=(1-g)*x:c=0,o=r[0],s=r[1],N=r[2],a=m[0],i=m[1],t=m[2],l=0;l<g;l++)i(s,q)===0&&t(N,c,n(a(o,y))),y+=e,q+=v,c+=x}j.exports=T
});var D=p(function(nr,C){
var S=require('@stdlib/array-base-assert-is-accessor-array/dist'),z=require('@stdlib/array-base-accessor-getter/dist'),U=require('@stdlib/array-base-accessor-setter/dist'),B=require('@stdlib/array-base-getter/dist'),V=require('@stdlib/array-base-setter/dist'),k=require('@stdlib/array-dtype/dist'),W=b(),X=w();function Y(r,f,u,m){var n,a,i,t,e,v;return t=r[0],S(t)&&(n=z(k(t))),e=r[1],S(e)&&(a=z(k(e))),v=r[2],S(v)&&(i=U(k(v))),n||a||i?(n=n||B(k(t)),a=a||B(k(e)),i=i||V(k(v)),X(r,f,u,[n,a,i],m)):W(r,f,u,m)}C.exports=Y
});var F=p(function(mr,E){
function Z(r,f,u,m,n){var a,i,t,e,v,x,y,q,c,o,s;if(o=f[0],!(o<=0))for(e=m[0],v=m[1],x=m[2],a=u[0],i=u[1],t=u[2],y=r[0],q=r[1],c=r[2],s=0;s<o;s++)q[v]===0&&(c[x]=n(y[e])),e+=a,v+=i,x+=t}E.exports=Z
});var I=p(function(xr,H){
function _(r,f,u,m,n,a){var i,t,e,v,x,y,q,c,o,s,N,g,l,G;if(l=f[0],!(l<=0))for(q=m[0],c=m[1],o=m[2],v=u[0],x=u[1],y=u[2],s=r[0],N=r[1],g=r[2],i=n[0],t=n[1],e=n[2],G=0;G<l;G++)t(N,c)===0&&e(g,o,a(i(s,q))),q+=v,c+=x,o+=y}H.exports=_
});var M=p(function(fr,L){
var O=require('@stdlib/array-base-assert-is-accessor-array/dist'),J=require('@stdlib/array-base-accessor-getter/dist'),$=require('@stdlib/array-base-accessor-setter/dist'),K=require('@stdlib/array-base-getter/dist'),d=require('@stdlib/array-base-setter/dist'),A=require('@stdlib/array-dtype/dist'),h=F(),rr=I();function er(r,f,u,m,n){var a,i,t,e,v,x;return e=r[0],O(e)&&(a=J(A(e))),v=r[1],O(v)&&(i=J(A(v))),x=r[2],O(x)&&(t=$(A(x))),a||i||t?(a=a||K(A(e)),i=i||K(A(v)),t=t||d(A(x)),rr(r,f,u,m,[a,i,t],n)):h(r,f,u,m,n)}L.exports=er
});var vr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=D(),ir=M();vr(P,"ndarray",ir);module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
