(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64ab3822"],{"0952":function(t,e,a){},"2ee4":function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,i,n,o){var r,s=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,s=t.default);var l,d="function"==typeof s?s.options:s;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),a&&(d.functional=!0),n&&(d._scopeId=n),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=l):i&&(l=i),l){var u=d.functional,f=u?d.render:d.beforeCreate;u?(d._injectStyles=l,d.render=function(t,e){return l.call(e),f(t,e)}):d.beforeCreate=f?[].concat(f,l):[l]}return{esModule:r,exports:s,options:d}}},function(t,e,a){"use strict";var i=a(2),n=a(4),o=a(14);e.a={name:"form-wizard",components:{WizardButton:i.a,WizardStep:n.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var i=function i(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,i)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,i):(this.setValidationError(null),i())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(o.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(o.a)(e.tabId)}},focusPrevTab:function(){var t=Object(o.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(o.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(o.c)(t))this.setLoading(!0),t.then((function(t){a.setLoading(!1);var i=!0===t;a.executeBeforeChange(i,e)})).catch((function(t){a.setLoading(!1),a.setValidationError(t)}));else{var i=!0===t;this.executeBeforeChange(i,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var i=a.beforeChange();this.validateBeforeChange(i,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=this.tabs[t],n=this.tabs[e];return i&&(i.active=!1),n&&(n.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find((function(a,i){var n=a.route===t;return n&&(e=i),n}));if(a&&!a.active){var i=e>this.activeTabIndex;this.navigateToTab(e,i)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function i(t){a(10)}var n=a(3),o=a(11),r=a(0),s=i,c=r(n.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function i(t){a(12)}var n=a(5),o=a(13),r=a(0),s=i,c=r(n.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(8),n=a(16),o=a(2),r=a(4);a.d(e,"FormWizard",(function(){return i.a})),a.d(e,"TabContent",(function(){return n.a})),a.d(e,"WizardButton",(function(){return o.a})),a.d(e,"WizardStep",(function(){return r.a}));var s={install:function(t){t.component("form-wizard",i.a),t.component("tab-content",n.a),t.component("wizard-button",o.a),t.component("wizard-step",r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(s),e.default=s},function(t,e,a){"use strict";function i(t){a(9)}var n=a(1),o=a(15),r=a(0),s=i,c=r(n.a,o.a,!1,s,null,null);e.a=c.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},n=[],o={render:i,staticRenderFns:n};e.a=o},function(t,e){},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},n=[],o={render:i,staticRenderFns:n};e.a=o},function(t,e,a){"use strict";function i(){return document.activeElement.id}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=i();return t.findIndex((function(t){return t.tabId===e}))}function o(t){document.getElementById(t).focus()}function r(t){return t.then&&"function"==typeof t.then}e.b=n,e.a=o,e.c=r},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,i){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:i},nativeOn:{click:function(e){t.navigateToTab(i)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(i)}}})],{tab:e,index:i,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},n=[],o={render:i,staticRenderFns:n};e.a=o},function(t,e,a){"use strict";var i=a(6),n=a(17),o=a(0),r=o(i.a,n.a,!1,null,null,null);e.a=r.exports},function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},n=[],o={render:i,staticRenderFns:n};e.a=o}])}))},3107:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("operator-sidebar",{attrs:{isSidebarActive:t.operatorSidebar,data:t.sidebarData},on:{closeSidebar:t.toggleDataSidebar,update:t.updateGrid,add:t.addGrid}}),a("vx-card",{directives:[{name:"show",rawName:"v-show",value:!t.isInfoHidden,expression:"!isInfoHidden"}],ref:"MainCard2"},[a("div",{staticClass:"mt-5"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/6 w-full"},[a("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"border"},on:{click:t.cancelAdd}},[t._v("Return")])],1),a("div",{staticClass:"vx-col md:w-1/8 w-full"},[a("vs-button",{staticClass:"mb-2",attrs:{color:"warning",type:"border"},on:{click:t.initValues}},[t._v("Restart")])],1)]),a("form-wizard",{ref:"wizard",attrs:{color:"rgba(var(--vs-primary), 1)",errorColor:"rgba(var(--vs-danger), 1)",title:t.title,subtitle:t.subtitle,finishButtonText:"Save entry"},on:{"on-complete":t.formSubmitted}},[a("tab-content",{staticClass:"mb-5",attrs:{title:"Step 1",icon:"feather icon-home"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"Employee (less 9 characters)"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"Description"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full md:mt-8"},[a("div",{staticClass:"demo-alignment"},[a("span",[t._v("Operator Download (No | Yes):")]),a("div",{staticClass:"flex"},[a("vs-switch",{attrs:{color:"success"},model:{value:t.formData.enable,callback:function(e){t.$set(t.formData,"enable",e)},expression:"formData.enable"}})],1)])])])]),a("tab-content",{staticClass:"mb-5",attrs:{title:"Step 2",icon:"feather icon-save"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("vs-input",{staticClass:"w-full",attrs:{label:"Employee's FAMS Tag"},model:{value:t.formData.tag,callback:function(e){t.$set(t.formData,"tag",e)},expression:"formData.tag"}})],1),a("div",{staticClass:"vx-col md:w-1/2 w-full mt-5"},[a("label",{staticClass:"w-full",attrs:{size:"small"}},[t._v("Operator Type ")]),a("v-select",{staticClass:"w-full",attrs:{placeholder:"Search / Select Operator Type",options:t.operatorTypeData,name:"Search / Select Operator Type"},on:{"search:blur":t.populateDataOperatorType},model:{value:t.operatorTypeSelect,callback:function(e){t.operatorTypeSelect=e},expression:"operatorTypeSelect"}})],1)])])],1)],1)]),a("vx-card",{ref:"MainCard"},[a("div",[a("vs-table",{ref:"gridTable",staticClass:"vs-con-loading__container",attrs:{pagination:"","max-items":t.itemsPerPage,search:"",data:t.operatorData},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;return t._l(i,(function(e,i){return a("vs-tr",{key:i,attrs:{data:e}},[a("vs-td",{attrs:{data:e.tag}},[t._v(t._s(e.tag))]),a("vs-td",{attrs:{data:e.operator}},[t._v(t._s(e.operator))]),a("vs-td",{attrs:{data:e.operatorType}},[t._v(t._s(e.operatorType))]),a("vs-td",{attrs:{data:e.description}},[t._v(t._s(e.description))]),a("vs-td",{attrs:{data:e.enable}},[t._v(t._s(e.enable))]),a("vs-td",{staticClass:"whitespace-no-wrap"},[a("feather-icon",{attrs:{icon:"EditIcon",svgClasses:"w-5 h-5 hover:text-primary stroke-current"},on:{click:function(a){return a.stopPropagation(),t.editDataSidebar(e)}}}),a("feather-icon",{staticClass:"ml-2",attrs:{icon:"TrashIcon",svgClasses:"w-5 h-5 hover:text-danger stroke-current"},on:{click:function(a){return a.stopPropagation(),t.deleteGrid(e)}}})],1),a("template",{staticClass:"expand-user",slot:"expand"},[a("div",{staticClass:"con-expand-users w-full"},[a("div",[a("vs-table",{ref:"gridTable2",refInFor:!0,attrs:{data:e.perStore},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.data;return t._l(i,(function(e,i){return a("vs-tr",{key:i,attrs:{data:e}},[a("vs-td",{staticClass:"whitespace-no-wrap"},[a("feather-icon",{attrs:{icon:"SaveIcon",svgClasses:"w-5 h-5 hover:text-primary stroke-current"},on:{click:function(a){return a.stopPropagation(),t.saveOperatorParameters(e)}}}),a("feather-icon",{staticClass:"ml-2",attrs:{icon:"TrashIcon",svgClasses:"w-5 h-5 hover:text-danger stroke-current"},on:{click:function(a){return a.stopPropagation(),t.deleteGrid(e)}}})],1),a("vs-td",{attrs:{data:e.download}},[a("vs-switch",{model:{value:e.download,callback:function(a){t.$set(e,"download",a)},expression:"tr.download"}},[a("span",{attrs:{slot:"on"},slot:"on"},[t._v("Yes")]),a("span",{attrs:{slot:"off"},slot:"off"},[t._v("No")])])],1),a("vs-td",{attrs:{data:e.storeName}},[t._v(t._s(e.storeName))]),a("vs-td",{attrs:{data:e.operatorTag}},[t._v(t._s(e.operatorTag))]),a("vs-td",{attrs:{data:e.operatorName}},[t._v(t._s(e.operatorName))])],1)}))}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("template",{slot:"thead"},[a("vs-th",[t._v("Action")]),a("vs-th",[t._v("Download")]),a("vs-th",[t._v("Store")]),a("vs-th",[t._v("Tag")]),a("vs-th",[t._v("Operator")])],1)],2)],1)])])],2)}))}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow",attrs:{slot:"header"},slot:"header"},[a("vs-button",{attrs:{color:"warning",type:"gradient","icon-pack":"feather",icon:"icon-refresh-ccw"},on:{click:function(e){return t.GetGrid()}}},[t._v("Reload")]),a("vs-button",{attrs:{color:"success",type:"gradient","icon-pack":"feather",icon:"icon-plus-square"},on:{click:t.addVue}},[t._v("Add New")]),a("vs-dropdown",{staticClass:"cursor-pointer mr-4",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 border border-solid border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[a("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" - "+t._s(t.operatorData.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.operatorData.length)+" of "+t._s(t.operatorData.length))]),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[a("span",[t._v("10")])]),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[a("span",[t._v("20")])]),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=50}}},[a("span",[t._v("50")])]),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=100}}},[a("span",[t._v("100")])])],1)],1)],1),a("template",{slot:"thead"},[a("vs-th",{attrs:{"sort-key":"Tag"}},[t._v("Tag")]),a("vs-th",{attrs:{"sort-key":"Operator"}},[t._v("Operator")]),a("vs-th",{attrs:{"sort-key":"Type"}},[t._v("Type")]),a("vs-th",{attrs:{"sort-key":"Description"}},[t._v("Description")]),a("vs-th",{attrs:{"sort-key":"Active"}},[t._v("Active")]),a("vs-th",[t._v("Action")])],1)],2)],1)])],1)},n=[],o=(a("7f7f"),a("bc3a"),a("c38f")),r=a.n(o),s=(a("0952"),a("4a7a")),c=a.n(s),l=a("2ee4"),d=(a("da93"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-sidebar",{staticClass:"add-new-data-sidebar items-no-padding",attrs:{"click-not-close":"","position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:t.isSidebarActiveLocal,callback:function(e){t.isSidebarActiveLocal=e},expression:"isSidebarActiveLocal"}},[a("div",{staticClass:"mt-6 flex items-center justify-between px-6"},[a("h4",[t._v(t._s(0===Object.entries(this.data).length?"ADD NEW":"UPDATE")+" ITEM")]),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(e){e.stopPropagation(),t.isSidebarActiveLocal=!1}}})],1),a("vs-divider",{staticClass:"mb-0"}),a(t.scrollbarTag,{key:t.$vs.rtl,tag:"component",staticClass:"scroll-area--data-list-add-new",attrs:{settings:t.settings}},[a("div",[a("div",{staticClass:"vx-row px-4 pt-2 pb-3"},[a("div",{staticClass:"vx-col flex-1"},[a("label",[t._v("Group")]),a("v-select",{attrs:{options:t.dropdownValue,placeholder:"Search / Select Group"},on:{"search:blur":t.populateData},model:{value:t.dropdownSelect,callback:function(e){t.dropdownSelect=e},expression:"dropdownSelect"}})],1)]),a("div",{staticClass:"vx-row px-4 pb-3"},[a("div",{staticClass:"vx-col flex-4"},[a("label",[t._v("Allocation Code (To be displayed on FAMS Screen)")]),a("vs-input",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-phone",placeholder:"Allocation Name",name:"Description"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("div",{staticClass:"vx-col flex-4"},[a("label",[t._v("Allocation Active (Enable / Disable)")]),a("vs-switch",{model:{value:t.formData.enable,callback:function(e){t.$set(t.formData,"enable",e)},expression:"formData.enable"}})],1)]),a("div",{staticClass:"vx-row px-4 pb-3"},[a("div",{staticClass:"vx-col flex-1"},[a("label",[t._v("Allocation Description")]),a("vs-input",{staticClass:"w-full",attrs:{"icon-pack":"feather",icon:"icon-phone",placeholder:"Allocation Description",name:"Description"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)])])]),a("div",{staticClass:"flex flex-wrap items-center p-6",attrs:{slot:"footer"},slot:"footer"},[a("vs-button",{attrs:{color:"success",type:"gradient","icon-pack":"feather",icon:"icon-check"},on:{click:t.submitData}},[t._v("Submit")]),a("vs-button",{attrs:{color:"danger",type:"gradient","icon-pack":"feather",icon:"icon-x-square"},on:{click:function(e){t.isSidebarActiveLocal=!1}}},[t._v("Cancel")])],1)],1)}),u=[],f=(a("ac6a"),a("ffc1"),a("9d63")),p=a.n(f),v={props:{isSidebarActive:{type:Boolean,required:!0},data:{type:Object,default:function(){}}},components:{VuePerfectScrollbar:p.a,"v-select":c.a},mounted:function(){this.LoadAllocationGroup()},data:function(){return{dropdownValue:[],dropdownSelect:[],formData:{id:0,accountId:0,name:"None",enable:!1,description:"None",groupId:0,group:"None"},settings:{maxScrollbarLength:60,wheelSpeed:.6}}},watch:{isSidebarActive:function(t){t&&(0===Object.entries(this.data).length?(this.initValues(),this.$validator.reset()):(this.formData.id=this.data.id,this.formData.accountId=12,this.formData.name=this.data.name,this.formData.description=this.data.description,this.formData.groupId=this.data.allocationType.id,this.formData.group=this.data.allocationType.groupName,this.formData.enable=this.data.enable,this.dropdownSelect=this.formData.group,this.initValues()))}},computed:{isSidebarActiveLocal:{get:function(){return this.isSidebarActive},set:function(t){t||this.$emit("closeSidebar")}},isFormValid:function(){return!this.errors.any()},scrollbarTag:function(){return this.$store.getters.scrollbarTag}},methods:{populateData:function(){var t=this;t.dropdownSelect&&(t.formData.allocationTypeId=t.dropdownSelect.value,t.formData.allocationType=t.dropdownSelect.label)},LoadAllocationGroup:function(){var t=this,e=function(e){t.dropdownValue=e.data.map((function(t){return{label:t.name,value:t.id}}))},a=function(){};t.$ajaxGet(t,"AllocationTypes/GetAllocationTypedropdown",e,a)},initValues:function(){this.data.id||(this.formData.id=0,this.formData.name="",this.formData.description="",this.formData.allocationTypeId=0,this.formData.allocationType="",this.formData.enable=!1,this.dropdownSelect=0)},showLoadingOnElement:function(t,e,a){var i=this;i.$vs.loading({type:a,container:i.$refs[t].$el,scale:e})},submitData:function(){var t=this,e={id:0,accountId:12,name:t.formData.name,description:t.formData.description,allocationTypeId:t.formData.allocationTypeId,enable:t.formData.enable};null!==t.formData.id&&0!=t.formData.id?t.$emit("update",t.formData):t.$emit("add",e),this.$emit("closeSidebar"),this.initValues()}}},b=v,h=(a("5dab"),a("2877")),m=Object(h["a"])(b,d,u,!1,null,"09c6534d",null),g=m.exports,T={data:function(){return{title:"FAMS - new Employee Wizard!!",subtitle:"Please complete each tab to add new Employee (operator/driver)",operatorTypeSelect:0,operatorTypeData:[],isListHidden:!1,isInfoHidden:!0,itemsPerPage:10,operatorSidebar:!1,selected:[],operatorData:[],sidebarData:{},isMounted:!1,formData:{id:0,accountId:0,operatorTypeId:0,operatorType:"None",name:"None",enable:!0,description:"None",account:"",tag:"",perOperatorDataStore:[{id:0,storeId:0,operatorId:0,download:0}]}}},components:{flatPickr:r.a,operatorSidebar:g,"v-select":c.a,FormWizard:l["FormWizard"],TabContent:l["TabContent"]},computed:{currentPage:function(){return this.isMounted?this.$refs.gridTable.currentx:0}},mounted:function(){this.GetGrid(),this.isMounted=!0},methods:{successNotify:function(){this.$vs.notify({title:"Successfully",text:"Item successfully added | updated | removed",color:"success"})},FailedNotify:function(){this.$vs.notify({title:"Not Successfull",text:"Item not added",color:"danger"})},showLoadingOnElement:function(t,e,a){var i=this;i.$vs.loading({type:a,container:i.$refs[t].$el,scale:e})},addDataSidebar:function(){this.sidebarData={},this.toggleDataSidebar(!0)},editDataSidebar:function(t){t.accountId=12,this.sidebarData=t,this.toggleDataSidebar(!0)},populateDataOperatorType:function(){var t=this;t.operatorTypeSelect&&(t.formData.operatorTypeId=t.operatorTypeSelect.value,t.formData.operatorType=t.operatorTypeSelect.label)},cancelAdd:function(){this.isListHidden=!1,this.isInfoHidden=!0,this.initValues(),this.GetGrid()},addVue:function(){this.initValues(),this.isInfoHidden=!1,this.isListHidden=!0,this.GetDropdownOperatorType()},saveOperatorParameters:function(t){},initValues:function(){var t=this;t.$refs.wizard.navigateToTab(0)},formSubmitted:function(){},addGrid:function(t){var e=this;t.accountId=12,e.showLoadingOnElement("gridTable",1,"radius");var a=function(t){e.GetGrid()},i=function(){e.$vs.loading.close(e.$refs.gridTable.$el),e.successNotify()};e.$ajaxPost(e,"Operators",t,a,i)},updateGrid:function(t){var e=this;e.showLoadingOnElement("gridTable",1,"radius");var a=function(t){e.GetGrid()},i=function(){e.$vs.loading.close(e.$refs.gridTable.$el),e.successNotify()};e.$ajaxPut(e,"Operators/"+t.id,t,a,i)},deleteGrid:function(t){var e=this;e.showLoadingOnElement("gridTable",1,"radius");var a=function(t){e.GetGrid()},i=function(){e.$vs.loading.close(e.$refs.gridTable.$el),e.successNotify()};e.$ajaxDelete(e,"Operators/"+t.id+"?AccountId="+t.accountId,a,i)},GetGrid:function(){var t=this;t.showLoadingOnElement("gridTable",1,"radius");var e=function(e){t.operatorData=e.data},a=function(){t.$vs.loading.close(t.$refs.gridTable.$el)};t.$ajaxGet(t,"Operators/12?Username=csd",e,a)},GetDropdownOperatorType:function(){var t=this,e=function(e){t.operatorTypeData=e.data.map((function(t){return{label:t.name,value:t.id}}))},a=function(){t.$vs.loading.close(t.$refs.gridTable.$el)};t.$ajaxGet(t,"OperatorTypes/GetOperatorTypedropdown?AccountId=12&username=csd",e,a)},toggleDataSidebar:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.operatorSidebar=t}}},x=T,y=Object(h["a"])(x,i,n,!1,null,null,null);e["default"]=y.exports},"5dab":function(t,e,a){"use strict";var i=a("ddea"),n=a.n(i);n.a},da93:function(t,e,a){},ddea:function(t,e,a){}}]);
//# sourceMappingURL=chunk-64ab3822.1249f73d.js.map