var H=Object.defineProperty;var u=(e,s)=>H(e,"name",{value:s,configurable:!0});const A={};let Q=M;const x=1,C=2,v={owned:null,cleanups:null,context:null,owner:null};var p=null;let d=null,h=null,w=null,B=0;function Y(e,s){const t=p,n=e.length===0,l=n?v:{owned:null,cleanups:null,context:null,owner:s||t},f=n?e:()=>e(()=>U(()=>D(l)));p=l;try{return S(f,!0)}finally{p=t}}u(Y,"createRoot");function T(e,s,t){const n=j(e,s,!1,x);F(n)}u(T,"createRenderEffect");function U(e){try{return e()}finally{}}u(U,"untrack");function V(e,s,t){let n=e.value;return(!e.comparator||!e.comparator(n,s))&&(e.value=s,e.observers&&e.observers.length&&S(()=>{for(let l=0;l<e.observers.length;l+=1){const f=e.observers[l],o=d&&d.running;o&&d.disposed.has(f),(o&&!f.tState||!o&&!f.state)&&(f.pure?h.push(f):w.push(f),f.observers&&O(f)),o||(f.state=x)}if(h.length>1e6)throw h=[],new Error},!1)),s}u(V,"writeSignal");function F(e){if(!e.fn)return;D(e);const s=p,t=B;p=e,W(e,e.value,t),p=s}u(F,"updateComputation");function W(e,s,t){let n;try{n=e.fn(s)}catch(l){e.pure&&(e.state=x),P(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?V(e,n):e.value=n,e.updatedAt=t)}u(W,"runComputation");function j(e,s,t,n=x,l){const f={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:s,owner:p,context:null,pure:t};return p===null||p!==v&&(p.owned?p.owned.push(f):p.owned=[f]),f}u(j,"createComputation");function I(e){const s=d;if(e.state===0||s)return;if(e.state===C||s)return b(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<B);)(e.state||s)&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===x||s)F(e);else if(e.state===C||s){const l=h;h=null,S(()=>b(e,t[0]),!1),h=l}}u(I,"runTop");function S(e,s){if(h)return e();let t=!1;s||(h=[]),w?t=!0:w=[],B++;try{const n=e();return q(t),n}catch(n){h||(w=null),P(n)}}u(S,"runUpdates");function q(e){if(h&&(M(h),h=null),e)return;const s=w;w=null,s.length&&S(()=>Q(s),!1)}u(q,"completeUpdates");function M(e){for(let s=0;s<e.length;s++)I(e[s])}u(M,"runQueue");function b(e,s){const t=d;e.state=0;for(let n=0;n<e.sources.length;n+=1){const l=e.sources[n];l.sources&&(l.state===x||t?l!==s&&I(l):(l.state===C||t)&&b(l,s))}}u(b,"lookUpstream");function O(e){const s=d;for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];(!n.state||s)&&(n.state=C,n.pure?h.push(n):w.push(n),n.observers&&O(n))}}u(O,"markDownstream");function D(e){let s;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const f=l.pop(),o=t.observerSlots.pop();n<l.length&&(f.sourceSlots[o]=n,l[n]=f,t.observerSlots[n]=o)}}if(e.owned){for(s=0;s<e.owned.length;s++)D(e.owned[s]);e.owned=null}if(e.cleanups){for(s=0;s<e.cleanups.length;s++)e.cleanups[s]();e.cleanups=null}e.state=0,e.context=null}u(D,"cleanNode");function J(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}u(J,"castError");function P(e){throw e=J(e),e}u(P,"handleError");function Z(e,s){return U(()=>e(s||{}))}u(Z,"createComponent");function K(e,s,t){let n=t.length,l=s.length,f=n,o=0,i=0,r=s[l-1].nextSibling,c=null;for(;o<l||i<f;){if(s[o]===t[i]){o++,i++;continue}for(;s[l-1]===t[f-1];)l--,f--;if(l===o){const a=f<n?i?t[i-1].nextSibling:t[f-i]:r;for(;i<f;)e.insertBefore(t[i++],a)}else if(f===i)for(;o<l;)(!c||!c.has(s[o]))&&s[o].remove(),o++;else if(s[o]===t[f-1]&&t[i]===s[l-1]){const a=s[--l].nextSibling;e.insertBefore(t[i++],s[o++].nextSibling),e.insertBefore(t[--f],a),s[l]=t[f]}else{if(!c){c=new Map;let g=i;for(;g<f;)c.set(t[g],g++)}const a=c.get(s[o]);if(a!=null)if(i<a&&a<f){let g=o,m=1,L;for(;++g<l&&g<f&&!((L=c.get(s[g]))==null||L!==a+m);)m++;if(m>a-i){const G=s[o];for(;i<a;)e.insertBefore(t[i++],G)}else e.replaceChild(t[i++],s[o++])}else o++;else s[o++].remove()}}}u(K,"reconcileArrays");function _(e,s,t){const n=document.createElement("template");n.innerHTML=e;let l=n.content.firstChild;return t&&(l=l.firstChild),l}u(_,"template");function $(e,s,t,n){if(t!==void 0&&!n&&(n=[]),typeof s!="function")return E(e,s,n,t);T(l=>E(e,s(),l,t),n)}u($,"insert");function E(e,s,t,n,l){for(A.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(s===t)return t;const f=typeof s,o=n!==void 0;if(e=o&&t[0]&&t[0].parentNode||e,f==="string"||f==="number"){if(A.context)return t;if(f==="number"&&(s=s.toString()),o){let i=t[0];i&&i.nodeType===3?i.data=s:i=document.createTextNode(s),t=y(e,t,n,i)}else t!==""&&typeof t=="string"?t=e.firstChild.data=s:t=e.textContent=s}else if(s==null||f==="boolean"){if(A.context)return t;t=y(e,t,n)}else{if(f==="function")return T(()=>{let i=s();for(;typeof i=="function";)i=i();t=E(e,i,t,n)}),()=>t;if(Array.isArray(s)){const i=[],r=t&&Array.isArray(t);if(N(i,s,t,l))return T(()=>t=E(e,i,t,n,!0)),()=>t;if(A.context){if(!i.length)return t;for(let c=0;c<i.length;c++)if(i[c].parentNode)return t=i}if(i.length===0){if(t=y(e,t,n),o)return t}else r?t.length===0?R(e,i,n):K(e,t,i):(t&&y(e),R(e,i));t=i}else if(s instanceof Node){if(A.context&&s.parentNode)return t=o?[s]:s;if(Array.isArray(t)){if(o)return t=y(e,t,n,s);y(e,t,null,s)}else t==null||t===""||!e.firstChild?e.appendChild(s):e.replaceChild(s,e.firstChild);t=s}}return t}u(E,"insertExpression");function N(e,s,t,n){let l=!1;for(let f=0,o=s.length;f<o;f++){let i=s[f],r=t&&t[f];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))l=N(e,i,r)||l;else if(typeof i=="function")if(n){for(;typeof i=="function";)i=i();l=N(e,Array.isArray(i)?i:[i],Array.isArray(r)?r:[r])||l}else e.push(i),l=!0;else{const c=String(i);r&&r.nodeType===3&&r.data===c?e.push(r):e.push(document.createTextNode(c))}}return l}u(N,"normalizeIncomingArray");function R(e,s,t=null){for(let n=0,l=s.length;n<l;n++)e.insertBefore(s[n],t)}u(R,"appendNodes");function y(e,s,t,n){if(t===void 0)return e.textContent="";const l=n||document.createTextNode("");if(s.length){let f=!1;for(let o=s.length-1;o>=0;o--){const i=s[o];if(l!==i){const r=i.parentNode===e;!f&&!o?r?e.replaceChild(l,i):e.insertBefore(l,t):r&&i.remove()}else f=!0}}else e.insertBefore(l,t);return[l]}u(y,"cleanChildren");export{Z as a,Y as c,$ as i,_ as t};
//# sourceMappingURL=web-3984aa78.js.map
