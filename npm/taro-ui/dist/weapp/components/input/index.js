!function(e,t,q,l){"use strict";q.defineProperty(e,"__esModule",{value:!0});var o=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e};function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),q.defineProperty(e,n.key,n)}}var r,a,B=t("../../../../../@tarojs/taro-weapp/index.js"),u=s(B),H=s(t("../../../../../classnames/index.js")),i=s(t("../../../../../prop-types/index.js"));function s(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=q.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(q.setPrototypeOf?q.setPrototypeOf(e,t):e.__proto__=t)}(c,s(t("../../common/component.js")).default),o(c,[{key:"_constructor",value:function(){(function e(t,o,n){null===t&&(t=Function.prototype);var r=q.getOwnPropertyDescriptor(t,o);if(void 0===r){var a=q.getPrototypeOf(t);return null===a?void 0:e(a,o,n)}if("value"in r)return r.value;var l=r.get;return void 0!==l?l.call(n):void 0})(c.prototype.__proto__||q.getPrototypeOf(c.prototype),"_constructor",this).apply(this,arguments),this.inputClearing=!1,this.$$refs=new u.default.RefsArray}},{key:"_createData",value:function(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var n=this.__props,r=n.className,a=n.customStyle,l=n.name,u=n.cursorSpacing,i=n.confirmType,s=n.cursor,p=n.selectionStart,d=n.selectionEnd,c=n.adjustPosition,f=n.border,h=n.title,y=n.error,m=n.clear,g=n.placeholder,b=n.placeholderStyle,C=n.placeholderClass,_=n.autoFocus,v=n.focus,S=n.value,w=n.required,x=function(e){var t={type:e.type,maxLength:e.maxLength,disabled:e.disabled,password:!1};switch(t.type){case"phone":t.type="number",t.maxLength=11;break;case"password":t.type="text",t.password=!0}return e.disabled||e.editable||(t.disabled=!0),t}(this.__props),k=x.type,P=x.maxLength,T=x.disabled,j=x.password,O=(0,H.default)("at-input",{"at-input--without-border":!f},r),E=(0,H.default)("at-input__container",{"at-input--error":y,"at-input--disabled":T}),F=(0,H.default)("at-input__overlay",{"at-input__overlay--hidden":!T}),L=(0,H.default)("placeholder",C),$=(0,B.internal_inline_style)(a);return q.assign(this.__state,{anonymousState__temp:$,rootCls:O,containerCls:E,overlayCls:F,title:h,required:w,name:l,type:k,password:j,placeholderStyle:b,placeholderCls:L,placeholder:g,cursorSpacing:u,maxLength:P,autoFocus:_,focus:v,value:S,confirmType:i,cursor:s,selectionStart:p,selectionEnd:d,adjustPosition:c,clear:m,error:y}),this.__state}}]),a=r=c,r.$$events=["handleClick","handleInput","handleFocus","handleBlur","handleConfirm","handleKeyboardHeightChange","handleClearValue","handleErrorClick"],r.$$componentPath="C:/Users/HP/Desktop/项目总/LightMindMiniProgram/node_modules/taro-ui/dist/weapp/components/input/index",a);function c(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,r=l(n),a=0;a<n;a++)r[a]=arguments[a];return(t=o=p(this,(e=c.__proto__||q.getPrototypeOf(c)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","rootCls","containerCls","overlayCls","title","required","name","type","password","placeholderStyle","placeholderCls","placeholder","cursorSpacing","maxLength","autoFocus","focus","value","confirmType","cursor","selectionStart","selectionEnd","adjustPosition","clear","error","className","customStyle","border","placeholderClass","editable","children"],o.handleInput=function(e){return o.props.onChange(e.detail.value,e)},o.handleFocus=function(e){"function"==typeof o.props.onFocus&&o.props.onFocus(e.detail.value,e)},o.handleBlur=function(e){"function"==typeof o.props.onBlur&&o.props.onBlur(e.detail.value,e),"blur"!==e.type||o.inputClearing||o.props.onChange(e.detail.value,e),o.inputClearing=!1},o.handleConfirm=function(e){"function"==typeof o.props.onConfirm&&o.props.onConfirm(e.detail.value,e)},o.handleClick=function(e){o.props.editable||"function"!=typeof o.props.onClick||o.props.onClick(e)},o.handleClearValue=function(e){o.inputClearing=!0,o.props.onChange("",e)},o.handleKeyboardHeightChange=function(e){"function"==typeof o.props.onKeyboardHeightChange&&o.props.onKeyboardHeightChange(e)},o.handleErrorClick=function(e){"function"==typeof o.props.onErrorClick&&o.props.onErrorClick(e)},o.customComponents=[],p(o,t)}d.defaultProps={className:"",customStyle:"",value:"",name:"",placeholder:"",placeholderStyle:"",placeholderClass:"",title:"",cursorSpacing:50,confirmType:"done",cursor:0,selectionStart:-1,selectionEnd:-1,adjustPosition:!0,maxLength:140,type:"text",disabled:!1,border:!0,editable:!0,error:!1,clear:!1,autoFocus:!1,focus:!1,required:!1,onChange:function(){},onFocus:function(){},onBlur:function(){},onConfirm:function(){},onErrorClick:function(){},onClick:function(){}},d.propTypes={className:i.default.oneOfType([i.default.string,i.default.array]),customStyle:i.default.oneOfType([i.default.string,i.default.object]),value:i.default.oneOfType([i.default.string,i.default.number]),name:i.default.string,placeholder:i.default.string,placeholderStyle:i.default.string,placeholderClass:i.default.string,title:i.default.string,confirmType:i.default.string,cursor:i.default.oneOfType([i.default.string,i.default.number]),selectionStart:i.default.oneOfType([i.default.string,i.default.number]),selectionEnd:i.default.oneOfType([i.default.string,i.default.number]),adjustPosition:i.default.bool,cursorSpacing:i.default.oneOfType([i.default.string,i.default.number]),maxLength:i.default.oneOfType([i.default.string,i.default.number]),type:i.default.string,disabled:i.default.bool,border:i.default.bool,editable:i.default.bool,error:i.default.bool,clear:i.default.bool,autoFocus:i.default.bool,focus:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,onConfirm:i.default.func,onErrorClick:i.default.func,onClick:i.default.func,required:i.default.bool},e.default=d,Component(t("../../../../../@tarojs/taro-weapp/index.js").default.createComponent(d))}((module,exports),require,Object,Array);