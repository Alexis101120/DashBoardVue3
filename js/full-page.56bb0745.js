(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["full-page"],{"3ca3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("card-component",{attrs:{title:"Login",icon:"lock"}},[s("router-link",{staticClass:"button is-small",attrs:{slot:"button",to:"/"},slot:"button"},[t._v(" Dashboard ")]),s("form",{attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[s("b-field",{attrs:{label:"E-mail Address"}},[s("b-input",{attrs:{name:"email",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),s("b-field",{attrs:{label:"Password"}},[s("b-input",{attrs:{type:"password",name:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),s("b-field",[s("b-checkbox",{staticClass:"is-thin",attrs:{type:"is-black"},model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v(" Remember me ")])],1),s("hr"),s("b-field",{attrs:{grouped:""}},[s("div",{staticClass:"control"},[s("b-button",{attrs:{"native-type":"submit",type:"is-black",loading:t.isLoading}},[t._v(" Login ")])],1),s("div",{staticClass:"control"},[s("router-link",{staticClass:"button is-outlined is-black",attrs:{to:"/"}},[t._v(" Dashboard ")])],1)])],1)],1)},o=[],r=s("6df7"),i={name:"Login",components:{CardComponent:r["a"]},data(){return{isLoading:!1,form:{email:"john.doe@example.com",password:"my-secret-password-9e9w",remember:!1}}},methods:{submit(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1,this.$router.push("/")},750)}}},l=i,n=s("2877"),c=Object(n["a"])(l,a,o,!1,null,null,null);e["default"]=c.exports},"559f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section hero is-fullheight is-error-section"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-two-fifths"},[s("router-view")],1)])])]),t._m(0)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero-foot has-text-centered"},[s("div",{staticClass:"logo"})])}],r={name:"FullPage",created(){this.$store.dispatch("toggleFullPage",!0)},beforeDestroy(){this.$store.dispatch("toggleFullPage",!1)}},i=r,l=s("2877"),n=Object(l["a"])(i,a,o,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=full-page.56bb0745.js.map