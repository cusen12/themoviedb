(this.webpackJsonpthemoviedb=this.webpackJsonpthemoviedb||[]).push([[10],{227:function(e,t,a){"use strict";a.r(t);var n=a(29),i=a(3),s=a.n(i),r=a(5),o=a(4),c=a(66),p=a(166),l=a(187),d=a(189),h=a(1),b=a(10),u=a(26),j=a(40),f=a.n(j),g=a(0);t.default=function(){var e=Object(h.useState)(),t=Object(o.a)(e,2),a=t[0],i=t[1],j=Object(b.f)();Object(h.useEffect)((function(){(function(){var e=Object(r.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/person/popular?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=1",e.next=3,fetch("https://api.themoviedb.org/3/person/popular?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,i(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m={width:"100%",height:"250px",objectFit:"cover"},x={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontSize:"14px"};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(c.a,{variant:"h4",className:"titleH4",color:"primary",children:["Popular People ",Object(g.jsx)(p.a,{variant:"text",style:{float:"right"},children:Object(g.jsx)(u.b,{to:"/people",children:"View all"})})]}),void 0!==a?Object(g.jsx)(f.a,Object(n.a)(Object(n.a)({},{className:"center",infinite:!1,centerPadding:"20px",slidesToShow:3,speed:500,slidesPerRow:2,responsive:[{breakpoint:1024,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2,slidesPerRow:1}},{breakpoint:480,settings:{slidesToShow:2,slidesPerRow:1}}]}),{},{children:a.map((function(e){return null!==e.profile_path?Object(g.jsxs)(l.a,{className:"peopleCard",children:[Object(g.jsx)("img",{className:"lazyload",style:m,width:"200px",height:"150px",src:"https://image.tmdb.org/t/p/w45/"+e.profile_path,"data-src":"https://image.tmdb.org/t/p/w300/"+e.profile_path,alt:e.name}),Object(g.jsxs)(d.a,{style:{padding:"10px 20px",minHeight:"127px"},children:[Object(g.jsx)(c.a,{onClick:function(){return e.id,void j.push("/commingsoon")},style:{height:"auto"},gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),e.known_for.map((function(e){return Object(g.jsxs)(c.a,{style:x,variant:"body1",children:[e.original_title,","]},e.id)})),Object(g.jsx)(c.a,{style:x,variant:"body1",children:"..."})]})]},e.id):""}))})):""]})}}}]);
//# sourceMappingURL=10.dac9a369.chunk.js.map