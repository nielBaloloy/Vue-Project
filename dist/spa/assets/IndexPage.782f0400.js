import{k as Ae,r as E,o as ae,w as I,c as y,i as fe,a2 as _e,l as re,g as W,a3 as Be,a4 as Re,a5 as Ee,v as $e,m as Y,y as Pe,a6 as Oe,h as x,C as G,a1 as Te,a7 as Ie,u as De,D as me,q as X,t as ze,K as je,_ as Ne,d as Ke,N as Le,O as Ue,Q as Ze,S as ue,f as ie,U as He}from"./index.4816b1eb.js";import{Q as he,l as Qe,h as ee,c as qe,k as Ye}from"./QBtn.8645a863.js";import{u as We,a as Je}from"./use-dark.08754139.js";import{api as Xe}from"./axios.3c658064.js";let se,te=0;const P=new Array(256);for(let e=0;e<256;e++)P[e]=(e+256).toString(16).substring(1);const Ge=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const a=new Uint8Array(t);return e.getRandomValues(a),a}}return t=>{const a=[];for(let i=t;i>0;i--)a.push(Math.floor(Math.random()*256));return a}})(),pe=4096;function ce(){(se===void 0||te+16>pe)&&(te=0,se=Ge(pe));const e=Array.prototype.slice.call(se,te,te+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,P[e[0]]+P[e[1]]+P[e[2]]+P[e[3]]+"-"+P[e[4]]+P[e[5]]+"-"+P[e[6]]+P[e[7]]+"-"+P[e[8]]+P[e[9]]+"-"+P[e[10]]+P[e[11]]+P[e[12]]+P[e[13]]+P[e[14]]+P[e[15]]}function et(e){return e==null?null:e}function be(e,t){return e==null?t===!0?`f_${ce()}`:null:e}function tt({getValue:e,required:t=!0}={}){if(Ae.value===!0){const a=e!==void 0?E(et(e())):E(null);return t===!0&&a.value===null&&ae(()=>{a.value=`f_${ce()}`}),e!==void 0&&I(e,i=>{a.value=be(i,t)}),a}return e!==void 0?y(()=>be(e(),t)):E(`f_${ce()}`)}function nt({validate:e,resetValidation:t,requiresQForm:a}){const i=fe(_e,!1);if(i!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),I(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),ae(()=>{f.disable!==!0&&i.bindComponent(d)}),re(()=>{f.disable!==!0&&i.unbindComponent(d)})}else a===!0&&console.error("Parent QForm not found on useFormChild()!")}const ye=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ke=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,xe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ne=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,le=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,de={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>ye.test(e),hexaColor:e=>ke.test(e),hexOrHexaColor:e=>xe.test(e),rgbColor:e=>ne.test(e),rgbaColor:e=>le.test(e),rgbOrRgbaColor:e=>ne.test(e)||le.test(e),hexOrRgbColor:e=>ye.test(e)||ne.test(e),hexaOrRgbaColor:e=>ke.test(e)||le.test(e),anyColor:e=>xe.test(e)||ne.test(e)||le.test(e)},lt=[!0,!1,"ondemand"],ot={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>lt.includes(e)}};function at(e,t){const{props:a,proxy:i}=W(),f=E(!1),d=E(null),c=E(!1);nt({validate:z,resetValidation:D});let p=0,V;const R=y(()=>a.rules!==void 0&&a.rules!==null&&a.rules.length!==0),C=y(()=>a.disable!==!0&&R.value===!0&&t.value===!1),b=y(()=>a.error===!0||f.value===!0),H=y(()=>typeof a.errorMessage=="string"&&a.errorMessage.length!==0?a.errorMessage:d.value);I(()=>a.modelValue,()=>{c.value=!0,C.value===!0&&a.lazyRules===!1&&O()});function $(){a.lazyRules!=="ondemand"&&C.value===!0&&c.value===!0&&O()}I(()=>a.reactiveRules,N=>{N===!0?V===void 0&&(V=I(()=>a.rules,$,{immediate:!0,deep:!0})):V!==void 0&&(V(),V=void 0)},{immediate:!0}),I(()=>a.lazyRules,$),I(e,N=>{N===!0?c.value=!0:C.value===!0&&a.lazyRules!=="ondemand"&&O()});function D(){p++,t.value=!1,c.value=!1,f.value=!1,d.value=null,O.cancel()}function z(N=a.modelValue){if(a.disable===!0||R.value===!1)return!0;const F=++p,Q=t.value!==!0?()=>{c.value=!0}:()=>{},K=(S,w)=>{S===!0&&Q(),f.value=S,d.value=w||null,t.value=!1},j=[];for(let S=0;S<a.rules.length;S++){const w=a.rules[S];let B;if(typeof w=="function"?B=w(N,de):typeof w=="string"&&de[w]!==void 0&&(B=de[w](N)),B===!1||typeof B=="string")return K(!0,B),!1;B!==!0&&B!==void 0&&j.push(B)}return j.length===0?(K(!1),!0):(t.value=!0,Promise.all(j).then(S=>{if(S===void 0||Array.isArray(S)===!1||S.length===0)return F===p&&K(!1),!0;const w=S.find(B=>B===!1||typeof B=="string");return F===p&&K(w!==void 0,w),w===void 0},S=>(F===p&&(console.error(S),K(!0)),!1)))}const O=Be(z,0);return re(()=>{V!==void 0&&V(),O.cancel()}),Object.assign(i,{resetValidation:D,validate:z}),Re(i,"hasError",()=>b.value),{isDirtyModel:c,hasRules:R,hasError:b,errorMessage:H,validate:z,resetValidation:D}}const Ce=/^on[A-Z]/;function rt(){const{attrs:e,vnode:t}=W(),a={listeners:E({}),attributes:E({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&Ce.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)Ce.test(c)===!0&&(d[c]=t.props[c]);a.attributes.value=f,a.listeners.value=d}return Ee(i),i(),a}let ve=[],ut=[];function Ve(e){ut.length===0?e():ve.push(e)}function it(e){ve=ve.filter(t=>t!==e)}function ge(e){return e!=null&&(""+e).length!==0}const st={...We,...ot,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},dt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function ft({requiredForAttr:e=!0,tagProp:t}={}){const{props:a,proxy:i}=W(),f=Je(a,i.$q),d=tt({required:e,getValue:()=>a.for});return{requiredForAttr:e,tag:t===!0?y(()=>a.tag):{value:"label"},isDark:f,editable:y(()=>a.disable!==!0&&a.readonly!==!0),innerLoading:E(!1),focused:E(!1),hasPopupOpen:!1,splitAttrs:rt(),targetUid:d,rootRef:E(null),targetRef:E(null),controlRef:E(null)}}function ct(e){const{props:t,emit:a,slots:i,attrs:f,proxy:d}=W(),{$q:c}=d;let p=null;e.hasValue===void 0&&(e.hasValue=y(()=>ge(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{a("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:r,onFocusout:o}),Object.assign(e,{clearValue:s,onControlFocusin:r,onControlFocusout:o,focus:w}),e.computedCounter===void 0&&(e.computedCounter=y(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,g=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(g!==void 0?" / "+g:"")}}));const{isDirtyModel:V,hasRules:R,hasError:C,errorMessage:b,resetValidation:H}=at(e.focused,e.innerLoading),$=e.floatingLabel!==void 0?y(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):y(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),D=y(()=>t.bottomSlots===!0||t.hint!==void 0||R.value===!0||t.counter===!0||t.error!==null),z=y(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=y(()=>`q-field row no-wrap items-start q-field--${z.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+($.value===!0?" q-field--float":"")+(F.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(C.value===!0?" q-field--error":"")+(C.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&D.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),N=y(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(C.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),F=y(()=>t.labelSlot===!0||t.label!==void 0),Q=y(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&C.value!==!0?` text-${t.labelColor}`:"")),K=y(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:$.value,modelValue:t.modelValue,emitValue:e.emitValue})),j=y(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),t.disable===!0&&(l["aria-disabled"]="true"),l});function S(){const l=document.activeElement;let g=e.targetRef!==void 0&&e.targetRef.value;g&&(l===null||l.id!==e.targetUid.value)&&(g.hasAttribute("tabindex")===!0||(g=g.querySelector("[tabindex]")),g&&g!==l&&g.focus({preventScroll:!0}))}function w(){Ve(S)}function B(){it(S);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function r(l){p!==null&&(clearTimeout(p),p=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,a("focus",l))}function o(l,g){p!==null&&clearTimeout(p),p=setTimeout(()=>{p=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,a("blur",l)),g!==void 0&&g())})}function s(l){$e(l),c.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),a("update:modelValue",null),a("clear",t.modelValue),Y(()=>{const g=V.value;H(),V.value=g})}function u(){const l=[];return i.prepend!==void 0&&l.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:G},i.prepend())),l.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},m())),C.value===!0&&t.noErrorIcon===!1&&l.push(M("error",[x(he,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(M("inner-loading-append",i.loading!==void 0?i.loading():[x(Qe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(M("inner-clearable-append",[x(he,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:s})])),i.append!==void 0&&l.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:G},i.append())),e.getInnerAppend!==void 0&&l.push(M("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function m(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):i.rawControl!==void 0?l.push(i.rawControl()):i.control!==void 0&&l.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(K.value))),F.value===!0&&l.push(x("div",{class:Q.value},ee(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(ee(i.default))}function v(){let l,g;C.value===!0?b.value!==null?(l=[x("div",{role:"alert"},b.value)],g=`q--slot-error-${b.value}`):(l=ee(i.error),g="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[x("div",t.hint)],g=`q--slot-hint-${t.hint}`):(l=ee(i.hint),g="q--slot-hint"));const L=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&L===!1&&l===void 0)return;const k=x("div",{key:g,class:"q-field__messages col"},l);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:G},[t.hideBottomSpace===!0?k:x(Te,{name:"q-transition--field-message"},()=>k),L===!0?x("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function M(l,g){return g===null?null:x("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},g)}let h=!1;return Pe(()=>{h=!0}),Oe(()=>{h===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&ae(()=>{d.focus()}),re(()=>{p!==null&&clearTimeout(p)}),Object.assign(d,{focus:w,blur:B}),function(){const g=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...j.value}:j.value;return x(e.tag.value,{ref:e.rootRef,class:[O.value,f.class],style:f.style,...g},[i.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:G},i.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:N.value,tabindex:-1,...e.controlEvents},u()),D.value===!0?v():null]),i.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:G},i.after()):null])}}const we={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},oe={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Fe=Object.keys(oe);Fe.forEach(e=>{oe[e].regex=new RegExp(oe[e].pattern)});const vt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Fe.join("")+"])|(.)","g"),Me=/[.*+?^${}()|[\]\\]/g,A=String.fromCharCode(1),gt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function mt(e,t,a,i){let f,d,c,p,V,R;const C=E(null),b=E($());function H(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}I(()=>e.type+e.autogrow,z),I(()=>e.mask,r=>{if(r!==void 0)O(b.value,!0);else{const o=w(b.value);z(),e.modelValue!==o&&t("update:modelValue",o)}}),I(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&O(b.value,!0)}),I(()=>e.unmaskedValue,()=>{C.value===!0&&O(b.value)});function $(){if(z(),C.value===!0){const r=j(w(e.modelValue));return e.fillMask!==!1?B(r):r}return e.modelValue}function D(r){if(r<f.length)return f.slice(-r);let o="",s=f;const u=s.indexOf(A);if(u!==-1){for(let m=r-s.length;m>0;m--)o+=A;s=s.slice(0,u)+o+s.slice(u)}return s}function z(){if(C.value=e.mask!==void 0&&e.mask.length!==0&&H(),C.value===!1){p=void 0,f="",d="";return}const r=we[e.mask]===void 0?e.mask:we[e.mask],o=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=o.replace(Me,"\\$&"),u=[],m=[],v=[];let M=e.reverseFillMask===!0,h="",l="";r.replace(vt,(_,n,q,Z,U)=>{if(Z!==void 0){const T=oe[Z];v.push(T),l=T.negate,M===!0&&(m.push("(?:"+l+"+)?("+T.pattern+"+)?(?:"+l+"+)?("+T.pattern+"+)?"),M=!1),m.push("(?:"+l+"+)?("+T.pattern+")?")}else if(q!==void 0)h="\\"+(q==="\\"?"":q),v.push(q),u.push("([^"+h+"]+)?"+h+"?");else{const T=n!==void 0?n:U;h=T==="\\"?"\\\\\\\\":T.replace(Me,"\\\\$&"),v.push(T),u.push("([^"+h+"]+)?"+h+"?")}});const g=new RegExp("^"+u.join("")+"("+(h===""?".":"[^"+h+"]")+"+)?"+(h===""?"":"["+h+"]*")+"$"),L=m.length-1,k=m.map((_,n)=>n===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+_):n===L?new RegExp("^"+_+"("+(l===""?".":l)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+_));c=v,p=_=>{const n=g.exec(e.reverseFillMask===!0?_:_.slice(0,v.length+1));n!==null&&(_=n.slice(1).join(""));const q=[],Z=k.length;for(let U=0,T=_;U<Z;U++){const J=k[U].exec(T);if(J===null)break;T=T.slice(J.shift().length),q.push(...J)}return q.length!==0?q.join(""):_},f=v.map(_=>typeof _=="string"?_:A).join(""),d=f.split(A).join(o)}function O(r,o,s){const u=i.value,m=u.selectionEnd,v=u.value.length-m,M=w(r);o===!0&&z();const h=j(M),l=e.fillMask!==!1?B(h):h,g=b.value!==l;u.value!==l&&(u.value=l),g===!0&&(b.value=l),document.activeElement===u&&Y(()=>{if(l===d){const k=e.reverseFillMask===!0?d.length:0;u.setSelectionRange(k,k,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const k=u.selectionEnd;let _=m-1;for(let n=V;n<=_&&n<k;n++)f[n]!==A&&_++;F.right(u,_);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const k=e.reverseFillMask===!0?m===0?l.length>h.length?1:0:Math.max(0,l.length-(l===d?0:Math.min(h.length,v)+1))+1:m;u.setSelectionRange(k,k,"forward");return}if(e.reverseFillMask===!0)if(g===!0){const k=Math.max(0,l.length-(l===d?0:Math.min(h.length,v+1)));k===1&&m===1?u.setSelectionRange(k,k,"forward"):F.rightReverse(u,k)}else{const k=l.length-v;u.setSelectionRange(k,k,"backward")}else if(g===!0){const k=Math.max(0,f.indexOf(A),Math.min(h.length,m)-1);F.right(u,k)}else{const k=m-1;F.right(u,k)}});const L=e.unmaskedValue===!0?w(l):l;String(e.modelValue)!==L&&(e.modelValue!==null||L!=="")&&a(L,!0)}function N(r,o,s){const u=j(w(r.value));o=Math.max(0,f.indexOf(A),Math.min(u.length,o)),V=o,r.setSelectionRange(o,s,"forward")}const F={left(r,o){const s=f.slice(o-1).indexOf(A)===-1;let u=Math.max(0,o-1);for(;u>=0;u--)if(f[u]===A){o=u,s===!0&&o++;break}if(u<0&&f[o]!==void 0&&f[o]!==A)return F.right(r,0);o>=0&&r.setSelectionRange(o,o,"backward")},right(r,o){const s=r.value.length;let u=Math.min(s,o+1);for(;u<=s;u++)if(f[u]===A){o=u;break}else f[u-1]===A&&(o=u);if(u>s&&f[o-1]!==void 0&&f[o-1]!==A)return F.left(r,s);r.setSelectionRange(o,o,"forward")},leftReverse(r,o){const s=D(r.value.length);let u=Math.max(0,o-1);for(;u>=0;u--)if(s[u-1]===A){o=u;break}else if(s[u]===A&&(o=u,u===0))break;if(u<0&&s[o]!==void 0&&s[o]!==A)return F.rightReverse(r,0);o>=0&&r.setSelectionRange(o,o,"backward")},rightReverse(r,o){const s=r.value.length,u=D(s),m=u.slice(0,o+1).indexOf(A)===-1;let v=Math.min(s,o+1);for(;v<=s;v++)if(u[v-1]===A){o=v,o>0&&m===!0&&o--;break}if(v>s&&u[o-1]!==void 0&&u[o-1]!==A)return F.leftReverse(r,s);r.setSelectionRange(o,o,"forward")}};function Q(r){t("click",r),R=void 0}function K(r){if(t("keydown",r),Ie(r)===!0||r.altKey===!0)return;const o=i.value,s=o.selectionStart,u=o.selectionEnd;if(r.shiftKey||(R=void 0),r.keyCode===37||r.keyCode===39){r.shiftKey&&R===void 0&&(R=o.selectionDirection==="forward"?s:u);const m=F[(r.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(r.preventDefault(),m(o,R===s?u:s),r.shiftKey){const v=o.selectionStart;o.setSelectionRange(Math.min(R,v),Math.max(R,v),"forward")}}else r.keyCode===8&&e.reverseFillMask!==!0&&s===u?(F.left(o,s),o.setSelectionRange(o.selectionStart,u,"backward")):r.keyCode===46&&e.reverseFillMask===!0&&s===u&&(F.rightReverse(o,u),o.setSelectionRange(s,o.selectionEnd,"forward"))}function j(r){if(r==null||r==="")return"";if(e.reverseFillMask===!0)return S(r);const o=c;let s=0,u="";for(let m=0;m<o.length;m++){const v=r[s],M=o[m];if(typeof M=="string")u+=M,v===M&&s++;else if(v!==void 0&&M.regex.test(v))u+=M.transform!==void 0?M.transform(v):v,s++;else return u}return u}function S(r){const o=c,s=f.indexOf(A);let u=r.length-1,m="";for(let v=o.length-1;v>=0&&u!==-1;v--){const M=o[v];let h=r[u];if(typeof M=="string")m=M+m,h===M&&u--;else if(h!==void 0&&M.regex.test(h))do m=(M.transform!==void 0?M.transform(h):h)+m,u--,h=r[u];while(s===v&&h!==void 0&&M.regex.test(h));else return m}return m}function w(r){return typeof r!="string"||p===void 0?typeof r=="number"?p(""+r):r:p(r)}function B(r){return d.length-r.length<=0?r:e.reverseFillMask===!0&&r.length!==0?d.slice(0,-r.length)+r:r+d.slice(r.length)}return{innerValue:b,hasMask:C,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:K,onMaskedClick:Q}}const ht={name:String};function pt(e){return y(()=>e.name||e.for)}function bt(e,t){function a(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return t===!0?y(()=>{if(e.type==="file")return a()}):y(a)}const yt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,kt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,xt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ct=/[a-z0-9_ -]$/i;function wt(e){return function(a){if(a.type==="compositionend"||a.type==="change"){if(a.target.qComposing!==!0)return;a.target.qComposing=!1,e(a)}else a.type==="compositionupdate"&&a.target.qComposing!==!0&&typeof a.data=="string"&&(De.is.firefox===!0?Ct.test(a.data)===!1:yt.test(a.data)===!0||kt.test(a.data)===!0||xt.test(a.data)===!0)===!0&&(a.target.qComposing=!0)}}var Se=qe({name:"QInput",inheritAttrs:!1,props:{...st,...gt,...ht,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...dt,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:a}){const{proxy:i}=W(),{$q:f}=i,d={};let c=NaN,p,V,R=null,C;const b=E(null),H=pt(e),{innerValue:$,hasMask:D,moveCursorForPaste:z,updateMaskValue:O,onMaskedKeydown:N,onMaskedClick:F}=mt(e,t,h,b),Q=bt(e,!0),K=y(()=>ge($.value)),j=wt(v),S=ft(),w=y(()=>e.type==="textarea"||e.autogrow===!0),B=y(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),r=y(()=>{const n={...S.splitAttrs.listeners.value,onInput:v,onPaste:m,onChange:g,onBlur:L,onFocus:me};return n.onCompositionstart=n.onCompositionupdate=n.onCompositionend=j,D.value===!0&&(n.onKeydown=N,n.onClick=F),e.autogrow===!0&&(n.onAnimationend=M),n}),o=y(()=>{const n={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:H.value,...S.splitAttrs.attributes.value,id:S.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(n.type=e.type),e.autogrow===!0&&(n.rows=1),n});I(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),I(()=>e.modelValue,n=>{if(D.value===!0){if(V===!0&&(V=!1,String(n)===c))return;O(n)}else $.value!==n&&($.value=n,e.type==="number"&&d.hasOwnProperty("value")===!0&&(p===!0?p=!1:delete d.value));e.autogrow===!0&&Y(l)}),I(()=>e.autogrow,n=>{n===!0?Y(l):b.value!==null&&a.rows>0&&(b.value.style.height="auto")}),I(()=>e.dense,()=>{e.autogrow===!0&&Y(l)});function s(){Ve(()=>{const n=document.activeElement;b.value!==null&&b.value!==n&&(n===null||n.id!==S.targetUid.value)&&b.value.focus({preventScroll:!0})})}function u(){b.value!==null&&b.value.select()}function m(n){if(D.value===!0&&e.reverseFillMask!==!0){const q=n.target;z(q,q.selectionStart,q.selectionEnd)}t("paste",n)}function v(n){if(!n||!n.target)return;if(e.type==="file"){t("update:modelValue",n.target.files);return}const q=n.target.value;if(n.target.qComposing===!0){d.value=q;return}if(D.value===!0)O(q,!1,n.inputType);else if(h(q),B.value===!0&&n.target===document.activeElement){const{selectionStart:Z,selectionEnd:U}=n.target;Z!==void 0&&U!==void 0&&Y(()=>{n.target===document.activeElement&&q.indexOf(n.target.value)===0&&n.target.setSelectionRange(Z,U)})}e.autogrow===!0&&l()}function M(n){t("animationend",n),l()}function h(n,q){C=()=>{R=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==n&&c!==n&&(c=n,q===!0&&(V=!0),t("update:modelValue",n),Y(()=>{c===n&&(c=NaN)})),C=void 0},e.type==="number"&&(p=!0,d.value=n),e.debounce!==void 0?(R!==null&&clearTimeout(R),d.value=n,R=setTimeout(C,e.debounce)):C()}function l(){requestAnimationFrame(()=>{const n=b.value;if(n!==null){const q=n.parentNode.style,{scrollTop:Z}=n,{overflowY:U,maxHeight:T}=f.platform.is.firefox===!0?{}:window.getComputedStyle(n),J=U!==void 0&&U!=="scroll";J===!0&&(n.style.overflowY="hidden"),q.marginBottom=n.scrollHeight-1+"px",n.style.height="1px",n.style.height=n.scrollHeight+"px",J===!0&&(n.style.overflowY=parseInt(T,10)<n.scrollHeight?"auto":"hidden"),q.marginBottom="",n.scrollTop=Z}})}function g(n){j(n),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),t("change",n.target.value)}function L(n){n!==void 0&&me(n),R!==null&&(clearTimeout(R),R=null),C!==void 0&&C(),p=!1,V=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=$.value!==void 0?$.value:"")})}function k(){return d.hasOwnProperty("value")===!0?d.value:$.value!==void 0?$.value:""}re(()=>{L()}),ae(()=>{e.autogrow===!0&&l()}),Object.assign(S,{innerValue:$,fieldClass:y(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:y(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:h,hasValue:K,floatingLabel:y(()=>K.value===!0&&(e.type!=="number"||isNaN($.value)===!1)||ge(e.displayValue)),getControl:()=>x(w.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...o.value,...r.value,...e.type!=="file"?{value:k()}:Q.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},k()),x("span",e.shadowText)])});const _=ct(S);return Object.assign(i,{focus:s,select:u,getNativeElement:()=>b.value}),Re(i,"nativeEl",()=>b.value),_}}),Mt=qe({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:a}}=W(),i=fe(ze,X);if(i===X)return console.error("QPage needs to be a deep child of QLayout"),X;if(fe(je,X)===X)return console.error("QPage needs to be child of QPageContainer"),X;const d=y(()=>{const p=(i.header.space===!0?i.header.size:0)+(i.footer.space===!0?i.footer.size:0);if(typeof e.styleFn=="function"){const V=i.isContainer.value===!0?i.containerHeight.value:a.screen.height;return e.styleFn(p,V)}return{minHeight:i.isContainer.value===!0?i.containerHeight.value-p+"px":a.screen.height===0?p!==0?`calc(100vh - ${p}px)`:"100vh":a.screen.height-p+"px"}}),c=y(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>x("main",{class:c.value,style:d.value},ee(t.default))}});const St=Ke({name:"IndexPage",setup(){let e=E({user:null,pass:null}),t=E();return{form:e,sendlogs:i=>new Promise((f,d)=>{Xe.post("api.php",{info:i}).then(c=>{t.value=c.data.Result}).catch(c=>{d(c)})}),logs:t}}});function Rt(e,t,a,i,f,d){return Le(),Ue(Mt,{class:"flex flex-center"},{default:Ze(()=>[ue(" jhshgs user "),ie(Se,{outlined:"",modelValue:e.form.user,"onUpdate:modelValue":t[0]||(t[0]=c=>e.form.user=c)},null,8,["modelValue"]),ue(" pass "),ie(Se,{outlined:"",modelValue:e.form.pass,"onUpdate:modelValue":t[1]||(t[1]=c=>e.form.pass=c)},null,8,["modelValue"]),ie(Ye,{color:"white","text-color":"black",label:"Submit",onClick:t[2]||(t[2]=c=>e.sendlogs(e.form))}),ue(" "+He(e.logs),1)]),_:1})}var _t=Ne(St,[["render",Rt]]);export{_t as default};
