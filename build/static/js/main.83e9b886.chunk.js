(this.webpackJsonpthemoviedb=this.webpackJsonpthemoviedb||[]).push([[1],{35:function(t,e,n){"use strict";n(0);var a=n(1);e.a=function(t){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("svg",{viewBox:"0 0 40 36",width:"40",height:"44",xmlns:"http://www.w3.org/2000/svg",children:[Object(a.jsx)("circle",{stroke:"#00000088",strokeWidth:"6",fill:"#00000088",cx:"20",cy:"20",r:"15.91549431"}),Object(a.jsx)("circle",{stroke:t.value>50?"#e4e4e4":"#ffcf22",strokeWidth:"6",strokeDasharray:t.value+",100",fill:"#00000088",cx:"20",cy:"20",r:"15.91549431"}),Object(a.jsx)("text",{x:"20",y:"20",alignmentBaseline:"central",fill:"white",textAnchor:"middle",fontSize:"12",children:t.value+"%"})]})})}},79:function(t,e,n){},80:function(t,e,n){},84:function(t,e,n){},87:function(t,e,n){},89:function(t,e,n){},91:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(24),r=n.n(i),o=(n(79),n(80),n(20)),s=n(6),l=n(9),j=n(111),m=n(113),h=n(114),d=n(21),b=(n(84),n(1)),p=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,145))})),g=c.a.lazy((function(){return n.e(5).then(n.bind(null,142))})),u=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,143))}));var x=function(){var t=Object(a.useState)(),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(),r=Object(l.a)(i,2),o=r[0],s=r[1],x=Object(a.useState)(!1),O=Object(l.a)(x,2),f=O[0],y=O[1],v=Object(d.c)((function(t){return t.reducer.value.hero}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(j.a,{className:"homepage",children:[Object(b.jsx)(j.a,{className:"search",children:Object(b.jsxs)(j.a,{className:"content",children:[Object(b.jsx)(m.a,{variant:"h2",color:"secondary",children:v.welcome}),Object(b.jsx)(m.a,{variant:"h4",color:"secondary",children:v.destription}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"input",children:[Object(b.jsx)("input",{type:"text",onChange:function(t){c(t.target.value)}}),Object(b.jsx)(h.a,{onClick:function(){""===n?y(!1):(s(n),y(!0))},children:v.search})]})]})}),f?Object(b.jsx)(g,{data:o}):Object(b.jsx)(j.a,{item:!0,md:12,className:"bg-home ",children:Object(b.jsxs)(a.Suspense,{fallback:Object(b.jsx)("div",{children:"Loading..."}),children:[Object(b.jsx)(p,{}),Object(b.jsx)(u,{})]})})]})})},O=n(16),f=n.n(O),y=n(25),v=n(115),k=n(120),w=n(116),L=n(117),C=(n(87),n(35)),S=(n(54),n(119));var T=function(){var t=Object(a.useState)(1),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(),r=Object(l.a)(i,2),o=r[0],h=r[1],d=Object(a.useState)(),p=Object(l.a)(d,2),g=p[0],u=p[1],x=Object(a.useState)("now_playing"),O=Object(l.a)(x,2),T=O[0],N=O[1],z=Object(a.useState)("Now Playing"),W=Object(l.a)(z,2),I=W[0],P=W[1],R="https://api.themoviedb.org/3/movie/".concat(T,"?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=").concat(n),H=Object(s.f)(),_=function(){var t=Object(y.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.currentTarget.attributes.datatype.value,a=e.currentTarget.attributes.alt.value,t.next=4,N(n);case 4:return t.next=6,P(a);case 6:c(1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var t=Object(y.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=R,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,h(a.total_pages),u(a.results);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[R]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(v.a,{className:"movie",children:[Object(b.jsxs)(j.a,{container:!0,className:"category-title",justify:"space-between",alignContent:"flex-start",spacing:2,children:[Object(b.jsxs)(j.a,{item:!0,md:3,onClick:_,datatype:"popular",alt:"Popular",children:[Object(b.jsx)("img",{className:"lazyload","data-sizes":"auto",src:"https://image.tmdb.org/t/p/w45//loRmRzQXZeqG78TqZuyvSlEQfZb.jpg","data-src":"https://image.tmdb.org/t/p/w300//loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",alt:"Popular"}),Object(b.jsx)(m.a,{variant:"h4",children:"Popular"})]}),Object(b.jsxs)(j.a,{item:!0,md:3,onClick:_,datatype:"top_rated",alt:"Top Rated",children:[Object(b.jsx)("img",{className:"lazyload","data-sizes":"auto",src:"https://image.tmdb.org/t/p/w45//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg","data-src":"https://image.tmdb.org/t/p/w300//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",alt:"Top Rated"}),Object(b.jsx)(m.a,{variant:"h4",children:"Top Rated"})]}),Object(b.jsxs)(j.a,{item:!0,md:3,onClick:_,datatype:"now_playing",alt:"Now Playing",children:[Object(b.jsx)("img",{className:"lazyload","data-sizes":"auto",src:"https://image.tmdb.org/t/p/w45//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg","data-src":"https://image.tmdb.org/t/p/w300//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",alt:"Now Playing"}),Object(b.jsx)(m.a,{variant:"h4",children:"Now Playing"})]}),Object(b.jsxs)(j.a,{item:!0,md:3,onClick:_,datatype:"upcoming",alt:"Upcoming",children:[Object(b.jsx)("img",{className:"lazyload","data-sizes":"auto",src:"https://image.tmdb.org/t/p/w45//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg","data-src":"https://image.tmdb.org/t/p/w300//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",alt:"Upcoming"}),Object(b.jsx)(m.a,{variant:"h4",children:"Upcoming"})]})]}),Object(b.jsx)(m.a,{variant:"h4",className:"titleH4",color:"primary",children:I}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)(j.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:2,children:g?g.map((function(t){return Object(b.jsx)(j.a,{item:!0,sm:3,children:Object(b.jsx)(k.a,{children:Object(b.jsxs)(w.a,{children:[Object(b.jsx)("img",{className:"lazyload","data-src":"https://image.tmdb.org/t/p/w300/"+t.backdrop_path,src:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",alt:t.title}),Object(b.jsxs)(L.a,{children:[Object(b.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",onClick:function(){return function(t,e){H.push("/details"+e+"="+t)}(t.id,"movie")},children:t.title}),Object(b.jsx)("p",{children:t.release_date}),Object(b.jsx)(C.a,{value:10*t.vote_average}),Object(b.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]})})},t.id)})):""}),Object(b.jsx)("div",{style:{position:"relative"},className:"pagination",children:Object(b.jsx)(S.a,{count:o,page:parseInt(n),color:"secondary",onChange:function(t){c(t.target.textContent)}})})]})})};var N=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{container:!0,item:!0,md:12,children:Object(b.jsx)(m.a,{variant:"h2",color:"secondary",align:"right",children:"People n\xe8 nha"})}),Object(b.jsx)(j.a,{container:!0,item:!0,md:12,className:"bg-home"})]})};var z=function(){var t=Object(a.useState)(1),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(),r=Object(l.a)(i,2),o=r[0],h=r[1],d=Object(a.useState)(),p=Object(l.a)(d,2),g=p[0],u=p[1],x=Object(a.useState)("popular"),O=Object(l.a)(x,2),T=O[0],N=O[1],z=Object(a.useState)("Popular"),W=Object(l.a)(z,2),I=W[0],P=W[1],R="https://api.themoviedb.org/3/tv/".concat(T,"?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=").concat(n),H=Object(s.f)(),_=function(){var t=Object(y.a)(f.a.mark((function t(e){var n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.currentTarget.attributes.datatype.value,a=e.currentTarget.attributes.alt.value,t.next=4,N(n);case 4:return t.next=6,P(a);case 6:c(1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var t=Object(y.a)(f.a.mark((function t(){var e,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=R,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:a=t.sent,h(a.total_pages),u(a.results);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[R]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(v.a,{className:"movie",children:[Object(b.jsxs)(j.a,{container:!0,className:"category-title",justify:"space-between",alignContent:"flex-start",spacing:2,children:[Object(b.jsxs)(j.a,{item:!0,md:3,onClick:_,datatype:"popular",alt:"Popular",children:[Object(b.jsx)("img",{className:"lazyload","data-src":"https://image.tmdb.org/t/p/w45//b0WmHGc8LHTdGCVzxRb3IBMur57.jpg",src:"https://image.tmdb.org/t/p/w300//b0WmHGc8LHTdGCVzxRb3IBMur57.jpg",alt:"Popular"}),Object(b.jsx)(m.a,{variant:"h4",children:"Popular"})]}),Object(b.jsxs)(j.a,{item:!0,md:3,onClick:_,datatype:"top_rated",alt:"Top Rated",children:[Object(b.jsx)("img",{className:"lazyload","data-src":"https://image.tmdb.org/t/p/w45//z59kJfcElR9eHO9rJbWp4qWMuee.jpg",src:"https://image.tmdb.org/t/p/w300//z59kJfcElR9eHO9rJbWp4qWMuee.jpg",alt:"Top Rated"}),Object(b.jsx)(m.a,{variant:"h4",children:"Top Rated"})]}),Object(b.jsxs)(j.a,{item:!0,md:3,onClick:_,datatype:"on_the_air",alt:"On The Air",children:[Object(b.jsx)("img",{className:"lazyload","data-src":"https://image.tmdb.org/t/p/w45//uAjMQlbPkVHmUahhCouANlHSDW2.jpg",src:"https://image.tmdb.org/t/p/w300//uAjMQlbPkVHmUahhCouANlHSDW2.jpg",alt:"On The Air"}),Object(b.jsx)(m.a,{variant:"h4",children:"On The Air"})]}),Object(b.jsxs)(j.a,{item:!0,md:3,onClick:_,datatype:"airing_today",alt:"Airing Today",children:[Object(b.jsx)("img",{className:"lazyload","data-src":"https://image.tmdb.org/t/p/w45//5VltHQJXdmbSD6gEJw3R8R1Kbmc.jpg",src:"https://image.tmdb.org/t/p/w300//5VltHQJXdmbSD6gEJw3R8R1Kbmc.jpg",alt:"Airing Today"}),Object(b.jsx)(m.a,{variant:"h4",children:"Airing Today"})]})]}),Object(b.jsx)(m.a,{variant:"h4",className:"titleH4",color:"primary",children:I}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)(j.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:2,children:g?g.map((function(t){return Object(b.jsx)(j.a,{item:!0,sm:3,children:Object(b.jsx)(k.a,{children:Object(b.jsxs)(w.a,{children:[Object(b.jsx)("img",{className:"lazyload","data-src":"https://image.tmdb.org/t/p/w300/"+t.backdrop_path,src:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",alt:t.title}),Object(b.jsxs)(L.a,{children:[Object(b.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",onClick:function(){return function(t,e){H.push("/details"+e+"="+t)}(t.id,"tv")},children:t.original_name}),Object(b.jsx)("p",{children:t.first_air_date}),Object(b.jsx)(C.a,{value:10*t.vote_average}),Object(b.jsx)(m.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]})})},t.id)})):""}),Object(b.jsx)("div",{style:{position:"relative"},className:"pagination",children:Object(b.jsx)(S.a,{count:o,page:parseInt(n),color:"secondary",onChange:function(t){c(t.target.textContent)}})})]})})};var W=function(){var t=Object(s.g)().id;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("h1",{children:["Id l\xe0 : ",t]})})};var I=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(v.a,{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(b.jsx)(m.a,{variant:"h1",align:"center",children:"Comming Soon"})})})},P=(n(89),n(62)),R=n.n(P),H=n(63),_=n.n(H),A=n(65),F=n.n(A),J=n(64),E=n.n(J),V=n(46),M=Object(V.b)({name:"selectLanguage",initialState:{value:{key:"en",language:"English",menu:{home:"Home",movie:"Movie",tvShow:"TV Show",people:"People"},hero:{welcome:"Welcome!!!",destription:"Millions of movies, TV shows and people to discover. Explore now.",search:"Search"},footer:{contact:"Contact us",links:[{link:"/commingsoon",typeLink:"1",text:"FAQ"},{link:"/commingsoon",typeLink:"2",text:"Investor Relations"},{link:"/commingsoon",typeLink:"3",text:"Privacy"},{link:"/commingsoon",typeLink:"4",text:"Speed Test"},{link:"/commingsoon",typeLink:"5",text:"Help Center"},{link:"/commingsoon",typeLink:"6",text:"Jobs"},{link:"/commingsoon",typeLink:"7",text:"Cookie Preferences"},{link:"/commingsoon",typeLink:"8",text:"Legal Notices"},{link:"/commingsoon",typeLink:"9",text:"Account"},{link:"/commingsoon",typeLink:"10",text:"Ways to Watch"},{link:"/commingsoon",typeLink:"11",text:"Corporate Information"},{link:"/commingsoon",typeLink:"12",text:"Media Center"},{link:"/commingsoon",typeLink:"13",text:"Terms of Use"},{link:"/commingsoon",typeLink:"14",text:"Contact Us"}]}}},reducers:{selectLanguage:function(t,e){t.value=e.payload}}}),U=M.actions.selectLanguage,q=M.reducer;var B=function(){var t=Object(d.b)(),e=[{key:"vn",language:"Ti\u1ebfng Vi\u1ec7t",menu:{home:"Trang ch\u1ee7",movie:"Phim",tvShow:"Ch\u01b0\u01a1ng tr\xecnh TV",people:"Nh\xe2n v\u1eadt"},hero:{welcome:"Xin ch\xe0o!!!",destription:"H\xe0ng tri\u1ec7u b\u1ed9 phim, ch\u01b0\u01a1ng tr\xecnh truy\u1ec1n h\xecnh v\xe0 m\u1ecdi ng\u01b0\u1eddi \u0111\u1ec3 kh\xe1m ph\xe1. Kh\xe1m ph\xe1 ngay b\xe2y gi\u1edd.",search:"T\xecm ki\u1ebfm"},footer:{contact:"Li\xean h\u1ec7 v\u1edbi ch\xfang t\xf4i",links:[{link:"/commingsoon",typeLink:"1",text:"C\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p"},{link:"/commingsoon",typeLink:"3",text:"Quan h\u1ec7 v\u1edbi nh\xe0 \u0111\u1ea7u t\u01b0"},{link:"/commingsoon",typeLink:"3",text:"Quy\u1ec1n ri\xeang t\u01b0"},{link:"/commingsoon",typeLink:"4",text:"Ki\u1ec3m tra t\u1ed1c \u0111\u1ed9"},{link:"/commingsoon",typeLink:"5",text:"Trung t\xe2m tr\u1ee3 gi\xfap"},{link:"/commingsoon",typeLink:"6",text:"Vi\u1ec7c l\xe0m"},{link:"/commingsoon",typeLink:"7",text:"T\xf9y ch\u1ecdn cookie"},{link:"/commingsoon",typeLink:"8",text:"Th\xf4ng b\xe1o ph\xe1p l\xfd"},{link:"/commingsoon",typeLink:"9",text:"T\xe0i kho\u1ea3n"},{link:"/commingsoon",typeLink:"10",text:"C\xe1c c\xe1ch xem"},{link:"/commingsoon",typeLink:"11",text:"Th\xf4ng tin doanh nghi\u1ec7p"},{link:"/commingsoon",typeLink:"12",text:"Trung t\xe2m \u0111a ph\u01b0\u01a1ng ti\u1ec7n"},{link:"/commingsoon",typeLink:"13",text:"\u0110i\u1ec1u kho\u1ea3n s\u1eed d\u1ee5ng"},{link:"/commingsoon",typeLink:"14",text:"Li\xean h\u1ec7 v\u1edbi ch\xfang t\xf4i"}]}},{key:"en",language:"English",menu:{home:"Home",movie:"Movie",tvShow:"TV Show",people:"People"},hero:{welcome:"Welcome!!!",destription:"Millions of movies, TV shows and people to discover. Explore now.",search:"Search"},footer:{contact:"Contact us",links:[{link:"/commingsoon",typeLink:"1",text:"FAQ"},{link:"/commingsoon",typeLink:"2",text:"Investor Relations"},{link:"/commingsoon",typeLink:"3",text:"Privacy"},{link:"/commingsoon",typeLink:"4",text:"Speed Test"},{link:"/commingsoon",typeLink:"5",text:"Help Center"},{link:"/commingsoon",typeLink:"6",text:"Jobs"},{link:"/commingsoon",typeLink:"7",text:"Cookie Preferences"},{link:"/commingsoon",typeLink:"8",text:"Legal Notices"},{link:"/commingsoon",typeLink:"9",text:"Account"},{link:"/commingsoon",typeLink:"10",text:"Ways to Watch"},{link:"/commingsoon",typeLink:"11",text:"Corporate Information"},{link:"/commingsoon",typeLink:"12",text:"Media Center"},{link:"/commingsoon",typeLink:"13",text:"Terms of Use"},{link:"/commingsoon",typeLink:"14",text:"Contact Us"}]}}],n=Object(a.useState)(e[0]),c=Object(l.a)(n,2),i=c[0],r=c[1],o=function(){var n=Object(y.a)(f.a.mark((function n(a){return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(e[a.target.value]);case 2:t(U(e[a.target.value]));case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{style:{position:"fixed",bottom:"20px",right:"20px",zIndex:"100"},children:[Object(b.jsx)("label",{style:{display:"none"},children:i.key}),Object(b.jsx)("select",{onChange:o,style:{padding:"2px",outline:"0",border:"0",background:"#000",color:"#ffffff",cursor:"pointer"},children:e.map((function(t,e){return Object(b.jsx)("option",{value:e,children:t.language},t.key)}))})]})})};var Q=function(){var t=Object(d.c)((function(t){return t.reducer.value.menu}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("nav",{className:"nav",children:[Object(b.jsx)(B,{}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)(o.b,{to:"/",children:[Object(b.jsx)(h.a,{variant:"text",size:"large",startIcon:Object(b.jsx)(R.a,{}),children:t.home})," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)(o.b,{to:"/movie",children:[Object(b.jsx)(h.a,{variant:"text",size:"large",startIcon:Object(b.jsx)(_.a,{}),children:t.movie})," "]})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/tvshow",children:Object(b.jsx)(h.a,{variant:"text",size:"large",startIcon:Object(b.jsx)(E.a,{}),children:t.tvShow})})}),Object(b.jsx)("li",{children:Object(b.jsx)(o.b,{to:"/people",children:Object(b.jsx)(h.a,{variant:"text",size:"large",startIcon:Object(b.jsx)(F.a,{}),children:t.people})})})]})]})})};n(91);var D=function(){var t=Object(d.c)((function(t){return t.reducer.value.footer}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(j.a,{className:"footer",children:Object(b.jsxs)(v.a,{children:[Object(b.jsx)(m.a,{variant:"h4",children:t.contact}),Object(b.jsx)("ul",{children:t.links.map((function(t,e){return Object(b.jsx)("li",{data:t.typeLink,children:Object(b.jsx)(o.b,{to:t.link,children:t.text})},e)}))})]})})})},Z=n(68),G=n(118),K=(n(92),n(93),Object(Z.a)({palette:{primary:{main:"#4d4646",contrastText:"#424242"},secondary:{main:"#e4e4e4",contrastText:"#ffffff"}},typography:{fontFamily:"Raleway, Arial",fontWeight:700,h1:{fontSize:44,width:"100%",fontWeight:600},h2:{fontSize:34,width:"100%",fontWeight:600},h3:{fontSize:24,width:"100%",fontWeight:600},h4:{fontSize:18,width:"100%",fontWeight:600},h5:{fontSize:14,width:"100%",fontWeight:600}}}));var X=function(){return Object(b.jsx)(G.a,{theme:K,children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(j.a,{container:!0,direction:"row",justify:"flex-start",alignContent:"flex-start",children:[Object(b.jsx)(j.a,{item:!0,md:2,children:Object(b.jsx)(Q,{})}),Object(b.jsx)(j.a,{item:!0,md:10,className:"main",children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",children:Object(b.jsx)(x,{})}),Object(b.jsx)(s.a,{path:"/movie",children:Object(b.jsx)(T,{})}),Object(b.jsx)(s.a,{path:"/tvshow",children:Object(b.jsx)(z,{})}),Object(b.jsx)(s.a,{path:"/people",children:Object(b.jsx)(N,{})}),Object(b.jsx)(s.a,{path:"/commingsoon",children:Object(b.jsx)(I,{})}),Object(b.jsx)(s.a,{path:"/:id",children:Object(b.jsx)(W,{})})]})})]}),Object(b.jsx)(D,{})]})})})},Y=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,144)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))},$=n(45),tt=n(13),et=n(66),nt=n.n(et),at=n(34),ct=Object(tt.b)({reducer:q}),it={key:"root",storage:nt.a},rt=Object($.a)(it,ct),ot=Object(V.a)({reducer:rt,devTools:!1,middleware:[at.a]}),st=n(67),lt=Object($.b)(ot);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(d.a,{store:ot,children:Object(b.jsx)(st.a,{loading:null,persistor:lt,children:Object(b.jsx)(X,{})})})}),document.getElementById("root")),Y()}},[[96,2,3]]]);
//# sourceMappingURL=main.83e9b886.chunk.js.map