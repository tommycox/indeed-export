(function(e){function t(t){for(var r,s,o=t[0],l=t[1],d=t[2],c=0,m=[];c<o.length;c++)s=o[c],n[s]&&m.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},i=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("c21b"),n=a.n(r);n.a},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"469c":function(e,t,a){"use strict";var r=a("bd95"),n=a.n(r);n.a},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("md-toolbar",{staticClass:"md-primary"},[a("h1",[e._v("Indeed CSV Export")])]),a("IndeedScraperExport")],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",[a("md-card",{staticClass:"md-layout-item md-size-40 md-small-size-65 md-medium-size-50 md-xsmall-size-90"},[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Scrape Job Postings")])]),a("md-card-content",[a("div",{staticClass:"md-layout-item"},[a("md-field",[a("label",{attrs:{for:"query"}},[e._v("Publisher ID")]),a("md-input",{attrs:{type:"text",name:"query",required:""},model:{value:e.publisherId,callback:function(t){e.publisherId=t},expression:"publisherId"}}),a("span",{staticClass:"md-error"},[e._v("This field is required")])],1)],1),a("div",{staticClass:"md-layout-item"},[a("md-field",[a("label",{attrs:{for:"query"}},[e._v("Search Terms")]),a("md-input",{attrs:{type:"text",name:"query",required:""},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),a("span",{staticClass:"md-error"},[e._v("This field is required")])],1)],1),a("div",{staticClass:"md-layout-item"},[a("md-field",[a("label",{attrs:{for:"location"}},[e._v("Location")]),a("md-input",{attrs:{type:"text",name:"location"},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}})],1)],1),a("div",{staticClass:"md-layout-item"},[a("md-field",[a("label",{attrs:{for:"jobType"}},[e._v("Job Type")]),a("md-select",{attrs:{name:"jobType"},model:{value:e.jobType,callback:function(t){e.jobType=t},expression:"jobType"}},[a("md-option",{attrs:{value:"fulltime"}},[e._v("Full Time")]),a("md-option",{attrs:{value:"parttime"}},[e._v("Part Time")])],1)],1)],1),a("div",{staticClass:"md-layout-item"},[a("md-field",[a("label",{attrs:{for:"maxAge"}},[e._v("Max Age")]),a("md-input",{attrs:{type:"number",name:"maxAge"},model:{value:e.maxAge,callback:function(t){e.maxAge=t},expression:"maxAge"}}),a("span",{staticClass:"md-suffix"},[e._v("Days")])],1)],1),a("div",{staticClass:"md-layout-item"},[a("md-field",[a("label",{attrs:{for:"maxAge"}},[e._v("Limit")]),a("md-input",{attrs:{type:"number",name:"maxAge"},model:{value:e.limit,callback:function(t){e.limit=t},expression:"limit"}}),a("span",{staticClass:"md-suffix"},[e._v("Jobs")])],1)],1)]),a("md-card-actions",[a("md-button",{on:{click:e.scrapeResults}},[e._v("Scrape Results")])],1),a("md-progress-spinner",{directives:[{name:"show",rawName:"v-show",value:e.scraping,expression:"scraping"}],attrs:{"md-diameter":30,"md-stroke":3,"md-mode":"indeterminate"}}),e.resultsScraped?a("md-card-actions",[a("download-csv",{attrs:{data:e.jobs,fields:["company","url","jobtitle"],labels:{company:"Company",url:"URL",jobtitle:"Job Title"}}},[a("md-button",[e._v("\n          Export To CSV\n        ")])],1)],1):e._e()],1),e.resultsScraped?a("md-card",{staticClass:"md-layout-item md-size-90"},[a("md-card-header",[a("div",{staticClass:"md-title"},[e._v("Results")]),a("md-table",[a("md-table-head",[e._v("Company")]),a("md-table-head",[e._v("URL")]),a("md-table-head",[e._v("Job Title")]),e._l(e.jobs,function(t,r){return a("md-table-row",{key:r},[a("md-table-cell",[e._v(" "+e._s(t.company)+" ")]),a("md-table-cell",[e._v(" "+e._s(t.url)+" ")]),a("md-table-cell",[e._v(" "+e._s(t.jobtitle)+" ")])],1)})],2)],1)],1):e._e(),a("md-snackbar",{attrs:{"md-duration":4e3,"md-active":e.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(t){e.showSnackbar=t}}},[e.resultsScraped?a("span",[e._v("Results Scraped!")]):a("span",[e._v("An error occurred. Please make sure you entered a search term.")])])],1)},o=[],l=a("562e"),d=a.n(l),u={name:"IndeedScraperExport",data:function(){return{query:"QA Automation Engineer",location:"United States",jobType:"fulltime",maxAge:90,limit:25,scraping:!1,jobs:null,showSnackbar:!1,publisherId:""}},computed:{resultsScraped:function(){return null!==this.jobs&&this.jobs.length>0}},methods:{scrapeResults:function(){var e=this,t={query:this.query,location:this.location,jobType:this.jobType,maxAge:this.maxAge,sort:"date",limit:this.limit,publisher:this.publisherId};this.jobs=null,this.scraping=!0,d.a.query(t).then(function(t){e.scraping=!1,e.showSnackbar=!0,e.jobs=t})}}},c=u,m=(a("469c"),a("2877")),p=Object(m["a"])(c,s,o,!1,null,"2313eb48",null);p.options.__file="IndeedScraperExport.vue";var f=p.exports,b={name:"app",components:{IndeedScraperExport:f}},v=b,y=(a("034f"),Object(m["a"])(v,n,i,!1,null,null,null));y.options.__file="App.vue";var h=y.exports,_=a("43f9"),x=a.n(_),g=a("bf57"),j=a.n(g);a("51de"),a("e094");r["default"].use(x.a),r["default"].component("downloadCsv",j.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(h)}}).$mount("#app")},6:function(e,t){},bd95:function(e,t,a){},c21b:function(e,t,a){}});
//# sourceMappingURL=app.54782a25.js.map