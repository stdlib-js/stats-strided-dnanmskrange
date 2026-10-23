"use strict";var q=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var m=q(function(G,p){
var b=require('@stdlib/math-base-assert-is-nan/dist');function E(r,e,i,o,u,d,_){var f,t,v,s,a,n;if(r<=0)return NaN;for(v=o,s=_,n=0;n<r&&(a=e[v],!(a===a&&u[s]===0));n++)v+=i,s+=d;if(n===r)return NaN;for(t=a,f=t,n+=1,n;n<r;n++)v+=i,s+=d,!u[s]&&(a=e[v],!b(a)&&(a<t?t=a:a>f&&(f=a)));return f-t}p.exports=E
});var g=q(function(H,y){
var x=require('@stdlib/strided-base-stride2offset/dist'),O=m();function h(r,e,i,o,u){return O(r,e,i,x(r,i),o,u,x(r,u))}y.exports=h
});var k=q(function(I,l){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=g(),z=m();w(j,"ndarray",z);l.exports=j
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),c,R=B(A(__dirname,"./native.js"));C(R)?c=D:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
