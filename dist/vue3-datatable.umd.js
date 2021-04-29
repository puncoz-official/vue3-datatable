var __defProp=Object.defineProperty,__hasOwnProp=Object.prototype.hasOwnProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,a)=>t in e?__defProp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,__assign=(e,t)=>{for(var a in t||(t={}))__hasOwnProp.call(t,a)&&__defNormalProp(e,a,t[a]);if(__getOwnPropSymbols)for(var a of __getOwnPropSymbols(t))__propIsEnum.call(t,a)&&__defNormalProp(e,a,t[a]);return e};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self)["@jobinsjp/vue3-datatable"]={},e.Vue)}(this,(function(e,t){"use strict";var a=t.defineComponent({name:"Loading"});const o=t.withScopeId("data-v-561e1d5a");t.pushScopeId("data-v-561e1d5a");const r={class:"spinner absolute h-full w-full flex justify-center"},n=t.createVNode("div",{class:"spinner-item absolute w-20 h-20 rounded-full"},null,-1),l=t.createVNode("div",{class:"spinner-item absolute w-20 h-20 rounded-full"},null,-1);t.popScopeId();const s=o(((e,a,o,s,d,i)=>(t.openBlock(),t.createBlock("div",r,[n,l]))));a.render=s,a.__scopeId="data-v-561e1d5a";var d=t.defineComponent({name:"PaginationLink",props:{active:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1}},setup:e=>({linkClasses:t.computed((()=>e.active?"bg-gray-200 border-gray-300 text-gray-800 hover:bg-gray-200":e.disabled?"cursor-not-allowed text-gray-400":"border-gray-300 bg-white text-gray-500 hover:bg-gray-50"))})});d.render=function(e,a,o,r,n,l){return t.openBlock(),t.createBlock("a",t.mergeProps({href:"#",class:["relative inline-flex items-center px-4 py-2 border text-sm font-medium",e.linkClasses]},t.toHandlers(__assign({},e.$attrs))),[t.renderSlot(e.$slots,"default")],16)};const i="left";var c=t.defineComponent({name:"Pagination",components:{PaginationLink:d},props:{total:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!1,default:1},maxVisibleButtons:{type:Number,required:!1,default:5}},emits:["changed"],setup(e,{emit:a}){const o=t.computed((()=>(e.currentPage-1)*e.perPage+1)),r=t.computed((()=>e.total>e.currentPage*e.perPage?e.currentPage*e.perPage:e.total)),n=t.computed((()=>Math.ceil(e.total/e.perPage))),l=t.computed((()=>1===e.currentPage?1:e.currentPage===n.value?n.value-e.maxVisibleButtons+1:e.currentPage-1)),s=t.computed((()=>Math.min(l.value+e.maxVisibleButtons-1,n.value))),d=t.computed((()=>{const e=[];for(let t=l.value;t<=s.value;t+=1)t>0&&e.push(t);return e})),c=t.computed((()=>1===e.currentPage)),u=t.computed((()=>e.currentPage===n.value)),p=e=>{a("changed",e)};return{currentStart:o,currentEnd:r,totalPages:n,pages:d,isInFirstPage:c,isInLastPage:u,goToPageNumber:p,gotoFirstPage:()=>p(1),gotoLastPage:()=>p(n.value),gotoNextPage:()=>p(e.currentPage>=n.value?n.value:e.currentPage+1),gotoPreviousPage:()=>p(e.currentPage<=1?1:e.currentPage-1),showDots:(e=i)=>{const t=e===i?1:n.value,a=e===i?2:n.value-1;return!d.value.includes(t)||!d.value.includes(a)}}}});const u={key:0,class:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"},p={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},g={class:"text-sm text-gray-700"},m=t.createTextVNode(" Showing "),y=t.createTextVNode(" to "),b=t.createTextVNode(" of "),v=t.createTextVNode(" results. "),f={key:0},h={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},x=t.createVNode("span",{class:"sr-only"},"Go to first",-1),k=t.createTextVNode(" « "),w=t.createVNode("span",{class:"sr-only"},"Previous",-1),N=t.createTextVNode(" ‹ "),C=t.createTextVNode(" 1 "),P=t.createTextVNode(" ... "),V=t.createTextVNode(" ... "),_=t.createVNode("span",{class:"sr-only"},"Next",-1),B=t.createTextVNode(" › "),S=t.createVNode("span",{class:"sr-only"},"Go to Last",-1),I=t.createTextVNode(" » ");c.render=function(e,a,o,r,n,l){const s=t.resolveComponent("pagination-link");return e.totalPages?(t.openBlock(),t.createBlock("div",u,[t.createVNode("div",p,[t.withDirectives(t.createVNode("div",null,[t.createVNode("p",g,[t.renderSlot(e.$slots,"pagination-info",{currentStart:e.currentStart,currentEnd:e.currentEnd,total:e.total},(()=>[m,t.createVNode("span",{class:"font-medium",textContent:t.toDisplayString(e.currentStart)},null,8,["textContent"]),y,t.createVNode("span",{class:"font-medium",textContent:t.toDisplayString(e.currentEnd)},null,8,["textContent"]),b,t.createVNode("span",{class:"font-medium",textContent:t.toDisplayString(e.total)},null,8,["textContent"]),v]))])],512),[[t.vShow,e.total]]),e.totalPages>1?(t.openBlock(),t.createBlock("div",f,[t.createVNode("nav",h,[t.createVNode(s,{disabled:e.isInFirstPage,class:"rounded-l-md",onClick:t.withModifiers(e.gotoFirstPage,["prevent"])},{default:t.withCtx((()=>[x,k])),_:1},8,["disabled","onClick"]),t.createVNode(s,{disabled:e.isInFirstPage,onClick:t.withModifiers(e.gotoPreviousPage,["prevent"])},{default:t.withCtx((()=>[w,N])),_:1},8,["disabled","onClick"]),e.showDots("left")?(t.openBlock(),t.createBlock(t.Fragment,{key:0},[t.createVNode(s,{disabled:e.isInFirstPage,active:e.isInFirstPage,onClick:t.withModifiers(e.gotoFirstPage,["prevent"])},{default:t.withCtx((()=>[C])),_:1},8,["disabled","active","onClick"]),t.createVNode(s,null,{default:t.withCtx((()=>[P])),_:1})],64)):t.createCommentVNode("",!0),(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.pages,((a,o)=>(t.openBlock(),t.createBlock(s,{key:`pages_${o}`,active:a===e.currentPage,disabled:a===e.currentPage,onClick:t.withModifiers((t=>e.goToPageNumber(a)),["prevent"])},{default:t.withCtx((()=>[t.createTextVNode(t.toDisplayString(a),1)])),_:2},1032,["active","disabled","onClick"])))),128)),e.showDots("right")?(t.openBlock(),t.createBlock(t.Fragment,{key:1},[t.createVNode(s,null,{default:t.withCtx((()=>[V])),_:1}),t.createVNode(s,{disabled:e.isInLastPage,active:e.isInLastPage,onClick:t.withModifiers(e.gotoLastPage,["prevent"])},{default:t.withCtx((()=>[t.createTextVNode(t.toDisplayString(e.totalPages),1)])),_:1},8,["disabled","active","onClick"])],64)):t.createCommentVNode("",!0),t.createVNode(s,{disabled:e.isInLastPage,onClick:t.withModifiers(e.gotoNextPage,["prevent"])},{default:t.withCtx((()=>[_,B])),_:1},8,["disabled","onClick"]),t.createVNode(s,{disabled:e.isInLastPage,class:"rounded-r-md",onClick:t.withModifiers(e.gotoLastPage,["prevent"])},{default:t.withCtx((()=>[S,I])),_:1},8,["disabled","onClick"])])])):t.createCommentVNode("",!0)])])):t.createCommentVNode("",!0)};const T={},O={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"};T.render=function(e,a){return t.openBlock(),t.createBlock("td",O,[t.renderSlot(e.$slots,"default")])};const q={},D={scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"};q.render=function(e,a){return t.openBlock(),t.createBlock("th",D,[t.renderSlot(e.$slots,"default")])};const L=[5,10,15,25,50,75,100],$=t.defineComponent({components:{Loading:a,Pagination:c,TableBody:T,TableHead:q},props:{rows:{type:Array,required:!0},columns:{type:Object,required:!1,default:null},pagination:{type:Object,required:!1,default:null},striped:{type:Boolean,required:!1,default:!1},sn:{type:Boolean,required:!1,default:!1},filter:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},perPageOptions:{type:Array,required:!1,default:()=>L},query:{type:Object,required:!1,default:()=>({})}},emits:["loadData"],setup(e,{emit:a}){var o,r;const n=t.ref({page:(null==(o=e.pagination)?void 0:o.page)||1,search:e.query.search||"",per_page:(null==(r=e.pagination)?void 0:r.per_page)||10}),l=t.computed((()=>!!e.pagination)),s=t.computed((()=>{var t;return(null==(t=e.pagination)?void 0:t.total)||e.rows.length})),d=t.computed((()=>e.rows)),i=t.computed((()=>e.columns?e.columns:0===e.rows.length?{}:Object.keys(e.rows[0]).reduce(((e,t)=>__assign(__assign({},e),{[t]:t})),{}))),c=t.computed((()=>l.value?n.value.per_page*(n.value.page-1):0));t.watch((()=>__assign({},n.value)),(()=>{a("loadData",n.value)}),{deep:!0,immediate:!0});const u=((e,t=400)=>{let a;return(...o)=>{clearTimeout(a),a=setTimeout((()=>e(...o)),t)}})((e=>{n.value=__assign(__assign({},n.value),{page:1,search:e.target.value})}));return{tableQuery:n,showPagination:l,totalData:s,tableRows:d,tableColumns:i,paginatedRowIndex:c,uniqueId:()=>Math.floor(100*Math.random()),handlePageChange:e=>{n.value.page=e},handleOnSearchChange:u,handleOnChange:e=>{const{name:t,value:a}=e.target;n.value=__assign(__assign({},n.value),{page:1,[t]:a})}}}});const j=t.withScopeId("data-v-e0ec4574");t.pushScopeId("data-v-e0ec4574");const F={class:"data-table flex flex-col"},M={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},Q={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},E={key:0,class:"filter-wrapper mb-2.5 w-full"},R={class:"w-64"},z=t.createVNode("label",{for:"email",class:"sr-only"},"Search",-1),A={class:"relative rounded-md shadow-sm"},H=t.createVNode("div",{class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},[t.createVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[t.createVNode("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),G={class:"table-wrapper relative shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},J={key:1,class:"pagination-wrapper flex bg-white items-center"},K={class:"pr-4"},U=t.createVNode("label",{for:"location",class:"sr-only"},"Per page",-1),W={class:"min-w-full divide-y divide-gray-200"},X={class:"bg-gray-50"},Y={key:2,class:"pagination-wrapper"};t.popScopeId();const Z=j(((e,a,o,r,n,l)=>{const s=t.resolveComponent("Loading"),d=t.resolveComponent("pagination"),i=t.resolveComponent("table-head"),c=t.resolveComponent("table-body");return t.openBlock(),t.createBlock("div",F,[t.createVNode("div",M,[t.createVNode("div",Q,[e.filter?(t.openBlock(),t.createBlock("div",E,[t.createVNode("div",R,[z,t.createVNode("div",A,[t.createVNode("input",{value:e.tableQuery.search,type:"search",name:"search",class:"focus:ring-0 block w-full pr-10 sm:text-sm border-gray-300 rounded-md",onInput:a[1]||(a[1]=(...t)=>e.handleOnSearchChange&&e.handleOnSearchChange(...t))},null,40,["value"]),H])])])):t.createCommentVNode("",!0),t.createVNode("div",G,[e.loading?t.renderSlot(e.$slots,"loading",{key:0},(()=>[t.createVNode(s)]),{},!0):t.createCommentVNode("",!0),e.showPagination?(t.openBlock(),t.createBlock("div",J,[t.createVNode(d,{class:"flex-1",total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},null,8,["total","current-page","per-page","onChanged"]),t.createVNode("div",K,[U,t.createVNode("select",{value:e.tableQuery.per_page,name:"per_page",class:"block w-full pl-3 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md",onInput:a[2]||(a[2]=(...t)=>e.handleOnChange&&e.handleOnChange(...t))},[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.perPageOptions,(a=>(t.openBlock(),t.createBlock("option",{key:`per_page_${a}`,value:a,selected:a===e.tableQuery.per_page,textContent:t.toDisplayString(a)},null,8,["value","selected","textContent"])))),128))],40,["value"])])])):t.createCommentVNode("",!0),t.createVNode("table",W,[t.createVNode("thead",X,[t.createVNode("tr",null,[e.sn?t.renderSlot(e.$slots,"thead-sn",{key:0},(()=>[t.createVNode(i,{textContent:t.toDisplayString("S.N.")},null,8,["textContent"])]),{},!0):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"thead",{column:e.tableColumns},(()=>[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.tableColumns,((e,a)=>(t.openBlock(),t.createBlock(i,{key:`datatable-thead-th-${a}`,textContent:t.toDisplayString(e)},null,8,["textContent"])))),128))]),!0)])]),t.createVNode("tbody",null,[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.tableRows,((a,o)=>(t.openBlock(),t.createBlock("tr",{key:`datatable-tbody-${e.uniqueId()}-${o}`,class:e.striped&&o%2?"bg-gray-50":"bg-white"},[e.sn?t.renderSlot(e.$slots,"tbody-sn",{key:0,sn:o+1},(()=>[t.createVNode(c,{textContent:t.toDisplayString(o+1+e.paginatedRowIndex)},null,8,["textContent"])]),!0):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"tbody",{index:o,row:a},(()=>[(t.openBlock(!0),t.createBlock(t.Fragment,null,t.renderList(e.tableColumns,((o,r)=>(t.openBlock(),t.createBlock(c,{key:`datatable-tbody-td-${e.uniqueId()}-${r}`,name:o,textContent:t.toDisplayString(a[r])},null,8,["name","textContent"])))),128))]),!0)],2)))),128))])]),e.showPagination?(t.openBlock(),t.createBlock("div",Y,[t.createVNode(d,{total:e.totalData,"current-page":e.tableQuery.page,"per-page":parseInt(e.tableQuery.per_page.toString()),onChanged:e.handlePageChange},null,8,["total","current-page","per-page","onChanged"])])):t.createCommentVNode("",!0)])])])])}));$.render=Z,$.__scopeId="data-v-e0ec4574",e.DataTable=$,e.TableBody=T,e.TableHead=q,Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));
