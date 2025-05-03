const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DefaultLayout-3x47Es9t.js","assets/DefaultLayout-BmIyDzXR.css","assets/Home-Bd9CizRt.js","assets/Home-sh9wB_ue.css","assets/Contact-CsuSy_pK.js","assets/Contact-CqjaYkHb.css","assets/Register-C04tNVKU.js","assets/Register-YyDm9Vl6.css","assets/Profile-BxxkKSrA.js","assets/Profile-Bs4v55Bc.css","assets/AppointmentForm-Dfrb_zGM.js","assets/AppointmentForm-Bh5Xhq8P.css","assets/Admin-DvkAb8Tv.js","assets/Admin-Crejwfo0.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function pf(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function mf(t){if(Ee(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=It(r)?kI(r):mf(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(It(t))return t;if(Je(t))return t}}const OI=/;(?![^(]*\))/g,NI=/:([^]+)/,DI=/\/\*.*?\*\//gs;function kI(t){const e={};return t.replace(DI,"").split(OI).forEach(n=>{if(n){const r=n.split(NI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fl(t){let e="";if(It(t))e=t;else if(Ee(t))for(let n=0;n<t.length;n++){const r=Fl(t[n]);r&&(e+=r+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const LI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",VI=pf(LI);function E_(t){return!!t||t===""}function xI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=$l(t[r],e[r]);return n}function $l(t,e){if(t===e)return!0;let n=Hp(t),r=Hp(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Aa(t),r=Aa(e),n||r)return t===e;if(n=Ee(t),r=Ee(e),n||r)return n&&r?xI(t,e):!1;if(n=Je(t),r=Je(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const l=t.hasOwnProperty(o),u=e.hasOwnProperty(o);if(l&&!u||!l&&u||!$l(t[o],e[o]))return!1}}return String(t)===String(e)}function MI(t,e){return t.findIndex(n=>$l(n,e))}const UI=t=>It(t)?t:t==null?"":Ee(t)||Je(t)&&(t.toString===w_||!be(t.toString))?JSON.stringify(t,v_,2):String(t),v_=(t,e)=>e&&e.__v_isRef?v_(t,e.value):Qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:jl(e)?{[`Set(${e.size})`]:[...e.values()]}:Je(e)&&!Ee(e)&&!A_(e)?String(e):e,nt={},Yi=[],or=()=>{},FI=()=>!1,$I=/^on[^a-z]/,Bl=t=>$I.test(t),gf=t=>t.startsWith("onUpdate:"),mn=Object.assign,_f=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},BI=Object.prototype.hasOwnProperty,Fe=(t,e)=>BI.call(t,e),Ee=Array.isArray,Qi=t=>Ba(t)==="[object Map]",jl=t=>Ba(t)==="[object Set]",Hp=t=>Ba(t)==="[object Date]",be=t=>typeof t=="function",It=t=>typeof t=="string",Aa=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",T_=t=>Je(t)&&be(t.then)&&be(t.catch),w_=Object.prototype.toString,Ba=t=>w_.call(t),jI=t=>Ba(t).slice(8,-1),A_=t=>Ba(t)==="[object Object]",yf=t=>It(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yc=pf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},HI=/-(\w)/g,fr=Hl(t=>t.replace(HI,(e,n)=>n?n.toUpperCase():"")),qI=/\B([A-Z])/g,_o=Hl(t=>t.replace(qI,"-$1").toLowerCase()),ql=Hl(t=>t.charAt(0).toUpperCase()+t.slice(1)),th=Hl(t=>t?`on${ql(t)}`:""),Ia=(t,e)=>!Object.is(t,e),Qc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},dl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ba=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qp;const KI=()=>qp||(qp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tr;class WI{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=tr,!e&&tr&&(this.index=(tr.scopes||(tr.scopes=[])).push(this)-1)}run(e){if(this.active){const n=tr;try{return tr=this,e()}finally{tr=n}}}on(){tr=this}off(){tr=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function zI(t,e=tr){e&&e.active&&e.effects.push(t)}const Ef=t=>{const e=new Set(t);return e.w=0,e.n=0,e},I_=t=>(t.w&_s)>0,b_=t=>(t.n&_s)>0,GI=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_s},YI=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];I_(s)&&!b_(s)?s.delete(t):e[n++]=s,s.w&=~_s,s.n&=~_s}e.length=n}},wh=new WeakMap;let ia=0,_s=1;const Ah=30;let xn;const oi=Symbol(""),Ih=Symbol("");class vf{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,zI(this,r)}run(){if(!this.active)return this.fn();let e=xn,n=hs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xn,xn=this,hs=!0,_s=1<<++ia,ia<=Ah?GI(this):Kp(this),this.fn()}finally{ia<=Ah&&YI(this),_s=1<<--ia,xn=this.parent,hs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xn===this?this.deferStop=!0:this.active&&(Kp(this),this.onStop&&this.onStop(),this.active=!1)}}function Kp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hs=!0;const R_=[];function yo(){R_.push(hs),hs=!1}function Eo(){const t=R_.pop();hs=t===void 0?!0:t}function gn(t,e,n){if(hs&&xn){let r=wh.get(t);r||wh.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ef()),S_(s)}}function S_(t,e){let n=!1;ia<=Ah?b_(t)||(t.n|=_s,n=!I_(t)):n=!t.has(xn),n&&(t.add(xn),xn.deps.push(t))}function Vr(t,e,n,r,s,i){const o=wh.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&Ee(t)){const u=ba(r);o.forEach((d,m)=>{(m==="length"||m>=u)&&l.push(d)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":Ee(t)?yf(n)&&l.push(o.get("length")):(l.push(o.get(oi)),Qi(t)&&l.push(o.get(Ih)));break;case"delete":Ee(t)||(l.push(o.get(oi)),Qi(t)&&l.push(o.get(Ih)));break;case"set":Qi(t)&&l.push(o.get(oi));break}if(l.length===1)l[0]&&bh(l[0]);else{const u=[];for(const d of l)d&&u.push(...d);bh(Ef(u))}}function bh(t,e){const n=Ee(t)?t:[...t];for(const r of n)r.computed&&Wp(r);for(const r of n)r.computed||Wp(r)}function Wp(t,e){(t!==xn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const QI=pf("__proto__,__v_isRef,__isVue"),C_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Aa)),XI=Tf(),JI=Tf(!1,!0),ZI=Tf(!0),zp=eb();function eb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=je(this);for(let i=0,o=this.length;i<o;i++)gn(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(je)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){yo();const r=je(this)[e].apply(this,n);return Eo(),r}}),t}function Tf(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?gb:k_:e?D_:N_).get(r))return r;const o=Ee(r);if(!t&&o&&Fe(zp,s))return Reflect.get(zp,s,i);const l=Reflect.get(r,s,i);return(Aa(s)?C_.has(s):QI(s))||(t||gn(r,"get",s),e)?l:Yt(l)?o&&yf(s)?l:l.value:Je(l)?t?L_(l):ja(l):l}}const tb=P_(),nb=P_(!0);function P_(t=!1){return function(n,r,s,i){let o=n[r];if(ro(o)&&Yt(o)&&!Yt(s))return!1;if(!t&&(!pl(s)&&!ro(s)&&(o=je(o),s=je(s)),!Ee(n)&&Yt(o)&&!Yt(s)))return o.value=s,!0;const l=Ee(n)&&yf(r)?Number(r)<n.length:Fe(n,r),u=Reflect.set(n,r,s,i);return n===je(i)&&(l?Ia(s,o)&&Vr(n,"set",r,s):Vr(n,"add",r,s)),u}}function rb(t,e){const n=Fe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Vr(t,"delete",e,void 0),r}function sb(t,e){const n=Reflect.has(t,e);return(!Aa(e)||!C_.has(e))&&gn(t,"has",e),n}function ib(t){return gn(t,"iterate",Ee(t)?"length":oi),Reflect.ownKeys(t)}const O_={get:XI,set:tb,deleteProperty:rb,has:sb,ownKeys:ib},ob={get:ZI,set(t,e){return!0},deleteProperty(t,e){return!0}},ab=mn({},O_,{get:JI,set:nb}),wf=t=>t,Kl=t=>Reflect.getPrototypeOf(t);function Vc(t,e,n=!1,r=!1){t=t.__v_raw;const s=je(t),i=je(e);n||(e!==i&&gn(s,"get",e),gn(s,"get",i));const{has:o}=Kl(s),l=r?wf:n?bf:Ra;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function xc(t,e=!1){const n=this.__v_raw,r=je(n),s=je(t);return e||(t!==s&&gn(r,"has",t),gn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Mc(t,e=!1){return t=t.__v_raw,!e&&gn(je(t),"iterate",oi),Reflect.get(t,"size",t)}function Gp(t){t=je(t);const e=je(this);return Kl(e).has.call(e,t)||(e.add(t),Vr(e,"add",t,t)),this}function Yp(t,e){e=je(e);const n=je(this),{has:r,get:s}=Kl(n);let i=r.call(n,t);i||(t=je(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ia(e,o)&&Vr(n,"set",t,e):Vr(n,"add",t,e),this}function Qp(t){const e=je(this),{has:n,get:r}=Kl(e);let s=n.call(e,t);s||(t=je(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Vr(e,"delete",t,void 0),i}function Xp(){const t=je(this),e=t.size!==0,n=t.clear();return e&&Vr(t,"clear",void 0,void 0),n}function Uc(t,e){return function(r,s){const i=this,o=i.__v_raw,l=je(o),u=e?wf:t?bf:Ra;return!t&&gn(l,"iterate",oi),o.forEach((d,m)=>r.call(s,u(d),u(m),i))}}function Fc(t,e,n){return function(...r){const s=this.__v_raw,i=je(s),o=Qi(i),l=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,d=s[t](...r),m=n?wf:e?bf:Ra;return!e&&gn(i,"iterate",u?Ih:oi),{next(){const{value:_,done:v}=d.next();return v?{value:_,done:v}:{value:l?[m(_[0]),m(_[1])]:m(_),done:v}},[Symbol.iterator](){return this}}}}function es(t){return function(...e){return t==="delete"?!1:this}}function cb(){const t={get(i){return Vc(this,i)},get size(){return Mc(this)},has:xc,add:Gp,set:Yp,delete:Qp,clear:Xp,forEach:Uc(!1,!1)},e={get(i){return Vc(this,i,!1,!0)},get size(){return Mc(this)},has:xc,add:Gp,set:Yp,delete:Qp,clear:Xp,forEach:Uc(!1,!0)},n={get(i){return Vc(this,i,!0)},get size(){return Mc(this,!0)},has(i){return xc.call(this,i,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:Uc(!0,!1)},r={get(i){return Vc(this,i,!0,!0)},get size(){return Mc(this,!0)},has(i){return xc.call(this,i,!0)},add:es("add"),set:es("set"),delete:es("delete"),clear:es("clear"),forEach:Uc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Fc(i,!1,!1),n[i]=Fc(i,!0,!1),e[i]=Fc(i,!1,!0),r[i]=Fc(i,!0,!0)}),[t,n,e,r]}const[lb,ub,hb,fb]=cb();function Af(t,e){const n=e?t?fb:hb:t?ub:lb;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Fe(n,s)&&s in r?n:r,s,i)}const db={get:Af(!1,!1)},pb={get:Af(!1,!0)},mb={get:Af(!0,!1)},N_=new WeakMap,D_=new WeakMap,k_=new WeakMap,gb=new WeakMap;function _b(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yb(t){return t.__v_skip||!Object.isExtensible(t)?0:_b(jI(t))}function ja(t){return ro(t)?t:If(t,!1,O_,db,N_)}function Eb(t){return If(t,!1,ab,pb,D_)}function L_(t){return If(t,!0,ob,mb,k_)}function If(t,e,n,r,s){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=yb(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Xi(t){return ro(t)?Xi(t.__v_raw):!!(t&&t.__v_isReactive)}function ro(t){return!!(t&&t.__v_isReadonly)}function pl(t){return!!(t&&t.__v_isShallow)}function V_(t){return Xi(t)||ro(t)}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function x_(t){return dl(t,"__v_skip",!0),t}const Ra=t=>Je(t)?ja(t):t,bf=t=>Je(t)?L_(t):t;function M_(t){hs&&xn&&(t=je(t),S_(t.dep||(t.dep=Ef())))}function U_(t,e){t=je(t),t.dep&&bh(t.dep)}function Yt(t){return!!(t&&t.__v_isRef===!0)}function Xc(t){return F_(t,!1)}function vb(t){return F_(t,!0)}function F_(t,e){return Yt(t)?t:new Tb(t,e)}class Tb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:je(e),this._value=n?e:Ra(e)}get value(){return M_(this),this._value}set value(e){const n=this.__v_isShallow||pl(e)||ro(e);e=n?e:je(e),Ia(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ra(e),U_(this))}}function ai(t){return Yt(t)?t.value:t}const wb={get:(t,e,n)=>ai(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Yt(s)&&!Yt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function $_(t){return Xi(t)?t:new Proxy(t,wb)}var B_;class Ab{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[B_]=!1,this._dirty=!0,this.effect=new vf(e,()=>{this._dirty||(this._dirty=!0,U_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=je(this);return M_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}B_="__v_isReadonly";function Ib(t,e,n=!1){let r,s;const i=be(t);return i?(r=t,s=or):(r=t.get,s=t.set),new Ab(r,s,i||!s,n)}function fs(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Wl(i,e,n)}return s}function $n(t,e,n,r){if(be(t)){const i=fs(t,e,n,r);return i&&T_(i)&&i.catch(o=>{Wl(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push($n(t[i],e,n,r));return s}function Wl(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,l=n;for(;i;){const d=i.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](t,o,l)===!1)return}i=i.parent}const u=e.appContext.config.errorHandler;if(u){fs(u,null,10,[t,o,l]);return}}bb(t,n,s,r)}function bb(t,e,n,r=!0){console.error(t)}let Sa=!1,Rh=!1;const Gt=[];let sr=0;const Ji=[];let Pr=null,ei=0;const j_=Promise.resolve();let Rf=null;function H_(t){const e=Rf||j_;return t?e.then(this?t.bind(this):t):e}function Rb(t){let e=sr+1,n=Gt.length;for(;e<n;){const r=e+n>>>1;Ca(Gt[r])<t?e=r+1:n=r}return e}function Sf(t){(!Gt.length||!Gt.includes(t,Sa&&t.allowRecurse?sr+1:sr))&&(t.id==null?Gt.push(t):Gt.splice(Rb(t.id),0,t),q_())}function q_(){!Sa&&!Rh&&(Rh=!0,Rf=j_.then(W_))}function Sb(t){const e=Gt.indexOf(t);e>sr&&Gt.splice(e,1)}function Cb(t){Ee(t)?Ji.push(...t):(!Pr||!Pr.includes(t,t.allowRecurse?ei+1:ei))&&Ji.push(t),q_()}function Jp(t,e=Sa?sr+1:0){for(;e<Gt.length;e++){const n=Gt[e];n&&n.pre&&(Gt.splice(e,1),e--,n())}}function K_(t){if(Ji.length){const e=[...new Set(Ji)];if(Ji.length=0,Pr){Pr.push(...e);return}for(Pr=e,Pr.sort((n,r)=>Ca(n)-Ca(r)),ei=0;ei<Pr.length;ei++)Pr[ei]();Pr=null,ei=0}}const Ca=t=>t.id==null?1/0:t.id,Pb=(t,e)=>{const n=Ca(t)-Ca(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function W_(t){Rh=!1,Sa=!0,Gt.sort(Pb);try{for(sr=0;sr<Gt.length;sr++){const e=Gt[sr];e&&e.active!==!1&&fs(e,null,14)}}finally{sr=0,Gt.length=0,K_(),Sa=!1,Rf=null,(Gt.length||Ji.length)&&W_()}}function Ob(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||nt;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const m=`${o==="modelValue"?"model":o}Modifiers`,{number:_,trim:v}=r[m]||nt;v&&(s=n.map(S=>It(S)?S.trim():S)),_&&(s=n.map(ba))}let l,u=r[l=th(e)]||r[l=th(fr(e))];!u&&i&&(u=r[l=th(_o(e))]),u&&$n(u,t,6,s);const d=r[l+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,$n(d,t,6,s)}}function z_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!be(t)){const u=d=>{const m=z_(d,e,!0);m&&(l=!0,mn(o,m))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!i&&!l?(Je(t)&&r.set(t,null),null):(Ee(i)?i.forEach(u=>o[u]=null):mn(o,i),Je(t)&&r.set(t,o),o)}function zl(t,e){return!t||!Bl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Fe(t,e[0].toLowerCase()+e.slice(1))||Fe(t,_o(e))||Fe(t,e))}let An=null,Gl=null;function ml(t){const e=An;return An=t,Gl=t&&t.type.__scopeId||null,e}function sx(t){Gl=t}function ix(){Gl=null}function Sh(t,e=An,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&cm(-1);const i=ml(e);let o;try{o=t(...s)}finally{ml(i),r._d&&cm(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Zp(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:l,attrs:u,emit:d,render:m,renderCache:_,data:v,setupState:S,ctx:V,inheritAttrs:B}=t;let $,G;const ee=ml(t);try{if(n.shapeFlag&4){const oe=s||r;$=rr(m.call(oe,oe,_,i,S,v,V)),G=u}else{const oe=e;$=rr(oe.length>1?oe(i,{attrs:u,slots:l,emit:d}):oe(i,null)),G=e.props?u:Nb(u)}}catch(oe){pa.length=0,Wl(oe,t,1),$=xt(ui)}let Q=$;if(G&&B!==!1){const oe=Object.keys(G),{shapeFlag:De}=Q;oe.length&&De&7&&(o&&oe.some(gf)&&(G=Db(G,o)),Q=so(Q,G))}return n.dirs&&(Q=so(Q),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&(Q.transition=n.transition),$=Q,ml(ee),$}const Nb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Bl(n))&&((e||(e={}))[n]=t[n]);return e},Db=(t,e)=>{const n={};for(const r in t)(!gf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function kb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:u}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?em(r,o,d):!!o;if(u&8){const m=e.dynamicProps;for(let _=0;_<m.length;_++){const v=m[_];if(o[v]!==r[v]&&!zl(d,v))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?em(r,o,d):!0:!!o;return!1}function em(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!zl(n,i))return!0}return!1}function Lb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Vb=t=>t.__isSuspense;function xb(t,e){e&&e.pendingBranch?Ee(t)?e.effects.push(...t):e.effects.push(t):Cb(t)}function Jc(t,e){if(Lt){let n=Lt.provides;const r=Lt.parent&&Lt.parent.provides;r===n&&(n=Lt.provides=Object.create(r)),n[t]=e}}function ar(t,e,n=!1){const r=Lt||An;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&be(e)?e.call(r.proxy):e}}const $c={};function Zc(t,e,n){return G_(t,e,n)}function G_(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=nt){const l=Lt;let u,d=!1,m=!1;if(Yt(t)?(u=()=>t.value,d=pl(t)):Xi(t)?(u=()=>t,r=!0):Ee(t)?(m=!0,d=t.some(Q=>Xi(Q)||pl(Q)),u=()=>t.map(Q=>{if(Yt(Q))return Q.value;if(Xi(Q))return ri(Q);if(be(Q))return fs(Q,l,2)})):be(t)?e?u=()=>fs(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return _&&_(),$n(t,l,3,[v])}:u=or,e&&r){const Q=u;u=()=>ri(Q())}let _,v=Q=>{_=G.onStop=()=>{fs(Q,l,4)}},S;if(Oa)if(v=or,e?n&&$n(e,l,3,[u(),m?[]:void 0,v]):u(),s==="sync"){const Q=DR();S=Q.__watcherHandles||(Q.__watcherHandles=[])}else return or;let V=m?new Array(t.length).fill($c):$c;const B=()=>{if(G.active)if(e){const Q=G.run();(r||d||(m?Q.some((oe,De)=>Ia(oe,V[De])):Ia(Q,V)))&&(_&&_(),$n(e,l,3,[Q,V===$c?void 0:m&&V[0]===$c?[]:V,v]),V=Q)}else G.run()};B.allowRecurse=!!e;let $;s==="sync"?$=B:s==="post"?$=()=>cn(B,l&&l.suspense):(B.pre=!0,l&&(B.id=l.uid),$=()=>Sf(B));const G=new vf(u,$);e?n?B():V=G.run():s==="post"?cn(G.run.bind(G),l&&l.suspense):G.run();const ee=()=>{G.stop(),l&&l.scope&&_f(l.scope.effects,G)};return S&&S.push(ee),ee}function Mb(t,e,n){const r=this.proxy,s=It(t)?t.includes(".")?Y_(r,t):()=>r[t]:t.bind(r,r);let i;be(e)?i=e:(i=e.handler,n=e);const o=Lt;io(this);const l=G_(s,i.bind(r),n);return o?io(o):ci(),l}function Y_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function ri(t,e){if(!Je(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Yt(t))ri(t.value,e);else if(Ee(t))for(let n=0;n<t.length;n++)ri(t[n],e);else if(jl(t)||Qi(t))t.forEach(n=>{ri(n,e)});else if(A_(t))for(const n in t)ri(t[n],e);return t}function Q_(t){return be(t)?{setup:t,name:t.name}:t}const el=t=>!!t.type.__asyncLoader,X_=t=>t.type.__isKeepAlive;function Ub(t,e){J_(t,"a",e)}function Fb(t,e){J_(t,"da",e)}function J_(t,e,n=Lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Yl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)X_(s.parent.vnode)&&$b(r,e,n,s),s=s.parent}}function $b(t,e,n,r){const s=Yl(e,t,r,!0);ey(()=>{_f(r[e],s)},n)}function Yl(t,e,n=Lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;yo(),io(n);const l=$n(e,n,t,o);return ci(),Eo(),l});return r?s.unshift(i):s.push(i),i}}const Br=t=>(e,n=Lt)=>(!Oa||t==="sp")&&Yl(t,(...r)=>e(...r),n),Bb=Br("bm"),Z_=Br("m"),jb=Br("bu"),Hb=Br("u"),qb=Br("bum"),ey=Br("um"),Kb=Br("sp"),Wb=Br("rtg"),zb=Br("rtc");function Gb(t,e=Lt){Yl("ec",t,e)}function ox(t,e){const n=An;if(n===null)return t;const r=Jl(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,l,u,d=nt]=e[i];o&&(be(o)&&(o={mounted:o,updated:o}),o.deep&&ri(l),s.push({dir:o,instance:r,value:l,oldValue:void 0,arg:u,modifiers:d}))}return t}function Qs(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let u=l.dir[r];u&&(yo(),$n(u,n,8,[t.el,l,t,e]),Eo())}}const Yb="components";function ty(t,e){return Xb(Yb,t,!0,e)||t}const Qb=Symbol();function Xb(t,e,n=!0,r=!1){const s=An||Lt;if(s){const i=s.type;{const l=PR(i,!1);if(l&&(l===e||l===fr(e)||l===ql(fr(e))))return i}const o=tm(s[t]||i[t],e)||tm(s.appContext[t],e);return!o&&r?i:o}}function tm(t,e){return t&&(t[e]||t[fr(e)]||t[ql(fr(e))])}function Jb(t,e,n,r){let s;const i=n;if(Ee(t)||It(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Je(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const d=o[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const Ch=t=>t?dy(t)?Jl(t)||t.proxy:Ch(t.parent):null,da=mn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ch(t.parent),$root:t=>Ch(t.root),$emit:t=>t.emit,$options:t=>ry(t),$forceUpdate:t=>t.f||(t.f=()=>Sf(t.update)),$nextTick:t=>t.n||(t.n=H_.bind(t.proxy)),$watch:t=>Mb.bind(t)}),nh=(t,e)=>t!==nt&&!t.__isScriptSetup&&Fe(t,e),Zb={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:u}=t;let d;if(e[0]!=="$"){const S=o[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(nh(r,e))return o[e]=1,r[e];if(s!==nt&&Fe(s,e))return o[e]=2,s[e];if((d=t.propsOptions[0])&&Fe(d,e))return o[e]=3,i[e];if(n!==nt&&Fe(n,e))return o[e]=4,n[e];Ph&&(o[e]=0)}}const m=da[e];let _,v;if(m)return e==="$attrs"&&gn(t,"get",e),m(t);if((_=l.__cssModules)&&(_=_[e]))return _;if(n!==nt&&Fe(n,e))return o[e]=4,n[e];if(v=u.config.globalProperties,Fe(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return nh(s,e)?(s[e]=n,!0):r!==nt&&Fe(r,e)?(r[e]=n,!0):Fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==nt&&Fe(t,o)||nh(e,o)||(l=i[0])&&Fe(l,o)||Fe(r,o)||Fe(da,o)||Fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Ph=!0;function eR(t){const e=ry(t),n=t.proxy,r=t.ctx;Ph=!1,e.beforeCreate&&nm(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:u,inject:d,created:m,beforeMount:_,mounted:v,beforeUpdate:S,updated:V,activated:B,deactivated:$,beforeDestroy:G,beforeUnmount:ee,destroyed:Q,unmounted:oe,render:De,renderTracked:pe,renderTriggered:C,errorCaptured:T,serverPrefetch:b,expose:P,inheritAttrs:O,components:D,directives:R,filters:ht}=e;if(d&&tR(d,r,null,t.appContext.config.unwrapInjectedRef),o)for(const Me in o){const Ne=o[Me];be(Ne)&&(r[Me]=Ne.bind(n))}if(s){const Me=s.call(n,n);Je(Me)&&(t.data=ja(Me))}if(Ph=!0,i)for(const Me in i){const Ne=i[Me],bt=be(Ne)?Ne.bind(n,n):be(Ne.get)?Ne.get.bind(n,n):or,_n=!be(Ne)&&be(Ne.set)?Ne.set.bind(n):or,Xt=pn({get:bt,set:_n});Object.defineProperty(r,Me,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Ye=>Xt.value=Ye})}if(l)for(const Me in l)ny(l[Me],r,n,Me);if(u){const Me=be(u)?u.call(n):u;Reflect.ownKeys(Me).forEach(Ne=>{Jc(Ne,Me[Ne])})}m&&nm(m,t,"c");function Ze(Me,Ne){Ee(Ne)?Ne.forEach(bt=>Me(bt.bind(n))):Ne&&Me(Ne.bind(n))}if(Ze(Bb,_),Ze(Z_,v),Ze(jb,S),Ze(Hb,V),Ze(Ub,B),Ze(Fb,$),Ze(Gb,T),Ze(zb,pe),Ze(Wb,C),Ze(qb,ee),Ze(ey,oe),Ze(Kb,b),Ee(P))if(P.length){const Me=t.exposed||(t.exposed={});P.forEach(Ne=>{Object.defineProperty(Me,Ne,{get:()=>n[Ne],set:bt=>n[Ne]=bt})})}else t.exposed||(t.exposed={});De&&t.render===or&&(t.render=De),O!=null&&(t.inheritAttrs=O),D&&(t.components=D),R&&(t.directives=R)}function tR(t,e,n=or,r=!1){Ee(t)&&(t=Oh(t));for(const s in t){const i=t[s];let o;Je(i)?"default"in i?o=ar(i.from||s,i.default,!0):o=ar(i.from||s):o=ar(i),Yt(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function nm(t,e,n){$n(Ee(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ny(t,e,n,r){const s=r.includes(".")?Y_(n,r):()=>n[r];if(It(t)){const i=e[t];be(i)&&Zc(s,i)}else if(be(t))Zc(s,t.bind(n));else if(Je(t))if(Ee(t))t.forEach(i=>ny(i,e,n,r));else{const i=be(t.handler)?t.handler.bind(n):e[t.handler];be(i)&&Zc(s,i,t)}}function ry(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let u;return l?u=l:!s.length&&!n&&!r?u=e:(u={},s.length&&s.forEach(d=>gl(u,d,o,!0)),gl(u,e,o)),Je(e)&&i.set(e,u),u}function gl(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&gl(t,i,n,!0),s&&s.forEach(o=>gl(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=nR[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const nR={data:rm,props:Js,emits:Js,methods:Js,computed:Js,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:Js,directives:Js,watch:sR,provide:rm,inject:rR};function rm(t,e){return e?t?function(){return mn(be(t)?t.call(this,this):t,be(e)?e.call(this,this):e)}:e:t}function rR(t,e){return Js(Oh(t),Oh(e))}function Oh(t){if(Ee(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nn(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?mn(mn(Object.create(null),t),e):e}function sR(t,e){if(!t)return e;if(!e)return t;const n=mn(Object.create(null),t);for(const r in e)n[r]=nn(t[r],e[r]);return n}function iR(t,e,n,r=!1){const s={},i={};dl(i,Xl,1),t.propsDefaults=Object.create(null),sy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Eb(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function oR(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=je(s),[u]=t.propsOptions;let d=!1;if((r||o>0)&&!(o&16)){if(o&8){const m=t.vnode.dynamicProps;for(let _=0;_<m.length;_++){let v=m[_];if(zl(t.emitsOptions,v))continue;const S=e[v];if(u)if(Fe(i,v))S!==i[v]&&(i[v]=S,d=!0);else{const V=fr(v);s[V]=Nh(u,l,V,S,t,!1)}else S!==i[v]&&(i[v]=S,d=!0)}}}else{sy(t,e,s,i)&&(d=!0);let m;for(const _ in l)(!e||!Fe(e,_)&&((m=_o(_))===_||!Fe(e,m)))&&(u?n&&(n[_]!==void 0||n[m]!==void 0)&&(s[_]=Nh(u,l,_,void 0,t,!0)):delete s[_]);if(i!==l)for(const _ in i)(!e||!Fe(e,_))&&(delete i[_],d=!0)}d&&Vr(t,"set","$attrs")}function sy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let u in e){if(Yc(u))continue;const d=e[u];let m;s&&Fe(s,m=fr(u))?!i||!i.includes(m)?n[m]=d:(l||(l={}))[m]=d:zl(t.emitsOptions,u)||(!(u in r)||d!==r[u])&&(r[u]=d,o=!0)}if(i){const u=je(n),d=l||nt;for(let m=0;m<i.length;m++){const _=i[m];n[_]=Nh(s,u,_,d[_],t,!Fe(d,_))}}return o}function Nh(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=Fe(o,"default");if(l&&r===void 0){const u=o.default;if(o.type!==Function&&be(u)){const{propsDefaults:d}=s;n in d?r=d[n]:(io(s),r=d[n]=u.call(null,e),ci())}else r=u}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===_o(n))&&(r=!0))}return r}function iy(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let u=!1;if(!be(t)){const m=_=>{u=!0;const[v,S]=iy(_,e,!0);mn(o,v),S&&l.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(m),t.extends&&m(t.extends),t.mixins&&t.mixins.forEach(m)}if(!i&&!u)return Je(t)&&r.set(t,Yi),Yi;if(Ee(i))for(let m=0;m<i.length;m++){const _=fr(i[m]);sm(_)&&(o[_]=nt)}else if(i)for(const m in i){const _=fr(m);if(sm(_)){const v=i[m],S=o[_]=Ee(v)||be(v)?{type:v}:Object.assign({},v);if(S){const V=am(Boolean,S.type),B=am(String,S.type);S[0]=V>-1,S[1]=B<0||V<B,(V>-1||Fe(S,"default"))&&l.push(_)}}}const d=[o,l];return Je(t)&&r.set(t,d),d}function sm(t){return t[0]!=="$"}function im(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function om(t,e){return im(t)===im(e)}function am(t,e){return Ee(e)?e.findIndex(n=>om(n,t)):be(e)&&om(e,t)?0:-1}const oy=t=>t[0]==="_"||t==="$stable",Cf=t=>Ee(t)?t.map(rr):[rr(t)],aR=(t,e,n)=>{if(e._n)return e;const r=Sh((...s)=>Cf(e(...s)),n);return r._c=!1,r},ay=(t,e,n)=>{const r=t._ctx;for(const s in t){if(oy(s))continue;const i=t[s];if(be(i))e[s]=aR(s,i,r);else if(i!=null){const o=Cf(i);e[s]=()=>o}}},cy=(t,e)=>{const n=Cf(e);t.slots.default=()=>n},cR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=je(e),dl(e,"_",n)):ay(e,t.slots={})}else t.slots={},e&&cy(t,e);dl(t.slots,Xl,1)},lR=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=nt;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(mn(s,e),!n&&l===1&&delete s._):(i=!e.$stable,ay(e,s)),o=e}else e&&(cy(t,e),o={default:1});if(i)for(const l in s)!oy(l)&&!(l in o)&&delete s[l]};function ly(){return{app:null,config:{isNativeTag:FI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uR=0;function hR(t,e){return function(r,s=null){be(r)||(r=Object.assign({},r)),s!=null&&!Je(s)&&(s=null);const i=ly(),o=new Set;let l=!1;const u=i.app={_uid:uR++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kR,get config(){return i.config},set config(d){},use(d,...m){return o.has(d)||(d&&be(d.install)?(o.add(d),d.install(u,...m)):be(d)&&(o.add(d),d(u,...m))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,m){return m?(i.components[d]=m,u):i.components[d]},directive(d,m){return m?(i.directives[d]=m,u):i.directives[d]},mount(d,m,_){if(!l){const v=xt(r,s);return v.appContext=i,t(v,d,_),l=!0,u._container=d,d.__vue_app__=u,Jl(v.component)||v.component.proxy}},unmount(){l&&(t(null,u._container),delete u._container.__vue_app__)},provide(d,m){return i.provides[d]=m,u}};return u}}function Dh(t,e,n,r,s=!1){if(Ee(t)){t.forEach((v,S)=>Dh(v,e&&(Ee(e)?e[S]:e),n,r,s));return}if(el(r)&&!s)return;const i=r.shapeFlag&4?Jl(r.component)||r.component.proxy:r.el,o=s?null:i,{i:l,r:u}=t,d=e&&e.r,m=l.refs===nt?l.refs={}:l.refs,_=l.setupState;if(d!=null&&d!==u&&(It(d)?(m[d]=null,Fe(_,d)&&(_[d]=null)):Yt(d)&&(d.value=null)),be(u))fs(u,l,12,[o,m]);else{const v=It(u),S=Yt(u);if(v||S){const V=()=>{if(t.f){const B=v?Fe(_,u)?_[u]:m[u]:u.value;s?Ee(B)&&_f(B,i):Ee(B)?B.includes(i)||B.push(i):v?(m[u]=[i],Fe(_,u)&&(_[u]=m[u])):(u.value=[i],t.k&&(m[t.k]=u.value))}else v?(m[u]=o,Fe(_,u)&&(_[u]=o)):S&&(u.value=o,t.k&&(m[t.k]=o))};o?(V.id=-1,cn(V,n)):V()}}}const cn=xb;function fR(t){return dR(t)}function dR(t,e){const n=KI();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:u,setText:d,setElementText:m,parentNode:_,nextSibling:v,setScopeId:S=or,insertStaticContent:V}=t,B=(w,I,x,K=null,F=null,Z=null,j=!1,J=null,re=!!I.dynamicChildren)=>{if(w===I)return;w&&!na(w,I)&&(K=se(w),Ye(w,F,Z,!0),w=null),I.patchFlag===-2&&(re=!1,I.dynamicChildren=null);const{type:Y,ref:he,shapeFlag:le}=I;switch(Y){case Ql:$(w,I,x,K);break;case ui:G(w,I,x,K);break;case rh:w==null&&ee(I,x,K,j);break;case Vn:D(w,I,x,K,F,Z,j,J,re);break;default:le&1?De(w,I,x,K,F,Z,j,J,re):le&6?R(w,I,x,K,F,Z,j,J,re):(le&64||le&128)&&Y.process(w,I,x,K,F,Z,j,J,re,Ce)}he!=null&&F&&Dh(he,w&&w.ref,Z,I||w,!I)},$=(w,I,x,K)=>{if(w==null)r(I.el=l(I.children),x,K);else{const F=I.el=w.el;I.children!==w.children&&d(F,I.children)}},G=(w,I,x,K)=>{w==null?r(I.el=u(I.children||""),x,K):I.el=w.el},ee=(w,I,x,K)=>{[w.el,w.anchor]=V(w.children,I,x,K,w.el,w.anchor)},Q=({el:w,anchor:I},x,K)=>{let F;for(;w&&w!==I;)F=v(w),r(w,x,K),w=F;r(I,x,K)},oe=({el:w,anchor:I})=>{let x;for(;w&&w!==I;)x=v(w),s(w),w=x;s(I)},De=(w,I,x,K,F,Z,j,J,re)=>{j=j||I.type==="svg",w==null?pe(I,x,K,F,Z,j,J,re):b(w,I,F,Z,j,J,re)},pe=(w,I,x,K,F,Z,j,J)=>{let re,Y;const{type:he,props:le,shapeFlag:fe,transition:me,dirs:Ie}=w;if(re=w.el=o(w.type,Z,le&&le.is,le),fe&8?m(re,w.children):fe&16&&T(w.children,re,null,K,F,Z&&he!=="foreignObject",j,J),Ie&&Qs(w,null,K,"created"),le){for(const ve in le)ve!=="value"&&!Yc(ve)&&i(re,ve,null,le[ve],Z,w.children,K,F,ie);"value"in le&&i(re,"value",null,le.value),(Y=le.onVnodeBeforeMount)&&Zn(Y,K,w)}C(re,w,w.scopeId,j,K),Ie&&Qs(w,null,K,"beforeMount");const ge=(!F||F&&!F.pendingBranch)&&me&&!me.persisted;ge&&me.beforeEnter(re),r(re,I,x),((Y=le&&le.onVnodeMounted)||ge||Ie)&&cn(()=>{Y&&Zn(Y,K,w),ge&&me.enter(re),Ie&&Qs(w,null,K,"mounted")},F)},C=(w,I,x,K,F)=>{if(x&&S(w,x),K)for(let Z=0;Z<K.length;Z++)S(w,K[Z]);if(F){let Z=F.subTree;if(I===Z){const j=F.vnode;C(w,j,j.scopeId,j.slotScopeIds,F.parent)}}},T=(w,I,x,K,F,Z,j,J,re=0)=>{for(let Y=re;Y<w.length;Y++){const he=w[Y]=J?rs(w[Y]):rr(w[Y]);B(null,he,I,x,K,F,Z,j,J)}},b=(w,I,x,K,F,Z,j)=>{const J=I.el=w.el;let{patchFlag:re,dynamicChildren:Y,dirs:he}=I;re|=w.patchFlag&16;const le=w.props||nt,fe=I.props||nt;let me;x&&Xs(x,!1),(me=fe.onVnodeBeforeUpdate)&&Zn(me,x,I,w),he&&Qs(I,w,x,"beforeUpdate"),x&&Xs(x,!0);const Ie=F&&I.type!=="foreignObject";if(Y?P(w.dynamicChildren,Y,J,x,K,Ie,Z):j||Ne(w,I,J,null,x,K,Ie,Z,!1),re>0){if(re&16)O(J,I,le,fe,x,K,F);else if(re&2&&le.class!==fe.class&&i(J,"class",null,fe.class,F),re&4&&i(J,"style",le.style,fe.style,F),re&8){const ge=I.dynamicProps;for(let ve=0;ve<ge.length;ve++){const st=ge[ve],Ut=le[st],bn=fe[st];(bn!==Ut||st==="value")&&i(J,st,Ut,bn,F,w.children,x,K,ie)}}re&1&&w.children!==I.children&&m(J,I.children)}else!j&&Y==null&&O(J,I,le,fe,x,K,F);((me=fe.onVnodeUpdated)||he)&&cn(()=>{me&&Zn(me,x,I,w),he&&Qs(I,w,x,"updated")},K)},P=(w,I,x,K,F,Z,j)=>{for(let J=0;J<I.length;J++){const re=w[J],Y=I[J],he=re.el&&(re.type===Vn||!na(re,Y)||re.shapeFlag&70)?_(re.el):x;B(re,Y,he,null,K,F,Z,j,!0)}},O=(w,I,x,K,F,Z,j)=>{if(x!==K){if(x!==nt)for(const J in x)!Yc(J)&&!(J in K)&&i(w,J,x[J],null,j,I.children,F,Z,ie);for(const J in K){if(Yc(J))continue;const re=K[J],Y=x[J];re!==Y&&J!=="value"&&i(w,J,Y,re,j,I.children,F,Z,ie)}"value"in K&&i(w,"value",x.value,K.value)}},D=(w,I,x,K,F,Z,j,J,re)=>{const Y=I.el=w?w.el:l(""),he=I.anchor=w?w.anchor:l("");let{patchFlag:le,dynamicChildren:fe,slotScopeIds:me}=I;me&&(J=J?J.concat(me):me),w==null?(r(Y,x,K),r(he,x,K),T(I.children,x,he,F,Z,j,J,re)):le>0&&le&64&&fe&&w.dynamicChildren?(P(w.dynamicChildren,fe,x,F,Z,j,J),(I.key!=null||F&&I===F.subTree)&&uy(w,I,!0)):Ne(w,I,x,he,F,Z,j,J,re)},R=(w,I,x,K,F,Z,j,J,re)=>{I.slotScopeIds=J,w==null?I.shapeFlag&512?F.ctx.activate(I,x,K,j,re):ht(I,x,K,F,Z,j,re):sn(w,I,re)},ht=(w,I,x,K,F,Z,j)=>{const J=w.component=IR(w,K,F);if(X_(w)&&(J.ctx.renderer=Ce),bR(J),J.asyncDep){if(F&&F.registerDep(J,Ze),!w.el){const re=J.subTree=xt(ui);G(null,re,I,x)}return}Ze(J,w,I,x,F,Z,j)},sn=(w,I,x)=>{const K=I.component=w.component;if(kb(w,I,x))if(K.asyncDep&&!K.asyncResolved){Me(K,I,x);return}else K.next=I,Sb(K.update),K.update();else I.el=w.el,K.vnode=I},Ze=(w,I,x,K,F,Z,j)=>{const J=()=>{if(w.isMounted){let{next:he,bu:le,u:fe,parent:me,vnode:Ie}=w,ge=he,ve;Xs(w,!1),he?(he.el=Ie.el,Me(w,he,j)):he=Ie,le&&Qc(le),(ve=he.props&&he.props.onVnodeBeforeUpdate)&&Zn(ve,me,he,Ie),Xs(w,!0);const st=Zp(w),Ut=w.subTree;w.subTree=st,B(Ut,st,_(Ut.el),se(Ut),w,F,Z),he.el=st.el,ge===null&&Lb(w,st.el),fe&&cn(fe,F),(ve=he.props&&he.props.onVnodeUpdated)&&cn(()=>Zn(ve,me,he,Ie),F)}else{let he;const{el:le,props:fe}=I,{bm:me,m:Ie,parent:ge}=w,ve=el(I);Xs(w,!1),me&&Qc(me),!ve&&(he=fe&&fe.onVnodeBeforeMount)&&Zn(he,ge,I),Xs(w,!0);{const st=w.subTree=Zp(w);B(null,st,x,K,w,F,Z),I.el=st.el}if(Ie&&cn(Ie,F),!ve&&(he=fe&&fe.onVnodeMounted)){const st=I;cn(()=>Zn(he,ge,st),F)}(I.shapeFlag&256||ge&&el(ge.vnode)&&ge.vnode.shapeFlag&256)&&w.a&&cn(w.a,F),w.isMounted=!0,I=x=K=null}},re=w.effect=new vf(J,()=>Sf(Y),w.scope),Y=w.update=()=>re.run();Y.id=w.uid,Xs(w,!0),Y()},Me=(w,I,x)=>{I.component=w;const K=w.vnode.props;w.vnode=I,w.next=null,oR(w,I.props,K,x),lR(w,I.children,x),yo(),Jp(),Eo()},Ne=(w,I,x,K,F,Z,j,J,re=!1)=>{const Y=w&&w.children,he=w?w.shapeFlag:0,le=I.children,{patchFlag:fe,shapeFlag:me}=I;if(fe>0){if(fe&128){_n(Y,le,x,K,F,Z,j,J,re);return}else if(fe&256){bt(Y,le,x,K,F,Z,j,J,re);return}}me&8?(he&16&&ie(Y,F,Z),le!==Y&&m(x,le)):he&16?me&16?_n(Y,le,x,K,F,Z,j,J,re):ie(Y,F,Z,!0):(he&8&&m(x,""),me&16&&T(le,x,K,F,Z,j,J,re))},bt=(w,I,x,K,F,Z,j,J,re)=>{w=w||Yi,I=I||Yi;const Y=w.length,he=I.length,le=Math.min(Y,he);let fe;for(fe=0;fe<le;fe++){const me=I[fe]=re?rs(I[fe]):rr(I[fe]);B(w[fe],me,x,null,F,Z,j,J,re)}Y>he?ie(w,F,Z,!0,!1,le):T(I,x,K,F,Z,j,J,re,le)},_n=(w,I,x,K,F,Z,j,J,re)=>{let Y=0;const he=I.length;let le=w.length-1,fe=he-1;for(;Y<=le&&Y<=fe;){const me=w[Y],Ie=I[Y]=re?rs(I[Y]):rr(I[Y]);if(na(me,Ie))B(me,Ie,x,null,F,Z,j,J,re);else break;Y++}for(;Y<=le&&Y<=fe;){const me=w[le],Ie=I[fe]=re?rs(I[fe]):rr(I[fe]);if(na(me,Ie))B(me,Ie,x,null,F,Z,j,J,re);else break;le--,fe--}if(Y>le){if(Y<=fe){const me=fe+1,Ie=me<he?I[me].el:K;for(;Y<=fe;)B(null,I[Y]=re?rs(I[Y]):rr(I[Y]),x,Ie,F,Z,j,J,re),Y++}}else if(Y>fe)for(;Y<=le;)Ye(w[Y],F,Z,!0),Y++;else{const me=Y,Ie=Y,ge=new Map;for(Y=Ie;Y<=fe;Y++){const ot=I[Y]=re?rs(I[Y]):rr(I[Y]);ot.key!=null&&ge.set(ot.key,Y)}let ve,st=0;const Ut=fe-Ie+1;let bn=!1,Ai=0;const on=new Array(Ut);for(Y=0;Y<Ut;Y++)on[Y]=0;for(Y=me;Y<=le;Y++){const ot=w[Y];if(st>=Ut){Ye(ot,F,Z,!0);continue}let Ft;if(ot.key!=null)Ft=ge.get(ot.key);else for(ve=Ie;ve<=fe;ve++)if(on[ve-Ie]===0&&na(ot,I[ve])){Ft=ve;break}Ft===void 0?Ye(ot,F,Z,!0):(on[Ft-Ie]=Y+1,Ft>=Ai?Ai=Ft:bn=!0,B(ot,I[Ft],x,null,F,Z,j,J,re),st++)}const Ss=bn?pR(on):Yi;for(ve=Ss.length-1,Y=Ut-1;Y>=0;Y--){const ot=Ie+Y,Ft=I[ot],Rn=ot+1<he?I[ot+1].el:K;on[Y]===0?B(null,Ft,x,Rn,F,Z,j,J,re):bn&&(ve<0||Y!==Ss[ve]?Xt(Ft,x,Rn,2):ve--)}}},Xt=(w,I,x,K,F=null)=>{const{el:Z,type:j,transition:J,children:re,shapeFlag:Y}=w;if(Y&6){Xt(w.component.subTree,I,x,K);return}if(Y&128){w.suspense.move(I,x,K);return}if(Y&64){j.move(w,I,x,Ce);return}if(j===Vn){r(Z,I,x);for(let le=0;le<re.length;le++)Xt(re[le],I,x,K);r(w.anchor,I,x);return}if(j===rh){Q(w,I,x);return}if(K!==2&&Y&1&&J)if(K===0)J.beforeEnter(Z),r(Z,I,x),cn(()=>J.enter(Z),F);else{const{leave:le,delayLeave:fe,afterLeave:me}=J,Ie=()=>r(Z,I,x),ge=()=>{le(Z,()=>{Ie(),me&&me()})};fe?fe(Z,Ie,ge):ge()}else r(Z,I,x)},Ye=(w,I,x,K=!1,F=!1)=>{const{type:Z,props:j,ref:J,children:re,dynamicChildren:Y,shapeFlag:he,patchFlag:le,dirs:fe}=w;if(J!=null&&Dh(J,null,x,w,!0),he&256){I.ctx.deactivate(w);return}const me=he&1&&fe,Ie=!el(w);let ge;if(Ie&&(ge=j&&j.onVnodeBeforeUnmount)&&Zn(ge,I,w),he&6)q(w.component,x,K);else{if(he&128){w.suspense.unmount(x,K);return}me&&Qs(w,null,I,"beforeUnmount"),he&64?w.type.remove(w,I,x,F,Ce,K):Y&&(Z!==Vn||le>0&&le&64)?ie(Y,I,x,!1,!0):(Z===Vn&&le&384||!F&&he&16)&&ie(re,I,x),K&&Qe(w)}(Ie&&(ge=j&&j.onVnodeUnmounted)||me)&&cn(()=>{ge&&Zn(ge,I,w),me&&Qs(w,null,I,"unmounted")},x)},Qe=w=>{const{type:I,el:x,anchor:K,transition:F}=w;if(I===Vn){mr(x,K);return}if(I===rh){oe(w);return}const Z=()=>{s(x),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(w.shapeFlag&1&&F&&!F.persisted){const{leave:j,delayLeave:J}=F,re=()=>j(x,Z);J?J(w.el,Z,re):re()}else Z()},mr=(w,I)=>{let x;for(;w!==I;)x=v(w),s(w),w=x;s(I)},q=(w,I,x)=>{const{bum:K,scope:F,update:Z,subTree:j,um:J}=w;K&&Qc(K),F.stop(),Z&&(Z.active=!1,Ye(j,w,I,x)),J&&cn(J,I),cn(()=>{w.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},ie=(w,I,x,K=!1,F=!1,Z=0)=>{for(let j=Z;j<w.length;j++)Ye(w[j],I,x,K,F)},se=w=>w.shapeFlag&6?se(w.component.subTree):w.shapeFlag&128?w.suspense.next():v(w.anchor||w.el),L=(w,I,x)=>{w==null?I._vnode&&Ye(I._vnode,null,null,!0):B(I._vnode||null,w,I,null,null,null,x),Jp(),K_(),I._vnode=w},Ce={p:B,um:Ye,m:Xt,r:Qe,mt:ht,mc:T,pc:Ne,pbc:P,n:se,o:t};return{render:L,hydrate:void 0,createApp:hR(L)}}function Xs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function uy(t,e,n=!1){const r=t.children,s=e.children;if(Ee(r)&&Ee(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=rs(s[i]),l.el=o.el),n||uy(o,l)),l.type===Ql&&(l.el=o.el)}}function pR(t){const e=t.slice(),n=[0];let r,s,i,o,l;const u=t.length;for(r=0;r<u;r++){const d=t[r];if(d!==0){if(s=n[n.length-1],t[s]<d){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<d?i=l+1:o=l;d<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const mR=t=>t.__isTeleport,Vn=Symbol(void 0),Ql=Symbol(void 0),ui=Symbol(void 0),rh=Symbol(void 0),pa=[];let Mn=null;function Gi(t=!1){pa.push(Mn=t?null:[])}function gR(){pa.pop(),Mn=pa[pa.length-1]||null}let Pa=1;function cm(t){Pa+=t}function hy(t){return t.dynamicChildren=Pa>0?Mn||Yi:null,gR(),Pa>0&&Mn&&Mn.push(t),t}function oa(t,e,n,r,s,i){return hy(Or(t,e,n,r,s,i,!0))}function _R(t,e,n,r,s){return hy(xt(t,e,n,r,s,!0))}function kh(t){return t?t.__v_isVNode===!0:!1}function na(t,e){return t.type===e.type&&t.key===e.key}const Xl="__vInternal",fy=({key:t})=>t??null,tl=({ref:t,ref_key:e,ref_for:n})=>t!=null?It(t)||Yt(t)||be(t)?{i:An,r:t,k:e,f:!!n}:t:null;function Or(t,e=null,n=null,r=0,s=null,i=t===Vn?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&fy(e),ref:e&&tl(e),scopeId:Gl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:An};return l?(Pf(u,n),i&128&&t.normalize(u)):n&&(u.shapeFlag|=It(n)?8:16),Pa>0&&!o&&Mn&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Mn.push(u),u}const xt=yR;function yR(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Qb)&&(t=ui),kh(t)){const l=so(t,e,!0);return n&&Pf(l,n),Pa>0&&!i&&Mn&&(l.shapeFlag&6?Mn[Mn.indexOf(t)]=l:Mn.push(l)),l.patchFlag|=-2,l}if(OR(t)&&(t=t.__vccOpts),e){e=ER(e);let{class:l,style:u}=e;l&&!It(l)&&(e.class=Fl(l)),Je(u)&&(V_(u)&&!Ee(u)&&(u=mn({},u)),e.style=mf(u))}const o=It(t)?1:Vb(t)?128:mR(t)?64:Je(t)?4:be(t)?2:0;return Or(t,e,n,r,s,o,i,!0)}function ER(t){return t?V_(t)||Xl in t?mn({},t):t:null}function so(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,l=e?TR(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&fy(l),ref:e&&e.ref?n&&s?Ee(s)?s.concat(tl(e)):[s,tl(e)]:tl(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vn?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&so(t.ssContent),ssFallback:t.ssFallback&&so(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Lh(t=" ",e=0){return xt(Ql,null,t,e)}function vR(t="",e=!1){return e?(Gi(),_R(ui,null,t)):xt(ui,null,t)}function rr(t){return t==null||typeof t=="boolean"?xt(ui):Ee(t)?xt(Vn,null,t.slice()):typeof t=="object"?rs(t):xt(Ql,null,String(t))}function rs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:so(t)}function Pf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Ee(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Pf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Xl in e)?e._ctx=An:s===3&&An&&(An.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else be(e)?(e={default:e,_ctx:An},n=32):(e=String(e),r&64?(n=16,e=[Lh(e)]):n=8);t.children=e,t.shapeFlag|=n}function TR(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Fl([e.class,r.class]));else if(s==="style")e.style=mf([e.style,r.style]);else if(Bl(s)){const i=e[s],o=r[s];o&&i!==o&&!(Ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Zn(t,e,n,r=null){$n(t,e,7,[n,r])}const wR=ly();let AR=0;function IR(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wR,i={uid:AR++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new WI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:iy(r,s),emitsOptions:z_(r,s),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:r.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ob.bind(null,i),t.ce&&t.ce(i),i}let Lt=null;const io=t=>{Lt=t,t.scope.on()},ci=()=>{Lt&&Lt.scope.off(),Lt=null};function dy(t){return t.vnode.shapeFlag&4}let Oa=!1;function bR(t,e=!1){Oa=e;const{props:n,children:r}=t.vnode,s=dy(t);iR(t,n,s,e),cR(t,r);const i=s?RR(t,e):void 0;return Oa=!1,i}function RR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=x_(new Proxy(t.ctx,Zb));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?CR(t):null;io(t),yo();const i=fs(r,t,0,[t.props,s]);if(Eo(),ci(),T_(i)){if(i.then(ci,ci),e)return i.then(o=>{lm(t,o)}).catch(o=>{Wl(o,t,0)});t.asyncDep=i}else lm(t,i)}else py(t)}function lm(t,e,n){be(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=$_(e)),py(t)}function py(t,e,n){const r=t.type;t.render||(t.render=r.render||or),io(t),yo(),eR(t),Eo(),ci()}function SR(t){return new Proxy(t.attrs,{get(e,n){return gn(t,"get","$attrs"),e[n]}})}function CR(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=SR(t))},slots:t.slots,emit:t.emit,expose:e}}function Jl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy($_(x_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in da)return da[n](t)},has(e,n){return n in e||n in da}}))}function PR(t,e=!0){return be(t)?t.displayName||t.name:t.name||e&&t.__name}function OR(t){return be(t)&&"__vccOpts"in t}const pn=(t,e)=>Ib(t,e,Oa);function my(t,e,n){const r=arguments.length;return r===2?Je(e)&&!Ee(e)?kh(e)?xt(t,null,[e]):xt(t,e):xt(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kh(n)&&(n=[n]),xt(t,e,n))}const NR=Symbol(""),DR=()=>ar(NR),kR="3.2.45",LR="http://www.w3.org/2000/svg",ti=typeof document<"u"?document:null,um=ti&&ti.createElement("template"),VR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?ti.createElementNS(LR,t):ti.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ti.createTextNode(t),createComment:t=>ti.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ti.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{um.innerHTML=r?`<svg>${t}</svg>`:t;const l=um.content;if(r){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xR(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function MR(t,e,n){const r=t.style,s=It(n);if(n&&!s){for(const i in n)Vh(r,i,n[i]);if(e&&!It(e))for(const i in e)n[i]==null&&Vh(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const hm=/\s*!important$/;function Vh(t,e,n){if(Ee(n))n.forEach(r=>Vh(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=UR(t,e);hm.test(n)?t.setProperty(_o(r),n.replace(hm,""),"important"):t[r]=n}}const fm=["Webkit","Moz","ms"],sh={};function UR(t,e){const n=sh[e];if(n)return n;let r=fr(e);if(r!=="filter"&&r in t)return sh[e]=r;r=ql(r);for(let s=0;s<fm.length;s++){const i=fm[s]+r;if(i in t)return sh[e]=i}return e}const dm="http://www.w3.org/1999/xlink";function FR(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dm,e.slice(6,e.length)):t.setAttributeNS(dm,e,n);else{const i=VI(e);n==null||i&&!E_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function $R(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const u=n??"";(t.value!==u||t.tagName==="OPTION")&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=E_(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function ni(t,e,n,r){t.addEventListener(e,n,r)}function BR(t,e,n,r){t.removeEventListener(e,n,r)}function jR(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[l,u]=HR(e);if(r){const d=i[e]=WR(r,s);ni(t,l,d,u)}else o&&(BR(t,l,o,u),i[e]=void 0)}}const pm=/(?:Once|Passive|Capture)$/;function HR(t){let e;if(pm.test(t)){e={};let r;for(;r=t.match(pm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_o(t.slice(2)),e]}let ih=0;const qR=Promise.resolve(),KR=()=>ih||(qR.then(()=>ih=0),ih=Date.now());function WR(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$n(zR(r,n.value),e,5,[r])};return n.value=t,n.attached=KR(),n}function zR(t,e){if(Ee(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mm=/^on[a-z]/,GR=(t,e,n,r,s=!1,i,o,l,u)=>{e==="class"?xR(t,r,s):e==="style"?MR(t,n,r):Bl(e)?gf(e)||jR(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):YR(t,e,r,s))?$R(t,e,r,i,o,l,u):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),FR(t,e,r,s))};function YR(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&mm.test(e)&&be(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mm.test(e)&&It(n)?!1:e in t}const _l=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ee(e)?n=>Qc(e,n):e};function QR(t){t.target.composing=!0}function gm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ax={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=_l(s);const i=r||s.props&&s.props.type==="number";ni(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=ba(l)),t._assign(l)}),n&&ni(t,"change",()=>{t.value=t.value.trim()}),e||(ni(t,"compositionstart",QR),ni(t,"compositionend",gm),ni(t,"change",gm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=_l(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&ba(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},cx={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=jl(e);ni(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ba(yl(o)):yl(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=_l(r)},mounted(t,{value:e}){_m(t,e)},beforeUpdate(t,e,n){t._assign=_l(n)},updated(t,{value:e}){_m(t,e)}};function _m(t,e){const n=t.multiple;if(!(n&&!Ee(e)&&!jl(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=yl(i);if(n)Ee(e)?i.selected=MI(e,o)>-1:i.selected=e.has(o);else if($l(yl(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function yl(t){return"_value"in t?t._value:t.value}const XR=["ctrl","shift","alt","meta"],JR={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>XR.some(n=>t[`${n}Key`]&&!e.includes(n))},lx=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=JR[e[s]];if(i&&i(n,e))return}return t(n,...r)},ZR=mn({patchProp:GR},VR);let ym;function eS(){return ym||(ym=fR(ZR))}const tS=(...t)=>{const e=eS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=nS(r);if(!s)return;const i=e._component;!be(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nS(t){return It(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Hi=typeof window<"u";function rS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ke=Object.assign;function oh(t,e){const n={};for(const r in e){const s=e[r];n[r]=Hn(s)?s.map(t):t(s)}return n}const ma=()=>{},Hn=Array.isArray,sS=/\/$/,iS=t=>t.replace(sS,"");function ah(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let u=e.indexOf("?");return l<u&&l>=0&&(u=-1),u>-1&&(r=e.slice(0,u),i=e.slice(u+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=lS(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function oS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Em(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&oo(e.matched[r],n.matched[s])&&gy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function oo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!cS(t[n],e[n]))return!1;return!0}function cS(t,e){return Hn(t)?vm(t,e):Hn(e)?vm(e,t):t===e}function vm(t,e){return Hn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function lS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Na;(function(t){t.pop="pop",t.push="push"})(Na||(Na={}));var ga;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ga||(ga={}));function uS(t){if(!t)if(Hi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),iS(t)}const hS=/^[^#]+#/;function fS(t,e){return t.replace(hS,"#")+e}function dS(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Zl=()=>({left:window.pageXOffset,top:window.pageYOffset});function pS(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=dS(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Tm(t,e){return(history.state?history.state.position-e:-1)+t}const xh=new Map;function mS(t,e){xh.set(t,e)}function gS(t){const e=xh.get(t);return xh.delete(t),e}let _S=()=>location.protocol+"//"+location.host;function _y(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,u=s.slice(l);return u[0]!=="/"&&(u="/"+u),Em(u,"")}return Em(n,t)+r+s}function yS(t,e,n,r){let s=[],i=[],o=null;const l=({state:v})=>{const S=_y(t,location),V=n.value,B=e.value;let $=0;if(v){if(n.value=S,e.value=v,o&&o===V){o=null;return}$=B?v.position-B.position:0}else r(S);s.forEach(G=>{G(n.value,V,{delta:$,type:Na.pop,direction:$?$>0?ga.forward:ga.back:ga.unknown})})};function u(){o=n.value}function d(v){s.push(v);const S=()=>{const V=s.indexOf(v);V>-1&&s.splice(V,1)};return i.push(S),S}function m(){const{history:v}=window;v.state&&v.replaceState(Ke({},v.state,{scroll:Zl()}),"")}function _(){for(const v of i)v();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",m)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",m),{pauseListeners:u,listen:d,destroy:_}}function wm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Zl():null}}function ES(t){const{history:e,location:n}=window,r={value:_y(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(u,d,m){const _=t.indexOf("#"),v=_>-1?(n.host&&document.querySelector("base")?t:t.slice(_))+u:_S()+t+u;try{e[m?"replaceState":"pushState"](d,"",v),s.value=d}catch(S){console.error(S),n[m?"replace":"assign"](v)}}function o(u,d){const m=Ke({},e.state,wm(s.value.back,u,s.value.forward,!0),d,{position:s.value.position});i(u,m,!0),r.value=u}function l(u,d){const m=Ke({},s.value,e.state,{forward:u,scroll:Zl()});i(m.current,m,!0);const _=Ke({},wm(r.value,u,null),{position:m.position+1},d);i(u,_,!1),r.value=u}return{location:r,state:s,push:l,replace:o}}function vS(t){t=uS(t);const e=ES(t),n=yS(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ke({location:"",base:t,go:r,createHref:fS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function TS(t){return typeof t=="string"||t&&typeof t=="object"}function yy(t){return typeof t=="string"||typeof t=="symbol"}const ts={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ey=Symbol("");var Am;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Am||(Am={}));function ao(t,e){return Ke(new Error,{type:t,[Ey]:!0},e)}function Cr(t,e){return t instanceof Error&&Ey in t&&(e==null||!!(t.type&e))}const Im="[^/]+?",wS={sensitive:!1,strict:!1,start:!0,end:!0},AS=/[.+*?^${}()[\]/\\]/g;function IS(t,e){const n=Ke({},wS,e),r=[];let s=n.start?"^":"";const i=[];for(const d of t){const m=d.length?[]:[90];n.strict&&!d.length&&(s+="/");for(let _=0;_<d.length;_++){const v=d[_];let S=40+(n.sensitive?.25:0);if(v.type===0)_||(s+="/"),s+=v.value.replace(AS,"\\$&"),S+=40;else if(v.type===1){const{value:V,repeatable:B,optional:$,regexp:G}=v;i.push({name:V,repeatable:B,optional:$});const ee=G||Im;if(ee!==Im){S+=10;try{new RegExp(`(${ee})`)}catch(oe){throw new Error(`Invalid custom RegExp for param "${V}" (${ee}): `+oe.message)}}let Q=B?`((?:${ee})(?:/(?:${ee}))*)`:`(${ee})`;_||(Q=$&&d.length<2?`(?:/${Q})`:"/"+Q),$&&(Q+="?"),s+=Q,S+=20,$&&(S+=-8),B&&(S+=-20),ee===".*"&&(S+=-50)}m.push(S)}r.push(m)}if(n.strict&&n.end){const d=r.length-1;r[d][r[d].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(d){const m=d.match(o),_={};if(!m)return null;for(let v=1;v<m.length;v++){const S=m[v]||"",V=i[v-1];_[V.name]=S&&V.repeatable?S.split("/"):S}return _}function u(d){let m="",_=!1;for(const v of t){(!_||!m.endsWith("/"))&&(m+="/"),_=!1;for(const S of v)if(S.type===0)m+=S.value;else if(S.type===1){const{value:V,repeatable:B,optional:$}=S,G=V in d?d[V]:"";if(Hn(G)&&!B)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const ee=Hn(G)?G.join("/"):G;if(!ee)if($)v.length<2&&(m.endsWith("/")?m=m.slice(0,-1):_=!0);else throw new Error(`Missing required param "${V}"`);m+=ee}}return m||"/"}return{re:o,score:r,keys:i,parse:l,stringify:u}}function bS(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function RS(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=bS(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(bm(r))return 1;if(bm(s))return-1}return s.length-r.length}function bm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const SS={type:0,value:""},CS=/[a-zA-Z0-9_]/;function PS(t){if(!t)return[[]];if(t==="/")return[[SS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(S){throw new Error(`ERR (${n})/"${d}": ${S}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,u,d="",m="";function _(){d&&(n===0?i.push({type:0,value:d}):n===1||n===2||n===3?(i.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:d,regexp:m,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),d="")}function v(){d+=u}for(;l<t.length;){if(u=t[l++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(d&&_(),o()):u===":"?(_(),n=1):v();break;case 4:v(),n=r;break;case 1:u==="("?n=2:CS.test(u)?v():(_(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--);break;case 2:u===")"?m[m.length-1]=="\\"?m=m.slice(0,-1)+u:n=3:m+=u;break;case 3:_(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&l--,m="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${d}"`),_(),o(),s}function OS(t,e,n){const r=IS(PS(t.path),n),s=Ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function NS(t,e){const n=[],r=new Map;e=Cm({strict:!1,end:!0,sensitive:!1},e);function s(m){return r.get(m)}function i(m,_,v){const S=!v,V=DS(m);V.aliasOf=v&&v.record;const B=Cm(e,m),$=[V];if("alias"in m){const Q=typeof m.alias=="string"?[m.alias]:m.alias;for(const oe of Q)$.push(Ke({},V,{components:v?v.record.components:V.components,path:oe,aliasOf:v?v.record:V}))}let G,ee;for(const Q of $){const{path:oe}=Q;if(_&&oe[0]!=="/"){const De=_.record.path,pe=De[De.length-1]==="/"?"":"/";Q.path=_.record.path+(oe&&pe+oe)}if(G=OS(Q,_,B),v?v.alias.push(G):(ee=ee||G,ee!==G&&ee.alias.push(G),S&&m.name&&!Sm(G)&&o(m.name)),V.children){const De=V.children;for(let pe=0;pe<De.length;pe++)i(De[pe],G,v&&v.children[pe])}v=v||G,(G.record.components&&Object.keys(G.record.components).length||G.record.name||G.record.redirect)&&u(G)}return ee?()=>{o(ee)}:ma}function o(m){if(yy(m)){const _=r.get(m);_&&(r.delete(m),n.splice(n.indexOf(_),1),_.children.forEach(o),_.alias.forEach(o))}else{const _=n.indexOf(m);_>-1&&(n.splice(_,1),m.record.name&&r.delete(m.record.name),m.children.forEach(o),m.alias.forEach(o))}}function l(){return n}function u(m){let _=0;for(;_<n.length&&RS(m,n[_])>=0&&(m.record.path!==n[_].record.path||!vy(m,n[_]));)_++;n.splice(_,0,m),m.record.name&&!Sm(m)&&r.set(m.record.name,m)}function d(m,_){let v,S={},V,B;if("name"in m&&m.name){if(v=r.get(m.name),!v)throw ao(1,{location:m});B=v.record.name,S=Ke(Rm(_.params,v.keys.filter(ee=>!ee.optional).map(ee=>ee.name)),m.params&&Rm(m.params,v.keys.map(ee=>ee.name))),V=v.stringify(S)}else if("path"in m)V=m.path,v=n.find(ee=>ee.re.test(V)),v&&(S=v.parse(V),B=v.record.name);else{if(v=_.name?r.get(_.name):n.find(ee=>ee.re.test(_.path)),!v)throw ao(1,{location:m,currentLocation:_});B=v.record.name,S=Ke({},_.params,m.params),V=v.stringify(S)}const $=[];let G=v;for(;G;)$.unshift(G.record),G=G.parent;return{name:B,path:V,params:S,matched:$,meta:LS($)}}return t.forEach(m=>i(m)),{addRoute:i,resolve:d,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function Rm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function DS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:kS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function kS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Sm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LS(t){return t.reduce((e,n)=>Ke(e,n.meta),{})}function Cm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vy(t,e){return e.children.some(n=>n===t||vy(t,n))}const Ty=/#/g,VS=/&/g,xS=/\//g,MS=/=/g,US=/\?/g,wy=/\+/g,FS=/%5B/g,$S=/%5D/g,Ay=/%5E/g,BS=/%60/g,Iy=/%7B/g,jS=/%7C/g,by=/%7D/g,HS=/%20/g;function Of(t){return encodeURI(""+t).replace(jS,"|").replace(FS,"[").replace($S,"]")}function qS(t){return Of(t).replace(Iy,"{").replace(by,"}").replace(Ay,"^")}function Mh(t){return Of(t).replace(wy,"%2B").replace(HS,"+").replace(Ty,"%23").replace(VS,"%26").replace(BS,"`").replace(Iy,"{").replace(by,"}").replace(Ay,"^")}function KS(t){return Mh(t).replace(MS,"%3D")}function WS(t){return Of(t).replace(Ty,"%23").replace(US,"%3F")}function zS(t){return t==null?"":WS(t).replace(xS,"%2F")}function El(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function GS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(wy," "),o=i.indexOf("="),l=El(o<0?i:i.slice(0,o)),u=o<0?null:El(i.slice(o+1));if(l in e){let d=e[l];Hn(d)||(d=e[l]=[d]),d.push(u)}else e[l]=u}return e}function Pm(t){let e="";for(let n in t){const r=t[n];if(n=KS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Hn(r)?r.map(i=>i&&Mh(i)):[r&&Mh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function YS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Hn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const QS=Symbol(""),Om=Symbol(""),eu=Symbol(""),Ry=Symbol(""),Uh=Symbol("");function ra(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ss(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const u=_=>{_===!1?l(ao(4,{from:n,to:e})):_ instanceof Error?l(_):TS(_)?l(ao(2,{from:e,to:_})):(i&&r.enterCallbacks[s]===i&&typeof _=="function"&&i.push(_),o())},d=t.call(r&&r.instances[s],e,n,u);let m=Promise.resolve(d);t.length<3&&(m=m.then(u)),m.catch(_=>l(_))})}function ch(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let l=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(XS(l)){const d=(l.__vccOpts||l)[e];d&&s.push(ss(d,n,r,i,o))}else{let u=l();s.push(()=>u.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const m=rS(d)?d.default:d;i.components[o]=m;const v=(m.__vccOpts||m)[e];return v&&ss(v,n,r,i,o)()}))}}return s}function XS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nm(t){const e=ar(eu),n=ar(Ry),r=pn(()=>e.resolve(ai(t.to))),s=pn(()=>{const{matched:u}=r.value,{length:d}=u,m=u[d-1],_=n.matched;if(!m||!_.length)return-1;const v=_.findIndex(oo.bind(null,m));if(v>-1)return v;const S=Dm(u[d-2]);return d>1&&Dm(m)===S&&_[_.length-1].path!==S?_.findIndex(oo.bind(null,u[d-2])):v}),i=pn(()=>s.value>-1&&tC(n.params,r.value.params)),o=pn(()=>s.value>-1&&s.value===n.matched.length-1&&gy(n.params,r.value.params));function l(u={}){return eC(u)?e[ai(t.replace)?"replace":"push"](ai(t.to)).catch(ma):Promise.resolve()}return{route:r,href:pn(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const JS=Q_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nm,setup(t,{slots:e}){const n=ja(Nm(t)),{options:r}=ar(eu),s=pn(()=>({[km(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[km(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:my("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ZS=JS;function eC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function tC(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Hn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const km=(t,e,n)=>t??e??n,nC=Q_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ar(Uh),s=pn(()=>t.route||r.value),i=ar(Om,0),o=pn(()=>{let d=ai(i);const{matched:m}=s.value;let _;for(;(_=m[d])&&!_.components;)d++;return d}),l=pn(()=>s.value.matched[o.value]);Jc(Om,pn(()=>o.value+1)),Jc(QS,l),Jc(Uh,s);const u=Xc();return Zc(()=>[u.value,l.value,t.name],([d,m,_],[v,S,V])=>{m&&(m.instances[_]=d,S&&S!==m&&d&&d===v&&(m.leaveGuards.size||(m.leaveGuards=S.leaveGuards),m.updateGuards.size||(m.updateGuards=S.updateGuards))),d&&m&&(!S||!oo(m,S)||!v)&&(m.enterCallbacks[_]||[]).forEach(B=>B(d))},{flush:"post"}),()=>{const d=s.value,m=t.name,_=l.value,v=_&&_.components[m];if(!v)return Lm(n.default,{Component:v,route:d});const S=_.props[m],V=S?S===!0?d.params:typeof S=="function"?S(d):S:null,$=my(v,Ke({},V,e,{onVnodeUnmounted:G=>{G.component.isUnmounted&&(_.instances[m]=null)},ref:u}));return Lm(n.default,{Component:$,route:d})||$}}});function Lm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rC=nC;function sC(t){const e=NS(t.routes,t),n=t.parseQuery||GS,r=t.stringifyQuery||Pm,s=t.history,i=ra(),o=ra(),l=ra(),u=vb(ts);let d=ts;Hi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const m=oh.bind(null,q=>""+q),_=oh.bind(null,zS),v=oh.bind(null,El);function S(q,ie){let se,L;return yy(q)?(se=e.getRecordMatcher(q),L=ie):L=q,e.addRoute(L,se)}function V(q){const ie=e.getRecordMatcher(q);ie&&e.removeRoute(ie)}function B(){return e.getRoutes().map(q=>q.record)}function $(q){return!!e.getRecordMatcher(q)}function G(q,ie){if(ie=Ke({},ie||u.value),typeof q=="string"){const I=ah(n,q,ie.path),x=e.resolve({path:I.path},ie),K=s.createHref(I.fullPath);return Ke(I,x,{params:v(x.params),hash:El(I.hash),redirectedFrom:void 0,href:K})}let se;if("path"in q)se=Ke({},q,{path:ah(n,q.path,ie.path).path});else{const I=Ke({},q.params);for(const x in I)I[x]==null&&delete I[x];se=Ke({},q,{params:_(q.params)}),ie.params=_(ie.params)}const L=e.resolve(se,ie),Ce=q.hash||"";L.params=m(v(L.params));const We=oS(r,Ke({},q,{hash:qS(Ce),path:L.path})),w=s.createHref(We);return Ke({fullPath:We,hash:Ce,query:r===Pm?YS(q.query):q.query||{}},L,{redirectedFrom:void 0,href:w})}function ee(q){return typeof q=="string"?ah(n,q,u.value.path):Ke({},q)}function Q(q,ie){if(d!==q)return ao(8,{from:ie,to:q})}function oe(q){return C(q)}function De(q){return oe(Ke(ee(q),{replace:!0}))}function pe(q){const ie=q.matched[q.matched.length-1];if(ie&&ie.redirect){const{redirect:se}=ie;let L=typeof se=="function"?se(q):se;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=ee(L):{path:L},L.params={}),Ke({query:q.query,hash:q.hash,params:"path"in L?{}:q.params},L)}}function C(q,ie){const se=d=G(q),L=u.value,Ce=q.state,We=q.force,w=q.replace===!0,I=pe(se);if(I)return C(Ke(ee(I),{state:typeof I=="object"?Ke({},Ce,I.state):Ce,force:We,replace:w}),ie||se);const x=se;x.redirectedFrom=ie;let K;return!We&&aS(r,L,se)&&(K=ao(16,{to:x,from:L}),_n(L,L,!0,!1)),(K?Promise.resolve(K):b(x,L)).catch(F=>Cr(F)?Cr(F,2)?F:bt(F):Me(F,x,L)).then(F=>{if(F){if(Cr(F,2))return C(Ke({replace:w},ee(F.to),{state:typeof F.to=="object"?Ke({},Ce,F.to.state):Ce,force:We}),ie||x)}else F=O(x,L,!0,w,Ce);return P(x,L,F),F})}function T(q,ie){const se=Q(q,ie);return se?Promise.reject(se):Promise.resolve()}function b(q,ie){let se;const[L,Ce,We]=iC(q,ie);se=ch(L.reverse(),"beforeRouteLeave",q,ie);for(const I of L)I.leaveGuards.forEach(x=>{se.push(ss(x,q,ie))});const w=T.bind(null,q,ie);return se.push(w),Bi(se).then(()=>{se=[];for(const I of i.list())se.push(ss(I,q,ie));return se.push(w),Bi(se)}).then(()=>{se=ch(Ce,"beforeRouteUpdate",q,ie);for(const I of Ce)I.updateGuards.forEach(x=>{se.push(ss(x,q,ie))});return se.push(w),Bi(se)}).then(()=>{se=[];for(const I of q.matched)if(I.beforeEnter&&!ie.matched.includes(I))if(Hn(I.beforeEnter))for(const x of I.beforeEnter)se.push(ss(x,q,ie));else se.push(ss(I.beforeEnter,q,ie));return se.push(w),Bi(se)}).then(()=>(q.matched.forEach(I=>I.enterCallbacks={}),se=ch(We,"beforeRouteEnter",q,ie),se.push(w),Bi(se))).then(()=>{se=[];for(const I of o.list())se.push(ss(I,q,ie));return se.push(w),Bi(se)}).catch(I=>Cr(I,8)?I:Promise.reject(I))}function P(q,ie,se){for(const L of l.list())L(q,ie,se)}function O(q,ie,se,L,Ce){const We=Q(q,ie);if(We)return We;const w=ie===ts,I=Hi?history.state:{};se&&(L||w?s.replace(q.fullPath,Ke({scroll:w&&I&&I.scroll},Ce)):s.push(q.fullPath,Ce)),u.value=q,_n(q,ie,se,w),bt()}let D;function R(){D||(D=s.listen((q,ie,se)=>{if(!mr.listening)return;const L=G(q),Ce=pe(L);if(Ce){C(Ke(Ce,{replace:!0}),L).catch(ma);return}d=L;const We=u.value;Hi&&mS(Tm(We.fullPath,se.delta),Zl()),b(L,We).catch(w=>Cr(w,12)?w:Cr(w,2)?(C(w.to,L).then(I=>{Cr(I,20)&&!se.delta&&se.type===Na.pop&&s.go(-1,!1)}).catch(ma),Promise.reject()):(se.delta&&s.go(-se.delta,!1),Me(w,L,We))).then(w=>{w=w||O(L,We,!1),w&&(se.delta&&!Cr(w,8)?s.go(-se.delta,!1):se.type===Na.pop&&Cr(w,20)&&s.go(-1,!1)),P(L,We,w)}).catch(ma)}))}let ht=ra(),sn=ra(),Ze;function Me(q,ie,se){bt(q);const L=sn.list();return L.length?L.forEach(Ce=>Ce(q,ie,se)):console.error(q),Promise.reject(q)}function Ne(){return Ze&&u.value!==ts?Promise.resolve():new Promise((q,ie)=>{ht.add([q,ie])})}function bt(q){return Ze||(Ze=!q,R(),ht.list().forEach(([ie,se])=>q?se(q):ie()),ht.reset()),q}function _n(q,ie,se,L){const{scrollBehavior:Ce}=t;if(!Hi||!Ce)return Promise.resolve();const We=!se&&gS(Tm(q.fullPath,0))||(L||!se)&&history.state&&history.state.scroll||null;return H_().then(()=>Ce(q,ie,We)).then(w=>w&&pS(w)).catch(w=>Me(w,q,ie))}const Xt=q=>s.go(q);let Ye;const Qe=new Set,mr={currentRoute:u,listening:!0,addRoute:S,removeRoute:V,hasRoute:$,getRoutes:B,resolve:G,options:t,push:oe,replace:De,go:Xt,back:()=>Xt(-1),forward:()=>Xt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:sn.add,isReady:Ne,install(q){const ie=this;q.component("RouterLink",ZS),q.component("RouterView",rC),q.config.globalProperties.$router=ie,Object.defineProperty(q.config.globalProperties,"$route",{enumerable:!0,get:()=>ai(u)}),Hi&&!Ye&&u.value===ts&&(Ye=!0,oe(s.location).catch(Ce=>{}));const se={};for(const Ce in ts)se[Ce]=pn(()=>u.value[Ce]);q.provide(eu,ie),q.provide(Ry,ja(se)),q.provide(Uh,u);const L=q.unmount;Qe.add(q),q.unmount=function(){Qe.delete(q),Qe.size<1&&(d=ts,D&&D(),D=null,u.value=ts,Ye=!1,Ze=!1),L()}}};return mr}function Bi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function iC(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(d=>oo(d,l))?r.push(l):n.push(l));const u=t.matched[o];u&&(e.matched.find(d=>oo(d,u))||s.push(u))}return[n,r,s]}function oC(){return ar(eu)}const aC=()=>{};var Vm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,m=i>>2,_=(i&3)<<4|l>>4;let v=(l&15)<<2|d>>6,S=d&63;u||(S=64,o||(v=64)),r.push(n[m],n[_],n[v],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const _=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||_==null)throw new lC;const v=i<<2|l>>4;if(r.push(v),d!==64){const S=l<<4&240|d>>2;if(r.push(S),_!==64){const V=d<<6&192|_;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uC=function(t){const e=Sy(t);return Cy.encodeByteArray(e,!0)},vl=function(t){return uC(t).replace(/\./g,"")},Py=function(t){try{return Cy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=()=>hC().__FIREBASE_DEFAULTS__,dC=()=>{if(typeof process>"u"||typeof Vm>"u")return;const t=Vm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Py(t[1]);return e&&JSON.parse(e)},tu=()=>{try{return aC()||fC()||dC()||pC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Oy=t=>{var e,n;return(n=(e=tu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ny=t=>{const e=Oy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dy=()=>{var t;return(t=tu())===null||t===void 0?void 0:t.config},ky=t=>{var e;return(e=tu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ly(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vl(JSON.stringify(n)),vl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qt())}function _C(){var t;const e=(t=tu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function EC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TC(){const t=Qt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wC(){return!_C()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AC(){try{return typeof indexedDB=="object"}catch{return!1}}function IC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="FirebaseError";class pr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bC,Object.setPrototypeOf(this,pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?RC(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new pr(s,l,r)}}function RC(t,e){return t.replace(SC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const SC=/\{\$([^}]+)}/g;function CC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(xm(i)&&xm(o)){if(!hi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function aa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ca(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function PC(t,e){const n=new OC(t,e);return n.subscribe.bind(n)}class OC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lh),s.error===void 0&&(s.error=lh),s.complete===void 0&&(s.complete=lh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class ys{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(LC(e))try{this.getOrInitializeService({instanceIdentifier:Zs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Zs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zs){return this.instances.has(e)}getOptions(e=Zs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Zs){return this.component?this.component.multipleInstances?e:Zs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kC(t){return t===Zs?void 0:t}function LC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ve||(Ve={}));const xC={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},MC=Ve.INFO,UC={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},FC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nf{constructor(e){this.name=e,this._logLevel=MC,this._logHandler=FC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const $C=(t,e)=>e.some(n=>t instanceof n);let Mm,Um;function BC(){return Mm||(Mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jC(){return Um||(Um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vy=new WeakMap,Fh=new WeakMap,xy=new WeakMap,uh=new WeakMap,Df=new WeakMap;function HC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ds(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vy.set(n,t)}).catch(()=>{}),Df.set(e,t),e}function qC(t){if(Fh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fh.set(t,e)}let $h={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ds(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KC(t){$h=t($h)}function WC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hh(this),e,...n);return xy.set(r,e.sort?e.sort():[e]),ds(r)}:jC().includes(t)?function(...e){return t.apply(hh(this),e),ds(Vy.get(this))}:function(...e){return ds(t.apply(hh(this),e))}}function zC(t){return typeof t=="function"?WC(t):(t instanceof IDBTransaction&&qC(t),$C(t,BC())?new Proxy(t,$h):t)}function ds(t){if(t instanceof IDBRequest)return HC(t);if(uh.has(t))return uh.get(t);const e=zC(t);return e!==t&&(uh.set(t,e),Df.set(e,t)),e}const hh=t=>Df.get(t);function GC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ds(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ds(o.result),u.oldVersion,u.newVersion,ds(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const YC=["get","getKey","getAll","getAllKeys","count"],QC=["put","add","delete","clear"],fh=new Map;function Fm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||YC.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return fh.set(e,i),i}KC(t=>({...t,get:(e,n,r)=>Fm(e,n)||t.get(e,n,r),has:(e,n)=>!!Fm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bh="@firebase/app",$m="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Nf("@firebase/app"),ZC="@firebase/app-compat",eP="@firebase/analytics-compat",tP="@firebase/analytics",nP="@firebase/app-check-compat",rP="@firebase/app-check",sP="@firebase/auth",iP="@firebase/auth-compat",oP="@firebase/database",aP="@firebase/data-connect",cP="@firebase/database-compat",lP="@firebase/functions",uP="@firebase/functions-compat",hP="@firebase/installations",fP="@firebase/installations-compat",dP="@firebase/messaging",pP="@firebase/messaging-compat",mP="@firebase/performance",gP="@firebase/performance-compat",_P="@firebase/remote-config",yP="@firebase/remote-config-compat",EP="@firebase/storage",vP="@firebase/storage-compat",TP="@firebase/firestore",wP="@firebase/vertexai",AP="@firebase/firestore-compat",IP="firebase",bP="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="[DEFAULT]",RP={[Bh]:"fire-core",[ZC]:"fire-core-compat",[tP]:"fire-analytics",[eP]:"fire-analytics-compat",[rP]:"fire-app-check",[nP]:"fire-app-check-compat",[sP]:"fire-auth",[iP]:"fire-auth-compat",[oP]:"fire-rtdb",[aP]:"fire-data-connect",[cP]:"fire-rtdb-compat",[lP]:"fire-fn",[uP]:"fire-fn-compat",[hP]:"fire-iid",[fP]:"fire-iid-compat",[dP]:"fire-fcm",[pP]:"fire-fcm-compat",[mP]:"fire-perf",[gP]:"fire-perf-compat",[_P]:"fire-rc",[yP]:"fire-rc-compat",[EP]:"fire-gcs",[vP]:"fire-gcs-compat",[TP]:"fire-fst",[AP]:"fire-fst-compat",[wP]:"fire-vertex","fire-js":"fire-js",[IP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=new Map,SP=new Map,Hh=new Map;function Bm(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fi(t){const e=t.name;if(Hh.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;Hh.set(e,t);for(const n of Tl.values())Bm(n,t);for(const n of SP.values())Bm(n,t);return!0}function nu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ps=new Ha("app","Firebase",CP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=bP;function My(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ps.create("bad-app-name",{appName:String(s)});if(n||(n=Dy()),!n)throw ps.create("no-options");const i=Tl.get(s);if(i){if(hi(n,i.options)&&hi(r,i.config))return i;throw ps.create("duplicate-app",{appName:s})}const o=new VC(s);for(const u of Hh.values())o.addComponent(u);const l=new PP(n,r,o);return Tl.set(s,l),l}function kf(t=jh){const e=Tl.get(t);if(!e&&t===jh&&Dy())return My();if(!e)throw ps.create("no-app",{appName:t});return e}function cr(t,e,n){var r;let s=(r=RP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(l.join(" "));return}fi(new ys(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="firebase-heartbeat-database",NP=1,Da="firebase-heartbeat-store";let dh=null;function Uy(){return dh||(dh=GC(OP,NP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Da)}catch(n){console.warn(n)}}}}).catch(t=>{throw ps.create("idb-open",{originalErrorMessage:t.message})})),dh}async function DP(t){try{const n=(await Uy()).transaction(Da),r=await n.objectStore(Da).get(Fy(t));return await n.done,r}catch(e){if(e instanceof pr)xr.warn(e.message);else{const n=ps.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(n.message)}}}async function jm(t,e){try{const r=(await Uy()).transaction(Da,"readwrite");await r.objectStore(Da).put(e,Fy(t)),await r.done}catch(n){if(n instanceof pr)xr.warn(n.message);else{const r=ps.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xr.warn(r.message)}}}function Fy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kP=1024,LP=30;class VP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>LP){const o=UP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hm(),{heartbeatsToSend:r,unsentEntries:s}=xP(this._heartbeatsCache.heartbeats),i=vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xr.warn(n),""}}}function Hm(){return new Date().toISOString().substring(0,10)}function xP(t,e=kP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AC()?IC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qm(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}function UP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){fi(new ys("platform-logger",e=>new XC(e),"PRIVATE")),fi(new ys("heartbeat",e=>new VP(e),"PRIVATE")),cr(Bh,$m,t),cr(Bh,$m,"esm2017"),cr("fire-js","")}FP("");var $P="firebase",BP="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cr($P,BP,"app");function Lf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $y(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jP=$y,By=new Ha("auth","Firebase",$y());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Nf("@firebase/auth");function HP(t,...e){wl.logLevel<=Ve.WARN&&wl.warn(`Auth (${yi}): ${t}`,...e)}function nl(t,...e){wl.logLevel<=Ve.ERROR&&wl.error(`Auth (${yi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw xf(t,...e)}function Bn(t,...e){return xf(t,...e)}function Vf(t,e,n){const r=Object.assign(Object.assign({},jP()),{[e]:n});return new Ha("auth","Firebase",r).create(e,{appName:t.name})}function kr(t){return Vf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&In(t,"argument-error"),Vf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return By.create(t,...e)}function _e(t,e,...n){if(!t)throw xf(e,...n)}function Nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nl(e),new Error(e)}function Mr(t,e){t||Nr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KP(){return Km()==="http:"||Km()==="https:"}function Km(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KP()||EC()||"connection"in navigator)?navigator.onLine:!0}function zP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mr(n>e,"Short delay should be less than long delay!"),this.isMobile=gC()||vC()}get(){return WP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){Mr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QP=new Ka(3e4,6e4);function bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jr(t,e,n,r,s={}){return Hy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=qa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return yC()||(d.referrerPolicy="no-referrer"),jy.fetch()(await qy(t,t.config.apiHost,n,l),d)})}async function Hy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GP),e);try{const s=new JP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bc(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Bc(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Bc(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Vf(t,m,d);In(t,m)}}catch(s){if(s instanceof pr)throw s;In(t,"network-request-failed",{message:String(s)})}}async function Wa(t,e,n,r,s={}){const i=await jr(t,e,n,r,s);return"mfaPendingCredential"in i&&In(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function qy(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Mf(t.config,s):`${t.config.apiScheme}://${s}`;return YP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function XP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bn(this.auth,"network-request-failed")),QP.get())})}}function Bc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Bn(t,e,r);return s.customData._tokenResponse=n,s}function Wm(t){return t!==void 0&&t.enterprise!==void 0}class ZP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return XP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function e0(t,e){return jr(t,"GET","/v2/recaptchaConfig",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e){return jr(t,"POST","/v1/accounts:delete",e)}async function Al(t,e){return jr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n0(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=Uf(r);_e(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_a(ph(s.auth_time)),issuedAtTime:_a(ph(s.iat)),expirationTime:_a(ph(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ph(t){return Number(t)*1e3}function Uf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return nl("JWT malformed, contained fewer than 3 sections"),null;try{const s=Py(n);return s?JSON.parse(s):(nl("Failed to decode base64 JWT payload"),null)}catch(s){return nl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zm(t){const e=Uf(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pr&&r0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function r0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_a(this.lastLoginAt),this.creationTime=_a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Il(t){var e;const n=t.auth,r=await t.getIdToken(),s=await co(t,Al(n,{idToken:r}));_e(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ky(i.providerUserInfo):[],l=o0(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),m=u?d:!1,_={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Kh(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(t,_)}async function i0(t){const e=ct(t);await Il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ky(t){return t.map(e=>{var{providerId:n}=e,r=Lf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e){const n=await Hy(t,{},async()=>{const r=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await qy(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",jy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c0(t,e){return jr(t,"POST","/v2/accounts:revokeToken",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await a0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Zi;return r&&(_e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(_e(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(_e(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return Nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await co(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return n0(this,e)}reload(){return i0(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await co(this,t0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,d,m;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,V=(o=n.photoURL)!==null&&o!==void 0?o:void 0,B=(l=n.tenantId)!==null&&l!==void 0?l:void 0,$=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,G=(d=n.createdAt)!==null&&d!==void 0?d:void 0,ee=(m=n.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:Q,emailVerified:oe,isAnonymous:De,providerData:pe,stsTokenManager:C}=n;_e(Q&&C,e,"internal-error");const T=Zi.fromJSON(this.name,C);_e(typeof Q=="string",e,"internal-error"),ns(_,e.name),ns(v,e.name),_e(typeof oe=="boolean",e,"internal-error"),_e(typeof De=="boolean",e,"internal-error"),ns(S,e.name),ns(V,e.name),ns(B,e.name),ns($,e.name),ns(G,e.name),ns(ee,e.name);const b=new Un({uid:Q,auth:e,email:v,emailVerified:oe,displayName:_,isAnonymous:De,photoURL:V,phoneNumber:S,tenantId:B,stsTokenManager:T,createdAt:G,lastLoginAt:ee});return pe&&Array.isArray(pe)&&(b.providerData=pe.map(P=>Object.assign({},P))),$&&(b._redirectEventId=$),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new Zi;s.updateFromServerResponse(n);const i=new Un({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Il(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];_e(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ky(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Zi;l.updateFromIdToken(r);const u=new Un({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=new Map;function Dr(t){Mr(t instanceof Function,"Expected a class definition");let e=Gm.get(t);return e?(Mr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wy.type="NONE";const Ym=Wy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(t,e,n){return`firebase:${t}:${e}:${n}`}class eo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=rl(this.userKey,s.apiKey,i),this.fullPersistenceKey=rl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Al(this.auth,{idToken:e}).catch(()=>{});return n?Un._fromGetAccountInfoResponse(this.auth,n,e):null}return Un._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new eo(Dr(Ym),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Dr(Ym);const o=rl(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const m=await d._get(o);if(m){let _;if(typeof m=="string"){const v=await Al(e,{idToken:m}).catch(()=>{});if(!v)break;_=await Un._fromGetAccountInfoResponse(e,v,m)}else _=Un._fromJSON(e,m);d!==i&&(l=_),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new eo(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new eo(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jy(e))return"Blackberry";if(Zy(e))return"Webos";if(Gy(e))return"Safari";if((e.includes("chrome/")||Yy(e))&&!e.includes("edge/"))return"Chrome";if(Xy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zy(t=Qt()){return/firefox\//i.test(t)}function Gy(t=Qt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yy(t=Qt()){return/crios\//i.test(t)}function Qy(t=Qt()){return/iemobile/i.test(t)}function Xy(t=Qt()){return/android/i.test(t)}function Jy(t=Qt()){return/blackberry/i.test(t)}function Zy(t=Qt()){return/webos/i.test(t)}function Ff(t=Qt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function l0(t=Qt()){var e;return Ff(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u0(){return TC()&&document.documentMode===10}function eE(t=Qt()){return Ff(t)||Xy(t)||Zy(t)||Jy(t)||/windows phone/i.test(t)||Qy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(t,e=[]){let n;switch(t){case"Browser":n=Qm(Qt());break;case"Worker":n=`${Qm(Qt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f0(t,e={}){return jr(t,"GET","/v2/passwordPolicy",bs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=6;class p0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:d0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xm(this),this.idTokenSubscription=new Xm(this),this.beforeStateQueue=new h0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=By,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await eo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Al(this,{idToken:e}),r=await Un._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Il(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(kr(this));const n=e?ct(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f0(this),n=new p0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await c0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dr(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await eo.create(this,[Dr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=tE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Rs(t){return ct(t)}class Xm{constructor(e){this.auth=e,this.observer=null,this.addObserver=PC(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g0(t){ru=t}function nE(t){return ru.loadJS(t)}function _0(){return ru.recaptchaEnterpriseScript}function y0(){return ru.gapiScript}function E0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class v0{constructor(){this.enterprise=new T0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class T0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const w0="recaptcha-enterprise",rE="NO_RECAPTCHA";class A0{constructor(e){this.type=w0,this.auth=Rs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{e0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new ZP(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Wm(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(rE)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new v0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Wm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=_0();u.length!==0&&(u+=l),nE(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function Jm(t,e,n,r=!1,s=!1){const i=new A0(t);let o;if(s)o=rE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Wh(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Jm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(t,e){const n=nu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(hi(i,e??{}))return s;In(s,"already-initialized")}return n.initialize({options:e})}function b0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R0(t,e,n){const r=Rs(t);_e(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=sE(e),{host:o,port:l}=S0(e),u=l===null?"":`:${l}`,d={url:`${i}//${o}${u}/`},m=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){_e(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),_e(hi(d,r.config.emulator)&&hi(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,C0()}function sE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S0(t){const e=sE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zm(o)}}}function Zm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function C0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nr("not implemented")}_getIdTokenResponse(e){return Nr("not implemented")}_linkToIdToken(e,n){return Nr("not implemented")}_getReauthenticationResolver(e){return Nr("not implemented")}}async function P0(t,e){return jr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O0(t,e){return Wa(t,"POST","/v1/accounts:signInWithPassword",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N0(t,e){return Wa(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}async function D0(t,e){return Wa(t,"POST","/v1/accounts:signInWithEmailLink",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka extends $f{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ka(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ka(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wh(e,n,"signInWithPassword",O0);case"emailLink":return N0(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wh(e,r,"signUpPassword",P0);case"emailLink":return D0(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t,e){return Wa(t,"POST","/v1/accounts:signInWithIdp",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="http://localhost";class di extends $f{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Lf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new di(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return to(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,to(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,to(e,n)}buildRequest(){const e={requestUri:k0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function V0(t){const e=aa(ca(t)).link,n=e?aa(ca(e)).deep_link_id:null,r=aa(ca(t)).deep_link_id;return(r?aa(ca(r)).link:null)||r||n||e||t}class Bf{constructor(e){var n,r,s,i,o,l;const u=aa(ca(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,_=L0((s=u.mode)!==null&&s!==void 0?s:null);_e(d&&m&&_,"argument-error"),this.apiKey=d,this.operation=_,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=V0(e);try{return new Bf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.providerId=vo.PROVIDER_ID}static credential(e,n){return ka._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bf.parseLink(n);return _e(r,"argument-error"),ka._fromEmailAndCode(e,r.code,r.tenantId)}}vo.PROVIDER_ID="password";vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends jf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends za{constructor(){super("facebook.com")}static credential(e){return di._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch{return null}}}is.FACEBOOK_SIGN_IN_METHOD="facebook.com";is.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends za{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return di._fromParams({providerId:os.PROVIDER_ID,signInMethod:os.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return os.credentialFromTaggedObject(e)}static credentialFromError(e){return os.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return os.credential(n,r)}catch{return null}}}os.GOOGLE_SIGN_IN_METHOD="google.com";os.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends za{constructor(){super("github.com")}static credential(e){return di._fromParams({providerId:as.PROVIDER_ID,signInMethod:as.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return as.credentialFromTaggedObject(e)}static credentialFromError(e){return as.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return as.credential(e.oauthAccessToken)}catch{return null}}}as.GITHUB_SIGN_IN_METHOD="github.com";as.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends za{constructor(){super("twitter.com")}static credential(e,n){return di._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cs.credential(n,r)}catch{return null}}}cs.TWITTER_SIGN_IN_METHOD="twitter.com";cs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t,e){return Wa(t,"POST","/v1/accounts:signUp",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Un._fromIdTokenResponse(e,r,s),o=eg(r);return new pi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=eg(r);return new pi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function eg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl extends pr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,bl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new bl(e,n,r,s)}}function iE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?bl._fromErrorAndOperation(t,i,e,r):i})}async function M0(t,e,n=!1){const r=await co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U0(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(kr(r));const s="reauthenticate";try{const i=await co(t,iE(r,s,e,t),n);_e(i.idToken,r,"internal-error");const o=Uf(i.idToken);_e(o,r,"internal-error");const{sub:l}=o;return _e(t.uid===l,r,"user-mismatch"),pi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&In(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t,e,n=!1){if(un(t.app))return Promise.reject(kr(t));const r="signIn",s=await iE(t,r,e),i=await pi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function F0(t,e){return oE(Rs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(t){const e=Rs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ux(t,e,n){if(un(t.app))return Promise.reject(kr(t));const r=Rs(t),o=await Wh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",x0).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&aE(t),u}),l=await pi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function hx(t,e,n){return un(t.app)?Promise.reject(kr(t)):F0(ct(t),vo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&aE(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0(t,e){return jr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ct(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await co(r,$0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function B0(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function j0(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function cE(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function H0(t){return ct(t).signOut()}const Rl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rl,"1"),this.storage.removeItem(Rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=1e3,K0=10;class uE extends lE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);u0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,K0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}uE.type="LOCAL";const W0=uE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE extends lE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}hE.type="SESSION";const fE=hE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new su(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await z0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}su.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=Hf("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(_){const v=_;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(){return window}function Y0(t){lr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(){return typeof lr().WorkerGlobalScope<"u"&&typeof lr().importScripts=="function"}async function Q0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function X0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function J0(){return dE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="firebaseLocalStorageDb",Z0=1,Sl="firebaseLocalStorage",mE="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function iu(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function eO(){const t=indexedDB.deleteDatabase(pE);return new Ga(t).toPromise()}function zh(){const t=indexedDB.open(pE,Z0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:mE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await eO(),e(await zh()))})})}async function tg(t,e,n){const r=iu(t,!0).put({[mE]:e,value:n});return new Ga(r).toPromise()}async function tO(t,e){const n=iu(t,!1).get(e),r=await new Ga(n).toPromise();return r===void 0?null:r.value}function ng(t,e){const n=iu(t,!0).delete(e);return new Ga(n).toPromise()}const nO=800,rO=3;class gE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>rO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=su._getInstance(J0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q0(),!this.activeServiceWorker)return;this.sender=new G0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||X0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zh();return await tg(e,Rl,"1"),await ng(e,Rl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>tO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ng(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=iu(s,!1).getAll();return new Ga(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gE.type="LOCAL";const sO=gE;new Ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t,e){return e?Dr(e):(_e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends $f{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return to(e,this._buildIdpRequest())}_linkToIdToken(e,n){return to(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return to(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iO(t){return oE(t.auth,new qf(t),t.bypassAuthState)}function oO(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),U0(n,new qf(t),t.bypassAuthState)}async function aO(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),M0(n,new qf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iO;case"linkViaPopup":case"linkViaRedirect":return aO;case"reauthViaPopup":case"reauthViaRedirect":return oO;default:In(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=new Ka(2e3,1e4);async function dx(t,e,n){if(un(t.app))return Promise.reject(Bn(t,"operation-not-supported-in-this-environment"));const r=Rs(t);qP(t,e,jf);const s=_E(r,n);return new si(r,"signInViaPopup",e,s).executeNotNull()}class si extends yE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,si.currentPopupAction&&si.currentPopupAction.cancel(),si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=Hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cO.get())};e()}}si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="pendingRedirect",sl=new Map;class uO extends yE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await hO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hO(t,e){const n=pO(e),r=dO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function fO(t,e){sl.set(t._key(),e)}function dO(t){return Dr(t._redirectPersistence)}function pO(t){return rl(lO,t.config.apiKey,t.name)}async function mO(t,e,n=!1){if(un(t.app))return Promise.reject(kr(t));const r=Rs(t),s=_E(r,e),o=await new uO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gO=10*60*1e3;class _O{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!EE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gO&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(e))}saveEventToCache(e){this.cachedEventUids.add(rg(e)),this.lastProcessedEventTime=Date.now()}}function rg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function EE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return EE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EO(t,e={}){return jr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TO=/^https?/;async function wO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EO(t);for(const n of e)try{if(AO(n))return}catch{}In(t,"unauthorized-domain")}function AO(t){const e=qh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TO.test(n))return!1;if(vO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=new Ka(3e4,6e4);function sg(){const t=lr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bO(t){return new Promise((e,n)=>{var r,s,i;function o(){sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sg(),n(Bn(t,"network-request-failed"))},timeout:IO.get()})}if(!((s=(r=lr().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=lr().gapi)===null||i===void 0)&&i.load)o();else{const l=E0("iframefcb");return lr()[l]=()=>{gapi.load?o():n(Bn(t,"network-request-failed"))},nE(`${y0()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw il=null,e})}let il=null;function RO(t){return il=il||bO(t),il}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=new Ka(5e3,15e3),CO="__/auth/iframe",PO="emulator/auth/iframe",OO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DO(t){const e=t.config;_e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mf(e,PO):`https://${t.config.authDomain}/${CO}`,r={apiKey:e.apiKey,appName:t.name,v:yi},s=NO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qa(r).slice(1)}`}async function kO(t){const e=await RO(t),n=lr().gapi;return _e(n,t,"internal-error"),e.open({where:document.body,url:DO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Bn(t,"network-request-failed"),l=lr().setTimeout(()=>{i(o)},SO.get());function u(){lr().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VO=500,xO=600,MO="_blank",UO="http://localhost";class ig{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FO(t,e,n,r=VO,s=xO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},LO),{width:r.toString(),height:s.toString(),top:i,left:o}),d=Qt().toLowerCase();n&&(l=Yy(d)?MO:n),zy(d)&&(e=e||UO,u.scrollbars="yes");const m=Object.entries(u).reduce((v,[S,V])=>`${v}${S}=${V},`,"");if(l0(d)&&l!=="_self")return $O(e||"",l),new ig(null);const _=window.open(e||"",l,m);_e(_,t,"popup-blocked");try{_.focus()}catch{}return new ig(_)}function $O(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO="__/auth/handler",jO="emulator/auth/handler",HO=encodeURIComponent("fac");async function og(t,e,n,r,s,i){_e(t.config.authDomain,t,"auth-domain-config-required"),_e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:yi,eventId:s};if(e instanceof jf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,_]of Object.entries({}))o[m]=_}if(e instanceof za){const m=e.getScopes().filter(_=>_!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),d=u?`#${HO}=${encodeURIComponent(u)}`:"";return`${qO(t)}?${qa(l).slice(1)}${d}`}function qO({config:t}){return t.emulator?Mf(t,jO):`https://${t.authDomain}/${BO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="webStorageSupport";class KO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fE,this._completeRedirectFn=mO,this._overrideRedirectResult=fO}async _openPopup(e,n,r,s){var i;Mr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await og(e,n,r,qh(),s);return FO(e,o,Hf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await og(e,n,r,qh(),s);return Y0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kO(e),r=new _O(e);return n.register("authEvent",s=>(_e(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mh,{type:mh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mh];o!==void 0&&n(!!o),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eE()||Gy()||Ff()}}const WO=KO;var ag="@firebase/auth",cg="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YO(t){fi(new ys("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tE(t)},d=new m0(r,s,i,u);return b0(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fi(new ys("auth-internal",e=>{const n=Rs(e.getProvider("auth").getImmediate());return(r=>new zO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cr(ag,cg,GO(t)),cr(ag,cg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=5*60,XO=ky("authIdTokenMaxAge")||QO;let lg=null;const JO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XO)return;const s=n==null?void 0:n.token;lg!==s&&(lg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vE(t=kf()){const e=nu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=I0(t,{popupRedirectResolver:WO,persistence:[sO,W0,fE]}),r=ky("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=JO(i.toString());j0(n,o,()=>o(n.currentUser)),B0(n,l=>o(l))}}const s=Oy("auth");return s&&R0(n,`http://${s}`),n}function ZO(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}g0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Bn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ZO().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YO("Browser");var ug=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,TE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,T){function b(){}b.prototype=T.prototype,C.D=T.prototype,C.prototype=new b,C.prototype.constructor=C,C.C=function(P,O,D){for(var R=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)R[ht-2]=arguments[ht];return T.prototype[O].apply(P,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,T,b){b||(b=0);var P=Array(16);if(typeof T=="string")for(var O=0;16>O;++O)P[O]=T.charCodeAt(b++)|T.charCodeAt(b++)<<8|T.charCodeAt(b++)<<16|T.charCodeAt(b++)<<24;else for(O=0;16>O;++O)P[O]=T[b++]|T[b++]<<8|T[b++]<<16|T[b++]<<24;T=C.g[0],b=C.g[1],O=C.g[2];var D=C.g[3],R=T+(D^b&(O^D))+P[0]+3614090360&4294967295;T=b+(R<<7&4294967295|R>>>25),R=D+(O^T&(b^O))+P[1]+3905402710&4294967295,D=T+(R<<12&4294967295|R>>>20),R=O+(b^D&(T^b))+P[2]+606105819&4294967295,O=D+(R<<17&4294967295|R>>>15),R=b+(T^O&(D^T))+P[3]+3250441966&4294967295,b=O+(R<<22&4294967295|R>>>10),R=T+(D^b&(O^D))+P[4]+4118548399&4294967295,T=b+(R<<7&4294967295|R>>>25),R=D+(O^T&(b^O))+P[5]+1200080426&4294967295,D=T+(R<<12&4294967295|R>>>20),R=O+(b^D&(T^b))+P[6]+2821735955&4294967295,O=D+(R<<17&4294967295|R>>>15),R=b+(T^O&(D^T))+P[7]+4249261313&4294967295,b=O+(R<<22&4294967295|R>>>10),R=T+(D^b&(O^D))+P[8]+1770035416&4294967295,T=b+(R<<7&4294967295|R>>>25),R=D+(O^T&(b^O))+P[9]+2336552879&4294967295,D=T+(R<<12&4294967295|R>>>20),R=O+(b^D&(T^b))+P[10]+4294925233&4294967295,O=D+(R<<17&4294967295|R>>>15),R=b+(T^O&(D^T))+P[11]+2304563134&4294967295,b=O+(R<<22&4294967295|R>>>10),R=T+(D^b&(O^D))+P[12]+1804603682&4294967295,T=b+(R<<7&4294967295|R>>>25),R=D+(O^T&(b^O))+P[13]+4254626195&4294967295,D=T+(R<<12&4294967295|R>>>20),R=O+(b^D&(T^b))+P[14]+2792965006&4294967295,O=D+(R<<17&4294967295|R>>>15),R=b+(T^O&(D^T))+P[15]+1236535329&4294967295,b=O+(R<<22&4294967295|R>>>10),R=T+(O^D&(b^O))+P[1]+4129170786&4294967295,T=b+(R<<5&4294967295|R>>>27),R=D+(b^O&(T^b))+P[6]+3225465664&4294967295,D=T+(R<<9&4294967295|R>>>23),R=O+(T^b&(D^T))+P[11]+643717713&4294967295,O=D+(R<<14&4294967295|R>>>18),R=b+(D^T&(O^D))+P[0]+3921069994&4294967295,b=O+(R<<20&4294967295|R>>>12),R=T+(O^D&(b^O))+P[5]+3593408605&4294967295,T=b+(R<<5&4294967295|R>>>27),R=D+(b^O&(T^b))+P[10]+38016083&4294967295,D=T+(R<<9&4294967295|R>>>23),R=O+(T^b&(D^T))+P[15]+3634488961&4294967295,O=D+(R<<14&4294967295|R>>>18),R=b+(D^T&(O^D))+P[4]+3889429448&4294967295,b=O+(R<<20&4294967295|R>>>12),R=T+(O^D&(b^O))+P[9]+568446438&4294967295,T=b+(R<<5&4294967295|R>>>27),R=D+(b^O&(T^b))+P[14]+3275163606&4294967295,D=T+(R<<9&4294967295|R>>>23),R=O+(T^b&(D^T))+P[3]+4107603335&4294967295,O=D+(R<<14&4294967295|R>>>18),R=b+(D^T&(O^D))+P[8]+1163531501&4294967295,b=O+(R<<20&4294967295|R>>>12),R=T+(O^D&(b^O))+P[13]+2850285829&4294967295,T=b+(R<<5&4294967295|R>>>27),R=D+(b^O&(T^b))+P[2]+4243563512&4294967295,D=T+(R<<9&4294967295|R>>>23),R=O+(T^b&(D^T))+P[7]+1735328473&4294967295,O=D+(R<<14&4294967295|R>>>18),R=b+(D^T&(O^D))+P[12]+2368359562&4294967295,b=O+(R<<20&4294967295|R>>>12),R=T+(b^O^D)+P[5]+4294588738&4294967295,T=b+(R<<4&4294967295|R>>>28),R=D+(T^b^O)+P[8]+2272392833&4294967295,D=T+(R<<11&4294967295|R>>>21),R=O+(D^T^b)+P[11]+1839030562&4294967295,O=D+(R<<16&4294967295|R>>>16),R=b+(O^D^T)+P[14]+4259657740&4294967295,b=O+(R<<23&4294967295|R>>>9),R=T+(b^O^D)+P[1]+2763975236&4294967295,T=b+(R<<4&4294967295|R>>>28),R=D+(T^b^O)+P[4]+1272893353&4294967295,D=T+(R<<11&4294967295|R>>>21),R=O+(D^T^b)+P[7]+4139469664&4294967295,O=D+(R<<16&4294967295|R>>>16),R=b+(O^D^T)+P[10]+3200236656&4294967295,b=O+(R<<23&4294967295|R>>>9),R=T+(b^O^D)+P[13]+681279174&4294967295,T=b+(R<<4&4294967295|R>>>28),R=D+(T^b^O)+P[0]+3936430074&4294967295,D=T+(R<<11&4294967295|R>>>21),R=O+(D^T^b)+P[3]+3572445317&4294967295,O=D+(R<<16&4294967295|R>>>16),R=b+(O^D^T)+P[6]+76029189&4294967295,b=O+(R<<23&4294967295|R>>>9),R=T+(b^O^D)+P[9]+3654602809&4294967295,T=b+(R<<4&4294967295|R>>>28),R=D+(T^b^O)+P[12]+3873151461&4294967295,D=T+(R<<11&4294967295|R>>>21),R=O+(D^T^b)+P[15]+530742520&4294967295,O=D+(R<<16&4294967295|R>>>16),R=b+(O^D^T)+P[2]+3299628645&4294967295,b=O+(R<<23&4294967295|R>>>9),R=T+(O^(b|~D))+P[0]+4096336452&4294967295,T=b+(R<<6&4294967295|R>>>26),R=D+(b^(T|~O))+P[7]+1126891415&4294967295,D=T+(R<<10&4294967295|R>>>22),R=O+(T^(D|~b))+P[14]+2878612391&4294967295,O=D+(R<<15&4294967295|R>>>17),R=b+(D^(O|~T))+P[5]+4237533241&4294967295,b=O+(R<<21&4294967295|R>>>11),R=T+(O^(b|~D))+P[12]+1700485571&4294967295,T=b+(R<<6&4294967295|R>>>26),R=D+(b^(T|~O))+P[3]+2399980690&4294967295,D=T+(R<<10&4294967295|R>>>22),R=O+(T^(D|~b))+P[10]+4293915773&4294967295,O=D+(R<<15&4294967295|R>>>17),R=b+(D^(O|~T))+P[1]+2240044497&4294967295,b=O+(R<<21&4294967295|R>>>11),R=T+(O^(b|~D))+P[8]+1873313359&4294967295,T=b+(R<<6&4294967295|R>>>26),R=D+(b^(T|~O))+P[15]+4264355552&4294967295,D=T+(R<<10&4294967295|R>>>22),R=O+(T^(D|~b))+P[6]+2734768916&4294967295,O=D+(R<<15&4294967295|R>>>17),R=b+(D^(O|~T))+P[13]+1309151649&4294967295,b=O+(R<<21&4294967295|R>>>11),R=T+(O^(b|~D))+P[4]+4149444226&4294967295,T=b+(R<<6&4294967295|R>>>26),R=D+(b^(T|~O))+P[11]+3174756917&4294967295,D=T+(R<<10&4294967295|R>>>22),R=O+(T^(D|~b))+P[2]+718787259&4294967295,O=D+(R<<15&4294967295|R>>>17),R=b+(D^(O|~T))+P[9]+3951481745&4294967295,C.g[0]=C.g[0]+T&4294967295,C.g[1]=C.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,C.g[2]=C.g[2]+O&4294967295,C.g[3]=C.g[3]+D&4294967295}r.prototype.u=function(C,T){T===void 0&&(T=C.length);for(var b=T-this.blockSize,P=this.B,O=this.h,D=0;D<T;){if(O==0)for(;D<=b;)s(this,C,D),D+=this.blockSize;if(typeof C=="string"){for(;D<T;)if(P[O++]=C.charCodeAt(D++),O==this.blockSize){s(this,P),O=0;break}}else for(;D<T;)if(P[O++]=C[D++],O==this.blockSize){s(this,P),O=0;break}}this.h=O,this.o+=T},r.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var T=1;T<C.length-8;++T)C[T]=0;var b=8*this.o;for(T=C.length-8;T<C.length;++T)C[T]=b&255,b/=256;for(this.u(C),C=Array(16),T=b=0;4>T;++T)for(var P=0;32>P;P+=8)C[b++]=this.g[T]>>>P&255;return C};function i(C,T){var b=l;return Object.prototype.hasOwnProperty.call(b,C)?b[C]:b[C]=T(C)}function o(C,T){this.h=T;for(var b=[],P=!0,O=C.length-1;0<=O;O--){var D=C[O]|0;P&&D==T||(b[O]=D,P=!1)}this.g=b}var l={};function u(C){return-128<=C&&128>C?i(C,function(T){return new o([T|0],0>T?-1:0)}):new o([C|0],0>C?-1:0)}function d(C){if(isNaN(C)||!isFinite(C))return _;if(0>C)return $(d(-C));for(var T=[],b=1,P=0;C>=b;P++)T[P]=C/b|0,b*=4294967296;return new o(T,0)}function m(C,T){if(C.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C.charAt(0)=="-")return $(m(C.substring(1),T));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=d(Math.pow(T,8)),P=_,O=0;O<C.length;O+=8){var D=Math.min(8,C.length-O),R=parseInt(C.substring(O,O+D),T);8>D?(D=d(Math.pow(T,D)),P=P.j(D).add(d(R))):(P=P.j(b),P=P.add(d(R)))}return P}var _=u(0),v=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(B(this))return-$(this).m();for(var C=0,T=1,b=0;b<this.g.length;b++){var P=this.i(b);C+=(0<=P?P:4294967296+P)*T,T*=4294967296}return C},t.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(V(this))return"0";if(B(this))return"-"+$(this).toString(C);for(var T=d(Math.pow(C,6)),b=this,P="";;){var O=oe(b,T).g;b=G(b,O.j(T));var D=((0<b.g.length?b.g[0]:b.h)>>>0).toString(C);if(b=O,V(b))return D+P;for(;6>D.length;)D="0"+D;P=D+P}},t.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function V(C){if(C.h!=0)return!1;for(var T=0;T<C.g.length;T++)if(C.g[T]!=0)return!1;return!0}function B(C){return C.h==-1}t.l=function(C){return C=G(this,C),B(C)?-1:V(C)?0:1};function $(C){for(var T=C.g.length,b=[],P=0;P<T;P++)b[P]=~C.g[P];return new o(b,~C.h).add(v)}t.abs=function(){return B(this)?$(this):this},t.add=function(C){for(var T=Math.max(this.g.length,C.g.length),b=[],P=0,O=0;O<=T;O++){var D=P+(this.i(O)&65535)+(C.i(O)&65535),R=(D>>>16)+(this.i(O)>>>16)+(C.i(O)>>>16);P=R>>>16,D&=65535,R&=65535,b[O]=R<<16|D}return new o(b,b[b.length-1]&-2147483648?-1:0)};function G(C,T){return C.add($(T))}t.j=function(C){if(V(this)||V(C))return _;if(B(this))return B(C)?$(this).j($(C)):$($(this).j(C));if(B(C))return $(this.j($(C)));if(0>this.l(S)&&0>C.l(S))return d(this.m()*C.m());for(var T=this.g.length+C.g.length,b=[],P=0;P<2*T;P++)b[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<C.g.length;O++){var D=this.i(P)>>>16,R=this.i(P)&65535,ht=C.i(O)>>>16,sn=C.i(O)&65535;b[2*P+2*O]+=R*sn,ee(b,2*P+2*O),b[2*P+2*O+1]+=D*sn,ee(b,2*P+2*O+1),b[2*P+2*O+1]+=R*ht,ee(b,2*P+2*O+1),b[2*P+2*O+2]+=D*ht,ee(b,2*P+2*O+2)}for(P=0;P<T;P++)b[P]=b[2*P+1]<<16|b[2*P];for(P=T;P<2*T;P++)b[P]=0;return new o(b,0)};function ee(C,T){for(;(C[T]&65535)!=C[T];)C[T+1]+=C[T]>>>16,C[T]&=65535,T++}function Q(C,T){this.g=C,this.h=T}function oe(C,T){if(V(T))throw Error("division by zero");if(V(C))return new Q(_,_);if(B(C))return T=oe($(C),T),new Q($(T.g),$(T.h));if(B(T))return T=oe(C,$(T)),new Q($(T.g),T.h);if(30<C.g.length){if(B(C)||B(T))throw Error("slowDivide_ only works with positive integers.");for(var b=v,P=T;0>=P.l(C);)b=De(b),P=De(P);var O=pe(b,1),D=pe(P,1);for(P=pe(P,2),b=pe(b,2);!V(P);){var R=D.add(P);0>=R.l(C)&&(O=O.add(b),D=R),P=pe(P,1),b=pe(b,1)}return T=G(C,O.j(T)),new Q(O,T)}for(O=_;0<=C.l(T);){for(b=Math.max(1,Math.floor(C.m()/T.m())),P=Math.ceil(Math.log(b)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),D=d(b),R=D.j(T);B(R)||0<R.l(C);)b-=P,D=d(b),R=D.j(T);V(D)&&(D=v),O=O.add(D),C=G(C,R)}return new Q(O,C)}t.A=function(C){return oe(this,C).h},t.and=function(C){for(var T=Math.max(this.g.length,C.g.length),b=[],P=0;P<T;P++)b[P]=this.i(P)&C.i(P);return new o(b,this.h&C.h)},t.or=function(C){for(var T=Math.max(this.g.length,C.g.length),b=[],P=0;P<T;P++)b[P]=this.i(P)|C.i(P);return new o(b,this.h|C.h)},t.xor=function(C){for(var T=Math.max(this.g.length,C.g.length),b=[],P=0;P<T;P++)b[P]=this.i(P)^C.i(P);return new o(b,this.h^C.h)};function De(C){for(var T=C.g.length+1,b=[],P=0;P<T;P++)b[P]=C.i(P)<<1|C.i(P-1)>>>31;return new o(b,C.h)}function pe(C,T){var b=T>>5;T%=32;for(var P=C.g.length-b,O=[],D=0;D<P;D++)O[D]=0<T?C.i(D+b)>>>T|C.i(D+b+1)<<32-T:C.i(D+b);return new o(O,C.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,TE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,ms=o}).apply(typeof ug<"u"?ug:typeof self<"u"?self:typeof window<"u"?window:{});var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wE,la,AE,ol,Gh,IE,bE,RE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,g){return a==Array.prototype||a==Object.prototype||(a[h]=g.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof jc=="object"&&jc];for(var h=0;h<a.length;++h){var g=a[h];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var g=r;a=a.split(".");for(var E=0;E<a.length-1;E++){var N=a[E];if(!(N in g))break e;g=g[N]}a=a[a.length-1],E=g[a],h=h(E),h!=E&&h!=null&&e(g,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var g=0,E=!1,N={next:function(){if(!E&&g<a.length){var U=g++;return{value:h(U,a[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function m(a,h,g){return a.call.apply(a.bind,arguments)}function _(a,h,g){if(!a)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,E),a.apply(h,N)}}return function(){return a.apply(h,arguments)}}function v(a,h,g){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:_,v.apply(null,arguments)}function S(a,h){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),a.apply(this,E)}}function V(a,h){function g(){}g.prototype=h.prototype,a.aa=h.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(E,N,U){for(var ne=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)ne[Be-2]=arguments[Be];return h.prototype[N].apply(E,ne)}}function B(a){const h=a.length;if(0<h){const g=Array(h);for(let E=0;E<h;E++)g[E]=a[E];return g}return[]}function $(a,h){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(u(E)){const N=a.length||0,U=E.length||0;a.length=N+U;for(let ne=0;ne<U;ne++)a[N+ne]=E[ne]}else a.push(E)}}class G{constructor(h,g){this.i=h,this.j=g,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function ee(a){return/^[\s\xa0]*$/.test(a)}function Q(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function oe(a){return oe[" "](a),a}oe[" "]=function(){};var De=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function pe(a,h,g){for(const E in a)h.call(g,a[E],E,a)}function C(a,h){for(const g in a)h.call(void 0,a[g],g,a)}function T(a){const h={};for(const g in a)h[g]=a[g];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,h){let g,E;for(let N=1;N<arguments.length;N++){E=arguments[N];for(g in E)a[g]=E[g];for(let U=0;U<b.length;U++)g=b[U],Object.prototype.hasOwnProperty.call(E,g)&&(a[g]=E[g])}}function O(a){var h=1;a=a.split(":");const g=[];for(;0<h&&a.length;)g.push(a.shift()),h--;return a.length&&g.push(a.join(":")),g}function D(a){l.setTimeout(()=>{throw a},0)}function R(){var a=bt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class ht{constructor(){this.h=this.g=null}add(h,g){const E=sn.get();E.set(h,g),this.h?this.h.next=E:this.g=E,this.h=E}}var sn=new G(()=>new Ze,a=>a.reset());class Ze{constructor(){this.next=this.g=this.h=null}set(h,g){this.h=h,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,Ne=!1,bt=new ht,_n=()=>{const a=l.Promise.resolve(void 0);Me=()=>{a.then(Xt)}};var Xt=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(g){D(g)}var h=sn;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ne=!1};function Ye(){this.s=this.s,this.C=this.C}Ye.prototype.s=!1,Ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var mr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};l.addEventListener("test",g,h),l.removeEventListener("test",g,h)}catch{}return a}();function q(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,E=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(De){e:{try{oe(h.nodeName);var N=!0;break e}catch{}N=!1}N||(h=null)}}else g=="mouseover"?h=a.fromElement:g=="mouseout"&&(h=a.toElement);this.relatedTarget=h,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ie[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&q.aa.h.call(this)}}V(q,Qe);var ie={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var se="closure_listenable_"+(1e6*Math.random()|0),L=0;function Ce(a,h,g,E,N){this.listener=a,this.proxy=null,this.src=h,this.type=g,this.capture=!!E,this.ha=N,this.key=++L,this.da=this.fa=!1}function We(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function w(a){this.src=a,this.g={},this.h=0}w.prototype.add=function(a,h,g,E,N){var U=a.toString();a=this.g[U],a||(a=this.g[U]=[],this.h++);var ne=x(a,h,E,N);return-1<ne?(h=a[ne],g||(h.fa=!1)):(h=new Ce(h,this.src,U,!!E,N),h.fa=g,a.push(h)),h};function I(a,h){var g=h.type;if(g in a.g){var E=a.g[g],N=Array.prototype.indexOf.call(E,h,void 0),U;(U=0<=N)&&Array.prototype.splice.call(E,N,1),U&&(We(h),a.g[g].length==0&&(delete a.g[g],a.h--))}}function x(a,h,g,E){for(var N=0;N<a.length;++N){var U=a[N];if(!U.da&&U.listener==h&&U.capture==!!g&&U.ha==E)return N}return-1}var K="closure_lm_"+(1e6*Math.random()|0),F={};function Z(a,h,g,E,N){if(Array.isArray(h)){for(var U=0;U<h.length;U++)Z(a,h[U],g,E,N);return null}return g=Ie(g),a&&a[se]?a.K(h,g,d(E)?!!E.capture:!1,N):j(a,h,g,!1,E,N)}function j(a,h,g,E,N,U){if(!h)throw Error("Invalid event type");var ne=d(N)?!!N.capture:!!N,Be=fe(a);if(Be||(a[K]=Be=new w(a)),g=Be.add(h,g,E,ne,U),g.proxy)return g;if(E=J(),g.proxy=E,E.src=a,E.listener=g,a.addEventListener)mr||(N=ne),N===void 0&&(N=!1),a.addEventListener(h.toString(),E,N);else if(a.attachEvent)a.attachEvent(he(h.toString()),E);else if(a.addListener&&a.removeListener)a.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function J(){function a(g){return h.call(a.src,a.listener,g)}const h=le;return a}function re(a,h,g,E,N){if(Array.isArray(h))for(var U=0;U<h.length;U++)re(a,h[U],g,E,N);else E=d(E)?!!E.capture:!!E,g=Ie(g),a&&a[se]?(a=a.i,h=String(h).toString(),h in a.g&&(U=a.g[h],g=x(U,g,E,N),-1<g&&(We(U[g]),Array.prototype.splice.call(U,g,1),U.length==0&&(delete a.g[h],a.h--)))):a&&(a=fe(a))&&(h=a.g[h.toString()],a=-1,h&&(a=x(h,g,E,N)),(g=-1<a?h[a]:null)&&Y(g))}function Y(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[se])I(h.i,a);else{var g=a.type,E=a.proxy;h.removeEventListener?h.removeEventListener(g,E,a.capture):h.detachEvent?h.detachEvent(he(g),E):h.addListener&&h.removeListener&&h.removeListener(E),(g=fe(h))?(I(g,a),g.h==0&&(g.src=null,h[K]=null)):We(a)}}}function he(a){return a in F?F[a]:F[a]="on"+a}function le(a,h){if(a.da)a=!0;else{h=new q(h,this);var g=a.listener,E=a.ha||a.src;a.fa&&Y(a),a=g.call(E,h)}return a}function fe(a){return a=a[K],a instanceof w?a:null}var me="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ie(a){return typeof a=="function"?a:(a[me]||(a[me]=function(h){return a.handleEvent(h)}),a[me])}function ge(){Ye.call(this),this.i=new w(this),this.M=this,this.F=null}V(ge,Ye),ge.prototype[se]=!0,ge.prototype.removeEventListener=function(a,h,g,E){re(this,a,h,g,E)};function ve(a,h){var g,E=a.F;if(E)for(g=[];E;E=E.F)g.push(E);if(a=a.M,E=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var N=h;h=new Qe(E,a),P(h,N)}if(N=!0,g)for(var U=g.length-1;0<=U;U--){var ne=h.g=g[U];N=st(ne,E,!0,h)&&N}if(ne=h.g=a,N=st(ne,E,!0,h)&&N,N=st(ne,E,!1,h)&&N,g)for(U=0;U<g.length;U++)ne=h.g=g[U],N=st(ne,E,!1,h)&&N}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var g=a.g[h],E=0;E<g.length;E++)We(g[E]);delete a.g[h],a.h--}}this.F=null},ge.prototype.K=function(a,h,g,E){return this.i.add(String(a),h,!1,g,E)},ge.prototype.L=function(a,h,g,E){return this.i.add(String(a),h,!0,g,E)};function st(a,h,g,E){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var N=!0,U=0;U<h.length;++U){var ne=h[U];if(ne&&!ne.da&&ne.capture==g){var Be=ne.listener,vt=ne.ha||ne.src;ne.fa&&I(a.i,ne),N=Be.call(vt,E)!==!1&&N}}return N&&!E.defaultPrevented}function Ut(a,h,g){if(typeof a=="function")g&&(a=v(a,g));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function bn(a){a.g=Ut(()=>{a.g=null,a.i&&(a.i=!1,bn(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Ai extends Ye{constructor(h,g){super(),this.m=h,this.l=g,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:bn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function on(a){Ye.call(this),this.h=a,this.g={}}V(on,Ye);var Ss=[];function ot(a){pe(a.g,function(h,g){this.g.hasOwnProperty(g)&&Y(h)},a),a.g={}}on.prototype.N=function(){on.aa.N.call(this),ot(this)},on.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ft=l.JSON.stringify,Rn=l.JSON.parse,wu=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function So(){}So.prototype.h=null;function tc(a){return a.h||(a.h=a.i())}function nc(){}var Cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Co(){Qe.call(this,"d")}V(Co,Qe);function Po(){Qe.call(this,"c")}V(Po,Qe);var gr={},rc=null;function Ii(){return rc=rc||new ge}gr.La="serverreachability";function sc(a){Qe.call(this,gr.La,a)}V(sc,Qe);function Kn(a){const h=Ii();ve(h,new sc(h))}gr.STAT_EVENT="statevent";function ic(a,h){Qe.call(this,gr.STAT_EVENT,a),this.stat=h}V(ic,Qe);function $t(a){const h=Ii();ve(h,new ic(h,a))}gr.Ma="timingevent";function Sn(a,h){Qe.call(this,gr.Ma,a),this.size=h}V(Sn,Qe);function Hr(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ps(){this.g=!0}Ps.prototype.xa=function(){this.g=!1};function Au(a,h,g,E,N,U){a.info(function(){if(a.g)if(U)for(var ne="",Be=U.split("&"),vt=0;vt<Be.length;vt++){var ke=Be[vt].split("=");if(1<ke.length){var ft=ke[0];ke=ke[1];var Ct=ft.split("_");ne=2<=Ct.length&&Ct[1]=="type"?ne+(ft+"="+ke+"&"):ne+(ft+"=redacted&")}}else ne=null;else ne=U;return"XMLHTTP REQ ("+E+") [attempt "+N+"]: "+h+`
`+g+`
`+ne})}function Iu(a,h,g,E,N,U,ne){a.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+N+"]: "+h+`
`+g+`
`+U+" "+ne})}function yn(a,h,g,E){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Kr(a,g)+(E?" "+E:"")})}function qr(a,h){a.info(function(){return"TIMEOUT: "+h})}Ps.prototype.info=function(){};function Kr(a,h){if(!a.g)return h;if(!h)return null;try{var g=JSON.parse(h);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var E=g[a];if(!(2>E.length)){var N=E[1];if(Array.isArray(N)&&!(1>N.length)){var U=N[0];if(U!="noop"&&U!="stop"&&U!="close")for(var ne=1;ne<N.length;ne++)N[ne]=""}}}}return Ft(g)}catch{return h}}var _r={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},oc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Os;function bi(){}V(bi,So),bi.prototype.g=function(){return new XMLHttpRequest},bi.prototype.i=function(){return{}},Os=new bi;function Wn(a,h,g,E){this.j=a,this.i=h,this.l=g,this.R=E||1,this.U=new on(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ac}function ac(){this.i=null,this.g="",this.h=!1}var cc={},Oo={};function No(a,h,g){a.L=1,a.v=Pn(Cn(h)),a.m=g,a.P=!0,Do(a,null)}function Do(a,h){a.F=Date.now(),Ri(a),a.A=Cn(a.v);var g=a.A,E=a.R;Array.isArray(E)||(E=[String(E)]),Bt(g.i,"t",E),a.C=0,g=a.j.J,a.h=new ac,a.g=Xr(a.j,g?h:null,!a.m),0<a.O&&(a.M=new Ai(v(a.Y,a,a.g),a.O)),h=a.U,g=a.g,E=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Ss[0]=N.toString()),N=Ss);for(var U=0;U<N.length;U++){var ne=Z(g,N[U],E||h.handleEvent,!1,h.h||h);if(!ne)break;h.g[ne.key]=ne}h=a.H?T(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Kn(),Au(a.i,a.u,a.A,a.l,a.R,a.m)}Wn.prototype.ca=function(a){a=a.target;const h=this.M;h&&_t(a)==3?h.j():this.Y(a)},Wn.prototype.Y=function(a){try{if(a==this.g)e:{const Ct=_t(this.g);var h=this.g.Ba();const Jn=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||Ht(this.g)))){this.J||Ct!=4||h==7||(h==8||0>=Jn?Kn(3):Kn(2)),ko(this);var g=this.g.Z();this.X=g;t:if(Ns(this)){var E=Ht(this.g);a="";var N=E.length,U=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),Ds(this);var ne="";break t}this.h.i=new l.TextDecoder}for(h=0;h<N;h++)this.h.h=!0,a+=this.h.i.decode(E[h],{stream:!(U&&h==N-1)});E.length=0,this.h.g+=a,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=g==200,Iu(this.i,this.u,this.A,this.l,this.R,Ct,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,vt=this.g;if((Be=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(Be)){var ke=Be;break t}}ke=null}if(g=ke)yn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Si(this,g);else{this.o=!1,this.s=3,$t(12),zn(this),Ds(this);break e}}if(this.P){g=!0;let fn;for(;!this.J&&this.C<ne.length;)if(fn=bu(this,ne),fn==Oo){Ct==4&&(this.s=4,$t(14),g=!1),yn(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==cc){this.s=4,$t(15),yn(this.i,this.l,ne,"[Invalid Chunk]"),g=!1;break}else yn(this.i,this.l,fn,null),Si(this,fn);if(Ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||ne.length!=0||this.h.h||(this.s=1,$t(16),g=!1),this.o=this.o&&g,!g)yn(this.i,this.l,ne,"[Invalid Chunked Response]"),zn(this),Ds(this);else if(0<ne.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Ms(ft),ft.M=!0,$t(11))}}else yn(this.i,this.l,ne,null),Si(this,ne);Ct==4&&zn(this),this.o&&!this.J&&(Ct==4?vc(this.j,this):(this.o=!1,Ri(this)))}else wr(this.g),g==400&&0<ne.indexOf("Unknown SID")?(this.s=3,$t(12)):(this.s=0,$t(13)),zn(this),Ds(this)}}}catch{}finally{}};function Ns(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function bu(a,h){var g=a.C,E=h.indexOf(`
`,g);return E==-1?Oo:(g=Number(h.substring(g,E)),isNaN(g)?cc:(E+=1,E+g>h.length?Oo:(h=h.slice(E,E+g),a.C=E+g,h)))}Wn.prototype.cancel=function(){this.J=!0,zn(this)};function Ri(a){a.S=Date.now()+a.I,lc(a,a.I)}function lc(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Hr(v(a.ba,a),h)}function ko(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Wn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(qr(this.i,this.A),this.L!=2&&(Kn(),$t(17)),zn(this),this.s=2,Ds(this)):lc(this,this.S-a)};function Ds(a){a.j.G==0||a.J||vc(a.j,a)}function zn(a){ko(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ot(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Si(a,h){try{var g=a.j;if(g.G!=0&&(g.g==a||Lo(g.h,a))){if(!a.K&&Lo(g.h,a)&&g.G==3){try{var E=g.Da.g.parse(h)}catch{E=null}if(Array.isArray(E)&&E.length==3){var N=E;if(N[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)an(g),ki(g);else break e;Qn(g),$t(18)}}else g.za=N[1],0<g.za-g.T&&37500>N[2]&&g.F&&g.v==0&&!g.C&&(g.C=Hr(v(g.Za,g),6e3));if(1>=fc(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else vn(g,11)}else if((a.K||g.g==a)&&an(g),!ee(h))for(N=g.Da.g.parse(h),h=0;h<N.length;h++){let ke=N[h];if(g.T=ke[0],ke=ke[1],g.G==2)if(ke[0]=="c"){g.K=ke[1],g.ia=ke[2];const ft=ke[3];ft!=null&&(g.la=ft,g.j.info("VER="+g.la));const Ct=ke[4];Ct!=null&&(g.Aa=Ct,g.j.info("SVER="+g.Aa));const Jn=ke[5];Jn!=null&&typeof Jn=="number"&&0<Jn&&(E=1.5*Jn,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const fn=a.g;if(fn){const br=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(br){var U=E.h;U.g||br.indexOf("spdy")==-1&&br.indexOf("quic")==-1&&br.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Vo(U,U.h),U.h=null))}if(E.D){const Yo=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;Yo&&(E.ya=Yo,qe(E.I,E.D,Yo))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var ne=a;if(E.qa=Tc(E,E.J?E.ia:null,E.W),ne.K){dc(E.h,ne);var Be=ne,vt=E.L;vt&&(Be.I=vt),Be.B&&(ko(Be),Ri(Be)),E.g=ne}else qo(E);0<g.i.length&&Jt(g)}else ke[0]!="stop"&&ke[0]!="close"||vn(g,7);else g.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?vn(g,7):Ho(g):ke[0]!="noop"&&g.l&&g.l.ta(ke),g.v=0)}}Kn(4)}catch{}}var Ru=class{constructor(a,h){this.g=a,this.map=h}};function uc(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hc(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fc(a){return a.h?1:a.g?a.g.size:0}function Lo(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Vo(a,h){a.g?a.g.add(h):a.h=h}function dc(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}uc.prototype.cancel=function(){if(this.i=pc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function pc(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const g of a.g.values())h=h.concat(g.D);return h}return B(a.i)}function Wr(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],g=a.length,E=0;E<g;E++)h.push(a[E]);return h}h=[],g=0;for(E in a)h[g++]=a[E];return h}function Su(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var g=0;g<a;g++)h.push(g);return h}h=[],g=0;for(const E in a)h[g++]=E;return h}}}function Cu(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var g=Su(a),E=Wr(a),N=E.length,U=0;U<N;U++)h.call(void 0,E[U],g&&g[U],a)}var zr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pu(a,h){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var E=a[g].indexOf("="),N=null;if(0<=E){var U=a[g].substring(0,E);N=a[g].substring(E+1)}else U=a[g];h(U,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function yr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof yr){this.h=a.h,Ci(this,a.j),this.o=a.o,this.g=a.g,Pi(this,a.s),this.l=a.l;var h=a.i,g=new Ls;g.i=h.i,h.g&&(g.g=new Map(h.g),g.h=h.h),mc(this,g),this.m=a.m}else a&&(h=String(a).match(zr))?(this.h=!1,Ci(this,h[1]||"",!0),this.o=Gn(h[2]||""),this.g=Gn(h[3]||"",!0),Pi(this,h[4]),this.l=Gn(h[5]||"",!0),mc(this,h[6]||"",!0),this.m=Gn(h[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}yr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ks(h,gc,!0),":");var g=this.g;return(g||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ks(h,gc,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push(ks(g,g.charAt(0)=="/"?Du:Nu,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",ks(g,xo)),a.join("")};function Cn(a){return new yr(a)}function Ci(a,h,g){a.j=g?Gn(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Pi(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function mc(a,h,g){h instanceof Ls?(a.i=h,Nt(a.i,a.h)):(g||(h=ks(h,ku)),a.i=new Ls(h,a.h))}function qe(a,h,g){a.i.set(h,g)}function Pn(a){return qe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gn(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,h,g){return typeof a=="string"?(a=encodeURI(a).replace(h,Ou),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ou(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gc=/[#\/\?@]/g,Nu=/[#\?:]/g,Du=/[#\?]/g,ku=/[#\?@]/g,xo=/#/g;function Ls(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&Pu(a.i,function(h,g){a.add(decodeURIComponent(h.replace(/\+/g," ")),g)}))}t=Ls.prototype,t.add=function(a,h){Yn(this),this.i=null,a=gt(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(h),this.h+=1,this};function Er(a,h){Yn(a),h=gt(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Rt(a,h){return Yn(a),h=gt(a,h),a.g.has(h)}t.forEach=function(a,h){Yn(this),this.g.forEach(function(g,E){g.forEach(function(N){a.call(h,N,E,this)},this)},this)},t.na=function(){Yn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),g=[];for(let E=0;E<h.length;E++){const N=a[E];for(let U=0;U<N.length;U++)g.push(h[E])}return g},t.V=function(a){Yn(this);let h=[];if(typeof a=="string")Rt(this,a)&&(h=h.concat(this.g.get(gt(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)h=h.concat(a[g])}return h},t.set=function(a,h){return Yn(this),this.i=null,a=gt(this,a),Rt(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Bt(a,h,g){Er(a,h),0<g.length&&(a.i=null,a.g.set(gt(a,h),B(g)),a.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var g=0;g<h.length;g++){var E=h[g];const U=encodeURIComponent(String(E)),ne=this.V(E);for(E=0;E<ne.length;E++){var N=U;ne[E]!==""&&(N+="="+encodeURIComponent(String(ne[E]))),a.push(N)}}return this.i=a.join("&")};function gt(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Nt(a,h){h&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(g,E){var N=E.toLowerCase();E!=N&&(Er(this,E),Bt(this,N,g))},a)),a.j=h}function Oi(a,h){const g=new Ps;if(l.Image){const E=new Image;E.onload=S(jt,g,"TestLoadImage: loaded",!0,h,E),E.onerror=S(jt,g,"TestLoadImage: error",!1,h,E),E.onabort=S(jt,g,"TestLoadImage: abort",!1,h,E),E.ontimeout=S(jt,g,"TestLoadImage: timeout",!1,h,E),l.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=a}else h(!1)}function Gr(a,h){const g=new Ps,E=new AbortController,N=setTimeout(()=>{E.abort(),jt(g,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:E.signal}).then(U=>{clearTimeout(N),U.ok?jt(g,"TestPingServer: ok",!0,h):jt(g,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),jt(g,"TestPingServer: error",!1,h)})}function jt(a,h,g,E,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),E(g)}catch{}}function Yr(){this.g=new wu}function _c(a,h,g){const E=g||"";try{Cu(a,function(N,U){let ne=N;d(N)&&(ne=Ft(N)),h.push(E+U+"="+encodeURIComponent(ne))})}catch(N){throw h.push(E+"type="+encodeURIComponent("_badmap")),N}}function Qr(a){this.l=a.Ub||null,this.j=a.eb||!1}V(Qr,So),Qr.prototype.g=function(){return new On(this.l,this.j)},Qr.prototype.i=function(a){return function(){return a}}({});function On(a,h){ge.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(On,ge),t=On.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Tr(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mo(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mo(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?vr(this):Tr(this),this.readyState==3&&Mo(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,vr(this))},t.Qa=function(a){this.g&&(this.response=a,vr(this))},t.ga=function(){this.g&&vr(this)};function vr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Tr(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var g=h.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=h.next();return a.join(`\r
`)};function Tr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(On.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Uo(a){let h="";return pe(a,function(g,E){h+=E,h+=":",h+=g,h+=`\r
`}),h}function Ni(a,h,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=Uo(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):qe(a,h,g))}function et(a){ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(et,ge);var yc=/^https?$/i,Ec=["POST","PUT"];t=et.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Os.g(),this.v=this.o?tc(this.o):tc(Os),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(U){Fo(this,U);return}if(a=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var N in E)g.set(N,E[N]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())g.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(U=>U.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ec,h,void 0))||E||N||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,ne]of g)this.g.setRequestHeader(U,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jo(this),this.u=!0,this.g.send(a),this.u=!1}catch(U){Fo(this,U)}};function Fo(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,$o(a),Vs(a)}function $o(a){a.A||(a.A=!0,ve(a,"complete"),ve(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ve(this,"complete"),ve(this,"abort"),Vs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vs(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bo(this):this.bb())},t.bb=function(){Bo(this)};function Bo(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_t(a)!=4||a.Z()!=2)){if(a.u&&_t(a)==4)Ut(a.Ea,0,a);else if(ve(a,"readystatechange"),_t(a)==4){a.h=!1;try{const ne=a.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var g;if(!(g=h)){var E;if(E=ne===0){var N=String(a.D).match(zr)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),E=!yc.test(N?N.toLowerCase():"")}g=E}if(g)ve(a,"complete"),ve(a,"success");else{a.m=6;try{var U=2<_t(a)?a.g.statusText:""}catch{U=""}a.l=U+" ["+a.Z()+"]",$o(a)}}finally{Vs(a)}}}}function Vs(a,h){if(a.g){jo(a);const g=a.g,E=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ve(a,"ready");try{g.onreadystatechange=E}catch{}}}function jo(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _t(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Rn(h)}};function Ht(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wr(a){const h={};a=(a.g&&2<=_t(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<a.length;E++){if(ee(a[E]))continue;var g=O(a[E]);const N=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const U=h[N]||[];h[N]=U,U.push(g)}C(h,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function St(a,h,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||h}function Di(a){this.Aa=0,this.i=[],this.j=new Ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=St("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=St("baseRetryDelayMs",5e3,a),this.cb=St("retryDelaySeedMs",1e4,a),this.Wa=St("forwardChannelMaxRetries",2,a),this.wa=St("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new uc(a&&a.concurrentRequestLimit),this.Da=new Yr,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Di.prototype,t.la=8,t.G=1,t.connect=function(a,h,g,E){$t(0),this.W=a,this.H=h||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=Tc(this,null,this.W),Jt(this)};function Ho(a){if(Li(a),a.G==3){var h=a.U++,g=Cn(a.I);if(qe(g,"SID",a.K),qe(g,"RID",h),qe(g,"TYPE","terminate"),En(a,g),h=new Wn(a,a.j,h),h.L=2,h.v=Pn(Cn(g)),g=!1,l.navigator&&l.navigator.sendBeacon)try{g=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!g&&l.Image&&(new Image().src=h.v,g=!0),g||(h.g=Xr(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ri(h)}Wo(a)}function ki(a){a.g&&(Ms(a),a.g.cancel(),a.g=null)}function Li(a){ki(a),a.u&&(l.clearTimeout(a.u),a.u=null),an(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Jt(a){if(!hc(a.h)&&!a.s){a.s=!0;var h=a.Ga;Me||_n(),Ne||(Me(),Ne=!0),bt.add(h,a),a.B=0}}function Ar(a,h){return fc(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Hr(v(a.Ga,a,h),Nn(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Wn(this,this.j,a);let U=this.o;if(this.S&&(U?(U=T(U),P(U,this.S)):U=this.S),this.m!==null||this.O||(N.H=U,U=null),this.P)e:{for(var h=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(h+=E,4096<h){h=g;break e}if(h===4096||g===this.i.length-1){h=g+1;break e}}h=1e3}else h=1e3;h=Vi(this,N,h),g=Cn(this.I),qe(g,"RID",a),qe(g,"CVER",22),this.D&&qe(g,"X-HTTP-Session-Id",this.D),En(this,g),U&&(this.O?h="headers="+encodeURIComponent(String(Uo(U)))+"&"+h:this.m&&Ni(g,this.m,U)),Vo(this.h,N),this.Ua&&qe(g,"TYPE","init"),this.P?(qe(g,"$req",h),qe(g,"SID","null"),N.T=!0,No(N,g,null)):No(N,g,h),this.G=2}}else this.G==3&&(a?xs(this,a):this.i.length==0||hc(this.h)||xs(this))};function xs(a,h){var g;h?g=h.l:g=a.U++;const E=Cn(a.I);qe(E,"SID",a.K),qe(E,"RID",g),qe(E,"AID",a.T),En(a,E),a.m&&a.o&&Ni(E,a.m,a.o),g=new Wn(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Vi(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vo(a.h,g),No(g,E,h)}function En(a,h){a.H&&pe(a.H,function(g,E){qe(h,E,g)}),a.l&&Cu({},function(g,E){qe(h,E,g)})}function Vi(a,h,g){g=Math.min(a.i.length,g);var E=a.l?v(a.l.Na,a.l,a):null;e:{var N=a.i;let U=-1;for(;;){const ne=["count="+g];U==-1?0<g?(U=N[0].g,ne.push("ofs="+U)):U=0:ne.push("ofs="+U);let Be=!0;for(let vt=0;vt<g;vt++){let ke=N[vt].g;const ft=N[vt].map;if(ke-=U,0>ke)U=Math.max(0,N[vt].g-100),Be=!1;else try{_c(ft,ne,"req"+ke+"_")}catch{E&&E(ft)}}if(Be){E=ne.join("&");break e}}}return a=a.i.splice(0,g),h.D=a,E}function qo(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Me||_n(),Ne||(Me(),Ne=!0),bt.add(h,a),a.v=0}}function Qn(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Hr(v(a.Fa,a),Nn(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ko(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Hr(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,$t(10),ki(this),Ko(this))};function Ms(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ko(a){a.g=new Wn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Cn(a.qa);qe(h,"RID","rpc"),qe(h,"SID",a.K),qe(h,"AID",a.T),qe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&qe(h,"TO",a.ja),qe(h,"TYPE","xmlhttp"),En(a,h),a.m&&a.o&&Ni(h,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=Pn(Cn(h)),g.m=null,g.P=!0,Do(g,a)}t.Za=function(){this.C!=null&&(this.C=null,ki(this),Qn(this),$t(19))};function an(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vc(a,h){var g=null;if(a.g==h){an(a),Ms(a),a.g=null;var E=2}else if(Lo(a.h,h))g=h.D,dc(a.h,h),E=1;else return;if(a.G!=0){if(h.o)if(E==1){g=h.m?h.m.length:0,h=Date.now()-h.F;var N=a.B;E=Ii(),ve(E,new Sn(E,g)),Jt(a)}else qo(a);else if(N=h.s,N==3||N==0&&0<h.X||!(E==1&&Ar(a,h)||E==2&&Qn(a)))switch(g&&0<g.length&&(h=a.h,h.i=h.i.concat(g)),N){case 1:vn(a,5);break;case 4:vn(a,10);break;case 3:vn(a,6);break;default:vn(a,2)}}}function Nn(a,h){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*h}function vn(a,h){if(a.j.info("Error code "+h),h==2){var g=v(a.fb,a),E=a.Xa;const N=!E;E=new yr(E||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ci(E,"https"),Pn(E),N?Oi(E.toString(),g):Gr(E.toString(),g)}else $t(2);a.G=0,a.l&&a.l.sa(h),Wo(a),Li(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),$t(2)):(this.j.info("Failed to ping google.com"),$t(1))};function Wo(a){if(a.G=0,a.ka=[],a.l){const h=pc(a.h);(h.length!=0||a.i.length!=0)&&($(a.ka,h),$(a.ka,a.i),a.h.i.length=0,B(a.i),a.i.length=0),a.l.ra()}}function Tc(a,h,g){var E=g instanceof yr?Cn(g):new yr(g);if(E.g!="")h&&(E.g=h+"."+E.g),Pi(E,E.s);else{var N=l.location;E=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;var U=new yr(null);E&&Ci(U,E),h&&(U.g=h),N&&Pi(U,N),g&&(U.l=g),E=U}return g=a.D,h=a.ya,g&&h&&qe(E,g,h),qe(E,"VER",a.la),En(a,E),E}function Xr(a,h,g){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new et(new Qr({eb:g})):new et(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xi(){}t=xi.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xn(){}Xn.prototype.g=function(a,h){return new Zt(a,h)};function Zt(a,h){ge.call(this),this.g=new Di(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!ee(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!ee(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ir(this)}V(Zt,ge),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){Ho(this.g)},Zt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=Ft(a),a=g);h.i.push(new Ru(h.Ya++,a)),h.G==3&&Jt(h)},Zt.prototype.N=function(){this.g.l=null,delete this.j,Ho(this.g),delete this.g,Zt.aa.N.call(this)};function zo(a){Co.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const g in h){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}V(zo,Co);function Go(){Po.call(this),this.status=1}V(Go,Po);function Ir(a){this.g=a}V(Ir,xi),Ir.prototype.ua=function(){ve(this.g,"a")},Ir.prototype.ta=function(a){ve(this.g,new zo(a))},Ir.prototype.sa=function(a){ve(this.g,new Go)},Ir.prototype.ra=function(){ve(this.g,"b")},Xn.prototype.createWebChannel=Xn.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,RE=function(){return new Xn},bE=function(){return Ii()},IE=gr,Gh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},_r.NO_ERROR=0,_r.TIMEOUT=8,_r.HTTP_ERROR=6,ol=_r,oc.COMPLETE="complete",AE=oc,nc.EventType=Cs,Cs.OPEN="a",Cs.CLOSE="b",Cs.ERROR="c",Cs.MESSAGE="d",ge.prototype.listen=ge.prototype.K,la=nc,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,wE=et}).apply(typeof jc<"u"?jc:typeof self<"u"?self:typeof window<"u"?window:{});const hg="@firebase/firestore",fg="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Nf("@firebase/firestore");function qi(){return mi.logLevel}function ae(t,...e){if(mi.logLevel<=Ve.DEBUG){const n=e.map(Kf);mi.debug(`Firestore (${To}): ${t}`,...n)}}function Ur(t,...e){if(mi.logLevel<=Ve.ERROR){const n=e.map(Kf);mi.error(`Firestore (${To}): ${t}`,...n)}}function lo(t,...e){if(mi.logLevel<=Ve.WARN){const n=e.map(Kf);mi.warn(`Firestore (${To}): ${t}`,...n)}}function Kf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,SE(t,r,n)}function SE(t,e,n){let r=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ur(r),new Error(r)}function He(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||SE(e,s,r)}function Ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends pr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Wt.UNAUTHENTICATED))}shutdown(){}}class tN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nN{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string",31837,{l:r}),new CE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new Wt(e)}}class rN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class sN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new rN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const r=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new dg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new dg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=oN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Se(t,e){return t<e?-1:t>e?1:0}function Yh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Se(r,s);{const i=PE(),o=aN(i.encode(pg(t,n)),i.encode(pg(e,n)));return o!==0?o:Se(r,s)}}n+=r>65535?2:1}return Se(t.length,e.length)}function pg(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function aN(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Se(t[n],e[n]);return Se(t.length,e.length)}function uo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=-62135596800,gg=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*gg);return new wt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<mg)throw new ce(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gg}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-mg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new wt(0,0))}static max(){return new Te(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="__name__";class nr{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ye(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=nr.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Se(e.length,n.length)}static compareSegments(e,n){const r=nr.isNumericId(e),s=nr.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?nr.extractNumericId(e).compare(nr.extractNumericId(n)):Yh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class rt extends nr{construct(e,n,r){return new rt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const cN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends nr{construct(e,n,r){return new Vt(e,n,r)}static isValidIdentifier(e){return cN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_g}static keyField(){return new Vt([_g])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ce(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ce(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ce(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(n)}static emptyPath(){return new Vt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(rt.fromString(e))}static fromName(e){return new de(rt.fromString(e).popFirst(5))}static empty(){return new de(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new rt(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=-1;function lN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Te.fromTimestamp(r===1e9?new wt(n+1,0):new wt(n,r));return new Es(s,de.empty(),e)}function uN(t){return new Es(t.readTime,t.key,La)}class Es{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Es(Te.min(),de.empty(),La)}static max(){return new Es(Te.max(),de.empty(),La)}}function hN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==fN)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ye(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(s=>s?W.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new W((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(m=>{o[d]=m,++l,l===i&&r(o)},m=>s(m))}})}static doWhile(e,n){return new W((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function pN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ao(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ou.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=-1;function au(t){return t==null}function Cl(t){return t===0&&1/t==-1/0}function mN(t){return typeof t=="number"&&Number.isInteger(t)&&!Cl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="";function gN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=yg(e)),e=_N(t.get(n),e);return yg(e)}function _N(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case NE:n+="";break;default:n+=i}}return n}function yg(t){return t+NE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function DE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){this.comparator=e,this.root=n||kt.EMPTY}insert(e,n){return new it(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new it(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hc(this.root,e,this.comparator,!0)}}class Hc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??kt.RED,this.left=s??kt.EMPTY,this.right=i??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new kt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return kt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ye(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ye(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ye(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw ye(57766)}get value(){throw ye(16141)}get color(){throw ye(16727)}get left(){throw ye(29726)}get right(){throw ye(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new kt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.comparator=e,this.data=new it(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vg(this.data.getIterator())}getIteratorFrom(e){return new vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new At(this.comparator);return n.data=e,n}}class vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new Fn([])}unionWith(e){let n=new At(Vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kE("Invalid base64 string: "+i):i}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const yN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vs(t){if(He(!!t,39018),typeof t=="string"){let e=0;const n=yN.exec(t);if(He(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:mt(t.seconds),nanos:mt(t.nanos)}}function mt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ts(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LE="server_timestamp",VE="__type__",xE="__previous_value__",ME="__local_write_time__";function zf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[VE])===null||n===void 0?void 0:n.stringValue)===LE}function cu(t){const e=t.mapValue.fields[xE];return zf(e)?cu(e):e}function Va(t){const e=vs(t.mapValue.fields[ME].timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n,r,s,i,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}const Pl="(default)";class xa{constructor(e,n){this.projectId=e,this.database=n||Pl}static empty(){return new xa("","")}get isDefaultDatabase(){return this.database===Pl}isEqual(e){return e instanceof xa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="__type__",vN="__max__",qc={mapValue:{}},FE="__vector__",Ol="value";function ws(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zf(t)?4:wN(t)?9007199254740991:TN(t)?10:11:ye(28295,{value:t})}function dr(t,e){if(t===e)return!0;const n=ws(t);if(n!==ws(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Va(t).isEqual(Va(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vs(s.timestampValue),l=vs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ts(s.bytesValue).isEqual(Ts(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return mt(s.geoPointValue.latitude)===mt(i.geoPointValue.latitude)&&mt(s.geoPointValue.longitude)===mt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return mt(s.integerValue)===mt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=mt(s.doubleValue),l=mt(i.doubleValue);return o===l?Cl(o)===Cl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return uo(t.arrayValue.values||[],e.arrayValue.values||[],dr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Eg(o)!==Eg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!dr(o[u],l[u])))return!1;return!0}(t,e);default:return ye(52216,{left:t})}}function Ma(t,e){return(t.values||[]).find(n=>dr(n,e))!==void 0}function ho(t,e){if(t===e)return 0;const n=ws(t),r=ws(e);if(n!==r)return Se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=mt(i.integerValue||i.doubleValue),u=mt(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Tg(t.timestampValue,e.timestampValue);case 4:return Tg(Va(t),Va(e));case 5:return Yh(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ts(i),u=Ts(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const m=Se(l[d],u[d]);if(m!==0)return m}return Se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Se(mt(i.latitude),mt(o.latitude));return l!==0?l:Se(mt(i.longitude),mt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return wg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,m;const _=i.fields||{},v=o.fields||{},S=(l=_[Ol])===null||l===void 0?void 0:l.arrayValue,V=(u=v[Ol])===null||u===void 0?void 0:u.arrayValue,B=Se(((d=S==null?void 0:S.values)===null||d===void 0?void 0:d.length)||0,((m=V==null?void 0:V.values)===null||m===void 0?void 0:m.length)||0);return B!==0?B:wg(S,V)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===qc.mapValue&&o===qc.mapValue)return 0;if(i===qc.mapValue)return 1;if(o===qc.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let _=0;_<u.length&&_<m.length;++_){const v=Yh(u[_],m[_]);if(v!==0)return v;const S=ho(l[u[_]],d[m[_]]);if(S!==0)return S}return Se(u.length,m.length)}(t.mapValue,e.mapValue);default:throw ye(23264,{Pe:n})}}function Tg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Se(t,e);const n=vs(t),r=vs(e),s=Se(n.seconds,r.seconds);return s!==0?s:Se(n.nanos,r.nanos)}function wg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ho(n[s],r[s]);if(i)return i}return Se(n.length,r.length)}function fo(t){return Qh(t)}function Qh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Qh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Qh(n.fields[o])}`;return s+"}"}(t.mapValue):ye(61005,{value:t})}function al(t){switch(ws(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=cu(t);return e?16+al(e):16;case 5:return 2*t.stringValue.length;case 6:return Ts(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+al(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ei(r.fields,(i,o)=>{s+=i.length+al(o)}),s}(t.mapValue);default:throw ye(13486,{value:t})}}function Ag(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xh(t){return!!t&&"integerValue"in t}function Gf(t){return!!t&&"arrayValue"in t}function Ig(t){return!!t&&"nullValue"in t}function bg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cl(t){return!!t&&"mapValue"in t}function TN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[UE])===null||n===void 0?void 0:n.stringValue)===FE}function ya(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ya(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ya(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===vN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.value=e}static empty(){return new wn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ya(n)}setAll(e){let n=Vt.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=ya(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());cl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];cl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ei(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wn(ya(this.value))}}function $E(t){const e=[];return Ei(t.fields,(n,r)=>{const s=new Vt([n]);if(cl(r)){const i=$E(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new zt(e,0,Te.min(),Te.min(),Te.min(),wn.empty(),0)}static newFoundDocument(e,n,r,s){return new zt(e,1,n,Te.min(),r,s,0)}static newNoDocument(e,n){return new zt(e,2,n,Te.min(),Te.min(),wn.empty(),0)}static newUnknownDocument(e,n){return new zt(e,3,n,Te.min(),Te.min(),wn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.position=e,this.inclusive=n}}function Rg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),n.key):r=ho(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function AN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{}class Et extends BE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bN(e,n,r):n==="array-contains"?new CN(e,r):n==="in"?new PN(e,r):n==="not-in"?new ON(e,r):n==="array-contains-any"?new NN(e,r):new Et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RN(e,r):new SN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ho(n,this.value)):n!==null&&ws(this.value)===ws(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends BE{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new qn(e,n)}matches(e){return jE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function jE(t){return t.op==="and"}function HE(t){return IN(t)&&jE(t)}function IN(t){for(const e of t.filters)if(e instanceof qn)return!1;return!0}function Jh(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+fo(t.value);if(HE(t))return t.filters.map(e=>Jh(e)).join(",");{const e=t.filters.map(n=>Jh(n)).join(",");return`${t.op}(${e})`}}function qE(t,e){return t instanceof Et?function(r,s){return s instanceof Et&&r.op===s.op&&r.field.isEqual(s.field)&&dr(r.value,s.value)}(t,e):t instanceof qn?function(r,s){return s instanceof qn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&qE(o,s.filters[l]),!0):!1}(t,e):void ye(19439)}function KE(t){return t instanceof Et?function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`}(t):t instanceof qn?function(n){return n.op.toString()+" {"+n.getFilters().map(KE).join(" ,")+"}"}(t):"Filter"}class bN extends Et{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class RN extends Et{constructor(e,n){super(e,"in",n),this.keys=WE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SN extends Et{constructor(e,n){super(e,"not-in",n),this.keys=WE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class CN extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gf(n)&&Ma(n.arrayValue,this.value)}}class PN extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ma(this.value.arrayValue,n)}}class ON extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ma(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ma(this.value.arrayValue,n)}}class NN extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ma(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Ie=null}}function Cg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new DN(t,e,n,r,s,i,o)}function Yf(t){const e=Ae(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Jh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),au(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),e.Ie=n}return e.Ie}function Qf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}function Zh(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function kN(t,e,n,r,s,i,o,l){return new Ya(t,e,n,r,s,i,o,l)}function Xf(t){return new Ya(t)}function Pg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zE(t){return t.collectionGroup!==null}function Ea(t){const e=Ae(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new At(Vt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Dl(i,r))}),n.has(Vt.keyField().canonicalString())||e.Ee.push(new Dl(Vt.keyField(),r))}return e.Ee}function ur(t){const e=Ae(t);return e.de||(e.de=LN(e,Ea(t))),e.de}function LN(t,e){if(t.limitType==="F")return Cg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Dl(s.field,i)});const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;return Cg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ef(t,e){const n=t.filters.concat([e]);return new Ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function tf(t,e,n){return new Ya(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lu(t,e){return Qf(ur(t),ur(e))&&t.limitType===e.limitType}function GE(t){return`${Yf(ur(t))}|lt:${t.limitType}`}function Ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>KE(s)).join(", ")}]`),au(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fo(s)).join(",")),`Target(${r})`}(ur(t))}; limitType=${t.limitType})`}function uu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):de.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ea(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=Rg(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Ea(r),s)||r.endAt&&!function(o,l,u){const d=Rg(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Ea(r),s))}(t,e)}function VN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YE(t){return(e,n)=>{let r=!1;for(const s of Ea(t)){const i=xN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xN(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?ho(u,d):ye(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ye(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ei(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return DE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new it(de.comparator);function Fr(){return MN}const QE=new it(de.comparator);function ua(...t){let e=QE;for(const n of t)e=e.insert(n.key,n);return e}function XE(t){let e=QE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ii(){return va()}function JE(){return va()}function va(){return new vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const UN=new it(de.comparator),FN=new At(de.comparator);function xe(...t){let e=FN;for(const n of t)e=e.add(n);return e}const $N=new At(Se);function BN(){return $N}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cl(e)?"-0":e}}function ZE(t){return{integerValue:""+t}}function jN(t,e){return mN(e)?ZE(e):Jf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this._=void 0}}function HN(t,e,n){return t instanceof Ua?function(s,i){const o={fields:{[VE]:{stringValue:LE},[ME]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zf(i)&&(i=cu(i)),i&&(o.fields[xE]=i),{mapValue:o}}(n,e):t instanceof Fa?tv(t,e):t instanceof $a?nv(t,e):function(s,i){const o=ev(s,i),l=Og(o)+Og(s.Re);return Xh(o)&&Xh(s.Re)?ZE(l):Jf(s.serializer,l)}(t,e)}function qN(t,e,n){return t instanceof Fa?tv(t,e):t instanceof $a?nv(t,e):n}function ev(t,e){return t instanceof kl?function(r){return Xh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ua extends hu{}class Fa extends hu{constructor(e){super(),this.elements=e}}function tv(t,e){const n=rv(e);for(const r of t.elements)n.some(s=>dr(s,r))||n.push(r);return{arrayValue:{values:n}}}class $a extends hu{constructor(e){super(),this.elements=e}}function nv(t,e){let n=rv(e);for(const r of t.elements)n=n.filter(s=>!dr(s,r));return{arrayValue:{values:n}}}class kl extends hu{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Og(t){return mt(t.integerValue||t.doubleValue)}function rv(t){return Gf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n){this.field=e,this.transform=n}}function WN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Fa&&s instanceof Fa||r instanceof $a&&s instanceof $a?uo(r.elements,s.elements,dr):r instanceof kl&&s instanceof kl?dr(r.Re,s.Re):r instanceof Ua&&s instanceof Ua}(t.transform,e.transform)}class zN{constructor(e,n){this.version=e,this.transformResults=n}}class jn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jn}static exists(e){return new jn(void 0,e)}static updateTime(e){return new jn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fu{}function sv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zf(t.key,jn.none()):new Qa(t.key,t.data,jn.none());{const n=t.data,r=wn.empty();let s=new At(Vt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Ti(t.key,r,new Fn(s.toArray()),jn.none())}}function GN(t,e,n){t instanceof Qa?function(s,i,o){const l=s.value.clone(),u=Dg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ti?function(s,i,o){if(!ll(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Dg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(iv(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ta(t,e,n,r){return t instanceof Qa?function(i,o,l,u){if(!ll(i.precondition,o))return l;const d=i.value.clone(),m=kg(i.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ti?function(i,o,l,u){if(!ll(i.precondition,o))return l;const d=kg(i.fieldTransforms,u,o),m=o.data;return m.setAll(iv(i)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(t,e,n,r):function(i,o,l){return ll(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function YN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ev(r.transform,s||null);i!=null&&(n===null&&(n=wn.empty()),n.set(r.field,i))}return n||null}function Ng(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&uo(r,s,(i,o)=>WN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qa extends fu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ti extends fu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dg(t,e,n){const r=new Map;He(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,qN(o,l,n[s]))}return r}function kg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,HN(i,o,e))}return r}class Zf extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QN extends fu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&GN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ta(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JE();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=sv(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),xe())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(n,r)=>Ng(n,r))&&uo(this.baseMutations,e.baseMutations,(n,r)=>Ng(n,r))}}class ed{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){He(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return UN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ed(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Ue;function eD(t){switch(t){case z.OK:return ye(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return ye(15467,{code:t})}}function ov(t){if(t===void 0)return Ur("GRPC error has no .code"),z.UNKNOWN;switch(t){case yt.OK:return z.OK;case yt.CANCELLED:return z.CANCELLED;case yt.UNKNOWN:return z.UNKNOWN;case yt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case yt.INTERNAL:return z.INTERNAL;case yt.UNAVAILABLE:return z.UNAVAILABLE;case yt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case yt.NOT_FOUND:return z.NOT_FOUND;case yt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case yt.ABORTED:return z.ABORTED;case yt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case yt.DATA_LOSS:return z.DATA_LOSS;default:return ye(39323,{code:t})}}(Ue=yt||(yt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=new ms([4294967295,4294967295],0);function Lg(t){const e=PE().encode(t),n=new TE;return n.update(e),new Uint8Array(n.digest())}function Vg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ms([n,r],0),new ms([s,i],0)]}class td{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ha(`Invalid padding: ${n}`);if(r<0)throw new ha(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ha(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ha(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=ms.fromNumber(this.pe)}we(e,n,r){let s=e.add(n.multiply(ms.fromNumber(r)));return s.compare(tD)===1&&(s=new ms([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Lg(e),[r,s]=Vg(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);if(!this.be(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new td(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=Lg(e),[r,s]=Vg(n);for(let i=0;i<this.hashCount;i++){const o=this.we(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ha extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new du(Te.min(),s,new it(Se),Fr(),xe())}}class Xa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xa(r,n,xe(),xe(),xe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r,s){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=s}}class av{constructor(e,n){this.targetId=e,this.Ce=n}}class cv{constructor(e,n,r=Mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class xg{constructor(){this.Fe=0,this.Me=Mg(),this.xe=Mt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=xe(),n=xe(),r=xe();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ye(38017,{changeType:i})}}),new Xa(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Mg()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,He(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class nD{constructor(e){this.ze=e,this.je=new Map,this.He=Fr(),this.Je=Kc(),this.Ye=Kc(),this.Ze=new it(Se)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:ye(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,s)=>{this.it(s)&&n(s)})}ot(e){const n=e.targetId,r=e.Ce.count,s=this._t(n);if(s){const i=s.target;if(Zh(i))if(r===0){const o=new de(i.path);this.tt(n,o,zt.newNoDocument(o,Te.min()))}else He(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),u=l?this.lt(l,e,o):1;if(u!==0){this.st(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ts(r).toUint8Array()}catch(u){if(u instanceof kE)return lo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new td(o,s,i)}catch(u){return lo(u instanceof ha?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,i,null),s++)}),s}It(e){const n=new Map;this.je.forEach((i,o)=>{const l=this._t(o);if(l){if(i.current&&Zh(l.target)){const u=new de(l.target.path);this.Et(u).has(o)||this.dt(o,u)||this.tt(o,u,zt.newNoDocument(u,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let r=xe();this.Ye.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this._t(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const s=new du(e,n,this.Ze,this.He,r);return this.He=Fr(),this.Je=Kc(),this.Ye=Kc(),this.Ze=new it(Se),s}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,n)?s.$e(n,1):s.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new xg,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new At(Se),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new At(Se),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new xg),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function Kc(){return new it(de.comparator)}function Mg(){return new it(de.comparator)}const rD={asc:"ASCENDING",desc:"DESCENDING"},sD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iD={and:"AND",or:"OR"};class oD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nf(t,e){return t.useProto3Json||au(e)?e:{value:e}}function Ll(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aD(t,e){return Ll(t,e.toTimestamp())}function hr(t){return He(!!t,49232),Te.fromTimestamp(function(n){const r=vs(n);return new wt(r.seconds,r.nanos)}(t))}function nd(t,e){return rf(t,e).canonicalString()}function rf(t,e){const n=function(s){return new rt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uv(t){const e=rt.fromString(t);return He(mv(e),10190,{key:e.toString()}),e}function sf(t,e){return nd(t.databaseId,e.path)}function gh(t,e){const n=uv(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(fv(n))}function hv(t,e){return nd(t.databaseId,e)}function cD(t){const e=uv(t);return e.length===4?rt.emptyPath():fv(e)}function of(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fv(t){return He(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ug(t,e,n){return{name:sf(t,e),fields:n.value.mapValue.fields}}function lD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ye(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(He(m===void 0||typeof m=="string",58123),Mt.fromBase64String(m||"")):(He(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Mt.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const m=d.code===void 0?z.UNKNOWN:ov(d.code);return new ce(m,d.message||"")}(o);n=new cv(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gh(t,r.document.name),i=hr(r.document.updateTime),o=r.document.createTime?hr(r.document.createTime):Te.min(),l=new wn({mapValue:{fields:r.document.fields}}),u=zt.newFoundDocument(s,i,o,l),d=r.targetIds||[],m=r.removedTargetIds||[];n=new ul(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gh(t,r.document),i=r.readTime?hr(r.readTime):Te.min(),o=zt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gh(t,r.document),i=r.removedTargetIds||[];n=new ul([],i,s,null)}else{if(!("filter"in e))return ye(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ZN(s,i),l=r.targetId;n=new av(l,o)}}return n}function uD(t,e){let n;if(e instanceof Qa)n={update:Ug(t,e.key,e.value)};else if(e instanceof Zf)n={delete:sf(t,e.key)};else if(e instanceof Ti)n={update:Ug(t,e.key,e.data),updateMask:ED(e.fieldMask)};else{if(!(e instanceof QN))return ye(16599,{ft:e.type});n={verify:sf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ua)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof $a)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof kl)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw ye(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:aD(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye(27497)}(t,e.precondition)),n}function hD(t,e){return t&&t.length>0?(He(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?hr(s.updateTime):hr(i);return o.isEqual(Te.min())&&(o=hr(i)),new zN(o,s.transformResults||[])}(n,e))):[]}function fD(t,e){return{documents:[hv(t,e.path)]}}function dD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hv(t,s);const i=function(d){if(d.length!==0)return pv(qn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Wi(v.field),direction:gD(v.dir)}}(m))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=nf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:n,parent:s}}function pD(t){let e=cD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1,65062);const m=n.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];n.where&&(i=function(_){const v=dv(_);return v instanceof qn&&HE(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(_){return _.map(v=>function(V){return new Dl(zi(V.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(_){let v;return v=typeof _=="object"?_.value:_,au(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(_){const v=!!_.before,S=_.values||[];return new Nl(S,v)}(n.startAt));let d=null;return n.endAt&&(d=function(_){const v=!_.before,S=_.values||[];return new Nl(S,v)}(n.endAt)),kN(e,s,o,i,l,"F",u,d)}function mD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ye(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zi(n.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zi(n.unaryFilter.field);return Et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zi(n.unaryFilter.field);return Et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=zi(n.unaryFilter.field);return Et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ye(61313);default:return ye(60726)}}(t):t.fieldFilter!==void 0?function(n){return Et.create(zi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ye(58110);default:return ye(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qn.create(n.compositeFilter.filters.map(r=>dv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ye(1026)}}(n.compositeFilter.op))}(t):ye(30097,{filter:t})}function gD(t){return rD[t]}function _D(t){return sD[t]}function yD(t){return iD[t]}function Wi(t){return{fieldPath:t.canonicalString()}}function zi(t){return Vt.fromServerFormat(t.fieldPath)}function pv(t){return t instanceof Et?function(n){if(n.op==="=="){if(bg(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NAN"}};if(Ig(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bg(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NAN"}};if(Ig(n.value))return{unaryFilter:{field:Wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(n.field),op:_D(n.op),value:n.value}}}(t):t instanceof qn?function(n){const r=n.getFilters().map(s=>pv(s));return r.length===1?r[0]:{compositeFilter:{op:yD(n.op),filters:r}}}(t):ye(54877,{filter:t})}function ED(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,r,s,i=Te.min(),o=Te.min(),l=Mt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new us(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new us(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new us(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e){this.wt=e}}function TD(t){const e=pD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this.yn=new AD}addToCollectionParentIndex(e,n){return this.yn.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(Es.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(Es.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class AD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new At(rt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new At(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gv=41943040;class ln{static withCacheSize(e){return new ln(e,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln.DEFAULT_COLLECTION_PERCENTILE=10,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ln.DEFAULT=new ln(gv,ln.DEFAULT_COLLECTION_PERCENTILE,ln.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ln.DISABLED=new ln(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new po(0)}static ir(){return new po(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="LruGarbageCollector",ID=1048576;function Bg([t,e],[n,r]){const s=Se(t,n);return s===0?Se(e,r):s}class bD{constructor(e){this.cr=e,this.buffer=new At(Bg),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Bg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class RD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){ae($g,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ao(n)?ae($g,"Ignoring IndexedDB error during garbage collection: ",n):await wo(n)}await this.Ir(3e5)})}}class SD{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return W.resolve(ou.le);const r=new bD(n);return this.Er.forEachTarget(e,s=>r.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>r.Pr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Fg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fg):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,s,i,o,l,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,o=Date.now(),this.nthSequenceNumber(e,s))).next(_=>(r=_,l=Date.now(),this.removeTargets(e,r,n))).next(_=>(i=_,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(d=Date.now(),qi()<=Ve.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:_})))}}function CD(t,e){return new SD(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(){this.changes=new vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ta(r.mutation,s,Fn.empty(),wt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,xe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=xe()){const s=ii();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ua();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ii();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,xe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Fr();const o=va(),l=function(){return va()}();return n.forEach((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Ti)?i=i.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Ta(m.mutation,d,m.mutation.getFieldMask(),wt.now())):o.set(d.key,Fn.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,m)=>o.set(d,m)),n.forEach((d,m)=>{var _;return l.set(d,new OD(m,(_=o.get(d))!==null&&_!==void 0?_:null))}),l))}recalculateAndSaveOverlays(e,n){const r=va();let s=new it((o,l)=>o-l),i=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let m=r.get(u)||Fn.empty();m=l.applyToLocalView(d,m),r.set(u,m);const _=(s.get(l.batchId)||xe()).add(u);s=s.insert(l.batchId,_)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,m=u.value,_=JE();m.forEach(v=>{if(!i.has(v)){const S=sv(n.get(v),r.get(v));S!==null&&_.set(v,S),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,_))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):W.resolve(ii());let l=La,u=i;return o.next(d=>W.forEach(d,(m,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),i.get(m)?W.resolve():this.remoteDocumentCache.getEntry(e,m).next(v=>{u=u.insert(m,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,xe())).next(m=>({batchId:l,changes:XE(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let s=ua();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ua();return this.indexManager.getCollectionParents(e,i).next(l=>W.forEach(l,u=>{const d=function(_,v){return new Ya(v,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(m=>{m.forEach((_,v)=>{o=o.insert(_,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,zt.newInvalidDocument(m)))});let l=ua();return o.forEach((u,d)=>{const m=i.get(u);m!==void 0&&Ta(m.mutation,d,Fn.empty(),wt.now()),uu(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return W.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:hr(s.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(s){return{name:s.name,query:TD(s.bundledQuery),readTime:hr(s.readTime)}}(n)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD{constructor(){this.overlays=new it(de.comparator),this.Or=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ii();return W.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Or.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Or.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const s=ii(),i=n.length+1,o=new de(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return W.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new it((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=ii(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const l=ii(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,m)=>l.set(d,m)),!(l.size()>=s)););return W.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Or.get(s.largestBatchId).delete(r.key);this.Or.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JN(n,r));let i=this.Or.get(n);i===void 0&&(i=xe(),this.Or.set(n,i)),this.Or.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this.Nr=new At(Ot.Br),this.Lr=new At(Ot.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new Ot(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new Ot(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new de(new rt([])),r=new Ot(n,e),s=new Ot(n,e+1),i=[];return this.Lr.forEachInRange([r,s],o=>{this.Qr(o),i.push(o.key)}),i}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new de(new rt([])),r=new Ot(n,e),s=new Ot(n,e+1);let i=xe();return this.Lr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ot(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ot{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return de.comparator(e.key,n.key)||Se(e.Gr,n.Gr)}static kr(e,n){return Se(e.Gr,n.Gr)||de.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new At(Ot.Br)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new XN(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.zr=this.zr.add(new Ot(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Hr(r),i=s<0?0:s;return W.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Wf:this.Jn-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ot(n,0),s=new Ot(n,Number.POSITIVE_INFINITY),i=[];return this.zr.forEachInRange([r,s],o=>{const l=this.jr(o.Gr);i.push(l)}),W.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new At(Se);return n.forEach(s=>{const i=new Ot(s,0),o=new Ot(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([i,o],l=>{r=r.add(l.Gr)})}),W.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;de.isDocumentKey(i)||(i=i.child(""));const o=new Ot(new de(i),0);let l=new At(Se);return this.zr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Gr)),!0)},o),W.resolve(this.Jr(l))}Jr(e){const n=[];return e.forEach(r=>{const s=this.jr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return W.forEach(n.mutations,s=>{const i=new Ot(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new Ot(n,0),s=this.zr.firstAfterOrEqual(r);return W.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.Zr=e,this.docs=function(){return new it(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():zt.newInvalidDocument(n))}getEntries(e,n){let r=Fr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():zt.newInvalidDocument(s))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fr();const o=n.path,l=new de(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||hN(uN(m),r)<=0||(s.has(m.key)||uu(n,m))&&(i=i.insert(m.key,m.mutableCopy()))}return W.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ye(9500)}Xr(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MD(this)}getSize(e){return W.resolve(this.size)}}class MD extends PD{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.vr.addEntry(e,s)):this.vr.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.persistence=e,this.ei=new vi(n=>Yf(n),Qf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.ti=0,this.ni=new rd,this.targetCount=0,this.ri=po.rr()}forEachTarget(e,n){return this.ei.forEach((r,s)=>n(s)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),W.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new po(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.ar(n),W.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ei.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ei.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),W.waitFor(i).next(()=>s)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),W.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.ni.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n){this.ii={},this.overlays={},this.si=new ou(0),this.oi=!1,this.oi=!0,this._i=new LD,this.referenceDelegate=e(this),this.ai=new UD(this),this.indexManager=new wD,this.remoteDocumentCache=function(s){return new xD(s)}(r=>this.referenceDelegate.ui(r)),this.serializer=new vD(n),this.ci=new DD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new VD(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const s=new FD(this.si.next());return this.referenceDelegate.li(),r(s).next(i=>this.referenceDelegate.hi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Pi(e,n){return W.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class FD extends dN{constructor(e){super(),this.currentSequenceNumber=e}}class sd{constructor(e){this.persistence=e,this.Ti=new rd,this.Ii=null}static Ei(e){return new sd(e)}get di(){if(this.Ii)return this.Ii;throw ye(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),W.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.di,r=>{const s=de.fromPath(r);return this.Ai(e,s).next(i=>{i||n.removeEntry(s,Te.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return W.or([()=>W.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class Vl{constructor(e,n){this.persistence=e,this.Ri=new vi(r=>gN(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=CD(this,n)}static Ei(e,n){return new Vl(e,n)}li(){}hi(e){return W.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return W.forEach(this.Ri,(r,s)=>this.gr(e,r,s).next(i=>i?W.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Xr(e,o=>this.gr(e,o,n).next(l=>{l||(r++,i.removeEntry(o,Te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),W.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),W.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),W.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=al(e.data.value)),n}gr(e,n,r){return W.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.Ri.get(n);return W.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=s}static Ps(e,n){let r=xe(),s=xe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new id(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return wC()?8:pN(Qt())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Vs(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new $D;return this.fs(e,n,o).next(l=>{if(i.result=l,this.Is)return this.gs(e,n,o,l.size)})}).next(()=>i.result)}gs(e,n,r,s){return r.documentReadCount<this.Es?(qi()<=Ve.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),W.resolve()):(qi()<=Ve.DEBUG&&ae("QueryEngine","Query:",Ki(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(qi()<=Ve.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ur(n))):W.resolve())}Rs(e,n){if(Pg(n))return W.resolve(null);let r=ur(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=tf(n,null,"F"),r=ur(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=xe(...i);return this.As.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ps(n,l);return this.ys(n,d,o,u.readTime)?this.Rs(e,tf(n,null,"F")):this.ws(e,d,n,u)}))})))}Vs(e,n,r,s){return Pg(n)||s.isEqual(Te.min())?W.resolve(null):this.As.getDocuments(e,r).next(i=>{const o=this.ps(n,i);return this.ys(n,o,r,s)?W.resolve(null):(qi()<=Ve.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ki(n)),this.ws(e,o,n,lN(s,La)).next(l=>l))})}ps(e,n){let r=new At(YE(e));return n.forEach((s,i)=>{uu(e,i)&&(r=r.add(i))}),r}ys(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}fs(e,n,r){return qi()<=Ve.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Ki(n)),this.As.getDocumentsMatchingQuery(e,n,Es.min(),r)}ws(e,n,r,s){return this.As.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="LocalStore",jD=3e8;class HD{constructor(e,n,r,s){this.persistence=e,this.bs=n,this.serializer=s,this.Ss=new it(Se),this.Ds=new vi(i=>Yf(i),Qf),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ND(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function qD(t,e,n,r){return new HD(t,e,n,r)}async function yv(t,e){const n=Ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=xe();for(const d of s){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){l.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Ms:d,removedBatchIds:o,addedBatchIds:l}))})})}function KD(t,e){const n=Ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,m){const _=d.batch,v=_.keys();let S=W.resolve();return v.forEach(V=>{S=S.next(()=>m.getEntry(u,V)).next(B=>{const $=d.docVersions.get(V);He($!==null,48541),B.version.compareTo($)<0&&(_.applyToRemoteDocument(B,d),B.isValidDocument()&&(B.setReadTime(d.commitVersion),m.addEntry(B)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,_))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=xe();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ev(t){const e=Ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function WD(t,e){const n=Ae(t),r=e.snapshotVersion;let s=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Cs.newChangeBuffer({trackRemovals:!0});s=n.Ss;const l=[];e.targetChanges.forEach((m,_)=>{const v=s.get(_);if(!v)return;l.push(n.ai.removeMatchingKeys(i,m.removedDocuments,_).next(()=>n.ai.addMatchingKeys(i,m.addedDocuments,_)));let S=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?S=S.withResumeToken(Mt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),s=s.insert(_,S),function(B,$,G){return B.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=jD?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(v,S,m)&&l.push(n.ai.updateTargetData(i,S))});let u=Fr(),d=xe();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(zD(i,o,e.documentUpdates).next(m=>{u=m.xs,d=m.Os})),!r.isEqual(Te.min())){const m=n.ai.getLastRemoteSnapshotVersion(i).next(_=>n.ai.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return W.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.Ss=s,i))}function zD(t,e,n){let r=xe(),s=xe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Fr();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ae(od,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{xs:o,Os:s}})}function GD(t,e){const n=Ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Wf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function YD(t,e){const n=Ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.ai.getTargetData(r,e).next(i=>i?(s=i,W.resolve(s)):n.ai.allocateTargetId(r).next(o=>(s=new us(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ss.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function af(t,e,n){const r=Ae(t),s=r.Ss.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ao(o))throw o;ae(od,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(s.target)}function jg(t,e,n){const r=Ae(t);let s=Te.min(),i=xe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,m){const _=Ae(u),v=_.Ds.get(m);return v!==void 0?W.resolve(_.Ss.get(v)):_.ai.getTargetData(d,m)}(r,o,ur(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.bs.getDocumentsMatchingQuery(o,e,n?s:Te.min(),n?i:xe())).next(l=>(QD(r,VN(e),l),{documents:l,Ns:i})))}function QD(t,e,n){let r=t.vs.get(e)||Te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.vs.set(e,r)}class Hg{constructor(){this.activeTargetIds=BN()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XD{constructor(){this.So=new Hg,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Hg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{vo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="ConnectivityMonitor";class Kg{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){ae(qg,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){ae(qg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc=null;function cf(){return Wc===null?Wc=function(){return 268435456+Math.round(2147483648*Math.random())}():Wc++,"0x"+Wc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="RestConnection",ZD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ek{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${s}`,this.qo=this.databaseId.database===Pl?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Qo(e,n,r,s,i){const o=cf(),l=this.$o(e,n.toUriEncodedString());ae(_h,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(u,s,i),this.Ko(e,l,u,r).then(d=>(ae(_h,`Received RPC '${e}' ${o}: `,d),d),d=>{throw lo(_h,`RPC '${e}' ${o} failed with error: `,d,"url: ",l,"request:",r),d})}Wo(e,n,r,s,i,o){return this.Qo(e,n,r,s,i)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}$o(e,n){const r=ZD[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="WebChannelConnection";class nk extends ek{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,s){const i=cf();return new Promise((o,l)=>{const u=new wE;u.setWithCredentials(!0),u.listenOnce(AE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ol.NO_ERROR:const m=u.getResponseJson();ae(Kt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case ol.TIMEOUT:ae(Kt,`RPC '${e}' ${i} timed out`),l(new ce(z.DEADLINE_EXCEEDED,"Request time out"));break;case ol.HTTP_ERROR:const _=u.getStatus();if(ae(Kt,`RPC '${e}' ${i} failed with status:`,_,"response text:",u.getResponseText()),_>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v==null?void 0:v.error;if(S&&S.status&&S.message){const V=function($){const G=$.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(G)>=0?G:z.UNKNOWN}(S.status);l(new ce(V,S.message))}else l(new ce(z.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new ce(z.UNAVAILABLE,"Connection failed."));break;default:ye(9055,{s_:e,streamId:i,o_:u.getLastErrorCode(),__:u.getLastError()})}}finally{ae(Kt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);ae(Kt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}a_(e,n,r){const s=cf(),i=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=RE(),l=bE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Uo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=i.join("");ae(Kt,`Creating RPC '${e}' stream ${s}: ${m}`,u);const _=o.createWebChannel(m,u);let v=!1,S=!1;const V=new tk({Go:$=>{S?ae(Kt,`Not sending because RPC '${e}' stream ${s} is closed:`,$):(v||(ae(Kt,`Opening RPC '${e}' stream ${s} transport.`),_.open(),v=!0),ae(Kt,`RPC '${e}' stream ${s} sending:`,$),_.send($))},zo:()=>_.close()}),B=($,G,ee)=>{$.listen(G,Q=>{try{ee(Q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return B(_,la.EventType.OPEN,()=>{S||(ae(Kt,`RPC '${e}' stream ${s} transport opened.`),V.t_())}),B(_,la.EventType.CLOSE,()=>{S||(S=!0,ae(Kt,`RPC '${e}' stream ${s} transport closed`),V.r_())}),B(_,la.EventType.ERROR,$=>{S||(S=!0,lo(Kt,`RPC '${e}' stream ${s} transport errored. Name:`,$.name,"Message:",$.message),V.r_(new ce(z.UNAVAILABLE,"The operation could not be completed")))}),B(_,la.EventType.MESSAGE,$=>{var G;if(!S){const ee=$.data[0];He(!!ee,16349);const Q=ee,oe=(Q==null?void 0:Q.error)||((G=Q[0])===null||G===void 0?void 0:G.error);if(oe){ae(Kt,`RPC '${e}' stream ${s} received error:`,oe);const De=oe.status;let pe=function(b){const P=yt[b];if(P!==void 0)return ov(P)}(De),C=oe.message;pe===void 0&&(pe=z.INTERNAL,C="Unknown error status: "+De+" with message "+oe.message),S=!0,V.r_(new ce(pe,C)),_.close()}else ae(Kt,`RPC '${e}' stream ${s} received:`,ee),V.i_(ee)}}),B(l,IE.STAT_EVENT,$=>{$.stat===Gh.PROXY?ae(Kt,`RPC '${e}' stream ${s} detected buffering proxy`):$.stat===Gh.NOPROXY&&ae(Kt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.n_()},0),V}}function yh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){return new oD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=s,this.l_=i,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),s=Math.max(0,n-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="PersistentStream";class Tv{constructor(e,n,r,s,i,o,l,u){this.bi=e,this.R_=r,this.V_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new vv(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Ur(n.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.m_===n&&this.B_(r,s)},r=>{e(()=>{const s=new ce(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(s)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{r(()=>this.L_(s))}),this.stream.onMessage(s=>{r(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return ae(Wg,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(ae(Wg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rk extends Tv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=lD(this.serializer,e),r=function(i){if(!("targetChange"in i))return Te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Te.min():o.readTime?hr(o.readTime):Te.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=of(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Zh(u)?{documents:fD(i,u)}:{query:dD(i,u).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=lv(i,o.resumeToken);const d=nf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(Te.min())>0){l.readTime=Ll(i,o.snapshotVersion.toTimestamp());const d=nf(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=mD(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=of(this.serializer),n.removeTarget=e,this.F_(n)}}class sk extends Tv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=hD(e.writeResults,e.commitTime),r=hr(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=of(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uD(this.serializer,r))};this.F_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{}class ok extends ik{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new ce(z.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Qo(e,rf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(z.UNKNOWN,i.toString())})}Wo(e,n,r,s,i){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Wo(e,rf(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(z.UNKNOWN,o.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class ak{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Ur(n),this.ea=!1):ae("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi="RemoteStore";class ck{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=i,this.ca.vo(o=>{r.enqueueAndForget(async()=>{wi(this)&&(ae(gi,"Restarting streams for network reachability change."),await async function(u){const d=Ae(u);d.aa.add(4),await Ja(d),d.la.set("Unknown"),d.aa.delete(4),await mu(d)}(this))})}),this.la=new ak(r,s)}}async function mu(t){if(wi(t))for(const e of t.ua)await e(!0)}async function Ja(t){for(const e of t.ua)await e(!1)}function wv(t,e){const n=Ae(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),ud(n)?ld(n):Io(n).b_()&&cd(n,e))}function ad(t,e){const n=Ae(t),r=Io(n);n._a.delete(e),r.b_()&&Av(n,e),n._a.size===0&&(r.b_()?r.v_():wi(n)&&n.la.set("Unknown"))}function cd(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Io(t).U_(e)}function Av(t,e){t.ha.Ke(e),Io(t).K_(e)}function ld(t){t.ha=new nD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Io(t).start(),t.la.ta()}function ud(t){return wi(t)&&!Io(t).w_()&&t._a.size>0}function wi(t){return Ae(t).aa.size===0}function Iv(t){t.ha=void 0}async function lk(t){t.la.set("Online")}async function uk(t){t._a.forEach((e,n)=>{cd(t,e)})}async function hk(t,e){Iv(t),ud(t)?(t.la.ia(e),ld(t)):t.la.set("Unknown")}async function fk(t,e,n){if(t.la.set("Online"),e instanceof cv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s._a.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s._a.delete(l),s.ha.removeTarget(l))}(t,e)}catch(r){ae(gi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xl(t,r)}else if(e instanceof ul?t.ha.Xe(e):e instanceof av?t.ha.ot(e):t.ha.nt(e),!n.isEqual(Te.min()))try{const r=await Ev(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.ha.It(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i._a.get(d);m&&i._a.set(d,m.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const m=i._a.get(u);if(!m)return;i._a.set(u,m.withResumeToken(Mt.EMPTY_BYTE_STRING,m.snapshotVersion)),Av(i,u);const _=new us(m.target,u,d,m.sequenceNumber);cd(i,_)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ae(gi,"Failed to raise snapshot:",r),await xl(t,r)}}async function xl(t,e,n){if(!Ao(e))throw e;t.aa.add(1),await Ja(t),t.la.set("Offline"),n||(n=()=>Ev(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ae(gi,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await mu(t)})}function bv(t,e){return e().catch(n=>xl(t,n,e))}async function gu(t){const e=Ae(t),n=As(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:Wf;for(;dk(e);)try{const s=await GD(e.localStore,r);if(s===null){e.oa.length===0&&n.v_();break}r=s.batchId,pk(e,s)}catch(s){await xl(e,s)}Rv(e)&&Sv(e)}function dk(t){return wi(t)&&t.oa.length<10}function pk(t,e){t.oa.push(e);const n=As(t);n.b_()&&n.W_&&n.G_(e.mutations)}function Rv(t){return wi(t)&&!As(t).w_()&&t.oa.length>0}function Sv(t){As(t).start()}async function mk(t){As(t).H_()}async function gk(t){const e=As(t);for(const n of t.oa)e.G_(n.mutations)}async function _k(t,e,n){const r=t.oa.shift(),s=ed.from(r,e,n);await bv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gu(t)}async function yk(t,e){e&&As(t).W_&&await async function(r,s){if(function(o){return eD(o)&&o!==z.ABORTED}(s.code)){const i=r.oa.shift();As(r).D_(),await bv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await gu(r)}}(t,e),Rv(t)&&Sv(t)}async function zg(t,e){const n=Ae(t);n.asyncQueue.verifyOperationInProgress(),ae(gi,"RemoteStore received new credentials");const r=wi(n);n.aa.add(3),await Ja(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await mu(n)}async function Ek(t,e){const n=Ae(t);e?(n.aa.delete(2),await mu(n)):e||(n.aa.add(2),await Ja(n),n.la.set("Unknown"))}function Io(t){return t.Pa||(t.Pa=function(n,r,s){const i=Ae(n);return i.Y_(),new rk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:lk.bind(null,t),Jo:uk.bind(null,t),Zo:hk.bind(null,t),Q_:fk.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),ud(t)?ld(t):t.la.set("Unknown")):(await t.Pa.stop(),Iv(t))})),t.Pa}function As(t){return t.Ta||(t.Ta=function(n,r,s){const i=Ae(n);return i.Y_(),new sk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:mk.bind(null,t),Zo:yk.bind(null,t),z_:gk.bind(null,t),j_:_k.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await gu(t)):(await t.Ta.stop(),t.oa.length>0&&(ae(gi,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new hd(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fd(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),Ao(t))return new ce(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(e){return new no(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||de.comparator(n.key,r.key):(n,r)=>de.comparator(n.key,r.key),this.keyedMap=ua(),this.sortedSet=new it(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new no;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.Ia=new it(de.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):ye(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class mo{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new mo(e,n,no.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class Tk{constructor(){this.queries=Yg(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const s=Ae(n),i=s.queries;s.queries=Yg(),i.forEach((o,l)=>{for(const u of l.Ra)u.onError(r)})})(this,new ce(z.ABORTED,"Firestore shutting down"))}}function Yg(){return new vi(t=>GE(t),lu)}async function Cv(t,e){const n=Ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Va()&&e.ma()&&(r=2):(i=new vk,r=e.ma()?0:1);try{switch(r){case 0:i.Aa=await n.onListen(s,!0);break;case 1:i.Aa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=fd(o,`Initialization of query '${Ki(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Ra.push(e),e.ga(n.onlineState),i.Aa&&e.pa(i.Aa)&&dd(n)}async function Pv(t,e){const n=Ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Ra.indexOf(e);o>=0&&(i.Ra.splice(o,1),i.Ra.length===0?s=e.ma()?0:1:!i.Va()&&e.ma()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function wk(t,e){const n=Ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Ra)l.pa(s)&&(r=!0);o.Aa=s}}r&&dd(n)}function Ak(t,e,n){const r=Ae(t),s=r.queries.get(e);if(s)for(const i of s.Ra)i.onError(n);r.queries.delete(e)}function dd(t){t.fa.forEach(e=>{e.next()})}var lf,Qg;(Qg=lf||(lf={})).ya="default",Qg.Cache="cache";class Ov{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==lf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.key=e}}class Dv{constructor(e){this.key=e}}class Ik{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=xe(),this.mutatedKeys=xe(),this.Ua=YE(e),this.Ka=new no(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new Gg,s=n?n.Ka:this.Ka;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,_)=>{const v=s.get(m),S=uu(this.query,_)?_:null,V=!!v&&this.mutatedKeys.has(v.key),B=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let $=!1;v&&S?v.data.isEqual(S.data)?V!==B&&(r.track({type:3,doc:S}),$=!0):this.ja(v,S)||(r.track({type:2,doc:S}),$=!0,(u&&this.Ua(S,u)>0||d&&this.Ua(S,d)<0)&&(l=!0)):!v&&S?(r.track({type:0,doc:S}),$=!0):v&&!S&&(r.track({type:1,doc:v}),$=!0,(u||d)&&(l=!0)),$&&(S?(o=o.add(S),i=B?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ka:o,za:r,ys:l,mutatedKeys:i}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const o=e.za.da();o.sort((m,_)=>function(S,V){const B=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ye(20277,{Vt:$})}};return B(S)-B(V)}(m.type,_.type)||this.Ua(m.doc,_.doc)),this.Ha(r),s=s!=null&&s;const l=n&&!s?this.Ja():[],u=this.$a.size===0&&this.current&&!s?1:0,d=u!==this.Qa;return this.Qa=u,o.length!==0||d?{snapshot:new mo(this.query,e.Ka,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:l}:{Ya:l}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Gg,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=xe(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new Dv(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new Nv(r))}),n}Xa(e){this.qa=e.Ns,this.$a=xe();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return mo.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const pd="SyncEngine";class bk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Rk{constructor(e){this.key=e,this.tu=!1}}class Sk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nu={},this.ru=new vi(l=>GE(l),lu),this.iu=new Map,this.su=new Set,this.ou=new it(de.comparator),this._u=new Map,this.au=new rd,this.uu={},this.cu=new Map,this.lu=po.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function Ck(t,e,n=!0){const r=Uv(t);let s;const i=r.ru.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.eu()):s=await kv(r,e,n,!0),s}async function Pk(t,e){const n=Uv(t);await kv(n,e,!0,!1)}async function kv(t,e,n,r){const s=await YD(t.localStore,ur(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Ok(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&wv(t.remoteStore,s),l}async function Ok(t,e,n,r,s){t.Pu=(_,v,S)=>async function(B,$,G,ee){let Q=$.view.Ga(G);Q.ys&&(Q=await jg(B.localStore,$.query,!1).then(({documents:C})=>$.view.Ga(C,Q)));const oe=ee&&ee.targetChanges.get($.targetId),De=ee&&ee.targetMismatches.get($.targetId)!=null,pe=$.view.applyChanges(Q,B.isPrimaryClient,oe,De);return Jg(B,$.targetId,pe.Ya),pe.snapshot}(t,_,v,S);const i=await jg(t.localStore,e,!0),o=new Ik(e,i.Ns),l=o.Ga(i.documents),u=Xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);Jg(t,n,d.Ya);const m=new bk(e,n,o);return t.ru.set(e,m),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),d.snapshot}async function Nk(t,e,n){const r=Ae(t),s=r.ru.get(e),i=r.iu.get(s.targetId);if(i.length>1)return r.iu.set(s.targetId,i.filter(o=>!lu(o,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await af(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ad(r.remoteStore,s.targetId),uf(r,s.targetId)}).catch(wo)):(uf(r,s.targetId),await af(r.localStore,s.targetId,!0))}async function Dk(t,e){const n=Ae(t),r=n.ru.get(e),s=n.iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ad(n.remoteStore,r.targetId))}async function kk(t,e,n){const r=$k(t);try{const s=await function(o,l){const u=Ae(o),d=wt.now(),m=l.reduce((S,V)=>S.add(V.key),xe());let _,v;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let V=Fr(),B=xe();return u.Cs.getEntries(S,m).next($=>{V=$,V.forEach((G,ee)=>{ee.isValidDocument()||(B=B.add(G))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,V)).next($=>{_=$;const G=[];for(const ee of l){const Q=YN(ee,_.get(ee.key).overlayedDocument);Q!=null&&G.push(new Ti(ee.key,Q,$E(Q.value.mapValue),jn.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,G,l)}).next($=>{v=$;const G=$.applyToLocalDocumentSet(_,B);return u.documentOverlayCache.saveOverlays(S,$.batchId,G)})}).then(()=>({batchId:v.batchId,changes:XE(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.uu[o.currentUser.toKey()];d||(d=new it(Se)),d=d.insert(l,u),o.uu[o.currentUser.toKey()]=d}(r,s.batchId,n),await Za(r,s.changes),await gu(r.remoteStore)}catch(s){const i=fd(s,"Failed to persist write");n.reject(i)}}async function Lv(t,e){const n=Ae(t);try{const r=await WD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n._u.get(i);o&&(He(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.tu=!0:s.modifiedDocuments.size>0?He(o.tu,14607):s.removedDocuments.size>0&&(He(o.tu,42227),o.tu=!1))}),await Za(n,r,e)}catch(r){await wo(r)}}function Xg(t,e,n){const r=Ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ru.forEach((i,o)=>{const l=o.view.ga(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Ae(o);u.onlineState=l;let d=!1;u.queries.forEach((m,_)=>{for(const v of _.Ra)v.ga(l)&&(d=!0)}),d&&dd(u)}(r.eventManager,e),s.length&&r.nu.Q_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lk(t,e,n){const r=Ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r._u.get(e),i=s&&s.key;if(i){let o=new it(de.comparator);o=o.insert(i,zt.newNoDocument(i,Te.min()));const l=xe().add(i),u=new du(Te.min(),new Map,new it(Se),o,l);await Lv(r,u),r.ou=r.ou.remove(i),r._u.delete(e),md(r)}else await af(r.localStore,e,!1).then(()=>uf(r,e,n)).catch(wo)}async function Vk(t,e){const n=Ae(t),r=e.batch.batchId;try{const s=await KD(n.localStore,e);xv(n,r,null),Vv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Za(n,s)}catch(s){await wo(s)}}async function xk(t,e,n){const r=Ae(t);try{const s=await function(o,l){const u=Ae(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return u.mutationQueue.lookupMutationBatch(d,l).next(_=>(He(_!==null,37113),m=_.keys(),u.mutationQueue.removeMutationBatch(d,_))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>u.localDocuments.getDocuments(d,m))})}(r.localStore,e);xv(r,e,n),Vv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Za(r,s)}catch(s){await wo(s)}}function Vv(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function xv(t,e,n){const r=Ae(t);let s=r.uu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.uu[r.currentUser.toKey()]=s}}function uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||Mv(t,r)})}function Mv(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(ad(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),md(t))}function Jg(t,e,n){for(const r of n)r instanceof Nv?(t.au.addReference(r.key,e),Mk(t,r)):r instanceof Dv?(ae(pd,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||Mv(t,r.key)):ye(19791,{Iu:r})}function Mk(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(ae(pd,"New document in limbo: "+n),t.su.add(r),md(t))}function md(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new de(rt.fromString(e)),r=t.lu.next();t._u.set(r,new Rk(n)),t.ou=t.ou.insert(n,r),wv(t.remoteStore,new us(ur(Xf(n.path)),r,"TargetPurposeLimboResolution",ou.le))}}async function Za(t,e,n){const r=Ae(t),s=[],i=[],o=[];r.ru.isEmpty()||(r.ru.forEach((l,u)=>{o.push(r.Pu(u,e,n).then(d=>{var m;if((d||n)&&r.isPrimaryClient){const _=d?!d.fromCache:(m=n==null?void 0:n.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){s.push(d);const _=id.Ps(u.targetId,d);i.push(_)}}))}),await Promise.all(o),r.nu.Q_(s),await async function(u,d){const m=Ae(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>W.forEach(d,v=>W.forEach(v.ls,S=>m.persistence.referenceDelegate.addReference(_,v.targetId,S)).next(()=>W.forEach(v.hs,S=>m.persistence.referenceDelegate.removeReference(_,v.targetId,S)))))}catch(_){if(!Ao(_))throw _;ae(od,"Failed to update sequence numbers: "+_)}for(const _ of d){const v=_.targetId;if(!_.fromCache){const S=m.Ss.get(v),V=S.snapshotVersion,B=S.withLastLimboFreeSnapshotVersion(V);m.Ss=m.Ss.insert(v,B)}}}(r.localStore,i))}async function Uk(t,e){const n=Ae(t);if(!n.currentUser.isEqual(e)){ae(pd,"User change. New user:",e.toKey());const r=await yv(n.localStore,e);n.currentUser=e,function(i,o){i.cu.forEach(l=>{l.forEach(u=>{u.reject(new ce(z.CANCELLED,o))})}),i.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Za(n,r.Ms)}}function Fk(t,e){const n=Ae(t),r=n._u.get(e);if(r&&r.tu)return xe().add(r.key);{let s=xe();const i=n.iu.get(e);if(!i)return s;for(const o of i){const l=n.ru.get(o);s=s.unionWith(l.view.Wa)}return s}}function Uv(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lk.bind(null,e),e.nu.Q_=wk.bind(null,e.eventManager),e.nu.Tu=Ak.bind(null,e.eventManager),e}function $k(t){const e=Ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xk.bind(null,e),e}class Ml{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pu(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return qD(this.persistence,new BD,e.initialUser,this.serializer)}Ru(e){return new _v(sd.Ei,this.serializer)}Au(e){return new XD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ml.provider={build:()=>new Ml};class Bk extends Ml{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){He(this.persistence.referenceDelegate instanceof Vl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new RD(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?ln.withCacheSize(this.cacheSizeBytes):ln.DEFAULT;return new _v(r=>Vl.Ei(r,n),this.serializer)}}class hf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Uk.bind(null,this.syncEngine),await Ek(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tk}()}createDatastore(e){const n=pu(e.databaseInfo.databaseId),r=function(i){return new nk(i)}(e.databaseInfo);return function(i,o,l,u){return new ok(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new ck(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Xg(this.syncEngine,n,0),function(){return Kg.C()?new Kg:new JD}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,m){const _=new Sk(s,i,o,l,u,d);return m&&(_.hu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ae(s);ae(gi,"RemoteStore shutting down."),i.aa.add(5),await Ja(i),i.ca.shutdown(),i.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hf.provider={build:()=>new hf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="FirestoreClient";class jk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Wt.UNAUTHENTICATED,this.clientId=OE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ae(Is,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ae(Is,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Eh(t,e){t.asyncQueue.verifyOperationInProgress(),ae(Is,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Zg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hk(t);ae(Is,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>zg(e.remoteStore,s)),t._onlineComponents=e}async function Hk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae(Is,"Using user provided OfflineComponentProvider");try{await Eh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===z.FAILED_PRECONDITION||s.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;lo("Error using user provided cache. Falling back to memory cache: "+n),await Eh(t,new Ml)}}else ae(Is,"Using default OfflineComponentProvider"),await Eh(t,new Bk(void 0));return t._offlineComponents}async function $v(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae(Is,"Using user provided OnlineComponentProvider"),await Zg(t,t._uninitializedComponentsProvider._online)):(ae(Is,"Using default OnlineComponentProvider"),await Zg(t,new hf))),t._onlineComponents}function qk(t){return $v(t).then(e=>e.syncEngine)}async function Bv(t){const e=await $v(t),n=e.eventManager;return n.onListen=Ck.bind(null,e.syncEngine),n.onUnlisten=Nk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Pk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Dk.bind(null,e.syncEngine),n}function Kk(t,e,n={}){const r=new Lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const m=new Fv({next:v=>{m.yu(),o.enqueueAndForget(()=>Pv(i,_));const S=v.docs.has(l);!S&&v.fromCache?d.reject(new ce(z.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&v.fromCache&&u&&u.source==="server"?d.reject(new ce(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),_=new Ov(Xf(l.path),m,{includeMetadataChanges:!0,Fa:!0});return Cv(i,_)}(await Bv(t),t.asyncQueue,e,n,r)),r.promise}function Wk(t,e,n={}){const r=new Lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,d){const m=new Fv({next:v=>{m.yu(),o.enqueueAndForget(()=>Pv(i,_)),v.fromCache&&u.source==="server"?d.reject(new ce(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(v)},error:v=>d.reject(v)}),_=new Ov(l,m,{includeMetadataChanges:!0,Fa:!0});return Cv(i,_)}(await Bv(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t,e,n){if(!n)throw new ce(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zk(t,e,n,r){if(e===!0&&r===!0)throw new ce(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t_(t){if(!de.isDocumentKey(t))throw new ce(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function n_(t){if(de.isDocumentKey(t))throw new ce(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye(12329,{type:typeof t})}function $r(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new ce(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv="firestore.googleapis.com",r_=!0;class s_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qv,this.ssl=r_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:r_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ID)throw new ce(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new s_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new s_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new eN;switch(r.type){case"firstParty":return new sN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=e_.get(n);r&&(ae("ComponentProvider","Removing Datastore"),e_.delete(n),r.terminate())}(this),Promise.resolve()}}function Gk(t,e,n,r={}){var s;const i=(t=$r(t,yu))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i.host!==qv&&i.host!==l&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},i),{host:l,ssl:!1,emulatorOptions:r});if(!hi(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,m;if(typeof r.mockUserToken=="string")d=r.mockUserToken,m=Wt.MOCK_USER;else{d=Ly(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new ce(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Wt(_)}t._authCredentials=new tN(new CE(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bo(this.firestore,e,this._query)}}class hn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class gs extends bo{constructor(e,n,r){super(e,n,Xf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new de(e))}withConverter(e){return new gs(this.firestore,e,this._path)}}function mx(t,e,...n){if(t=ct(t),Hv("collection","path",e),t instanceof yu){const r=rt.fromString(e,...n);return n_(r),new gs(t,null,r)}{if(!(t instanceof hn||t instanceof gs))throw new ce(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rt.fromString(e,...n));return n_(r),new gs(t.firestore,null,r)}}function gd(t,e,...n){if(t=ct(t),arguments.length===1&&(e=OE.newId()),Hv("doc","path",e),t instanceof yu){const r=rt.fromString(e,...n);return t_(r),new hn(t,null,new de(r))}{if(!(t instanceof hn||t instanceof gs))throw new ce(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rt.fromString(e,...n));return t_(r),new hn(t.firestore,t instanceof gs?t.converter:null,new de(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="AsyncQueue";class o_{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new vv(this,"async_queue_retry"),this.ju=()=>{const r=yh();r&&ae(i_,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=yh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=yh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Lr;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Ao(e))throw e;ae(i_,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,Ur("INTERNAL UNHANDLED ERROR: ",a_(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const s=hd.createAndSchedule(this,e,n,r,i=>this.Xu(i));return this.Uu.push(s),s}Ju(){this.Ku&&ye(47125,{ec:a_(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function a_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ro extends yu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new o_,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new o_(e),this._firestoreClient=void 0,await e}}}function Yk(t,e){const n=typeof t=="object"?t:kf(),r=typeof t=="string"?t:Pl,s=nu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ny("firestore");i&&Gk(s,...i)}return s}function _d(t){if(t._terminated)throw new ce(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Qk(t),t._firestoreClient}function Qk(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,d,m){return new EN(l,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,jv(m.experimentalLongPollingOptions),m.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new jk(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(Mt.fromBase64String(e))}catch(n){throw new ce(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new go(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=/^__.*__$/;class Jk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ti(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qa(e,this.data,n,this.fieldTransforms)}}function Kv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye(40011,{oc:t})}}class wd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this._c(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new wd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s.lc(e),s}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ac({path:r,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Ul(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(Kv(this.oc)&&Xk.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class Zk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||pu(e)}dc(e,n,r,s=!1){return new wd({oc:e,methodName:n,Ec:r,path:Vt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ad(t){const e=t._freezeSettings(),n=pu(t._databaseId);return new Zk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wv(t,e,n,r,s,i={}){const o=t.dc(i.merge||i.mergeFields?2:0,e,n,s);Yv("Data must be an object, but it was:",o,r);const l=zv(r,o);let u,d;if(i.merge)u=new Fn(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const _ of i.mergeFields){const v=tL(e,_,n);if(!o.contains(v))throw new ce(z.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);rL(m,v)||m.push(v)}u=new Fn(m),d=o.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,d=o.fieldTransforms;return new Jk(new wn(l),u,d)}class Id extends Ed{_toFieldTransform(e){return new KN(e.path,new Ua)}isEqual(e){return e instanceof Id}}function eL(t,e,n,r=!1){return bd(n,t.dc(r?4:3,e))}function bd(t,e){if(Gv(t=ct(t)))return Yv("Unsupported field value:",e,t),zv(t,e);if(t instanceof Ed)return function(r,s){if(!Kv(s.oc))throw s.Tc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=bd(l,s.Pc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=wt.fromDate(r);return{timestampValue:Ll(s.serializer,i)}}if(r instanceof wt){const i=new wt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ll(s.serializer,i)}}if(r instanceof vd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof go)return{bytesValue:lv(s.serializer,r._byteString)};if(r instanceof hn){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Tc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:nd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Td)return function(o,l){return{mapValue:{fields:{[UE]:{stringValue:FE},[Ol]:{arrayValue:{values:o.toArray().map(d=>{if(typeof d!="number")throw l.Tc("VectorValues must only contain numeric values.");return Jf(l.serializer,d)})}}}}}}(r,s);throw s.Tc(`Unsupported field value: ${_u(r)}`)}(t,e)}function zv(t,e){const n={};return DE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ei(t,(r,s)=>{const i=bd(s,e.uc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Gv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof vd||t instanceof go||t instanceof hn||t instanceof Ed||t instanceof Td)}function Yv(t,e,n){if(!Gv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=_u(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function tL(t,e,n){if((e=ct(e))instanceof yd)return e._internalPath;if(typeof e=="string")return Qv(t,e);throw Ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const nL=new RegExp("[~\\*/\\[\\]]");function Qv(t,e,n){if(e.search(nL)>=0)throw Ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yd(...e.split("."))._internalPath}catch{throw Ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ul(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new ce(z.INVALID_ARGUMENT,l+t+u)}function rL(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Rd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sL extends Xv{data(){return super.data()}}function Rd(t,e){return typeof e=="string"?Qv(t,e):e instanceof yd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sd{}class oL extends Sd{}function gx(t,e,...n){let r=[];e instanceof Sd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Cd).length,l=i.filter(u=>u instanceof Eu).length;if(o>1||o>0&&l>0)throw new ce(z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Eu extends oL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Eu(e,n,r)}_apply(e){const n=this._parse(e);return Jv(e._query,n),new bo(e.firestore,e.converter,ef(e._query,n))}_parse(e){const n=Ad(e.firestore);return function(i,o,l,u,d,m,_){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new ce(z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){l_(_,m);const V=[];for(const B of _)V.push(c_(u,i,B));v={arrayValue:{values:V}}}else v=c_(u,i,_)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||l_(_,m),v=eL(l,o,_,m==="in"||m==="not-in");return Et.create(d,m,v)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _x(t,e,n){const r=e,s=Rd("where",t);return Eu._create(s,r,n)}class Cd extends Sd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)Jv(o,u),o=ef(o,u)}(e._query,n),new bo(e.firestore,e.converter,ef(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function c_(t,e,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new ce(z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zE(e)&&n.indexOf("/")!==-1)throw new ce(z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(rt.fromString(n));if(!de.isDocumentKey(r))throw new ce(z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ag(t,new de(r))}if(n instanceof hn)return Ag(t,n._key);throw new ce(z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_u(n)}.`)}function l_(t,e){if(!Array.isArray(t)||t.length===0)throw new ce(z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jv(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ce(z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ce(z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class aL{convertValue(e,n="none"){switch(ws(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ye(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ei(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Ol].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>mt(o.doubleValue));return new Td(i)}convertGeoPoint(e){return new vd(mt(e.latitude),mt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=cu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Va(e));default:return null}}convertTimestamp(e){const n=vs(e);return new wt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=rt.fromString(e);He(mv(r),9688,{name:e});const s=new xa(r.get(1),r.get(3)),i=new de(r.popFirst(5));return s.isEqual(n)||Ur(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eT extends Xv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Rd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class hl extends eT{data(e={}){return super.data(e)}}class cL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new fa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hl(this._firestore,this._userDataWriter,r.key,r,new fa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new hl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fa(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new hl(s._firestore,s._userDataWriter,l.doc.key,l.doc,new fa(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:lL(l.type),doc:u,oldIndex:d,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){t=$r(t,hn);const e=$r(t.firestore,Ro);return Kk(_d(e),t._key).then(n=>uL(e,t,n))}class nT extends aL{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,n)}}function yx(t){t=$r(t,bo);const e=$r(t.firestore,Ro),n=_d(e),r=new nT(e);return iL(t._query),Wk(n,t._query).then(s=>new cL(e,r,t,s))}function Ex(t,e,n){t=$r(t,hn);const r=$r(t.firestore,Ro),s=Zv(t.converter,e,n);return Pd(r,[Wv(Ad(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,jn.none())])}function vx(t){return Pd($r(t.firestore,Ro),[new Zf(t._key,jn.none())])}function Tx(t,e){const n=$r(t.firestore,Ro),r=gd(t),s=Zv(t.converter,e);return Pd(n,[Wv(Ad(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,jn.exists(!1))]).then(()=>r)}function Pd(t,e){return function(r,s){const i=new Lr;return r.asyncQueue.enqueueAndForget(async()=>kk(await qk(r),s,i)),i.promise}(_d(t),e)}function uL(t,e,n){const r=n.docs.get(e._key),s=new nT(t);return new eT(t,s,e._key,r,new fa(n.hasPendingWrites,n.fromCache),e.converter)}function wx(){return new Id("serverTimestamp")}(function(e,n=!0){(function(s){To=s})(yi),fi(new ys("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Ro(new nN(r.getProvider("auth-internal")),new iN(o,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new ce(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xa(d.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),cr(hg,fg,e),cr(hg,fg,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT="firebasestorage.googleapis.com",sT="storageBucket",hL=2*60*1e3,fL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends pr{constructor(e,n,r=0){super(vh(e),`Firebase Storage: ${n} (${vh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ut.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function vh(t){return"storage/"+t}function Od(){const t="An unknown error occurred, please check the error payload for server response.";return new ut(lt.UNKNOWN,t)}function dL(t){return new ut(lt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pL(t){return new ut(lt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ut(lt.UNAUTHENTICATED,t)}function gL(){return new ut(lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _L(t){return new ut(lt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function yL(){return new ut(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function EL(){return new ut(lt.CANCELED,"User canceled the upload/download.")}function vL(t){return new ut(lt.INVALID_URL,"Invalid URL '"+t+"'.")}function TL(t){return new ut(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function wL(){return new ut(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+sT+"' property when initializing the app?")}function AL(){return new ut(lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function IL(){return new ut(lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bL(t){return new ut(lt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ff(t){return new ut(lt.INVALID_ARGUMENT,t)}function iT(){return new ut(lt.APP_DELETED,"The Firebase app was deleted.")}function RL(t){return new ut(lt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wa(t,e){return new ut(lt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function sa(t){throw new ut(lt.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw TL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(oe){oe.path_=decodeURIComponent(oe.path)}const m="v[A-Za-z0-9_]+",_=n.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",S=new RegExp(`^https?://${_}/${m}/b/${s}/o${v}`,"i"),V={bucket:1,path:3},B=n===rT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,$="([^?#]*)",G=new RegExp(`^https?://${B}/${s}/${$}`,"i"),Q=[{regex:l,indices:u,postModify:i},{regex:S,indices:V,postModify:d},{regex:G,indices:{bucket:1,path:2},postModify:d}];for(let oe=0;oe<Q.length;oe++){const De=Q[oe],pe=De.regex.exec(e);if(pe){const C=pe[De.indices.bucket];let T=pe[De.indices.path];T||(T=""),r=new rn(C,T),De.postModify(r);break}}if(r==null)throw vL(e);return r}}class SL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CL(t,e,n){let r=1,s=null,i=null,o=!1,l=0;function u(){return l===2}let d=!1;function m(...$){d||(d=!0,e.apply(null,$))}function _($){s=setTimeout(()=>{s=null,t(S,u())},$)}function v(){i&&clearTimeout(i)}function S($,...G){if(d){v();return}if($){v(),m.call(null,$,...G);return}if(u()||o){v(),m.call(null,$,...G);return}r<64&&(r*=2);let Q;l===1?(l=2,Q=0):Q=(r+Math.random())*1e3,_(Q)}let V=!1;function B($){V||(V=!0,v(),!d&&(s!==null?($||(l=2),clearTimeout(s),_(0)):$||(l=1)))}return _(0),i=setTimeout(()=>{o=!0,B(!0)},n),B}function PL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OL(t){return t!==void 0}function NL(t){return typeof t=="object"&&!Array.isArray(t)}function Nd(t){return typeof t=="string"||t instanceof String}function u_(t){return Dd()&&t instanceof Blob}function Dd(){return typeof Blob<"u"}function df(t,e,n,r){if(r<e)throw ff(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ff(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function oT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var li;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(li||(li={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kL{constructor(e,n,r,s,i,o,l,u,d,m,_,v=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=_,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,V)=>{this.resolve_=S,this.reject_=V,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new zc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===li.NO_ERROR,u=i.getStatus();if(!l||DL(u,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===li.ABORT;r(!1,new zc(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new zc(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());OL(u)?i(u):i()}catch(u){o(u)}else if(l!==null){const u=Od();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(s.canceled){const u=this.appDelete_?iT():EL();o(u)}else{const u=yL();o(u)}};this.canceled_?n(!1,new zc(!1,null,!0)):this.backoffId_=CL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function LL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function VL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ML(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function UL(t,e,n,r,s,i,o=!0){const l=oT(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return xL(d,e),LL(d,n),VL(d,i),ML(d,r),new kL(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $L(...t){const e=FL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Dd())return new Blob(t);throw new ut(lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function BL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(t){if(typeof atob>"u")throw bL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Th{constructor(e,n){this.data=e,this.contentType=n||null}}function HL(t,e){switch(t){case ir.RAW:return new Th(aT(e));case ir.BASE64:case ir.BASE64URL:return new Th(cT(t,e));case ir.DATA_URL:return new Th(KL(e),WL(e))}throw Od()}function aT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qL(t){let e;try{e=decodeURIComponent(t)}catch{throw wa(ir.DATA_URL,"Malformed data URL.")}return aT(e)}function cT(t,e){switch(t){case ir.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw wa(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case ir.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw wa(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jL(e)}catch(s){throw s.message.includes("polyfill")?s:wa(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class lT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wa(ir.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=zL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function KL(t){const e=new lT(t);return e.base64?cT(ir.BASE64,e.rest):qL(e.rest)}function WL(t){return new lT(t).contentType}function zL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,n){let r=0,s="";u_(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(u_(this.data_)){const r=this.data_,s=BL(r,e,n);return s===null?null:new ls(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ls(r,!0)}}static getBlob(...e){if(Dd()){const n=e.map(r=>r instanceof ls?r.data_:r);return new ls($L.apply(null,n))}else{const n=e.map(o=>Nd(o)?HL(ir.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)s[i++]=o[l]}),new ls(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){let e;try{e=JSON.parse(t)}catch{return null}return NL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function YL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function uT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(t,e){return e}class tn{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||QL}}let Gc=null;function XL(t){return!Nd(t)||t.length<2?t:uT(t)}function hT(){if(Gc)return Gc;const t=[];t.push(new tn("bucket")),t.push(new tn("generation")),t.push(new tn("metageneration")),t.push(new tn("name","fullPath",!0));function e(i,o){return XL(o)}const n=new tn("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new tn("size");return s.xform=r,t.push(s),t.push(new tn("timeCreated")),t.push(new tn("updated")),t.push(new tn("md5Hash",null,!0)),t.push(new tn("cacheControl",null,!0)),t.push(new tn("contentDisposition",null,!0)),t.push(new tn("contentEncoding",null,!0)),t.push(new tn("contentLanguage",null,!0)),t.push(new tn("contentType",null,!0)),t.push(new tn("metadata","customMetadata",!0)),Gc=t,Gc}function JL(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new rn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function ZL(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return JL(r,t),r}function fT(t,e,n){const r=kd(e);return r===null?null:ZL(t,r,n)}function eV(t,e,n,r){const s=kd(e);if(s===null||!Nd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const m=t.bucket,_=t.fullPath,v="/b/"+o(m)+"/o/"+o(_),S=ec(v,n,r),V=oT({alt:"media",token:d});return S+V})[0]}function tV(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="prefixes",f_="items";function nV(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[h_])for(const s of n[h_]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new rn(e,i));r.prefixes.push(o)}if(n[f_])for(const s of n[f_]){const i=t._makeStorageReference(new rn(e,s.name));r.items.push(i)}return r}function rV(t,e,n){const r=kd(n);return r===null?null:nV(t,e,r)}class vu{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t){if(!t)throw Od()}function sV(t,e){function n(r,s){const i=fT(t,s,e);return Ld(i!==null),i}return n}function iV(t,e){function n(r,s){const i=rV(t,e,s);return Ld(i!==null),i}return n}function oV(t,e){function n(r,s){const i=fT(t,s,e);return Ld(i!==null),eV(i,s,t.host,t._protocol)}return n}function Vd(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=gL():s=mL():n.getStatus()===402?s=pL(t.bucket):n.getStatus()===403?s=_L(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function dT(t){const e=Vd(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=dL(t.path)),i.serverResponse=s.serverResponse,i}return n}function aV(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),l=ec(o,t.host,t._protocol),u="GET",d=t.maxOperationRetryTime,m=new vu(l,u,iV(t,e.bucket),d);return m.urlParams=i,m.errorHandler=Vd(e),m}function cV(t,e,n){const r=e.fullServerUrl(),s=ec(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new vu(s,i,oV(t,n),o);return l.errorHandler=dT(e),l}function lV(t,e){const n=e.fullServerUrl(),r=ec(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(u,d){}const l=new vu(r,s,o,i);return l.successCodes=[200,204],l.errorHandler=dT(e),l}function uV(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function hV(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=uV(null,e)),r}function fV(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let Q="";for(let oe=0;oe<2;oe++)Q=Q+Math.random().toString().slice(2);return Q}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const d=hV(e,r,s),m=tV(d,n),_="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,v=`\r
--`+u+"--",S=ls.getBlob(_,r,v);if(S===null)throw AL();const V={name:d.fullPath},B=ec(i,t.host,t._protocol),$="POST",G=t.maxUploadRetryTime,ee=new vu(B,$,sV(t,n),G);return ee.urlParams=V,ee.headers=o,ee.body=S.uploadData(),ee.errorHandler=Vd(e),ee}class dV{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=li.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=li.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=li.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw sa("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw sa("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw sa("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw sa("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw sa("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pV extends dV{initXhr(){this.xhr_.responseType="text"}}function Tu(){return new pV}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _i(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uT(this._location.path)}get storage(){return this._service}get parent(){const e=GL(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new _i(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RL(e)}}function mV(t,e,n){t._throwIfRoot("uploadBytes");const r=fV(t.storage,t._location,hT(),new ls(e,!0),n);return t.storage.makeRequestWithTokens(r,Tu).then(s=>({metadata:s,ref:t}))}function gV(t){const e={prefixes:[],items:[]};return pT(t,e).then(()=>e)}async function pT(t,e,n){const s=await _V(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await pT(t,e,s.nextPageToken)}function _V(t,e){e!=null&&typeof e.maxResults=="number"&&df("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=aV(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Tu)}function yV(t){t._throwIfRoot("getDownloadURL");const e=cV(t.storage,t._location,hT());return t.storage.makeRequestWithTokens(e,Tu).then(n=>{if(n===null)throw IL();return n})}function EV(t){t._throwIfRoot("deleteObject");const e=lV(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Tu)}function vV(t,e){const n=YL(t._location.path,e),r=new rn(t._location.bucket,n);return new _i(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TV(t){return/^[A-Za-z]+:\/\//.test(t)}function wV(t,e){return new _i(t,e)}function mT(t,e){if(t instanceof xd){const n=t;if(n._bucket==null)throw wL();const r=new _i(n,n._bucket);return e!=null?mT(r,e):r}else return e!==void 0?vV(t,e):t}function AV(t,e){if(e&&TV(e)){if(t instanceof xd)return wV(t,e);throw ff("To use ref(service, url), the first argument must be a Storage instance.")}else return mT(t,e)}function d_(t,e){const n=e==null?void 0:e[sT];return n==null?null:rn.makeFromBucketSpec(n,t)}function IV(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Ly(s,t.app.options.projectId))}class xd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=rT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hL,this._maxUploadRetryTime=fL,this._requests=new Set,s!=null?this._bucket=rn.makeFromBucketSpec(s,this._host):this._bucket=d_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=d_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){df("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){df("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _i(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new SL(iT());{const o=UL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const p_="@firebase/storage",m_="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="storage";function Ax(t,e,n){return t=ct(t),mV(t,e,n)}function Ix(t){return t=ct(t),gV(t)}function bx(t){return t=ct(t),yV(t)}function Rx(t){return t=ct(t),EV(t)}function Sx(t,e){return t=ct(t),AV(t,e)}function bV(t=kf(),e){t=ct(t);const r=nu(t,gT).getImmediate({identifier:e}),s=Ny("storage");return s&&RV(r,...s),r}function RV(t,e,n,r={}){IV(t,e,n,r)}function SV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new xd(n,r,s,e,yi)}function CV(){fi(new ys(gT,SV,"PUBLIC").setMultipleInstances(!0)),cr(p_,m_,""),cr(p_,m_,"esm2017")}CV();var ji={};const PV={apiKey:ji.VUE_APP_FIREBASE_API_KEY,authDomain:ji.VUE_APP_FIREBASE_AUTH_DOMAIN,projectId:ji.VUE_APP_FIREBASE_PROJECT_ID,storageBucket:ji.VUE_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:ji.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,appId:ji.VUE_APP_FIREBASE_APP_ID},Md=My(PV),g_=vE(Md),_T=Yk(Md),Cx=bV(Md),OV={class:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top"},NV={class:"container-fluid"},DV=["aria-expanded"],kV=Or("span",{class:"navbar-toggler-icon"},null,-1),LV=[kV],VV={class:"navbar-nav ms-auto"},xV={key:0,class:"nav-item"},MV={__name:"Navigation",setup(t){const e=Xc(null),n=Xc(null),r=Xc(!0),s=oC();Z_(()=>{cE(g_,async m=>{var _;if(e.value=m,m){const v=await tT(gd(_T,"users",m.uid));n.value=((_=v.data())==null?void 0:_.role)||null}else n.value=null})});const i=[{to:"/",text:"Strona Główna",auth:null},{to:"/contact",text:"Kontakt",auth:null},{to:"/login",text:"Zaloguj się",auth:!1},{to:"/register",text:"Zarejestruj się",auth:!1},{to:"/appointment",text:"Umów wizytę",auth:!0},{to:"/remote",text:"Zdalna konsultacja",auth:!0},{to:"/profile",text:"Profil",auth:!0},{to:"/admin",text:"Panel Admina",auth:!0,admin:!0}],o=pn(()=>i.filter(m=>!(m.auth===!0&&!e.value||m.auth===!1&&e.value||m.admin&&n.value!=="admin")));function l(){r.value=!r.value}function u(){r.value=!0}async function d(){await H0(g_),r.value=!0,s.push("/login")}return(m,_)=>{const v=ty("RouterLink");return Gi(),oa("nav",OV,[Or("div",NV,[xt(v,{to:"/",class:"navbar-brand"},{default:Sh(()=>[Lh("Medical App")]),_:1}),Or("button",{class:"navbar-toggler",type:"button",onClick:l,"aria-expanded":!r.value,"aria-label":"Toggle navigation"},LV,8,DV),Or("div",{class:Fl(["collapse navbar-collapse",{show:!r.value}]),id:"navbarNav"},[Or("ul",VV,[(Gi(!0),oa(Vn,null,Jb(ai(o),S=>(Gi(),oa("li",{key:S.to,class:"nav-item"},[xt(v,{to:S.to,class:"nav-link","active-class":"active-link",onClick:u},{default:Sh(()=>[Lh(UI(S.text),1)]),_:2},1032,["to"])]))),128)),e.value?(Gi(),oa("li",xV,[Or("button",{class:"nav-link btn btn-link text-white",onClick:d}," Wyloguj ")])):vR("",!0)])],2)])])}}},UV=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},FV={class:"main-content"},$V={__name:"App",setup(t){return(e,n)=>{const r=ty("router-view");return Gi(),oa(Vn,null,[xt(MV,{class:"fixed-top"}),Or("div",FV,[xt(r)])],64)}}},BV=UV($V,[["__scopeId","data-v-5882dcf6"]]),jV="modulepreload",HV=function(t){return"/MedicalApp/"+t},__={},er=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=o(n.map(d=>{if(d=HV(d),d in __)return;__[d]=!0;const m=d.endsWith(".css"),_=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${_}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":jV,m||(v.as="script"),v.crossOrigin="",v.href=d,u&&v.setAttribute("nonce",u),document.head.appendChild(v),m)return new Promise((S,V)=>{v.addEventListener("load",S),v.addEventListener("error",()=>V(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},qV=[{path:"/",component:()=>er(()=>import("./DefaultLayout-3x47Es9t.js"),__vite__mapDeps([0,1])),children:[{path:"",name:"Home",component:()=>er(()=>import("./Home-Bd9CizRt.js"),__vite__mapDeps([2,3]))},{path:"contact",name:"Contact",component:()=>er(()=>import("./Contact-CsuSy_pK.js"),__vite__mapDeps([4,5]))},{path:"login",name:"Login",component:()=>er(()=>import("./Login-BQ-cib69.js"),[]),meta:{requiresGuest:!0}},{path:"register",name:"Register",component:()=>er(()=>import("./Register-C04tNVKU.js"),__vite__mapDeps([6,7])),meta:{requiresGuest:!0}},{path:"profile",name:"Profile",component:()=>er(()=>import("./Profile-BxxkKSrA.js"),__vite__mapDeps([8,9])),meta:{requiresAuth:!0}},{path:"remote",name:"RemoteAppointment",component:()=>er(()=>import("./RemoteAppointment-DN3FgdCW.js"),[]),meta:{requiresAuth:!0}},{path:"appointment",name:"Appointment",component:()=>er(()=>import("./AppointmentForm-Dfrb_zGM.js"),__vite__mapDeps([10,11])),meta:{requiresAuth:!0}},{path:"admin",name:"Admin",component:()=>er(()=>import("./Admin-DvkAb8Tv.js"),__vite__mapDeps([12,13])),meta:{requiresAuth:!0,roles:["admin"]}},{path:":pathMatch(.*)*",name:"NotFound",component:()=>er(()=>import("./NotFound-NhG_O4fd.js"),[])}]}],yT=sC({history:vS("/MedicalApp/"),routes:qV});yT.beforeEach(async(t,e,n)=>{const r=vE(),s=t.matched.some(u=>u.meta.requiresAuth),i=t.matched.some(u=>u.meta.requiresGuest),o=t.matched.filter(u=>u.meta.roles).flatMap(u=>u.meta.roles);let l=r.currentUser;if(l===null&&(l=await new Promise(u=>{const d=cE(r,m=>{d(),u(m)})})),s&&!l)return n({name:"Login"});if(i&&l)return n({name:"Home"});if(o.length&&l){const m=((await tT(gd(_T,"users",l.uid))).data()||{}).role;if(!o.includes(m))return n({name:"NotFound"})}n()});var fl={exports:{}};/*!
  * Bootstrap v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var KV=fl.exports,y_;function WV(){return y_||(y_=1,function(t,e){(function(n,r){t.exports=r()})(KV,function(){const n=new Map,r={set(p,c,f){n.has(p)||n.set(p,new Map);const y=n.get(p);if(!y.has(c)&&y.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(y.keys())[0]}.`);return}y.set(c,f)},get(p,c){return n.has(p)&&n.get(p).get(c)||null},remove(p,c){if(!n.has(p))return;const f=n.get(p);f.delete(c),f.size===0&&n.delete(p)}},s=1e6,i=1e3,o="transitionend",l=p=>(p&&window.CSS&&window.CSS.escape&&(p=p.replace(/#([^\s"#']+)/g,(c,f)=>`#${CSS.escape(f)}`)),p),u=p=>p==null?`${p}`:Object.prototype.toString.call(p).match(/\s([a-z]+)/i)[1].toLowerCase(),d=p=>{do p+=Math.floor(Math.random()*s);while(document.getElementById(p));return p},m=p=>{if(!p)return 0;let{transitionDuration:c,transitionDelay:f}=window.getComputedStyle(p);const y=Number.parseFloat(c),A=Number.parseFloat(f);return!y&&!A?0:(c=c.split(",")[0],f=f.split(",")[0],(Number.parseFloat(c)+Number.parseFloat(f))*i)},_=p=>{p.dispatchEvent(new Event(o))},v=p=>!p||typeof p!="object"?!1:(typeof p.jquery<"u"&&(p=p[0]),typeof p.nodeType<"u"),S=p=>v(p)?p.jquery?p[0]:p:typeof p=="string"&&p.length>0?document.querySelector(l(p)):null,V=p=>{if(!v(p)||p.getClientRects().length===0)return!1;const c=getComputedStyle(p).getPropertyValue("visibility")==="visible",f=p.closest("details:not([open])");if(!f)return c;if(f!==p){const y=p.closest("summary");if(y&&y.parentNode!==f||y===null)return!1}return c},B=p=>!p||p.nodeType!==Node.ELEMENT_NODE||p.classList.contains("disabled")?!0:typeof p.disabled<"u"?p.disabled:p.hasAttribute("disabled")&&p.getAttribute("disabled")!=="false",$=p=>{if(!document.documentElement.attachShadow)return null;if(typeof p.getRootNode=="function"){const c=p.getRootNode();return c instanceof ShadowRoot?c:null}return p instanceof ShadowRoot?p:p.parentNode?$(p.parentNode):null},G=()=>{},ee=p=>{p.offsetHeight},Q=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,oe=[],De=p=>{document.readyState==="loading"?(oe.length||document.addEventListener("DOMContentLoaded",()=>{for(const c of oe)c()}),oe.push(p)):p()},pe=()=>document.documentElement.dir==="rtl",C=p=>{De(()=>{const c=Q();if(c){const f=p.NAME,y=c.fn[f];c.fn[f]=p.jQueryInterface,c.fn[f].Constructor=p,c.fn[f].noConflict=()=>(c.fn[f]=y,p.jQueryInterface)}})},T=(p,c=[],f=p)=>typeof p=="function"?p.call(...c):f,b=(p,c,f=!0)=>{if(!f){T(p);return}const A=m(c)+5;let k=!1;const M=({target:H})=>{H===c&&(k=!0,c.removeEventListener(o,M),T(p))};c.addEventListener(o,M),setTimeout(()=>{k||_(c)},A)},P=(p,c,f,y)=>{const A=p.length;let k=p.indexOf(c);return k===-1?!f&&y?p[A-1]:p[0]:(k+=f?1:-1,y&&(k=(k+A)%A),p[Math.max(0,Math.min(k,A-1))])},O=/[^.]*(?=\..*)\.|.*/,D=/\..*/,R=/::\d+$/,ht={};let sn=1;const Ze={mouseenter:"mouseover",mouseleave:"mouseout"},Me=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Ne(p,c){return c&&`${c}::${sn++}`||p.uidEvent||sn++}function bt(p){const c=Ne(p);return p.uidEvent=c,ht[c]=ht[c]||{},ht[c]}function _n(p,c){return function f(y){return Ce(y,{delegateTarget:p}),f.oneOff&&L.off(p,y.type,c),c.apply(p,[y])}}function Xt(p,c,f){return function y(A){const k=p.querySelectorAll(c);for(let{target:M}=A;M&&M!==this;M=M.parentNode)for(const H of k)if(H===M)return Ce(A,{delegateTarget:M}),y.oneOff&&L.off(p,A.type,c,f),f.apply(M,[A])}}function Ye(p,c,f=null){return Object.values(p).find(y=>y.callable===c&&y.delegationSelector===f)}function Qe(p,c,f){const y=typeof c=="string",A=y?f:c||f;let k=se(p);return Me.has(k)||(k=p),[y,A,k]}function mr(p,c,f,y,A){if(typeof c!="string"||!p)return;let[k,M,H]=Qe(c,f,y);c in Ze&&(M=(Xe=>function(Oe){if(!Oe.relatedTarget||Oe.relatedTarget!==Oe.delegateTarget&&!Oe.delegateTarget.contains(Oe.relatedTarget))return Xe.call(this,Oe)})(M));const X=bt(p),ue=X[H]||(X[H]={}),te=Ye(ue,M,k?f:null);if(te){te.oneOff=te.oneOff&&A;return}const Re=Ne(M,c.replace(O,"")),Pe=k?Xt(p,f,M):_n(p,M);Pe.delegationSelector=k?f:null,Pe.callable=M,Pe.oneOff=A,Pe.uidEvent=Re,ue[Re]=Pe,p.addEventListener(H,Pe,k)}function q(p,c,f,y,A){const k=Ye(c[f],y,A);k&&(p.removeEventListener(f,k,!!A),delete c[f][k.uidEvent])}function ie(p,c,f,y){const A=c[f]||{};for(const[k,M]of Object.entries(A))k.includes(y)&&q(p,c,f,M.callable,M.delegationSelector)}function se(p){return p=p.replace(D,""),Ze[p]||p}const L={on(p,c,f,y){mr(p,c,f,y,!1)},one(p,c,f,y){mr(p,c,f,y,!0)},off(p,c,f,y){if(typeof c!="string"||!p)return;const[A,k,M]=Qe(c,f,y),H=M!==c,X=bt(p),ue=X[M]||{},te=c.startsWith(".");if(typeof k<"u"){if(!Object.keys(ue).length)return;q(p,X,M,k,A?f:null);return}if(te)for(const Re of Object.keys(X))ie(p,X,Re,c.slice(1));for(const[Re,Pe]of Object.entries(ue)){const we=Re.replace(R,"");(!H||c.includes(we))&&q(p,X,M,Pe.callable,Pe.delegationSelector)}},trigger(p,c,f){if(typeof c!="string"||!p)return null;const y=Q(),A=se(c),k=c!==A;let M=null,H=!0,X=!0,ue=!1;k&&y&&(M=y.Event(c,f),y(p).trigger(M),H=!M.isPropagationStopped(),X=!M.isImmediatePropagationStopped(),ue=M.isDefaultPrevented());const te=Ce(new Event(c,{bubbles:H,cancelable:!0}),f);return ue&&te.preventDefault(),X&&p.dispatchEvent(te),te.defaultPrevented&&M&&M.preventDefault(),te}};function Ce(p,c={}){for(const[f,y]of Object.entries(c))try{p[f]=y}catch{Object.defineProperty(p,f,{configurable:!0,get(){return y}})}return p}function We(p){if(p==="true")return!0;if(p==="false")return!1;if(p===Number(p).toString())return Number(p);if(p===""||p==="null")return null;if(typeof p!="string")return p;try{return JSON.parse(decodeURIComponent(p))}catch{return p}}function w(p){return p.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const I={setDataAttribute(p,c,f){p.setAttribute(`data-bs-${w(c)}`,f)},removeDataAttribute(p,c){p.removeAttribute(`data-bs-${w(c)}`)},getDataAttributes(p){if(!p)return{};const c={},f=Object.keys(p.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of f){let A=y.replace(/^bs/,"");A=A.charAt(0).toLowerCase()+A.slice(1),c[A]=We(p.dataset[y])}return c},getDataAttribute(p,c){return We(p.getAttribute(`data-bs-${w(c)}`))}};class x{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,f){const y=v(f)?I.getDataAttribute(f,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...v(f)?I.getDataAttributes(f):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,f=this.constructor.DefaultType){for(const[y,A]of Object.entries(f)){const k=c[y],M=v(k)?"element":u(k);if(!new RegExp(A).test(M))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${M}" but expected type "${A}".`)}}}const K="5.3.5";class F extends x{constructor(c,f){super(),c=S(c),c&&(this._element=c,this._config=this._getConfig(f),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),L.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,f,y=!0){b(c,f,y)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return r.get(S(c),this.DATA_KEY)}static getOrCreateInstance(c,f={}){return this.getInstance(c)||new this(c,typeof f=="object"?f:null)}static get VERSION(){return K}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const Z=p=>{let c=p.getAttribute("data-bs-target");if(!c||c==="#"){let f=p.getAttribute("href");if(!f||!f.includes("#")&&!f.startsWith("."))return null;f.includes("#")&&!f.startsWith("#")&&(f=`#${f.split("#")[1]}`),c=f&&f!=="#"?f.trim():null}return c?c.split(",").map(f=>l(f)).join(","):null},j={find(p,c=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(c,p))},findOne(p,c=document.documentElement){return Element.prototype.querySelector.call(c,p)},children(p,c){return[].concat(...p.children).filter(f=>f.matches(c))},parents(p,c){const f=[];let y=p.parentNode.closest(c);for(;y;)f.push(y),y=y.parentNode.closest(c);return f},prev(p,c){let f=p.previousElementSibling;for(;f;){if(f.matches(c))return[f];f=f.previousElementSibling}return[]},next(p,c){let f=p.nextElementSibling;for(;f;){if(f.matches(c))return[f];f=f.nextElementSibling}return[]},focusableChildren(p){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(f=>`${f}:not([tabindex^="-"])`).join(",");return this.find(c,p).filter(f=>!B(f)&&V(f))},getSelectorFromElement(p){const c=Z(p);return c&&j.findOne(c)?c:null},getElementFromSelector(p){const c=Z(p);return c?j.findOne(c):null},getMultipleElementsFromSelector(p){const c=Z(p);return c?j.find(c):[]}},J=(p,c="hide")=>{const f=`click.dismiss${p.EVENT_KEY}`,y=p.NAME;L.on(document,f,`[data-bs-dismiss="${y}"]`,function(A){if(["A","AREA"].includes(this.tagName)&&A.preventDefault(),B(this))return;const k=j.getElementFromSelector(this)||this.closest(`.${y}`);p.getOrCreateInstance(k)[c]()})},re="alert",he=".bs.alert",le=`close${he}`,fe=`closed${he}`,me="fade",Ie="show";class ge extends F{static get NAME(){return re}close(){if(L.trigger(this._element,le).defaultPrevented)return;this._element.classList.remove(Ie);const f=this._element.classList.contains(me);this._queueCallback(()=>this._destroyElement(),this._element,f)}_destroyElement(){this._element.remove(),L.trigger(this._element,fe),this.dispose()}static jQueryInterface(c){return this.each(function(){const f=ge.getOrCreateInstance(this);if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c](this)}})}}J(ge,"close"),C(ge);const ve="button",Ut=".bs.button",bn=".data-api",Ai="active",on='[data-bs-toggle="button"]',Ss=`click${Ut}${bn}`;class ot extends F{static get NAME(){return ve}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Ai))}static jQueryInterface(c){return this.each(function(){const f=ot.getOrCreateInstance(this);c==="toggle"&&f[c]()})}}L.on(document,Ss,on,p=>{p.preventDefault();const c=p.target.closest(on);ot.getOrCreateInstance(c).toggle()}),C(ot);const Ft="swipe",Rn=".bs.swipe",wu=`touchstart${Rn}`,So=`touchmove${Rn}`,tc=`touchend${Rn}`,nc=`pointerdown${Rn}`,Cs=`pointerup${Rn}`,Co="touch",Po="pen",gr="pointer-event",rc=40,Ii={endCallback:null,leftCallback:null,rightCallback:null},sc={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Kn extends x{constructor(c,f){super(),this._element=c,!(!c||!Kn.isSupported())&&(this._config=this._getConfig(f),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Ii}static get DefaultType(){return sc}static get NAME(){return Ft}dispose(){L.off(this._element,Rn)}_start(c){if(!this._supportPointerEvents){this._deltaX=c.touches[0].clientX;return}this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX)}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),T(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=rc)return;const f=c/this._deltaX;this._deltaX=0,f&&T(f>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(L.on(this._element,nc,c=>this._start(c)),L.on(this._element,Cs,c=>this._end(c)),this._element.classList.add(gr)):(L.on(this._element,wu,c=>this._start(c)),L.on(this._element,So,c=>this._move(c)),L.on(this._element,tc,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType===Po||c.pointerType===Co)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ic="carousel",Sn=".bs.carousel",Hr=".data-api",Ps="ArrowLeft",Au="ArrowRight",Iu=500,yn="next",qr="prev",Kr="left",_r="right",oc=`slide${Sn}`,Os=`slid${Sn}`,bi=`keydown${Sn}`,Wn=`mouseenter${Sn}`,ac=`mouseleave${Sn}`,cc=`dragstart${Sn}`,Oo=`load${Sn}${Hr}`,No=`click${Sn}${Hr}`,Do="carousel",Ns="active",bu="slide",Ri="carousel-item-end",lc="carousel-item-start",ko="carousel-item-next",Ds="carousel-item-prev",zn=".active",Si=".carousel-item",Ru=zn+Si,uc=".carousel-item img",hc=".carousel-indicators",fc="[data-bs-slide], [data-bs-slide-to]",Lo='[data-bs-ride="carousel"]',Vo={[Ps]:_r,[Au]:Kr},dc={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},pc={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Wr extends F{constructor(c,f){super(c,f),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=j.findOne(hc,this._element),this._addEventListeners(),this._config.ride===Do&&this.cycle()}static get Default(){return dc}static get DefaultType(){return pc}static get NAME(){return ic}next(){this._slide(yn)}nextWhenVisible(){!document.hidden&&V(this._element)&&this.next()}prev(){this._slide(qr)}pause(){this._isSliding&&_(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){L.one(this._element,Os,()=>this.cycle());return}this.cycle()}}to(c){const f=this._getItems();if(c>f.length-1||c<0)return;if(this._isSliding){L.one(this._element,Os,()=>this.to(c));return}const y=this._getItemIndex(this._getActive());if(y===c)return;const A=c>y?yn:qr;this._slide(A,f[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&L.on(this._element,bi,c=>this._keydown(c)),this._config.pause==="hover"&&(L.on(this._element,Wn,()=>this.pause()),L.on(this._element,ac,()=>this._maybeEnableCycle())),this._config.touch&&Kn.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const y of j.find(uc,this._element))L.on(y,cc,A=>A.preventDefault());const f={leftCallback:()=>this._slide(this._directionToOrder(Kr)),rightCallback:()=>this._slide(this._directionToOrder(_r)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Iu+this._config.interval))}};this._swipeHelper=new Kn(this._element,f)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const f=Vo[c.key];f&&(c.preventDefault(),this._slide(this._directionToOrder(f)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const f=j.findOne(zn,this._indicatorsElement);f.classList.remove(Ns),f.removeAttribute("aria-current");const y=j.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);y&&(y.classList.add(Ns),y.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const f=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=f||this._config.defaultInterval}_slide(c,f=null){if(this._isSliding)return;const y=this._getActive(),A=c===yn,k=f||P(this._getItems(),y,A,this._config.wrap);if(k===y)return;const M=this._getItemIndex(k),H=we=>L.trigger(this._element,we,{relatedTarget:k,direction:this._orderToDirection(c),from:this._getItemIndex(y),to:M});if(H(oc).defaultPrevented||!y||!k)return;const ue=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(M),this._activeElement=k;const te=A?lc:Ri,Re=A?ko:Ds;k.classList.add(Re),ee(k),y.classList.add(te),k.classList.add(te);const Pe=()=>{k.classList.remove(te,Re),k.classList.add(Ns),y.classList.remove(Ns,Re,te),this._isSliding=!1,H(Os)};this._queueCallback(Pe,y,this._isAnimated()),ue&&this.cycle()}_isAnimated(){return this._element.classList.contains(bu)}_getActive(){return j.findOne(Ru,this._element)}_getItems(){return j.find(Si,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return pe()?c===Kr?qr:yn:c===Kr?yn:qr}_orderToDirection(c){return pe()?c===qr?Kr:_r:c===qr?_r:Kr}static jQueryInterface(c){return this.each(function(){const f=Wr.getOrCreateInstance(this,c);if(typeof c=="number"){f.to(c);return}if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c]()}})}}L.on(document,No,fc,function(p){const c=j.getElementFromSelector(this);if(!c||!c.classList.contains(Do))return;p.preventDefault();const f=Wr.getOrCreateInstance(c),y=this.getAttribute("data-bs-slide-to");if(y){f.to(y),f._maybeEnableCycle();return}if(I.getDataAttribute(this,"slide")==="next"){f.next(),f._maybeEnableCycle();return}f.prev(),f._maybeEnableCycle()}),L.on(window,Oo,()=>{const p=j.find(Lo);for(const c of p)Wr.getOrCreateInstance(c)}),C(Wr);const Su="collapse",zr=".bs.collapse",Pu=".data-api",yr=`show${zr}`,Cn=`shown${zr}`,Ci=`hide${zr}`,Pi=`hidden${zr}`,mc=`click${zr}${Pu}`,qe="show",Pn="collapse",Gn="collapsing",ks="collapsed",Ou=`:scope .${Pn} .${Pn}`,gc="collapse-horizontal",Nu="width",Du="height",ku=".collapse.show, .collapse.collapsing",xo='[data-bs-toggle="collapse"]',Ls={parent:null,toggle:!0},Yn={parent:"(null|element)",toggle:"boolean"};class Er extends F{constructor(c,f){super(c,f),this._isTransitioning=!1,this._triggerArray=[];const y=j.find(xo);for(const A of y){const k=j.getSelectorFromElement(A),M=j.find(k).filter(H=>H===this._element);k!==null&&M.length&&this._triggerArray.push(A)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Ls}static get DefaultType(){return Yn}static get NAME(){return Su}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(ku).filter(H=>H!==this._element).map(H=>Er.getOrCreateInstance(H,{toggle:!1}))),c.length&&c[0]._isTransitioning||L.trigger(this._element,yr).defaultPrevented)return;for(const H of c)H.hide();const y=this._getDimension();this._element.classList.remove(Pn),this._element.classList.add(Gn),this._element.style[y]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const A=()=>{this._isTransitioning=!1,this._element.classList.remove(Gn),this._element.classList.add(Pn,qe),this._element.style[y]="",L.trigger(this._element,Cn)},M=`scroll${y[0].toUpperCase()+y.slice(1)}`;this._queueCallback(A,this._element,!0),this._element.style[y]=`${this._element[M]}px`}hide(){if(this._isTransitioning||!this._isShown()||L.trigger(this._element,Ci).defaultPrevented)return;const f=this._getDimension();this._element.style[f]=`${this._element.getBoundingClientRect()[f]}px`,ee(this._element),this._element.classList.add(Gn),this._element.classList.remove(Pn,qe);for(const A of this._triggerArray){const k=j.getElementFromSelector(A);k&&!this._isShown(k)&&this._addAriaAndCollapsedClass([A],!1)}this._isTransitioning=!0;const y=()=>{this._isTransitioning=!1,this._element.classList.remove(Gn),this._element.classList.add(Pn),L.trigger(this._element,Pi)};this._element.style[f]="",this._queueCallback(y,this._element,!0)}_isShown(c=this._element){return c.classList.contains(qe)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=S(c.parent),c}_getDimension(){return this._element.classList.contains(gc)?Nu:Du}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(xo);for(const f of c){const y=j.getElementFromSelector(f);y&&this._addAriaAndCollapsedClass([f],this._isShown(y))}}_getFirstLevelChildren(c){const f=j.find(Ou,this._config.parent);return j.find(c,this._config.parent).filter(y=>!f.includes(y))}_addAriaAndCollapsedClass(c,f){if(c.length)for(const y of c)y.classList.toggle(ks,!f),y.setAttribute("aria-expanded",f)}static jQueryInterface(c){const f={};return typeof c=="string"&&/show|hide/.test(c)&&(f.toggle=!1),this.each(function(){const y=Er.getOrCreateInstance(this,f);if(typeof c=="string"){if(typeof y[c]>"u")throw new TypeError(`No method named "${c}"`);y[c]()}})}}L.on(document,mc,xo,function(p){(p.target.tagName==="A"||p.delegateTarget&&p.delegateTarget.tagName==="A")&&p.preventDefault();for(const c of j.getMultipleElementsFromSelector(this))Er.getOrCreateInstance(c,{toggle:!1}).toggle()}),C(Er);var Rt="top",Bt="bottom",gt="right",Nt="left",Oi="auto",Gr=[Rt,Bt,gt,Nt],jt="start",Yr="end",_c="clippingParents",Qr="viewport",On="popper",Mo="reference",vr=Gr.reduce(function(p,c){return p.concat([c+"-"+jt,c+"-"+Yr])},[]),Tr=[].concat(Gr,[Oi]).reduce(function(p,c){return p.concat([c,c+"-"+jt,c+"-"+Yr])},[]),Uo="beforeRead",Ni="read",et="afterRead",yc="beforeMain",Ec="main",Fo="afterMain",$o="beforeWrite",Bo="write",Vs="afterWrite",jo=[Uo,Ni,et,yc,Ec,Fo,$o,Bo,Vs];function _t(p){return p?(p.nodeName||"").toLowerCase():null}function Ht(p){if(p==null)return window;if(p.toString()!=="[object Window]"){var c=p.ownerDocument;return c&&c.defaultView||window}return p}function wr(p){var c=Ht(p).Element;return p instanceof c||p instanceof Element}function St(p){var c=Ht(p).HTMLElement;return p instanceof c||p instanceof HTMLElement}function Di(p){if(typeof ShadowRoot>"u")return!1;var c=Ht(p).ShadowRoot;return p instanceof c||p instanceof ShadowRoot}function Ho(p){var c=p.state;Object.keys(c.elements).forEach(function(f){var y=c.styles[f]||{},A=c.attributes[f]||{},k=c.elements[f];!St(k)||!_t(k)||(Object.assign(k.style,y),Object.keys(A).forEach(function(M){var H=A[M];H===!1?k.removeAttribute(M):k.setAttribute(M,H===!0?"":H)}))})}function ki(p){var c=p.state,f={popper:{position:c.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(c.elements.popper.style,f.popper),c.styles=f,c.elements.arrow&&Object.assign(c.elements.arrow.style,f.arrow),function(){Object.keys(c.elements).forEach(function(y){var A=c.elements[y],k=c.attributes[y]||{},M=Object.keys(c.styles.hasOwnProperty(y)?c.styles[y]:f[y]),H=M.reduce(function(X,ue){return X[ue]="",X},{});!St(A)||!_t(A)||(Object.assign(A.style,H),Object.keys(k).forEach(function(X){A.removeAttribute(X)}))})}}const Li={name:"applyStyles",enabled:!0,phase:"write",fn:Ho,effect:ki,requires:["computeStyles"]};function Jt(p){return p.split("-")[0]}var Ar=Math.max,xs=Math.min,En=Math.round;function Vi(){var p=navigator.userAgentData;return p!=null&&p.brands&&Array.isArray(p.brands)?p.brands.map(function(c){return c.brand+"/"+c.version}).join(" "):navigator.userAgent}function qo(){return!/^((?!chrome|android).)*safari/i.test(Vi())}function Qn(p,c,f){c===void 0&&(c=!1),f===void 0&&(f=!1);var y=p.getBoundingClientRect(),A=1,k=1;c&&St(p)&&(A=p.offsetWidth>0&&En(y.width)/p.offsetWidth||1,k=p.offsetHeight>0&&En(y.height)/p.offsetHeight||1);var M=wr(p)?Ht(p):window,H=M.visualViewport,X=!qo()&&f,ue=(y.left+(X&&H?H.offsetLeft:0))/A,te=(y.top+(X&&H?H.offsetTop:0))/k,Re=y.width/A,Pe=y.height/k;return{width:Re,height:Pe,top:te,right:ue+Re,bottom:te+Pe,left:ue,x:ue,y:te}}function Ms(p){var c=Qn(p),f=p.offsetWidth,y=p.offsetHeight;return Math.abs(c.width-f)<=1&&(f=c.width),Math.abs(c.height-y)<=1&&(y=c.height),{x:p.offsetLeft,y:p.offsetTop,width:f,height:y}}function Ko(p,c){var f=c.getRootNode&&c.getRootNode();if(p.contains(c))return!0;if(f&&Di(f)){var y=c;do{if(y&&p.isSameNode(y))return!0;y=y.parentNode||y.host}while(y)}return!1}function an(p){return Ht(p).getComputedStyle(p)}function vc(p){return["table","td","th"].indexOf(_t(p))>=0}function Nn(p){return((wr(p)?p.ownerDocument:p.document)||window.document).documentElement}function vn(p){return _t(p)==="html"?p:p.assignedSlot||p.parentNode||(Di(p)?p.host:null)||Nn(p)}function Wo(p){return!St(p)||an(p).position==="fixed"?null:p.offsetParent}function Tc(p){var c=/firefox/i.test(Vi()),f=/Trident/i.test(Vi());if(f&&St(p)){var y=an(p);if(y.position==="fixed")return null}var A=vn(p);for(Di(A)&&(A=A.host);St(A)&&["html","body"].indexOf(_t(A))<0;){var k=an(A);if(k.transform!=="none"||k.perspective!=="none"||k.contain==="paint"||["transform","perspective"].indexOf(k.willChange)!==-1||c&&k.willChange==="filter"||c&&k.filter&&k.filter!=="none")return A;A=A.parentNode}return null}function Xr(p){for(var c=Ht(p),f=Wo(p);f&&vc(f)&&an(f).position==="static";)f=Wo(f);return f&&(_t(f)==="html"||_t(f)==="body"&&an(f).position==="static")?c:f||Tc(p)||c}function xi(p){return["top","bottom"].indexOf(p)>=0?"x":"y"}function Xn(p,c,f){return Ar(p,xs(c,f))}function Zt(p,c,f){var y=Xn(p,c,f);return y>f?f:y}function zo(){return{top:0,right:0,bottom:0,left:0}}function Go(p){return Object.assign({},zo(),p)}function Ir(p,c){return c.reduce(function(f,y){return f[y]=p,f},{})}var a=function(c,f){return c=typeof c=="function"?c(Object.assign({},f.rects,{placement:f.placement})):c,Go(typeof c!="number"?c:Ir(c,Gr))};function h(p){var c,f=p.state,y=p.name,A=p.options,k=f.elements.arrow,M=f.modifiersData.popperOffsets,H=Jt(f.placement),X=xi(H),ue=[Nt,gt].indexOf(H)>=0,te=ue?"height":"width";if(!(!k||!M)){var Re=a(A.padding,f),Pe=Ms(k),we=X==="y"?Rt:Nt,Xe=X==="y"?Bt:gt,Oe=f.rects.reference[te]+f.rects.reference[X]-M[X]-f.rects.popper[te],$e=M[X]-f.rects.reference[X],tt=Xr(k),dt=tt?X==="y"?tt.clientHeight||0:tt.clientWidth||0:0,pt=Oe/2-$e/2,Le=Re[we],ze=dt-Pe[te]-Re[Xe],Ge=dt/2-Pe[te]/2+pt,at=Xn(Le,Ge,ze),Dt=X;f.modifiersData[y]=(c={},c[Dt]=at,c.centerOffset=at-Ge,c)}}function g(p){var c=p.state,f=p.options,y=f.element,A=y===void 0?"[data-popper-arrow]":y;A!=null&&(typeof A=="string"&&(A=c.elements.popper.querySelector(A),!A)||Ko(c.elements.popper,A)&&(c.elements.arrow=A))}const E={name:"arrow",enabled:!0,phase:"main",fn:h,effect:g,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function N(p){return p.split("-")[1]}var U={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ne(p,c){var f=p.x,y=p.y,A=c.devicePixelRatio||1;return{x:En(f*A)/A||0,y:En(y*A)/A||0}}function Be(p){var c,f=p.popper,y=p.popperRect,A=p.placement,k=p.variation,M=p.offsets,H=p.position,X=p.gpuAcceleration,ue=p.adaptive,te=p.roundOffsets,Re=p.isFixed,Pe=M.x,we=Pe===void 0?0:Pe,Xe=M.y,Oe=Xe===void 0?0:Xe,$e=typeof te=="function"?te({x:we,y:Oe}):{x:we,y:Oe};we=$e.x,Oe=$e.y;var tt=M.hasOwnProperty("x"),dt=M.hasOwnProperty("y"),pt=Nt,Le=Rt,ze=window;if(ue){var Ge=Xr(f),at="clientHeight",Dt="clientWidth";if(Ge===Ht(f)&&(Ge=Nn(f),an(Ge).position!=="static"&&H==="absolute"&&(at="scrollHeight",Dt="scrollWidth")),Ge=Ge,A===Rt||(A===Nt||A===gt)&&k===Yr){Le=Bt;var Pt=Re&&Ge===ze&&ze.visualViewport?ze.visualViewport.height:Ge[at];Oe-=Pt-y.height,Oe*=X?1:-1}if(A===Nt||(A===Rt||A===Bt)&&k===Yr){pt=gt;var Tt=Re&&Ge===ze&&ze.visualViewport?ze.visualViewport.width:Ge[Dt];we-=Tt-y.width,we*=X?1:-1}}var qt=Object.assign({position:H},ue&&U),kn=te===!0?ne({x:we,y:Oe},Ht(f)):{x:we,y:Oe};if(we=kn.x,Oe=kn.y,X){var en;return Object.assign({},qt,(en={},en[Le]=dt?"0":"",en[pt]=tt?"0":"",en.transform=(ze.devicePixelRatio||1)<=1?"translate("+we+"px, "+Oe+"px)":"translate3d("+we+"px, "+Oe+"px, 0)",en))}return Object.assign({},qt,(c={},c[Le]=dt?Oe+"px":"",c[pt]=tt?we+"px":"",c.transform="",c))}function vt(p){var c=p.state,f=p.options,y=f.gpuAcceleration,A=y===void 0?!0:y,k=f.adaptive,M=k===void 0?!0:k,H=f.roundOffsets,X=H===void 0?!0:H,ue={placement:Jt(c.placement),variation:N(c.placement),popper:c.elements.popper,popperRect:c.rects.popper,gpuAcceleration:A,isFixed:c.options.strategy==="fixed"};c.modifiersData.popperOffsets!=null&&(c.styles.popper=Object.assign({},c.styles.popper,Be(Object.assign({},ue,{offsets:c.modifiersData.popperOffsets,position:c.options.strategy,adaptive:M,roundOffsets:X})))),c.modifiersData.arrow!=null&&(c.styles.arrow=Object.assign({},c.styles.arrow,Be(Object.assign({},ue,{offsets:c.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:X})))),c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-placement":c.placement})}const ke={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:vt,data:{}};var ft={passive:!0};function Ct(p){var c=p.state,f=p.instance,y=p.options,A=y.scroll,k=A===void 0?!0:A,M=y.resize,H=M===void 0?!0:M,X=Ht(c.elements.popper),ue=[].concat(c.scrollParents.reference,c.scrollParents.popper);return k&&ue.forEach(function(te){te.addEventListener("scroll",f.update,ft)}),H&&X.addEventListener("resize",f.update,ft),function(){k&&ue.forEach(function(te){te.removeEventListener("scroll",f.update,ft)}),H&&X.removeEventListener("resize",f.update,ft)}}const Jn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ct,data:{}};var fn={left:"right",right:"left",bottom:"top",top:"bottom"};function br(p){return p.replace(/left|right|bottom|top/g,function(c){return fn[c]})}var Yo={start:"end",end:"start"};function Ud(p){return p.replace(/start|end/g,function(c){return Yo[c]})}function Lu(p){var c=Ht(p),f=c.pageXOffset,y=c.pageYOffset;return{scrollLeft:f,scrollTop:y}}function Vu(p){return Qn(Nn(p)).left+Lu(p).scrollLeft}function ET(p,c){var f=Ht(p),y=Nn(p),A=f.visualViewport,k=y.clientWidth,M=y.clientHeight,H=0,X=0;if(A){k=A.width,M=A.height;var ue=qo();(ue||!ue&&c==="fixed")&&(H=A.offsetLeft,X=A.offsetTop)}return{width:k,height:M,x:H+Vu(p),y:X}}function vT(p){var c,f=Nn(p),y=Lu(p),A=(c=p.ownerDocument)==null?void 0:c.body,k=Ar(f.scrollWidth,f.clientWidth,A?A.scrollWidth:0,A?A.clientWidth:0),M=Ar(f.scrollHeight,f.clientHeight,A?A.scrollHeight:0,A?A.clientHeight:0),H=-y.scrollLeft+Vu(p),X=-y.scrollTop;return an(A||f).direction==="rtl"&&(H+=Ar(f.clientWidth,A?A.clientWidth:0)-k),{width:k,height:M,x:H,y:X}}function xu(p){var c=an(p),f=c.overflow,y=c.overflowX,A=c.overflowY;return/auto|scroll|overlay|hidden/.test(f+A+y)}function Fd(p){return["html","body","#document"].indexOf(_t(p))>=0?p.ownerDocument.body:St(p)&&xu(p)?p:Fd(vn(p))}function Qo(p,c){var f;c===void 0&&(c=[]);var y=Fd(p),A=y===((f=p.ownerDocument)==null?void 0:f.body),k=Ht(y),M=A?[k].concat(k.visualViewport||[],xu(y)?y:[]):y,H=c.concat(M);return A?H:H.concat(Qo(vn(M)))}function Mu(p){return Object.assign({},p,{left:p.x,top:p.y,right:p.x+p.width,bottom:p.y+p.height})}function TT(p,c){var f=Qn(p,!1,c==="fixed");return f.top=f.top+p.clientTop,f.left=f.left+p.clientLeft,f.bottom=f.top+p.clientHeight,f.right=f.left+p.clientWidth,f.width=p.clientWidth,f.height=p.clientHeight,f.x=f.left,f.y=f.top,f}function $d(p,c,f){return c===Qr?Mu(ET(p,f)):wr(c)?TT(c,f):Mu(vT(Nn(p)))}function wT(p){var c=Qo(vn(p)),f=["absolute","fixed"].indexOf(an(p).position)>=0,y=f&&St(p)?Xr(p):p;return wr(y)?c.filter(function(A){return wr(A)&&Ko(A,y)&&_t(A)!=="body"}):[]}function AT(p,c,f,y){var A=c==="clippingParents"?wT(p):[].concat(c),k=[].concat(A,[f]),M=k[0],H=k.reduce(function(X,ue){var te=$d(p,ue,y);return X.top=Ar(te.top,X.top),X.right=xs(te.right,X.right),X.bottom=xs(te.bottom,X.bottom),X.left=Ar(te.left,X.left),X},$d(p,M,y));return H.width=H.right-H.left,H.height=H.bottom-H.top,H.x=H.left,H.y=H.top,H}function Bd(p){var c=p.reference,f=p.element,y=p.placement,A=y?Jt(y):null,k=y?N(y):null,M=c.x+c.width/2-f.width/2,H=c.y+c.height/2-f.height/2,X;switch(A){case Rt:X={x:M,y:c.y-f.height};break;case Bt:X={x:M,y:c.y+c.height};break;case gt:X={x:c.x+c.width,y:H};break;case Nt:X={x:c.x-f.width,y:H};break;default:X={x:c.x,y:c.y}}var ue=A?xi(A):null;if(ue!=null){var te=ue==="y"?"height":"width";switch(k){case jt:X[ue]=X[ue]-(c[te]/2-f[te]/2);break;case Yr:X[ue]=X[ue]+(c[te]/2-f[te]/2);break}}return X}function Mi(p,c){c===void 0&&(c={});var f=c,y=f.placement,A=y===void 0?p.placement:y,k=f.strategy,M=k===void 0?p.strategy:k,H=f.boundary,X=H===void 0?_c:H,ue=f.rootBoundary,te=ue===void 0?Qr:ue,Re=f.elementContext,Pe=Re===void 0?On:Re,we=f.altBoundary,Xe=we===void 0?!1:we,Oe=f.padding,$e=Oe===void 0?0:Oe,tt=Go(typeof $e!="number"?$e:Ir($e,Gr)),dt=Pe===On?Mo:On,pt=p.rects.popper,Le=p.elements[Xe?dt:Pe],ze=AT(wr(Le)?Le:Le.contextElement||Nn(p.elements.popper),X,te,M),Ge=Qn(p.elements.reference),at=Bd({reference:Ge,element:pt,placement:A}),Dt=Mu(Object.assign({},pt,at)),Pt=Pe===On?Dt:Ge,Tt={top:ze.top-Pt.top+tt.top,bottom:Pt.bottom-ze.bottom+tt.bottom,left:ze.left-Pt.left+tt.left,right:Pt.right-ze.right+tt.right},qt=p.modifiersData.offset;if(Pe===On&&qt){var kn=qt[A];Object.keys(Tt).forEach(function(en){var Ks=[gt,Bt].indexOf(en)>=0?1:-1,Ws=[Rt,Bt].indexOf(en)>=0?"y":"x";Tt[en]+=kn[Ws]*Ks})}return Tt}function IT(p,c){c===void 0&&(c={});var f=c,y=f.placement,A=f.boundary,k=f.rootBoundary,M=f.padding,H=f.flipVariations,X=f.allowedAutoPlacements,ue=X===void 0?Tr:X,te=N(y),Re=te?H?vr:vr.filter(function(Xe){return N(Xe)===te}):Gr,Pe=Re.filter(function(Xe){return ue.indexOf(Xe)>=0});Pe.length===0&&(Pe=Re);var we=Pe.reduce(function(Xe,Oe){return Xe[Oe]=Mi(p,{placement:Oe,boundary:A,rootBoundary:k,padding:M})[Jt(Oe)],Xe},{});return Object.keys(we).sort(function(Xe,Oe){return we[Xe]-we[Oe]})}function bT(p){if(Jt(p)===Oi)return[];var c=br(p);return[Ud(p),c,Ud(c)]}function RT(p){var c=p.state,f=p.options,y=p.name;if(!c.modifiersData[y]._skip){for(var A=f.mainAxis,k=A===void 0?!0:A,M=f.altAxis,H=M===void 0?!0:M,X=f.fallbackPlacements,ue=f.padding,te=f.boundary,Re=f.rootBoundary,Pe=f.altBoundary,we=f.flipVariations,Xe=we===void 0?!0:we,Oe=f.allowedAutoPlacements,$e=c.options.placement,tt=Jt($e),dt=tt===$e,pt=X||(dt||!Xe?[br($e)]:bT($e)),Le=[$e].concat(pt).reduce(function($i,Zr){return $i.concat(Jt(Zr)===Oi?IT(c,{placement:Zr,boundary:te,rootBoundary:Re,padding:ue,flipVariations:Xe,allowedAutoPlacements:Oe}):Zr)},[]),ze=c.rects.reference,Ge=c.rects.popper,at=new Map,Dt=!0,Pt=Le[0],Tt=0;Tt<Le.length;Tt++){var qt=Le[Tt],kn=Jt(qt),en=N(qt)===jt,Ks=[Rt,Bt].indexOf(kn)>=0,Ws=Ks?"width":"height",dn=Mi(c,{placement:qt,boundary:te,rootBoundary:Re,altBoundary:Pe,padding:ue}),Ln=Ks?en?gt:Nt:en?Bt:Rt;ze[Ws]>Ge[Ws]&&(Ln=br(Ln));var Oc=br(Ln),zs=[];if(k&&zs.push(dn[kn]<=0),H&&zs.push(dn[Ln]<=0,dn[Oc]<=0),zs.every(function($i){return $i})){Pt=qt,Dt=!1;break}at.set(qt,zs)}if(Dt)for(var Nc=Xe?3:1,Xu=function(Zr){var ta=Le.find(function(kc){var Gs=at.get(kc);if(Gs)return Gs.slice(0,Zr).every(function(Ju){return Ju})});if(ta)return Pt=ta,"break"},ea=Nc;ea>0;ea--){var Dc=Xu(ea);if(Dc==="break")break}c.placement!==Pt&&(c.modifiersData[y]._skip=!0,c.placement=Pt,c.reset=!0)}}const jd={name:"flip",enabled:!0,phase:"main",fn:RT,requiresIfExists:["offset"],data:{_skip:!1}};function Hd(p,c,f){return f===void 0&&(f={x:0,y:0}),{top:p.top-c.height-f.y,right:p.right-c.width+f.x,bottom:p.bottom-c.height+f.y,left:p.left-c.width-f.x}}function qd(p){return[Rt,gt,Bt,Nt].some(function(c){return p[c]>=0})}function ST(p){var c=p.state,f=p.name,y=c.rects.reference,A=c.rects.popper,k=c.modifiersData.preventOverflow,M=Mi(c,{elementContext:"reference"}),H=Mi(c,{altBoundary:!0}),X=Hd(M,y),ue=Hd(H,A,k),te=qd(X),Re=qd(ue);c.modifiersData[f]={referenceClippingOffsets:X,popperEscapeOffsets:ue,isReferenceHidden:te,hasPopperEscaped:Re},c.attributes.popper=Object.assign({},c.attributes.popper,{"data-popper-reference-hidden":te,"data-popper-escaped":Re})}const Kd={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ST};function CT(p,c,f){var y=Jt(p),A=[Nt,Rt].indexOf(y)>=0?-1:1,k=typeof f=="function"?f(Object.assign({},c,{placement:p})):f,M=k[0],H=k[1];return M=M||0,H=(H||0)*A,[Nt,gt].indexOf(y)>=0?{x:H,y:M}:{x:M,y:H}}function PT(p){var c=p.state,f=p.options,y=p.name,A=f.offset,k=A===void 0?[0,0]:A,M=Tr.reduce(function(te,Re){return te[Re]=CT(Re,c.rects,k),te},{}),H=M[c.placement],X=H.x,ue=H.y;c.modifiersData.popperOffsets!=null&&(c.modifiersData.popperOffsets.x+=X,c.modifiersData.popperOffsets.y+=ue),c.modifiersData[y]=M}const Wd={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:PT};function OT(p){var c=p.state,f=p.name;c.modifiersData[f]=Bd({reference:c.rects.reference,element:c.rects.popper,placement:c.placement})}const Uu={name:"popperOffsets",enabled:!0,phase:"read",fn:OT,data:{}};function NT(p){return p==="x"?"y":"x"}function DT(p){var c=p.state,f=p.options,y=p.name,A=f.mainAxis,k=A===void 0?!0:A,M=f.altAxis,H=M===void 0?!1:M,X=f.boundary,ue=f.rootBoundary,te=f.altBoundary,Re=f.padding,Pe=f.tether,we=Pe===void 0?!0:Pe,Xe=f.tetherOffset,Oe=Xe===void 0?0:Xe,$e=Mi(c,{boundary:X,rootBoundary:ue,padding:Re,altBoundary:te}),tt=Jt(c.placement),dt=N(c.placement),pt=!dt,Le=xi(tt),ze=NT(Le),Ge=c.modifiersData.popperOffsets,at=c.rects.reference,Dt=c.rects.popper,Pt=typeof Oe=="function"?Oe(Object.assign({},c.rects,{placement:c.placement})):Oe,Tt=typeof Pt=="number"?{mainAxis:Pt,altAxis:Pt}:Object.assign({mainAxis:0,altAxis:0},Pt),qt=c.modifiersData.offset?c.modifiersData.offset[c.placement]:null,kn={x:0,y:0};if(Ge){if(k){var en,Ks=Le==="y"?Rt:Nt,Ws=Le==="y"?Bt:gt,dn=Le==="y"?"height":"width",Ln=Ge[Le],Oc=Ln+$e[Ks],zs=Ln-$e[Ws],Nc=we?-Dt[dn]/2:0,Xu=dt===jt?at[dn]:Dt[dn],ea=dt===jt?-Dt[dn]:-at[dn],Dc=c.elements.arrow,$i=we&&Dc?Ms(Dc):{width:0,height:0},Zr=c.modifiersData["arrow#persistent"]?c.modifiersData["arrow#persistent"].padding:zo(),ta=Zr[Ks],kc=Zr[Ws],Gs=Xn(0,at[dn],$i[dn]),Ju=pt?at[dn]/2-Nc-Gs-ta-Tt.mainAxis:Xu-Gs-ta-Tt.mainAxis,II=pt?-at[dn]/2+Nc+Gs+kc+Tt.mainAxis:ea+Gs+kc+Tt.mainAxis,Zu=c.elements.arrow&&Xr(c.elements.arrow),bI=Zu?Le==="y"?Zu.clientTop||0:Zu.clientLeft||0:0,Lp=(en=qt==null?void 0:qt[Le])!=null?en:0,RI=Ln+Ju-Lp-bI,SI=Ln+II-Lp,Vp=Xn(we?xs(Oc,RI):Oc,Ln,we?Ar(zs,SI):zs);Ge[Le]=Vp,kn[Le]=Vp-Ln}if(H){var xp,CI=Le==="x"?Rt:Nt,PI=Le==="x"?Bt:gt,Ys=Ge[ze],Lc=ze==="y"?"height":"width",Mp=Ys+$e[CI],Up=Ys-$e[PI],eh=[Rt,Nt].indexOf(tt)!==-1,Fp=(xp=qt==null?void 0:qt[ze])!=null?xp:0,$p=eh?Mp:Ys-at[Lc]-Dt[Lc]-Fp+Tt.altAxis,Bp=eh?Ys+at[Lc]+Dt[Lc]-Fp-Tt.altAxis:Up,jp=we&&eh?Zt($p,Ys,Bp):Xn(we?$p:Mp,Ys,we?Bp:Up);Ge[ze]=jp,kn[ze]=jp-Ys}c.modifiersData[y]=kn}}const zd={name:"preventOverflow",enabled:!0,phase:"main",fn:DT,requiresIfExists:["offset"]};function kT(p){return{scrollLeft:p.scrollLeft,scrollTop:p.scrollTop}}function LT(p){return p===Ht(p)||!St(p)?Lu(p):kT(p)}function VT(p){var c=p.getBoundingClientRect(),f=En(c.width)/p.offsetWidth||1,y=En(c.height)/p.offsetHeight||1;return f!==1||y!==1}function xT(p,c,f){f===void 0&&(f=!1);var y=St(c),A=St(c)&&VT(c),k=Nn(c),M=Qn(p,A,f),H={scrollLeft:0,scrollTop:0},X={x:0,y:0};return(y||!y&&!f)&&((_t(c)!=="body"||xu(k))&&(H=LT(c)),St(c)?(X=Qn(c,!0),X.x+=c.clientLeft,X.y+=c.clientTop):k&&(X.x=Vu(k))),{x:M.left+H.scrollLeft-X.x,y:M.top+H.scrollTop-X.y,width:M.width,height:M.height}}function MT(p){var c=new Map,f=new Set,y=[];p.forEach(function(k){c.set(k.name,k)});function A(k){f.add(k.name);var M=[].concat(k.requires||[],k.requiresIfExists||[]);M.forEach(function(H){if(!f.has(H)){var X=c.get(H);X&&A(X)}}),y.push(k)}return p.forEach(function(k){f.has(k.name)||A(k)}),y}function UT(p){var c=MT(p);return jo.reduce(function(f,y){return f.concat(c.filter(function(A){return A.phase===y}))},[])}function FT(p){var c;return function(){return c||(c=new Promise(function(f){Promise.resolve().then(function(){c=void 0,f(p())})})),c}}function $T(p){var c=p.reduce(function(f,y){var A=f[y.name];return f[y.name]=A?Object.assign({},A,y,{options:Object.assign({},A.options,y.options),data:Object.assign({},A.data,y.data)}):y,f},{});return Object.keys(c).map(function(f){return c[f]})}var Gd={placement:"bottom",modifiers:[],strategy:"absolute"};function Yd(){for(var p=arguments.length,c=new Array(p),f=0;f<p;f++)c[f]=arguments[f];return!c.some(function(y){return!(y&&typeof y.getBoundingClientRect=="function")})}function wc(p){p===void 0&&(p={});var c=p,f=c.defaultModifiers,y=f===void 0?[]:f,A=c.defaultOptions,k=A===void 0?Gd:A;return function(H,X,ue){ue===void 0&&(ue=k);var te={placement:"bottom",orderedModifiers:[],options:Object.assign({},Gd,k),modifiersData:{},elements:{reference:H,popper:X},attributes:{},styles:{}},Re=[],Pe=!1,we={state:te,setOptions:function(tt){var dt=typeof tt=="function"?tt(te.options):tt;Oe(),te.options=Object.assign({},k,te.options,dt),te.scrollParents={reference:wr(H)?Qo(H):H.contextElement?Qo(H.contextElement):[],popper:Qo(X)};var pt=UT($T([].concat(y,te.options.modifiers)));return te.orderedModifiers=pt.filter(function(Le){return Le.enabled}),Xe(),we.update()},forceUpdate:function(){if(!Pe){var tt=te.elements,dt=tt.reference,pt=tt.popper;if(Yd(dt,pt)){te.rects={reference:xT(dt,Xr(pt),te.options.strategy==="fixed"),popper:Ms(pt)},te.reset=!1,te.placement=te.options.placement,te.orderedModifiers.forEach(function(Tt){return te.modifiersData[Tt.name]=Object.assign({},Tt.data)});for(var Le=0;Le<te.orderedModifiers.length;Le++){if(te.reset===!0){te.reset=!1,Le=-1;continue}var ze=te.orderedModifiers[Le],Ge=ze.fn,at=ze.options,Dt=at===void 0?{}:at,Pt=ze.name;typeof Ge=="function"&&(te=Ge({state:te,options:Dt,name:Pt,instance:we})||te)}}}},update:FT(function(){return new Promise(function($e){we.forceUpdate(),$e(te)})}),destroy:function(){Oe(),Pe=!0}};if(!Yd(H,X))return we;we.setOptions(ue).then(function($e){!Pe&&ue.onFirstUpdate&&ue.onFirstUpdate($e)});function Xe(){te.orderedModifiers.forEach(function($e){var tt=$e.name,dt=$e.options,pt=dt===void 0?{}:dt,Le=$e.effect;if(typeof Le=="function"){var ze=Le({state:te,name:tt,instance:we,options:pt}),Ge=function(){};Re.push(ze||Ge)}})}function Oe(){Re.forEach(function($e){return $e()}),Re=[]}return we}}var BT=wc(),jT=[Jn,Uu,ke,Li],HT=wc({defaultModifiers:jT}),qT=[Jn,Uu,ke,Li,Wd,jd,zd,E,Kd],Fu=wc({defaultModifiers:qT});const Qd=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Fo,afterRead:et,afterWrite:Vs,applyStyles:Li,arrow:E,auto:Oi,basePlacements:Gr,beforeMain:yc,beforeRead:Uo,beforeWrite:$o,bottom:Bt,clippingParents:_c,computeStyles:ke,createPopper:Fu,createPopperBase:BT,createPopperLite:HT,detectOverflow:Mi,end:Yr,eventListeners:Jn,flip:jd,hide:Kd,left:Nt,main:Ec,modifierPhases:jo,offset:Wd,placements:Tr,popper:On,popperGenerator:wc,popperOffsets:Uu,preventOverflow:zd,read:Ni,reference:Mo,right:gt,start:jt,top:Rt,variationPlacements:vr,viewport:Qr,write:Bo},Symbol.toStringTag,{value:"Module"})),Xd="dropdown",Us=".bs.dropdown",$u=".data-api",KT="Escape",Jd="Tab",WT="ArrowUp",Zd="ArrowDown",zT=2,GT=`hide${Us}`,YT=`hidden${Us}`,QT=`show${Us}`,XT=`shown${Us}`,ep=`click${Us}${$u}`,tp=`keydown${Us}${$u}`,JT=`keyup${Us}${$u}`,Ui="show",ZT="dropup",ew="dropend",tw="dropstart",nw="dropup-center",rw="dropdown-center",Fs='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',sw=`${Fs}.${Ui}`,Ac=".dropdown-menu",iw=".navbar",ow=".navbar-nav",aw=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",cw=pe()?"top-end":"top-start",lw=pe()?"top-start":"top-end",uw=pe()?"bottom-end":"bottom-start",hw=pe()?"bottom-start":"bottom-end",fw=pe()?"left-start":"right-start",dw=pe()?"right-start":"left-start",pw="top",mw="bottom",gw={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},_w={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Dn extends F{constructor(c,f){super(c,f),this._popper=null,this._parent=this._element.parentNode,this._menu=j.next(this._element,Ac)[0]||j.prev(this._element,Ac)[0]||j.findOne(Ac,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return gw}static get DefaultType(){return _w}static get NAME(){return Xd}toggle(){return this._isShown()?this.hide():this.show()}show(){if(B(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!L.trigger(this._element,QT,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(ow))for(const y of[].concat(...document.body.children))L.on(y,"mouseover",G);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ui),this._element.classList.add(Ui),L.trigger(this._element,XT,c)}}hide(){if(B(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!L.trigger(this._element,GT,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const y of[].concat(...document.body.children))L.off(y,"mouseover",G);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ui),this._element.classList.remove(Ui),this._element.setAttribute("aria-expanded","false"),I.removeDataAttribute(this._menu,"popper"),L.trigger(this._element,YT,c)}}_getConfig(c){if(c=super._getConfig(c),typeof c.reference=="object"&&!v(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${Xd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(typeof Qd>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let c=this._element;this._config.reference==="parent"?c=this._parent:v(this._config.reference)?c=S(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const f=this._getPopperConfig();this._popper=Fu(c,this._menu,f)}_isShown(){return this._menu.classList.contains(Ui)}_getPlacement(){const c=this._parent;if(c.classList.contains(ew))return fw;if(c.classList.contains(tw))return dw;if(c.classList.contains(nw))return pw;if(c.classList.contains(rw))return mw;const f=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains(ZT)?f?lw:cw:f?hw:uw}_detectNavbar(){return this._element.closest(iw)!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(f=>Number.parseInt(f,10)):typeof c=="function"?f=>c(f,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(I.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...T(this._config.popperConfig,[void 0,c])}}_selectMenuItem({key:c,target:f}){const y=j.find(aw,this._menu).filter(A=>V(A));y.length&&P(y,f,c===Zd,!y.includes(f)).focus()}static jQueryInterface(c){return this.each(function(){const f=Dn.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof f[c]>"u")throw new TypeError(`No method named "${c}"`);f[c]()}})}static clearMenus(c){if(c.button===zT||c.type==="keyup"&&c.key!==Jd)return;const f=j.find(sw);for(const y of f){const A=Dn.getInstance(y);if(!A||A._config.autoClose===!1)continue;const k=c.composedPath(),M=k.includes(A._menu);if(k.includes(A._element)||A._config.autoClose==="inside"&&!M||A._config.autoClose==="outside"&&M||A._menu.contains(c.target)&&(c.type==="keyup"&&c.key===Jd||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const H={relatedTarget:A._element};c.type==="click"&&(H.clickEvent=c),A._completeHide(H)}}static dataApiKeydownHandler(c){const f=/input|textarea/i.test(c.target.tagName),y=c.key===KT,A=[WT,Zd].includes(c.key);if(!A&&!y||f&&!y)return;c.preventDefault();const k=this.matches(Fs)?this:j.prev(this,Fs)[0]||j.next(this,Fs)[0]||j.findOne(Fs,c.delegateTarget.parentNode),M=Dn.getOrCreateInstance(k);if(A){c.stopPropagation(),M.show(),M._selectMenuItem(c);return}M._isShown()&&(c.stopPropagation(),M.hide(),k.focus())}}L.on(document,tp,Fs,Dn.dataApiKeydownHandler),L.on(document,tp,Ac,Dn.dataApiKeydownHandler),L.on(document,ep,Dn.clearMenus),L.on(document,JT,Dn.clearMenus),L.on(document,ep,Fs,function(p){p.preventDefault(),Dn.getOrCreateInstance(this).toggle()}),C(Dn);const np="backdrop",yw="fade",rp="show",sp=`mousedown.bs.${np}`,Ew={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},vw={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ip extends x{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return Ew}static get DefaultType(){return vw}static get NAME(){return np}show(c){if(!this._config.isVisible){T(c);return}this._append();const f=this._getElement();this._config.isAnimated&&ee(f),f.classList.add(rp),this._emulateAnimation(()=>{T(c)})}hide(c){if(!this._config.isVisible){T(c);return}this._getElement().classList.remove(rp),this._emulateAnimation(()=>{this.dispose(),T(c)})}dispose(){this._isAppended&&(L.off(this._element,sp),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add(yw),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=S(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),L.on(c,sp,()=>{T(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){b(c,this._getElement(),this._config.isAnimated)}}const Tw="focustrap",Ic=".bs.focustrap",ww=`focusin${Ic}`,Aw=`keydown.tab${Ic}`,Iw="Tab",bw="forward",op="backward",Rw={autofocus:!0,trapElement:null},Sw={autofocus:"boolean",trapElement:"element"};class ap extends x{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Rw}static get DefaultType(){return Sw}static get NAME(){return Tw}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),L.off(document,Ic),L.on(document,ww,c=>this._handleFocusin(c)),L.on(document,Aw,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,L.off(document,Ic))}_handleFocusin(c){const{trapElement:f}=this._config;if(c.target===document||c.target===f||f.contains(c.target))return;const y=j.focusableChildren(f);y.length===0?f.focus():this._lastTabNavDirection===op?y[y.length-1].focus():y[0].focus()}_handleKeydown(c){c.key===Iw&&(this._lastTabNavDirection=c.shiftKey?op:bw)}}const cp=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",lp=".sticky-top",bc="padding-right",up="margin-right";class Bu{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,bc,f=>f+c),this._setElementAttributes(cp,bc,f=>f+c),this._setElementAttributes(lp,up,f=>f-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,bc),this._resetElementAttributes(cp,bc),this._resetElementAttributes(lp,up)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,f,y){const A=this.getWidth(),k=M=>{if(M!==this._element&&window.innerWidth>M.clientWidth+A)return;this._saveInitialAttribute(M,f);const H=window.getComputedStyle(M).getPropertyValue(f);M.style.setProperty(f,`${y(Number.parseFloat(H))}px`)};this._applyManipulationCallback(c,k)}_saveInitialAttribute(c,f){const y=c.style.getPropertyValue(f);y&&I.setDataAttribute(c,f,y)}_resetElementAttributes(c,f){const y=A=>{const k=I.getDataAttribute(A,f);if(k===null){A.style.removeProperty(f);return}I.removeDataAttribute(A,f),A.style.setProperty(f,k)};this._applyManipulationCallback(c,y)}_applyManipulationCallback(c,f){if(v(c)){f(c);return}for(const y of j.find(c,this._element))f(y)}}const Cw="modal",Tn=".bs.modal",Pw=".data-api",Ow="Escape",Nw=`hide${Tn}`,Dw=`hidePrevented${Tn}`,hp=`hidden${Tn}`,fp=`show${Tn}`,kw=`shown${Tn}`,Lw=`resize${Tn}`,Vw=`click.dismiss${Tn}`,xw=`mousedown.dismiss${Tn}`,Mw=`keydown.dismiss${Tn}`,Uw=`click${Tn}${Pw}`,dp="modal-open",Fw="fade",pp="show",ju="modal-static",$w=".modal.show",Bw=".modal-dialog",jw=".modal-body",Hw='[data-bs-toggle="modal"]',qw={backdrop:!0,focus:!0,keyboard:!0},Kw={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class $s extends F{constructor(c,f){super(c,f),this._dialog=j.findOne(Bw,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Bu,this._addEventListeners()}static get Default(){return qw}static get DefaultType(){return Kw}static get NAME(){return Cw}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||L.trigger(this._element,fp,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(dp),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){!this._isShown||this._isTransitioning||L.trigger(this._element,Nw).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(pp),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){L.off(window,Tn),L.off(this._dialog,Tn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ip({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new ap({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const f=j.findOne(jw,this._dialog);f&&(f.scrollTop=0),ee(this._element),this._element.classList.add(pp);const y=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,L.trigger(this._element,kw,{relatedTarget:c})};this._queueCallback(y,this._dialog,this._isAnimated())}_addEventListeners(){L.on(this._element,Mw,c=>{if(c.key===Ow){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),L.on(window,Lw,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),L.on(this._element,xw,c=>{L.one(this._element,Vw,f=>{if(!(this._element!==c.target||this._element!==f.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(dp),this._resetAdjustments(),this._scrollBar.reset(),L.trigger(this._element,hp)})}_isAnimated(){return this._element.classList.contains(Fw)}_triggerBackdropTransition(){if(L.trigger(this._element,Dw).defaultPrevented)return;const f=this._element.scrollHeight>document.documentElement.clientHeight,y=this._element.style.overflowY;y==="hidden"||this._element.classList.contains(ju)||(f||(this._element.style.overflowY="hidden"),this._element.classList.add(ju),this._queueCallback(()=>{this._element.classList.remove(ju),this._queueCallback(()=>{this._element.style.overflowY=y},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,f=this._scrollBar.getWidth(),y=f>0;if(y&&!c){const A=pe()?"paddingLeft":"paddingRight";this._element.style[A]=`${f}px`}if(!y&&c){const A=pe()?"paddingRight":"paddingLeft";this._element.style[A]=`${f}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,f){return this.each(function(){const y=$s.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof y[c]>"u")throw new TypeError(`No method named "${c}"`);y[c](f)}})}}L.on(document,Uw,Hw,function(p){const c=j.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&p.preventDefault(),L.one(c,fp,A=>{A.defaultPrevented||L.one(c,hp,()=>{V(this)&&this.focus()})});const f=j.findOne($w);f&&$s.getInstance(f).hide(),$s.getOrCreateInstance(c).toggle(this)}),J($s),C($s);const Ww="offcanvas",Rr=".bs.offcanvas",mp=".data-api",zw=`load${Rr}${mp}`,Gw="Escape",gp="show",_p="showing",yp="hiding",Yw="offcanvas-backdrop",Ep=".offcanvas.show",Qw=`show${Rr}`,Xw=`shown${Rr}`,Jw=`hide${Rr}`,vp=`hidePrevented${Rr}`,Tp=`hidden${Rr}`,Zw=`resize${Rr}`,eA=`click${Rr}${mp}`,tA=`keydown.dismiss${Rr}`,nA='[data-bs-toggle="offcanvas"]',rA={backdrop:!0,keyboard:!0,scroll:!1},sA={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Sr extends F{constructor(c,f){super(c,f),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return rA}static get DefaultType(){return sA}static get NAME(){return Ww}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){if(this._isShown||L.trigger(this._element,Qw,{relatedTarget:c}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Bu().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(_p);const y=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(gp),this._element.classList.remove(_p),L.trigger(this._element,Xw,{relatedTarget:c})};this._queueCallback(y,this._element,!0)}hide(){if(!this._isShown||L.trigger(this._element,Jw).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(yp),this._backdrop.hide();const f=()=>{this._element.classList.remove(gp,yp),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Bu().reset(),L.trigger(this._element,Tp)};this._queueCallback(f,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=()=>{if(this._config.backdrop==="static"){L.trigger(this._element,vp);return}this.hide()},f=!!this._config.backdrop;return new ip({className:Yw,isVisible:f,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:f?c:null})}_initializeFocusTrap(){return new ap({trapElement:this._element})}_addEventListeners(){L.on(this._element,tA,c=>{if(c.key===Gw){if(this._config.keyboard){this.hide();return}L.trigger(this._element,vp)}})}static jQueryInterface(c){return this.each(function(){const f=Sr.getOrCreateInstance(this,c);if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c](this)}})}}L.on(document,eA,nA,function(p){const c=j.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&p.preventDefault(),B(this))return;L.one(c,Tp,()=>{V(this)&&this.focus()});const f=j.findOne(Ep);f&&f!==c&&Sr.getInstance(f).hide(),Sr.getOrCreateInstance(c).toggle(this)}),L.on(window,zw,()=>{for(const p of j.find(Ep))Sr.getOrCreateInstance(p).show()}),L.on(window,Zw,()=>{for(const p of j.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(p).position!=="fixed"&&Sr.getOrCreateInstance(p).hide()}),J(Sr),C(Sr);const wp={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},iA=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),oA=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,aA=(p,c)=>{const f=p.nodeName.toLowerCase();return c.includes(f)?iA.has(f)?!!oA.test(p.nodeValue):!0:c.filter(y=>y instanceof RegExp).some(y=>y.test(f))};function cA(p,c,f){if(!p.length)return p;if(f&&typeof f=="function")return f(p);const A=new window.DOMParser().parseFromString(p,"text/html"),k=[].concat(...A.body.querySelectorAll("*"));for(const M of k){const H=M.nodeName.toLowerCase();if(!Object.keys(c).includes(H)){M.remove();continue}const X=[].concat(...M.attributes),ue=[].concat(c["*"]||[],c[H]||[]);for(const te of X)aA(te,ue)||M.removeAttribute(te.nodeName)}return A.body.innerHTML}const lA="TemplateFactory",uA={allowList:wp,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},hA={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},fA={entry:"(string|element|function|null)",selector:"(string|element)"};class dA extends x{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return uA}static get DefaultType(){return hA}static get NAME(){return lA}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[A,k]of Object.entries(this._config.content))this._setContent(c,k,A);const f=c.children[0],y=this._resolvePossibleFunction(this._config.extraClass);return y&&f.classList.add(...y.split(" ")),f}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[f,y]of Object.entries(c))super._typeCheckConfig({selector:f,entry:y},fA)}_setContent(c,f,y){const A=j.findOne(y,c);if(A){if(f=this._resolvePossibleFunction(f),!f){A.remove();return}if(v(f)){this._putElementInTemplate(S(f),A);return}if(this._config.html){A.innerHTML=this._maybeSanitize(f);return}A.textContent=f}}_maybeSanitize(c){return this._config.sanitize?cA(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return T(c,[void 0,this])}_putElementInTemplate(c,f){if(this._config.html){f.innerHTML="",f.append(c);return}f.textContent=c.textContent}}const pA="tooltip",mA=new Set(["sanitize","allowList","sanitizeFn"]),Hu="fade",gA="modal",Rc="show",_A=".tooltip-inner",Ap=`.${gA}`,Ip="hide.bs.modal",Xo="hover",qu="focus",yA="click",EA="manual",vA="hide",TA="hidden",wA="show",AA="shown",IA="inserted",bA="click",RA="focusin",SA="focusout",CA="mouseenter",PA="mouseleave",OA={AUTO:"auto",TOP:"top",RIGHT:pe()?"left":"right",BOTTOM:"bottom",LEFT:pe()?"right":"left"},NA={allowList:wp,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},DA={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Bs extends F{constructor(c,f){if(typeof Qd>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(c,f),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return NA}static get DefaultType(){return DA}static get NAME(){return pA}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),L.off(this._element.closest(Ap),Ip,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const c=L.trigger(this._element,this.constructor.eventName(wA)),y=($(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!y)return;this._disposePopper();const A=this._getTipElement();this._element.setAttribute("aria-describedby",A.getAttribute("id"));const{container:k}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(k.append(A),L.trigger(this._element,this.constructor.eventName(IA))),this._popper=this._createPopper(A),A.classList.add(Rc),"ontouchstart"in document.documentElement)for(const H of[].concat(...document.body.children))L.on(H,"mouseover",G);const M=()=>{L.trigger(this._element,this.constructor.eventName(AA)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(M,this.tip,this._isAnimated())}hide(){if(!this._isShown()||L.trigger(this._element,this.constructor.eventName(vA)).defaultPrevented)return;if(this._getTipElement().classList.remove(Rc),"ontouchstart"in document.documentElement)for(const A of[].concat(...document.body.children))L.off(A,"mouseover",G);this._activeTrigger[yA]=!1,this._activeTrigger[qu]=!1,this._activeTrigger[Xo]=!1,this._isHovered=null;const y=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),L.trigger(this._element,this.constructor.eventName(TA)))};this._queueCallback(y,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const f=this._getTemplateFactory(c).toHtml();if(!f)return null;f.classList.remove(Hu,Rc),f.classList.add(`bs-${this.constructor.NAME}-auto`);const y=d(this.constructor.NAME).toString();return f.setAttribute("id",y),this._isAnimated()&&f.classList.add(Hu),f}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new dA({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[_A]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Hu)}_isShown(){return this.tip&&this.tip.classList.contains(Rc)}_createPopper(c){const f=T(this._config.placement,[this,c,this._element]),y=OA[f.toUpperCase()];return Fu(this._element,c,this._getPopperConfig(y))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(f=>Number.parseInt(f,10)):typeof c=="function"?f=>c(f,this._element):c}_resolvePossibleFunction(c){return T(c,[this._element,this._element])}_getPopperConfig(c){const f={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:y=>{this._getTipElement().setAttribute("data-popper-placement",y.state.placement)}}]};return{...f,...T(this._config.popperConfig,[void 0,f])}}_setListeners(){const c=this._config.trigger.split(" ");for(const f of c)if(f==="click")L.on(this._element,this.constructor.eventName(bA),this._config.selector,y=>{this._initializeOnDelegatedTarget(y).toggle()});else if(f!==EA){const y=f===Xo?this.constructor.eventName(CA):this.constructor.eventName(RA),A=f===Xo?this.constructor.eventName(PA):this.constructor.eventName(SA);L.on(this._element,y,this._config.selector,k=>{const M=this._initializeOnDelegatedTarget(k);M._activeTrigger[k.type==="focusin"?qu:Xo]=!0,M._enter()}),L.on(this._element,A,this._config.selector,k=>{const M=this._initializeOnDelegatedTarget(k);M._activeTrigger[k.type==="focusout"?qu:Xo]=M._element.contains(k.relatedTarget),M._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},L.on(this._element.closest(Ap),Ip,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,f){clearTimeout(this._timeout),this._timeout=setTimeout(c,f)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const f=I.getDataAttributes(this._element);for(const y of Object.keys(f))mA.has(y)&&delete f[y];return c={...f,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:S(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[f,y]of Object.entries(this._config))this.constructor.Default[f]!==y&&(c[f]=y);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const f=Bs.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof f[c]>"u")throw new TypeError(`No method named "${c}"`);f[c]()}})}}C(Bs);const kA="popover",LA=".popover-header",VA=".popover-body",xA={...Bs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},MA={...Bs.DefaultType,content:"(null|string|element|function)"};class Sc extends Bs{static get Default(){return xA}static get DefaultType(){return MA}static get NAME(){return kA}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[LA]:this._getTitle(),[VA]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const f=Sc.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof f[c]>"u")throw new TypeError(`No method named "${c}"`);f[c]()}})}}C(Sc);const UA="scrollspy",Ku=".bs.scrollspy",FA=".data-api",$A=`activate${Ku}`,bp=`click${Ku}`,BA=`load${Ku}${FA}`,jA="dropdown-item",Fi="active",HA='[data-bs-spy="scroll"]',Wu="[href]",qA=".nav, .list-group",Rp=".nav-link",KA=`${Rp}, .nav-item > ${Rp}, .list-group-item`,WA=".dropdown",zA=".dropdown-toggle",GA={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},YA={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Jo extends F{constructor(c,f){super(c,f),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return GA}static get DefaultType(){return YA}static get NAME(){return UA}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=S(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(f=>Number.parseFloat(f))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(L.off(this._config.target,bp),L.on(this._config.target,bp,Wu,c=>{const f=this._observableSections.get(c.target.hash);if(f){c.preventDefault();const y=this._rootElement||window,A=f.offsetTop-this._element.offsetTop;if(y.scrollTo){y.scrollTo({top:A,behavior:"smooth"});return}y.scrollTop=A}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(f=>this._observerCallback(f),c)}_observerCallback(c){const f=M=>this._targetLinks.get(`#${M.target.id}`),y=M=>{this._previousScrollData.visibleEntryTop=M.target.offsetTop,this._process(f(M))},A=(this._rootElement||document.documentElement).scrollTop,k=A>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=A;for(const M of c){if(!M.isIntersecting){this._activeTarget=null,this._clearActiveClass(f(M));continue}const H=M.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(k&&H){if(y(M),!A)return;continue}!k&&!H&&y(M)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=j.find(Wu,this._config.target);for(const f of c){if(!f.hash||B(f))continue;const y=j.findOne(decodeURI(f.hash),this._element);V(y)&&(this._targetLinks.set(decodeURI(f.hash),f),this._observableSections.set(f.hash,y))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(Fi),this._activateParents(c),L.trigger(this._element,$A,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains(jA)){j.findOne(zA,c.closest(WA)).classList.add(Fi);return}for(const f of j.parents(c,qA))for(const y of j.prev(f,KA))y.classList.add(Fi)}_clearActiveClass(c){c.classList.remove(Fi);const f=j.find(`${Wu}.${Fi}`,c);for(const y of f)y.classList.remove(Fi)}static jQueryInterface(c){return this.each(function(){const f=Jo.getOrCreateInstance(this,c);if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c]()}})}}L.on(window,BA,()=>{for(const p of j.find(HA))Jo.getOrCreateInstance(p)}),C(Jo);const QA="tab",js=".bs.tab",XA=`hide${js}`,JA=`hidden${js}`,ZA=`show${js}`,eI=`shown${js}`,tI=`click${js}`,nI=`keydown${js}`,rI=`load${js}`,sI="ArrowLeft",Sp="ArrowRight",iI="ArrowUp",Cp="ArrowDown",zu="Home",Pp="End",Hs="active",Op="fade",Gu="show",oI="dropdown",Np=".dropdown-toggle",aI=".dropdown-menu",Yu=`:not(${Np})`,cI='.list-group, .nav, [role="tablist"]',lI=".nav-item, .list-group-item",uI=`.nav-link${Yu}, .list-group-item${Yu}, [role="tab"]${Yu}`,Dp='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Qu=`${uI}, ${Dp}`,hI=`.${Hs}[data-bs-toggle="tab"], .${Hs}[data-bs-toggle="pill"], .${Hs}[data-bs-toggle="list"]`;class qs extends F{constructor(c){super(c),this._parent=this._element.closest(cI),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),L.on(this._element,nI,f=>this._keydown(f)))}static get NAME(){return QA}show(){const c=this._element;if(this._elemIsActive(c))return;const f=this._getActiveElem(),y=f?L.trigger(f,XA,{relatedTarget:c}):null;L.trigger(c,ZA,{relatedTarget:f}).defaultPrevented||y&&y.defaultPrevented||(this._deactivate(f,c),this._activate(c,f))}_activate(c,f){if(!c)return;c.classList.add(Hs),this._activate(j.getElementFromSelector(c));const y=()=>{if(c.getAttribute("role")!=="tab"){c.classList.add(Gu);return}c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),L.trigger(c,eI,{relatedTarget:f})};this._queueCallback(y,c,c.classList.contains(Op))}_deactivate(c,f){if(!c)return;c.classList.remove(Hs),c.blur(),this._deactivate(j.getElementFromSelector(c));const y=()=>{if(c.getAttribute("role")!=="tab"){c.classList.remove(Gu);return}c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),L.trigger(c,JA,{relatedTarget:f})};this._queueCallback(y,c,c.classList.contains(Op))}_keydown(c){if(![sI,Sp,iI,Cp,zu,Pp].includes(c.key))return;c.stopPropagation(),c.preventDefault();const f=this._getChildren().filter(A=>!B(A));let y;if([zu,Pp].includes(c.key))y=f[c.key===zu?0:f.length-1];else{const A=[Sp,Cp].includes(c.key);y=P(f,c.target,A,!0)}y&&(y.focus({preventScroll:!0}),qs.getOrCreateInstance(y).show())}_getChildren(){return j.find(Qu,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,f){this._setAttributeIfNotExists(c,"role","tablist");for(const y of f)this._setInitialAttributesOnChild(y)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const f=this._elemIsActive(c),y=this._getOuterElement(c);c.setAttribute("aria-selected",f),y!==c&&this._setAttributeIfNotExists(y,"role","presentation"),f||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const f=j.getElementFromSelector(c);f&&(this._setAttributeIfNotExists(f,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(f,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,f){const y=this._getOuterElement(c);if(!y.classList.contains(oI))return;const A=(k,M)=>{const H=j.findOne(k,y);H&&H.classList.toggle(M,f)};A(Np,Hs),A(aI,Gu),y.setAttribute("aria-expanded",f)}_setAttributeIfNotExists(c,f,y){c.hasAttribute(f)||c.setAttribute(f,y)}_elemIsActive(c){return c.classList.contains(Hs)}_getInnerElement(c){return c.matches(Qu)?c:j.findOne(Qu,c)}_getOuterElement(c){return c.closest(lI)||c}static jQueryInterface(c){return this.each(function(){const f=qs.getOrCreateInstance(this);if(typeof c=="string"){if(f[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);f[c]()}})}}L.on(document,tI,Dp,function(p){["A","AREA"].includes(this.tagName)&&p.preventDefault(),!B(this)&&qs.getOrCreateInstance(this).show()}),L.on(window,rI,()=>{for(const p of j.find(hI))qs.getOrCreateInstance(p)}),C(qs);const fI="toast",Jr=".bs.toast",dI=`mouseover${Jr}`,pI=`mouseout${Jr}`,mI=`focusin${Jr}`,gI=`focusout${Jr}`,_I=`hide${Jr}`,yI=`hidden${Jr}`,EI=`show${Jr}`,vI=`shown${Jr}`,TI="fade",kp="hide",Cc="show",Pc="showing",wI={animation:"boolean",autohide:"boolean",delay:"number"},AI={animation:!0,autohide:!0,delay:5e3};class Zo extends F{constructor(c,f){super(c,f),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return AI}static get DefaultType(){return wI}static get NAME(){return fI}show(){if(L.trigger(this._element,EI).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(TI);const f=()=>{this._element.classList.remove(Pc),L.trigger(this._element,vI),this._maybeScheduleHide()};this._element.classList.remove(kp),ee(this._element),this._element.classList.add(Cc,Pc),this._queueCallback(f,this._element,this._config.animation)}hide(){if(!this.isShown()||L.trigger(this._element,_I).defaultPrevented)return;const f=()=>{this._element.classList.add(kp),this._element.classList.remove(Pc,Cc),L.trigger(this._element,yI)};this._element.classList.add(Pc),this._queueCallback(f,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Cc),super.dispose()}isShown(){return this._element.classList.contains(Cc)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,f){switch(c.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=f;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=f;break}}if(f){this._clearTimeout();return}const y=c.relatedTarget;this._element===y||this._element.contains(y)||this._maybeScheduleHide()}_setListeners(){L.on(this._element,dI,c=>this._onInteraction(c,!0)),L.on(this._element,pI,c=>this._onInteraction(c,!1)),L.on(this._element,mI,c=>this._onInteraction(c,!0)),L.on(this._element,gI,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const f=Zo.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof f[c]>"u")throw new TypeError(`No method named "${c}"`);f[c](this)}})}}return J(Zo),C(Zo),{Alert:ge,Button:ot,Carousel:Wr,Collapse:Er,Dropdown:Dn,Modal:$s,Offcanvas:Sr,Popover:Sc,ScrollSpy:Jo,Tab:qs,Toast:Zo,Tooltip:Bs}})}(fl)),fl.exports}WV();tS(BV).use(yT).mount("#app");export{wt as $,gd as A,_T as B,tT as C,Ex as D,hx as E,Vn as F,os as G,oC as H,ux as I,fx as J,wx as K,cE as L,yx as M,mx as N,gx as O,_x as P,vx as Q,Sx as R,Cx as S,Rx as T,Ix as U,ai as V,Tx as W,Ax as X,bx as Y,pn as Z,UV as _,xt as a,Or as b,oa as c,MV as d,ja as e,Xc as f,Z_ as g,Jb as h,ix as i,Lh as j,Q_ as k,vR as l,ox as m,Fl as n,Gi as o,sx as p,H_ as q,ty as r,Zc as s,UI as t,lx as u,cx as v,Sh as w,ax as x,dx as y,g_ as z};
