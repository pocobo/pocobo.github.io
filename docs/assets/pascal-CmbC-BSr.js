import{b as h}from"./antd-BmrhB3rb.js";import{r as g}from"./index-Ck6h_6RS.js";function x(c,u){for(var o=0;o<u.length;o++){const i=u[o];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in c)){const l=Object.getOwnPropertyDescriptor(i,a);l&&Object.defineProperty(c,a,l.get?l:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var y={exports:{}};(function(c,u){(function(o){o(g())})(function(o){o.defineMode("pascal",function(){function i(r){for(var t={},e=r.split(" "),n=0;n<e.length;++n)t[e[n]]=!0;return t}var a=i("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),l={null:!0},f=/[+\-*&%=<>!?|\/]/;function k(r,t){var e=r.next();if(e=="#"&&t.startOfLine)return r.skipToEnd(),"meta";if(e=='"'||e=="'")return t.tokenize=v(e),t.tokenize(r,t);if(e=="("&&r.eat("*"))return t.tokenize=p,p(r,t);if(e=="{")return t.tokenize=d,d(r,t);if(/[\[\]\(\),;\:\.]/.test(e))return null;if(/\d/.test(e))return r.eatWhile(/[\w\.]/),"number";if(e=="/"&&r.eat("/"))return r.skipToEnd(),"comment";if(f.test(e))return r.eatWhile(f),"operator";r.eatWhile(/[\w\$_]/);var n=r.current();return a.propertyIsEnumerable(n)?"keyword":l.propertyIsEnumerable(n)?"atom":"variable"}function v(r){return function(t,e){for(var n=!1,s,m=!1;(s=t.next())!=null;){if(s==r&&!n){m=!0;break}n=!n&&s=="\\"}return(m||!n)&&(e.tokenize=null),"string"}}function p(r,t){for(var e=!1,n;n=r.next();){if(n==")"&&e){t.tokenize=null;break}e=n=="*"}return"comment"}function d(r,t){for(var e;e=r.next();)if(e=="}"){t.tokenize=null;break}return"comment"}return{startState:function(){return{tokenize:null}},token:function(r,t){if(r.eatSpace())return null;var e=(t.tokenize||k)(r,t);return e=="comment"||e=="meta",e},electricChars:"{}"}}),o.defineMIME("text/x-pascal","pascal")})})();var b=y.exports;const w=h(b),j=x({__proto__:null,default:w},[b]);export{j as p};
