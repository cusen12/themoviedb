(this.webpackJsonpthemoviedb=this.webpackJsonpthemoviedb||[]).push([[9],{181:function(e,t,a){"use strict";a.r(t);var n=a(178),r=a(17),c=a.n(r),i=a(25),s=a(14),o=a(146),p=a(149),l=a(151),d=a(147),h=a(0),b=a(9),j=a(24),u=a(158),f=a.n(u),x=a(1);t.default=function(){var e=Object(h.useState)(),t=Object(s.a)(e,2),a=t[0],r=t[1],u=Object(b.f)();Object(h.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/person/popular?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=1",e.next=3,fetch("https://api.themoviedb.org/3/person/popular?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=1");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,r(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m={width:"100%",height:"250px",objectFit:"cover"},O={whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",fontSize:"14px"};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{variant:"h4",className:"titleH4",color:"primary",children:"Popular People"}),Object(x.jsx)("hr",{}),Object(x.jsx)("br",{}),Object(x.jsx)(f.a,Object(n.a)(Object(n.a)({},{className:"center",infinite:!1,centerPadding:"20px",slidesToShow:3,speed:500,slidesPerRow:2}),{},{children:a?a.map((function(e){return Object(x.jsxs)(p.a,{className:"peopleCard",children:[Object(x.jsx)("img",{className:"lazyload",style:m,src:"https://image.tmdb.org/t/p/w45/"+e.profile_path,"data-src":"https://image.tmdb.org/t/p/w300/"+e.profile_path,alt:e.name}),Object(x.jsxs)(l.a,{style:{padding:"10px 20px"},children:[Object(x.jsx)(o.a,{onClick:function(){return function(e,t){u.push("/details"+t+"="+e)}(e.id,"people")},style:{height:"auto"},gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),e.known_for.map((function(e){return Object(x.jsxs)(o.a,{style:O,variant:"body1",children:[e.original_title,","]},e.id)})),Object(x.jsx)(o.a,{style:O,variant:"body1",children:"..."})]})]},e.id)})):""})),Object(x.jsx)(d.a,{variant:"text",children:Object(x.jsx)(j.b,{to:"/people",children:"View all"})})]})}}}]);
//# sourceMappingURL=9.f289db84.chunk.js.map