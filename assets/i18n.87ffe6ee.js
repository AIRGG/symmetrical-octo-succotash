import{h as e,e as t,i as n,o as a,a as l,r,c as o,w as s,F as c,g as i,b as u,d as m,T as f,f as _}from"./index.1921beeb.js";
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const p="undefined"!=typeof window,g="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,d=e=>g?Symbol(e):e,b=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),v=e=>"number"==typeof e&&isFinite(e),y=e=>"[object RegExp]"===D(e),E=e=>A(e)&&0===Object.keys(e).length;function h(e,t){"undefined"!=typeof console&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const k=Object.assign;function N(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const I=Object.prototype.hasOwnProperty;function L(e,t){return I.call(e,t)}const R=Array.isArray,T=e=>"function"==typeof e,O=e=>"string"==typeof e,F=e=>"boolean"==typeof e,w=e=>null!==e&&"object"==typeof e,S=Object.prototype.toString,D=e=>S.call(e),A=e=>"[object Object]"===D(e),W=15;function C(e,t,n={}){const{domain:a,messages:l,args:r}=n,o=new SyntaxError(String(e));return o.code=e,t&&(o.location=t),o.domain=a,o}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */const M=[];
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */M[0]={w:[0],i:[3,0],"[":[4],o:[7]},M[1]={w:[1],".":[2],"[":[4],o:[7]},M[2]={w:[2],i:[3,0],0:[3,0]},M[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},M[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},M[5]={"'":[4,0],o:8,l:[5,0]},M[6]={'"':[4,0],o:8,l:[6,0]};const P=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function U(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function j(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,P.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}const V=new Map;function $(e,t){return w(e)?e[t]:null}const x=e=>e,G=e=>"",H=e=>0===e.length?"":e.join(""),B=e=>null==e?"":R(e)||A(e)&&e.toString===S?JSON.stringify(e,null,2):String(e);function X(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function Y(e={}){const t=e.locale,n=function(e){const t=v(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(v(e.named.count)||v(e.named.n))?v(e.named.count)?e.named.count:v(e.named.n)?e.named.n:t:t}(e),a=w(e.pluralRules)&&O(t)&&T(e.pluralRules[t])?e.pluralRules[t]:X,l=w(e.pluralRules)&&O(t)&&T(e.pluralRules[t])?X:void 0,r=e.list||[],o=e.named||{};v(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,o);function s(t){const n=T(e.messages)?e.messages(t):!!w(e.messages)&&e.messages[t];return n||(e.parent?e.parent.message(t):G)}const c=A(e.processor)&&T(e.processor.normalize)?e.processor.normalize:H,i=A(e.processor)&&T(e.processor.interpolate)?e.processor.interpolate:B,u={list:e=>r[e],named:e=>o[e],plural:e=>e[a(n,e.length,l)],linked:(t,...n)=>{const[a,l]=n;let r="text",o="";1===n.length?w(a)?(o=a.modifier||o,r=a.type||r):O(a)&&(o=a||o):2===n.length&&(O(a)&&(o=a||o),O(l)&&(r=l||r));let c=s(t)(u);return"vnode"===r&&R(c)&&o&&(c=c[0]),o?(i=o,e.modifiers?e.modifiers[i]:x)(c,r):c;var i},message:s,type:A(e.processor)&&O(e.processor.type)?e.processor.type:"text",interpolate:i,normalize:c};return u}function J(e,t,n){return[...new Set([n,...R(t)?t:w(t)?Object.keys(t):O(t)?[t]:[n]])]}function z(e,t,n){const a=O(n)?n:K,l=e;l.__localeChainCache||(l.__localeChainCache=new Map);let r=l.__localeChainCache.get(a);if(!r){r=[];let e=[n];for(;R(e);)e=q(r,e,t);const o=R(t)||!A(t)?t:t.default?t.default:null;e=O(o)?[o]:o,R(e)&&q(r,e,!1),l.__localeChainCache.set(a,r)}return r}function q(e,t,n){let a=!0;for(let l=0;l<t.length&&F(a);l++){const r=t[l];O(r)&&(a=Z(e,t[l],n))}return a}function Z(e,t,n){let a;const l=t.split("-");do{a=Q(e,l.join("-"),n),l.splice(-1,1)}while(l.length&&!0===a);return a}function Q(e,t,n){let a=!1;if(!e.includes(t)&&(a=!0,t)){a="!"!==t[t.length-1];const l=t.replace(/!/g,"");e.push(l),(R(n)||A(n))&&n[l]&&(a=n[l])}return a}const K="en-US",ee=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;let te,ne;let ae=0;function le(e={}){const t=O(e.version)?e.version:"9.2.2",n=O(e.locale)?e.locale:K,a=R(e.fallbackLocale)||A(e.fallbackLocale)||O(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:n,l=A(e.messages)?e.messages:{[n]:{}},r=A(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},o=A(e.numberFormats)?e.numberFormats:{[n]:{}},s=k({},e.modifiers||{},{upper:(e,t)=>"text"===t&&O(e)?e.toUpperCase():"vnode"===t&&w(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&O(e)?e.toLowerCase():"vnode"===t&&w(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&O(e)?ee(e):"vnode"===t&&w(e)&&"__v_isVNode"in e?ee(e.children):e}),c=e.pluralRules||{},i=T(e.missing)?e.missing:null,u=!F(e.missingWarn)&&!y(e.missingWarn)||e.missingWarn,m=!F(e.fallbackWarn)&&!y(e.fallbackWarn)||e.fallbackWarn,f=!!e.fallbackFormat,_=!!e.unresolving,p=T(e.postTranslation)?e.postTranslation:null,g=A(e.processor)?e.processor:null,d=!F(e.warnHtmlMessage)||e.warnHtmlMessage,b=!!e.escapeParameter,v=T(e.messageCompiler)?e.messageCompiler:undefined,E=T(e.messageResolver)?e.messageResolver:te||$,N=T(e.localeFallbacker)?e.localeFallbacker:ne||J,I=w(e.fallbackContext)?e.fallbackContext:void 0,L=T(e.onWarn)?e.onWarn:h,S=e,D=w(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,W=w(S.__numberFormatters)?S.__numberFormatters:new Map,C=w(S.__meta)?S.__meta:{};ae++;const M={version:t,cid:ae,locale:n,fallbackLocale:a,messages:l,modifiers:s,pluralRules:c,missing:i,missingWarn:u,fallbackWarn:m,fallbackFormat:f,unresolving:_,postTranslation:p,processor:g,warnHtmlMessage:d,escapeParameter:b,messageCompiler:v,messageResolver:E,localeFallbacker:N,fallbackContext:I,onWarn:L,__meta:C};return M.datetimeFormats=r,M.numberFormats=o,M.__datetimeFormatters=D,M.__numberFormatters=W,M}function re(e,t,n,a,l){const{missing:r,onWarn:o}=e;if(null!==r){const a=r(e,n,t,l);return O(a)?a:t}return t}function oe(e,t,n){e.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}let se=W;const ce=()=>++se,ie={INVALID_ARGUMENT:se,INVALID_DATE_ARGUMENT:ce(),INVALID_ISO_DATE_ARGUMENT:ce(),__EXTEND_POINT__:ce()};function ue(e){return C(e,null,void 0)}const me=()=>"",fe=e=>T(e);function _e(e,...t){const{fallbackFormat:n,postTranslation:a,unresolving:l,messageCompiler:r,fallbackLocale:o,messages:s}=e,[c,i]=de(...t),u=F(i.missingWarn)?i.missingWarn:e.missingWarn,m=F(i.fallbackWarn)?i.fallbackWarn:e.fallbackWarn,f=F(i.escapeParameter)?i.escapeParameter:e.escapeParameter,_=!!i.resolvedMessage,p=O(i.default)||F(i.default)?F(i.default)?r?c:()=>c:i.default:n?r?c:()=>c:"",g=n||""!==p,d=O(i.locale)?i.locale:e.locale;f&&function(e){R(e.list)?e.list=e.list.map((e=>O(e)?N(e):e)):w(e.named)&&Object.keys(e.named).forEach((t=>{O(e.named[t])&&(e.named[t]=N(e.named[t]))}))}(i);let[b,y,E]=_?[c,d,s[d]||{}]:pe(e,c,d,o,m,u),h=b,k=c;if(_||O(h)||fe(h)||g&&(h=p,k=h),!(_||(O(h)||fe(h))&&O(y)))return l?-1:c;let I=!1;const L=fe(h)?h:ge(e,c,y,h,k,(()=>{I=!0}));if(I)return h;const T=function(e,t,n,a){const{modifiers:l,pluralRules:r,messageResolver:o,fallbackLocale:s,fallbackWarn:c,missingWarn:i,fallbackContext:u}=e,m=a=>{let l=o(n,a);if(null==l&&u){const[,,e]=pe(u,a,t,s,c,i);l=o(e,a)}if(O(l)){let n=!1;const r=ge(e,a,t,l,a,(()=>{n=!0}));return n?me:r}return fe(l)?l:me},f={locale:t,modifiers:l,pluralRules:r,messages:m};e.processor&&(f.processor=e.processor);a.list&&(f.list=a.list);a.named&&(f.named=a.named);v(a.plural)&&(f.pluralIndex=a.plural);return f}(e,y,E,i),S=function(e,t,n){return t(n)}(0,L,Y(T));return a?a(S,c):S}function pe(e,t,n,a,l,r){const{messages:o,onWarn:s,messageResolver:c,localeFallbacker:i}=e,u=i(e,a,n);let m,f={},_=null;for(let p=0;p<u.length&&(m=u[p],f=o[m]||{},null===(_=c(f,t))&&(_=f[t]),!O(_)&&!T(_));p++){const n=re(e,t,m,0,"translate");n!==t&&(_=n)}return[_,m,f]}function ge(e,t,n,a,l,r){const{messageCompiler:o,warnHtmlMessage:s}=e;if(fe(a)){const e=a;return e.locale=e.locale||n,e.key=e.key||t,e}if(null==o){const e=()=>a;return e.locale=n,e.key=t,e}const c=o(a,function(e,t,n,a,l,r){return{warnHtmlMessage:l,onError:e=>{throw r&&r(e),e},onCacheKey:e=>((e,t,n)=>b({l:e,k:t,s:n}))(t,n,e)}}(0,n,l,0,s,r));return c.locale=n,c.key=t,c.source=a,c}function de(...e){const[t,n,a]=e,l={};if(!O(t)&&!v(t)&&!fe(t))throw ue(ie.INVALID_ARGUMENT);const r=v(t)?String(t):(fe(t),t);return v(n)?l.plural=n:O(n)?l.default=n:A(n)&&!E(n)?l.named=n:R(n)&&(l.list=n),v(a)?l.plural=a:O(a)?l.default=a:A(a)&&k(l,a),[r,l]}function be(e,...t){const{datetimeFormats:n,unresolving:a,fallbackLocale:l,onWarn:r,localeFallbacker:o}=e,{__datetimeFormatters:s}=e,[c,i,u,m]=ye(...t);F(u.missingWarn)?u.missingWarn:e.missingWarn;F(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const f=!!u.part,_=O(u.locale)?u.locale:e.locale,p=o(e,l,_);if(!O(c)||""===c)return new Intl.DateTimeFormat(_,m).format(i);let g,d={},b=null;for(let E=0;E<p.length&&(g=p[E],d=n[g]||{},b=d[c],!A(b));E++)re(e,c,g,0,"datetime format");if(!A(b)||!O(g))return a?-1:c;let v=`${g}__${c}`;E(m)||(v=`${v}__${JSON.stringify(m)}`);let y=s.get(v);return y||(y=new Intl.DateTimeFormat(g,k({},b,m)),s.set(v,y)),f?y.formatToParts(i):y.format(i)}const ve=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ye(...e){const[t,n,a,l]=e,r={};let o,s={};if(O(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw ue(ie.INVALID_ISO_DATE_ARGUMENT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();o=new Date(n);try{o.toISOString()}catch(c){throw ue(ie.INVALID_ISO_DATE_ARGUMENT)}}else if("[object Date]"===D(t)){if(isNaN(t.getTime()))throw ue(ie.INVALID_DATE_ARGUMENT);o=t}else{if(!v(t))throw ue(ie.INVALID_ARGUMENT);o=t}return O(n)?r.key=n:A(n)&&Object.keys(n).forEach((e=>{ve.includes(e)?s[e]=n[e]:r[e]=n[e]})),O(a)?r.locale=a:A(a)&&(s=a),A(l)&&(s=l),[r.key||"",o,r,s]}function Ee(e,t,n){const a=e;for(const l in n){const e=`${t}__${l}`;a.__datetimeFormatters.has(e)&&a.__datetimeFormatters.delete(e)}}function he(e,...t){const{numberFormats:n,unresolving:a,fallbackLocale:l,onWarn:r,localeFallbacker:o}=e,{__numberFormatters:s}=e,[c,i,u,m]=Ne(...t);F(u.missingWarn)?u.missingWarn:e.missingWarn;F(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const f=!!u.part,_=O(u.locale)?u.locale:e.locale,p=o(e,l,_);if(!O(c)||""===c)return new Intl.NumberFormat(_,m).format(i);let g,d={},b=null;for(let E=0;E<p.length&&(g=p[E],d=n[g]||{},b=d[c],!A(b));E++)re(e,c,g,0,"number format");if(!A(b)||!O(g))return a?-1:c;let v=`${g}__${c}`;E(m)||(v=`${v}__${JSON.stringify(m)}`);let y=s.get(v);return y||(y=new Intl.NumberFormat(g,k({},b,m)),s.set(v,y)),f?y.formatToParts(i):y.format(i)}const ke=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ne(...e){const[t,n,a,l]=e,r={};let o={};if(!v(t))throw ue(ie.INVALID_ARGUMENT);const s=t;return O(n)?r.key=n:A(n)&&Object.keys(n).forEach((e=>{ke.includes(e)?o[e]=n[e]:r[e]=n[e]})),O(a)?r.locale=a:A(a)&&(o=a),A(l)&&(o=l),[r.key||"",s,r,o]}function Ie(e,t,n){const a=e;for(const l in n){const e=`${t}__${l}`;a.__numberFormatters.has(e)&&a.__numberFormatters.delete(e)}}
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */let Le=W;const Re=()=>++Le,Te={UNEXPECTED_RETURN_TYPE:Le,INVALID_ARGUMENT:Re(),MUST_BE_CALL_SETUP_TOP:Re(),NOT_INSLALLED:Re(),NOT_AVAILABLE_IN_LEGACY_MODE:Re(),REQUIRED_VALUE:Re(),INVALID_VALUE:Re(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Re(),NOT_INSLALLED_WITH_PROVIDE:Re(),UNEXPECTED_ERROR:Re(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Re(),BRIDGE_SUPPORT_VUE_2_ONLY:Re(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Re(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Re(),__EXTEND_POINT__:Re()};function Oe(e,...t){return C(e,null,void 0)}const Fe=d("__transrateVNode"),we=d("__datetimeParts"),Se=d("__numberParts"),De=d("__setPluralRules");d("__intlifyMeta");const Ae=d("__injectWithOption");function We(e){if(!w(e))return e;for(const t in e)if(L(e,t))if(t.includes(".")){const n=t.split("."),a=n.length-1;let l=e;for(let e=0;e<a;e++)n[e]in l||(l[n[e]]={}),l=l[n[e]];l[n[a]]=e[t],delete e[t],w(l[n[a]])&&We(l[n[a]])}else w(e[t])&&We(e[t]);return e}function Ce(e,t){const{messages:n,__i18n:a,messageResolver:l,flatJson:r}=t,o=A(n)?n:R(a)?{}:{[e]:{}};if(R(a)&&a.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:t,resource:n}=e;t?(o[t]=o[t]||{},Pe(n,o[t])):Pe(n,o)}else O(e)&&Pe(JSON.parse(e),o)})),null==l&&r)for(const s in o)L(o,s)&&We(o[s]);return o}const Me=e=>!w(e)||R(e);function Pe(e,t){if(Me(e)||Me(t))throw Oe(Te.INVALID_VALUE);for(const n in e)L(e,n)&&(Me(e[n])||Me(t[n])?t[n]=e[n]:Pe(e[n],t[n]))}function Ue(e){return m(f,null,e,0)}let je=0;function Ve(e){return(t,n,a,l)=>e(n,a,i()||void 0,l)}function $e(e={},t){const{__root:n}=e,a=void 0===n;let l=!F(e.inheritLocale)||e.inheritLocale;const c=r(n&&l?n.locale.value:O(e.locale)?e.locale:K),i=r(n&&l?n.fallbackLocale.value:O(e.fallbackLocale)||R(e.fallbackLocale)||A(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:c.value),u=r(Ce(c.value,e)),m=r(A(e.datetimeFormats)?e.datetimeFormats:{[c.value]:{}}),f=r(A(e.numberFormats)?e.numberFormats:{[c.value]:{}});let _=n?n.missingWarn:!F(e.missingWarn)&&!y(e.missingWarn)||e.missingWarn,g=n?n.fallbackWarn:!F(e.fallbackWarn)&&!y(e.fallbackWarn)||e.fallbackWarn,d=n?n.fallbackRoot:!F(e.fallbackRoot)||e.fallbackRoot,b=!!e.fallbackFormat,E=T(e.missing)?e.missing:null,h=T(e.missing)?Ve(e.missing):null,N=T(e.postTranslation)?e.postTranslation:null,I=n?n.warnHtmlMessage:!F(e.warnHtmlMessage)||e.warnHtmlMessage,L=!!e.escapeParameter;const S=n?n.modifiers:A(e.modifiers)?e.modifiers:{};let D,W=e.pluralRules||n&&n.pluralRules;D=(()=>{const t={version:"9.2.2",locale:c.value,fallbackLocale:i.value,messages:u.value,modifiers:S,pluralRules:W,missing:null===h?void 0:h,missingWarn:_,fallbackWarn:g,fallbackFormat:b,unresolving:!0,postTranslation:null===N?void 0:N,warnHtmlMessage:I,escapeParameter:L,messageResolver:e.messageResolver,__meta:{framework:"vue"}};t.datetimeFormats=m.value,t.numberFormats=f.value,t.__datetimeFormatters=A(D)?D.__datetimeFormatters:void 0,t.__numberFormatters=A(D)?D.__numberFormatters:void 0;return le(t)})(),oe(D,c.value,i.value);const C=o({get:()=>c.value,set:e=>{c.value=e,D.locale=c.value}}),M=o({get:()=>i.value,set:e=>{i.value=e,D.fallbackLocale=i.value,oe(D,c.value,e)}}),P=o((()=>u.value)),U=o((()=>m.value)),j=o((()=>f.value));const V=(e,t,a,l,r,o)=>{let s;if(c.value,i.value,u.value,m.value,f.value,s=e(D),v(s)&&-1===s){const[e,a]=t();return n&&d?l(n):r(e)}if(o(s))return s;throw Oe(Te.UNEXPECTED_RETURN_TYPE)};function $(...e){return V((t=>Reflect.apply(_e,null,[t,...e])),(()=>de(...e)),0,(t=>Reflect.apply(t.t,t,[...e])),(e=>e),(e=>O(e)))}const x={normalize:function(e){return e.map((e=>O(e)||v(e)||F(e)?Ue(String(e)):e))},interpolate:e=>e,type:"vnode"};function G(e){return u.value[e]||{}}je++,n&&p&&(s(n.locale,(e=>{l&&(c.value=e,D.locale=e,oe(D,c.value,i.value))})),s(n.fallbackLocale,(e=>{l&&(i.value=e,D.fallbackLocale=e,oe(D,c.value,i.value))})));const H={id:je,locale:C,fallbackLocale:M,get inheritLocale(){return l},set inheritLocale(e){l=e,e&&n&&(c.value=n.locale.value,i.value=n.fallbackLocale.value,oe(D,c.value,i.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:P,get modifiers(){return S},get pluralRules(){return W||{}},get isGlobal(){return a},get missingWarn(){return _},set missingWarn(e){_=e,D.missingWarn=_},get fallbackWarn(){return g},set fallbackWarn(e){g=e,D.fallbackWarn=g},get fallbackRoot(){return d},set fallbackRoot(e){d=e},get fallbackFormat(){return b},set fallbackFormat(e){b=e,D.fallbackFormat=b},get warnHtmlMessage(){return I},set warnHtmlMessage(e){I=e,D.warnHtmlMessage=e},get escapeParameter(){return L},set escapeParameter(e){L=e,D.escapeParameter=e},t:$,getLocaleMessage:G,setLocaleMessage:function(e,t){u.value[e]=t,D.messages=u.value},mergeLocaleMessage:function(e,t){u.value[e]=u.value[e]||{},Pe(t,u.value[e]),D.messages=u.value},getPostTranslationHandler:function(){return T(N)?N:null},setPostTranslationHandler:function(e){N=e,D.postTranslation=e},getMissingHandler:function(){return E},setMissingHandler:function(e){null!==e&&(h=Ve(e)),E=e,D.missing=h},[De]:function(e){W=e,D.pluralRules=W}};return H.datetimeFormats=U,H.numberFormats=j,H.rt=function(...e){const[t,n,a]=e;if(a&&!w(a))throw Oe(Te.INVALID_ARGUMENT);return $(t,n,k({resolvedMessage:!0},a||{}))},H.te=function(e,t){const n=G(O(t)?t:c.value);return null!==D.messageResolver(n,e)},H.tm=function(e){const t=function(e){let t=null;const n=z(D,i.value,c.value);for(let a=0;a<n.length;a++){const l=u.value[n[a]]||{},r=D.messageResolver(l,e);if(null!=r){t=r;break}}return t}(e);return null!=t?t:n&&n.tm(e)||{}},H.d=function(...e){return V((t=>Reflect.apply(be,null,[t,...e])),(()=>ye(...e)),0,(t=>Reflect.apply(t.d,t,[...e])),(()=>""),(e=>O(e)))},H.n=function(...e){return V((t=>Reflect.apply(he,null,[t,...e])),(()=>Ne(...e)),0,(t=>Reflect.apply(t.n,t,[...e])),(()=>""),(e=>O(e)))},H.getDateTimeFormat=function(e){return m.value[e]||{}},H.setDateTimeFormat=function(e,t){m.value[e]=t,D.datetimeFormats=m.value,Ee(D,e,t)},H.mergeDateTimeFormat=function(e,t){m.value[e]=k(m.value[e]||{},t),D.datetimeFormats=m.value,Ee(D,e,t)},H.getNumberFormat=function(e){return f.value[e]||{}},H.setNumberFormat=function(e,t){f.value[e]=t,D.numberFormats=f.value,Ie(D,e,t)},H.mergeNumberFormat=function(e,t){f.value[e]=k(f.value[e]||{},t),D.numberFormats=f.value,Ie(D,e,t)},H[Ae]=e.__injectWithOption,H[Fe]=function(...e){return V((t=>{let n;const a=t;try{a.processor=x,n=Reflect.apply(_e,null,[a,...e])}finally{a.processor=null}return n}),(()=>de(...e)),0,(t=>t[Fe](...e)),(e=>[Ue(e)]),(e=>R(e)))},H[we]=function(...e){return V((t=>Reflect.apply(be,null,[t,...e])),(()=>ye(...e)),0,(t=>t[we](...e)),(()=>[]),(e=>O(e)||R(e)))},H[Se]=function(...e){return V((t=>Reflect.apply(he,null,[t,...e])),(()=>Ne(...e)),0,(t=>t[Se](...e)),(()=>[]),(e=>O(e)||R(e)))},H}const xe={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}};function Ge(e){return c}const He={name:"i18n-t",props:k({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>v(e)||!isNaN(e)}},xe),setup(t,n){const{slots:a,attrs:l}=n,r=t.i18n||Ke({useScope:t.scope,__useComponent:!0});return()=>{const o=Object.keys(a).filter((e=>"_"!==e)),s={};t.locale&&(s.locale=t.locale),void 0!==t.plural&&(s.plural=O(t.plural)?+t.plural:t.plural);const c=function({slots:e},t){if(1===t.length&&"default"===t[0])return(e.default?e.default():[]).reduce(((e,t)=>[...e,...R(t.children)?t.children:[t]]),[]);return t.reduce(((t,n)=>{const a=e[n];return a&&(t[n]=a()),t}),{})}(n,o),i=r[Fe](t.keypath,c,s),u=k({},l),m=O(t.tag)||w(t.tag)?t.tag:Ge();return e(m,u,i)}}};function Be(t,n,a,l){const{slots:r,attrs:o}=n;return()=>{const n={part:!0};let s={};t.locale&&(n.locale=t.locale),O(t.format)?n.key=t.format:w(t.format)&&(O(t.format.key)&&(n.key=t.format.key),s=Object.keys(t.format).reduce(((e,n)=>a.includes(n)?k({},e,{[n]:t.format[n]}):e),{}));const c=l(t.value,n,s);let i=[n.key];R(c)?i=c.map(((e,t)=>{const n=r[e.type],a=n?n({[e.type]:e.value,index:t,parts:c}):[e.value];var l;return R(l=a)&&!O(l[0])&&(a[0].key=`${e.type}-${t}`),a})):O(c)&&(i=[c]);const u=k({},o),m=O(t.tag)||w(t.tag)?t.tag:Ge();return e(m,u,i)}}const Xe={name:"i18n-n",props:k({value:{type:Number,required:!0},format:{type:[String,Object]}},xe),setup(e,t){const n=e.i18n||Ke({useScope:"parent",__useComponent:!0});return Be(e,t,ke,((...e)=>n[Se](...e)))}},Ye={name:"i18n-d",props:k({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},xe),setup(e,t){const n=e.i18n||Ke({useScope:"parent",__useComponent:!0});return Be(e,t,ve,((...e)=>n[we](...e)))}};function Je(e){if(O(e))return{path:e};if(A(e)){if(!("path"in e))throw Oe(Te.REQUIRED_VALUE);return e}throw Oe(Te.INVALID_VALUE)}function ze(e){const{path:t,locale:n,args:a,choice:l,plural:r}=e,o={},s=a||{};return O(n)&&(o.locale=n),v(l)&&(o.plural=l),v(r)&&(o.plural=r),[t,s,o]}function qe(e,t,...n){const a=A(n[0])?n[0]:{},l=!!a.useI18nComponentName;(!F(a.globalInstall)||a.globalInstall)&&(e.component(l?"i18n":He.name,He),e.component(Xe.name,Xe),e.component(Ye.name,Ye)),e.directive("t",function(e){const t=t=>{const{instance:n,modifiers:a,value:l}=t;if(!n||!n.$)throw Oe(Te.UNEXPECTED_ERROR);const r=function(e,t){const n=e;if("composition"===e.mode)return n.__getInstance(t)||e.global;{const a=n.__getInstance(t);return null!=a?a.__composer:e.global.__composer}}(e,n.$),o=Je(l);return[Reflect.apply(r.t,r,[...ze(o)]),r]};return{created:(n,a)=>{const[l,r]=t(a);p&&e.global===r&&(n.__i18nWatcher=s(r.locale,(()=>{a.instance&&a.instance.$forceUpdate()}))),n.__composer=r,n.textContent=l},unmounted:e=>{p&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},beforeUpdate:(e,{value:t})=>{if(e.__composer){const n=e.__composer,a=Je(t);e.textContent=Reflect.apply(n.t,n,[...ze(a)])}},getSSRProps:e=>{const[n]=t(e);return{textContent:n}}}}(t))}const Ze=d("global-vue-i18n");function Qe(e={},n){const a=!F(e.globalInjection)||e.globalInjection,l=new Map,[r,o]=function(e,n,a){const l=t();{const t=l.run((()=>$e(e)));if(null==t)throw Oe(Te.UNEXPECTED_ERROR);return[l,t]}}(e),s=d("");{const e={get mode(){return"composition"},get allowComposition(){return true},async install(t,...n){t.__VUE_I18N_SYMBOL__=s,t.provide(t.__VUE_I18N_SYMBOL__,e),a&&function(e,t){const n=Object.create(null);et.forEach((e=>{const a=Object.getOwnPropertyDescriptor(t,e);if(!a)throw Oe(Te.UNEXPECTED_ERROR);const l=u(a.value)?{get:()=>a.value.value,set(e){a.value.value=e}}:{get:()=>a.get&&a.get()};Object.defineProperty(n,e,l)})),e.config.globalProperties.$i18n=n,tt.forEach((n=>{const a=Object.getOwnPropertyDescriptor(t,n);if(!a||!a.value)throw Oe(Te.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${n}`,a)}))}(t,e.global),qe(t,e,...n);const l=t.unmount;t.unmount=()=>{e.dispose(),l()}},get global(){return o},dispose(){r.stop()},__instances:l,__getInstance:function(e){return l.get(e)||null},__setInstance:function(e,t){l.set(e,t)},__deleteInstance:function(e){l.delete(e)}};return e}}function Ke(e={}){const t=i();if(null==t)throw Oe(Te.MUST_BE_CALL_SETUP_TOP);if(!t.isCE&&null!=t.appContext.app&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw Oe(Te.NOT_INSLALLED);const r=function(e){{const t=n(e.isCE?Ze:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw Oe(e.isCE?Te.NOT_INSLALLED_WITH_PROVIDE:Te.UNEXPECTED_ERROR);return t}}(t),o=function(e){return"composition"===e.mode?e.global:e.global.__composer}(r),s=function(e){return e.type}(t),c=function(e,t){return E(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}(e,s);if("global"===c)return function(e,t,n){let a=w(t.messages)?t.messages:{};"__i18nGlobal"in n&&(a=Ce(e.locale.value,{messages:a,__i18n:n.__i18nGlobal}));const l=Object.keys(a);if(l.length&&l.forEach((t=>{e.mergeLocaleMessage(t,a[t])})),w(t.datetimeFormats)){const n=Object.keys(t.datetimeFormats);n.length&&n.forEach((n=>{e.mergeDateTimeFormat(n,t.datetimeFormats[n])}))}if(w(t.numberFormats)){const n=Object.keys(t.numberFormats);n.length&&n.forEach((n=>{e.mergeNumberFormat(n,t.numberFormats[n])}))}}(o,e,s),o;if("parent"===c){let n=function(e,t,n=!1){let a=null;const l=t.root;let r=t.parent;for(;null!=r;){const t=e;if("composition"===e.mode&&(a=t.__getInstance(r)),null!=a)break;if(l===r)break;r=r.parent}return a}(r,t,e.__useComponent);return null==n&&(n=o),n}const u=r;let m=u.__getInstance(t);if(null==m){const n=k({},e);"__i18n"in s&&(n.__i18n=s.__i18n),o&&(n.__root=o),m=$e(n),function(e,t,n){a((()=>{}),t),l((()=>{e.__deleteInstance(t)}),t)}(u,t),u.__setInstance(t,m)}return m}const et=["locale","fallbackLocale","availableLocales"],tt=["t","rt","d","n","tm"];te=function(e,t){if(!w(e))return null;let n=V.get(t);if(n||(n=function(e){const t=[];let n,a,l,r,o,s,c,i=-1,u=0,m=0;const f=[];function _(){const t=e[i+1];if(5===u&&"'"===t||6===u&&'"'===t)return i++,l="\\"+t,f[0](),!0}for(f[0]=()=>{void 0===a?a=l:a+=l},f[1]=()=>{void 0!==a&&(t.push(a),a=void 0)},f[2]=()=>{f[0](),m++},f[3]=()=>{if(m>0)m--,u=4,f[0]();else{if(m=0,void 0===a)return!1;if(a=j(a),!1===a)return!1;f[1]()}};null!==u;)if(i++,n=e[i],"\\"!==n||!_()){if(r=U(n),c=M[u],o=c[r]||c.l||8,8===o)return;if(u=o[0],void 0!==o[1]&&(s=f[o[1]],s&&(l=n,!1===s())))return;if(7===u)return t}}(t),n&&V.set(t,n)),!n)return null;const a=n.length;let l=e,r=0;for(;r<a;){const e=l[n[r]];if(void 0===e)return null;l=e,r++}return l},ne=z;var nt={"en-US":{failed:"Action failed",success:"Action was successful"}},at=_((({app:e})=>{const t=Qe({locale:"en-US",legacy:!1,messages:nt});e.use(t)}));export{at as default};
