(this.webpackJsonpthemoviedb=this.webpackJsonpthemoviedb||[]).push([[9],{210:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a.n(c),r=a(12),i=a(7),s=a(170),o=a(148),d=a(165),l=a(171),b=a(173),h=a(0),j=a.n(h),p=a(8),u=a(32),f=a(1),m=j.a.lazy((function(){return Promise.resolve().then(a.bind(null,72))}));t.default=function(){var e=Object(h.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],j=Object(p.f)();return Object(h.useEffect)((function(){(function(){var e=Object(r.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/tv/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=2",e.next=3,fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=2");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,c(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(s.a,{variant:"h4",className:"titleH4",color:"primary",children:["TOP TV Show ",Object(f.jsx)(o.a,{variant:"text",style:{float:"right"},children:Object(f.jsx)(u.b,{to:"/tvshow",children:"View all"})})]}),Object(f.jsx)(d.a,{container:!0,spacing:2,justify:"flex-start",direction:"row",className:"overflowScroll",children:a?a.map((function(e){return Object(f.jsx)(d.a,{item:!0,sm:2,children:Object(f.jsxs)(l.a,{children:[Object(f.jsx)("img",{className:"lazyload",width:"300px",height:"169px",src:"https://image.tmdb.org/t/p/w45/"+e.backdrop_path,"data-src":"https://image.tmdb.org/t/p/w300/"+e.backdrop_path,alt:e.original_name}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(s.a,{gutterBottom:!0,variant:"h5",component:"h2",onClick:function(){return function(e,t){j.push("/category/"+t+"/"+e)}(e.id,"tv")},children:e.original_name}),Object(f.jsx)(s.a,{component:"p",children:e.first_air_date}),Object(f.jsx)(h.Suspense,{fallback:Object(f.jsx)("div",{children:"Loading..."}),children:Object(f.jsx)(m,{value:10*e.vote_average})}),Object(f.jsx)(s.a,{variant:"body2",color:"textSecondary",component:"p",children:e.overview})]})]})},e.id)})):""}),Object(f.jsx)("br",{}),Object(f.jsx)("hr",{})]})}}}]);
//# sourceMappingURL=9.8f58b63b.chunk.js.map