var di=Object.defineProperty;var i=(r,e)=>di(r,"name",{value:e,configurable:!0});import{c as q,e as L,g as w,f as x,o as Gr,t as Wr,i as pi,h as nt,j as it,_ as b,k as ot,l as gi,m as st,n as vt,p as S,q as D,r as vr,s as ur,u as Or,v as $i,x as ut,y as k,z as Hr,A as yi,B as Vr,C as Yr,D as N,E as hi,F as lt,G as bi,H as J,I as Xa,J as Za,K as Si,L as mi,M as zr,N as K,O as rn,P as ft,Q as Pr,R as lr,S as Ii,T as Ei,U as Oi,V as Pi,W as Ti,X as en,Y as qr,Z as fr,$ as Ri,a0 as Jr,a1 as wi,a2 as xi,a3 as Ci,a4 as ct,a5 as ji,a6 as Ni,a7 as Di,a8 as Ai,a9 as tn,aa as _i,ab as Li,a as an,ac as nn,ad as Mi,ae as on,af as Bi,ag as Ui,ah as sn,ai as vn,aj as Fi,ak as ki,al as Ki,am as Gi,an as Wi,ao as Hi,w as un,ap as Vi,d as Yi}from"./es.array.from-ca2ad2a2.js";import{c as _t}from"./es.object.get-own-property-descriptor-2dd71c36.js";var Lt=q,zi=L,qi=w,Ji=x,fe=Gr,Qi=nt,Xi=it,Zi=Wr,ro=pi,Q=Object.assign,Mt=Object.defineProperty,eo=zi([].concat),to=!Q||Ji(function(){if(Lt&&Q({b:1},Q(Mt({},"a",{enumerable:!0,get:function(){Mt(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var r={},e={},t=Symbol(),a="abcdefghijklmnopqrst";return r[t]=7,a.split("").forEach(function(n){e[n]=n}),Q({},r)[t]!=7||fe(Q({},e)).join("")!=a})?i(function(e,t){for(var a=Zi(e),n=arguments.length,o=1,u=Qi.f,c=Xi.f;n>o;)for(var f=ro(arguments[o++]),v=u?eo(fe(f),u(f)):fe(f),s=v.length,d=0,p;s>d;)p=v[d++],(!Lt||qi(c,f,p))&&(a[p]=f[p]);return a},"assign"):Q,ao=b,Bt=to;ao({target:"Object",stat:!0,arity:2,forced:Object.assign!==Bt},{assign:Bt});var no=q,ln=L,io=Gr,oo=ot,so=it.f,vo=ln(so),uo=ln([].push),Ut=i(function(r){return function(e){for(var t=oo(e),a=io(t),n=a.length,o=0,u=[],c;n>o;)c=a[o++],(!no||vo(t,c))&&uo(u,r?[c,t[c]]:t[c]);return u}},"createMethod"),lo={entries:Ut(!0),values:Ut(!1)},fo=b,co=st.filter,po=gi,go=po("filter");fo({target:"Array",proto:!0,forced:!go},{filter:i(function(e){return co(this,e,arguments.length>1?arguments[1]:void 0)},"filter")});var $o=b,yo=Wr,fn=Gr,ho=x,bo=ho(function(){fn(1)});$o({target:"Object",stat:!0,forced:bo},{keys:i(function(e){return fn(yo(e))},"keys")});var So=b,mo=lo.values;So({target:"Object",stat:!0},{values:i(function(e){return mo(e)},"values")});var Io=vt,Eo=S,Qr=Io(Eo.process)=="process",Oo=vr,Po=ur,To=D,Ro=q,Ft=To("species"),cn=i(function(r){var e=Oo(r),t=Po.f;Ro&&e&&!e[Ft]&&t(e,Ft,{configurable:!0,get:function(){return this}})},"setSpecies$2"),wo=Or,xo=TypeError,dt=i(function(r,e){if(wo(e,r))return r;throw xo("Incorrect invocation")},"anInstance$3"),Co=$i,jo=ut,No=TypeError,Do=i(function(r){if(Co(r))return r;throw No(jo(r)+" is not a constructor")},"aConstructor$1"),kt=k,Ao=Do,_o=Hr,Lo=D,Mo=Lo("species"),Bo=i(function(r,e){var t=kt(r).constructor,a;return t===void 0||_o(a=kt(t)[Mo])?e:Ao(a)},"speciesConstructor$1"),Uo=yi,dn=Function.prototype,Kt=dn.apply,Gt=dn.call,Xr=typeof Reflect=="object"&&Reflect.apply||(Uo?Gt.bind(Kt):function(){return Gt.apply(Kt,arguments)}),Fo=TypeError,pn=i(function(r,e){if(r<e)throw Fo("Not enough arguments");return r},"validateArgumentsLength$2"),ko=Vr,gn=/(?:ipad|iphone|ipod).*applewebkit/i.test(ko),T=S,Ko=Xr,Go=Yr,Wt=N,Wo=J,Ho=x,Ht=hi,Vo=lt,Vt=bi,Yo=pn,zo=gn,qo=Qr,Fe=T.setImmediate,ke=T.clearImmediate,Jo=T.process,ce=T.Dispatch,Qo=T.Function,Yt=T.MessageChannel,Xo=T.String,de=0,hr={},zt="onreadystatechange",mr,G,pe,ge;try{mr=T.location}catch{}var pt=i(function(r){if(Wo(hr,r)){var e=hr[r];delete hr[r],e()}},"run"),$e=i(function(r){return function(){pt(r)}},"runner"),qt=i(function(r){pt(r.data)},"listener"),Jt=i(function(r){T.postMessage(Xo(r),mr.protocol+"//"+mr.host)},"post");(!Fe||!ke)&&(Fe=i(function(e){Yo(arguments.length,1);var t=Wt(e)?e:Qo(e),a=Vo(arguments,1);return hr[++de]=function(){Ko(t,void 0,a)},G(de),de},"setImmediate"),ke=i(function(e){delete hr[e]},"clearImmediate"),qo?G=i(function(r){Jo.nextTick($e(r))},"defer"):ce&&ce.now?G=i(function(r){ce.now($e(r))},"defer"):Yt&&!zo?(pe=new Yt,ge=pe.port2,pe.port1.onmessage=qt,G=Go(ge.postMessage,ge)):T.addEventListener&&Wt(T.postMessage)&&!T.importScripts&&mr&&mr.protocol!=="file:"&&!Ho(Jt)?(G=Jt,T.addEventListener("message",qt,!1)):zt in Vt("script")?G=i(function(r){Ht.appendChild(Vt("script"))[zt]=function(){Ht.removeChild(this),pt(r)}},"defer"):G=i(function(r){setTimeout($e(r),0)},"defer"));var Zr={set:Fe,clear:ke},Zo=Vr,rs=S,es=/ipad|iphone|ipod/i.test(Zo)&&rs.Pebble!==void 0,ts=Vr,as=/web0s(?!.*chrome)/i.test(ts),z=S,Qt=Yr,ns=Xa.f,ye=Zr.set,is=gn,os=es,ss=as,he=Qr,Xt=z.MutationObserver||z.WebKitMutationObserver,Zt=z.document,ra=z.process,xr=z.Promise,ea=ns(z,"queueMicrotask"),$n=ea&&ea.value,pr,H,br,rr,be,Se,Cr,ta;$n||(pr=i(function(){var r,e;for(he&&(r=ra.domain)&&r.exit();H;){e=H.fn,H=H.next;try{e()}catch(t){throw H?rr():br=void 0,t}}br=void 0,r&&r.enter()},"flush"),!is&&!he&&!ss&&Xt&&Zt?(be=!0,Se=Zt.createTextNode(""),new Xt(pr).observe(Se,{characterData:!0}),rr=i(function(){Se.data=be=!be},"notify$1")):!os&&xr&&xr.resolve?(Cr=xr.resolve(void 0),Cr.constructor=xr,ta=Qt(Cr.then,Cr),rr=i(function(){ta(pr)},"notify$1")):he?rr=i(function(){ra.nextTick(pr)},"notify$1"):(ye=Qt(ye,z),rr=i(function(){ye(pr)},"notify$1")));var vs=$n||function(r){var e={fn:r,next:void 0};br&&(br.next=e),H||(H=e,rr()),br=e},us=S,ls=i(function(r,e){var t=us.console;t&&t.error&&(arguments.length==1?t.error(r):t.error(r,e))},"hostReportErrors$1"),gt=i(function(r){try{return{error:!1,value:r()}}catch(e){return{error:!0,value:e}}},"perform$3"),yn=i(function(){this.head=null,this.tail=null},"Queue$1");yn.prototype={add:function(r){var e={item:r,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var r=this.head;if(r)return this.head=r.next,this.tail===r&&(this.tail=null),r.item}};var fs=yn,cs=S,re=cs.Promise,hn=typeof Deno=="object"&&Deno&&typeof Deno.version=="object",ds=hn,ps=Qr,gs=!ds&&!ps&&typeof window=="object"&&typeof document=="object",$s=S,Sr=re,ys=N,hs=Za,bs=Si,Ss=D,ms=gs,Is=hn,me=mi;Sr&&Sr.prototype;var Es=Ss("species"),Ke=!1,bn=ys($s.PromiseRejectionEvent),Os=hs("Promise",function(){var r=bs(Sr),e=r!==String(Sr);if(!e&&me===66)return!0;if(!me||me<51||!/native code/.test(r)){var t=new Sr(function(o){o(1)}),a=i(function(o){o(function(){},function(){})},"FakePromise"),n=t.constructor={};if(n[Es]=a,Ke=t.then(function(){})instanceof a,!Ke)return!0}return!e&&(ms||Is)&&!bn}),Tr={CONSTRUCTOR:Os,REJECTION_EVENT:bn,SUBCLASSING:Ke},cr={},aa=zr,Ps=TypeError,Ts=i(function(r){var e,t;this.promise=new r(function(a,n){if(e!==void 0||t!==void 0)throw Ps("Bad Promise constructor");e=a,t=n}),this.resolve=aa(e),this.reject=aa(t)},"PromiseCapability");cr.f=function(r){return new Ts(r)};var Rs=b,Fr=Qr,F=S,ir=w,na=K,ia=rn,ws=ft,xs=cn,Cs=zr,Br=N,js=lr,Ns=dt,Ds=Bo,Sn=Zr.set,$t=vs,As=ls,_s=gt,Ls=fs,mn=Pr,kr=re,yt=Tr,In=cr,ee="Promise",En=yt.CONSTRUCTOR,Ms=yt.REJECTION_EVENT,Bs=yt.SUBCLASSING,Ie=mn.getterFor(ee),Us=mn.set,er=kr&&kr.prototype,V=kr,jr=er,On=F.TypeError,Ge=F.document,ht=F.process,We=In.f,Fs=We,ks=!!(Ge&&Ge.createEvent&&F.dispatchEvent),Pn="unhandledrejection",Ks="rejectionhandled",oa=0,Tn=1,Gs=2,bt=1,Rn=2,Nr,sa,Ws,va,wn=i(function(r){var e;return js(r)&&Br(e=r.then)?e:!1},"isThenable"),xn=i(function(r,e){var t=e.value,a=e.state==Tn,n=a?r.ok:r.fail,o=r.resolve,u=r.reject,c=r.domain,f,v,s;try{n?(a||(e.rejection===Rn&&Vs(e),e.rejection=bt),n===!0?f=t:(c&&c.enter(),f=n(t),c&&(c.exit(),s=!0)),f===r.promise?u(On("Promise-chain cycle")):(v=wn(f))?ir(v,f,o,u):o(f)):u(t)}catch(d){c&&!s&&c.exit(),u(d)}},"callReaction"),Cn=i(function(r,e){r.notified||(r.notified=!0,$t(function(){for(var t=r.reactions,a;a=t.get();)xn(a,r);r.notified=!1,e&&!r.rejection&&Hs(r)}))},"notify"),jn=i(function(r,e,t){var a,n;ks?(a=Ge.createEvent("Event"),a.promise=e,a.reason=t,a.initEvent(r,!1,!0),F.dispatchEvent(a)):a={promise:e,reason:t},!Ms&&(n=F["on"+r])?n(a):r===Pn&&As("Unhandled promise rejection",t)},"dispatchEvent"),Hs=i(function(r){ir(Sn,F,function(){var e=r.facade,t=r.value,a=ua(r),n;if(a&&(n=_s(function(){Fr?ht.emit("unhandledRejection",t,e):jn(Pn,e,t)}),r.rejection=Fr||ua(r)?Rn:bt,n.error))throw n.value})},"onUnhandled"),ua=i(function(r){return r.rejection!==bt&&!r.parent},"isUnhandled"),Vs=i(function(r){ir(Sn,F,function(){var e=r.facade;Fr?ht.emit("rejectionHandled",e):jn(Ks,e,r.value)})},"onHandleUnhandled"),tr=i(function(r,e,t){return function(a){r(e,a,t)}},"bind$2"),nr=i(function(r,e,t){r.done||(r.done=!0,t&&(r=t),r.value=e,r.state=Gs,Cn(r,!0))},"internalReject"),He=i(function(r,e,t){if(!r.done){r.done=!0,t&&(r=t);try{if(r.facade===e)throw On("Promise can't be resolved itself");var a=wn(e);a?$t(function(){var n={done:!1};try{ir(a,e,tr(He,n,r),tr(nr,n,r))}catch(o){nr(n,o,r)}}):(r.value=e,r.state=Tn,Cn(r,!1))}catch(n){nr({done:!1},n,r)}}},"internalResolve");if(En&&(V=i(function(e){Ns(this,jr),Cs(e),ir(Nr,this);var t=Ie(this);try{e(tr(He,t),tr(nr,t))}catch(a){nr(t,a)}},"Promise"),jr=V.prototype,Nr=i(function(e){Us(this,{type:ee,done:!1,notified:!1,parent:!1,reactions:new Ls,rejection:!1,state:oa,value:void 0})},"Promise"),Nr.prototype=na(jr,"then",i(function(e,t){var a=Ie(this),n=We(Ds(this,V));return a.parent=!0,n.ok=Br(e)?e:!0,n.fail=Br(t)&&t,n.domain=Fr?ht.domain:void 0,a.state==oa?a.reactions.add(n):$t(function(){xn(n,a)}),n.promise},"then")),sa=i(function(){var r=new Nr,e=Ie(r);this.promise=r,this.resolve=tr(He,e),this.reject=tr(nr,e)},"OwnPromiseCapability"),In.f=We=i(function(r){return r===V||r===Ws?new sa(r):Fs(r)},"newPromiseCapability$1"),Br(kr)&&er!==Object.prototype)){va=er.then,Bs||na(er,"then",i(function(e,t){var a=this;return new V(function(n,o){ir(va,a,n,o)}).then(e,t)},"then"),{unsafe:!0});try{delete er.constructor}catch{}ia&&ia(er,jr)}Rs({global:!0,constructor:!0,wrap:!0,forced:En},{Promise:V});ws(V,ee,!1);xs(ee);var Ys=Yr,zs=w,qs=k,Js=ut,Qs=Ii,Xs=Ei,la=Or,Zs=Oi,rv=Pi,fa=Ti,ev=TypeError,Ur=i(function(r,e){this.stopped=r,this.result=e},"Result"),ca=Ur.prototype,te=i(function(r,e,t){var a=t&&t.that,n=!!(t&&t.AS_ENTRIES),o=!!(t&&t.IS_RECORD),u=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),f=Ys(e,a),v,s,d,p,l,y,h,O=i(function(g){return v&&fa(v,"normal",g),new Ur(!0,g)},"stop"),$=i(function(g){return n?(qs(g),c?f(g[0],g[1],O):f(g[0],g[1])):c?f(g,O):f(g)},"callFn");if(o)v=r.iterator;else if(u)v=r;else{if(s=rv(r),!s)throw ev(Js(r)+" is not iterable");if(Qs(s)){for(d=0,p=Xs(r);p>d;d++)if(l=$(r[d]),l&&la(ca,l))return l;return new Ur(!1)}v=Zs(r,s)}for(y=o?r.next:v.next;!(h=zs(y,v)).done;){try{l=$(h.value)}catch(g){fa(v,"throw",g)}if(typeof l=="object"&&l&&la(ca,l))return l}return new Ur(!1)},"iterate$4"),tv=re,av=en,nv=Tr.CONSTRUCTOR,Nn=nv||!av(function(r){tv.all(r).then(void 0,function(){})}),iv=b,ov=w,sv=zr,vv=cr,uv=gt,lv=te,fv=Nn;iv({target:"Promise",stat:!0,forced:fv},{all:i(function(e){var t=this,a=vv.f(t),n=a.resolve,o=a.reject,u=uv(function(){var c=sv(t.resolve),f=[],v=0,s=1;lv(e,function(d){var p=v++,l=!1;s++,ov(c,t,d).then(function(y){l||(l=!0,f[p]=y,--s||n(f))},o)}),--s||n(f)});return u.error&&o(u.value),a.promise},"all")});var cv=b,dv=Tr.CONSTRUCTOR,Ve=re,pv=vr,gv=N,$v=K,da=Ve&&Ve.prototype;cv({target:"Promise",proto:!0,forced:dv,real:!0},{catch:function(r){return this.then(void 0,r)}});if(gv(Ve)){var pa=pv("Promise").prototype.catch;da.catch!==pa&&$v(da,"catch",pa,{unsafe:!0})}var yv=b,hv=w,bv=zr,Sv=cr,mv=gt,Iv=te,Ev=Nn;yv({target:"Promise",stat:!0,forced:Ev},{race:i(function(e){var t=this,a=Sv.f(t),n=a.reject,o=mv(function(){var u=bv(t.resolve);Iv(e,function(c){hv(u,t,c).then(a.resolve,n)})});return o.error&&n(o.value),a.promise},"race")});var Ov=b,Pv=w,Tv=cr,Rv=Tr.CONSTRUCTOR;Ov({target:"Promise",stat:!0,forced:Rv},{reject:i(function(e){var t=Tv.f(this);return Pv(t.reject,void 0,e),t.promise},"reject")});var wv=k,xv=lr,Cv=cr,jv=i(function(r,e){if(wv(r),xv(e)&&e.constructor===r)return e;var t=Cv.f(r),a=t.resolve;return a(e),t.promise},"promiseResolve$1"),Nv=b,Dv=vr,Av=Tr.CONSTRUCTOR,_v=jv;Dv("Promise");Nv({target:"Promise",stat:!0,forced:Av},{resolve:i(function(e){return _v(this,e)},"resolve")});var St={},Lv=D;St.f=Lv;var Mv=S,Bv=Mv,ga=Bv,Uv=J,Fv=St,kv=ur.f,Dn=i(function(r){var e=ga.Symbol||(ga.Symbol={});Uv(e,r)||kv(e,r,{value:Fv.f(r)})},"wellKnownSymbolDefine"),Kv=w,Gv=vr,Wv=D,Hv=K,Vv=i(function(){var r=Gv("Symbol"),e=r&&r.prototype,t=e&&e.valueOf,a=Wv("toPrimitive");e&&!e[a]&&Hv(e,a,function(n){return Kv(t,this)},{arity:1})},"symbolDefineToPrimitive"),ae=b,mt=S,It=w,Yv=L,or=q,sr=qr,zv=x,m=J,qv=Or,Ye=k,ne=ot,Et=Ni,Jv=fr,ze=Ci,Ir=ct,An=Gr,Qv=Ri,_n=Di,Xv=nt,Ln=Xa,Mn=ur,Zv=Ai,Bn=it,Ee=K,Ot=Jr,ru=wi,Un=ji,$a=xi,eu=D,tu=St,au=Dn,nu=Vv,iu=ft,Fn=Pr,ie=st.forEach,P=ru("hidden"),oe="Symbol",Er="prototype",ou=Fn.set,ya=Fn.getterFor(oe),j=Object[Er],Y=mt.Symbol,$r=Y&&Y[Er],su=mt.TypeError,Oe=mt.QObject,kn=Ln.f,B=Mn.f,Kn=_n.f,vu=Bn.f,Gn=Yv([].push),_=Ot("symbols"),Rr=Ot("op-symbols"),uu=Ot("wks"),qe=!Oe||!Oe[Er]||!Oe[Er].findChild,Je=or&&zv(function(){return Ir(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a!=7})?function(r,e,t){var a=kn(j,e);a&&delete j[e],B(r,e,t),a&&r!==j&&B(j,e,a)}:B,Pe=i(function(r,e){var t=_[r]=Ir($r);return ou(t,{type:oe,tag:r,description:e}),or||(t.description=e),t},"wrap"),se=i(function(e,t,a){e===j&&se(Rr,t,a),Ye(e);var n=Et(t);return Ye(a),m(_,n)?(a.enumerable?(m(e,P)&&e[P][n]&&(e[P][n]=!1),a=Ir(a,{enumerable:ze(0,!1)})):(m(e,P)||B(e,P,ze(1,{})),e[P][n]=!0),Je(e,n,a)):B(e,n,a)},"defineProperty"),Pt=i(function(e,t){Ye(e);var a=ne(t),n=An(a).concat(Vn(a));return ie(n,function(o){(!or||It(Qe,a,o))&&se(e,o,a[o])}),e},"defineProperties"),lu=i(function(e,t){return t===void 0?Ir(e):Pt(Ir(e),t)},"create"),Qe=i(function(e){var t=Et(e),a=It(vu,this,t);return this===j&&m(_,t)&&!m(Rr,t)?!1:a||!m(this,t)||!m(_,t)||m(this,P)&&this[P][t]?a:!0},"propertyIsEnumerable"),Wn=i(function(e,t){var a=ne(e),n=Et(t);if(!(a===j&&m(_,n)&&!m(Rr,n))){var o=kn(a,n);return o&&m(_,n)&&!(m(a,P)&&a[P][n])&&(o.enumerable=!0),o}},"getOwnPropertyDescriptor"),Hn=i(function(e){var t=Kn(ne(e)),a=[];return ie(t,function(n){!m(_,n)&&!m(Un,n)&&Gn(a,n)}),a},"getOwnPropertyNames"),Vn=i(function(r){var e=r===j,t=Kn(e?Rr:ne(r)),a=[];return ie(t,function(n){m(_,n)&&(!e||m(j,n))&&Gn(a,_[n])}),a},"$getOwnPropertySymbols");sr||(Y=i(function(){if(qv($r,this))throw su("Symbol is not a constructor");var e=!arguments.length||arguments[0]===void 0?void 0:Jv(arguments[0]),t=$a(e),a=i(function(n){this===j&&It(a,Rr,n),m(this,P)&&m(this[P],t)&&(this[P][t]=!1),Je(this,t,ze(1,n))},"setter");return or&&qe&&Je(j,t,{configurable:!0,set:a}),Pe(t,e)},"Symbol"),$r=Y[Er],Ee($r,"toString",i(function(){return ya(this).tag},"toString")),Ee(Y,"withoutSetter",function(r){return Pe($a(r),r)}),Bn.f=Qe,Mn.f=se,Zv.f=Pt,Ln.f=Wn,Qv.f=_n.f=Hn,Xv.f=Vn,tu.f=function(r){return Pe(eu(r),r)},or&&(B($r,"description",{configurable:!0,get:i(function(){return ya(this).description},"description")}),Ee(j,"propertyIsEnumerable",Qe,{unsafe:!0})));ae({global:!0,constructor:!0,wrap:!0,forced:!sr,sham:!sr},{Symbol:Y});ie(An(uu),function(r){au(r)});ae({target:oe,stat:!0,forced:!sr},{useSetter:function(){qe=!0},useSimple:function(){qe=!1}});ae({target:"Object",stat:!0,forced:!sr,sham:!or},{create:lu,defineProperty:se,defineProperties:Pt,getOwnPropertyDescriptor:Wn});ae({target:"Object",stat:!0,forced:!sr},{getOwnPropertyNames:Hn});nu();iu(Y,oe);Un[P]=!0;var fu=qr,Yn=fu&&!!Symbol.for&&!!Symbol.keyFor,cu=b,du=vr,pu=J,gu=fr,zn=Jr,$u=Yn,Te=zn("string-to-symbol-registry"),yu=zn("symbol-to-string-registry");cu({target:"Symbol",stat:!0,forced:!$u},{for:function(r){var e=gu(r);if(pu(Te,e))return Te[e];var t=du("Symbol")(e);return Te[e]=t,yu[t]=e,t}});var hu=b,bu=J,Su=tn,mu=ut,Iu=Jr,Eu=Yn,ha=Iu("symbol-to-string-registry");hu({target:"Symbol",stat:!0,forced:!Eu},{keyFor:i(function(e){if(!Su(e))throw TypeError(mu(e)+" is not a symbol");if(bu(ha,e))return ha[e]},"keyFor")});var Ou=b,qn=vr,Jn=Xr,Pu=w,wr=L,Qn=x,Tu=_i,Ru=N,wu=lr,ba=tn,Xn=lt,xu=qr,U=qn("JSON","stringify"),Dr=wr(/./.exec),Sa=wr("".charAt),Cu=wr("".charCodeAt),ju=wr("".replace),Nu=wr(1 .toString),Du=/[\uD800-\uDFFF]/g,ma=/^[\uD800-\uDBFF]$/,Ia=/^[\uDC00-\uDFFF]$/,Ea=!xu||Qn(function(){var r=qn("Symbol")();return U([r])!="[null]"||U({a:r})!="{}"||U(Object(r))!="{}"}),Oa=Qn(function(){return U("\uDF06\uD834")!=='"\\udf06\\ud834"'||U("\uDEAD")!=='"\\udead"'}),Au=i(function(r,e){var t=Xn(arguments),a=e;if(!(!wu(e)&&r===void 0||ba(r)))return Tu(e)||(e=i(function(n,o){if(Ru(a)&&(o=Pu(a,this,n,o)),!ba(o))return o},"replacer")),t[1]=e,Jn(U,null,t)},"stringifyWithSymbolsFix"),_u=i(function(r,e,t){var a=Sa(t,e-1),n=Sa(t,e+1);return Dr(ma,r)&&!Dr(Ia,n)||Dr(Ia,r)&&!Dr(ma,a)?"\\u"+Nu(Cu(r,0),16):r},"fixIllFormed");U&&Ou({target:"JSON",stat:!0,arity:3,forced:Ea||Oa},{stringify:i(function(e,t,a){var n=Xn(arguments),o=Jn(Ea?Au:U,null,n);return Oa&&typeof o=="string"?ju(o,Du,_u):o},"stringify")});var Lu=b,Mu=qr,Bu=x,Zn=nt,Uu=Wr,Fu=!Mu||Bu(function(){Zn.f(1)});Lu({target:"Object",stat:!0,forced:Fu},{getOwnPropertySymbols:i(function(e){var t=Zn.f;return t?t(Uu(e)):[]},"getOwnPropertySymbols")});var ku=b,Ku=q,Gu=S,Ar=L,Wu=J,Hu=N,Vu=Or,Yu=fr,zu=ur.f,qu=Li,A=Gu.Symbol,W=A&&A.prototype;if(Ku&&Hu(A)&&(!("description"in W)||A().description!==void 0)){var Pa={},_r=i(function(){var e=arguments.length<1||arguments[0]===void 0?void 0:Yu(arguments[0]),t=Vu(W,this)?new A(e):e===void 0?A():A(e);return e===""&&(Pa[t]=!0),t},"Symbol");qu(_r,A),_r.prototype=W,W.constructor=_r;var Ju=String(A("test"))=="Symbol(test)",Qu=Ar(W.valueOf),Xu=Ar(W.toString),Zu=/^Symbol\((.*)\)[^)]+$/,rl=Ar("".replace),el=Ar("".slice);zu(W,"description",{configurable:!0,get:i(function(){var e=Qu(this);if(Wu(Pa,e))return"";var t=Xu(e),a=Ju?el(t,7,-1):rl(t,Zu,"$1");return a===""?void 0:a},"description")}),ku({global:!0,constructor:!0,forced:!0},{Symbol:_r})}var tl=Dn;tl("iterator");var al=ot,Tt=an,Ta=Mi,ri=Pr,nl=ur.f,il=nn,Lr=on,ol=q,ei="Array Iterator",sl=ri.set,vl=ri.getterFor(ei),ul=il(Array,"Array",function(r,e){sl(this,{type:ei,target:al(r),index:0,kind:e})},function(){var r=vl(this),e=r.target,t=r.kind,a=r.index++;return!e||a>=e.length?(r.target=void 0,Lr(void 0,!0)):t=="keys"?Lr(a,!1):t=="values"?Lr(e[a],!1):Lr([a,e[a]],!1)},"values"),Ra=Ta.Arguments=Ta.Array;Tt("keys");Tt("values");Tt("entries");if(ol&&Ra.name!=="values")try{nl(Ra,"name",{value:"values"})}catch{}var wa=S,ti=Bi,ll=Ui,yr=ul,Re=sn,ai=D,we=ai("iterator"),xa=ai("toStringTag"),xe=yr.values,ni=i(function(r,e){if(r){if(r[we]!==xe)try{Re(r,we,xe)}catch{r[we]=xe}if(r[xa]||Re(r,xa,e),ti[e]){for(var t in yr)if(r[t]!==yr[t])try{Re(r,t,yr[t])}catch{r[t]=yr[t]}}}},"handlePrototype");for(var Ce in ti)ni(wa[Ce]&&wa[Ce].prototype,Ce);ni(ll,"DOMTokenList");var fl=k,ii=i(function(){var r=fl(this),e="";return r.hasIndices&&(e+="d"),r.global&&(e+="g"),r.ignoreCase&&(e+="i"),r.multiline&&(e+="m"),r.dotAll&&(e+="s"),r.unicode&&(e+="u"),r.unicodeSets&&(e+="v"),r.sticky&&(e+="y"),e},"regexpFlags$1"),Rt=x,cl=S,wt=cl.RegExp,xt=Rt(function(){var r=wt("a","y");return r.lastIndex=2,r.exec("abcd")!=null}),dl=xt||Rt(function(){return!wt("a","y").sticky}),pl=xt||Rt(function(){var r=wt("^r","gy");return r.lastIndex=2,r.exec("str")!=null}),gl={BROKEN_CARET:pl,MISSED_STICKY:dl,UNSUPPORTED_Y:xt},$l=x,yl=S,hl=yl.RegExp,bl=$l(function(){var r=hl(".","s");return!(r.dotAll&&r.exec(`
`)&&r.flags==="s")}),Sl=x,ml=S,Il=ml.RegExp,El=Sl(function(){var r=Il("(?<a>b)","g");return r.exec("b").groups.a!=="b"||"b".replace(r,"$<a>c")!=="bc"}),ar=w,ve=L,Ol=fr,Pl=ii,Tl=gl,Rl=Jr,wl=ct,xl=Pr.get,Cl=bl,jl=El,Nl=Rl("native-string-replace",String.prototype.replace),Kr=RegExp.prototype.exec,Xe=Kr,Dl=ve("".charAt),Al=ve("".indexOf),_l=ve("".replace),je=ve("".slice),Ze=function(){var r=/a/,e=/b*/g;return ar(Kr,r,"a"),ar(Kr,e,"a"),r.lastIndex!==0||e.lastIndex!==0}(),oi=Tl.BROKEN_CARET,rt=/()??/.exec("")[1]!==void 0,Ll=Ze||rt||oi||Cl||jl;Ll&&(Xe=i(function(e){var t=this,a=xl(t),n=Ol(e),o=a.raw,u,c,f,v,s,d,p;if(o)return o.lastIndex=t.lastIndex,u=ar(Xe,o,n),t.lastIndex=o.lastIndex,u;var l=a.groups,y=oi&&t.sticky,h=ar(Pl,t),O=t.source,$=0,g=n;if(y&&(h=_l(h,"y",""),Al(h,"g")===-1&&(h+="g"),g=je(n,t.lastIndex),t.lastIndex>0&&(!t.multiline||t.multiline&&Dl(n,t.lastIndex-1)!==`
`)&&(O="(?: "+O+")",g=" "+g,$++),c=new RegExp("^(?:"+O+")",h)),rt&&(c=new RegExp("^"+O+"$(?!\\s)",h)),Ze&&(f=t.lastIndex),v=ar(Kr,y?c:t,g),y?v?(v.input=je(v.input,$),v[0]=je(v[0],$),v.index=t.lastIndex,t.lastIndex+=v[0].length):t.lastIndex=0:Ze&&v&&(t.lastIndex=t.global?v.index+v[0].length:f),rt&&v&&v.length>1&&ar(Nl,v[0],c,function(){for(s=1;s<arguments.length-2;s++)arguments[s]===void 0&&(v[s]=void 0)}),v&&l)for(v.groups=d=wl(null),s=0;s<l.length;s++)p=l[s],d[p[0]]=v[p[1]];return v},"exec"));var Ct=Xe,Ml=b,Ca=Ct;Ml({target:"RegExp",proto:!0,forced:/./.exec!==Ca},{exec:Ca});var Bl=b,Ul=st.find,Fl=an,et="find",si=!0;et in[]&&Array(1)[et](function(){si=!1});Bl({target:"Array",proto:!0,forced:si},{find:i(function(e){return Ul(this,e,arguments.length>1?arguments[1]:void 0)},"find")});Fl(et);var kl=lr,Kl=vt,Gl=D,Wl=Gl("match"),Wc=i(function(r){var e;return kl(r)&&((e=r[Wl])!==void 0?!!e:Kl(r)=="RegExp")},"isRegexp"),Hl=N,Vl=lr,ja=rn,Yl=i(function(r,e,t){var a,n;return ja&&Hl(a=e.constructor)&&a!==t&&Vl(n=a.prototype)&&n!==t.prototype&&ja(r,n),r},"inheritIfRequired$1"),zl=b,ql=S,Jl=L,Na=Za,Ql=K,Xl=vn,Zl=te,rf=dt,ef=N,tf=Hr,Ne=lr,De=x,af=en,nf=ft,of=Yl,sf=i(function(r,e,t){var a=r.indexOf("Map")!==-1,n=r.indexOf("Weak")!==-1,o=a?"set":"add",u=ql[r],c=u&&u.prototype,f=u,v={},s=i(function($){var g=Jl(c[$]);Ql(c,$,$=="add"?i(function(E){return g(this,E===0?0:E),this},"add"):$=="delete"?function(I){return n&&!Ne(I)?!1:g(this,I===0?0:I)}:$=="get"?i(function(E){return n&&!Ne(E)?void 0:g(this,E===0?0:E)},"get"):$=="has"?i(function(E){return n&&!Ne(E)?!1:g(this,E===0?0:E)},"has"):i(function(E,dr){return g(this,E===0?0:E,dr),this},"set"))},"fixMethod"),d=Na(r,!ef(u)||!(n||c.forEach&&!De(function(){new u().entries().next()})));if(d)f=t.getConstructor(e,r,a,o),Xl.enable();else if(Na(r,!0)){var p=new f,l=p[o](n?{}:-0,1)!=p,y=De(function(){p.has(1)}),h=af(function($){new u($)}),O=!n&&De(function(){for(var $=new u,g=5;g--;)$[o](g,g);return!$.has(-0)});h||(f=e(function($,g){rf($,c);var I=of(new u,$,f);return tf(g)||Zl(g,I[o],{that:I,AS_ENTRIES:a}),I}),f.prototype=c,c.constructor=f),(y||O)&&(s("delete"),s("has"),a&&s("get")),(O||l)&&s(o),n&&c.clear&&delete c.clear}return v[r]=f,zl({global:!0,constructor:!0,forced:f!=u},v),nf(f,r),n||t.setStrong(f,r,a),f},"collection$1"),vf=K,uf=i(function(r,e,t){for(var a in e)vf(r,a,e[a],t);return r},"defineBuiltIns$1"),lf=ur.f,ff=ct,Da=uf,cf=Yr,df=dt,pf=Hr,gf=te,$f=nn,Mr=on,yf=cn,gr=q,Aa=vn.fastKey,vi=Pr,_a=vi.set,Ae=vi.getterFor,hf={getConstructor:function(r,e,t,a){var n=r(function(v,s){df(v,o),_a(v,{type:e,index:ff(null),first:void 0,last:void 0,size:0}),gr||(v.size=0),pf(s)||gf(s,v[a],{that:v,AS_ENTRIES:t})}),o=n.prototype,u=Ae(e),c=i(function(v,s,d){var p=u(v),l=f(v,s),y,h;return l?l.value=d:(p.last=l={index:h=Aa(s,!0),key:s,value:d,previous:y=p.last,next:void 0,removed:!1},p.first||(p.first=l),y&&(y.next=l),gr?p.size++:v.size++,h!=="F"&&(p.index[h]=l)),v},"define"),f=i(function(v,s){var d=u(v),p=Aa(s),l;if(p!=="F")return d.index[p];for(l=d.first;l;l=l.next)if(l.key==s)return l},"getEntry");return Da(o,{clear:i(function(){for(var s=this,d=u(s),p=d.index,l=d.first;l;)l.removed=!0,l.previous&&(l.previous=l.previous.next=void 0),delete p[l.index],l=l.next;d.first=d.last=void 0,gr?d.size=0:s.size=0},"clear"),delete:function(v){var s=this,d=u(s),p=f(s,v);if(p){var l=p.next,y=p.previous;delete d.index[p.index],p.removed=!0,y&&(y.next=l),l&&(l.previous=y),d.first==p&&(d.first=l),d.last==p&&(d.last=y),gr?d.size--:s.size--}return!!p},forEach:i(function(s){for(var d=u(this),p=cf(s,arguments.length>1?arguments[1]:void 0),l;l=l?l.next:d.first;)for(p(l.value,l.key,this);l&&l.removed;)l=l.previous},"forEach"),has:i(function(s){return!!f(this,s)},"has")}),Da(o,t?{get:i(function(s){var d=f(this,s);return d&&d.value},"get"),set:i(function(s,d){return c(this,s===0?0:s,d)},"set")}:{add:i(function(s){return c(this,s=s===0?0:s,s)},"add")}),gr&&lf(o,"size",{get:function(){return u(this).size}}),n},setStrong:function(r,e,t){var a=e+" Iterator",n=Ae(e),o=Ae(a);$f(r,e,function(u,c){_a(this,{type:a,target:u,state:n(u),kind:c,last:void 0})},function(){for(var u=o(this),c=u.kind,f=u.last;f&&f.removed;)f=f.previous;return!u.target||!(u.last=f=f?f.next:u.state.first)?(u.target=void 0,Mr(void 0,!0)):c=="keys"?Mr(f.key,!1):c=="values"?Mr(f.value,!1):Mr([f.key,f.value],!1)},t?"entries":"values",!t,!0),yf(e)}},bf=sf,Sf=hf;bf("Set",function(r){return i(function(){return r(this,arguments.length?arguments[0]:void 0)},"Set")},Sf);var La=Fi,Ma=K,mf=Ct,Ba=x,ui=D,If=sn,Ef=ui("species"),_e=RegExp.prototype,Of=i(function(r,e,t,a){var n=ui(r),o=!Ba(function(){var v={};return v[n]=function(){return 7},""[r](v)!=7}),u=o&&!Ba(function(){var v=!1,s=/a/;return r==="split"&&(s={},s.constructor={},s.constructor[Ef]=function(){return s},s.flags="",s[n]=/./[n]),s.exec=function(){return v=!0,null},s[n](""),!v});if(!o||!u||t){var c=La(/./[n]),f=e(n,""[r],function(v,s,d,p,l){var y=La(v),h=s.exec;return h===mf||h===_e.exec?o&&!l?{done:!0,value:c(s,d,p)}:{done:!0,value:y(d,s,p)}:{done:!1}});Ma(String.prototype,r,f[0]),Ma(_e,n,f[1])}a&&If(_e[n],"sham",!0)},"fixRegexpWellKnownSymbolLogic"),Pf=ki.charAt,Tf=i(function(r,e,t){return e+(t?Pf(r,e).length:1)},"advanceStringIndex$1"),jt=L,Rf=Wr,wf=Math.floor,Le=jt("".charAt),xf=jt("".replace),Me=jt("".slice),Cf=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,jf=/\$([$&'`]|\d{1,2})/g,Nf=i(function(r,e,t,a,n,o){var u=t+r.length,c=a.length,f=jf;return n!==void 0&&(n=Rf(n),f=Cf),xf(o,f,function(v,s){var d;switch(Le(s,0)){case"$":return"$";case"&":return r;case"`":return Me(e,0,t);case"'":return Me(e,u);case"<":d=n[Me(s,1,-1)];break;default:var p=+s;if(p===0)return v;if(p>c){var l=wf(p/10);return l===0?v:l<=c?a[l-1]===void 0?Le(s,1):a[l-1]+Le(s,1):v}d=a[p-1]}return d===void 0?"":d})},"getSubstitution$1"),Ua=w,Df=k,Af=N,_f=vt,Lf=Ct,Mf=TypeError,Bf=i(function(r,e){var t=r.exec;if(Af(t)){var a=Ua(t,r,e);return a!==null&&Df(a),a}if(_f(r)==="RegExp")return Ua(Lf,r,e);throw Mf("RegExp#exec called on incompatible receiver")},"regexpExecAbstract"),Uf=Xr,Fa=w,ue=L,Ff=Of,kf=x,Kf=k,Gf=N,Wf=Hr,Hf=Ki,Vf=Gi,X=fr,Yf=Wi,zf=Tf,qf=Hi,Jf=Nf,Qf=Bf,Xf=D,tt=Xf("replace"),Zf=Math.max,rc=Math.min,ec=ue([].concat),Be=ue([].push),ka=ue("".indexOf),Ka=ue("".slice),tc=i(function(r){return r===void 0?r:String(r)},"maybeToString"),ac=function(){return"a".replace(/./,"$0")==="$0"}(),Ga=function(){return/./[tt]?/./[tt]("a","$0")==="":!1}(),nc=!kf(function(){var r=/./;return r.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(r,"$<a>")!=="7"});Ff("replace",function(r,e,t){var a=Ga?"$":"$0";return[i(function(o,u){var c=Yf(this),f=Wf(o)?void 0:qf(o,tt);return f?Fa(f,o,c,u):Fa(e,X(c),o,u)},"replace"),function(n,o){var u=Kf(this),c=X(n);if(typeof o=="string"&&ka(o,a)===-1&&ka(o,"$<")===-1){var f=t(e,u,c,o);if(f.done)return f.value}var v=Gf(o);v||(o=X(o));var s=u.global;if(s){var d=u.unicode;u.lastIndex=0}for(var p=[];;){var l=Qf(u,c);if(l===null||(Be(p,l),!s))break;var y=X(l[0]);y===""&&(u.lastIndex=zf(c,Vf(u.lastIndex),d))}for(var h="",O=0,$=0;$<p.length;$++){l=p[$];for(var g=X(l[0]),I=Zf(rc(Hf(l.index),c.length),0),E=[],dr=1;dr<l.length;dr++)Be(E,tc(l[dr]));var le=l.groups;if(v){var Dt=ec([g],E,I,c);le!==void 0&&Be(Dt,le);var At=X(Uf(o,void 0,Dt))}else At=Jf(g,c,I,E,le,o);I>=O&&(h+=Ka(c,O,I)+At,O=I+g.length)}return h+Ka(c,O)}]},!nc||!ac||Ga);var ic=un.LOGLEVEL,C=un.console,M={trace:1,debug:2,info:3,warn:4,error:5,silent:10},oc=ic,Z=M[oc]||M.info,Wa={trace:i(function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Z<=M.trace&&C.trace.apply(C,[e].concat(a))},"trace"),debug:i(function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Z<=M.debug&&C.debug.apply(C,[e].concat(a))},"debug"),info:i(function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Z<=M.info&&C.info.apply(C,[e].concat(a))},"info"),warn:i(function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Z<=M.warn&&C.warn.apply(C,[e].concat(a))},"warn"),error:i(function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Z<=M.error&&C.error.apply(C,[e].concat(a))},"error"),log:i(function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];return Z<M.silent&&C.log.apply(C,[e].concat(a))},"log")},at=new Set,R=i(function(e){return function(t){if(!at.has(t)){at.add(t);for(var a=arguments.length,n=new Array(a>1?a-1:0),o=1;o<a;o++)n[o-1]=arguments[o];return Wa[e].apply(Wa,[t].concat(n))}}},"once");R.clear=function(){return at.clear()};R.trace=R("trace");R.debug=R("debug");R.info=R("info");R.warn=R("warn");R.error=R("error");R.log=R("log");var sc=vc;function vc(r,e){if(Ue("noDeprecation"))return r;var t=!1;function a(){if(!t){if(Ue("throwDeprecation"))throw new Error(e);Ue("traceDeprecation")?console.trace(e):console.warn(e),t=!0}return r.apply(this,arguments)}return i(a,"deprecated"),a}i(vc,"deprecate");function Ue(r){try{if(!_t.localStorage)return!1}catch{return!1}var e=_t.localStorage[r];return e==null?!1:String(e).toLowerCase()==="true"}i(Ue,"config");var uc=w,lc=J,fc=Or,cc=ii,Ha=RegExp.prototype,dc=i(function(r){var e=r.flags;return e===void 0&&!("flags"in Ha)&&!lc(r,"flags")&&fc(Ha,r)?uc(cc,r):e},"regexpGetFlags"),pc=Vi.PROPER,gc=K,$c=k,Va=fr,yc=x,hc=dc,Nt="toString",bc=RegExp.prototype,li=bc[Nt],Sc=yc(function(){return li.call({source:"a",flags:"b"})!="/a/b"}),mc=pc&&li.name!=Nt;(Sc||mc)&&gc(RegExp.prototype,Nt,i(function(){var e=$c(this),t=Va(e.source),a=Va(hc(e));return"/"+t+"/"+a},"toString"),{unsafe:!0});var Ic=b,Ec=S,Ya=Zr.clear;Ic({global:!0,bind:!0,enumerable:!0,forced:Ec.clearImmediate!==Ya},{clearImmediate:Ya});var Oc=typeof Bun=="function"&&Bun&&typeof Bun.version=="string",fi=S,Pc=Xr,Tc=N,Rc=Oc,wc=Vr,xc=lt,Cc=pn,jc=fi.Function,Nc=/MSIE .\./.test(wc)||Rc&&function(){var r=fi.Bun.version.split(".");return r.length<3||r[0]==0&&(r[1]<3||r[1]==3&&r[2]==0)}(),Dc=i(function(r,e){var t=e?2:1;return Nc?function(a,n){var o=Cc(arguments.length,1)>t,u=Tc(a)?a:jc(a),c=o?xc(arguments,t):[],f=o?function(){Pc(u,this,c)}:u;return e?r(f,n):r(f)}:r},"schedulersFix$1"),Ac=b,ci=S,za=Zr.set,_c=Dc,qa=ci.setImmediate?_c(za,!1):za;Ac({global:!0,bind:!0,enumerable:!0,forced:ci.setImmediate!==qa},{setImmediate:qa});var Ja;function Lc(r,e){return e||(e=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(e)}}))}i(Lc,"_taggedTemplateLiteral");function Mc(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}i(Mc,"_classCallCheck");function Qa(r,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(r,a.key,a)}}i(Qa,"_defineProperties");function Bc(r,e,t){return e&&Qa(r.prototype,e),t&&Qa(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}i(Bc,"_createClass");var Uc=i(function(){return Math.random().toString(16).slice(2)},"generateRandomId"),Fc=function(){function r(){var e=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.transport,n=t.async,o=n===void 0?!1:n;Mc(this,r),this.isAsync=void 0,this.sender=Uc(),this.events={},this.data={},this.transport=void 0,this.addPeerListener=sc(function(u,c){e.addListener(u,c)},Yi(Ja||(Ja=Lc([`
      channel.addPeerListener is deprecated
    `])))),this.isAsync=o,a&&(this.transport=a,this.transport.setHandler(function(u){return e.handleEvent(u)}))}return i(r,"Channel"),Bc(r,[{key:"hasTransport",get:i(function(){return!!this.transport},"get")},{key:"addListener",value:i(function(t,a){this.events[t]=this.events[t]||[],this.events[t].push(a)},"addListener")},{key:"emit",value:i(function(t){for(var a=this,n=arguments.length,o=new Array(n>1?n-1:0),u=1;u<n;u++)o[u-1]=arguments[u];var c={type:t,args:o,from:this.sender},f={};o.length>=1&&o[0]&&o[0].options&&(f=o[0].options);var v=i(function(){a.transport&&a.transport.send(c,f),a.handleEvent(c)},"handler");this.isAsync?setImmediate(v):v()},"emit")},{key:"last",value:i(function(t){return this.data[t]},"last")},{key:"eventNames",value:i(function(){return Object.keys(this.events)},"eventNames")},{key:"listenerCount",value:i(function(t){var a=this.listeners(t);return a?a.length:0},"listenerCount")},{key:"listeners",value:i(function(t){var a=this.events[t];return a||void 0},"listeners")},{key:"once",value:i(function(t,a){var n=this.onceListener(t,a);this.addListener(t,n)},"once")},{key:"removeAllListeners",value:i(function(t){t?this.events[t]&&delete this.events[t]:this.events={}},"removeAllListeners")},{key:"removeListener",value:i(function(t,a){var n=this.listeners(t);n&&(this.events[t]=n.filter(function(o){return o!==a}))},"removeListener")},{key:"on",value:i(function(t,a){this.addListener(t,a)},"on")},{key:"off",value:i(function(t,a){this.removeListener(t,a)},"off")},{key:"handleEvent",value:i(function(t){var a=this.listeners(t.type);a&&a.length&&a.forEach(function(n){n.apply(t,t.args)}),this.data[t.type]=t.args},"handleEvent")},{key:"onceListener",value:i(function(t,a){var n=this,o=i(function u(){return n.removeListener(t,u),a.apply(void 0,arguments)},"onceListener");return o},"onceListener")}]),r}();const Hc=Fc;export{Hc as C,dt as a,Wc as b,sf as c,uf as d,Tf as e,Of as f,Xr as g,Ct as h,te as i,gl as j,cn as k,Wa as l,bl as m,El as n,lo as o,Yl as p,dc as q,Bf as r,Bo as s,sc as t,Bv as u,Vv as v,Dn as w,hf as x,R as y};
//# sourceMappingURL=index-d3c0aad0.js.map
