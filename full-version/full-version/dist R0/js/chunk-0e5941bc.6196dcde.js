(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e5941bc"],{"0952":function(t,e,s){},"2a45":function(t,e,s){"use strict";var a=s("6f6f"),l=s.n(a);l.a},4304:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vs-tabs",{key:t.isSmallerScreen,staticClass:"tabs-shadow-none",attrs:{position:t.isSmallerScreen?"top":"left",id:"profile-tabs"}},[s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-user",label:t.isSmallerScreen?"":"General"}},[s("div",{staticClass:"tab-general md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-general")],1)]),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-lock",label:t.isSmallerScreen?"":"Change Password"}},[s("div",{staticClass:"tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-change-password")],1)]),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-info",label:t.isSmallerScreen?"":"Info"}},[s("div",{staticClass:"tab-info md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-info")],1)]),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-github",label:t.isSmallerScreen?"":"Social Links"}},[s("div",{staticClass:"tab-social-links md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-social-links")],1)]),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-link-2",label:t.isSmallerScreen?"":"Connections"}},[s("div",{staticClass:"tab-text md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-connections")],1)]),s("vs-tab",{attrs:{"icon-pack":"feather",icon:"icon-bell",label:t.isSmallerScreen?"":"Notifications"}},[s("div",{staticClass:"tab-text md:ml-4 md:mt-0 mt-4 ml-0"},[s("user-settings-notifications")],1)])],1)},l=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"flex flex-wrap items-center mb-base"},[s("vs-avatar",{staticClass:"mr-4 mb-4",attrs:{src:t.activeUserInfo.photoURL,size:"70px"}}),s("div",[s("vs-button",{staticClass:"mr-4 sm:mb-0 mb-2"},[t._v("Upload photo")]),s("vs-button",{attrs:{type:"border",color:"danger"}},[t._v("Remove")]),s("p",{staticClass:"text-sm mt-2"},[t._v("Allowed JPG, GIF or PNG. Max size of 800kB")])],1)],1),s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),s("vs-input",{staticClass:"w-full",attrs:{"label-placeholder":"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("vs-alert",{staticClass:"h-full my-4",attrs:{"icon-pack":"feather",icon:"icon-info",color:"warning"}},[s("span",[t._v("Your account is not verified. "),s("a",{staticClass:"hover:underline",attrs:{href:"#"}},[t._v("Resend Confirmation")])])]),s("vs-input",{staticClass:"w-full my-base",attrs:{"label-placeholder":"Company"},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}),s("div",{staticClass:"flex flex-wrap items-center justify-end"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)},i=[],o={data:function(){return{username:"johny_01",name:this.$store.state.AppActiveUser.displayName,email:"john@admin.com",company:"SnowMash Technologies Pvt Ltd"}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},c=o,r=s("2877"),u=Object(r["a"])(c,n,i,!1,null,null,null),m=u.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Old Password"},model:{value:t.old_password,callback:function(e){t.old_password=e},expression:"old_password"}}),s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"New Password"},model:{value:t.new_password,callback:function(e){t.new_password=e},expression:"new_password"}}),s("vs-input",{staticClass:"w-full mb-base",attrs:{"label-placeholder":"Confirm Password"},model:{value:t.confirm_new_password,callback:function(e){t.confirm_new_password=e},expression:"confirm_new_password"}}),s("div",{staticClass:"flex flex-wrap items-center justify-end"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)},b=[],v={data:function(){return{old_password:"",new_password:"",confirm_new_password:""}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},p=v,f=Object(r["a"])(p,d,b,!1,null,null,null),w=f.exports,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("vs-textarea",{attrs:{label:"Bio",placeholder:"Your bio..."},model:{value:t.bio,callback:function(e){t.bio=e},expression:"bio"}}),s("div",{staticClass:"mt-8"},[s("label",{staticClass:"text-sm"},[t._v("Birth Date")]),s("flat-pickr",{staticClass:"w-full",attrs:{config:{dateFormat:"d F Y"}},model:{value:t.dob,callback:function(e){t.dob=e},expression:"dob"}})],1),s("div",{staticClass:"mt-8"},[s("label",{staticClass:"text-sm"},[t._v("Country")]),s("v-select",{attrs:{options:t.countryOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}})],1),s("div",{staticClass:"mt-8"},[s("label",{staticClass:"text-sm"},[t._v("Languages")]),s("v-select",{attrs:{multiple:"",closeOnSelect:!1,options:t.langOptions,dir:t.$vs.rtl?"rtl":"ltr"},model:{value:t.lang_known,callback:function(e){t.lang_known=e},expression:"lang_known"}})],1),s("vs-input",{staticClass:"w-full mt-8",attrs:{type:"number","label-placeholder":"Mobile"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),s("vs-input",{staticClass:"w-full mt-8",attrs:{"label-placeholder":"Website"},model:{value:t.website,callback:function(e){t.website=e},expression:"website"}}),s("div",{staticClass:"mt-8 mb-base"},[s("label",{staticClass:"text-sm"},[t._v("Gender")]),s("div",{staticClass:"mt-2"},[s("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"male"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("Male")]),s("vs-radio",{staticClass:"mr-4",attrs:{"vs-value":"female"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("Female")]),s("vs-radio",{attrs:{"vs-value":"other"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v("Other")])],1)]),s("div",{staticClass:"flex flex-wrap items-center justify-end"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)},C=[],g=s("c38f"),k=s.n(g),_=(s("0952"),s("4a7a")),x=s.n(_),y={components:{flatPickr:k.a,vSelect:x.a},data:function(){return{bio:this.$store.state.AppActiveUser.about,dob:null,country:"USA",lang_known:["English","Russian"],gender:"male",mobile:"",website:"",countryOptions:[{label:"Australia",value:"australia"},{label:"France",value:"france"},{label:"Germany",value:"germany"},{label:"India",value:"india"},{label:"Jordan",value:"jordan"},{label:"Morocco",value:"morocco"},{label:"Portuguese",value:"portuguese"},{label:"Syria",value:"syria"},{label:"USA",value:"usa"}],langOptions:[{label:"English",value:"english"},{label:"Spanish",value:"spanish"},{label:"French",value:"french"},{label:"Russian",value:"russian"},{label:"German",value:"german"},{label:"Arabic",value:"arabic"},{label:"Sanskrit",value:"sanskrit"}]}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},S=y,U=Object(r["a"])(S,h,C,!1,null,null,null),A=U.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-twitter",label:"GitHub","icon-no-border":""},model:{value:t.twitter,callback:function(e){t.twitter=e},expression:"twitter"}}),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-facebook",label:"GitHub","icon-no-border":""},model:{value:t.facebook,callback:function(e){t.facebook=e},expression:"facebook"}}),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-instagram",label:"GitHub","icon-no-border":""},model:{value:t.instagram,callback:function(e){t.instagram=e},expression:"instagram"}}),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-github",label:"GitHub","icon-no-border":""},model:{value:t.github,callback:function(e){t.github=e},expression:"github"}}),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-linkedin",label:"GitHub","icon-no-border":""},model:{value:t.linkedin,callback:function(e){t.linkedin=e},expression:"linkedin"}}),s("vs-input",{staticClass:"w-full mb-base",attrs:{"icon-pack":"feather",icon:"icon-slack",label:"GitHub","icon-no-border":""},model:{value:t.slack,callback:function(e){t.slack=e},expression:"slack"}}),s("div",{staticClass:"flex flex-wrap items-center justify-end"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)],1)},$=[],G={data:function(){return{twitter:"https://twitter.com/adoptionism744",facebook:"https://www.facebook.com/adoptionism664",instagram:"https://www.instagram.com/adopt-ionism744/",github:"https://github.com/madop818",linkedin:"https://codepen.io/adoptism243",slack:"@adoptionism744"}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},E=G,O=Object(r["a"])(E,j,$,!1,null,null,null),I=O.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"flex flex-wrap justify-between items-center mb-8"},[s("div",[s("p",[t._v("Account is connected with Google.")]),s("p",{staticClass:"font-medium mb-4"},[t._v("john@gmail.com")])]),s("vs-button",{attrs:{type:"border",color:"danger"}},[t._v("Disconnect")])],1),s("div",{staticClass:"flex flex-wrap justify-between items-center mb-base"},[s("div",[s("p",[t._v("Account is connected with facebook.")]),s("p",{staticClass:"font-medium mb-4"},[t._v("@pixinvents")])]),s("vs-button",{attrs:{type:"border",color:"danger"}},[t._v("Disconnect")])],1),s("vs-button",{staticClass:"mb-6 ml-auto",attrs:{color:"#00aaff","icon-pack":"feather",icon:"icon-twitter"}},[t._v("Connected To Twitter")]),s("vs-button",{staticClass:"ml-auto",attrs:{color:"#405DE6","icon-pack":"feather",icon:"icon-instagram"}},[t._v("Connected To Instagram")])],1)},R=[],N={data:function(){return{old_password:"",new_password:"",confirm_new_password:""}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},F=N,H=Object(r["a"])(F,P,R,!1,null,null,null),L=H.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vx-card",{attrs:{"no-shadow":""}},[s("div",{staticClass:"mb-base"},[s("h6",{staticClass:"mb-4"},[t._v("Activity")]),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),s("span",{staticClass:"ml-4"},[t._v("Email me when someone comments onmy article")])],1),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}}),s("span",{staticClass:"ml-4"},[t._v("Email me when someone answers on my form")])],1),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.follow,callback:function(e){t.follow=e},expression:"follow"}}),s("span",{staticClass:"ml-4"},[t._v("Email me hen someone follows me")])],1)]),s("div",[s("h6",{staticClass:"mb-4"},[t._v("Application")]),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.news,callback:function(e){t.news=e},expression:"news"}}),s("span",{staticClass:"ml-4"},[t._v("News and announcements")])],1),s("div",{staticClass:"flex items-center mb-4"},[s("vs-switch",{model:{value:t.product_update,callback:function(e){t.product_update=e},expression:"product_update"}}),s("span",{staticClass:"ml-4"},[t._v("Weekly product updates")])],1),s("div",{staticClass:"flex items-center"},[s("vs-switch",{model:{value:t.blog,callback:function(e){t.blog=e},expression:"blog"}}),s("span",{staticClass:"ml-4"},[t._v("Weekly blog digest")])],1)]),s("div",{staticClass:"flex flex-wrap items-center justify-end mt-base"},[s("vs-button",{staticClass:"ml-auto mt-2"},[t._v("Save Changes")]),s("vs-button",{staticClass:"ml-4 mt-2",attrs:{type:"border",color:"warning"}},[t._v("Reset")])],1)])},D=[],J={data:function(){return{comment:!0,answer:!0,follow:!1,news:!1,product_update:!1,blog:!0}},computed:{activeUserInfo:function(){return this.$store.state.AppActiveUser}}},T=J,W=Object(r["a"])(T,M,D,!1,null,null,null),B=W.exports,Y={components:{UserSettingsGeneral:m,UserSettingsChangePassword:w,UserSettingsInfo:A,UserSettingsSocialLinks:I,UserSettingsConnections:L,UserSettingsNotifications:B},data:function(){return{}},computed:{isSmallerScreen:function(){return this.$store.state.windowWidth<768}}},z=Y,q=(s("2a45"),Object(r["a"])(z,a,l,!1,null,null,null));e["default"]=q.exports},"6f6f":function(t,e,s){}}]);
//# sourceMappingURL=chunk-0e5941bc.6196dcde.js.map