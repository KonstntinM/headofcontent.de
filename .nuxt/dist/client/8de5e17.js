(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{451:function(t,e,n){"use strict";n.r(e);var r,l=n(7),o=(n(41),{data:function(){return{beitrag:{Inhalt:""}}},created:(r=Object(l.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$strapi.findOne("Beitrags",this.$route.params.id);case 2:this.beitrag=t.sent,e=this.beitrag.veroeffentlicht||this.beitrag.published_at,n=new Date(e),this.beitrag.veroeffentlicht=n.toLocaleString("de-DE",{weekday:"long",year:"numeric",month:"long",day:"numeric"});case 6:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})}),c=o,d=n(40),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"w-full px-8 py-16 bg-white xl:px-0"},[n("div",{staticClass:"flex flex-col max-w-3xl mx-auto"},[n("h3",{staticClass:"\n          text-3xl\n          font-extrabold\n          leading-none\n          sm:text-4xl\n          md:text-5xl\n          leading-7\n        "},[t._v("\n        "+t._s(this.beitrag.Titel)+"\n      ")]),t._v(" "),n("p",{staticClass:"\n          mt-1\n          mb-10\n          text-sm\n          font-medium\n          text-gray-500\n          uppercase\n          xl:text-base\n          xl:tracking-wider\n          lg:mb-0\n        "},[t._v("\n        Veröffentlicht am "+t._s(this.beitrag.veroeffentlicht)+"\n      ")]),t._v(" "),n("div",{staticClass:"my-2 border-b border-gray-300 lg:my-5"}),t._v(" "),n("div",{staticClass:"\n          col-span-6\n          text-base\n          font-normal\n          text-gray-700\n          lg:leading-8\n          xl:leading-8\n          md:text-xl\n        ",domProps:{innerHTML:t._s(t.$md.render(this.beitrag.Inhalt))}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);