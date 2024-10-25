import{b as S}from"./antd-BmrhB3rb.js";import{r as O}from"./index-Ck6h_6RS.js";function E(b,y){for(var f=0;f<y.length;f++){const u=y[f];if(typeof u!="string"&&!Array.isArray(u)){for(const s in u)if(s!=="default"&&!(s in b)){const a=Object.getOwnPropertyDescriptor(u,s);a&&Object.defineProperty(b,s,a.get?a:{enumerable:!0,get:()=>u[s]})}}}return Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}};(function(b,y){(function(f){f(O())})(function(f){function u(a,t){for(var r=0;r<a.length;r++)t(a[r],r)}function s(a,t){for(var r=0;r<a.length;r++)if(t(a[r],r))return!0;return!1}f.defineMode("dylan",function(a){var t={unnamedDefinition:["interface"],namedDefinition:["module","library","macro","C-struct","C-union","C-function","C-callable-wrapper"],typeParameterizedDefinition:["class","C-subtype","C-mapped-subtype"],otherParameterizedDefinition:["method","function","C-variable","C-address"],constantSimpleDefinition:["constant"],variableSimpleDefinition:["variable"],otherSimpleDefinition:["generic","domain","C-pointer-type","table"],statement:["if","block","begin","method","case","for","select","when","unless","until","while","iterate","profiling","dynamic-bind"],separator:["finally","exception","cleanup","else","elseif","afterwards"],other:["above","below","by","from","handler","in","instance","let","local","otherwise","slot","subclass","then","to","keyed-by","virtual"],signalingCalls:["signal","error","cerror","break","check-type","abort"]};t.otherDefinition=t.unnamedDefinition.concat(t.namedDefinition).concat(t.otherParameterizedDefinition),t.definition=t.typeParameterizedDefinition.concat(t.otherDefinition),t.parameterizedDefinition=t.typeParameterizedDefinition.concat(t.otherParameterizedDefinition),t.simpleDefinition=t.constantSimpleDefinition.concat(t.variableSimpleDefinition).concat(t.otherSimpleDefinition),t.keyword=t.statement.concat(t.separator).concat(t.other);var r="[-_a-zA-Z?!*@<>$%]+",C=new RegExp("^"+r),c={symbolKeyword:r+":",symbolClass:"<"+r+">",symbolGlobal:"\\*"+r+"\\*",symbolConstant:"\\$"+r},z={symbolKeyword:"atom",symbolClass:"tag",symbolGlobal:"variable-2",symbolConstant:"variable-3"};for(var h in c)c.hasOwnProperty(h)&&(c[h]=new RegExp("^"+c[h]));c.keyword=[/^with(?:out)?-[-_a-zA-Z?!*@<>$%]+/];var p={};p.keyword="keyword",p.definition="def",p.simpleDefinition="def",p.signalingCalls="builtin";var v={},g={};u(["keyword","definition","simpleDefinition","signalingCalls"],function(e){u(t[e],function(i){v[i]=e,g[i]=p[e]})});function x(e,i,n){return i.tokenize=n,n(e,i)}function k(e,i){var n=e.peek();if(n=="'"||n=='"')return e.next(),x(e,i,m(n,"string"));if(n=="/"){if(e.next(),e.eat("*"))return x(e,i,P);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}else if(/[+\-\d\.]/.test(n)){if(e.match(/^[+-]?[0-9]*\.[0-9]*([esdx][+-]?[0-9]+)?/i)||e.match(/^[+-]?[0-9]+([esdx][+-]?[0-9]+)/i)||e.match(/^[+-]?\d+/))return"number"}else{if(n=="#")return e.next(),n=e.peek(),n=='"'?(e.next(),x(e,i,m('"',"string"))):n=="b"?(e.next(),e.eatWhile(/[01]/),"number"):n=="x"?(e.next(),e.eatWhile(/[\da-f]/i),"number"):n=="o"?(e.next(),e.eatWhile(/[0-7]/),"number"):n=="#"?(e.next(),"punctuation"):n=="["||n=="("?(e.next(),"bracket"):e.match(/f|t|all-keys|include|key|next|rest/i)?"atom":(e.eatWhile(/[-a-zA-Z]/),"error");if(n=="~")return e.next(),n=e.peek(),n=="="?(e.next(),n=e.peek(),n=="="&&e.next(),"operator"):"operator";if(n==":"){if(e.next(),n=e.peek(),n=="=")return e.next(),"operator";if(n==":")return e.next(),"punctuation"}else{if("[](){}".indexOf(n)!=-1)return e.next(),"bracket";if(".,".indexOf(n)!=-1)return e.next(),"punctuation";if(e.match("end"))return"keyword"}}for(var d in c)if(c.hasOwnProperty(d)){var o=c[d];if(o instanceof Array&&s(o,function(l){return e.match(l)})||e.match(o))return z[d]}return/[+\-*\/^=<>&|]/.test(n)?(e.next(),"operator"):e.match("define")?"def":(e.eatWhile(/[\w\-]/),v.hasOwnProperty(e.current())?g[e.current()]:e.current().match(C)?"variable":(e.next(),"variable-2"))}function P(e,i){for(var n=!1,d=!1,o=0,l;l=e.next();){if(l=="/"&&n)if(o>0)o--;else{i.tokenize=k;break}else l=="*"&&d&&o++;n=l=="*",d=l=="/"}return"comment"}function m(e,i){return function(n,d){for(var o=!1,l,w=!1;(l=n.next())!=null;){if(l==e&&!o){w=!0;break}o=!o&&l=="\\"}return(w||!o)&&(d.tokenize=k),i}}return{startState:function(){return{tokenize:k,currentIndent:0}},token:function(e,i){if(e.eatSpace())return null;var n=i.tokenize(e,i);return n},blockCommentStart:"/*",blockCommentEnd:"*/"}}),f.defineMIME("text/x-dylan","dylan")})})();var D=_.exports;const A=S(D),$=E({__proto__:null,default:A},[D]);export{$ as d};
