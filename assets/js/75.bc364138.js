(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{322:function(t,e,l){},337:function(t,e,l){"use strict";l(322)},374:function(t,e,l){"use strict";l.r(e);var i={2:.75,3:.5,4:.4,5:.3,6:.2},a={2:"red-300",3:"indigo-300",4:"gray-300",5:"gray-300",6:"gray-200"},n={props:["headings","activeHeading"],data:function(){return{scrollTimer:null}},watch:{activeHeading:function(){}},methods:{levelColor:function(t){return a[t]},levelSize:function(t){return i[t]},dotStyle:function(t){return{width:"".concat(i[t],"rem"),height:"".concat(i[t],"rem"),left:"".concat(-i[t]/2,"rem")}}}},r=(l(337),l(18)),s=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"headings-list-container"},[l("ul",{staticClass:"m-2 lg:pl-7 xl:pl-11 py-7 opacity-60 hover:opacity-100 transition-all duration-300"},t._l(t.headings,(function(e){return l("li",{key:e.id,staticClass:"flex justify-start items-center relative"},[l("span",{staticClass:"opacity-0 absolute -left-7 text-xs transition-all duration-300",class:"text-"+t.levelColor(e.level)},[t._v(t._s("H"+e.level))]),t._v(" "),l("div",{staticClass:"dot-icon absolute ring-4 opacity-0 ring-opacity-30 rounded-full transition-all duration-300",class:"bg-"+t.levelColor(e.level)+" ring-"+t.levelColor(e.level),style:t.dotStyle(e.level)}),t._v(" "),l("a",{staticClass:"px-3 py-2 border-l border-dashed border-gray-300 text-sm font-light",class:{"font-black":e.id===t.activeHeading},attrs:{href:"#"+e.id}},[t._v(t._s(e.text))])])})),0)])}),[],!1,null,"cceeb8de",null);e.default=s.exports}}]);