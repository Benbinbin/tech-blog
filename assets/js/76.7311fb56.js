(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{323:function(e,t,i){},338:function(e,t,i){"use strict";i(323)},375:function(e,t,i){"use strict";i.r(t);var s={2:.75,3:.5,4:.4,5:.3,6:.2},l={2:"red-400",3:"indigo-400",4:"gray-500",5:"gray-400",6:"gray-400"},n={props:["headings","selectedHeading"],data:function(){return{scrollTimer:null}},methods:{levelColor:function(e){return l[e]},levelSize:function(e){return s[e]},dotStyle:function(e){return{width:"".concat(s[e],"rem"),height:"".concat(s[e],"rem"),top:"".concat(-s[e]/2,"rem")}}},watch:{selectedHeading:function(){var e=this.$refs.headingList.clientWidth,t=this.$refs[this.selectedHeading][0].offsetLeft-e/2;this.$refs.headingList.scrollLeft=t>0?t:0}}},a=(i(338),i(18)),r=Object(a.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"headings-tooltip-container"},[i("ul",{ref:"headingList",staticClass:"m-2 pt-8 relative flex justify-between overflow-x-auto"},e._l(e.headings,(function(t){return i("li",{key:t.id,ref:t.id,refInFor:!0,staticClass:"w-full flex flex-col items-center relative",class:{"opacity-75":t.id!==e.selectedHeading}},[i("span",{staticClass:"absolute inset-x-0 -top-7 text-xs text-center",class:{"font-black":t.id===e.selectedHeading}},[e._v(e._s("H"+t.level))]),e._v(" "),i("div",{staticClass:"dot-icon absolute inset-x-0 mx-auto ring-4 ring-opacity-30 rounded-full",class:"bg-"+e.levelColor(t.level)+" ring-"+e.levelColor(t.level),style:e.dotStyle(t.level)}),e._v(" "),i("div",{staticClass:"w-full py-4 border-t border-dashed border-gray-300 flex justify-center items-center"},[i("a",{staticClass:"text-sm font-light tracking-widest",class:{"font-black":t.id===e.selectedHeading},staticStyle:{"writing-mode":"vertical-rl"},attrs:{href:"#"+t.id}},[e._v(e._s(t.text))])])])})),0)])}),[],!1,null,"e14be5f8",null);t.default=r.exports}}]);