(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-666bc473"],{"08cd":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout-page"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"d-flex align-start",attrs:{cols:"12"}},[r("v-icon",{attrs:{large:"",color:"#6F6F6F"},on:{click:function(e){return t.$emit("onBack")}}},[t._v("keyboard_arrow_left")]),r("span",{staticClass:"ml-2"},[r("h2",{staticClass:"grey--text text--darken-1",domProps:{innerHTML:t._s(t.header)}})]),r("v-spacer"),t.receive?r("v-btn",{staticClass:"text-center white--text",attrs:{rounded:"",large:"",color:"black"},on:{click:function(e){return t.$emit("receive")}}},[r("v-row",[r("v-col",[r("div",{staticClass:"font-weight-bold",staticStyle:{"font-size":"14px"}},[t._v("รับเหรียญ")])]),r("v-col",{staticClass:"pa-0 pt-3 pb-3"},[r("v-img",{attrs:{src:a("9e28"),width:"23px",height:"20px"}})],1)],1)],1):t._e()],1),r("v-col",{staticClass:"mt-5 px-3",attrs:{cols:"12"}},[r("v-row",{attrs:{"no-gutters":"",justify:"center"}},[t._t("content")],2)],1)],1)],1)},s=[],n={name:"Layout",props:{header:{type:String,default:""},receive:{type:Boolean,default:!1}}},o=n,c=(a("4bbb"),a("2877")),i=a("6544"),l=a.n(i),u=a("8336"),d=a("62ad"),v=a("132d"),p=a("adda"),h=a("0fd9"),f=a("2fa4"),m=Object(c["a"])(o,r,s,!1,null,null,null);e["a"]=m.exports;l()(m,{VBtn:u["a"],VCol:d["a"],VIcon:v["a"],VImg:p["a"],VRow:h["a"],VSpacer:f["a"]})},"20f6":function(t,e,a){},2485:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"history-page"},[a("layout",{attrs:{header:"ประวัติการทำรายการ"},on:{onBack:function(e){return t.$router.push("/")}},scopedSlots:t._u([{key:"content",fn:function(){return[a("v-col",{directives:[{name:"show",rawName:"v-show",value:t.showPage,expression:"showPage"}],attrs:{cols:"12",xs:"12",sm:"10",md:"8",lg:"6"}},[t.history.length>0?a("div",{staticClass:"box-detail my-2"},t._l(t.orderByHistory,(function(e,r){return a("v-row",{key:r,attrs:{align:"center"},on:{click:function(a){return t.$router.push({name:"HistoryDetail",params:{id:e.transaction_hash}})}}},[a("v-col",{attrs:{cols:"2"}},[a("div",{staticClass:"icon-shuff"},["redeem"==e.type?a("v-icon",{attrs:{large:"",dark:"",color:"#31B7C0"}},[t._v(" add_circle ")]):a("v-icon",{attrs:{large:"",dark:"",color:"#FF9300"}},[t._v(" remove_circle ")])],1)]),a("v-col",{staticClass:"detail-body",attrs:{cols:"6"}},[a("div",[t._v(t._s(e.note))]),a("div",[t._v(t._s(t.DateTime(e.created_at)))])]),a("v-col",{staticClass:"text-right",attrs:{cols:"4"}},[a("span",{staticClass:"sk d-block w-100 mt-2 money text-right",class:{wd:"redeem"!=e.type}},[t._v(t._s("redeem"==e.type?"+":"-")+" "+t._s(t.formatMoney(e.amount)))]),a("span",{staticClass:"sk text-right",class:{wd:"redeem"!=e.type}},[t._v(t._s(e.asset_code))])]),r<t.history.length-1?a("v-col",{staticClass:"pa-0 px-3",attrs:{cols:"12"}},[a("v-divider")],1):t._e()],1)})),1):a("div",{staticClass:"box-detail my-2"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" ไม่มีข้อมูล ... ")])],1)],1)])]},proxy:!0}])}),a("bottom-nav")],1)},s=[],n=a("1da1"),o=(a("96cf"),a("4e82"),a("08cd")),c=a("c549"),i={name:"History",components:{layout:o["a"],"bottom-nav":c["a"]},data:function(){return{showPage:!1}},computed:{history:function(){return this.$store.state.auth.history},orderByHistory:function(){return this.history.sort(l("-createdAt"))}},methods:{checkOut:function(t){return t==this.walletAddress}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.app_loading(!0),e.next=3,t.$store.dispatch("getHistory");case 3:t.app_loading(!1),t.showPage=!0;case 5:case"end":return e.stop()}}),e)})))()}};function l(t){var e=1;return"-"===t[0]&&(e=-1,t=t.substr(1)),function(a,r){var s=a[t]<r[t]?-1:a[t]>r[t]?1:0;return s*e}}var u=i,d=(a("65fe"),a("2877")),v=a("6544"),p=a.n(v),h=a("62ad"),f=a("ce7e"),m=a("132d"),g=a("0fd9"),y=Object(d["a"])(u,r,s,!1,null,null,null);e["default"]=y.exports;p()(y,{VCol:h["a"],VDivider:f["a"],VIcon:m["a"],VRow:g["a"]})},"2fa4":function(t,e,a){"use strict";a("20f6");var r=a("80d2");e["a"]=Object(r["g"])("spacer","div","v-spacer")},"4bbb":function(t,e,a){"use strict";a("955a")},"5d59":function(t,e,a){},"65fe":function(t,e,a){"use strict";a("9b15")},"8ce9":function(t,e,a){},"955a":function(t,e,a){},"9b15":function(t,e,a){},"9b63":function(t,e,a){"use strict";a("5d59")},"9e28":function(t,e,a){t.exports=a.p+"img/buyicon.8097ce74.svg"},c549:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-bar"},[a("router-link",{attrs:{to:"/"}},[a("v-icon",{attrs:{color:"#EAEAEA",size:"28"}},[t._v(" account_balance_wallet ")])],1),a("div",{staticClass:"scanLink"},[a("router-link",{attrs:{to:"/scan"}},[a("v-icon",{attrs:{color:"#EAEAEA"}},[t._v("qr_code")])],1)],1),a("router-link",{attrs:{to:"/payment"}},[a("v-img",{staticClass:"mx-auto",attrs:{src:t.pathBuyIcon,height:"28px",width:"28px",contain:""}})],1)],1)},s=[],n=(a("b0c0"),{name:"bottomNav",computed:{routeName:function(){return this.$route.name},pathBuyIcon:function(){return"Payment"==this.routeName?"/image/buyicon.png":"/image/buyiconactive.png"}},data:function(){return{}}}),o=n,c=(a("9b63"),a("2877")),i=a("6544"),l=a.n(i),u=a("132d"),d=a("adda"),v=Object(c["a"])(o,r,s,!1,null,null,null);e["a"]=v.exports;l()(v,{VIcon:u["a"],VImg:d["a"]})},ce7e:function(t,e,a){"use strict";var r=a("5530"),s=(a("8ce9"),a("7560"));e["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(r["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(r["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-666bc473.0c1b5770.js.map