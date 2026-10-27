var Kf=Object.defineProperty;var Hc=n=>{throw TypeError(n)};var $f=(n,t,e)=>t in n?Kf(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Ue=(n,t,e)=>$f(n,typeof t!="symbol"?t+"":t,e),ho=(n,t,e)=>t.has(n)||Hc("Cannot "+e);var z=(n,t,e)=>(ho(n,t,"read from private field"),e?e.call(n):t.get(n)),Gt=(n,t,e)=>t.has(n)?Hc("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),kt=(n,t,e,i)=>(ho(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e),wt=(n,t,e)=>(ho(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const fh=!1;var dh=Array.isArray,Jf=Array.prototype.indexOf,Hs=Array.prototype.includes,no=Array.from,ph=Object.defineProperty,Fs=Object.getOwnPropertyDescriptor,Qf=Object.getOwnPropertyDescriptors,td=Object.prototype,ed=Array.prototype,mh=Object.getPrototypeOf,Vc=Object.isExtensible;const nd=()=>{};function id(n){for(var t=0;t<n.length;t++)n[t]()}function _h(){var n,t,e=new Promise((i,r)=>{n=i,t=r});return{promise:e,resolve:n,reject:t}}function nl(n,t){if(Array.isArray(n))return n;if(t===void 0||!(Symbol.iterator in n))return Array.from(n);const e=[];for(const i of n)if(e.push(i),e.length===t)break;return e}const ke=2,$r=4,io=8,gh=1<<24,Cn=16,Nn=32,Bi=64,il=128,cc=256,In=512,be=1024,pe=2048,cn=4096,Xe=8192,Oe=16384,hs=32768,Vs=1<<25,Jr=65536,Ga=1<<17,rd=1<<18,fs=1<<19,sd=1<<20,Wn=1<<25,Wa=1<<21,kr=1<<22,Di=1<<23,La=Symbol("$state"),vh=Symbol("component"),ad=Symbol(""),Da=Symbol("attributes"),rl=Symbol("class"),sl=Symbol("style"),ws=Symbol("text"),Ua=Symbol("form reset"),Ks=new class extends Error{constructor(){super(...arguments);Ue(this,"name","StaleReactionError");Ue(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}},od=1,ld=2,xh=4,cd=8,ud=16,hd=1,fd=2,Mh={},Te=Symbol("uninitialized"),Sh="http://www.w3.org/1999/xhtml",dd="http://www.w3.org/2000/svg",pd="http://www.w3.org/1998/Math/MathML";function md(){console.warn("https://svelte.dev/e/derived_inert")}function _d(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Eh(n){return n===this.v}function gd(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function yh(n){return!gd(n,this.v)}function vd(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function xd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Md(n,t,e){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Sd(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ed(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function yd(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Td(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function bd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ad(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function wd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Rd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Cd=!1,Be=null;function Qr(n){Be=n}function ds(n,t=!1,e){Be={p:Be,i:!1,c:null,e:null,s:n,x:null,r:$t,l:null}}function ps(n){var t=Be,e=t.e;if(e!==null){t.e=null;for(var i of e)Xh(i)}return t.i=!0,Be=t.p,uc(n)}function uc(n={}){return ph(n,vh,{value:!0}),n}function Th(){return!0}let tr=[];function bh(){var n=tr;tr=[],id(n)}function Xn(n){if(tr.length===0&&!Os){var t=tr;queueMicrotask(()=>{t===tr&&bh()})}tr.push(n)}function Pd(){for(;tr.length>0;)bh()}const Ld=-7169;function Me(n,t){n.f=n.f&Ld|t}function hc(n){(n.f&In)!==0||n.deps===null?Me(n,be):Me(n,cn)}function Ah(n,t){(n.f&pe)!==0?t.set(n,pe):(n.f&cn)!==0&&t.get(n)!==pe&&t.set(n,cn),Me(n,be)}function Dd(n,t){{const e=document.body;n.autofocus=!0,Xn(()=>{document.activeElement===e&&n.focus()})}}let Gc=!1;function Ud(){Gc||(Gc=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var t;if(!n.defaultPrevented)for(const e of n.target.elements)(t=e[Ua])==null||t.call(e)})},{capture:!0}))}function ms(n){var t=Ht,e=$t;xn(null),Kn(null);try{return n()}finally{xn(t),Kn(e)}}function Id(n,t,e,i=e){n.addEventListener(t,()=>ms(e));const r=n[Ua];r?n[Ua]=()=>{r(),i(!0)}:n[Ua]=()=>i(!0),Ud()}function Nd(n,t,e,i){const r=fc;var s=n.filter(m=>!m.settled),a=t.map(r);if(e.length===0&&s.length===0){i(a);return}var o=$t,l=Fd(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(m=>m.promise)):null;function u(m){if((o.f&Oe)===0){l();try{i([...a,...m])}catch(_){Vn(_,o)}Xa()}}var h=wh();if(e.length===0){c.then(()=>u([])).finally(h);return}function d(){Promise.all(e.map(m=>Od(m))).then(u).catch(m=>Vn(m,o)).finally(h)}c?c.then(()=>{if((o.f&Oe)!==0){h();return}l(),d(),Xa()}):d()}function Fd(){var n=$t,t=Ht,e=Be,i=Et;return function(s=!0){Kn(n),xn(t),Qr(e),s&&(n.f&Oe)===0&&(i==null||i.activate(),i==null||i.apply())}}function Xa(n=!0){Kn(null),xn(null),Qr(null),n&&(Et==null||Et.deactivate())}function wh(){var n=$t,t=n.b,e=Et,i=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,e),e.increment(i,n),()=>{t==null||t.update_pending_count(-1,e),e.decrement(i,n)}}function fc(n){var t=ke|pe;return $t!==null&&($t.f|=fs),{ctx:Be,deps:null,effects:null,equals:Eh,f:t,fn:n,reactions:null,rv:0,v:Te,wv:0,parent:$t,ac:null}}const Rs=Symbol("obsolete");function Od(n,t,e){let i=$t;i===null&&xd();var r=void 0,s=pr(Te),a=!Ht,o=new Set;return ep(()=>{var m,_;var l=$t,c=_h();r=c.promise;try{Promise.resolve(n()).then(c.resolve,g=>{g!==Ks&&c.reject(g)}).finally(Xa)}catch(g){c.reject(g),Xa()}var u=Et;if(a){if((l.f&hs)!==0)var h=wh();if((m=i.b)!=null&&m.is_rendered())(_=u.async_deriveds.get(l))==null||_.reject(Rs);else for(const g of o.values())g.reject(Rs);o.add(c),u.async_deriveds.set(l,c)}const d=(g,p=void 0)=>{h==null||h(),o.delete(c),p!==Rs&&(u.activate(),p?(s.f|=Di,ts(s,p)):((s.f&Di)!==0&&(s.f^=Di),ts(s,g)),u.deactivate())};c.promise.then(d,g=>d(null,g||"unknown"))}),Wh(()=>{for(const l of o)l.reject(Rs)}),new Promise(l=>{function c(u){function h(){u===r?l(s):c(r)}u.then(h,h)}c(r)})}function cr(n){const t=fc(n);return $h(t),t}function Bd(n){const t=fc(n);return t.equals=yh,t}function zd(n){var t=n.effects;if(t!==null){n.effects=null;for(var e=0;e<t.length;e+=1)$e(t[e])}}function dc(n){var t,e=$t,i=n.parent;if(!zi&&i!==null&&n.v!==Te&&(i.f&(Oe|Xe))!==0)return md(),n.v;Kn(i);try{zd(n),t=ef(n)}finally{Kn(e)}return t}function Rh(n){var t=dc(n);if(!n.equals(t)&&(n.wv=Qh(),(!(Et!=null&&Et.is_fork)||n.deps===null)&&(Et!==null?(Et.capture(n,t,!0),Ui==null||Ui.capture(n,t,!0)):n.v=t,n.deps===null))){Me(n,be);return}zi||(Pe!==null?(_c()||Et!=null&&Et.is_fork)&&Pe.set(n,t):hc(n))}function kd(n){var t;if(n.effects!==null)for(const e of n.effects)(e.teardown||e.ac)&&((t=e.teardown)==null||t.call(e),e.ac!==null&&ms(()=>{e.ac.abort(Ks),e.ac=null}),e.fn!==null&&(e.teardown=nd),Gs(e,0),xc(e))}function Ch(n){if(n.effects!==null)for(const t of n.effects)t.teardown&&t.fn!==null&&es(t)}let fo=null,Sr=null,Et=null,Ui=null,Pe=null,al=null,Os=!1,po=!1,Bs=null,Ia=null;var Wc=0;let Hd=1;var Xr,qr,Yr,li,jr,ci,qs,On,Bn,Zr,sr,Wt,ol,Ph,ll,Cs,cl,Lh,Dh,Uh,Fr,Vd,Ps;const Qa=class Qa{constructor(){Gt(this,Wt);Ue(this,"id",Hd++);Ue(this,"started",!1);Ue(this,"linked",!0);Ue(this,"prev",null);Ue(this,"next",null);Ue(this,"async_deriveds",new Map);Ue(this,"current",new Map);Ue(this,"previous",new Map);Gt(this,Xr,new Set);Gt(this,qr,new Set);Gt(this,Yr,0);Gt(this,li,new Map);Gt(this,jr,null);Gt(this,ci,[]);Gt(this,qs,[]);Gt(this,On,new Map);Gt(this,Bn,new Map);Gt(this,Zr,new Set);Ue(this,"is_fork",!1);Gt(this,sr,!1);Sr===null?fo=Sr=this:(Sr.next=this,this.prev=Sr),Sr=this}skip_effect(t){z(this,Bn).has(t)||z(this,Bn).set(t,{d:[],m:[]}),z(this,Zr).delete(t)}unskip_effect(t,e=i=>this.schedule(i)){var i=z(this,Bn).get(t);if(i){z(this,Bn).delete(t);for(var r of i.d)Me(r,pe),e(r);for(r of i.m)Me(r,cn),e(r)}z(this,Zr).add(t)}capture(t,e,i=!1){t.v!==Te&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Di)===0&&(this.current.set(t,[e,i]),Pe==null||Pe.set(t,e)),this.is_fork||(t.v=e)}activate(){Et=this}deactivate(){Et=null,Pe=null}flush(){try{po=!0,Et=this,wt(this,Wt,Cs).call(this)}finally{Wc=0,al=null,Bs=null,Ia=null,po=!1,Et=null,Pe=null,Yn.clear()}}discard(){var t;for(const e of z(this,qr))e(this);z(this,qr).clear();for(const e of this.async_deriveds.values())e.reject(Rs);wt(this,Wt,Ps).call(this),(t=z(this,jr))==null||t.resolve()}register_created_effect(t){z(this,qs).push(t)}increment(t,e){if(kt(this,Yr,z(this,Yr)+1),t){let i=z(this,li).get(e)??0;z(this,li).set(e,i+1)}}decrement(t,e){if(kt(this,Yr,z(this,Yr)-1),t){let i=z(this,li).get(e)??0;i===1?z(this,li).delete(e):z(this,li).set(e,i-1)}z(this,sr)||(kt(this,sr,!0),Xn(()=>{kt(this,sr,!1),this.linked&&this.flush()}))}transfer_reactions(t){for(const[e,i]of t)this.add_dirty_reaction(e,i);t.clear()}add_dirty_reaction(t,e){(e===pe||z(this,On).get(t)!==pe)&&z(this,On).set(t,e)}oncommit(t){z(this,Xr).add(t)}ondiscard(t){z(this,qr).add(t)}settled(){return(z(this,jr)??kt(this,jr,_h())).promise}static ensure(){if(Et===null){const t=Et=new Qa;!po&&!Os&&Xn(()=>{t.started||t.flush()})}return Et}apply(){{Pe=null;return}}schedule(t){var e;if(al=t,(e=t.b)!=null&&e.is_pending&&(t.f&($r|io|gh))!==0&&(t.f&hs)===0){t.b.defer_effect(t);return}z(this,ci).push(t)}};Xr=new WeakMap,qr=new WeakMap,Yr=new WeakMap,li=new WeakMap,jr=new WeakMap,ci=new WeakMap,qs=new WeakMap,On=new WeakMap,Bn=new WeakMap,Zr=new WeakMap,sr=new WeakMap,Wt=new WeakSet,ol=function(){if(this.is_fork)return!0;for(const t of z(this,li).keys())if(!wt(this,Wt,Ph).call(this,t))return!0;return!1},Ph=function(t){for(var e=t;e!==null;e=e.parent)if(z(this,Bn).has(e))return!0;return!1},ll=function(){var t=[];for(const s of z(this,ci))if(!((s.f&Oe)!==0||(s.f&(pe|cn))===0)){for(var e=s,i=!1;e.parent!==null;){e=e.parent;var r=e.f;if((r&(Bi|Nn))!==0){if((r&be)===0){i=!0;break}e.f^=be}}i||t.push(e)}return kt(this,ci,[]),t},Cs=function(){var o,l,c,u;this.started=!0;for(const[h,d]of z(this,On))Me(h,d),this.schedule(h);this.apply();for(var t=Bs=[],e=[],i=Ia=[];z(this,ci).length>0;){Wc++>1e3&&(wt(this,Wt,Ps).call(this),Wd());for(const h of wt(this,Wt,ll).call(this))try{wt(this,Wt,cl).call(this,h,t,e)}catch(d){throw Fh(h),wt(this,Wt,ol).call(this)||this.discard(),d}}if(Et=null,i.length>0){var r=Qa.ensure();for(const h of i)r.schedule(h)}if(Bs=null,Ia=null,wt(this,Wt,ol).call(this)){wt(this,Wt,Fr).call(this,e),wt(this,Wt,Fr).call(this,t);for(const[h,d]of z(this,Bn))Nh(h,d);i.length>0&&wt(o=Et,Wt,Cs).call(o);return}const s=wt(this,Wt,Lh).call(this);if(s){wt(this,Wt,Fr).call(this,e),wt(this,Wt,Fr).call(this,t),wt(l=s,Wt,Uh).call(l,this);return}z(this,On).clear();for(const h of z(this,Xr))h(this);z(this,Xr).clear(),Ui=this,Xc(e),Xc(t),Ui=null,(c=z(this,jr))==null||c.resolve();var a=Et;z(this,Yr)===0&&(z(this,ci).length===0||a!==null)&&wt(this,Wt,Ps).call(this),a!==null&&(Yn.clear(),wt(u=a,Wt,Cs).call(u))},cl=function(t,e,i){t.f^=be;for(var r=t.first;r!==null;){var s=r.f,a=(s&(Nn|Bi))!==0,o=a&&(s&be)!==0,l=o||(s&Xe)!==0||z(this,Bn).has(r);if(!l&&r.fn!==null){a?r.f^=be:(s&$r)!==0?e.push(r):Js(r)&&((s&Cn)!==0&&this.add_dirty_reaction(r,cn),es(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var u=r.next;if(u!==null){r=u;break}r=r.parent}}},Lh=function(){for(var t=this.prev;t!==null;t=t.prev)if(!t.is_fork&&wt(this,Wt,Dh).call(this,t))return t;return null},Dh=function(t){for(const[e,[,i]]of this.current)if(!i&&t.current.has(e))return!0;return!1},Uh=function(t){var i;for(const[r,s]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,s);for(const[r,s]of t.async_deriveds){const a=this.async_deriveds.get(r);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_reactions(z(t,On));const e=r=>{var s=r.reactions;if(s!==null&&!((r.f&ke)!==0&&(r.f&(pe|cn))===0))for(const l of s){var a=l.f;if((a&ke)!==0)e(l);else{var o=l;a&(kr|Cn)&&!this.async_deriveds.has(o)&&(z(this,On).delete(o),Me(o,pe),this.schedule(o))}}};for(const r of this.current.keys())e(r);this.oncommit(()=>t.discard()),wt(i=t,Wt,Ps).call(i),Et=this,wt(this,Wt,Cs).call(this)},Fr=function(t){for(var e=0;e<t.length;e+=1)Ah(t[e],z(this,On))},Vd=function(){var h,d;for(let m=fo;m!==null;m=m.next){var t=m.id<this.id,e=[];for(const[_,[g,p]]of this.current){if(m.current.has(_)){var i=m.current.get(_)[0];if(t&&g!==i)m.current.set(_,[g,p]);else continue}e.push(_)}if(t)for(const[_,g]of this.async_deriveds){const p=m.async_deriveds.get(_);p&&g.promise.then(p.resolve).catch(p.reject)}var r=[...m.current.keys()].filter(_=>!m.current.get(_)[1]);if(!(!m.started||r.length===0)){var s=r.filter(_=>!this.current.has(_));if(s.length===0)t&&m.discard();else if(e.length>0){if(t)for(const _ of z(this,Zr))m.unskip_effect(_,g=>{var p;(g.f&(Cn|kr))!==0?m.schedule(g):wt(p=m,Wt,Fr).call(p,[g])});m.activate();var a=new Set,o=new Map;for(var l of e)Ih(l,s,a,o);o=new Map;var c=[...m.current].filter(([_,g])=>{const p=this.current.get(_);return p?p[0]!==g[0]||p[1]!==g[1]:!0}).map(([_])=>_);if(c.length>0)for(const _ of z(this,qs))(_.f&(Oe|Xe|Ga))===0&&pc(_,c,o)&&((_.f&(kr|Cn))!==0?(Me(_,pe),m.schedule(_)):m.add_dirty_reaction(_,pe));if(z(m,ci).length>0&&!z(m,sr)){m.apply();for(var u of wt(h=m,Wt,ll).call(h))wt(d=m,Wt,cl).call(d,u,[],[])}m.deactivate()}}}},Ps=function(){if(this.linked){var t=this.prev,e=this.next;t===null?fo=e:t.next=e,e===null?Sr=t:e.prev=t,this.linked=!1}};let dr=Qa;function Gd(n){var t=Os,e=Ui;Ui=null,Os=!0;try{for(var i;;){if(Pd(),Et===null)return i;Et.flush()}}finally{Os=t,Ui=e}}function Wd(){try{Td()}catch(n){Vn(n,al)}}let bn=null;function Xc(n){var t=n.length;if(t!==0){for(var e=0;e<t;){var i=n[e++];if((i.f&(Oe|Xe))===0&&Js(i)&&(bn=new Set,es(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&jh(i),(bn==null?void 0:bn.size)>0)){Yn.clear();for(const r of bn){if((r.f&(Oe|Xe))!==0)continue;const s=[r];let a=r.parent;for(;a!==null;)bn.has(a)&&(bn.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Oe|Xe))===0&&es(l)}}bn.clear()}}bn=null}}function Ih(n,t,e,i){if(!e.has(n)&&(e.add(n),n.reactions!==null))for(const r of n.reactions){const s=r.f;(s&ke)!==0?Ih(r,t,e,i):(s&(kr|Cn))!==0&&(s&pe)===0&&pc(r,t,i)&&(Me(r,pe),mc(r))}}function pc(n,t,e){const i=e.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Hs.call(t,r))return!0;if((r.f&ke)!==0&&pc(r,t,e))return e.set(r,!0),!0}return e.set(n,!1),!1}function mc(n){Et.schedule(n)}function Nh(n,t){if(!((n.f&Nn)!==0&&(n.f&be)!==0)){(n.f&pe)!==0?t.d.push(n):(n.f&cn)!==0&&t.m.push(n),Me(n,be);for(var e=n.first;e!==null;)Nh(e,t),e=e.next}}function Fh(n){Me(n,be);for(var t=n.first;t!==null;)Fh(t),t=t.next}let qa=new Set;const Yn=new Map;let Oh=!1;function pr(n,t){var e={f:0,v:n,reactions:null,equals:Eh,rv:0,wv:0};return e}function _e(n,t){const e=pr(n);return $h(e),e}function Xd(n,t=!1,e=!0){const i=pr(n);return t||(i.equals=yh),i}function Qt(n,t,e=!1){Ht!==null&&(!Ln||(Ht.f&Ga)!==0)&&Th()&&(Ht.f&(ke|Cn|kr|Ga))!==0&&(jn===null||!jn.has(n))&&wd();let i=e?Li(t):t;return ts(n,i,Ia)}var $i=null,ul=0;function ts(n,t,e=null){if(!n.equals(t)){zi?Yn.set(n,t):Yn.has(n)||Yn.set(n,n.v);var i=dr.ensure();if(i.capture(n,t),(n.f&ke)!==0){const r=n;(n.f&pe)!==0&&dc(r),Pe===null&&hc(r)}n.wv=Qh(),$i=null,ul=0,Bh(n,pe,e),$i=null,$t!==null&&($t.f&be)!==0&&($t.f&(Nn|Bi))===0&&(dn===null?ip([n]):dn.push(n)),!i.is_fork&&qa.size>0&&!Oh&&qd()}return t}function qd(){Oh=!1;for(const n of qa){(n.f&be)!==0&&Me(n,cn);let t;try{t=Js(n)}catch{t=!0}t&&es(n)}qa.clear()}function zs(n){Qt(n,n.v+1)}function Bh(n,t,e){var i=n.reactions;if(i!==null){var r=i.length;if(ul+=r,ul>1e5&&$i===null&&($i=new Set),$i!==null){if($i.has(n))return;$i.add(n)}for(var s=0;s<r;s++){var a=i[s],o=a.f,l=(o&pe)===0;if(l&&Me(a,t),(o&Ga)!==0)qa.add(a);else if((o&ke)!==0){var c=a;Pe==null||Pe.delete(c),Bh(c,cn,e)}else if(l){var u=a;(o&Cn)!==0&&bn!==null&&bn.add(u),e!==null?e.push(u):mc(u)}}}}function Li(n){if(typeof n!="object"||n===null||La in n||vh in n)return n;const t=mh(n);if(t!==td&&t!==ed)return n;var e=new Map,i=dh(n),r=_e(0),s=hr,a=o=>{if(hr===s)return o();var l=Ht,c=hr;xn(null),jc(s);var u=o();return xn(l),jc(c),u};return i&&e.set("length",_e(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&bd();var u=e.get(l);return u===void 0?a(()=>{var h=_e(c.value);return e.set(l,h),h}):Qt(u,c.value,!0),!0},deleteProperty(o,l){var c=e.get(l);if(c===void 0){if(l in o){const u=a(()=>_e(Te));e.set(l,u),zs(r)}}else Qt(c,Te),zs(r);return!0},get(o,l,c){var m;if(l===La)return n;var u=e.get(l),h=l in o;if(u===void 0&&(!h||(m=Fs(o,l))!=null&&m.writable)&&(u=a(()=>{var _=Li(h?o[l]:Te),g=_e(_);return g}),e.set(l,u)),u!==void 0){var d=rt(u);return d===Te?void 0:d}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var d;(d=this.has)==null||d.call(this,o,l);var c=Reflect.getOwnPropertyDescriptor(o,l),u=e.get(l);if(u!==void 0){var h=rt(u);if(h===Te)return;if(c&&"value"in c)c.value=h;else return{enumerable:!0,configurable:!0,value:h,writable:!0}}return c},has(o,l){var d;if(l===La)return!0;var c=e.get(l),u=c!==void 0&&c.v!==Te||Reflect.has(o,l);if(c!==void 0||($t!==null||Ht!==null)&&(!u||(d=Fs(o,l))!=null&&d.writable)){c===void 0&&(c=a(()=>{var m=u?Li(o[l]):Te,_=_e(m);return _}),e.set(l,c));var h=rt(c);if(h===Te)return!1}return u},set(o,l,c,u){var T;var h=e.get(l),d=l in o;if(i&&l==="length")for(var m=c;m<h.v;m+=1){var _=e.get(m+"");_!==void 0?Qt(_,Te):m in o&&(_=a(()=>_e(Te)),e.set(m+"",_))}if(h===void 0)(!d||(T=Fs(o,l))!=null&&T.writable)&&(h=a(()=>_e(void 0)),Qt(h,Li(c)),e.set(l,h));else{d=h.v!==Te;var g=a(()=>Li(c));Qt(h,g)}var p=Reflect.getOwnPropertyDescriptor(o,l);if(p!=null&&p.set&&p.set.call(u,c),!d){if(i&&typeof l=="string"){var f=e.get("length"),b=Number(l);Number.isInteger(b)&&b>=f.v&&Qt(f,b+1)}zs(r)}return!0},ownKeys(o){rt(r);var l=Reflect.ownKeys(o).filter(h=>{var d=e.get(h);return d===void 0||d.v!==Te});for(var[c,u]of e)u.v!==Te&&!(c in o)&&l.push(c);return l},setPrototypeOf(){Ad()}})}var qc,zh,kh,Hh;function Yd(){if(qc===void 0){qc=window,zh=/Firefox/.test(navigator.userAgent);var n=Element.prototype,t=Node.prototype,e=Text.prototype;kh=Fs(t,"firstChild").get,Hh=Fs(t,"nextSibling").get,Vc(n)&&(n[rl]=void 0,n[Da]=null,n[sl]=void 0,n.__e=void 0),Vc(e)&&(e[ws]=void 0)}}function Ii(n=""){return document.createTextNode(n)}function Pn(n){return kh.call(n)}function $s(n){return Hh.call(n)}function ne(n,t){return Pn(n)}function Ya(n,t=!1){{var e=Pn(n);return e instanceof Comment&&e.data===""?$s(e):e}}function wn(n,t=!1){return Pn(n)}function Bt(n,t=1,e=!1){let i=n;for(;t--;)i=$s(i);return i}function jd(n){n.textContent=""}function Vh(){return!1}function Gh(n,t,e){return t==null||t===Sh?e?document.createElement(n,{is:e}):document.createElement(n):e?document.createElementNS(t,n,{is:e}):document.createElementNS(t,n)}function Zd(n){var t=$t;if(t===null)return Ht.f|=Di,n;if((t.f&hs)===0&&(t.f&$r)===0)throw n;Vn(n,t)}function Vn(n,t){if(n===Mh)throw n;if(!(t!==null&&(t.f&Oe)!==0)){for(;t!==null;){if((t.f&il)!==0&&(t.f&(Oe|Vs))===0){if((t.f&hs)===0)throw n;try{t.b.error(n);return}catch(e){n=e}}t=t.parent}throw n}}function Kd(n){$t===null&&(Ht===null&&yd(),Ed()),zi&&Sd()}function $d(n,t){var e=t.last;e===null?t.last=t.first=n:(e.next=n,n.prev=e,t.last=n)}function _i(n,t){var e=$t;e!==null&&(e.f&Xe)!==0&&(n|=Xe);var i={ctx:Be,deps:null,nodes:null,f:n|pe|In,first:null,fn:t,last:null,next:null,parent:e,b:e&&e.b,prev:null,teardown:null,wv:0,ac:null};Et==null||Et.register_created_effect(i);var r=i;if((n&$r)!==0)Bs!==null?Bs.push(i):dr.ensure().schedule(i);else if(t!==null){try{es(i)}catch(a){throw $e(i),a}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&(r.f&fs)===0&&(r=r.first,(n&Cn)!==0&&(n&Jr)!==0&&r!==null&&(r.f|=Jr))}if(r!==null&&(r.parent=e,e!==null&&$d(r,e),Ht!==null&&(Ht.f&ke)!==0&&(n&Bi)===0)){var s=Ht;(s.effects??(s.effects=[])).push(r)}return i}function _c(){return Ht!==null&&!Ln}function Wh(n){const t=_i(io,null);return Me(t,be),t.teardown=n,t}function Jd(n){Kd();var t=$t.f,e=!Ht&&(t&Nn)!==0&&Be!==null&&!Be.i;if(e){var i=Be;(i.e??(i.e=[])).push(n)}else return Xh(n)}function Xh(n){return _i($r|sd,n)}function Qd(n){dr.ensure();const t=_i(Bi|fs,n);return(e={})=>new Promise(i=>{e.outro?ur(t,()=>{$e(t),i(void 0)}):($e(t),i(void 0))})}function tp(n){return _i($r,n)}function ep(n){return _i(kr|fs,n)}function gc(n,t=0){return _i(io|t,n)}function We(n,t=[],e=[],i=[]){Nd(i,t,e,r=>{_i(io,()=>{n(...r.map(rt))})})}function vc(n,t=0){var e=_i(Cn|t,n);return e}function _n(n){return _i(Nn|fs,n)}function qh(n){var t=n.teardown;if(t!==null){const e=zi,i=Ht;Yc(!0),xn(null);try{t.call(null)}catch(r){Vn(r,n.parent)}finally{Yc(e),xn(i)}}}function xc(n,t=!1){var e=n.first;for(n.first=n.last=null;e!==null;){const r=e.ac;r!==null&&ms(()=>{r.abort(Ks)});var i=e.next;(e.f&Bi)!==0?e.parent=null:$e(e,t),e=i}}function np(n){for(var t=n.first;t!==null;){var e=t.next;(t.f&Nn)===0&&$e(t),t=e}}function $e(n,t=!0){var e=!1;(t||(n.f&rd)!==0)&&n.nodes!==null&&n.nodes.end!==null&&(Yh(n.nodes.start,n.nodes.end),e=!0),n.f|=Vs,xc(n,t&&!e),Gs(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const s of i)s.stop();qh(n),n.f^=Vs,n.f|=Oe;var r=n.parent;r!==null&&r.first!==null&&jh(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function Yh(n,t){for(;n!==null;){var e=n===t?null:$s(n);n.remove(),n=e}}function jh(n){var t=n.parent,e=n.prev,i=n.next;e!==null&&(e.next=i),i!==null&&(i.prev=e),t!==null&&(t.first===n&&(t.first=i),t.last===n&&(t.last=e))}function ur(n,t,e=!0){var i=[];n.f|=cc,Zh(n,i,!0);var r=()=>{e&&$e(n),t&&t()},s=i.length;if(s>0){var a=()=>--s||r();for(var o of i)o.out(a)}else r()}function Zh(n,t,e){if((n.f&Xe)===0){n.f^=Xe;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||e)&&t.push(o);for(var r=n.first;r!==null;){var s=r.next;if((r.f&Bi)===0){var a=(r.f&Jr)!==0||(r.f&Nn)!==0&&(n.f&Cn)!==0;Zh(r,t,a?e:!1)}r=s}}}function ja(n){n.f&=~cc,Kh(n,!0)}function Kh(n,t){if((n.f&cc)===0&&(n.f&Xe)!==0){n.f^=Xe,(n.f&be)===0&&(Me(n,pe),dr.ensure().schedule(n));for(var e=n.first;e!==null;){var i=e.next,r=(e.f&Jr)!==0||(e.f&Nn)!==0;Kh(e,r?t:!1),e=i}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function Mc(n,t){if(n.nodes)for(var e=n.nodes.start,i=n.nodes.end;e!==null;){var r=e===i?null:$s(e);t.append(e),e=r}}let zi=!1;function Yc(n){zi=n}let Ht=null,Ln=!1;function xn(n){Ht=n}let $t=null;function Kn(n){$t=n}let jn=null;function $h(n){Ht!==null&&((Ht.f&Wa)!==0||(Ht.f&ke)!==0)&&(jn??(jn=new Set)).add(n)}let Ke=null,on=0,dn=null;function ip(n){dn=n}let Jh=1,er=0,hr=er;function jc(n){hr=n}function Qh(){return++Jh}function Js(n){var t=n.f;if((t&pe)!==0)return!0;if((t&cn)!==0){for(var e=n.deps,i=e.length,r=0;r<i;r++){var s=e[r];if(Js(s)&&Rh(s),s.wv>n.wv)return!0}(t&In)!==0&&Pe===null&&Me(n,be)}return!1}function tf(n,t,e=!0){var i=n.reactions;if(i!==null&&!(jn!==null&&jn.has(n)))for(var r=0;r<i.length;r++){var s=i[r];(s.f&ke)!==0?tf(s,t,!1):t===s&&(e?Me(s,pe):(s.f&be)!==0&&Me(s,cn),mc(s))}}function ef(n){var t=Ke,e=on,i=dn,r=Ht,s=jn,a=Be,o=Ln,l=hr,c=n.f;Ke=null,on=0,dn=null,Ht=(c&(Nn|Bi))===0?n:null,jn=null,Qr(n.ctx),Ln=!1,hr=++er,n.ac!==null&&(ms(()=>{n.ac.abort(Ks)}),n.ac=null);try{n.f|=Wa;var u=n.fn,h=u();n.f|=hs;var d=Zc(n);if(Th()&&dn!==null&&!Ln&&d!==null&&(n.f&(ke|cn|pe))===0)for(var m=0;m<dn.length;m++)tf(dn[m],n);if(r!==null&&r!==n){if(er++,r.deps!==null)for(let _=0;_<e;_+=1)r.deps[_].rv=er;if(t!==null)for(const _ of t)_.rv=er;dn!==null&&(i===null?i=dn:i.push(...dn))}return(n.f&Di)!==0&&(n.f^=Di),h}catch(_){return Zc(n),Zd(_)}finally{n.f^=Wa,Ke=t,on=e,dn=i,Ht=r,jn=s,Qr(a),Ln=o,hr=l}}function Zc(n){var r;var t=n.deps,e=Et==null?void 0:Et.is_fork;if(Ke!==null){var i;if(e||Gs(n,on),t!==null&&on>0)for(t.length=on+Ke.length,i=0;i<Ke.length;i++)t[on+i]=Ke[i];else n.deps=t=Ke;if(_c()&&(n.f&In)!==0)for(i=on;i<t.length;i++)((r=t[i]).reactions??(r.reactions=[])).push(n)}else!e&&t!==null&&on<t.length&&(Gs(n,on),t.length=on);return t}function rp(n,t){let e=t.reactions;if(e!==null){var i=Jf.call(e,n);if(i!==-1){var r=e.length-1;r===0?e=t.reactions=null:(e[i]=e[r],e.pop())}}if(e===null&&(t.f&ke)!==0&&(Ke===null||!Hs.call(Ke,t))){var s=t;(s.f&In)!==0&&(s.f^=In),s.v!==Te&&hc(s),s.ac!==null&&ms(()=>{s.ac.abort(Ks),s.ac=null,Me(s,pe)}),kd(s),Gs(s,0)}}function Gs(n,t){var e=n.deps;if(e!==null)for(var i=t;i<e.length;i++)rp(n,e[i])}function es(n){var t=n.f;if((t&Oe)===0){Me(n,be);var e=$t;$t=n;try{(t&(Cn|gh))!==0?np(n):xc(n),qh(n);var i=ef(n);n.teardown=typeof i=="function"?i:null,n.wv=Jh;var r;fh&&Cd&&(n.f&pe)!==0&&n.deps}finally{$t=e}}}async function sp(){await Promise.resolve(),Gd()}function rt(n){var t=n.f,e=(t&ke)!==0;if(Ht!==null&&!Ln){var i=$t!==null&&($t.f&Oe)!==0;if(!i&&(jn===null||!jn.has(n))){var r=Ht.deps;if((Ht.f&Wa)!==0)n.rv<er&&(n.rv=er,Ke===null&&r!==null&&r[on]===n?on++:Ke===null?Ke=[n]:Ke.push(n));else{Ht.deps??(Ht.deps=[]),Hs.call(Ht.deps,n)||Ht.deps.push(n);var s=n.reactions;s===null?n.reactions=[Ht]:Hs.call(s,Ht)||s.push(Ht)}}}if(zi&&Yn.has(n))return Yn.get(n);if(e){var a=n;if(zi){var o=a.v;return((a.f&be)===0&&a.reactions!==null||rf(a))&&(o=dc(a)),Yn.set(a,o),o}var l=(a.f&In)===0&&!Ln&&Ht!==null&&(Ht.f&In)!==0,c=(a.f&hs)===0;Js(a)&&(l&&(a.f|=In),Rh(a)),l&&!c&&(Ch(a),nf(a))}if(Pe!=null&&Pe.has(n))return Pe.get(n);if((n.f&Di)!==0)throw n.v;return n.v}function nf(n){if(n.f|=In,n.deps!==null)for(const e of n.deps){var t=e.reactions;t===null?e.reactions=[n]:Hs.call(t,n)||t.push(n),(e.f&ke)!==0&&(e.f&In)===0&&(Ch(e),nf(e))}}function rf(n){if(n.v===Te)return!0;if(n.deps===null)return!1;for(const t of n.deps)if(Yn.has(t)||(t.f&ke)!==0&&rf(t))return!0;return!1}function ro(n){var t=Ln;try{return Ln=!0,n()}finally{Ln=t}}const ap=["touchstart","touchmove"];function op(n){return ap.includes(n)}const nr=Symbol("events"),sf=new Set,hl=new Set;function lp(n,t,e,i={}){function r(s){if(i.capture||fl.call(t,s),!s.cancelBubble)return ms(()=>e==null?void 0:e.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?(r.__removed=!1,Xn(()=>{r.__removed||t.addEventListener(n,r,i)})):t.addEventListener(n,r,i),r}function cp(n,t,e,i,r){var s={capture:i,passive:r},a=lp(n,t,e,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Wh(()=>{a.__removed=!0,t.removeEventListener(n,a,s)})}function Le(n,t,e){(t[nr]??(t[nr]={}))[n]=e}function so(n){for(var t=0;t<n.length;t++)sf.add(n[t]);for(var e of hl)e(n)}let mo=null,_o=!1;function fl(n){var g,p;var t=this,e=t.ownerDocument,i=n.type,r=((g=n.composedPath)==null?void 0:g.call(n))||[],s=r[0]||n.target;mo=n,_o||(_o=!0,setTimeout(()=>{_o=!1,mo=null}));var a=0,o=mo===n&&n[nr];if(o){var l=r.indexOf(o);if(l!==-1&&(t===document||t===window)){n[nr]=t;return}var c=r.indexOf(t);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==t){ph(n,"currentTarget",{configurable:!0,get(){return s||e}});var u=Ht,h=$t;xn(null),Kn(null);try{for(var d,m=[];s!==null&&s!==t;){try{var _=(p=s[nr])==null?void 0:p[i];_!=null&&(!s.disabled||n.target===s)&&_.call(s,n)}catch(f){d?m.push(f):d=f}if(n.cancelBubble)break;a++,s=a<r.length?r[a]:null}if(d){for(let f of m)queueMicrotask(()=>{throw f});throw d}}finally{n[nr]=t,delete n.currentTarget,xn(u),Kn(h)}}}var uh;const go=((uh=globalThis==null?void 0:globalThis.window)==null?void 0:uh.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function up(n){return(go==null?void 0:go.createHTML(n))??n}function af(n){var t=Gh("template");return t.innerHTML=up(n.replaceAll("<!>","<!---->")),t.content}function ns(n,t){var e=$t;e.nodes===null&&(e.nodes={start:n,end:t,a:null,t:null})}function Qe(n,t){var e=(t&hd)!==0,i=(t&fd)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=af(s?n:"<!>"+n),e||(r=Pn(r)));var a=i||zh?document.importNode(r,!0):r.cloneNode(!0);if(e){var o=Pn(a),l=a.lastChild;ns(o,l)}else ns(a,a);return a}}function hp(n,t,e="svg"){var i=!n.startsWith("<!>"),r=`<${e}>${i?n:"<!>"+n}</${e}>`,s;return()=>{if(!s){var a=af(r),o=Pn(a);s=Pn(o)}var l=s.cloneNode(!0);return ns(l,l),l}}function Qs(n,t){return hp(n,t,"svg")}function fp(){var n=document.createDocumentFragment(),t=document.createComment(""),e=Ii();return n.append(t,e),ns(t,e),n}function Ee(n,t){n!==null&&n.before(t)}function dp(n){let t=0,e=pr(0),i;return()=>{_c()&&(rt(e),gc(()=>(t===0&&(i=ro(()=>n(()=>zs(e)))),t+=1,()=>{Xn(()=>{t-=1,t===0&&(i==null||i(),i=void 0,zs(e))})})))}}var pp=Jr|fs;function mp(n,t,e,i){new _p(n,t,e,i)}var pn,lc,mn,ar,Fe,rn,Ve,sn,zn,or,Pi,Kr,Ys,ui,to,jt,gp,vp,dl,Ai,xp,pl,Ls,Na,ml,_l;class _p{constructor(t,e,i,r){Gt(this,jt);Ue(this,"parent");Ue(this,"is_pending",!1);Ue(this,"transform_error");Gt(this,pn);Gt(this,lc,null);Gt(this,mn);Gt(this,ar);Gt(this,Fe);Gt(this,rn,null);Gt(this,Ve,null);Gt(this,sn,null);Gt(this,zn,null);Gt(this,or,0);Gt(this,Pi,0);Gt(this,Kr,!1);Gt(this,Ys,new Map);Gt(this,ui,null);Gt(this,to,dp(()=>(kt(this,ui,pr(z(this,or))),()=>{kt(this,ui,null)})));var s;kt(this,pn,t),kt(this,mn,e),kt(this,ar,a=>{var o=$t;o.b=this,o.f|=il,i(a)}),this.parent=$t.b,this.transform_error=r??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),kt(this,Fe,vc(()=>{wt(this,jt,pl).call(this)},pp))}defer_effect(t){Ah(t,z(this,Ys))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!z(this,mn).pending}update_pending_count(t,e){wt(this,jt,ml).call(this,t,e),kt(this,or,z(this,or)+t),!(!z(this,ui)||z(this,Kr))&&(kt(this,Kr,!0),Xn(()=>{kt(this,Kr,!1),z(this,ui)&&ts(z(this,ui),z(this,or))}))}get_effect_pending(){return z(this,to).call(this),rt(z(this,ui))}error(t){if(t===Mh||!z(this,mn).onerror&&!z(this,mn).failed)throw t;Et!=null&&Et.is_fork?(z(this,rn)&&Et.skip_effect(z(this,rn)),z(this,Ve)&&Et.skip_effect(z(this,Ve)),z(this,sn)&&Et.skip_effect(z(this,sn)),Et.oncommit(()=>{wt(this,jt,Ai).call(this)||wt(this,jt,_l).call(this,t)})):wt(this,jt,_l).call(this,t)}}pn=new WeakMap,lc=new WeakMap,mn=new WeakMap,ar=new WeakMap,Fe=new WeakMap,rn=new WeakMap,Ve=new WeakMap,sn=new WeakMap,zn=new WeakMap,or=new WeakMap,Pi=new WeakMap,Kr=new WeakMap,Ys=new WeakMap,ui=new WeakMap,to=new WeakMap,jt=new WeakSet,gp=function(){try{kt(this,rn,_n(()=>z(this,ar).call(this,z(this,pn))))}catch(t){this.error(t)}},vp=function(t){const e=z(this,mn).failed,{reset:i,invoke_onerror:r}=wt(this,jt,dl).call(this,t);Xn(r),e&&kt(this,sn,_n(()=>{e(z(this,pn),()=>t,()=>i)}))},dl=function(t){var e=!1,i=!1;const r=()=>{if(!wt(this,jt,Ai).call(this)){if(e){_d();return}e=!0,i&&Rd(),z(this,sn)!==null&&ur(z(this,sn),()=>{kt(this,sn,null)}),wt(this,jt,Na).call(this,()=>{wt(this,jt,pl).call(this)})}};return{reset:r,invoke_onerror:()=>{var a,o;if(!wt(this,jt,Ai).call(this))try{i=!0,(o=(a=z(this,mn)).onerror)==null||o.call(a,t,r),i=!1}catch(l){Vn(l,z(this,Fe)&&z(this,Fe).parent)}}}},Ai=function(){return(z(this,Fe).f&(Oe|Vs))!==0},xp=function(){const t=z(this,mn).pending;t&&(this.is_pending=!0,kt(this,Ve,_n(()=>t(z(this,pn)))),Xn(()=>{if(!wt(this,jt,Ai).call(this)){var e=kt(this,zn,document.createDocumentFragment()),i=Ii(),r=!1;if(e.append(i),kt(this,rn,wt(this,jt,Na).call(this,()=>{try{return _n(()=>z(this,ar).call(this,i))}catch(s){try{this.error(s),r=!0}catch(a){Vn(a,z(this,Fe).parent)}return null}})),z(this,rn)===null){kt(this,zn,null),r&&wt(this,jt,Ls).call(this,Et);return}z(this,Pi)===0&&(z(this,pn).before(e),kt(this,zn,null),ur(z(this,Ve),()=>{kt(this,Ve,null)}),wt(this,jt,Ls).call(this,Et))}}))},pl=function(){try{if(this.is_pending=this.has_pending_snippet(),kt(this,Pi,0),kt(this,or,0),kt(this,rn,_n(()=>{z(this,ar).call(this,z(this,pn))})),z(this,Pi)>0){var t=kt(this,zn,document.createDocumentFragment());Mc(z(this,rn),t);const e=z(this,mn).pending;kt(this,Ve,_n(()=>e(z(this,pn))))}else wt(this,jt,Ls).call(this,Et)}catch(e){this.error(e)}},Ls=function(t){this.is_pending=!1,t.transfer_reactions(z(this,Ys))},Na=function(t){var e=$t,i=Ht,r=Be;Kn(z(this,Fe)),xn(z(this,Fe)),Qr(z(this,Fe).ctx);try{return dr.ensure(),t()}finally{Kn(e),xn(i),Qr(r)}},ml=function(t,e){var i;if(!this.has_pending_snippet()){this.parent&&wt(i=this.parent,jt,ml).call(i,t,e);return}kt(this,Pi,z(this,Pi)+t),z(this,Pi)===0&&(wt(this,jt,Ls).call(this,e),z(this,Ve)&&ur(z(this,Ve),()=>{kt(this,Ve,null)}),z(this,zn)&&(z(this,pn).before(z(this,zn)),kt(this,zn,null)))},_l=function(t){z(this,rn)&&($e(z(this,rn)),kt(this,rn,null)),z(this,Ve)&&($e(z(this,Ve)),kt(this,Ve,null)),z(this,sn)&&($e(z(this,sn)),kt(this,sn,null));let e=z(this,mn).failed;const i=r=>{if(wt(this,jt,Ai).call(this))return;const{reset:s,invoke_onerror:a}=wt(this,jt,dl).call(this,r);a(),e&&!wt(this,jt,Ai).call(this)&&kt(this,sn,wt(this,jt,Na).call(this,()=>{try{return _n(()=>{var o=$t;o.b=this,o.f|=il,e(z(this,pn),()=>r,()=>s)})}catch(o){return Vn(o,z(this,Fe).parent),null}}))};Xn(()=>{if(!wt(this,jt,Ai).call(this)){var r;try{r=this.transform_error(t)}catch(s){Vn(s,z(this,Fe)&&z(this,Fe).parent);return}r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(i,s=>Vn(s,z(this,Fe)&&z(this,Fe).parent)):i(r)}})};function Gn(n,t){var e=t==null?"":typeof t=="object"?`${t}`:t;e!==(n[ws]??(n[ws]=n.nodeValue))&&(n[ws]=e,n.nodeValue=`${e}`)}function Mp(n,t){return Sp(n,t)}const oa=new Map;function Sp(n,{target:t,anchor:e,props:i={},events:r,context:s,intro:a=!0,transformError:o}){Yd();var l=void 0,c=Qd(()=>{var u=e??t.appendChild(Ii());mp(u,{pending:()=>{}},m=>{ds({});var _=Be;s&&(_.c=s),r&&(i.$$events=r),l=n(m,i)||uc(),ps()},o);var h=new Set,d=m=>{for(var _=0;_<m.length;_++){var g=m[_];if(!h.has(g)){h.add(g);var p=op(g);for(const T of[t,document]){var f=oa.get(T);f===void 0&&(f=new Map,oa.set(T,f));var b=f.get(g);b===void 0?(T.addEventListener(g,fl,{passive:p}),f.set(g,1)):f.set(g,b+1)}}}};return d(no(sf)),hl.add(d),()=>{var p;for(var m of h)for(const f of[t,document]){var _=oa.get(f),g=_.get(m);--g==0?(f.removeEventListener(m,fl),_.delete(m),_.size===0&&oa.delete(f)):_.set(m,g)}hl.delete(d),u!==e&&((p=u.parentNode)==null||p.removeChild(u))}});return Ep.set(l,c),l}let Ep=new WeakMap;var An,kn,an,lr,js,Zs,eo;class yp{constructor(t,e=!0){Ue(this,"anchor");Gt(this,An,new Map);Gt(this,kn,new Map);Gt(this,an,new Map);Gt(this,lr,new Set);Gt(this,js,!0);Gt(this,Zs,t=>{if(z(this,An).has(t)){var e=z(this,An).get(t),i=z(this,kn).get(e);if(i)ja(i),z(this,lr).delete(e);else{var r=z(this,an).get(e);r&&(ja(r.effect),z(this,kn).set(e,r.effect),z(this,an).delete(e),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[s,a]of z(this,An)){if(z(this,An).delete(s),s===t)break;const o=z(this,an).get(a);o&&($e(o.effect),z(this,an).delete(a))}for(const[s,a]of z(this,kn)){if(s===e||z(this,lr).has(s))continue;const o=()=>{if(Array.from(z(this,An).values()).includes(s)){var c=document.createDocumentFragment();Mc(a,c),c.append(Ii()),z(this,an).set(s,{effect:a,fragment:c})}else $e(a);z(this,lr).delete(s),z(this,kn).delete(s)};z(this,js)||!i?(z(this,lr).add(s),ur(a,o,!1)):o()}}});Gt(this,eo,t=>{z(this,An).delete(t);const e=Array.from(z(this,An).values());for(const[i,r]of z(this,an))e.includes(i)||($e(r.effect),z(this,an).delete(i))});this.anchor=t,kt(this,js,e)}ensure(t,e){var i=Et,r=Vh();if(e&&!z(this,kn).has(t)&&!z(this,an).has(t))if(r){var s=document.createDocumentFragment(),a=Ii();s.append(a),z(this,an).set(t,{effect:_n(()=>e(a)),fragment:s})}else z(this,kn).set(t,_n(()=>e(this.anchor)));if(z(this,An).set(i,t),r){for(const[o,l]of z(this,kn))o===t?i.unskip_effect(l):i.skip_effect(l);for(const[o,l]of z(this,an))o===t?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(z(this,Zs)),i.ondiscard(z(this,eo))}else z(this,Zs).call(this,i)}}An=new WeakMap,kn=new WeakMap,an=new WeakMap,lr=new WeakMap,js=new WeakMap,Zs=new WeakMap,eo=new WeakMap;function Ni(n,t,e=!1){var i=new yp(n),r=e?Jr:0;function s(a,o){i.ensure(a,o)}vc(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},r)}function gl(n,t){return t}function Tp(n,t,e){for(var i=[],r=t.length,s,a=t.length,o=0;o<r;o++){let h=t[o];ur(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var d=n.outrogroups;vl(n,no(s.done)),d.delete(s),d.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=i.length===0&&e!==null&&n.pending.size===0;if(l){var c=e,u=c.parentNode;jd(u),u.append(c),n.items.clear()}vl(n,t,!l)}else s={pending:new Set(t),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function vl(n,t,e=!0){var i;if(n.pending.size>0){i=new Set;for(const a of n.pending.values())for(const o of a)i.add(n.items.get(o).e)}for(var r=0;r<t.length;r++){var s=t[r];if(i!=null&&i.has(s)){s.f|=Wn;const a=document.createDocumentFragment();Mc(s,a)}else $e(t[r],e)}}var Kc;function is(n,t,e,i,r,s=null){var a=n,o=new Map,l=(t&xh)!==0;if(l){var c=n;a=c.appendChild(Ii())}var u=null,h=Bd(()=>{var b=e();return dh(b)?b:b==null?[]:no(b)}),d=new Map,m=!0;function _(b){if((f.effect.f&Oe)===0){f.pending.delete(b);var T=rt(h);f.fallback=u,bp(f,T,a,t,i),u!==null&&(T.length===0?(u.f&Wn)===0?ja(u):(u.f^=Wn,Ds(u,null,a)):ur(u,()=>{u=null}))}}function g(b){f.pending.delete(b)}var p=vc(()=>{for(var b=rt(h),T=b.length,E=new Set,F=Et,R=Vh(),w=0;w<T;w+=1){var C=b[w],S=i(C,w),x=m?null:o.get(S);x?(x.v&&ts(x.v,C),x.i&&ts(x.i,w),R&&F.unskip_effect(x.e)):(x=Ap(o,m?a:Kc??(Kc=Ii()),C,S,w,r,t,e),m||(x.e.f|=Wn),o.set(S,x)),E.add(S)}if(T===0&&s&&!u&&(m?u=_n(()=>s(a)):(u=_n(()=>s(Kc??(Kc=Ii()))),u.f|=Wn)),T>E.size&&Md(),!m)if(d.set(F,E),R){for(const[A,N]of o)E.has(A)||F.skip_effect(N.e);F.oncommit(_),F.ondiscard(g)}else _(F);rt(h)}),f={effect:p,items:o,pending:d,outrogroups:null,fallback:u};m=!1}function Ss(n){for(;n!==null&&(n.f&Nn)===0;)n=n.next;return n}function bp(n,t,e,i,r){var x,A,N,P,k,q,G,J,W;var s=(i&cd)!==0,a=t.length,o=n.items,l=Ss(n.effect.first),c,u=null,h,d=[],m=[],_,g,p,f;if(s)for(f=0;f<a;f+=1)_=t[f],g=r(_,f),p=o.get(g).e,(p.f&Wn)===0&&((A=(x=p.nodes)==null?void 0:x.a)==null||A.measure(),(h??(h=new Set)).add(p));for(f=0;f<a;f+=1){if(_=t[f],g=r(_,f),p=o.get(g).e,n.outrogroups!==null)for(const nt of n.outrogroups)nt.pending.delete(p),nt.done.delete(p);if((p.f&Xe)!==0&&(ja(p),s&&((P=(N=p.nodes)==null?void 0:N.a)==null||P.unfix(),(h??(h=new Set)).delete(p))),(p.f&Wn)!==0)if(p.f^=Wn,p===l)Ds(p,null,e);else{var b=u?u.next:l;p===n.effect.last&&(n.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),xi(n,u,p),xi(n,p,b),Ds(p,b,e),u=p,d=[],m=[],l=Ss(u.next);continue}if(p!==l){if(c!==void 0&&c.has(p)){if(d.length<m.length){var T=m[0],E;u=T.prev;var F=d[0],R=d[d.length-1];for(E=0;E<d.length;E+=1)Ds(d[E],T,e);for(E=0;E<m.length;E+=1)c.delete(m[E]);xi(n,F.prev,R.next),xi(n,u,F),xi(n,R,T),l=T,u=R,f-=1,d=[],m=[]}else c.delete(p),Ds(p,l,e),xi(n,p.prev,p.next),xi(n,p,u===null?n.effect.first:u.next),xi(n,u,p),u=p;continue}for(d=[],m=[];l!==null&&l!==p;)(c??(c=new Set)).add(l),m.push(l),l=Ss(l.next);if(l===null)continue}(p.f&Wn)===0&&d.push(p),u=p,l=Ss(p.next)}if(n.outrogroups!==null){for(const nt of n.outrogroups)nt.pending.size===0&&(vl(n,no(nt.done)),(k=n.outrogroups)==null||k.delete(nt));n.outrogroups.size===0&&(n.outrogroups=null)}if(l!==null||c!==void 0){var w=[];if(c!==void 0)for(p of c)(p.f&Xe)===0&&w.push(p);for(;l!==null;)(l.f&Xe)===0&&l!==n.fallback&&w.push(l),l=Ss(l.next);var C=w.length;if(C>0){var S=(i&xh)!==0&&a===0?e:null;if(s){for(f=0;f<C;f+=1)(G=(q=w[f].nodes)==null?void 0:q.a)==null||G.measure();for(f=0;f<C;f+=1)(W=(J=w[f].nodes)==null?void 0:J.a)==null||W.fix()}Tp(n,w,S)}}s&&Xn(()=>{var nt,ut;if(h!==void 0)for(p of h)(ut=(nt=p.nodes)==null?void 0:nt.a)==null||ut.apply()})}function Ap(n,t,e,i,r,s,a,o){var l=(a&od)!==0?(a&ud)===0?Xd(e,!1,!1):pr(e):null,c=(a&ld)!==0?pr(r):null;return{v:l,i:c,e:_n(()=>(s(t,l??e,c??r,o),()=>{n.delete(i)}))}}function Ds(n,t,e){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,s=t&&(t.f&Wn)===0?t.nodes.start:e;i!==null;){var a=$s(i);if(s.before(i),i===r)return;i=a}}function xi(n,t,e){t===null?n.effect.first=e:t.next=e,e===null?n.effect.last=t:e.prev=t}function wp(n,t,e=!1,i=!1,r=!1,s=!1){var a=n,o="";if(e)var l=n;We(()=>{var c=$t;if(o!==(o=t()??"")){if(e){c.nodes=null,l.innerHTML=o,o!==""&&ns(Pn(l),l.lastChild);return}if(c.nodes!==null&&(Yh(c.nodes.start,c.nodes.end),c.nodes=null),o!==""){var u=i?dd:r?pd:void 0,h=Gh(i?"svg":r?"math":"template",u);h.innerHTML=o;var d=i||r?h:h.content;if(ns(Pn(d),d.lastChild),i||r)for(;Pn(d);)a.before(Pn(d));else a.before(d)}}})}const $c=[...` 	
\r\f \v\uFEFF`];function Rp(n,t,e){var i=n==null?"":""+n;if(e){for(var r of Object.keys(e))if(e[r])i=i?i+" "+r:r;else if(i.length)for(var s=r.length,a=0;(a=i.indexOf(r,a))>=0;){var o=a+s;(a===0||$c.includes(i[a-1]))&&(o===i.length||$c.includes(i[o]))?i=(a===0?"":i.substring(0,a))+i.substring(o+1):a=o}}return i===""?null:i}function Jc(n,t=!1){var e=t?" !important;":";",i="";for(var r of Object.keys(n)){var s=n[r];s!=null&&s!==""&&(i+=" "+r+": "+s+e)}return i}function Cp(n,t){if(t){var e="",i,r;return Array.isArray(t)?(i=t[0],r=t[1]):i=t,i&&(e+=Jc(i)),r&&(e+=Jc(r,!0)),e=e.trim(),e===""?null:e}return String(n)}function Za(n,t,e,i,r,s){var a=n[rl];if(a!==e||a===void 0){var o=Rp(e,i,s);o==null?n.removeAttribute("class"):n.className=o,n[rl]=e}else if(s&&r!==s)for(var l in s){var c=!!s[l];(r==null||c!==!!r[l])&&n.classList.toggle(l,c)}return s}function vo(n,t={},e,i){for(var r in e){var s=e[r];t[r]!==s&&(e[r]==null?n.style.removeProperty(r):n.style.setProperty(r,s,i))}}function xo(n,t,e,i){var r=n[sl];if(r!==t){var s=Cp(t,i);s==null?n.removeAttribute("style"):n.style.cssText=s,n[sl]=t}else i&&(Array.isArray(i)?(vo(n,e==null?void 0:e[0],i[0]),vo(n,e==null?void 0:e[1],i[1],"important")):vo(n,e,i));return i}const Pp=Symbol("is custom element"),Lp=Symbol("is html");function Ce(n,t,e,i){var r=Dp(n),s=r[t];s!==(r[t]=e)&&(t==="loading"&&(n[ad]=e),e==null?n.removeAttribute(t):typeof e!="string"&&Up(n).has(t)?n[t]=e:n.setAttribute(t,e))}function Dp(n){return n[Da]??(n[Da]={[Pp]:n.nodeName.includes("-"),[Lp]:n.namespaceURI===Sh})}var Qc=new Map;function Up(n){var t=n.getAttribute("is")||n.nodeName,e=Qc.get(t);if(e)return e;Qc.set(t,e=new Set);for(var i,r=n,s=Element.prototype;s!==r;){i=Qf(r);for(var a in i)i[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&e.add(a);r=mh(r)}return e}function Ip(n,t,e=t){var i=new WeakSet;Id(n,"input",async r=>{var s=r?n.defaultValue:n.value;if(s=Mo(n)?So(s):s,e(s),Et!==null&&i.add(Et),await sp(),s!==(s=t())){var a=n.selectionStart,o=n.selectionEnd,l=n.value.length;if(n.value=s??"",o!==null){var c=n.value.length;a===o&&o===l&&c>l?(n.selectionStart=c,n.selectionEnd=c):(n.selectionStart=a,n.selectionEnd=Math.min(o,c))}}}),ro(t)==null&&n.value&&(e(Mo(n)?So(n.value):n.value),Et!==null&&i.add(Et)),gc(()=>{var r=t();if(n===document.activeElement){var s=Et;if(i.has(s))return}Mo(n)&&r===So(n.value)||n.type==="date"&&!r&&!n.value||r!==n.value&&(n.value=r??"")})}function Mo(n){var t=n.type;return t==="number"||t==="range"}function So(n){return n===""?null:+n}function Eo(n,t){return n===t||(n==null?void 0:n[La])===t}function of(n=uc(),t,e,i){var r=Be.r,s=$t;return tp(()=>{var a,o;return gc(()=>{a=o,o=[],ro(()=>{Eo(e(...o),n)||(t(n,...o),a&&Eo(e(...a),n)&&t(null,...a))})}),()=>{let l=s;for(;l!==r&&l.parent!==null&&l.parent.f&Vs;)l=l.parent;const c=()=>{o&&Eo(e(...o),n)&&t(null,...o)},u=l.teardown;l.teardown=()=>{c(),u==null||u()}}}),n}function ks(n,t,e,i){var r=i,s=!0,a=()=>(s&&(s=!1,r=i),r),o;o=n[t],o===void 0&&i!==void 0&&(o=a());var l;return l=()=>{var c=n[t];return c===void 0?a():(s=!0,c)},l}function lf(n){Be===null&&vd(),Jd(()=>{const t=ro(n);if(typeof t=="function")return t})}const Np="5";var hh;typeof window<"u"&&((hh=window.__svelte??(window.__svelte={})).v??(hh.v=new Set)).add(Np);const Fp="modulepreload",Op=function(n,t){return new URL(n,t).href},tu={},cf=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){let a=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));r=a(e.map(u=>{if(u=Op(u,i),u in tu)return;tu[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const p=o[g];if(p.href===u&&(!h||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":Fp,h||(_.as="script"),_.crossOrigin="",_.href=u,c&&_.setAttribute("nonce",c),document.head.appendChild(_),h)return new Promise((g,p)=>{_.addEventListener("load",g),_.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var rs;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(rs||(rs={}));class yo extends Error{constructor(t,e,i){super(t),this.message=t,this.code=e,this.data=i}}const Bp=n=>{var t,e;return n!=null&&n.androidBridge?"android":!((e=(t=n==null?void 0:n.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||e===void 0)&&e.bridge?"ios":"web"},zp=n=>{const t=n.CapacitorCustomPlatform||null,e=n.Capacitor||{},i=e.Plugins=e.Plugins||{},r=()=>t!==null?t.name:Bp(n),s=()=>r()!=="web",a=h=>{const d=c.get(h);return!!(d!=null&&d.platforms.has(r())||o(h))},o=h=>{var d;return(d=e.PluginHeaders)===null||d===void 0?void 0:d.find(m=>m.name===h)},l=h=>n.console.error(h),c=new Map,u=(h,d={})=>{const m=c.get(h);if(m)return console.warn(`Capacitor plugin "${h}" already registered. Cannot register plugins twice.`),m.proxy;const _=r(),g=o(h);let p;const f=async()=>(!p&&_ in d?p=typeof d[_]=="function"?p=await d[_]():p=d[_]:t!==null&&!p&&"web"in d&&(p=typeof d.web=="function"?p=await d.web():p=d.web),p),b=(C,S)=>{var x,A;if(g){const N=g==null?void 0:g.methods.find(P=>S===P.name);if(N)return N.rtype==="promise"?P=>e.nativePromise(h,S.toString(),P):(P,k)=>e.nativeCallback(h,S.toString(),P,k);if(C)return(x=C[S])===null||x===void 0?void 0:x.bind(C)}else{if(C)return(A=C[S])===null||A===void 0?void 0:A.bind(C);throw new yo(`"${h}" plugin is not implemented on ${_}`,rs.Unimplemented)}},T=C=>{let S;const x=(...A)=>{const N=f().then(P=>{const k=b(P,C);if(k){const q=k(...A);return S=q==null?void 0:q.remove,q}else throw new yo(`"${h}.${C}()" is not implemented on ${_}`,rs.Unimplemented)});return C==="addListener"&&(N.remove=async()=>S()),N};return x.toString=()=>`${C.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:C,writable:!1,configurable:!1}),x},E=T("addListener"),F=T("removeListener"),R=(C,S)=>{const x=E({eventName:C},S),A=async()=>{const P=await x;F({eventName:C,callbackId:P},S)},N=new Promise(P=>x.then(()=>P({remove:A})));return N.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await A()},N},w=new Proxy({},{get(C,S){switch(S){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return g?R:E;case"removeListener":return F;default:return T(S)}}});return i[h]=w,c.set(h,{name:h,proxy:w,platforms:new Set([...Object.keys(d),...g?[_]:[]])}),w};return e.convertFileSrc||(e.convertFileSrc=h=>h),e.getPlatform=r,e.handleError=l,e.isNativePlatform=s,e.isPluginAvailable=a,e.registerPlugin=u,e.Exception=yo,e.DEBUG=!!e.DEBUG,e.isLoggingEnabled=!!e.isLoggingEnabled,e},kp=n=>n.Capacitor=zp(n),xl=kp(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),ao=xl.registerPlugin;class uf{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,e){let i=!1;this.listeners[t]||(this.listeners[t]=[],i=!0),this.listeners[t].push(e);const s=this.windowListeners[t];s&&!s.registered&&this.addWindowListener(s),i&&this.sendRetainedArgumentsForEvent(t);const a=async()=>this.removeListener(t,e);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,e,i){const r=this.listeners[t];if(!r){if(i){let s=this.retainedEventArguments[t];s||(s=[]),s.push(e),this.retainedEventArguments[t]=s}return}r.forEach(s=>s(e))}hasListeners(t){var e;return!!(!((e=this.listeners[t])===null||e===void 0)&&e.length)}registerWindowListener(t,e){this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:i=>{this.notifyListeners(e,i)}}}unimplemented(t="not implemented"){return new xl.Exception(t,rs.Unimplemented)}unavailable(t="not available"){return new xl.Exception(t,rs.Unavailable)}async removeListener(t,e){const i=this.listeners[t];if(!i)return;const r=i.indexOf(e);this.listeners[t].splice(r,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const e=this.retainedEventArguments[t];e&&(delete this.retainedEventArguments[t],e.forEach(i=>{this.notifyListeners(t,i)}))}}const eu=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),nu=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Hp extends uf{async getCookies(){const t=document.cookie,e={};return t.split(";").forEach(i=>{if(i.length<=0)return;let[r,s]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");r=nu(r).trim(),s=nu(s).trim(),e[r]=s}),e}async setCookie(t){try{const e=eu(t.key),i=eu(t.value),r=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",s=(t.path||"/").replace("path=",""),a=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${e}=${i||""}${r}; path=${s}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const e of t)document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}ao("CapacitorCookies",{web:()=>new Hp});const Vp=async n=>new Promise((t,e)=>{const i=new FileReader;i.onload=()=>{const r=i.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},i.onerror=r=>e(r),i.readAsDataURL(n)}),Gp=(n={})=>{const t=Object.keys(n);return Object.keys(n).map(r=>r.toLocaleLowerCase()).reduce((r,s,a)=>(r[s]=n[t[a]],r),{})},Wp=(n,t=!0)=>n?Object.entries(n).reduce((i,r)=>{const[s,a]=r;let o,l;return Array.isArray(a)?(l="",a.forEach(c=>{o=t?encodeURIComponent(c):c,l+=`${s}=${o}&`}),l.slice(0,-1)):(o=t?encodeURIComponent(a):a,l=`${s}=${o}`),`${i}&${l}`},"").substr(1):null,Xp=(n,t={})=>{const e=Object.assign({method:n.method||"GET",headers:n.headers},t),r=Gp(n.headers)["content-type"]||"";if(typeof n.data=="string")e.body=n.data;else if(r.includes("application/x-www-form-urlencoded")){const s=new URLSearchParams;for(const[a,o]of Object.entries(n.data||{}))s.set(a,o);e.body=s.toString()}else if(r.includes("multipart/form-data")||n.data instanceof FormData){const s=new FormData;if(n.data instanceof FormData)n.data.forEach((o,l)=>{s.append(l,o)});else for(const o of Object.keys(n.data))s.append(o,n.data[o]);e.body=s;const a=new Headers(e.headers);a.delete("content-type"),e.headers=a}else(r.includes("application/json")||typeof n.data=="object")&&(e.body=JSON.stringify(n.data));return e};class qp extends uf{async request(t){const e=Xp(t,t.webFetchExtra),i=Wp(t.params,t.shouldEncodeUrlParams),r=i?`${t.url}?${i}`:t.url,s=await fetch(r,e),a=s.headers.get("content-type")||"";let{responseType:o="text"}=s.ok?t:{};a.includes("application/json")&&(o="json");let l,c;switch(o){case"arraybuffer":case"blob":c=await s.blob(),l=await Vp(c);break;case"json":l=await s.json();break;case"document":case"text":default:l=await s.text()}const u={};return s.headers.forEach((h,d)=>{u[d]=h}),{data:l,headers:u,status:s.status,url:s.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}ao("CapacitorHttp",{web:()=>new qp});const Yp=ao("App",{web:()=>cf(()=>import("./web-Cx1OQHsO.js"),[],import.meta.url).then(n=>new n.AppWeb)}),jp=""+new URL("create-BR7cPozS.png",import.meta.url).href;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sc="170",Hr={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zp=0,iu=1,Kp=2,hf=1,$p=2,si=3,ki=0,Je=1,hi=2,Fi=0,Vr=1,ru=2,su=3,au=4,Jp=5,Ji=100,Qp=101,tm=102,em=103,nm=104,im=200,rm=201,sm=202,am=203,Ml=204,Sl=205,om=206,lm=207,cm=208,um=209,hm=210,fm=211,dm=212,pm=213,mm=214,El=0,yl=1,Tl=2,ss=3,bl=4,Al=5,wl=6,Rl=7,ff=0,_m=1,gm=2,Oi=0,vm=1,xm=2,Mm=3,Sm=4,Em=5,ym=6,Tm=7,df=300,as=301,os=302,Cl=303,Pl=304,oo=306,Ka=1e3,ir=1001,Ll=1002,vn=1003,bm=1004,Us=1005,qn=1006,To=1007,rr=1008,mi=1009,pf=1010,mf=1011,Ws=1012,Ec=1013,mr=1014,fi=1015,ta=1016,yc=1017,Tc=1018,ls=1020,_f=35902,gf=1021,vf=1022,Dn=1023,xf=1024,Mf=1025,Gr=1026,cs=1027,Sf=1028,bc=1029,Ef=1030,Ac=1031,wc=1033,Fa=33776,Oa=33777,Ba=33778,za=33779,Dl=35840,Ul=35841,Il=35842,Nl=35843,Fl=36196,Ol=37492,Bl=37496,zl=37808,kl=37809,Hl=37810,Vl=37811,Gl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,jl=37817,Zl=37818,Kl=37819,$l=37820,Jl=37821,ka=36492,Ql=36494,tc=36495,yf=36283,ec=36284,nc=36285,ic=36286,Am=3200,wm=3201,Tf=0,Rm=1,Ri="",ln="srgb",_s="srgb-linear",lo="linear",ae="srgb",Er=7680,ou=519,Cm=512,Pm=513,Lm=514,bf=515,Dm=516,Um=517,Im=518,Nm=519,lu=35044,cu="300 es",di=2e3,$a=2001;class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ha=Math.PI/180,rc=180/Math.PI;function ea(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Ge(n,t,e){return Math.max(t,Math.min(e,n))}function Fm(n,t){return(n%t+t)%t}function bo(n,t,e){return(1-e)*n+e*t}function Es(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Om={DEG2RAD:Ha};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,i,r,s,a,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],_=i[8],g=r[0],p=r[3],f=r[6],b=r[1],T=r[4],E=r[7],F=r[2],R=r[5],w=r[8];return s[0]=a*g+o*b+l*F,s[3]=a*p+o*T+l*R,s[6]=a*f+o*E+l*w,s[1]=c*g+u*b+h*F,s[4]=c*p+u*T+h*R,s[7]=c*f+u*E+h*w,s[2]=d*g+m*b+_*F,s[5]=d*p+m*T+_*R,s[8]=d*f+m*E+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,m=c*s-a*l,_=e*h+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(r*c-u*i)*g,t[2]=(o*i-r*a)*g,t[3]=d*g,t[4]=(u*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=m*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ao.makeScale(t,e)),this}rotate(t){return this.premultiply(Ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new Ut;function Af(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bm(){const n=Xs("canvas");return n.style.display="block",n}const uu={};function Is(n){n in uu||(uu[n]=!0,console.warn(n))}function zm(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function km(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Kt={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(n.r=pi(n.r),n.g=pi(n.g),n.b=pi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(n.r=Wr(n.r),n.g=Wr(n.g),n.b=Wr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ri?lo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hu=[.64,.33,.3,.6,.15,.06],fu=[.2126,.7152,.0722],du=[.3127,.329],pu=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[_s]:{primaries:hu,whitePoint:du,transfer:lo,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:fu,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:hu,whitePoint:du,transfer:ae,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:fu,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}});let yr;class Vm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yr===void 0&&(yr=Xs("canvas")),yr.width=t.width,yr.height=t.height;const i=yr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=yr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pi(e[i]/255)*255):e[i]=pi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gm=0;class wf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=ea(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(wo(r[a].image)):s.push(wo(r[a]))}else s=wo(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wm=0;class qe extends vr{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=ir,r=ir,s=qn,a=rr,o=Dn,l=mi,c=qe.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=ea(),this.name="",this.source=new wf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==df)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ka:t.x=t.x-Math.floor(t.x);break;case ir:t.x=t.x<0?0:1;break;case Ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ka:t.y=t.y-Math.floor(t.y);break;case ir:t.y=t.y<0?0:1;break;case Ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=df;qe.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,i=0,r=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],_=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,E=(m+1)/2,F=(f+1)/2,R=(u+d)/4,w=(h+g)/4,C=(_+p)/4;return T>E&&T>F?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=w/i):E>F?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=C/r):F<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),i=w/s,r=C/s),this.set(i,r,s,e),this}let b=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(h-g)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xm extends vr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qe(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends Xm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rf extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qm extends qe{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==d||c!==m||u!==_){let p=1-o;const f=l*d+c*m+u*_+h*g,b=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const F=Math.sqrt(T),R=Math.atan2(F,f*b);p=Math.sin(p*R)/F,o=Math.sin(o*R)/F}const E=o*b;if(l=l*p+d*E,c=c*p+m*E,u=u*p+_*E,h=h*p+g*E,p===1-o){const F=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=F,c*=F,u*=F,h*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*m-c*d,t[e+1]=l*_+u*d+c*h-o*m,t[e+2]=c*_+u*m+o*d-l*h,t[e+3]=u*_-o*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"YXZ":this._x=d*u*h+c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"ZXY":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h-d*m*_;break;case"ZYX":this._x=d*u*h-c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h+d*m*_;break;case"YZX":this._x=d*u*h+c*m*_,this._y=c*m*h+d*u*_,this._z=c*u*_-d*m*h,this._w=c*u*h-d*m*_;break;case"XZY":this._x=d*u*h-c*m*_,this._y=c*m*h-d*u*_,this._z=c*u*_+d*m*h,this._w=c*u*h+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),h=2*(s*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ro.copy(this).projectOnVector(t),this.sub(Ro)}reflect(t){return this.sub(Ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new B,_u=new gr;class na{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),la.copy(i.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),ca.subVectors(this.max,ys),Tr.subVectors(t.a,ys),br.subVectors(t.b,ys),Ar.subVectors(t.c,ys),Mi.subVectors(br,Tr),Si.subVectors(Ar,br),Gi.subVectors(Tr,Ar);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Gi.z,Gi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Gi.z,0,-Gi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Gi.y,Gi.x,0];return!Co(e,Tr,br,Ar,ca)||(e=[1,0,0,0,1,0,0,0,1],!Co(e,Tr,br,Ar,ca))?!1:(ua.crossVectors(Mi,Si),e=[ua.x,ua.y,ua.z],Co(e,Tr,br,Ar,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new B,new B,new B,new B,new B,new B,new B,new B],En=new B,la=new na,Tr=new B,br=new B,Ar=new B,Mi=new B,Si=new B,Gi=new B,ys=new B,ca=new B,ua=new B,Wi=new B;function Co(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Wi.fromArray(n,s);const o=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ym=new na,Ts=new B,Po=new B;class Rc{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ym.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);const e=Ts.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ts,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Po)),this.expandByPoint(Ts.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new B,Lo=new B,ha=new B,Ei=new B,Do=new B,fa=new B,Uo=new B;class Cf{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Lo.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),Ei.copy(this.origin).sub(Lo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ha),o=Ei.dot(this.direction),l=-Ei.dot(ha),c=Ei.lengthSq(),u=Math.abs(1-a*a);let h,d,m,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Lo).addScaledVector(ha,d),m}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,r,s){Do.subVectors(e,t),fa.subVectors(i,t),Uo.crossVectors(Do,fa);let a=this.direction.dot(Uo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ei.subVectors(this.origin,t);const l=o*this.direction.dot(fa.crossVectors(Ei,fa));if(l<0)return null;const c=o*this.direction.dot(Do.cross(Ei));if(c<0||l+c>a)return null;const u=-o*Ei.dot(Uo);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,i,r,s,a,o,l,c,u,h,d,m,_,g,p){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,h,d,m,_,g,p)}set(t,e,i,r,s,a,o,l,c,u,h,d,m,_,g,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/wr.setFromMatrixColumn(t,0).length(),s=1/wr.setFromMatrixColumn(t,1).length(),a=1/wr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,_=c*u,g=c*h;e[0]=d+g*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,_=c*u,g=c*h;e[0]=d-g*o,e[4]=-a*h,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,m=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-m,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-d*h,e[8]=_*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=a*l,m=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=a*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=o*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jm,t,Zm)}lookAt(t,e,i){const r=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),yi.crossVectors(i,en),yi.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),yi.crossVectors(i,en)),yi.normalize(),da.crossVectors(en,yi),r[0]=yi.x,r[4]=da.x,r[8]=en.x,r[1]=yi.y,r[5]=da.y,r[9]=en.y,r[2]=yi.z,r[6]=da.z,r[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],_=i[2],g=i[6],p=i[10],f=i[14],b=i[3],T=i[7],E=i[11],F=i[15],R=r[0],w=r[4],C=r[8],S=r[12],x=r[1],A=r[5],N=r[9],P=r[13],k=r[2],q=r[6],G=r[10],J=r[14],W=r[3],nt=r[7],ut=r[11],St=r[15];return s[0]=a*R+o*x+l*k+c*W,s[4]=a*w+o*A+l*q+c*nt,s[8]=a*C+o*N+l*G+c*ut,s[12]=a*S+o*P+l*J+c*St,s[1]=u*R+h*x+d*k+m*W,s[5]=u*w+h*A+d*q+m*nt,s[9]=u*C+h*N+d*G+m*ut,s[13]=u*S+h*P+d*J+m*St,s[2]=_*R+g*x+p*k+f*W,s[6]=_*w+g*A+p*q+f*nt,s[10]=_*C+g*N+p*G+f*ut,s[14]=_*S+g*P+p*J+f*St,s[3]=b*R+T*x+E*k+F*W,s[7]=b*w+T*A+E*q+F*nt,s[11]=b*C+T*N+E*G+F*ut,s[15]=b*S+T*P+E*J+F*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],_=t[3],g=t[7],p=t[11],f=t[15];return _*(+s*l*h-r*c*h-s*o*d+i*c*d+r*o*m-i*l*m)+g*(+e*l*m-e*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+p*(+e*c*h-e*o*m-s*a*h+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-e*l*h+e*o*d+r*a*h-i*a*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],_=t[12],g=t[13],p=t[14],f=t[15],b=h*p*c-g*d*c+g*l*m-o*p*m-h*l*f+o*d*f,T=_*d*c-u*p*c-_*l*m+a*p*m+u*l*f-a*d*f,E=u*g*c-_*h*c+_*o*m-a*g*m-u*o*f+a*h*f,F=_*h*l-u*g*l-_*o*d+a*g*d+u*o*p-a*h*p,R=e*b+i*T+r*E+s*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=b*w,t[1]=(g*d*s-h*p*s-g*r*m+i*p*m+h*r*f-i*d*f)*w,t[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*f+i*l*f)*w,t[3]=(h*l*s-o*d*s-h*r*c+i*d*c+o*r*m-i*l*m)*w,t[4]=T*w,t[5]=(u*p*s-_*d*s+_*r*m-e*p*m-u*r*f+e*d*f)*w,t[6]=(_*l*s-a*p*s-_*r*c+e*p*c+a*r*f-e*l*f)*w,t[7]=(a*d*s-u*l*s+u*r*c-e*d*c-a*r*m+e*l*m)*w,t[8]=E*w,t[9]=(_*h*s-u*g*s-_*i*m+e*g*m+u*i*f-e*h*f)*w,t[10]=(a*g*s-_*o*s+_*i*c-e*g*c-a*i*f+e*o*f)*w,t[11]=(u*o*s-a*h*s-u*i*c+e*h*c+a*i*m-e*o*m)*w,t[12]=F*w,t[13]=(u*g*r-_*h*r+_*i*d-e*g*d-u*i*p+e*h*p)*w,t[14]=(_*o*r-a*g*r-_*i*l+e*g*l+a*i*p-e*o*p)*w,t[15]=(a*h*r-u*o*r+u*i*l-e*h*l-a*i*d+e*o*d)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,m=s*u,_=s*h,g=a*u,p=a*h,f=o*h,b=l*c,T=l*u,E=l*h,F=i.x,R=i.y,w=i.z;return r[0]=(1-(g+f))*F,r[1]=(m+E)*F,r[2]=(_-T)*F,r[3]=0,r[4]=(m-E)*R,r[5]=(1-(d+f))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(_+T)*w,r[9]=(p-b)*w,r[10]=(1-(d+g))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=wr.set(r[0],r[1],r[2]).length();const a=wr.set(r[4],r[5],r[6]).length(),o=wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],yn.copy(this);const c=1/s,u=1/a,h=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=di){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),d=(i+r)/(i-r);let m,_;if(o===di)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===$a)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=di){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(a-s),d=(e+t)*c,m=(i+r)*u;let _,g;if(o===di)_=(a+s)*h,g=-2*h;else if(o===$a)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const wr=new B,yn=new xe,jm=new B(0,0,0),Zm=new B(1,1,1),yi=new B,da=new B,en=new B,gu=new xe,vu=new gr;class $n{constructor(t=0,e=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Pf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Km=0;const xu=new B,Rr=new gr,ni=new xe,pa=new B,bs=new B,$m=new B,Jm=new gr,Mu=new B(1,0,0),Su=new B(0,1,0),Eu=new B(0,0,1),yu={type:"added"},Qm={type:"removed"},Cr={type:"childadded",child:null},Io={type:"childremoved",child:null};class ze extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new B,e=new $n,i=new gr,r=new B(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xe},normalMatrix:{value:new Ut}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(t,e){return Rr.setFromAxisAngle(t,e),this.quaternion.premultiply(Rr),this}rotateX(t){return this.rotateOnAxis(Mu,t)}rotateY(t){return this.rotateOnAxis(Su,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mu,t)}translateY(t){return this.translateOnAxis(Su,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?pa.copy(t):pa.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(bs,pa,this.up):ni.lookAt(pa,bs,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(ni),this.quaternion.premultiply(Rr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yu),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qm),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yu),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,$m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Jm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ze.DEFAULT_UP=new B(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new B,ii=new B,No=new B,ri=new B,Pr=new B,Lr=new B,Tu=new B,Fo=new B,Oo=new B,Bo=new B,zo=new ve,ko=new ve,Ho=new ve;class Rn{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Tn.subVectors(t,e),r.cross(Tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Tn.subVectors(r,e),ii.subVectors(i,e),No.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(ii),l=Tn.dot(No),c=ii.dot(ii),u=ii.dot(No),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return zo.setScalar(0),ko.setScalar(0),Ho.setScalar(0),zo.fromBufferAttribute(t,e),ko.fromBufferAttribute(t,i),Ho.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(zo,s.x),a.addScaledVector(ko,s.y),a.addScaledVector(Ho,s.z),a}static isFrontFacing(t,e,i,r){return Tn.subVectors(i,e),ii.subVectors(t,e),Tn.cross(ii).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Tn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Rn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Pr.subVectors(r,i),Lr.subVectors(s,i),Fo.subVectors(t,i);const l=Pr.dot(Fo),c=Lr.dot(Fo);if(l<=0&&c<=0)return e.copy(i);Oo.subVectors(t,r);const u=Pr.dot(Oo),h=Lr.dot(Oo);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Pr,a);Bo.subVectors(t,s);const m=Pr.dot(Bo),_=Lr.dot(Bo);if(_>=0&&m<=_)return e.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Lr,o);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return Tu.subVectors(s,r),o=(h-u)/(h-u+(m-_)),e.copy(r).addScaledVector(Tu,o);const f=1/(p+g+d);return a=g*f,o=d*f,e.copy(i).addScaledVector(Pr,a).addScaledVector(Lr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Vo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class te{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Kt.workingColorSpace){if(t=Fm(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Vo(a,s,t+1/3),this.g=Vo(a,s,t),this.b=Vo(a,s,t-1/3)}return Kt.toWorkingColorSpace(this,r),this}setStyle(t,e=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const i=Lf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Kt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ge(Ne.r*255,0,255))*65536+Math.round(Ge(Ne.g*255,0,255))*256+Math.round(Ge(Ne.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ne.copy(this),e);const i=Ne.r,r=Ne.g,s=Ne.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=ln){Kt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,i=Ne.g,r=Ne.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(ma);const i=bo(Ti.h,ma.h,e),r=bo(Ti.s,ma.s,e),s=bo(Ti.l,ma.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new te;te.NAMES=Lf;let t_=0;class ia extends vr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=ea(),this.name="",this.blending=Vr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=Sl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ml&&(i.blendSrc=this.blendSrc),this.blendDst!==Sl&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Df extends ia{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new B,_a=new It;class Zn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=lu,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Es(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),r=je(r,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lu&&(t.usage=this.usage),t}}class Uf extends Zn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class If extends Zn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fr extends Zn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let e_=0;const fn=new xe,Go=new ze,Dr=new B,nn=new na,As=new na,Re=new B;class xr extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Af(t)?If:Uf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ut().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new fr(i,3))}else{for(let i=0,r=e.count;i<r;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(nn.min,As.min),nn.expandByPoint(Re),Re.addVectors(nn.max,As.max),nn.expandByPoint(Re)):(nn.expandByPoint(As.min),nn.expandByPoint(As.max))}nn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)Re.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Re));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Re.fromBufferAttribute(o,c),l&&(Dr.fromBufferAttribute(t,c),Re.add(Dr)),r=Math.max(r,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<i.count;C++)o[C]=new B,l[C]=new B;const c=new B,u=new B,h=new B,d=new It,m=new It,_=new It,g=new B,p=new B;function f(C,S,x){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,x),d.fromBufferAttribute(s,C),m.fromBufferAttribute(s,S),_.fromBufferAttribute(s,x),u.sub(c),h.sub(c),m.sub(d),_.sub(d);const A=1/(m.x*_.y-_.x*m.y);isFinite(A)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(A),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(A),o[C].add(g),o[S].add(g),o[x].add(g),l[C].add(p),l[S].add(p),l[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,S=b.length;C<S;++C){const x=b[C],A=x.start,N=x.count;for(let P=A,k=A+N;P<k;P+=3)f(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const T=new B,E=new B,F=new B,R=new B;function w(C){F.fromBufferAttribute(r,C),R.copy(F);const S=o[C];T.copy(S),T.sub(F.multiplyScalar(F.dot(S))).normalize(),E.crossVectors(R,S);const A=E.dot(l[C])<0?-1:1;a.setXYZW(C,T.x,T.y,T.z,A)}for(let C=0,S=b.length;C<S;++C){const x=b[C],A=x.start,N=x.count;for(let P=A,k=A+N;P<k;P+=3)w(t.getX(P+0)),w(t.getX(P+1)),w(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let d=0,m=t.count;d<m;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let f=0;f<u;f++)d[_++]=c[m++]}return new Zn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new xe,Xi=new Cf,ga=new Rc,Au=new B,va=new B,xa=new B,Ma=new B,Wo=new B,Sa=new B,wu=new B,Ea=new B;class Un extends ze{constructor(t=new xr,e=new Df){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Wo.fromBufferAttribute(h,t),a?Sa.addScaledVector(Wo,u):Sa.addScaledVector(Wo.sub(e),u))}e.add(Sa)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ga.copy(i.boundingSphere),ga.applyMatrix4(s),Xi.copy(t.ray).recast(t.near),!(ga.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(ga,Au)===null||Xi.origin.distanceToSquared(Au)>(t.far-t.near)**2))&&(bu.copy(s).invert(),Xi.copy(t.ray).applyMatrix4(bu),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,F=T;E<F;E+=3){const R=o.getX(E),w=o.getX(E+1),C=o.getX(E+2);r=ya(this,f,t,i,c,u,h,R,w,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const b=o.getX(p),T=o.getX(p+1),E=o.getX(p+2);r=ya(this,a,t,i,c,u,h,b,T,E),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,F=T;E<F;E+=3){const R=E,w=E+1,C=E+2;r=ya(this,f,t,i,c,u,h,R,w,C),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const b=p,T=p+1,E=p+2;r=ya(this,a,t,i,c,u,h,b,T,E),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function n_(n,t,e,i,r,s,a,o){let l;if(t.side===Je?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===ki,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:n}}function ya(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,va),n.getVertexPosition(l,xa),n.getVertexPosition(c,Ma);const u=n_(n,t,e,i,va,xa,Ma,wu);if(u){const h=new B;Rn.getBarycoord(wu,va,xa,Ma,h),r&&(u.uv=Rn.getInterpolatedAttribute(r,o,l,c,h,new It)),s&&(u.uv1=Rn.getInterpolatedAttribute(s,o,l,c,h,new It)),a&&(u.normal=Rn.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};Rn.getNormal(va,xa,Ma,d.normal),u.face=d,u.barycoord=h}return u}class gs extends xr{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,r,a,2),_("x","z","y",1,-1,t,i,-e,r,a,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fr(c,3)),this.setAttribute("normal",new fr(u,3)),this.setAttribute("uv",new fr(h,2));function _(g,p,f,b,T,E,F,R,w,C,S){const x=E/w,A=F/C,N=E/2,P=F/2,k=R/2,q=w+1,G=C+1;let J=0,W=0;const nt=new B;for(let ut=0;ut<G;ut++){const St=ut*A-P;for(let zt=0;zt<q;zt++){const ee=zt*x-N;nt[g]=ee*b,nt[p]=St*T,nt[f]=k,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[p]=0,nt[f]=R>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(zt/w),h.push(1-ut/C),J+=1}}for(let ut=0;ut<C;ut++)for(let St=0;St<w;St++){const zt=d+St+q*ut,ee=d+St+q*(ut+1),Y=d+(St+1)+q*(ut+1),tt=d+(St+1)+q*ut;l.push(zt,ee,tt),l.push(ee,Y,tt),W+=6}o.addGroup(m,W,S),m+=W,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function He(n){const t={};for(let e=0;e<n.length;e++){const i=us(n[e]);for(const r in i)t[r]=i[r]}return t}function i_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Nf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const r_={clone:us,merge:He};var s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hi extends ia{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=a_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=i_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ff extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new B,Ru=new It,Cu=new It;class gn extends Ff{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rc*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Cu),e.subVectors(Cu,Ru)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ur=-90,Ir=1;class o_ extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(Ur,Ir,t,e);r.layers=this.layers,this.add(r);const s=new gn(Ur,Ir,t,e);s.layers=this.layers,this.add(s);const a=new gn(Ur,Ir,t,e);a.layers=this.layers,this.add(a);const o=new gn(Ur,Ir,t,e);o.layers=this.layers,this.add(o);const l=new gn(Ur,Ir,t,e);l.layers=this.layers,this.add(l);const c=new gn(Ur,Ir,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Of extends qe{constructor(t,e,i,r,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class l_ extends _r{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Of(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gs(5,5,5),s=new Hi({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Fi});s.uniforms.tEquirect.value=e;const a=new Un(r,s),o=e.minFilter;return e.minFilter===rr&&(e.minFilter=qn),new o_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}const Xo=new B,c_=new B,u_=new Ut;class wi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Xo.subVectors(i,e).cross(c_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Xo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||u_.getNormalMatrix(t),r=this.coplanarPoint(Xo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Rc,Ta=new B;class Cc{constructor(t=new wi,e=new wi,i=new wi,r=new wi,s=new wi,a=new wi){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=di){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],m=r[8],_=r[9],g=r[10],p=r[11],f=r[12],b=r[13],T=r[14],E=r[15];if(i[0].setComponents(l-s,d-c,p-m,E-f).normalize(),i[1].setComponents(l+s,d+c,p+m,E+f).normalize(),i[2].setComponents(l+a,d+u,p+_,E+b).normalize(),i[3].setComponents(l-a,d-u,p-_,E-b).normalize(),i[4].setComponents(l-o,d-h,p-g,E-T).normalize(),e===di)i[5].setComponents(l+o,d+h,p+g,E+T).normalize();else if(e===$a)i[5].setComponents(o,h,g,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ta.x=r.normal.x>0?t.max.x:t.min.x,Ta.y=r.normal.y>0?t.max.y:t.min.y,Ta.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bf(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function h_(n){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],g=h[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const g=h[m];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ra extends xr{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=t/o,d=e/l,m=[],_=[],g=[],p=[];for(let f=0;f<u;f++){const b=f*d-a;for(let T=0;T<c;T++){const E=T*h-s;_.push(E,-b,0),g.push(0,0,1),p.push(T/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<o;b++){const T=b+c*f,E=b+c*(f+1),F=b+1+c*(f+1),R=b+1+c*f;m.push(T,E,R),m.push(E,F,R)}this.setIndex(m),this.setAttribute("position",new fr(_,3)),this.setAttribute("normal",new fr(g,3)),this.setAttribute("uv",new fr(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ra(t.width,t.height,t.widthSegments,t.heightSegments)}}var f_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,__=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,F_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,O_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V_="gl_FragColor = linearToOutputTexel( gl_FragColor );",G_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ng=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ig=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ug=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:f_,alphahash_pars_fragment:d_,alphamap_fragment:p_,alphamap_pars_fragment:m_,alphatest_fragment:__,alphatest_pars_fragment:g_,aomap_fragment:v_,aomap_pars_fragment:x_,batching_pars_vertex:M_,batching_vertex:S_,begin_vertex:E_,beginnormal_vertex:y_,bsdfs:T_,iridescence_fragment:b_,bumpmap_pars_fragment:A_,clipping_planes_fragment:w_,clipping_planes_pars_fragment:R_,clipping_planes_pars_vertex:C_,clipping_planes_vertex:P_,color_fragment:L_,color_pars_fragment:D_,color_pars_vertex:U_,color_vertex:I_,common:N_,cube_uv_reflection_fragment:F_,defaultnormal_vertex:O_,displacementmap_pars_vertex:B_,displacementmap_vertex:z_,emissivemap_fragment:k_,emissivemap_pars_fragment:H_,colorspace_fragment:V_,colorspace_pars_fragment:G_,envmap_fragment:W_,envmap_common_pars_fragment:X_,envmap_pars_fragment:q_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:rg,envmap_vertex:j_,fog_vertex:Z_,fog_pars_vertex:K_,fog_fragment:$_,fog_pars_fragment:J_,gradientmap_pars_fragment:Q_,lightmap_pars_fragment:tg,lights_lambert_fragment:eg,lights_lambert_pars_fragment:ng,lights_pars_begin:ig,lights_toon_fragment:sg,lights_toon_pars_fragment:ag,lights_phong_fragment:og,lights_phong_pars_fragment:lg,lights_physical_fragment:cg,lights_physical_pars_fragment:ug,lights_fragment_begin:hg,lights_fragment_maps:fg,lights_fragment_end:dg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:gg,map_fragment:vg,map_pars_fragment:xg,map_particle_fragment:Mg,map_particle_pars_fragment:Sg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:yg,morphinstance_vertex:Tg,morphcolor_vertex:bg,morphnormal_vertex:Ag,morphtarget_pars_vertex:wg,morphtarget_vertex:Rg,normal_fragment_begin:Cg,normal_fragment_maps:Pg,normal_pars_fragment:Lg,normal_pars_vertex:Dg,normal_vertex:Ug,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Bg,opaque_fragment:zg,packing:kg,premultiplied_alpha_fragment:Hg,project_vertex:Vg,dithering_fragment:Gg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:jg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Kg,skinbase_vertex:$g,skinning_pars_vertex:Jg,skinning_vertex:Qg,skinnormal_vertex:tv,specularmap_fragment:ev,specularmap_pars_fragment:nv,tonemapping_fragment:iv,tonemapping_pars_fragment:rv,transmission_fragment:sv,transmission_pars_fragment:av,uv_pars_fragment:ov,uv_pars_vertex:lv,uv_vertex:cv,worldpos_vertex:uv,background_vert:hv,background_frag:fv,backgroundCube_vert:dv,backgroundCube_frag:pv,cube_vert:mv,cube_frag:_v,depth_vert:gv,depth_frag:vv,distanceRGBA_vert:xv,distanceRGBA_frag:Mv,equirect_vert:Sv,equirect_frag:Ev,linedashed_vert:yv,linedashed_frag:Tv,meshbasic_vert:bv,meshbasic_frag:Av,meshlambert_vert:wv,meshlambert_frag:Rv,meshmatcap_vert:Cv,meshmatcap_frag:Pv,meshnormal_vert:Lv,meshnormal_frag:Dv,meshphong_vert:Uv,meshphong_frag:Iv,meshphysical_vert:Nv,meshphysical_frag:Fv,meshtoon_vert:Ov,meshtoon_frag:Bv,points_vert:zv,points_frag:kv,shadow_vert:Hv,shadow_frag:Vv,sprite_vert:Gv,sprite_frag:Wv},it={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Hn={basic:{uniforms:He([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:He([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new te(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:He([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:He([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:He([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new te(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:He([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:He([it.points,it.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:He([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:He([it.common,it.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:He([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:He([it.sprite,it.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:He([it.common,it.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:He([it.lights,it.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Hn.physical={uniforms:He([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const ba={r:0,b:0,g:0},Yi=new $n,Xv=new xe;function qv(n,t,e,i,r,s,a){const o=new te(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function _(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?e:t).get(T)),T}function g(b){let T=!1;const E=_(b);E===null?f(o,l):E&&E.isColor&&(f(E,1),T=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,T){const E=_(T);E&&(E.isCubeTexture||E.mapping===oo)?(u===void 0&&(u=new Un(new gs(1,1,1),new Hi({name:"BackgroundCubeMaterial",uniforms:us(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Yi.copy(T.backgroundRotation),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(Yi)),u.material.toneMapped=Kt.getTransfer(E.colorSpace)!==ae,(h!==E||d!==E.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,m=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Un(new ra(2,2),new Hi({name:"BackgroundMaterial",uniforms:us(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(E.colorSpace)!==ae,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,m=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,T){b.getRGB(ba,Nf(n)),i.buffers.color.setClear(ba.r,ba.g,ba.b,T,a)}return{getClearColor:function(){return o},setClearColor:function(b,T=1){o.set(b),l=T,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:g,addToRenderList:p}}function Yv(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(x,A,N,P,k){let q=!1;const G=h(P,N,A);s!==G&&(s=G,c(s.object)),q=m(x,P,N,k),q&&_(x,P,N,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(x,A,N,P),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,A,N){const P=N.wireframe===!0;let k=i[x.id];k===void 0&&(k={},i[x.id]=k);let q=k[A.id];q===void 0&&(q={},k[A.id]=q);let G=q[P];return G===void 0&&(G=d(l()),q[P]=G),G}function d(x){const A=[],N=[],P=[];for(let k=0;k<e;k++)A[k]=0,N[k]=0,P[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:P,object:x,attributes:{},index:null}}function m(x,A,N,P){const k=s.attributes,q=A.attributes;let G=0;const J=N.getAttributes();for(const W in J)if(J[W].location>=0){const ut=k[W];let St=q[W];if(St===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(St=x.instanceColor)),ut===void 0||ut.attribute!==St||St&&ut.data!==St.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function _(x,A,N,P){const k={},q=A.attributes;let G=0;const J=N.getAttributes();for(const W in J)if(J[W].location>=0){let ut=q[W];ut===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor));const St={};St.attribute=ut,ut&&ut.data&&(St.data=ut.data),k[W]=St,G++}s.attributes=k,s.attributesNum=G,s.index=P}function g(){const x=s.newAttributes;for(let A=0,N=x.length;A<N;A++)x[A]=0}function p(x){f(x,0)}function f(x,A){const N=s.newAttributes,P=s.enabledAttributes,k=s.attributeDivisors;N[x]=1,P[x]===0&&(n.enableVertexAttribArray(x),P[x]=1),k[x]!==A&&(n.vertexAttribDivisor(x,A),k[x]=A)}function b(){const x=s.newAttributes,A=s.enabledAttributes;for(let N=0,P=A.length;N<P;N++)A[N]!==x[N]&&(n.disableVertexAttribArray(N),A[N]=0)}function T(x,A,N,P,k,q,G){G===!0?n.vertexAttribIPointer(x,A,N,k,q):n.vertexAttribPointer(x,A,N,P,k,q)}function E(x,A,N,P){g();const k=P.attributes,q=N.getAttributes(),G=A.defaultAttributeValues;for(const J in q){const W=q[J];if(W.location>=0){let nt=k[J];if(nt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),nt!==void 0){const ut=nt.normalized,St=nt.itemSize,zt=t.get(nt);if(zt===void 0)continue;const ee=zt.buffer,Y=zt.type,tt=zt.bytesPerElement,dt=Y===n.INT||Y===n.UNSIGNED_INT||nt.gpuType===Ec;if(nt.isInterleavedBufferAttribute){const st=nt.data,yt=st.stride,Ct=nt.offset;if(st.isInstancedInterleavedBuffer){for(let Nt=0;Nt<W.locationSize;Nt++)f(W.location+Nt,st.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Nt=0;Nt<W.locationSize;Nt++)p(W.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let Nt=0;Nt<W.locationSize;Nt++)T(W.location+Nt,St/W.locationSize,Y,ut,yt*tt,(Ct+St/W.locationSize*Nt)*tt,dt)}else{if(nt.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)f(W.location+st,nt.meshPerAttribute);x.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let st=0;st<W.locationSize;st++)p(W.location+st);n.bindBuffer(n.ARRAY_BUFFER,ee);for(let st=0;st<W.locationSize;st++)T(W.location+st,St/W.locationSize,Y,ut,St*tt,St/W.locationSize*st*tt,dt)}}else if(G!==void 0){const ut=G[J];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(W.location,ut);break;case 3:n.vertexAttrib3fv(W.location,ut);break;case 4:n.vertexAttrib4fv(W.location,ut);break;default:n.vertexAttrib1fv(W.location,ut)}}}}b()}function F(){C();for(const x in i){const A=i[x];for(const N in A){const P=A[N];for(const k in P)u(P[k].object),delete P[k];delete A[N]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const A=i[x.id];for(const N in A){const P=A[N];for(const k in P)u(P[k].object),delete P[k];delete A[N]}delete i[x.id]}function w(x){for(const A in i){const N=i[A];if(N[x.id]===void 0)continue;const P=N[x.id];for(const k in P)u(P[k].object),delete P[k];delete N[x.id]}}function C(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:b}}function jv(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_];e.update(m,i,1)}function l(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];e.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Dn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==mi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==fi&&!C)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:F,maxSamples:R}}function Kv(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new wi,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const b=s?0:i,T=b*4;let E=f.clippingState||null;l.value=E,E=u(_,d,T,m);for(let F=0;F!==T;++F)E[F]=e[F];f.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const f=m+g*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<f)&&(p=new Float32Array(f));for(let T=0,E=m;T!==g;++T,E+=4)a.copy(h[T]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function $v(n){let t=new WeakMap;function e(a,o){return o===Cl?a.mapping=as:o===Pl&&(a.mapping=os),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cl||o===Pl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new l_(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class zf extends Ff{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zr=4,Pu=[.125,.215,.35,.446,.526,.582],Qi=20,qo=new zf,Lu=new te;let Yo=null,jo=0,Zo=0,Ko=!1;const Zi=(1+Math.sqrt(5))/2,Nr=1/Zi,Du=[new B(-Zi,Nr,0),new B(Zi,Nr,0),new B(-Nr,0,Zi),new B(Nr,0,Zi),new B(0,Zi,-Nr),new B(0,Zi,Nr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Uu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,jo,Zo),this._renderer.xr.enabled=Ko,t.scissorTest=!1,Aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ta,format:Dn,colorSpace:_s,depthBuffer:!1},r=Iu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jv(s)),this._blurMaterial=Qv(s,t,e)}return r}_compileMaterial(t){const e=new Un(this._lodPlanes[0],t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,i,r){const o=new gn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Lu),u.toneMapping=Oi,u.autoClear=!1;const m=new Df({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),_=new Un(new gs,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Lu),g=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):b===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const T=this._cubeSize;Aa(r,b*T,f>2?T:0,T,T),u.setRenderTarget(r),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===as||t.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Un(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Aa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,qo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Du[(r-s-1)%Du.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Un(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qi-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Qi;p>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);const f=[];let b=0;for(let w=0;w<Qi;++w){const C=w/g,S=Math.exp(-C*C/2);f.push(S),w===0?b+=S:w<p&&(b+=2*S)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-i;const E=this._sizeLods[r],F=3*E*(r>T-zr?r-T+zr:0),R=4*(this._cubeSize-E);Aa(e,F,R,3*E,2*E),l.setRenderTarget(e),l.render(h,qo)}}function Jv(n){const t=[],e=[],i=[];let r=n;const s=n-zr+1+Pu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-zr?l=Pu[a-n+zr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,f=1,b=new Float32Array(g*_*m),T=new Float32Array(p*_*m),E=new Float32Array(f*_*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,C=R>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];b.set(S,g*_*R),T.set(d,p*_*R);const x=[R,R,R,R,R,R];E.set(x,f*_*R)}const F=new xr;F.setAttribute("position",new Zn(b,g)),F.setAttribute("uv",new Zn(T,p)),F.setAttribute("faceIndex",new Zn(E,f)),t.push(F),r>zr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Iu(n,t,e){const i=new _r(n,t,e);return i.texture.mapping=oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Qv(n,t,e){const i=new Float32Array(Qi),r=new B(0,1,0);return new Hi({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Nu(){return new Hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Fu(){return new Hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cl||l===Pl,u=l===as||l===os;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Uu(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Uu(n)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function e0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Is("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function n0(n,t,e,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,f=g.length;p<f;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)t.update(d[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,f=g.length;p<f;p++)t.update(g[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const b=m.array;g=m.version;for(let T=0,E=b.length;T<E;T+=3){const F=b[T+0],R=b[T+1],w=b[T+2];d.push(F,R,R,w,w,F)}}else if(_!==void 0){const b=_.array;g=_.version;for(let T=0,E=b.length/3-1;T<E;T+=3){const F=T+0,R=T+1,w=T+2;d.push(F,R,R,w,w,F)}}else return;const p=new(Af(d)?If:Uf)(d,1);p.version=g;const f=s.get(h);f&&t.remove(f),s.set(h,p)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function i0(n,t,e){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),e.update(m,i,1)}function c(d,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,d*a,_),e.update(m,i,_))}function u(d,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];e.update(p,i,1)}function h(d,m,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,g,0,_);let f=0;for(let b=0;b<_;b++)f+=m[b]*g[b];e.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function r0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function s0(n,t,e){const i=new WeakMap,r=new ve;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let S=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),g===!0&&(T=3);let E=o.attributes.position.count*T,F=1;E>t.maxTextureSize&&(F=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const R=new Float32Array(E*F*4*h),w=new Rf(R,E,F,h);w.type=fi,w.needsUpdate=!0;const C=T*4;for(let x=0;x<h;x++){const A=p[x],N=f[x],P=b[x],k=E*F*4*x;for(let q=0;q<A.count;q++){const G=q*C;m===!0&&(r.fromBufferAttribute(A,q),R[k+G+0]=r.x,R[k+G+1]=r.y,R[k+G+2]=r.z,R[k+G+3]=0),_===!0&&(r.fromBufferAttribute(N,q),R[k+G+4]=r.x,R[k+G+5]=r.y,R[k+G+6]=r.z,R[k+G+7]=0),g===!0&&(r.fromBufferAttribute(P,q),R[k+G+8]=r.x,R[k+G+9]=r.y,R[k+G+10]=r.z,R[k+G+11]=P.itemSize===4?r.w:1)}}d={count:h,texture:w,size:new It(E,F)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function a0(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class kf extends qe{constructor(t,e,i,r,s,a,o,l,c,u=Gr){if(u!==Gr&&u!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gr&&(i=mr),i===void 0&&u===cs&&(i=ls),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Hf=new qe,Ou=new kf(1,1),Vf=new Rf,Gf=new qm,Wf=new Of,Bu=[],zu=[],ku=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function vs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Bu[r];if(s===void 0&&(s=new Float32Array(r),Bu[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function co(n,t){let e=zu[t];e===void 0&&(e=new Int32Array(t),zu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function o0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function l0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function c0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function u0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function h0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,i))return;Vu.set(i),n.uniformMatrix2fv(this.addr,!1,Vu),we(e,i)}}function f0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,i))return;Hu.set(i),n.uniformMatrix3fv(this.addr,!1,Hu),we(e,i)}}function d0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,i))return;ku.set(i),n.uniformMatrix4fv(this.addr,!1,ku),we(e,i)}}function p0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function m0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function _0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function g0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function v0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function x0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function M0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function S0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function E0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ou.compareFunction=bf,s=Ou):s=Hf,e.setTexture2D(t||s,r)}function y0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Gf,r)}function T0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Wf,r)}function b0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Vf,r)}function A0(n){switch(n){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return u0;case 35674:return h0;case 35675:return f0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return _0;case 35669:case 35673:return g0;case 5125:return v0;case 36294:return x0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return b0}}function w0(n,t){n.uniform1fv(this.addr,t)}function R0(n,t){const e=vs(t,this.size,2);n.uniform2fv(this.addr,e)}function C0(n,t){const e=vs(t,this.size,3);n.uniform3fv(this.addr,e)}function P0(n,t){const e=vs(t,this.size,4);n.uniform4fv(this.addr,e)}function L0(n,t){const e=vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function D0(n,t){const e=vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function U0(n,t){const e=vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function I0(n,t){n.uniform1iv(this.addr,t)}function N0(n,t){n.uniform2iv(this.addr,t)}function F0(n,t){n.uniform3iv(this.addr,t)}function O0(n,t){n.uniform4iv(this.addr,t)}function B0(n,t){n.uniform1uiv(this.addr,t)}function z0(n,t){n.uniform2uiv(this.addr,t)}function k0(n,t){n.uniform3uiv(this.addr,t)}function H0(n,t){n.uniform4uiv(this.addr,t)}function V0(n,t,e){const i=this.cache,r=t.length,s=co(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Hf,s[a])}function G0(n,t,e){const i=this.cache,r=t.length,s=co(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Gf,s[a])}function W0(n,t,e){const i=this.cache,r=t.length,s=co(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Wf,s[a])}function X0(n,t,e){const i=this.cache,r=t.length,s=co(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),we(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Vf,s[a])}function q0(n){switch(n){case 5126:return w0;case 35664:return R0;case 35665:return C0;case 35666:return P0;case 35674:return L0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return I0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class Y0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}}class j0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}}class Z0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function Gu(n,t){n.seq.push(t),n.map[t.id]=t}function K0(n,t,e){const i=n.name,r=i.length;for($o.lastIndex=0;;){const s=$o.exec(i),a=$o.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Gu(e,c===void 0?new Y0(o,n,t):new j0(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new Z0(o),Gu(e,h)),e=h}}}class Va{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);K0(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Wu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const $0=37297;let J0=0;function Q0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Xu=new Ut;function tx(n){Kt._getMatrix(Xu,Kt.workingColorSpace,n);const t=`mat3( ${Xu.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case lo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function qu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Q0(n.getShaderSource(t),a)}else return r}function ex(n,t){const e=tx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nx(n,t){let e;switch(t){case vm:e="Linear";break;case xm:e="Reinhard";break;case Mm:e="Cineon";break;case Sm:e="ACESFilmic";break;case ym:e="AgX";break;case Tm:e="Neutral";break;case Em:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wa=new B;function ix(){Kt.getLuminanceCoefficients(wa);const n=wa.x.toFixed(4),t=wa.y.toFixed(4),e=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function sx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ax(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ns(n){return n!==""}function Yu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ju(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(n){return n.replace(ox,cx)}const lx=new Map;function cx(n,t){let e=Ot[t];if(e===void 0){const i=lx.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(ux,hx)}function hx(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ku(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===$p?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function dx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case os:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function px(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function mx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ff:t="ENVMAP_BLENDING_MULTIPLY";break;case _m:t="ENVMAP_BLENDING_MIX";break;case gm:t="ENVMAP_BLENDING_ADD";break}return t}function _x(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function gx(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fx(e),c=dx(e),u=px(e),h=mx(e),d=_x(e),m=rx(e),_=sx(s),g=r.createProgram();let p,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ns).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ns).join(`
`),f.length>0&&(f+=`
`)):(p=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),f=[Ku(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Oi?nx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,ex("linearToOutputTexel",e.outputColorSpace),ix(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),a=sc(a),a=Yu(a,e),a=ju(a,e),o=sc(o),o=Yu(o,e),o=ju(o,e),a=Zu(a),o=Zu(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=b+p+a,E=b+f+o,F=Wu(r,r.VERTEX_SHADER,T),R=Wu(r,r.FRAGMENT_SHADER,E);r.attachShader(g,F),r.attachShader(g,R),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(A){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),P=r.getShaderInfoLog(F).trim(),k=r.getShaderInfoLog(R).trim();let q=!0,G=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,F,R);else{const J=qu(r,F,"vertex"),W=qu(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+J+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(P===""||k==="")&&(G=!1);G&&(A.diagnostics={runnable:q,programLog:N,vertexShader:{log:P,prefix:p},fragmentShader:{log:k,prefix:f}})}r.deleteShader(F),r.deleteShader(R),C=new Va(r,g),S=ax(r,g)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(g,$0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=F,this.fragmentShader=R,this}let vx=0;class xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Mx(t),e.set(t,i)),i}}class Mx{constructor(t){this.id=vx++,this.code=t,this.usedTimes=0}}function Sx(n,t,e,i,r,s,a){const o=new Pf,l=new xx,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,A,N,P){const k=N.fog,q=P.geometry,G=S.isMeshStandardMaterial?N.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),W=J&&J.mapping===oo?J.image.height:null,nt=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=ut!==void 0?ut.length:0;let zt=0;q.morphAttributes.position!==void 0&&(zt=1),q.morphAttributes.normal!==void 0&&(zt=2),q.morphAttributes.color!==void 0&&(zt=3);let ee,Y,tt,dt;if(nt){const se=Hn[nt];ee=se.vertexShader,Y=se.fragmentShader}else ee=S.vertexShader,Y=S.fragmentShader,l.update(S),tt=l.getVertexShaderID(S),dt=l.getFragmentShaderID(S);const st=n.getRenderTarget(),yt=n.state.buffers.depth.getReversed(),Ct=P.isInstancedMesh===!0,Nt=P.isBatchedMesh===!0,le=!!S.map,Vt=!!S.matcap,me=!!J,I=!!S.aoMap,un=!!S.lightMap,Xt=!!S.bumpMap,qt=!!S.normalMap,bt=!!S.displacementMap,he=!!S.emissiveMap,Tt=!!S.metalnessMap,y=!!S.roughnessMap,v=S.anisotropy>0,O=S.clearcoat>0,Z=S.dispersion>0,$=S.iridescence>0,j=S.sheen>0,xt=S.transmission>0,ot=v&&!!S.anisotropyMap,ft=O&&!!S.clearcoatMap,Zt=O&&!!S.clearcoatNormalMap,Q=O&&!!S.clearcoatRoughnessMap,pt=$&&!!S.iridescenceMap,At=$&&!!S.iridescenceThicknessMap,Rt=j&&!!S.sheenColorMap,mt=j&&!!S.sheenRoughnessMap,Yt=!!S.specularMap,Ft=!!S.specularColorMap,ce=!!S.specularIntensityMap,L=xt&&!!S.transmissionMap,at=xt&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,ht=S.alphaTest>0,lt=!!S.alphaHash,Lt=!!S.extensions;let ge=Oi;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ge=n.toneMapping);const De={shaderID:nt,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:Y,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Nt,batchingColor:Nt&&P._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&P.instanceColor!==null,instancingMorph:Ct&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?n.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:_s,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:Vt,envMap:me,envMapMode:me&&J.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:un,bumpMap:Xt,normalMap:qt,displacementMap:d&&bt,emissiveMap:he,normalMapObjectSpace:qt&&S.normalMapType===Rm,normalMapTangentSpace:qt&&S.normalMapType===Tf,metalnessMap:Tt,roughnessMap:y,anisotropy:v,anisotropyMap:ot,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Zt,clearcoatRoughnessMap:Q,dispersion:Z,iridescence:$,iridescenceMap:pt,iridescenceThicknessMap:At,sheen:j,sheenColorMap:Rt,sheenRoughnessMap:mt,specularMap:Yt,specularColorMap:Ft,specularIntensityMap:ce,transmission:xt,transmissionMap:L,thicknessMap:at,gradientMap:X,opaque:S.transparent===!1&&S.blending===Vr&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ht,alphaHash:lt,combine:S.combine,mapUv:le&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:un&&g(S.lightMap.channel),bumpMapUv:Xt&&g(S.bumpMap.channel),normalMapUv:qt&&g(S.normalMap.channel),displacementMapUv:bt&&g(S.displacementMap.channel),emissiveMapUv:he&&g(S.emissiveMap.channel),metalnessMapUv:Tt&&g(S.metalnessMap.channel),roughnessMapUv:y&&g(S.roughnessMap.channel),anisotropyMapUv:ot&&g(S.anisotropyMap.channel),clearcoatMapUv:ft&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:At&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:mt&&g(S.sheenRoughnessMap.channel),specularMapUv:Yt&&g(S.specularMap.channel),specularColorMapUv:Ft&&g(S.specularColorMap.channel),specularIntensityMapUv:ce&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:at&&g(S.thicknessMap.channel),alphaMapUv:K&&g(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!q.attributes.uv&&(le||K),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:yt,skinning:P.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:zt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:ge,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&Kt.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hi,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Lt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&S.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function f(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)x.push(A),x.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(b(x,S),T(x,S),x.push(n.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function b(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const x=_[S.type];let A;if(x){const N=Hn[x];A=r_.clone(N.uniforms)}else A=S.uniforms;return A}function F(S,x){let A;for(let N=0,P=u.length;N<P;N++){const k=u[N];if(k.cacheKey===x){A=k,++A.usedTimes;break}}return A===void 0&&(A=new gx(n,x,S,s),u.push(A)),A}function R(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:F,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:C}}function Ex(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function yx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function $u(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ju(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,d,m,_,g,p){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=p),t++,f}function o(h,d,m,_,g,p){const f=a(h,d,m,_,g,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):e.push(f)}function l(h,d,m,_,g,p){const f=a(h,d,m,_,g,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||yx),i.length>1&&i.sort(d||$u),r.length>1&&r.sort(d||$u)}function u(){for(let h=t,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Tx(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ju,n.set(i,[a])):r>=s.length?(a=new Ju,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function bx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new te};break;case"SpotLight":e={position:new B,direction:new B,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function Ax(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let wx=0;function Rx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Cx(n){const t=new bx,e=Ax(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new xe,a=new xe;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,_=0,g=0,p=0,f=0,b=0,T=0,E=0,F=0,R=0,w=0;c.sort(Rx);for(let S=0,x=c.length;S<x;S++){const A=c[S],N=A.color,P=A.intensity,k=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=N.r*P,h+=N.g*P,d+=N.b*P;else if(A.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],P);w++}else if(A.isDirectionalLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const J=A.shadow,W=e.get(A);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=A.shadow.matrix,b++}i.directional[m]=G,m++}else if(A.isSpotLight){const G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(N).multiplyScalar(P),G.distance=k,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[g]=G;const J=A.shadow;if(A.map&&(i.spotLightMap[F]=A.map,F++,J.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[g]=J.matrix,A.castShadow){const W=e.get(A);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=q,E++}g++}else if(A.isRectAreaLight){const G=t.get(A);G.color.copy(N).multiplyScalar(P),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=G,p++}else if(A.isPointLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity),G.distance=A.distance,G.decay=A.decay,A.castShadow){const J=A.shadow,W=e.get(A);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=A.shadow.matrix,T++}i.point[_]=G,_++}else if(A.isHemisphereLight){const G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(P),G.groundColor.copy(A.groundColor).multiplyScalar(P),i.hemi[f]=G,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==f||C.numDirectionalShadows!==b||C.numPointShadows!==T||C.numSpotShadows!==E||C.numSpotMaps!==F||C.numLightProbes!==w)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+F-R,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,C.directionalLength=m,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=f,C.numDirectionalShadows=b,C.numPointShadows=T,C.numSpotShadows=E,C.numSpotMaps=F,C.numLightProbes=w,i.version=wx++)}function l(c,u){let h=0,d=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const T=c[f];if(T.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(T.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Qu(n){const t=new Cx(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function a(u){i.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Px(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Qu(n),t.set(r,[o])):s>=a.length?(o=new Qu(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}class Lx extends ia{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Dx extends ia{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nx(n,t,e){let i=new Cc;const r=new It,s=new It,a=new ve,o=new Lx({depthPacking:wm}),l=new Dx,c={},u=e.maxTextureSize,h={[ki]:Je,[Je]:ki,[hi]:hi},d=new Hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Ux,fragmentShader:Ix}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new xr;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Un(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let f=this.type;this.render=function(R,w,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=n.getRenderTarget(),x=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Fi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const P=f!==si&&this.type===si,k=f===si&&this.type!==si;for(let q=0,G=R.length;q<G;q++){const J=R[q],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const nt=W.getFrameExtents();if(r.multiply(nt),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/nt.x),r.x=s.x*nt.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/nt.y),r.y=s.y*nt.y,W.mapSize.y=s.y)),W.map===null||P===!0||k===!0){const St=this.type!==si?{minFilter:vn,magFilter:vn}:{};W.map!==null&&W.map.dispose(),W.map=new _r(r.x,r.y,St),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ut=W.getViewportCount();for(let St=0;St<ut;St++){const zt=W.getViewport(St);a.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),N.viewport(a),W.updateMatrices(J,St),i=W.getFrustum(),E(w,C,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===si&&b(W,C),W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(S,x,A)};function b(R,w){const C=t.update(g);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new _r(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,C,d,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,C,m,g,null)}function T(R,w,C,S){let x=null;const A=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)x=A;else if(x=C.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=x.uuid,P=w.uuid;let k=c[N];k===void 0&&(k={},c[N]=k);let q=k[P];q===void 0&&(q=x.clone(),k[P]=q,w.addEventListener("dispose",F)),x=q}if(x.visible=w.visible,x.wireframe=w.wireframe,S===si?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=n.properties.get(x);N.light=C}return x}function E(R,w,C,S,x){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===si)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const P=t.update(R),k=R.material;if(Array.isArray(k)){const q=P.groups;for(let G=0,J=q.length;G<J;G++){const W=q[G],nt=k[W.materialIndex];if(nt&&nt.visible){const ut=T(R,nt,S,x);R.onBeforeShadow(n,R,w,C,P,ut,W),n.renderBufferDirect(C,null,P,ut,R,W),R.onAfterShadow(n,R,w,C,P,ut,W)}}}else if(k.visible){const q=T(R,k,S,x);R.onBeforeShadow(n,R,w,C,P,q,null),n.renderBufferDirect(C,null,P,q,R,null),R.onAfterShadow(n,R,w,C,P,q,null)}}const N=R.children;for(let P=0,k=N.length;P<k;P++)E(N[P],w,C,S,x)}function F(R){R.target.removeEventListener("dispose",F);for(const C in c){const S=c[C],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Fx={[El]:yl,[Tl]:wl,[bl]:Rl,[ss]:Al,[yl]:El,[wl]:Tl,[Rl]:bl,[Al]:ss};function Ox(n,t){function e(){let L=!1;const at=new ve;let X=null;const K=new ve(0,0,0,0);return{setMask:function(ht){X!==ht&&!L&&(n.colorMask(ht,ht,ht,ht),X=ht)},setLocked:function(ht){L=ht},setClear:function(ht,lt,Lt,ge,De){De===!0&&(ht*=ge,lt*=ge,Lt*=ge),at.set(ht,lt,Lt,ge),K.equals(at)===!1&&(n.clearColor(ht,lt,Lt,ge),K.copy(at))},reset:function(){L=!1,X=null,K.set(-1,0,0,0)}}}function i(){let L=!1,at=!1,X=null,K=null,ht=null;return{setReversed:function(lt){if(at!==lt){const Lt=t.get("EXT_clip_control");at?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const ge=ht;ht=null,this.setClear(ge)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?st(n.DEPTH_TEST):yt(n.DEPTH_TEST)},setMask:function(lt){X!==lt&&!L&&(n.depthMask(lt),X=lt)},setFunc:function(lt){if(at&&(lt=Fx[lt]),K!==lt){switch(lt){case El:n.depthFunc(n.NEVER);break;case yl:n.depthFunc(n.ALWAYS);break;case Tl:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case bl:n.depthFunc(n.EQUAL);break;case Al:n.depthFunc(n.GEQUAL);break;case wl:n.depthFunc(n.GREATER);break;case Rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ht!==lt&&(at&&(lt=1-lt),n.clearDepth(lt),ht=lt)},reset:function(){L=!1,X=null,K=null,ht=null,at=!1}}}function r(){let L=!1,at=null,X=null,K=null,ht=null,lt=null,Lt=null,ge=null,De=null;return{setTest:function(se){L||(se?st(n.STENCIL_TEST):yt(n.STENCIL_TEST))},setMask:function(se){at!==se&&!L&&(n.stencilMask(se),at=se)},setFunc:function(se,Mn,Jn){(X!==se||K!==Mn||ht!==Jn)&&(n.stencilFunc(se,Mn,Jn),X=se,K=Mn,ht=Jn)},setOp:function(se,Mn,Jn){(lt!==se||Lt!==Mn||ge!==Jn)&&(n.stencilOp(se,Mn,Jn),lt=se,Lt=Mn,ge=Jn)},setLocked:function(se){L=se},setClear:function(se){De!==se&&(n.clearStencil(se),De=se)},reset:function(){L=!1,at=null,X=null,K=null,ht=null,lt=null,Lt=null,ge=null,De=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,b=null,T=null,E=null,F=null,R=null,w=new te(0,0,0),C=0,S=!1,x=null,A=null,N=null,P=null,k=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=J>=2);let nt=null,ut={};const St=n.getParameter(n.SCISSOR_BOX),zt=n.getParameter(n.VIEWPORT),ee=new ve().fromArray(St),Y=new ve().fromArray(zt);function tt(L,at,X,K){const ht=new Uint8Array(4),lt=n.createTexture();n.bindTexture(L,lt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Lt=0;Lt<X;Lt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(at,0,n.RGBA,1,1,K,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(at+Lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return lt}const dt={};dt[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),dt[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),dt[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(n.DEPTH_TEST),a.setFunc(ss),Xt(!1),qt(iu),st(n.CULL_FACE),I(Fi);function st(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function yt(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ct(L,at){return h[L]!==at?(n.bindFramebuffer(L,at),h[L]=at,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=at),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=at),!0):!1}function Nt(L,at){let X=m,K=!1;if(L){X=d.get(at),X===void 0&&(X=[],d.set(at,X));const ht=L.textures;if(X.length!==ht.length||X[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Lt=ht.length;lt<Lt;lt++)X[lt]=n.COLOR_ATTACHMENT0+lt;X.length=ht.length,K=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,K=!0);K&&n.drawBuffers(X)}function le(L){return _!==L?(n.useProgram(L),_=L,!0):!1}const Vt={[Ji]:n.FUNC_ADD,[Qp]:n.FUNC_SUBTRACT,[tm]:n.FUNC_REVERSE_SUBTRACT};Vt[em]=n.MIN,Vt[nm]=n.MAX;const me={[im]:n.ZERO,[rm]:n.ONE,[sm]:n.SRC_COLOR,[Ml]:n.SRC_ALPHA,[hm]:n.SRC_ALPHA_SATURATE,[cm]:n.DST_COLOR,[om]:n.DST_ALPHA,[am]:n.ONE_MINUS_SRC_COLOR,[Sl]:n.ONE_MINUS_SRC_ALPHA,[um]:n.ONE_MINUS_DST_COLOR,[lm]:n.ONE_MINUS_DST_ALPHA,[fm]:n.CONSTANT_COLOR,[dm]:n.ONE_MINUS_CONSTANT_COLOR,[pm]:n.CONSTANT_ALPHA,[mm]:n.ONE_MINUS_CONSTANT_ALPHA};function I(L,at,X,K,ht,lt,Lt,ge,De,se){if(L===Fi){g===!0&&(yt(n.BLEND),g=!1);return}if(g===!1&&(st(n.BLEND),g=!0),L!==Jp){if(L!==p||se!==S){if((f!==Ji||E!==Ji)&&(n.blendEquation(n.FUNC_ADD),f=Ji,E=Ji),se)switch(L){case Vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFunc(n.ONE,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ru:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case su:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case au:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,T=null,F=null,R=null,w.set(0,0,0),C=0,p=L,S=se}return}ht=ht||at,lt=lt||X,Lt=Lt||K,(at!==f||ht!==E)&&(n.blendEquationSeparate(Vt[at],Vt[ht]),f=at,E=ht),(X!==b||K!==T||lt!==F||Lt!==R)&&(n.blendFuncSeparate(me[X],me[K],me[lt],me[Lt]),b=X,T=K,F=lt,R=Lt),(ge.equals(w)===!1||De!==C)&&(n.blendColor(ge.r,ge.g,ge.b,De),w.copy(ge),C=De),p=L,S=!1}function un(L,at){L.side===hi?yt(n.CULL_FACE):st(n.CULL_FACE);let X=L.side===Je;at&&(X=!X),Xt(X),L.blending===Vr&&L.transparent===!1?I(Fi):I(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const K=L.stencilWrite;o.setTest(K),K&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),he(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(n.SAMPLE_ALPHA_TO_COVERAGE):yt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(L){x!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),x=L)}function qt(L){L!==Zp?(st(n.CULL_FACE),L!==A&&(L===iu?n.cullFace(n.BACK):L===Kp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):yt(n.CULL_FACE),A=L}function bt(L){L!==N&&(G&&n.lineWidth(L),N=L)}function he(L,at,X){L?(st(n.POLYGON_OFFSET_FILL),(P!==at||k!==X)&&(n.polygonOffset(at,X),P=at,k=X)):yt(n.POLYGON_OFFSET_FILL)}function Tt(L){L?st(n.SCISSOR_TEST):yt(n.SCISSOR_TEST)}function y(L){L===void 0&&(L=n.TEXTURE0+q-1),nt!==L&&(n.activeTexture(L),nt=L)}function v(L,at,X){X===void 0&&(nt===null?X=n.TEXTURE0+q-1:X=nt);let K=ut[X];K===void 0&&(K={type:void 0,texture:void 0},ut[X]=K),(K.type!==L||K.texture!==at)&&(nt!==X&&(n.activeTexture(X),nt=X),n.bindTexture(L,at||dt[L]),K.type=L,K.texture=at)}function O(){const L=ut[nt];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(L){ee.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function mt(L){Y.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Yt(L,at){let X=c.get(at);X===void 0&&(X=new WeakMap,c.set(at,X));let K=X.get(L);K===void 0&&(K=n.getUniformBlockIndex(at,L.name),X.set(L,K))}function Ft(L,at){const K=c.get(at).get(L);l.get(at)!==K&&(n.uniformBlockBinding(at,K,L.__bindingPointIndex),l.set(at,K))}function ce(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},nt=null,ut={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,b=null,T=null,E=null,F=null,R=null,w=new te(0,0,0),C=0,S=!1,x=null,A=null,N=null,P=null,k=null,ee.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:yt,bindFramebuffer:Ct,drawBuffers:Nt,useProgram:le,setBlending:I,setMaterial:un,setFlipSided:Xt,setCullFace:qt,setLineWidth:bt,setPolygonOffset:he,setScissorTest:Tt,activeTexture:y,bindTexture:v,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:$,texImage2D:pt,texImage3D:At,updateUBOMapping:Yt,uniformBlockBinding:Ft,texStorage2D:Zt,texStorage3D:Q,texSubImage2D:j,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Rt,viewport:mt,reset:ce}}function th(n,t,e,i){const r=Bx(i);switch(e){case gf:return n*t;case xf:return n*t;case Mf:return n*t*2;case Sf:return n*t/r.components*r.byteLength;case bc:return n*t/r.components*r.byteLength;case Ef:return n*t*2/r.components*r.byteLength;case Ac:return n*t*2/r.components*r.byteLength;case vf:return n*t*3/r.components*r.byteLength;case Dn:return n*t*4/r.components*r.byteLength;case wc:return n*t*4/r.components*r.byteLength;case Fa:case Oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ba:case za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Nl:return Math.max(n,16)*Math.max(t,8)/4;case Dl:case Il:return Math.max(n,8)*Math.max(t,8)/2;case Fl:case Ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Bl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case zl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Jl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ka:case Ql:case tc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case yf:case ec:return Math.ceil(n/4)*Math.ceil(t/4)*8;case nc:case ic:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bx(n){switch(n){case mi:case pf:return{byteLength:1,components:1};case Ws:case mf:case ta:return{byteLength:2,components:1};case yc:case Tc:return{byteLength:2,components:4};case mr:case Ec:case fi:return{byteLength:4,components:1};case _f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function zx(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return m?new OffscreenCanvas(y,v):Xs("canvas")}function g(y,v,O){let Z=1;const $=Tt(y);if(($.width>O||$.height>O)&&(Z=O/Math.max($.width,$.height)),Z<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const j=Math.floor(Z*$.width),xt=Math.floor(Z*$.height);h===void 0&&(h=_(j,xt));const ot=v?_(j,xt):h;return ot.width=j,ot.height=xt,ot.getContext("2d").drawImage(y,0,0,j,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+xt+")."),ot}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function p(y){return y.generateMipmaps}function f(y){n.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(y,v,O,Z,$=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let j=v;if(v===n.RED&&(O===n.FLOAT&&(j=n.R32F),O===n.HALF_FLOAT&&(j=n.R16F),O===n.UNSIGNED_BYTE&&(j=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.R8UI),O===n.UNSIGNED_SHORT&&(j=n.R16UI),O===n.UNSIGNED_INT&&(j=n.R32UI),O===n.BYTE&&(j=n.R8I),O===n.SHORT&&(j=n.R16I),O===n.INT&&(j=n.R32I)),v===n.RG&&(O===n.FLOAT&&(j=n.RG32F),O===n.HALF_FLOAT&&(j=n.RG16F),O===n.UNSIGNED_BYTE&&(j=n.RG8)),v===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RG8UI),O===n.UNSIGNED_SHORT&&(j=n.RG16UI),O===n.UNSIGNED_INT&&(j=n.RG32UI),O===n.BYTE&&(j=n.RG8I),O===n.SHORT&&(j=n.RG16I),O===n.INT&&(j=n.RG32I)),v===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGB8UI),O===n.UNSIGNED_SHORT&&(j=n.RGB16UI),O===n.UNSIGNED_INT&&(j=n.RGB32UI),O===n.BYTE&&(j=n.RGB8I),O===n.SHORT&&(j=n.RGB16I),O===n.INT&&(j=n.RGB32I)),v===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),O===n.UNSIGNED_INT&&(j=n.RGBA32UI),O===n.BYTE&&(j=n.RGBA8I),O===n.SHORT&&(j=n.RGBA16I),O===n.INT&&(j=n.RGBA32I)),v===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),v===n.RGBA){const xt=$?lo:Kt.getTransfer(Z);O===n.FLOAT&&(j=n.RGBA32F),O===n.HALF_FLOAT&&(j=n.RGBA16F),O===n.UNSIGNED_BYTE&&(j=xt===ae?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(y,v){let O;return y?v===null||v===mr||v===ls?O=n.DEPTH24_STENCIL8:v===fi?O=n.DEPTH32F_STENCIL8:v===Ws&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mr||v===ls?O=n.DEPTH_COMPONENT24:v===fi?O=n.DEPTH_COMPONENT32F:v===Ws&&(O=n.DEPTH_COMPONENT16),O}function F(y,v){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==vn&&y.minFilter!==qn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function R(y){const v=y.target;v.removeEventListener("dispose",R),C(v),v.isVideoTexture&&u.delete(v)}function w(y){const v=y.target;v.removeEventListener("dispose",w),x(v)}function C(y){const v=i.get(y);if(v.__webglInit===void 0)return;const O=y.source,Z=d.get(O);if(Z){const $=Z[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(y),Object.keys(Z).length===0&&d.delete(O)}i.remove(y)}function S(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const O=y.source,Z=d.get(O);delete Z[v.__cacheKey],a.memory.textures--}function x(y){const v=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let $=0;$<v.__webglFramebuffer[Z].length;$++)n.deleteFramebuffer(v.__webglFramebuffer[Z][$]);else n.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Z]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=y.textures;for(let Z=0,$=O.length;Z<$;Z++){const j=i.get(O[Z]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),a.memory.textures--),i.remove(O[Z])}i.remove(y)}let A=0;function N(){A=0}function P(){const y=A;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),A+=1,y}function k(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function q(y,v){const O=i.get(y);if(y.isVideoTexture&&bt(y),y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){const Z=y.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,y,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function G(y,v){const O=i.get(y);if(y.version>0&&O.__version!==y.version){Y(O,y,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function J(y,v){const O=i.get(y);if(y.version>0&&O.__version!==y.version){Y(O,y,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function W(y,v){const O=i.get(y);if(y.version>0&&O.__version!==y.version){tt(O,y,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const nt={[Ka]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[Ll]:n.MIRRORED_REPEAT},ut={[vn]:n.NEAREST,[bm]:n.NEAREST_MIPMAP_NEAREST,[Us]:n.NEAREST_MIPMAP_LINEAR,[qn]:n.LINEAR,[To]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},St={[Cm]:n.NEVER,[Nm]:n.ALWAYS,[Pm]:n.LESS,[bf]:n.LEQUAL,[Lm]:n.EQUAL,[Im]:n.GEQUAL,[Dm]:n.GREATER,[Um]:n.NOTEQUAL};function zt(y,v){if(v.type===fi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===qn||v.magFilter===To||v.magFilter===Us||v.magFilter===rr||v.minFilter===qn||v.minFilter===To||v.minFilter===Us||v.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,nt[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,nt[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,nt[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ut[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ut[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vn||v.minFilter!==Us&&v.minFilter!==rr||v.type===fi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ee(y,v){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",R));const Z=v.source;let $=d.get(Z);$===void 0&&($={},d.set(Z,$));const j=k(v);if(j!==y.__cacheKey){$[j]===void 0&&($[j]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[j].usedTimes++;const xt=$[y.__cacheKey];xt!==void 0&&($[y.__cacheKey].usedTimes--,xt.usedTimes===0&&S(v)),y.__cacheKey=j,y.__webglTexture=$[j].texture}return O}function Y(y,v,O){let Z=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=n.TEXTURE_3D);const $=ee(y,v),j=v.source;e.bindTexture(Z,y.__webglTexture,n.TEXTURE0+O);const xt=i.get(j);if(j.version!==xt.__version||$===!0){e.activeTexture(n.TEXTURE0+O);const ot=Kt.getPrimaries(Kt.workingColorSpace),ft=v.colorSpace===Ri?null:Kt.getPrimaries(v.colorSpace),Zt=v.colorSpace===Ri||ot===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Q=g(v.image,!1,r.maxTextureSize);Q=he(v,Q);const pt=s.convert(v.format,v.colorSpace),At=s.convert(v.type);let Rt=T(v.internalFormat,pt,At,v.colorSpace,v.isVideoTexture);zt(Z,v);let mt;const Yt=v.mipmaps,Ft=v.isVideoTexture!==!0,ce=xt.__version===void 0||$===!0,L=j.dataReady,at=F(v,Q);if(v.isDepthTexture)Rt=E(v.format===cs,v.type),ce&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,At,null));else if(v.isDataTexture)if(Yt.length>0){Ft&&ce&&e.texStorage2D(n.TEXTURE_2D,at,Rt,Yt[0].width,Yt[0].height);for(let X=0,K=Yt.length;X<K;X++)mt=Yt[X],Ft?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(n.TEXTURE_2D,X,Rt,mt.width,mt.height,0,pt,At,mt.data);v.generateMipmaps=!1}else Ft?(ce&&e.texStorage2D(n.TEXTURE_2D,at,Rt,Q.width,Q.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,pt,At,Q.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,Q.width,Q.height,0,pt,At,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ft&&ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Rt,Yt[0].width,Yt[0].height,Q.depth);for(let X=0,K=Yt.length;X<K;X++)if(mt=Yt[X],v.format!==Dn)if(pt!==null)if(Ft){if(L)if(v.layerUpdates.size>0){const ht=th(mt.width,mt.height,v.format,v.type);for(const lt of v.layerUpdates){const Lt=mt.data.subarray(lt*ht/mt.data.BYTES_PER_ELEMENT,(lt+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,lt,mt.width,mt.height,1,pt,Lt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,Q.depth,pt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Rt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,mt.width,mt.height,Q.depth,pt,At,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Rt,mt.width,mt.height,Q.depth,0,pt,At,mt.data)}else{Ft&&ce&&e.texStorage2D(n.TEXTURE_2D,at,Rt,Yt[0].width,Yt[0].height);for(let X=0,K=Yt.length;X<K;X++)mt=Yt[X],v.format!==Dn?pt!==null?Ft?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Rt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,mt.width,mt.height,pt,At,mt.data):e.texImage2D(n.TEXTURE_2D,X,Rt,mt.width,mt.height,0,pt,At,mt.data)}else if(v.isDataArrayTexture)if(Ft){if(ce&&e.texStorage3D(n.TEXTURE_2D_ARRAY,at,Rt,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){const X=th(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const ht=Q.data.subarray(K*X/Q.data.BYTES_PER_ELEMENT,(K+1)*X/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,pt,At,ht)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pt,At,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,pt,At,Q.data);else if(v.isData3DTexture)Ft?(ce&&e.texStorage3D(n.TEXTURE_3D,at,Rt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pt,At,Q.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,pt,At,Q.data);else if(v.isFramebufferTexture){if(ce)if(Ft)e.texStorage2D(n.TEXTURE_2D,at,Rt,Q.width,Q.height);else{let X=Q.width,K=Q.height;for(let ht=0;ht<at;ht++)e.texImage2D(n.TEXTURE_2D,ht,Rt,X,K,0,pt,At,null),X>>=1,K>>=1}}else if(Yt.length>0){if(Ft&&ce){const X=Tt(Yt[0]);e.texStorage2D(n.TEXTURE_2D,at,Rt,X.width,X.height)}for(let X=0,K=Yt.length;X<K;X++)mt=Yt[X],Ft?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,pt,At,mt):e.texImage2D(n.TEXTURE_2D,X,Rt,pt,At,mt);v.generateMipmaps=!1}else if(Ft){if(ce){const X=Tt(Q);e.texStorage2D(n.TEXTURE_2D,at,Rt,X.width,X.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,At,Q)}else e.texImage2D(n.TEXTURE_2D,0,Rt,pt,At,Q);p(v)&&f(Z),xt.__version=j.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function tt(y,v,O){if(v.image.length!==6)return;const Z=ee(y,v),$=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+O);const j=i.get($);if($.version!==j.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const xt=Kt.getPrimaries(Kt.workingColorSpace),ot=v.colorSpace===Ri?null:Kt.getPrimaries(v.colorSpace),ft=v.colorSpace===Ri||xt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Zt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,pt=[];for(let K=0;K<6;K++)!Zt&&!Q?pt[K]=g(v.image[K],!0,r.maxCubemapSize):pt[K]=Q?v.image[K].image:v.image[K],pt[K]=he(v,pt[K]);const At=pt[0],Rt=s.convert(v.format,v.colorSpace),mt=s.convert(v.type),Yt=T(v.internalFormat,Rt,mt,v.colorSpace),Ft=v.isVideoTexture!==!0,ce=j.__version===void 0||Z===!0,L=$.dataReady;let at=F(v,At);zt(n.TEXTURE_CUBE_MAP,v);let X;if(Zt){Ft&&ce&&e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Yt,At.width,At.height);for(let K=0;K<6;K++){X=pt[K].mipmaps;for(let ht=0;ht<X.length;ht++){const lt=X[ht];v.format!==Dn?Rt!==null?Ft?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,lt.width,lt.height,Rt,lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,0,0,lt.width,lt.height,Rt,mt,lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht,Yt,lt.width,lt.height,0,Rt,mt,lt.data)}}}else{if(X=v.mipmaps,Ft&&ce){X.length>0&&at++;const K=Tt(pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,at,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){Ft?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pt[K].width,pt[K].height,Rt,mt,pt[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,pt[K].width,pt[K].height,0,Rt,mt,pt[K].data);for(let ht=0;ht<X.length;ht++){const Lt=X[ht].image[K].image;Ft?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Lt.width,Lt.height,Rt,mt,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Yt,Lt.width,Lt.height,0,Rt,mt,Lt.data)}}else{Ft?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,mt,pt[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Rt,mt,pt[K]);for(let ht=0;ht<X.length;ht++){const lt=X[ht];Ft?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,0,0,Rt,mt,lt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,ht+1,Yt,Rt,mt,lt.image[K])}}}p(v)&&f(n.TEXTURE_CUBE_MAP),j.__version=$.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function dt(y,v,O,Z,$,j){const xt=s.convert(O.format,O.colorSpace),ot=s.convert(O.type),ft=T(O.internalFormat,xt,ot,O.colorSpace),Zt=i.get(v),Q=i.get(O);if(Q.__renderTarget=v,!Zt.__hasExternalTextures){const pt=Math.max(1,v.width>>j),At=Math.max(1,v.height>>j);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,j,ft,pt,At,v.depth,0,xt,ot,null):e.texImage2D($,j,ft,pt,At,0,xt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),qt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,$,Q.__webglTexture,0,Xt(v)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,$,Q.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function st(y,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const Z=v.depthTexture,$=Z&&Z.isDepthTexture?Z.type:null,j=E(v.stencilBuffer,$),xt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=Xt(v);qt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,j,v.width,v.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,j,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,j,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,y)}else{const Z=v.textures;for(let $=0;$<Z.length;$++){const j=Z[$],xt=s.convert(j.format,j.colorSpace),ot=s.convert(j.type),ft=T(j.internalFormat,xt,ot,j.colorSpace),Zt=Xt(v);O&&qt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,ft,v.width,v.height):qt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,ft,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ft,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const $=Z.__webglTexture,j=Xt(v);if(v.depthTexture.format===Gr)qt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,$,0);else if(v.depthTexture.format===cs)qt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ct(y){const v=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const Z=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",$)};Z.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=Z}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");yt(v.__webglFramebuffer,y)}else if(O){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=n.createRenderbuffer(),st(v.__webglDepthbuffer[Z],y,!1);else{const $=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),st(v.__webglDepthbuffer,y,!1);else{const Z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,$)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(y,v,O){const Z=i.get(y);v!==void 0&&dt(Z.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&Ct(y)}function le(y){const v=y.texture,O=i.get(y),Z=i.get(v);y.addEventListener("dispose",w);const $=y.textures,j=y.isWebGLCubeRenderTarget===!0,xt=$.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=v.version,a.memory.textures++),j){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let ft=0;ft<v.mipmaps.length;ft++)O.__webglFramebuffer[ot][ft]=n.createFramebuffer()}else O.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)O.__webglFramebuffer[ot]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(xt)for(let ot=0,ft=$.length;ot<ft;ot++){const Zt=i.get($[ot]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&qt(y)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<$.length;ot++){const ft=$[ot];O.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);const Zt=s.convert(ft.format,ft.colorSpace),Q=s.convert(ft.type),pt=T(ft.internalFormat,Zt,Q,ft.colorSpace,y.isXRRenderTarget===!0),At=Xt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,pt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),st(O.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),zt(n.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)dt(O.__webglFramebuffer[ot][ft],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else dt(O.__webglFramebuffer[ot],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(v)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ft=$.length;ot<ft;ot++){const Zt=$[ot],Q=i.get(Zt);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),zt(n.TEXTURE_2D,Zt),dt(O.__webglFramebuffer,y,Zt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),p(Zt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ot=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),zt(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let ft=0;ft<v.mipmaps.length;ft++)dt(O.__webglFramebuffer[ft],y,v,n.COLOR_ATTACHMENT0,ot,ft);else dt(O.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,ot,0);p(v)&&f(ot),e.unbindTexture()}y.depthBuffer&&Ct(y)}function Vt(y){const v=y.textures;for(let O=0,Z=v.length;O<Z;O++){const $=v[O];if(p($)){const j=b(y),xt=i.get($).__webglTexture;e.bindTexture(j,xt),f(j),e.unbindTexture()}}}const me=[],I=[];function un(y){if(y.samples>0){if(qt(y)===!1){const v=y.textures,O=y.width,Z=y.height;let $=n.COLOR_BUFFER_BIT;const j=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(y),ot=v.length>1;if(ot)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Zt=i.get(v[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,$,n.NEAREST),l===!0&&(me.length=0,I.length=0,me.push(n.COLOR_ATTACHMENT0+ft),y.depthBuffer&&y.resolveDepthBuffer===!1&&(me.push(j),I.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,xt.__webglColorRenderbuffer[ft]);const Zt=i.get(v[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Xt(y){return Math.min(r.maxSamples,y.samples)}function qt(y){const v=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(y){const v=a.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function he(y,v){const O=y.colorSpace,Z=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==_s&&O!==Ri&&(Kt.getTransfer(O)===ae?(Z!==Dn||$!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Tt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=Nt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=qt}function kx(n,t){function e(i,r=Ri){let s;const a=Kt.getTransfer(r);if(i===mi)return n.UNSIGNED_BYTE;if(i===yc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_f)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pf)return n.BYTE;if(i===mf)return n.SHORT;if(i===Ws)return n.UNSIGNED_SHORT;if(i===Ec)return n.INT;if(i===mr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===ta)return n.HALF_FLOAT;if(i===gf)return n.ALPHA;if(i===vf)return n.RGB;if(i===Dn)return n.RGBA;if(i===xf)return n.LUMINANCE;if(i===Mf)return n.LUMINANCE_ALPHA;if(i===Gr)return n.DEPTH_COMPONENT;if(i===cs)return n.DEPTH_STENCIL;if(i===Sf)return n.RED;if(i===bc)return n.RED_INTEGER;if(i===Ef)return n.RG;if(i===Ac)return n.RG_INTEGER;if(i===wc)return n.RGBA_INTEGER;if(i===Fa||i===Oa||i===Ba||i===za)if(a===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dl||i===Ul||i===Il||i===Nl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===Ol||i===Bl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fl||i===Ol)return a===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zl||i===kl||i===Hl||i===Vl||i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===jl||i===Zl||i===Kl||i===$l||i===Jl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$l)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jl)return a===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ka||i===Ql||i===tc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===ka)return a===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ql)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yf||i===ec||i===nc||i===ic)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===ka)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Hx extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ra extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ra;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new qe,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Hi({vertexShader:Gx,fragmentShader:Wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Un(new ra(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qx extends vr{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,_=null;const g=new Xx,p=e.getContextAttributes();let f=null,b=null;const T=[],E=[],F=new It;let R=null;const w=new gn;w.viewport=new ve;const C=new gn;C.viewport=new ve;const S=[w,C],x=new Hx;let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=T[Y];return tt===void 0&&(tt=new Jo,T[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=T[Y];return tt===void 0&&(tt=new Jo,T[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=T[Y];return tt===void 0&&(tt=new Jo,T[Y]=tt),tt.getHandSpace()};function P(Y){const tt=E.indexOf(Y.inputSource);if(tt===-1)return;const dt=T[tt];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,c||a),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let Y=0;Y<T.length;Y++){const tt=E[Y];tt!==null&&(E[Y]=null,T[Y].disconnect(tt))}A=null,N=null,g.reset(),t.setRenderTarget(f),m=null,d=null,h=null,r=null,b=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const tt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new _r(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let tt=null,dt=null,st=null;p.depth&&(st=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=p.stencil?cs:Gr,dt=p.stencil?ls:mr);const yt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(yt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new _r(d.textureWidth,d.textureHeight,{format:Dn,type:mi,depthTexture:new kf(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(Y){for(let tt=0;tt<Y.removed.length;tt++){const dt=Y.removed[tt],st=E.indexOf(dt);st>=0&&(E[st]=null,T[st].disconnect(dt))}for(let tt=0;tt<Y.added.length;tt++){const dt=Y.added[tt];let st=E.indexOf(dt);if(st===-1){for(let Ct=0;Ct<T.length;Ct++)if(Ct>=E.length){E.push(dt),st=Ct;break}else if(E[Ct]===null){E[Ct]=dt,st=Ct;break}if(st===-1)break}const yt=T[st];yt&&yt.connect(dt)}}const G=new B,J=new B;function W(Y,tt,dt){G.setFromMatrixPosition(tt.matrixWorld),J.setFromMatrixPosition(dt.matrixWorld);const st=G.distanceTo(J),yt=tt.projectionMatrix.elements,Ct=dt.projectionMatrix.elements,Nt=yt[14]/(yt[10]-1),le=yt[14]/(yt[10]+1),Vt=(yt[9]+1)/yt[5],me=(yt[9]-1)/yt[5],I=(yt[8]-1)/yt[0],un=(Ct[8]+1)/Ct[0],Xt=Nt*I,qt=Nt*un,bt=st/(-I+un),he=bt*-I;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(he),Y.translateZ(bt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),yt[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Tt=Nt+bt,y=le+bt,v=Xt-he,O=qt+(st-he),Z=Vt*le/y*Tt,$=me*le/y*Tt;Y.projectionMatrix.makePerspective(v,O,Z,$,Tt,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function nt(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let tt=Y.near,dt=Y.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(dt=g.depthFar)),x.near=C.near=w.near=tt,x.far=C.far=w.far=dt,(A!==x.near||N!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,N=x.far),w.layers.mask=Y.layers.mask|2,C.layers.mask=Y.layers.mask|4,x.layers.mask=w.layers.mask|C.layers.mask;const st=Y.parent,yt=x.cameras;nt(x,st);for(let Ct=0;Ct<yt.length;Ct++)nt(yt[Ct],st);yt.length===2?W(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),ut(Y,x,st)};function ut(Y,tt,dt){dt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=rc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let St=null;function zt(Y,tt){if(u=tt.getViewerPose(c||a),_=tt,u!==null){const dt=u.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let st=!1;dt.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let Ct=0;Ct<dt.length;Ct++){const Nt=dt[Ct];let le=null;if(m!==null)le=m.getViewport(Nt);else{const me=h.getViewSubImage(d,Nt);le=me.viewport,Ct===0&&(t.setRenderTargetTextures(b,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(b))}let Vt=S[Ct];Vt===void 0&&(Vt=new gn,Vt.layers.enable(Ct),Vt.viewport=new ve,S[Ct]=Vt),Vt.matrix.fromArray(Nt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Nt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(le.x,le.y,le.width,le.height),Ct===0&&(x.matrix.copy(Vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(Vt)}const yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const Ct=h.getDepthInformation(dt[0]);Ct&&Ct.isValid&&Ct.texture&&g.init(t,Ct,r.renderState)}}for(let dt=0;dt<T.length;dt++){const st=E[dt],yt=T[dt];st!==null&&yt!==void 0&&yt.update(st,tt,c||a)}St&&St(Y,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}const ee=new Bf;ee.setAnimationLoop(zt),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}}const ji=new $n,Yx=new xe;function jx(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,Nf(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,b,T,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,E)):f.isMeshMatcapMaterial?(s(p,f),_(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),g(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,b,T):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Je&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Je&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const b=t.get(f),T=b.envMap,E=b.envMapRotation;T&&(p.envMap.value=T,ji.copy(E),ji.x*=-1,ji.y*=-1,ji.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),p.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(ji)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,T){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=T*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,b){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Je&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const b=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zx(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const E=T.program;i.uniformBlockBinding(b,E)}function c(b,T){let E=r[b.id];E===void 0&&(_(b),E=u(b),r[b.id]=E,b.addEventListener("dispose",p));const F=T.program;i.updateUBOMapping(b,F);const R=t.render.frame;s[b.id]!==R&&(d(b),s[b.id]=R)}function u(b){const T=h();b.__bindingPointIndex=T;const E=n.createBuffer(),F=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,F,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=r[b.id],E=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let R=0,w=E.length;R<w;R++){const C=Array.isArray(E[R])?E[R]:[E[R]];for(let S=0,x=C.length;S<x;S++){const A=C[S];if(m(A,R,S,F)===!0){const N=A.__offset,P=Array.isArray(A.value)?A.value:[A.value];let k=0;for(let q=0;q<P.length;q++){const G=P[q],J=g(G);typeof G=="number"||typeof G=="boolean"?(A.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,N+k,A.__data)):G.isMatrix3?(A.__data[0]=G.elements[0],A.__data[1]=G.elements[1],A.__data[2]=G.elements[2],A.__data[3]=0,A.__data[4]=G.elements[3],A.__data[5]=G.elements[4],A.__data[6]=G.elements[5],A.__data[7]=0,A.__data[8]=G.elements[6],A.__data[9]=G.elements[7],A.__data[10]=G.elements[8],A.__data[11]=0):(G.toArray(A.__data,k),k+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,T,E,F){const R=b.value,w=T+"_"+E;if(F[w]===void 0)return typeof R=="number"||typeof R=="boolean"?F[w]=R:F[w]=R.clone(),!0;{const C=F[w];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return F[w]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function _(b){const T=b.uniforms;let E=0;const F=16;for(let w=0,C=T.length;w<C;w++){const S=Array.isArray(T[w])?T[w]:[T[w]];for(let x=0,A=S.length;x<A;x++){const N=S[x],P=Array.isArray(N.value)?N.value:[N.value];for(let k=0,q=P.length;k<q;k++){const G=P[k],J=g(G),W=E%F,nt=W%J.boundary,ut=W+nt;E+=nt,ut!==0&&F-ut<J.storage&&(E+=F-ut),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=J.storage}}}const R=E%F;return R>0&&(E+=F-R),b.__size=E,b.__cache={},this}function g(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class Kx{constructor(t={}){const{canvas:e=Bm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Oi,this.toneMappingExposure=1;const E=this;let F=!1,R=0,w=0,C=null,S=-1,x=null;const A=new ve,N=new ve;let P=null;const k=new te(0);let q=0,G=e.width,J=e.height,W=1,nt=null,ut=null;const St=new ve(0,0,G,J),zt=new ve(0,0,G,J);let ee=!1;const Y=new Cc;let tt=!1,dt=!1;const st=new xe,yt=new xe,Ct=new B,Nt=new ve,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function me(){return C===null?W:1}let I=i;function un(M,D){return e.getContext(M,D)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){const D="webgl2";if(I=un(D,M),I===null)throw un(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xt,qt,bt,he,Tt,y,v,O,Z,$,j,xt,ot,ft,Zt,Q,pt,At,Rt,mt,Yt,Ft,ce,L;function at(){Xt=new e0(I),Xt.init(),Ft=new kx(I,Xt),qt=new Zv(I,Xt,t,Ft),bt=new Ox(I,Xt),qt.reverseDepthBuffer&&d&&bt.buffers.depth.setReversed(!0),he=new r0(I),Tt=new Ex,y=new zx(I,Xt,bt,Tt,qt,Ft,he),v=new $v(E),O=new t0(E),Z=new h_(I),ce=new Yv(I,Z),$=new n0(I,Z,he,ce),j=new a0(I,$,Z,he),Rt=new s0(I,qt,y),Q=new Kv(Tt),xt=new Sx(E,v,O,Xt,qt,ce,Q),ot=new jx(E,Tt),ft=new Tx,Zt=new Px(Xt),At=new qv(E,v,O,bt,j,m,l),pt=new Nx(E,j,qt),L=new Zx(I,he,qt,bt),mt=new jv(I,Xt,he),Yt=new i0(I,Xt,he),he.programs=xt.programs,E.capabilities=qt,E.extensions=Xt,E.properties=Tt,E.renderLists=ft,E.shadowMap=pt,E.state=bt,E.info=he}at();const X=new qx(E,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=Xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(G,J,!1))},this.getSize=function(M){return M.set(G,J)},this.setSize=function(M,D,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,J=D,e.width=Math.floor(M*W),e.height=Math.floor(D*W),H===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(G*W,J*W).floor()},this.setDrawingBufferSize=function(M,D,H){G=M,J=D,W=H,e.width=Math.floor(M*H),e.height=Math.floor(D*H),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(St)},this.setViewport=function(M,D,H,V){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,D,H,V),bt.viewport(A.copy(St).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(zt)},this.setScissor=function(M,D,H,V){M.isVector4?zt.set(M.x,M.y,M.z,M.w):zt.set(M,D,H,V),bt.scissor(N.copy(zt).multiplyScalar(W).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(M){bt.setScissorTest(ee=M)},this.setOpaqueSort=function(M){nt=M},this.setTransparentSort=function(M){ut=M},this.getClearColor=function(M){return M.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(M=!0,D=!0,H=!0){let V=0;if(M){let U=!1;if(C!==null){const et=C.texture.format;U=et===wc||et===Ac||et===bc}if(U){const et=C.texture.type,ct=et===mi||et===mr||et===Ws||et===ls||et===yc||et===Tc,_t=At.getClearColor(),gt=At.getClearAlpha(),Pt=_t.r,Dt=_t.g,vt=_t.b;ct?(_[0]=Pt,_[1]=Dt,_[2]=vt,_[3]=gt,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=Pt,g[1]=Dt,g[2]=vt,g[3]=gt,I.clearBufferiv(I.COLOR,0,g))}else V|=I.COLOR_BUFFER_BIT}D&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ft.dispose(),Zt.dispose(),Tt.dispose(),v.dispose(),O.dispose(),j.dispose(),ce.dispose(),L.dispose(),xt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Uc),X.removeEventListener("sessionend",Ic),Vi.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const M=he.autoReset,D=pt.enabled,H=pt.autoUpdate,V=pt.needsUpdate,U=pt.type;at(),he.autoReset=M,pt.enabled=D,pt.autoUpdate=H,pt.needsUpdate=V,pt.type=U}function lt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Lt(M){const D=M.target;D.removeEventListener("dispose",Lt),ge(D)}function ge(M){De(M),Tt.remove(M)}function De(M){const D=Tt.get(M).programs;D!==void 0&&(D.forEach(function(H){xt.releaseProgram(H)}),M.isShaderMaterial&&xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,H,V,U,et){D===null&&(D=le);const ct=U.isMesh&&U.matrixWorld.determinant()<0,_t=Yf(M,D,H,V,U);bt.setMaterial(V,ct);let gt=H.index,Pt=1;if(V.wireframe===!0){if(gt=$.getWireframeAttribute(H),gt===void 0)return;Pt=2}const Dt=H.drawRange,vt=H.attributes.position;let Jt=Dt.start*Pt,ue=(Dt.start+Dt.count)*Pt;et!==null&&(Jt=Math.max(Jt,et.start*Pt),ue=Math.min(ue,(et.start+et.count)*Pt)),gt!==null?(Jt=Math.max(Jt,0),ue=Math.min(ue,gt.count)):vt!=null&&(Jt=Math.max(Jt,0),ue=Math.min(ue,vt.count));const fe=ue-Jt;if(fe<0||fe===1/0)return;ce.setup(U,V,_t,H,gt);let Ye,ie=mt;if(gt!==null&&(Ye=Z.get(gt),ie=Yt,ie.setIndex(Ye)),U.isMesh)V.wireframe===!0?(bt.setLineWidth(V.wireframeLinewidth*me()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(U.isLine){let Mt=V.linewidth;Mt===void 0&&(Mt=1),bt.setLineWidth(Mt*me()),U.isLineSegments?ie.setMode(I.LINES):U.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else U.isPoints?ie.setMode(I.POINTS):U.isSprite&&ie.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ie.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))ie.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Mt=U._multiDrawStarts,Qn=U._multiDrawCounts,re=U._multiDrawCount,Sn=gt?Z.get(gt).bytesPerElement:1,Mr=Tt.get(V).currentProgram.getUniforms();for(let tn=0;tn<re;tn++)Mr.setValue(I,"_gl_DrawID",tn),ie.render(Mt[tn]/Sn,Qn[tn])}else if(U.isInstancedMesh)ie.renderInstances(Jt,fe,U.count);else if(H.isInstancedBufferGeometry){const Mt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Qn=Math.min(H.instanceCount,Mt);ie.renderInstances(Jt,fe,Qn)}else ie.render(Jt,fe)};function se(M,D,H){M.transparent===!0&&M.side===hi&&M.forceSinglePass===!1?(M.side=Je,M.needsUpdate=!0,aa(M,D,H),M.side=ki,M.needsUpdate=!0,aa(M,D,H),M.side=hi):aa(M,D,H)}this.compile=function(M,D,H=null){H===null&&(H=M),f=Zt.get(H),f.init(D),T.push(f),H.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==H&&M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const V=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const et=U.material;if(et)if(Array.isArray(et))for(let ct=0;ct<et.length;ct++){const _t=et[ct];se(_t,H,U),V.add(_t)}else se(et,H,U),V.add(et)}),T.pop(),f=null,V},this.compileAsync=function(M,D,H=null){const V=this.compile(M,D,H);return new Promise(U=>{function et(){if(V.forEach(function(ct){Tt.get(ct).currentProgram.isReady()&&V.delete(ct)}),V.size===0){U(M);return}setTimeout(et,10)}Xt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let Mn=null;function Jn(M){Mn&&Mn(M)}function Uc(){Vi.stop()}function Ic(){Vi.start()}const Vi=new Bf;Vi.setAnimationLoop(Jn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(M){Mn=M,X.setAnimationLoop(M),M===null?Vi.stop():Vi.start()},X.addEventListener("sessionstart",Uc),X.addEventListener("sessionend",Ic),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,D,C),f=Zt.get(M,T.length),f.init(D),T.push(f),yt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(yt),dt=this.localClippingEnabled,tt=Q.init(this.clippingPlanes,dt),p=ft.get(M,b.length),p.init(),b.push(p),X.enabled===!0&&X.isPresenting===!0){const et=E.xr.getDepthSensingMesh();et!==null&&uo(et,D,-1/0,E.sortObjects)}uo(M,D,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(nt,ut),Vt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Vt&&At.addToRenderList(p,M),this.info.render.frame++,tt===!0&&Q.beginShadows();const H=f.state.shadowsArray;pt.render(H,M,D),tt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,U=p.transmissive;if(f.setupLights(),D.isArrayCamera){const et=D.cameras;if(U.length>0)for(let ct=0,_t=et.length;ct<_t;ct++){const gt=et[ct];Fc(V,U,M,gt)}Vt&&At.render(M);for(let ct=0,_t=et.length;ct<_t;ct++){const gt=et[ct];Nc(p,M,gt,gt.viewport)}}else U.length>0&&Fc(V,U,M,D),Vt&&At.render(M),Nc(p,M,D);C!==null&&(y.updateMultisampleRenderTarget(C),y.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(E,M,D),ce.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(f=T[T.length-1],tt===!0&&Q.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function uo(M,D,H,V){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Y.intersectsSprite(M)){V&&Nt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(yt);const ct=j.update(M),_t=M.material;_t.visible&&p.push(M,ct,_t,H,Nt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Y.intersectsObject(M))){const ct=j.update(M),_t=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Nt.copy(M.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Nt.copy(ct.boundingSphere.center)),Nt.applyMatrix4(M.matrixWorld).applyMatrix4(yt)),Array.isArray(_t)){const gt=ct.groups;for(let Pt=0,Dt=gt.length;Pt<Dt;Pt++){const vt=gt[Pt],Jt=_t[vt.materialIndex];Jt&&Jt.visible&&p.push(M,ct,Jt,H,Nt.z,vt)}}else _t.visible&&p.push(M,ct,_t,H,Nt.z,null)}}const et=M.children;for(let ct=0,_t=et.length;ct<_t;ct++)uo(et[ct],D,H,V)}function Nc(M,D,H,V){const U=M.opaque,et=M.transmissive,ct=M.transparent;f.setupLightsView(H),tt===!0&&Q.setGlobalState(E.clippingPlanes,H),V&&bt.viewport(A.copy(V)),U.length>0&&sa(U,D,H),et.length>0&&sa(et,D,H),ct.length>0&&sa(ct,D,H),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Fc(M,D,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new _r(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?ta:mi,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const et=f.state.transmissionRenderTarget[V.id],ct=V.viewport||A;et.setSize(ct.z,ct.w);const _t=E.getRenderTarget();E.setRenderTarget(et),E.getClearColor(k),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),Vt&&At.render(H);const gt=E.toneMapping;E.toneMapping=Oi;const Pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),tt===!0&&Q.setGlobalState(E.clippingPlanes,V),sa(M,H,V),y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let vt=0,Jt=D.length;vt<Jt;vt++){const ue=D[vt],fe=ue.object,Ye=ue.geometry,ie=ue.material,Mt=ue.group;if(ie.side===hi&&fe.layers.test(V.layers)){const Qn=ie.side;ie.side=Je,ie.needsUpdate=!0,Oc(fe,H,V,Ye,ie,Mt),ie.side=Qn,ie.needsUpdate=!0,Dt=!0}}Dt===!0&&(y.updateMultisampleRenderTarget(et),y.updateRenderTargetMipmap(et))}E.setRenderTarget(_t),E.setClearColor(k,q),Pt!==void 0&&(V.viewport=Pt),E.toneMapping=gt}function sa(M,D,H){const V=D.isScene===!0?D.overrideMaterial:null;for(let U=0,et=M.length;U<et;U++){const ct=M[U],_t=ct.object,gt=ct.geometry,Pt=V===null?ct.material:V,Dt=ct.group;_t.layers.test(H.layers)&&Oc(_t,D,H,gt,Pt,Dt)}}function Oc(M,D,H,V,U,et){M.onBeforeRender(E,D,H,V,U,et),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(E,D,H,V,M,et),U.transparent===!0&&U.side===hi&&U.forceSinglePass===!1?(U.side=Je,U.needsUpdate=!0,E.renderBufferDirect(H,D,V,U,M,et),U.side=ki,U.needsUpdate=!0,E.renderBufferDirect(H,D,V,U,M,et),U.side=hi):E.renderBufferDirect(H,D,V,U,M,et),M.onAfterRender(E,D,H,V,U,et)}function aa(M,D,H){D.isScene!==!0&&(D=le);const V=Tt.get(M),U=f.state.lights,et=f.state.shadowsArray,ct=U.state.version,_t=xt.getParameters(M,U.state,et,D,H),gt=xt.getProgramCacheKey(_t);let Pt=V.programs;V.environment=M.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(M.isMeshStandardMaterial?O:v).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Pt===void 0&&(M.addEventListener("dispose",Lt),Pt=new Map,V.programs=Pt);let Dt=Pt.get(gt);if(Dt!==void 0){if(V.currentProgram===Dt&&V.lightsStateVersion===ct)return zc(M,_t),Dt}else _t.uniforms=xt.getUniforms(M),M.onBeforeCompile(_t,E),Dt=xt.acquireProgram(_t,gt),Pt.set(gt,Dt),V.uniforms=_t.uniforms;const vt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(vt.clippingPlanes=Q.uniform),zc(M,_t),V.needsLights=Zf(M),V.lightsStateVersion=ct,V.needsLights&&(vt.ambientLightColor.value=U.state.ambient,vt.lightProbe.value=U.state.probe,vt.directionalLights.value=U.state.directional,vt.directionalLightShadows.value=U.state.directionalShadow,vt.spotLights.value=U.state.spot,vt.spotLightShadows.value=U.state.spotShadow,vt.rectAreaLights.value=U.state.rectArea,vt.ltc_1.value=U.state.rectAreaLTC1,vt.ltc_2.value=U.state.rectAreaLTC2,vt.pointLights.value=U.state.point,vt.pointLightShadows.value=U.state.pointShadow,vt.hemisphereLights.value=U.state.hemi,vt.directionalShadowMap.value=U.state.directionalShadowMap,vt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,vt.spotShadowMap.value=U.state.spotShadowMap,vt.spotLightMatrix.value=U.state.spotLightMatrix,vt.spotLightMap.value=U.state.spotLightMap,vt.pointShadowMap.value=U.state.pointShadowMap,vt.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Dt,V.uniformsList=null,Dt}function Bc(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=Va.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function zc(M,D){const H=Tt.get(M);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Yf(M,D,H,V,U){D.isScene!==!0&&(D=le),y.resetTextureUnits();const et=D.fog,ct=V.isMeshStandardMaterial?D.environment:null,_t=C===null?E.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_s,gt=(V.isMeshStandardMaterial?O:v).get(V.envMap||ct),Pt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Dt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),vt=!!H.morphAttributes.position,Jt=!!H.morphAttributes.normal,ue=!!H.morphAttributes.color;let fe=Oi;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=E.toneMapping);const Ye=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=Ye!==void 0?Ye.length:0,Mt=Tt.get(V),Qn=f.state.lights;if(tt===!0&&(dt===!0||M!==x)){const hn=M===x&&V.id===S;Q.setState(V,M,hn)}let re=!1;V.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==Qn.state.version||Mt.outputColorSpace!==_t||U.isBatchedMesh&&Mt.batching===!1||!U.isBatchedMesh&&Mt.batching===!0||U.isBatchedMesh&&Mt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Mt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Mt.instancing===!1||!U.isInstancedMesh&&Mt.instancing===!0||U.isSkinnedMesh&&Mt.skinning===!1||!U.isSkinnedMesh&&Mt.skinning===!0||U.isInstancedMesh&&Mt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Mt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Mt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Mt.instancingMorph===!1&&U.morphTexture!==null||Mt.envMap!==gt||V.fog===!0&&Mt.fog!==et||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Q.numPlanes||Mt.numIntersection!==Q.numIntersection)||Mt.vertexAlphas!==Pt||Mt.vertexTangents!==Dt||Mt.morphTargets!==vt||Mt.morphNormals!==Jt||Mt.morphColors!==ue||Mt.toneMapping!==fe||Mt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Mt.__version=V.version);let Sn=Mt.currentProgram;re===!0&&(Sn=aa(V,D,U));let Mr=!1,tn=!1,xs=!1;const de=Sn.getUniforms(),Fn=Mt.uniforms;if(bt.useProgram(Sn.program)&&(Mr=!0,tn=!0,xs=!0),V.id!==S&&(S=V.id,tn=!0),Mr||x!==M){bt.buffers.depth.getReversed()?(st.copy(M.projectionMatrix),km(st),Hm(st),de.setValue(I,"projectionMatrix",st)):de.setValue(I,"projectionMatrix",M.projectionMatrix),de.setValue(I,"viewMatrix",M.matrixWorldInverse);const gi=de.map.cameraPosition;gi!==void 0&&gi.setValue(I,Ct.setFromMatrixPosition(M.matrixWorld)),qt.logarithmicDepthBuffer&&de.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&de.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,tn=!0,xs=!0)}if(U.isSkinnedMesh){de.setOptional(I,U,"bindMatrix"),de.setOptional(I,U,"bindMatrixInverse");const hn=U.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),de.setValue(I,"boneTexture",hn.boneTexture,y))}U.isBatchedMesh&&(de.setOptional(I,U,"batchingTexture"),de.setValue(I,"batchingTexture",U._matricesTexture,y),de.setOptional(I,U,"batchingIdTexture"),de.setValue(I,"batchingIdTexture",U._indirectTexture,y),de.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&de.setValue(I,"batchingColorTexture",U._colorsTexture,y));const Ms=H.morphAttributes;if((Ms.position!==void 0||Ms.normal!==void 0||Ms.color!==void 0)&&Rt.update(U,H,Sn),(tn||Mt.receiveShadow!==U.receiveShadow)&&(Mt.receiveShadow=U.receiveShadow,de.setValue(I,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Fn.envMap.value=gt,Fn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Fn.envMapIntensity.value=D.environmentIntensity),tn&&(de.setValue(I,"toneMappingExposure",E.toneMappingExposure),Mt.needsLights&&jf(Fn,xs),et&&V.fog===!0&&ot.refreshFogUniforms(Fn,et),ot.refreshMaterialUniforms(Fn,V,W,J,f.state.transmissionRenderTarget[M.id]),Va.upload(I,Bc(Mt),Fn,y)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Va.upload(I,Bc(Mt),Fn,y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&de.setValue(I,"center",U.center),de.setValue(I,"modelViewMatrix",U.modelViewMatrix),de.setValue(I,"normalMatrix",U.normalMatrix),de.setValue(I,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const hn=V.uniformsGroups;for(let gi=0,vi=hn.length;gi<vi;gi++){const kc=hn[gi];L.update(kc,Sn),L.bind(kc,Sn)}}return Sn}function jf(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Zf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,D,H){Tt.get(M.texture).__webglTexture=D,Tt.get(M.depthTexture).__webglTexture=H;const V=Tt.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const H=Tt.get(M);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,H=0){C=M,R=D,w=H;let V=!0,U=null,et=!1,ct=!1;if(M){const gt=Tt.get(M);if(gt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(gt.__webglFramebuffer===void 0)y.setupRenderTarget(M);else if(gt.__hasExternalTextures)y.rebindTextures(M,Tt.get(M.texture).__webglTexture,Tt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const vt=M.depthTexture;if(gt.__boundDepthTexture!==vt){if(vt!==null&&Tt.has(vt)&&(M.width!==vt.image.width||M.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(M)}}const Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ct=!0);const Dt=Tt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[D])?U=Dt[D][H]:U=Dt[D],et=!0):M.samples>0&&y.useMultisampledRTT(M)===!1?U=Tt.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?U=Dt[H]:U=Dt,A.copy(M.viewport),N.copy(M.scissor),P=M.scissorTest}else A.copy(St).multiplyScalar(W).floor(),N.copy(zt).multiplyScalar(W).floor(),P=ee;if(bt.bindFramebuffer(I.FRAMEBUFFER,U)&&V&&bt.drawBuffers(M,U),bt.viewport(A),bt.scissor(N),bt.setScissorTest(P),et){const gt=Tt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,gt.__webglTexture,H)}else if(ct){const gt=Tt.get(M.texture),Pt=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.__webglTexture,H||0,Pt)}S=-1},this.readRenderTargetPixels=function(M,D,H,V,U,et,ct){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){bt.bindFramebuffer(I.FRAMEBUFFER,_t);try{const gt=M.texture,Pt=gt.format,Dt=gt.type;if(!qt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-V&&H>=0&&H<=M.height-U&&I.readPixels(D,H,V,U,Ft.convert(Pt),Ft.convert(Dt),et)}finally{const gt=C!==null?Tt.get(C).__webglFramebuffer:null;bt.bindFramebuffer(I.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(M,D,H,V,U,et,ct){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ct!==void 0&&(_t=_t[ct]),_t){const gt=M.texture,Pt=gt.format,Dt=gt.type;if(!qt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-V&&H>=0&&H<=M.height-U){bt.bindFramebuffer(I.FRAMEBUFFER,_t);const vt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,vt),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),I.readPixels(D,H,V,U,Ft.convert(Pt),Ft.convert(Dt),0);const Jt=C!==null?Tt.get(C).__webglFramebuffer:null;bt.bindFramebuffer(I.FRAMEBUFFER,Jt);const ue=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await zm(I,ue,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,vt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(vt),I.deleteSync(ue),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,H=0){M.isTexture!==!0&&(Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);const V=Math.pow(2,-H),U=Math.floor(M.image.width*V),et=Math.floor(M.image.height*V),ct=D!==null?D.x:0,_t=D!==null?D.y:0;y.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ct,_t,U,et),bt.unbindTexture()},this.copyTextureToTexture=function(M,D,H=null,V=null,U=0){M.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],D=arguments[2],U=arguments[3]||0,H=null);let et,ct,_t,gt,Pt,Dt,vt,Jt,ue;const fe=M.isCompressedTexture?M.mipmaps[U]:M.image;H!==null?(et=H.max.x-H.min.x,ct=H.max.y-H.min.y,_t=H.isBox3?H.max.z-H.min.z:1,gt=H.min.x,Pt=H.min.y,Dt=H.isBox3?H.min.z:0):(et=fe.width,ct=fe.height,_t=fe.depth||1,gt=0,Pt=0,Dt=0),V!==null?(vt=V.x,Jt=V.y,ue=V.z):(vt=0,Jt=0,ue=0);const Ye=Ft.convert(D.format),ie=Ft.convert(D.type);let Mt;D.isData3DTexture?(y.setTexture3D(D,0),Mt=I.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(y.setTexture2DArray(D,0),Mt=I.TEXTURE_2D_ARRAY):(y.setTexture2D(D,0),Mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,D.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,D.unpackAlignment);const Qn=I.getParameter(I.UNPACK_ROW_LENGTH),re=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=I.getParameter(I.UNPACK_SKIP_PIXELS),Mr=I.getParameter(I.UNPACK_SKIP_ROWS),tn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Dt);const xs=M.isDataArrayTexture||M.isData3DTexture,de=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const Fn=Tt.get(M),Ms=Tt.get(D),hn=Tt.get(Fn.__renderTarget),gi=Tt.get(Ms.__renderTarget);bt.bindFramebuffer(I.READ_FRAMEBUFFER,hn.__webglFramebuffer),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let vi=0;vi<_t;vi++)xs&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(M).__webglTexture,U,Dt+vi),M.isDepthTexture?(de&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.get(D).__webglTexture,U,ue+vi),I.blitFramebuffer(gt,Pt,et,ct,vt,Jt,et,ct,I.DEPTH_BUFFER_BIT,I.NEAREST)):de?I.copyTexSubImage3D(Mt,U,vt,Jt,ue+vi,gt,Pt,et,ct):I.copyTexSubImage2D(Mt,U,vt,Jt,ue+vi,gt,Pt,et,ct);bt.bindFramebuffer(I.READ_FRAMEBUFFER,null),bt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else de?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Mt,U,vt,Jt,ue,et,ct,_t,Ye,ie,fe.data):D.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,U,vt,Jt,ue,et,ct,_t,Ye,fe.data):I.texSubImage3D(Mt,U,vt,Jt,ue,et,ct,_t,Ye,ie,fe):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,U,vt,Jt,et,ct,Ye,ie,fe.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,U,vt,Jt,fe.width,fe.height,Ye,fe.data):I.texSubImage2D(I.TEXTURE_2D,U,vt,Jt,et,ct,Ye,ie,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,Qn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,re),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mr),I.pixelStorei(I.UNPACK_SKIP_IMAGES,tn),U===0&&D.generateMipmaps&&I.generateMipmap(Mt),bt.unbindTexture()},this.copyTextureToTexture3D=function(M,D,H=null,V=null,U=0){return M.isTexture!==!0&&(Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,M=arguments[2],D=arguments[3],U=arguments[4]||0),Is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,H,V,U)},this.initRenderTarget=function(M){Tt.get(M).__webglFramebuffer===void 0&&y.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?y.setTextureCube(M,0):M.isData3DTexture?y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?y.setTexture2DArray(M,0):y.setTexture2D(M,0),bt.unbindTexture()},this.resetState=function(){R=0,w=0,C=null,bt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}class $x extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class eh extends ia{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tf,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const nh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Jx{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Qx=new Jx;class Lc{constructor(t){this.manager=t!==void 0?t:Qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Lc.DEFAULT_MATERIAL_NAME="__DEFAULT";class tM extends Lc{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=nh.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Xs("img");function l(){u(),nh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class eM extends Lc{constructor(t){super(t)}load(t,e,i,r){const s=new qe,a=new tM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Xf extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Qo=new xe,ih=new B,rh=new B;class nM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ih.setFromMatrixPosition(t.matrixWorld),e.position.copy(ih),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iM extends nM{constructor(){super(new zf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rM extends Xf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new iM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sM extends Xf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sh{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ge(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class aM extends vr{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const ah={type:"change"},Dc={type:"start"},qf={type:"end"},Ca=new Cf,oh=new wi,oM=Math.cos(70*Om.DEG2RAD),ye=new B,Ze=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tl=1e-6;class lM extends aM{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new gr,this._lastTargetPosition=new B,this._quat=new gr().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sh,this._sphericalDelta=new sh,this._scale=1,this._panOffset=new B,this._rotateStart=new It,this._rotateEnd=new It,this._rotateDelta=new It,this._panStart=new It,this._panEnd=new It,this._panDelta=new It,this._dollyStart=new It,this._dollyEnd=new It,this._dollyDelta=new It,this._dollyDirection=new B,this._mouse=new It,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uM.bind(this),this._onPointerDown=cM.bind(this),this._onPointerUp=hM.bind(this),this._onContextMenu=vM.bind(this),this._onMouseWheel=pM.bind(this),this._onKeyDown=mM.bind(this),this._onTouchStart=_M.bind(this),this._onTouchMove=gM.bind(this),this._onMouseDown=fM.bind(this),this._onMouseMove=dM.bind(this),this._interceptControlDown=xM.bind(this),this._interceptControlUp=MM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ah),this.update(),this.state=oe.NONE}update(t=null){const e=this.object.position;ye.copy(e).sub(this.target),ye.applyQuaternion(this._quat),this._spherical.setFromVector3(ye),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Ze:i>Math.PI&&(i-=Ze),r<-Math.PI?r+=Ze:r>Math.PI&&(r-=Ze),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ye.setFromSpherical(this._spherical),ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ye.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ca.origin.copy(this.object.position),Ca.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ca.direction))<oM?this.object.lookAt(this.target):(oh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ca.intersectPlane(oh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tl||this._lastTargetPosition.distanceToSquared(this.target)>tl?(this.dispatchEvent(ah),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ye.setFromMatrixColumn(e,0),ye.multiplyScalar(-t),this._panOffset.add(ye)}_panUp(t,e){this.screenSpacePanning===!0?ye.setFromMatrixColumn(e,1):(ye.setFromMatrixColumn(e,0),ye.crossVectors(this.object.up,ye)),ye.multiplyScalar(t),this._panOffset.add(ye)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ye.copy(r).sub(this.target);let s=ye.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ze*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new It,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function cM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function uM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qf),this.state=oe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case Hr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case Hr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Dc)}function dM(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pM(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(Dc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qf))}function mM(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function _M(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Dc)}function gM(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function vM(n){this.enabled!==!1&&n.preventDefault()}function xM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function MM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const SM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACC0lEQVQ4Tz2TVU9DQRCF96cAFaDUsEBCgru7By0t7k5wlwcCCQ8k/NZhv0MuD7e93Z2ZI3Pqeo9ilvuptt7DmLWtR/V07xVbUzZsnTtFNnyZsL6TEuvYKrK2jULr2Cy08Ye01UzmWZe/d33HJSocuU5avy8cOItbcy6i75aViAZNPKVt/D4tEMCoZ1jnth8wepvSpMZM2FpXo0Jo95fd+8V6YDh8lbSJx7RNv5apsW6uQCBzHxXmamcLrHUtKoow6DmICZ2BvMOgZSUqEO6RBzIyqHGjN0kVMJ3vqZdSm34rEwveF74qrXYmX4g0TT2XWtNSWPfyALT+07jVe1robF6OyDS8GTyPizLvNABAnZp3/+Q5pg2dJ2zsPiXN0KYQSdDHF4agF0bcwySQ4/igYOgiIW0MacyEbOwupWYKA/NgRz0bC7bjmAZVECa9PlAopAlms+/lOmeloGM46yQfsHcgcDn/WSFT2DGe0IRxINPIAyLaGQoTgBzoTGMQPjAMNjLJI2W/q6x+PiTdeEMjJv57gE5p9BEmVFxwBiKhCrIBs4bFkNDRTwYw2rFniqDDAWsNtDYshHSmYVt/aSWVMIUVfY5GYkoiKaRI/wd/Tu5xHCnUIJffSFC0feD0X+AQrQFF0kZIaMRpgsSDoRgZrBwWDqokj6loZv9sIRiAmUt+ONmgGX/ICvWY/wvwT+3Zk5nu/AAAAABJRU5ErkJggg==",Pa=128;class EM{constructor(t){this.canvas=t}init(){this.scene=new $x,this.scene.background=new te(1974052);const t=new rM(16777215,1.6);return t.position.set(3,6,4),this.cube=new Un(new gs,new eh({color:6995518})),this.cube.position.y=.5,this.scene.add(new sM(16777215,1.2),t,this.cube,this.createFloor()),this.camera=new gn(60,1,.1,300),this.camera.position.set(3,2.5,4),this.renderer=new Kx({canvas:this.canvas,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setAnimationLoop(()=>this.renderer.render(this.scene,this.camera)),this.controls=new lM(this.camera,this.canvas),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(this.canvas),this}createFloor(){const t=new eM().load(SM);t.colorSpace=ln,t.wrapS=t.wrapT=Ka,t.magFilter=vn,t.minFilter=Us,t.repeat.set(Pa,Pa);const e=new Un(new ra(Pa,Pa),new eh({map:t}));return e.rotation.x=-Math.PI/2,e}resize(){const{clientWidth:t,clientHeight:e}=this.canvas;!t||!e||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix())}dispose(){this.observer.disconnect(),this.renderer.setAnimationLoop(null),this.controls.dispose(),this.renderer.dispose()}}function yM(n){n.CapacitorUtils.Synapse=new Proxy({},{get(t,e){return new Proxy({},{get(i,r){return(s,a,o)=>{const l=n.Capacitor.Plugins[e];if(l===void 0){o(new Error(`Capacitor plugin ${e} not found`));return}if(typeof l[r]!="function"){o(new Error(`Method ${r} not found in Capacitor plugin ${e}`));return}(async()=>{try{const c=await l[r](s);a(c)}catch(c){o(c)}})()}}})}})}function TM(n){n.CapacitorUtils.Synapse=new Proxy({},{get(t,e){return n.cordova.plugins[e]}})}function bM(n=!1){typeof window>"u"||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!n?yM(window):window.cordova!==void 0&&TM(window))}var ac;(function(n){n.Documents="DOCUMENTS",n.Data="DATA",n.Library="LIBRARY",n.Cache="CACHE",n.External="EXTERNAL",n.ExternalStorage="EXTERNAL_STORAGE",n.ExternalCache="EXTERNAL_CACHE",n.LibraryNoCloud="LIBRARY_NO_CLOUD",n.Temporary="TEMPORARY"})(ac||(ac={}));var Ja;(function(n){n.UTF8="utf8",n.ASCII="ascii",n.UTF16="utf16"})(Ja||(Ja={}));const ai=ao("Filesystem",{web:()=>cf(()=>import("./web-63SSXOBx.js"),[],import.meta.url).then(n=>new n.FilesystemWeb)});bM();const oc="MineMotion/projects",oi=ac.Documents,lh=n=>n.trim().replace(/[\\/:*?"<>|]/g,"_"),Ki=(n,t="")=>`${oc}/${n}${t&&`/${t}`}`,ch=n=>ai.stat({path:Ki(n),directory:oi}).then(()=>!0,()=>!1),Or={async init(){await ai.requestPermissions().catch(()=>{}),await ai.mkdir({path:oc,directory:oi,recursive:!0}).catch(()=>{})},async read(n){const{data:t}=await ai.readFile({path:Ki(n,"project.json"),directory:oi,encoding:Ja.UTF8});return{id:n,...JSON.parse(t)}},async write(n,{name:t,created:e}){await ai.writeFile({path:Ki(n,"project.json"),directory:oi,encoding:Ja.UTF8,data:JSON.stringify({name:t,created:e,modified:Date.now()})})},async list(){const{files:n}=await ai.readdir({path:oc,directory:oi});return(await Promise.all(n.filter(e=>e.type==="directory").map(e=>this.read(e.name).catch(()=>null)))).filter(Boolean).sort((e,i)=>i.modified-e.modified)},async create(n){const t=lh(n);if(await ch(t))throw new Error("A project with that name already exists");return await ai.mkdir({path:Ki(t),directory:oi,recursive:!0}),await this.write(t,{name:n.trim(),created:Date.now()}),this.read(t)},async rename(n,t){const e=lh(t);if(e!==n){if(await ch(e))throw new Error("A project with that name already exists");await ai.rename({from:Ki(n),to:Ki(e),directory:oi,toDirectory:oi})}await this.write(e,{...await this.read(e),name:t.trim()})},async touch(n){await this.write(n,await this.read(n))},remove(n){return ai.rmdir({path:Ki(n),directory:oi,recursive:!0})}},AM={select:'<path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.495.495 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.495.495 0 0 1-.947.063z" />',translate:'<path d="m5 9-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />',rotate:'<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" />',scale:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />',undo:'<path d="M3 7v6h6" /><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />',redo:'<path d="M21 7v6h-6" /><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />',menu:'<path d="M4 6h16M4 12h16M4 18h16" />',play:'<polygon points="7 4 20 12 7 20" fill="currentColor" />',pause:'<path d="M8 5v14M16 5v14" stroke-width="3" />',keyframe:'<path d="M12 2.5 21.5 12 12 21.5 2.5 12z" /><path d="M12 8.5v7M8.5 12h7" />',up:'<path d="m18 15-6-6-6 6" />',down:'<path d="m6 9 6 6 6-6" />'};var wM=Qs('<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"></svg>');function Ci(n,t){ds(t,!0);let e=ks(t,"size",3,22);var i=wM();wp(i,()=>AM[t.name],!0),We(()=>{Ce(i,"width",e()),Ce(i,"height",e())}),Ee(n,i),ps()}var RM=Qe('<span class="tick svelte-tm3qmj"></span>'),CM=Qe("<i></i>"),PM=Qe('<section class="svelte-tm3qmj"><div class="bar svelte-tm3qmj"><button type="button" class="btn"><!></button> <button type="button" class="btn key svelte-tm3qmj"><!> Keyframe</button> <span class="time svelte-tm3qmj"> </span> <button type="button" class="btn close" aria-label="Hide timeline"><!></button></div> <div class="track svelte-tm3qmj"><div class="ruler svelte-tm3qmj"></div> <div class="lane svelte-tm3qmj"></div> <div class="playhead svelte-tm3qmj"></div></div></section>');function LM(n,t){let r=_e(!1),s=_e(0),a=Li([0,1,2.5]),o=_e(void 0);const l=A=>`${A/5*100}%`,c=A=>{if(!A.buttons)return;const{left:N,width:P}=rt(o).getBoundingClientRect(),k=(A.clientX-N)/P*5;Qt(s,Math.round(Math.min(5,Math.max(0,k))*30)/30)},u=A=>{A.currentTarget.setPointerCapture(A.pointerId),c(A)},h=()=>{a.includes(rt(s))||a.push(rt(s))};var d=PM(),m=ne(d),_=ne(m),g=ne(_);{let A=cr(()=>rt(r)?"pause":"play");Ci(g,{get name(){return rt(A)}})}var p=Bt(_,2),f=ne(p);Ci(f,{name:"keyframe",size:20});var b=Bt(p,2),T=wn(b),E=Bt(b,2),F=ne(E);Ci(F,{name:"down"});var R=Bt(m,2),w=ne(R);is(w,21,()=>Array(6),gl,(A,N,P)=>{var k=RM();let q;k.textContent=`${P}s`,We(G=>q=xo(k,"",q,{left:G}),[()=>l(P)]),Ee(A,k)});var C=Bt(w,2);is(C,20,()=>a,A=>A,(A,N)=>{var P=CM();let k,q;We(G=>{k=Za(P,1,"diamond svelte-tm3qmj",null,k,{on:N===rt(s)}),q=xo(P,"",q,{left:G})},[()=>l(N)]),Ee(A,P)});var S=Bt(C,2);let x;of(R,A=>Qt(o,A),()=>rt(o)),We((A,N,P)=>{Ce(_,"aria-label",rt(r)?"Pause":"Play"),Gn(T,`${A??""} / ${N??""} s`),x=xo(S,"",x,{left:P})},[()=>rt(s).toFixed(2),()=>5 .toFixed(2),()=>l(rt(s))]),Le("click",_,()=>Qt(r,!rt(r))),Le("click",p,h),Le("click",E,function(...A){var N;(N=t.onclose)==null||N.apply(this,A)}),Le("pointerdown",R,u),Le("pointermove",R,c),Ee(n,d)}so(["click","pointerdown","pointermove"]);var DM=Qe('<button type="button"><!></button>'),UM=Qe('<button type="button" class="scrim svelte-17n36ft" aria-label="Close menu"></button> <div class="menu svelte-17n36ft"><button type="button" class="svelte-17n36ft">Save</button> <button type="button" class="svelte-17n36ft">Export</button> <button type="button" class="svelte-17n36ft">Back to projects</button></div>',1),IM=Qe('<button type="button" class="btn tab svelte-17n36ft"><!> Timeline</button>'),NM=Qe('<canvas class="svelte-17n36ft"></canvas> <button type="button" class="btn create svelte-17n36ft" aria-label="Create"><img alt="" class="svelte-17n36ft"/></button> <nav class="tools svelte-17n36ft" aria-label="Transform tools"></nav> <div class="top svelte-17n36ft"><button type="button" class="btn" aria-label="Undo"><!></button> <button type="button" class="btn" aria-label="Redo"><!></button> <button type="button" aria-label="Menu"><!></button></div> <!> <!>',1);function FM(n,t){ds(t,!0);const e=[["select","Select"],["translate","Translate"],["rotate","Rotate"],["scale","Scale"]];let i=_e(void 0),r=_e("select"),s=_e(!1),a=_e(!1);lf(()=>{const S=new EM(rt(i)).init(),x=Yp.addListener("backButton",t.onback);return Or.touch(t.project.id).catch(()=>{}),()=>{S.dispose(),x.then(A=>A.remove())}});var o=NM(),l=Ya(o);of(l,S=>Qt(i,S),()=>rt(i));var c=Bt(l,2),u=wn(c),h=Bt(c,2);is(h,21,()=>e,([S,x])=>S,(S,x)=>{var A=cr(()=>nl(rt(x),2));let N=()=>rt(A)[0],P=()=>rt(A)[1];var k=DM();let q;var G=ne(k);Ci(G,{get name(){return N()}}),We(()=>{q=Za(k,1,"btn svelte-17n36ft",null,q,{active:rt(r)===N()}),Ce(k,"aria-label",P()),Ce(k,"aria-pressed",rt(r)===N())}),Le("click",k,()=>Qt(r,N(),!0)),Ee(S,k)});var d=Bt(h,2),m=ne(d),_=ne(m);Ci(_,{name:"undo"});var g=Bt(m,2),p=ne(g);Ci(p,{name:"redo"});var f=Bt(g,2);let b;var T=ne(f);Ci(T,{name:"menu"});var E=Bt(d,2);{var F=S=>{var x=UM(),A=Ya(x),N=Bt(A,2),P=Bt(ne(N),4);Le("click",A,()=>Qt(s,!1)),Le("click",P,function(...k){var q;(q=t.onback)==null||q.apply(this,k)}),Ee(S,x)};Ni(E,S=>{rt(s)&&S(F)})}var R=Bt(E,2);{var w=S=>{LM(S,{onclose:()=>Qt(a,!1)})},C=S=>{var x=IM(),A=ne(x);Ci(A,{name:"up",size:18}),Le("click",x,()=>Qt(a,!0)),Ee(S,x)};Ni(R,S=>{rt(a)?S(w):S(C,-1)})}We(()=>{Ce(u,"src",jp),b=Za(f,1,"btn",null,b,{active:rt(s)})}),Le("click",f,()=>Qt(s,!rt(s))),Ee(n,o),ps()}so(["click"]);const OM=""+new URL("logo-6asXO-bN.png",import.meta.url).href;var BM=Qe('<div class="error svelte-g4ui8n"> </div>'),zM=Qe('<div class="scrim svelte-g4ui8n"><form class="dialog svelte-g4ui8n" role="dialog"><h2 class="svelte-g4ui8n"> </h2> <div class="field svelte-g4ui8n"><label for="project-name" class="svelte-g4ui8n">Project name</label> <input id="project-name" type="text" autocomplete="off" class="svelte-g4ui8n"/> <div class="path svelte-g4ui8n"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="svelte-g4ui8n"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg> <span class="svelte-g4ui8n"> </span></div> <!></div> <div class="actions svelte-g4ui8n"><button type="button" class="ghost svelte-g4ui8n">Cancel</button> <button type="submit" class="accent svelte-g4ui8n"> </button></div></form></div>');function kM(n,t){ds(t,!0);let e=ks(t,"title",3,"New project"),i=ks(t,"action",3,"Create"),r=ks(t,"value",3,"Untitled animation"),s=_e(Li(r())),a=_e("");const o=async w=>{w.preventDefault();try{await t.onsubmit(rt(s).trim()||"Untitled animation")}catch(C){Qt(a,C.message,!0)}};var l=zM(),c=ne(l),u=ne(c),h=wn(u,!0),d=Bt(u,2),m=Bt(ne(d),2);Dd(m);var _=Bt(m,2),g=Bt(ne(_),2),p=wn(g),f=Bt(_,2);{var b=w=>{var C=BM(),S=wn(C,!0);We(()=>Gn(S,rt(a))),Ee(w,C)};Ni(f,w=>{rt(a)&&w(b)})}var T=Bt(d,2),E=ne(T),F=Bt(E,2),R=wn(F,!0);We(w=>{Ce(c,"aria-label",e()),Gn(h,e()),Gn(p,`MineMotion/projects/${w??""}/`),Gn(R,i())},[()=>rt(s).trim()||"Untitled animation"]),cp("submit",c,o),Ip(m,()=>rt(s),w=>Qt(s,w)),Le("click",E,function(...w){var C;(C=t.oncancel)==null||C.apply(this,w)}),Ee(n,l),ps()}so(["click"]);const el={dgreen:["#4f9a37","#3b7a29","#2c5f1f"],green:["#7bc25a","#4f9a37","#3b7a29"],lgreen:["#9ad97a","#6cb84f","#52963c"],red:["#e0605a","#bd4540","#94332f"],stone:["#9a9da4","#7b7e86","#5f6269"],indigo:["#5b5fc7","#4547a0","#34367d"],cyan:["#4fc3c9","#35a0a6","#277c82"],skin:["#e8b98f","#c89268","#a8744f"],wood:["#c08a4f","#9a6b38","#7a5129"]},HM=[[36.5,62.25,114.5,101.25],[56,52.5,134,91.5],[75.5,42.75,153.5,81.75],[114.5,42.75,36.5,81.75],[134,52.5,56,91.5],[153.5,62.25,75.5,101.25]],VM={cube:[[95,48,"lgreen"]]};var GM=Qs('<line stroke="#3b5c3a"></line>'),WM=Qs('<g stroke-width="1.6" stroke-linecap="round"><line x1="95" y1="72" x2="152" y2="100" stroke="#e5675f"></line><line x1="95" y1="72" x2="38" y2="100" stroke="#5aa0ff"></line><line x1="95" y1="72" x2="95" y2="10" stroke="#6fd05c"></line></g>'),XM=Qs('<g><polygon points="0,0 17.3,10 0,20 -17.3,10"></polygon><polygon points="-17.3,10 0,20 0,40 -17.3,30"></polygon><polygon points="0,20 17.3,10 17.3,30 0,40"></polygon></g>'),qM=Qs('<svg viewBox="0 0 190 112" preserveAspectRatio="xMidYMid slice" aria-hidden="true" class="svelte-d3xlci"><polygon points="95,33 173,72 95,111 17,72" fill="#263f29" stroke="#3b5c3a"></polygon><!><!><g stroke="rgba(0,0,0,0.25)" stroke-linejoin="round"></g></svg>');function YM(n,t){ds(t,!0);let e=ks(t,"axes",3,!1);var i=qM(),r=Bt(ne(i));is(r,17,()=>HM,gl,(l,c)=>{var u=cr(()=>nl(rt(c),4));let h=()=>rt(u)[0],d=()=>rt(u)[1],m=()=>rt(u)[2],_=()=>rt(u)[3];var g=GM();We(()=>{Ce(g,"x1",h()),Ce(g,"y1",d()),Ce(g,"x2",m()),Ce(g,"y2",_())}),Ee(l,g)});var s=Bt(r);{var a=l=>{var c=WM();Ee(l,c)};Ni(s,l=>{e()&&l(a)})}var o=Bt(s);is(o,21,()=>t.cubes,gl,(l,c)=>{var u=cr(()=>nl(rt(c),3));let h=()=>rt(u)[0],d=()=>rt(u)[1],m=()=>rt(u)[2];var _=XM(),g=ne(_),p=Bt(g),f=Bt(p);We(()=>{Ce(_,"transform",`translate(${h()??""} ${d()??""}) scale(0.8)`),Ce(g,"fill",el[m()][0]),Ce(p,"fill",el[m()][1]),Ce(f,"fill",el[m()][2])}),Ee(l,_)}),Ee(n,i),ps()}var jM=Qe('<button type="button" class="scrim svelte-12ovf1o" aria-label="Close menu"></button> <div class="menu svelte-12ovf1o"><button type="button" class="svelte-12ovf1o">Rename</button> <button type="button"> </button></div>',1),ZM=Qe('<div class="card svelte-12ovf1o"><button type="button" class="open svelte-12ovf1o"><span class="thumb svelte-12ovf1o"><!></span> <span class="info svelte-12ovf1o"><span class="name svelte-12ovf1o"> </span> <span class="meta svelte-12ovf1o"> </span></span></button> <button type="button" class="more svelte-12ovf1o"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.7"></circle><circle cx="12" cy="12" r="1.7"></circle><circle cx="12" cy="19" r="1.7"></circle></svg></button> <!></div>'),KM=Qe('<p class="note error svelte-12ovf1o"> </p>'),$M=Qe('<p class="note svelte-12ovf1o">No projects yet. Tap New Project to create one.</p>'),JM=Qe('<div class="screen svelte-12ovf1o"><header class="svelte-12ovf1o"><div class="brand svelte-12ovf1o"><img alt="" class="svelte-12ovf1o"/> <span>MineMotion</span></div> <button type="button" class="icon svelte-12ovf1o" aria-label="Settings"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></button></header> <main class="svelte-12ovf1o"><div class="title svelte-12ovf1o"><h1 class="svelte-12ovf1o">Projects</h1> <button type="button" class="sort svelte-12ovf1o">Recent <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button></div> <div class="grid svelte-12ovf1o"></div> <!></main> <footer class="svelte-12ovf1o"><div class="path svelte-12ovf1o"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg> <span class="mono svelte-12ovf1o">Documents/MineMotion/projects</span> <span aria-hidden="true">·</span> <span> </span></div> <button type="button" class="fab svelte-12ovf1o"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg> New Project</button></footer> <!></div>');function QM(n,t){ds(t,!0);let e=_e(Li([])),i=_e(null),r=_e(null),s=_e(!1),a=_e("");const o=async()=>Qt(e,await Or.list(),!0),l=N=>{const P=Math.floor((Date.now()-N)/6e4);return P<1?"Edited just now":P<60?`Edited ${P} min ago`:P<1440?`Edited ${Math.floor(P/60)} h ago`:`Edited ${new Date(N).toLocaleDateString("en",{month:"short",day:"numeric"})}`},c=N=>{Qt(r,rt(r)===N?null:N,!0),Qt(s,!1)},u=async N=>{rt(i).project?await Or.rename(rt(i).project.id,N):await Or.create(N),Qt(i,null),await o()},h=async N=>{if(!rt(s))return Qt(s,!0);await Or.remove(N.id),Qt(r,null),await o()};lf(async()=>{try{await Or.init(),await o()}catch(N){Qt(a,N.message,!0)}});var d=JM(),m=ne(d),_=ne(m),g=ne(_),p=Bt(m,2),f=Bt(ne(p),2);is(f,21,()=>rt(e),N=>N.id,(N,P)=>{var k=ZM(),q=ne(k),G=ne(q),J=ne(G);YM(J,{get cubes(){return VM.cube},axes:!0});var W=Bt(G,2),nt=ne(W),ut=wn(nt,!0),St=Bt(nt,2),zt=wn(St,!0),ee=Bt(q,2),Y=Bt(ee,2);{var tt=dt=>{var st=jM(),yt=Ya(st),Ct=Bt(yt,2),Nt=ne(Ct),le=Bt(Nt,2);let Vt;var me=wn(le,!0);We(()=>{Vt=Za(le,1,"svelte-12ovf1o",null,Vt,{danger:rt(s)}),Gn(me,rt(s)?"Tap again to delete":"Delete")}),Le("click",yt,()=>Qt(r,null)),Le("click",Nt,()=>(Qt(i,{project:rt(P)},!0),Qt(r,null))),Le("click",le,()=>h(rt(P))),Ee(dt,st)};Ni(Y,dt=>{rt(r)===rt(P).id&&dt(tt)})}We(dt=>{Gn(ut,rt(P).name),Gn(zt,dt),Ce(ee,"aria-label",`More options for ${rt(P).name??""}`)},[()=>l(rt(P).modified)]),Le("click",q,()=>t.onopen(rt(P))),Le("click",ee,()=>c(rt(P).id)),Ee(N,k)});var b=Bt(f,2);{var T=N=>{var P=KM(),k=wn(P,!0);We(()=>Gn(k,rt(a))),Ee(N,P)},E=N=>{var P=$M();Ee(N,P)};Ni(b,N=>{rt(a)?N(T):rt(e).length||N(E,1)})}var F=Bt(p,2),R=ne(F),w=Bt(ne(R),6),C=wn(w),S=Bt(R,2),x=Bt(F,2);{var A=N=>{{let P=cr(()=>rt(i).project?"Rename project":"New project"),k=cr(()=>rt(i).project?"Rename":"Create"),q=cr(()=>{var G;return(G=rt(i).project)==null?void 0:G.name});kM(N,{get title(){return rt(P)},get action(){return rt(k)},get value(){return rt(q)},onsubmit:u,oncancel:()=>Qt(i,null)})}};Ni(x,N=>{rt(i)&&N(A)})}We(()=>{Ce(g,"src",OM),Gn(C,`${rt(e).length??""} projects`)}),Le("click",S,()=>Qt(i,{},!0)),Ee(n,d),ps()}so(["click"]);function tS(n){let t=_e(null);var e=fp(),i=Ya(e);{var r=a=>{FM(a,{get project(){return rt(t)},onback:()=>Qt(t,null)})},s=a=>{QM(a,{onopen:o=>Qt(t,o,!0)})};Ni(i,a=>{rt(t)?a(r):a(s,-1)})}Ee(n,e)}Mp(tS,{target:document.getElementById("app")});export{Ja as E,uf as W,Xp as b};
