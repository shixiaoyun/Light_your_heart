!function(e,t,S,i){"use strict";S.defineProperty(e,"__esModule",{value:!0});var P=function(e,t){if(i.isArray(e))return e;if(Symbol.iterator in S(e))return function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e};function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),S.defineProperty(e,n.key,n)}}var o,a,T=t("../../npm/@tarojs/taro-weapp/index.js"),u=s(T),x=s(t("../../services/api.js"));function s(e){return e&&e.__esModule?e:{default:e}}function E(e,t,r){return t in e?S.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=S.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(S.setPrototypeOf?S.setPrototypeOf(e,t):e.__proto__=t)}(f,u.default.Component),r(f,[{key:"_constructor",value:function(e){(function e(t,r,n){null===t&&(t=Function.prototype);var o=S.getOwnPropertyDescriptor(t,r);if(void 0===o){var a=S.getPrototypeOf(t);return null===a?void 0:e(a,r,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0})(f.prototype.__proto__||S.getPrototypeOf(f.prototype),"_constructor",this).call(this,e),this.$$refs=new u.default.RefsArray}},{key:"_createData",value:function(e,t,r){var n;this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=(0,T.useRouter)().params.id,a=(0,T.useState)({}),i=P(a,2),u=i[0],s=i[1],l=(0,T.useState)({}),c=P(l,2),f=c[0],p=c[1],v=(0,T.useState)([]),y=P(v,2),d=y[0],_=y[1],h=(0,T.useState)(),g=P(h,2),m=g[0],w=g[1];(0,T.useEffect)(function(){x.default.getTestInfo({answerId:o}).then(function(e){var t,r,n,o,a,i,u;0===e.code&&e.data&&(o=void 0===(n=(t=e.data||{}).course)?{}:n,i=void 0===(a=t.scoreInfo)?[]:a,s(void 0===(r=t.answer)?{}:r),p(o),u=i.filter(function(e){return"RESULT"===e.item}),w(u.length?u[0].msg:""),_(i.filter(function(e){return"满分"!==e.item&&"RESULT"!==e.item}))),console.log(e)})},[o]);var b=(E(n={"正常":"a","轻度":"b"},"轻度","c"),E(n,"重度","d"),E(n,"非常严重","e"),n),$=d&&d.length?d.map(function(e,t){return e={$original:(0,T.internal_get_original)(e)},{$loopState__temp2:d&&d.length?(0,T.internal_inline_style)({width:e.$original.value/e.$original.tvalue*100+"%"}):null,$original:e.$original}}):[];return S.assign(this.__state,{loopArray3:$,scoreMsg:m,score:d,BADGE_MSG:b,course:f,answer:u}),this.__state}}]),a=o=f,o.$$events=[],o.$$componentPath="pages/evaluateResult/index",a);function f(){var e,t,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f);for(var n=arguments.length,o=i(n),a=0;a<n;a++)o[a]=arguments[a];return(t=r=l(this,(e=f.__proto__||S.getPrototypeOf(f)).call.apply(e,[this].concat(o)))).config={navigationBarTitleText:"测评结果"},r.$usedState=["loopArray3","scoreMsg","score","BADGE_MSG","course","answer"],r.customComponents=[],l(r,t)}c.config={navigationBarTitleText:"测评结果"},e.default=c,Component(t("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(c,!0))}(exports,require,Object,Array);