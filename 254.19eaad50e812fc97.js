(self.webpackChunkmfeHome=self.webpackChunkmfeHome||[]).push([[254],{4254:(Z,T,p)=>{p.r(T);var c=p(345),s=p(5662),m=p(2264);const D=[{path:"",loadChildren:()=>p.e(181).then(p.bind(p,9181)).then(u=>u.ViewsModule)}];let M=(()=>{class u{static \u0275fac=function(h){return new(h||u)};static \u0275mod=m.\u0275\u0275defineNgModule({type:u});static \u0275inj=m.\u0275\u0275defineInjector({imports:[s.RouterModule.forRoot(D),s.RouterModule]})}return u})(),g=(()=>{class u{title="mfe-home";static \u0275fac=function(h){return new(h||u)};static \u0275cmp=m.\u0275\u0275defineComponent({type:u,selectors:[["app-root"]],decls:1,vars:0,template:function(h,R){1&h&&m.\u0275\u0275element(0,"router-outlet")},dependencies:[s.RouterOutlet]})}return u})(),C=(()=>{class u{static \u0275fac=function(h){return new(h||u)};static \u0275mod=m.\u0275\u0275defineNgModule({type:u,bootstrap:[g]});static \u0275inj=m.\u0275\u0275defineInjector({imports:[c.Bb,M,s.RouterModule]})}return u})();c.sG().bootstrapModule(C,{ngZoneEventCoalescing:!0}).catch(u=>console.error(u))},345:(Z,T,p)=>{p.d(T,{Bb:()=>fe,hE:()=>pe,sG:()=>ue});var c=p(9354),s=p(2264);p(6380);class D extends c.\u0275DomAdapter{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class M extends D{static makeCurrent(){(0,c.\u0275setRootDomAdapter)(new M)}onAndCancel(n,e,t){return n.addEventListener(e,t),()=>{n.removeEventListener(e,t)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.parentNode&&n.parentNode.removeChild(n)}createElement(n,e){return(e=e||this.getDefaultDocument()).createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return"window"===e?window:"document"===e?n:"body"===e?n.body:null}getBaseHref(n){const e=function C(){return g=g||document.querySelector("base"),g?g.getAttribute("href"):null}();return null==e?null:function u(r){return new URL(r,document.baseURI).pathname}(e)}resetBaseElement(){g=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return(0,c.\u0275parseCookieValue)(document.cookie,n)}}let g=null,S=(()=>{class r{build(){return new XMLHttpRequest}static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();const h=new s.InjectionToken("");let R=(()=>{class r{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,t,o){return this._findPluginFor(t).addEventListener(e,t,o)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(i=>i.supports(e)),!t)throw new s.\u0275RuntimeError(5101,!1);return this._eventNameToPlugin.set(e,t),t}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(h),s.\u0275\u0275inject(s.NgZone))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();class _{constructor(n){this._doc=n}}const A="ng-app-id";let P=(()=>{class r{constructor(e,t,o,i={}){this.doc=e,this.appId=t,this.nonce=o,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=(0,c.isPlatformServer)(i),this.resetHostNodes()}addStyles(e){for(const t of e)1===this.changeUsageCount(t,1)&&this.onStyleAdded(t)}removeStyles(e){for(const t of e)this.changeUsageCount(t,-1)<=0&&this.onStyleRemoved(t)}ngOnDestroy(){const e=this.styleNodesInDOM;e&&(e.forEach(t=>t.remove()),e.clear());for(const t of this.getAllStyles())this.onStyleRemoved(t);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(const t of this.getAllStyles())this.addStyleToHost(e,t)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(const t of this.hostNodes)this.addStyleToHost(t,e)}onStyleRemoved(e){const t=this.styleRef;t.get(e)?.elements?.forEach(o=>o.remove()),t.delete(e)}collectServerRenderedStyles(){const e=this.doc.head?.querySelectorAll(`style[${A}="${this.appId}"]`);if(e?.length){const t=new Map;return e.forEach(o=>{null!=o.textContent&&t.set(o.textContent,o)}),t}return null}changeUsageCount(e,t){const o=this.styleRef;if(o.has(e)){const i=o.get(e);return i.usage+=t,i.usage}return o.set(e,{usage:t,elements:[]}),t}getStyleElement(e,t){const o=this.styleNodesInDOM,i=o?.get(t);if(i?.parentNode===e)return o.delete(t),i.removeAttribute(A),i;{const a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=t,this.platformIsServer&&a.setAttribute(A,this.appId),e.appendChild(a),a}}addStyleToHost(e,t){const o=this.getStyleElement(e,t),i=this.styleRef,a=i.get(t)?.elements;a?a.push(o):i.set(t,{elements:[o],usage:1})}resetHostNodes(){const e=this.hostNodes;e.clear(),e.add(this.doc.head)}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(c.DOCUMENT),s.\u0275\u0275inject(s.APP_ID),s.\u0275\u0275inject(s.CSP_NONCE,8),s.\u0275\u0275inject(s.PLATFORM_ID))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();const O={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},N=/%COMP%/g,H="%COMP%",K=`_nghost-${H}`,W=`_ngcontent-${H}`,J=new s.InjectionToken("",{providedIn:"root",factory:()=>!0});function L(r,n){return n.map(e=>e.replace(N,r))}let k=(()=>{class r{constructor(e,t,o,i,a,l,d,f=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=l,this.ngZone=d,this.nonce=f,this.rendererByCompId=new Map,this.platformIsServer=(0,c.isPlatformServer)(l),this.defaultRenderer=new I(e,a,d,this.platformIsServer)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;this.platformIsServer&&t.encapsulation===s.ViewEncapsulation.ShadowDom&&(t={...t,encapsulation:s.ViewEncapsulation.Emulated});const o=this.getOrCreateRenderer(e,t);return o instanceof U?o.applyToHost(e):o instanceof b&&o.applyStyles(),o}getOrCreateRenderer(e,t){const o=this.rendererByCompId;let i=o.get(t.id);if(!i){const a=this.doc,l=this.ngZone,d=this.eventManager,f=this.sharedStylesHost,y=this.removeStylesOnCompDestroy,E=this.platformIsServer;switch(t.encapsulation){case s.ViewEncapsulation.Emulated:i=new U(d,f,t,this.appId,y,a,l,E);break;case s.ViewEncapsulation.ShadowDom:return new te(d,f,e,t,a,l,this.nonce,E);default:i=new b(d,f,t,y,a,l,E)}o.set(t.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(R),s.\u0275\u0275inject(P),s.\u0275\u0275inject(s.APP_ID),s.\u0275\u0275inject(J),s.\u0275\u0275inject(c.DOCUMENT),s.\u0275\u0275inject(s.PLATFORM_ID),s.\u0275\u0275inject(s.NgZone),s.\u0275\u0275inject(s.CSP_NONCE))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();class I{constructor(n,e,t,o){this.eventManager=n,this.doc=e,this.ngZone=t,this.platformIsServer=o,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(n,e){return e?this.doc.createElementNS(O[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(j(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){n&&(j(n)?n.content:n).insertBefore(e,t)}removeChild(n,e){n&&n.removeChild(e)}selectRootElement(n,e){let t="string"==typeof n?this.doc.querySelector(n):n;if(!t)throw new s.\u0275RuntimeError(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,o){if(o){e=o+":"+e;const i=O[o];i?n.setAttributeNS(i,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){const o=O[t];o?n.removeAttributeNS(o,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,o){o&(s.RendererStyleFlags2.DashCase|s.RendererStyleFlags2.Important)?n.style.setProperty(e,t,o&s.RendererStyleFlags2.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){t&s.RendererStyleFlags2.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){null!=n&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t){if("string"==typeof n&&!(n=(0,c.\u0275getDOM)().getGlobalEventTarget(this.doc,n)))throw new Error(`Unsupported event target ${n} for event ${e}`);return this.eventManager.addEventListener(n,e,this.decoratePreventDefault(t))}decoratePreventDefault(n){return e=>{if("__ngUnwrap__"===e)return n;!1===(this.platformIsServer?this.ngZone.runGuarded(()=>n(e)):n(e))&&e.preventDefault()}}}function j(r){return"TEMPLATE"===r.tagName&&void 0!==r.content}class te extends I{constructor(n,e,t,o,i,a,l,d){super(n,i,a,d),this.sharedStylesHost=e,this.hostEl=t,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const f=L(o.id,o.styles);for(const y of f){const E=document.createElement("style");l&&E.setAttribute("nonce",l),E.textContent=y,this.shadowRoot.appendChild(E)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(this.nodeOrShadowRoot(n),e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}}class b extends I{constructor(n,e,t,o,i,a,l,d){super(n,i,a,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o,this.styles=d?L(d,t.styles):t.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}}class U extends b{constructor(n,e,t,o,i,a,l,d){const f=o+"-"+t.id;super(n,e,t,i,a,l,d,f),this.contentAttr=function Q(r){return W.replace(N,r)}(f),this.hostAttr=function q(r){return K.replace(N,r)}(f)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){const t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}}let ne=(()=>{class r extends _{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,o){return e.addEventListener(t,o,!1),()=>this.removeEventListener(e,t,o)}removeEventListener(e,t,o){return e.removeEventListener(t,o)}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(c.DOCUMENT))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})(),re=(()=>{class r extends _{constructor(e){super(e),this.delegate=(0,s.inject)(s.\u0275GLOBAL_EVENT_DELEGATION,{optional:!0})}supports(e){return!!this.delegate&&this.delegate.supports(e)}addEventListener(e,t,o){return this.delegate.addEventListener(e,t,o)}removeEventListener(e,t,o){return this.delegate.removeEventListener(e,t,o)}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(c.DOCUMENT))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();const x=["alt","control","meta","shift"],oe={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},se={alt:r=>r.altKey,control:r=>r.ctrlKey,meta:r=>r.metaKey,shift:r=>r.shiftKey};let ie=(()=>{class r extends _{constructor(e){super(e)}supports(e){return null!=r.parseEventName(e)}addEventListener(e,t,o){const i=r.parseEventName(t),a=r.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,c.\u0275getDOM)().onAndCancel(e,i.domEventName,a))}static parseEventName(e){const t=e.toLowerCase().split("."),o=t.shift();if(0===t.length||"keydown"!==o&&"keyup"!==o)return null;const i=r._normalizeKey(t.pop());let a="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),a="code."),x.forEach(f=>{const y=t.indexOf(f);y>-1&&(t.splice(y,1),a+=f+".")}),a+=i,0!=t.length||0===i.length)return null;const d={};return d.domEventName=o,d.fullKey=a,d}static matchEventFullKeyCode(e,t){let o=oe[e.key]||e.key,i="";return t.indexOf("code.")>-1&&(o=e.code,i="code."),!(null==o||!o)&&(o=o.toLowerCase()," "===o?o="space":"."===o&&(o="dot"),x.forEach(a=>{a!==o&&(0,se[a])(e)&&(i+=a+".")}),i+=o,i===t)}static eventCallback(e,t,o){return i=>{r.matchEventFullKeyCode(i,e)&&o.runGuarded(()=>t(i))}}static _normalizeKey(e){return"esc"===e?"escape":e}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(c.DOCUMENT))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}return r})();const ue=(0,s.createPlatformFactory)(s.platformCore,"browser",[{provide:s.PLATFORM_ID,useValue:c.\u0275PLATFORM_BROWSER_ID},{provide:s.PLATFORM_INITIALIZER,useValue:function ae(){M.makeCurrent()},multi:!0},{provide:c.DOCUMENT,useFactory:function ce(){return(0,s.\u0275setDocument)(document),document},deps:[]}]),de=new s.InjectionToken(""),F=[{provide:s.\u0275TESTABILITY_GETTER,useClass:class Y{addToWindow(n){s.\u0275global.getAngularTestability=(t,o=!0)=>{const i=n.findTestabilityInTree(t,o);if(null==i)throw new s.\u0275RuntimeError(5103,!1);return i},s.\u0275global.getAllAngularTestabilities=()=>n.getAllTestabilities(),s.\u0275global.getAllAngularRootElements=()=>n.getAllRootElements(),s.\u0275global.frameworkStabilizers||(s.\u0275global.frameworkStabilizers=[]),s.\u0275global.frameworkStabilizers.push(t=>{const o=s.\u0275global.getAllAngularTestabilities();let i=o.length;const a=function(){i--,0==i&&t()};o.forEach(l=>{l.whenStable(a)})})}findTestabilityInTree(n,e,t){return null==e?null:n.getTestability(e)??(t?(0,c.\u0275getDOM)().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},deps:[]},{provide:s.\u0275TESTABILITY,useClass:s.Testability,deps:[s.NgZone,s.TestabilityRegistry,s.\u0275TESTABILITY_GETTER]},{provide:s.Testability,useClass:s.Testability,deps:[s.NgZone,s.TestabilityRegistry,s.\u0275TESTABILITY_GETTER]}],z=[{provide:s.\u0275INJECTOR_SCOPE,useValue:"root"},{provide:s.ErrorHandler,useFactory:function le(){return new s.ErrorHandler},deps:[]},{provide:h,useClass:ne,multi:!0,deps:[c.DOCUMENT,s.NgZone,s.PLATFORM_ID]},{provide:h,useClass:ie,multi:!0,deps:[c.DOCUMENT]},{provide:h,useClass:re,multi:!0},k,P,R,{provide:s.RendererFactory2,useExisting:k},{provide:c.XhrFactory,useClass:S,deps:[]},[]];let fe=(()=>{class r{constructor(e){}static withServerTransition(e){return{ngModule:r,providers:[{provide:s.APP_ID,useValue:e.appId}]}}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(de,12))};static#t=this.\u0275mod=s.\u0275\u0275defineNgModule({type:r});static#n=this.\u0275inj=s.\u0275\u0275defineInjector({providers:[...z,...F],imports:[c.CommonModule,s.ApplicationModule]})}return r})(),pe=(()=>{class r{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static#e=this.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(c.DOCUMENT))};static#t=this.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);