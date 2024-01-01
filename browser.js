// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,h=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,d,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,p,"e+0$1"),n=y.call(n,h,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,t,n,i;for(t=[],i=0,n=V.exec(e);n;)(r=e.slice(i,V.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=V.lastIndex,n=V.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function S(e){return"string"==typeof e}function B(e){var r,t,n;if(!S(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=R(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var P=I;function Y(e,r,t){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W="function";function $(e){return typeof e.get===W&&typeof e.set===W}var G={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Z(e){var r=G[e];return"function"==typeof r?r:G.default}var X={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function J(e){var r=X[e];return"function"==typeof r?r:X.default}var z={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function q(e){var r=z[e];return"function"==typeof r?r:z.default}var D={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function H(e){var r=D[e];return"function"==typeof r?r:D.default}var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Q(){return K&&"symbol"==typeof Symbol.toStringTag}var ee=Object.prototype.toString,re=Object.prototype.hasOwnProperty;function te(e,r){return null!=e&&re.call(e,r)}var ne="function"==typeof Symbol?Symbol:void 0,ie="function"==typeof ne?ne.toStringTag:"",oe=Q()?function(e){var r,t,n;if(null==e)return ee.call(e);t=e[ie],r=te(e,ie);try{e[ie]=void 0}catch(r){return ee.call(e)}return n=ee.call(e),r?e[ie]=t:delete e[ie],n}:function(e){return ee.call(e)},ae=Array.isArray?Array.isArray:function(e){return"[object Array]"===oe(e)};function ue(e){return null!==e&&"object"==typeof e}function fe(e){return ue(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function le(){return/^\s*function\s*([^(]*)/i}Y(ue,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ae(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ue));var ce=/^\s*function\s*([^(]*)/i;function se(e){var r,t,n;if(("Object"===(t=oe(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ce.exec(n.toString()))return r[1]}return fe(e)?"Buffer":t}Y(le,"REGEXP",ce);var ye={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},pe="function"==typeof Float64Array,he="function"==typeof Float64Array?Float64Array:null,ge="function"==typeof Float64Array?Float64Array:void 0,me=function(){var e,r,t;if("function"!=typeof he)return!1;try{r=new he([1,3.14,-3.14,NaN]),t=r,e=(pe&&t instanceof Float64Array||"[object Float64Array]"===oe(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")},we="function"==typeof Float32Array,be=Number.POSITIVE_INFINITY,de="function"==typeof Float32Array?Float32Array:null,ve="function"==typeof Float32Array?Float32Array:void 0,Ee=function(){var e,r,t;if("function"!=typeof de)return!1;try{r=new de([1,3.14,-3.14,5e40]),t=r,e=(we&&t instanceof Float32Array||"[object Float32Array]"===oe(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===be}catch(r){e=!1}return e}()?ve:function(){throw new Error("not implemented")},Ae="function"==typeof Uint32Array,Te="function"==typeof Uint32Array?Uint32Array:null,_e="function"==typeof Uint32Array?Uint32Array:void 0,xe=function(){var e,r,t;if("function"!=typeof Te)return!1;try{r=new Te(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Ae&&t instanceof Uint32Array||"[object Uint32Array]"===oe(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?_e:function(){throw new Error("not implemented")},je="function"==typeof Int32Array,ke="function"==typeof Int32Array?Int32Array:null,Ve="function"==typeof Int32Array?Int32Array:void 0,Le=function(){var e,r,t;if("function"!=typeof ke)return!1;try{r=new ke([1,3.14,-3.14,2147483648]),t=r,e=(je&&t instanceof Int32Array||"[object Int32Array]"===oe(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Ve:function(){throw new Error("not implemented")},Re="function"==typeof Uint16Array,Se="function"==typeof Uint16Array?Uint16Array:null,Be="function"==typeof Uint16Array?Uint16Array:void 0,Ie=function(){var e,r,t;if("function"!=typeof Se)return!1;try{r=new Se(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Re&&t instanceof Uint16Array||"[object Uint16Array]"===oe(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Be:function(){throw new Error("not implemented")},Ce="function"==typeof Int16Array,Fe="function"==typeof Int16Array?Int16Array:null,Oe="function"==typeof Int16Array?Int16Array:void 0,Me=function(){var e,r,t;if("function"!=typeof Fe)return!1;try{r=new Fe([1,3.14,-3.14,32768]),t=r,e=(Ce&&t instanceof Int16Array||"[object Int16Array]"===oe(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Oe:function(){throw new Error("not implemented")},Ue="function"==typeof Uint8Array,Ne="function"==typeof Uint8Array?Uint8Array:null,Pe="function"==typeof Uint8Array?Uint8Array:void 0,Ye=function(){var e,r,t;if("function"!=typeof Ne)return!1;try{r=new Ne(r=[1,3.14,-3.14,256,257]),t=r,e=(Ue&&t instanceof Uint8Array||"[object Uint8Array]"===oe(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Pe:function(){throw new Error("not implemented")},We="function"==typeof Uint8ClampedArray,$e="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Ge="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Ze=function(){var e,r,t;if("function"!=typeof $e)return!1;try{r=new $e([-1,0,1,3.14,4.99,255,256]),t=r,e=(We&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===oe(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Ge:function(){throw new Error("not implemented")},Xe="function"==typeof Int8Array,Je="function"==typeof Int8Array?Int8Array:null,ze="function"==typeof Int8Array?Int8Array:void 0,qe=function(){var e,r,t;if("function"!=typeof Je)return!1;try{r=new Je([1,3.14,-3.14,128]),t=r,e=(Xe&&t instanceof Int8Array||"[object Int8Array]"===oe(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?ze:function(){throw new Error("not implemented")};function De(e){return"number"==typeof e}var He=Number,Ke=He.prototype.toString,Qe=Q();function er(e){return"object"==typeof e&&(e instanceof He||(Qe?function(e){try{return Ke.call(e),!0}catch(e){return!1}}(e):"[object Number]"===oe(e)))}function rr(e){return De(e)||er(e)}Y(rr,"isPrimitive",De),Y(rr,"isObject",er);var tr=He.NEGATIVE_INFINITY,nr=Math.floor;function ir(e){return nr(e)===e}function or(e){return e<be&&e>tr&&ir(e)}function ar(e){return De(e)&&or(e)}function ur(e){return er(e)&&or(e.valueOf())}function fr(e){return ar(e)||ur(e)}function lr(e){return ar(e)&&e>=0}function cr(e){return ur(e)&&e.valueOf()>=0}function sr(e){return lr(e)||cr(e)}function yr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ir(e.length)&&e.length>=0&&e.length<=4294967295}function pr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&ir(e.length)&&e.length>=0&&e.length<=9007199254740991}Y(fr,"isPrimitive",ar),Y(fr,"isObject",ur),Y(sr,"isPrimitive",lr),Y(sr,"isObject",cr);var hr="function"==typeof ArrayBuffer;function gr(e){return hr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===oe(e)}function mr(e){return"object"==typeof e&&null!==e&&!ae(e)}var wr=/./;function br(e){return"boolean"==typeof e}var dr=Boolean,vr=Boolean.prototype.toString,Er=Q();function Ar(e){return"object"==typeof e&&(e instanceof dr||(Er?function(e){try{return vr.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===oe(e)))}function Tr(e){return br(e)||Ar(e)}function _r(){return new Function("return this;")()}Y(Tr,"isPrimitive",br),Y(Tr,"isObject",Ar);var xr="object"==typeof self?self:null,jr="object"==typeof window?window:null,kr="object"==typeof globalThis?globalThis:null,Vr=function(e){if(arguments.length){if(!br(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return _r()}if(kr)return kr;if(xr)return xr;if(jr)return jr;throw new Error("unexpected error. Unable to resolve global object.")}(),Lr=Vr.document&&Vr.document.childNodes,Rr=Int8Array,Sr="function"==typeof wr||"object"==typeof Rr||"function"==typeof Lr?function(e){return se(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?se(e).toLowerCase():r};function Br(e){return"function"===Sr(e)}function Ir(e,r){if(!(this instanceof Ir))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!De(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!De(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Ir,"BYTES_PER_ELEMENT",8),Y(Ir.prototype,"BYTES_PER_ELEMENT",8),Y(Ir.prototype,"byteLength",16),Y(Ir.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Ir.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Cr="function"==typeof Math.fround?Math.fround:null,Fr=new Ee(1),Or="function"==typeof Cr?Cr:function(e){return Fr[0]=e,Fr[0]};function Mr(e,r){if(!(this instanceof Mr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!De(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!De(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Or(e)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Or(r)}),this}function Ur(e){return e instanceof Ir||e instanceof Mr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Nr(e){return ir(e/2)}function Pr(){return"function"==typeof ne&&"symbol"==typeof ne("foo")&&te(ne,"iterator")&&"symbol"==typeof ne.iterator}Y(Mr,"BYTES_PER_ELEMENT",4),Y(Mr.prototype,"BYTES_PER_ELEMENT",4),Y(Mr.prototype,"byteLength",8),Y(Mr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Mr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Yr=Pr()?Symbol.iterator:null;function Wr(e,r,t){P(e,r,{configurable:!1,enumerable:!1,get:t})}function $r(e){return e.re}function Gr(e){return e.im}function Zr(e,r){return new Ee(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Xr(e,r){return new me(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Jr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(yr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Ur(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push($r(n),Gr(n))}return r}function zr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,yr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ur(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push($r(o),Gr(o))}return n}function qr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Ur(n=r[i]))return null;e[o]=$r(n),e[o+1]=Gr(n),o+=2}return e}var Dr=2*Ee.BYTES_PER_ELEMENT,Hr=Pr();function Kr(e){return e instanceof tt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Qr(e){return e===tt||"Complex128Array"===e.name}function et(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Dr}function rt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Dr}function tt(){var e,r,t,n;if(r=arguments.length,!(this instanceof tt))return 0===r?new tt:1===r?new tt(arguments[0]):2===r?new tt(arguments[0],arguments[1]):new tt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Ee(0);else if(1===r)if(lr(arguments[0]))t=new Ee(2*arguments[0]);else if(pr(arguments[0]))if((n=(t=arguments[0]).length)&&ae(t)&&Ur(t[0])){if(null===(t=qr(new Ee(2*n),t))){if(!Nr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ee(arguments[0])}}else{if(et(t))t=Zr(t,0);else if(rt(t))t=Xr(t,0);else if(!Nr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Ee(t)}else if(gr(arguments[0])){if(!ir((t=arguments[0]).byteLength/Dr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Dr,t.byteLength));t=new Ee(t)}else{if(!mr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Hr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Br(t[Yr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Br((t=t[Yr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Jr(t))instanceof Error)throw t;t=new Ee(t)}else{if(!gr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!lr(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!ir(e/Dr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Dr,e));if(2===r){if(!ir((n=t.byteLength-e)/Dr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Dr,n));t=new Ee(t,e)}else{if(!lr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Dr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Dr));t=new Ee(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function nt(e){return e.re}function it(e){return e.im}function ot(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(yr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Ur(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(nt(n),it(n))}return r}function at(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,yr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ur(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(nt(o),it(o))}return n}function ut(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Ur(n=r[i]))return null;e[o]=nt(n),e[o+1]=it(n),o+=2}return e}Y(tt,"BYTES_PER_ELEMENT",Dr),Y(tt,"name","Complex64Array"),Y(tt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Br(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Kr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ur(c=n.call(r,e.get(s),s)))o[y]=$r(c),o[y+1]=Gr(c);else{if(!(yr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(pr(e)){if(n){for(f=e.length,u=e.get&&e.set?Z("default"):q("default"),s=0;s<f;s++)if(!Ur(u(e,s))){l=!0;break}if(l){if(!Nr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ur(c=n.call(r,u(e,s),s)))o[y]=$r(c),o[y+1]=Gr(c);else{if(!(yr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(mr(e)&&Hr&&Br(e[Yr])){if(!Br((o=e[Yr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?zr(o,n,r):Jr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(tt,"of",(function(){var e,r;if(!Br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Wr(tt.prototype,"buffer",(function(){return this._buffer.buffer})),Wr(tt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Wr(tt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(tt.prototype,"BYTES_PER_ELEMENT",tt.BYTES_PER_ELEMENT),Y(tt.prototype,"copyWithin",(function(e,r){if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(tt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Mr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Yr&&Y(t,Yr,(function(){return r.entries()})),t})),Y(tt.prototype,"get",(function(e){var r;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!lr(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Mr((r=this._buffer)[e*=2],r[e+1])})),Wr(tt.prototype,"length",(function(){return this._length})),Y(tt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Kr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!lr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ur(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=$r(e),void(n[t+1]=Gr(e))}if(Kr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Dr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ee(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!pr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Ur(e[f])){o=!0;break}if(o){if(!Nr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Dr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new Ee(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=$r(u),n[t+1]=Gr(u),t+=2}}));var ft=2*me.BYTES_PER_ELEMENT,lt=Pr();function ct(e){return e instanceof ht||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function st(e){return e===ht||"Complex64Array"===e.name}function yt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ft/2}function pt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ft}function ht(){var e,r,t,n;if(r=arguments.length,!(this instanceof ht))return 0===r?new ht:1===r?new ht(arguments[0]):2===r?new ht(arguments[0],arguments[1]):new ht(arguments[0],arguments[1],arguments[2]);if(0===r)t=new me(0);else if(1===r)if(lr(arguments[0]))t=new me(2*arguments[0]);else if(pr(arguments[0]))if((n=(t=arguments[0]).length)&&ae(t)&&Ur(t[0])){if(null===(t=ut(new me(2*n),t))){if(!Nr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new me(arguments[0])}}else{if(yt(t))t=Zr(t,0);else if(pt(t))t=Xr(t,0);else if(!Nr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new me(t)}else if(gr(arguments[0])){if(!ir((t=arguments[0]).byteLength/ft))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ft,t.byteLength));t=new me(t)}else{if(!mr(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===lt)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Br(t[Yr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Br((t=t[Yr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ot(t))instanceof Error)throw t;t=new me(t)}else{if(!gr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!lr(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!ir(e/ft))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ft,e));if(2===r){if(!ir((n=t.byteLength-e)/ft))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ft,n));t=new me(t,e)}else{if(!lr(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ft>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ft));t=new me(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(ht,"BYTES_PER_ELEMENT",ft),Y(ht,"name","Complex128Array"),Y(ht,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!Br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Br(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(ct(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ur(c=n.call(r,e.get(s),s)))o[y]=nt(c),o[y+1]=it(c);else{if(!(yr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(pr(e)){if(n){for(f=e.length,u=e.get&&e.set?Z("default"):q("default"),s=0;s<f;s++)if(!Ur(u(e,s))){l=!0;break}if(l){if(!Nr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Ur(c=n.call(r,u(e,s),s)))o[y]=nt(c),o[y+1]=it(c);else{if(!(yr(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(mr(e)&&lt&&Br(e[Yr])){if(!Br((o=e[Yr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?at(o,n,r):ot(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(ht,"of",(function(){var e,r;if(!Br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!st(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Wr(ht.prototype,"buffer",(function(){return this._buffer.buffer})),Wr(ht.prototype,"byteLength",(function(){return this._buffer.byteLength})),Wr(ht.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(ht.prototype,"BYTES_PER_ELEMENT",ht.BYTES_PER_ELEMENT),Y(ht.prototype,"copyWithin",(function(e,r){if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(ht.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Ir(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Yr&&Y(t,Yr,(function(){return r.entries()})),t})),Y(ht.prototype,"get",(function(e){var r;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!lr(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Ir((r=this._buffer)[e*=2],r[e+1])})),Wr(ht.prototype,"length",(function(){return this._length})),Y(ht.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!ct(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!lr(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ur(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=nt(e),void(n[t+1]=it(e))}if(ct(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*ft,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new me(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!pr(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Ur(e[f])){o=!0;break}if(o){if(!Nr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*ft,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new me(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=nt(u),n[t+1]=it(u),t+=2}}));var gt=[me,Ee,Le,xe,Me,Ie,qe,Ye,Ze,tt,ht],mt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],wt=mt.length;function bt(e){var r;if(ae(e))return"generic";if(fe(e))return null;for(r=0;r<wt;r++)if(e instanceof gt[r])return mt[r];return ye[se(e)]||null}function dt(e,r,t,n){var i,o,a,u,f,l;return $(u=e[0])&&(i=Z(bt(u))),$(f=e[1])&&(o=Z(bt(f))),$(l=e[2])&&(a=J(bt(l))),i||o||a?function(e,r,t,n,i){var o,a,u,f,l,c,s,y,p,h,g,m,w,b;if(!((w=r[0])<=0))for(s=(f=t[0])<0?(1-w)*f:0,y=(l=t[1])<0?(1-w)*l:0,p=(c=t[2])<0?(1-w)*c:0,h=e[0],g=e[1],m=e[2],o=n[0],a=n[1],u=n[2],b=0;b<w;b++)0===a(g,y)&&u(m,p,i(o(h,s))),s+=f,y+=l,p+=c}(e,r,t,[i=i||q(bt(u)),o=o||q(bt(f)),a=a||H(bt(l))],n):function(e,r,t,n){var i,o,a,u,f,l,c,s,y,p,h;if(!((p=r[0])<=0))for(u=(i=t[0])<0?(1-p)*i:0,f=(o=t[1])<0?(1-p)*o:0,l=(a=t[2])<0?(1-p)*a:0,c=e[0],s=e[1],y=e[2],h=0;h<p;h++)0===s[f]&&(y[l]=n(c[u])),u+=i,f+=o,l+=a}(e,r,t,n)}return Y(dt,"ndarray",(function(e,r,t,n,i){var o,a,u,f,l,c;return $(f=e[0])&&(o=Z(bt(f))),$(l=e[1])&&(a=Z(bt(l))),$(c=e[2])&&(u=J(bt(c))),o||a||u?function(e,r,t,n,i,o){var a,u,f,l,c,s,y,p,h,g,m,w,b,d;if(!((b=r[0])<=0))for(y=n[0],p=n[1],h=n[2],l=t[0],c=t[1],s=t[2],g=e[0],m=e[1],w=e[2],a=i[0],u=i[1],f=i[2],d=0;d<b;d++)0===u(m,p)&&f(w,h,o(a(g,y))),y+=l,p+=c,h+=s}(e,r,t,n,[o=o||q(bt(f)),a=a||q(bt(l)),u=u||H(bt(c))],i):function(e,r,t,n,i){var o,a,u,f,l,c,s,y,p,h,g;if(!((h=r[0])<=0))for(f=n[0],l=n[1],c=n[2],o=t[0],a=t[1],u=t[2],s=e[0],y=e[1],p=e[2],g=0;g<h;g++)0===y[l]&&(p[c]=i(s[f])),f+=o,l+=a,c+=u}(e,r,t,n,i)})),dt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).mskunary=r();
//# sourceMappingURL=browser.js.map
