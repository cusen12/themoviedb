(this.webpackJsonpthemoviedb=this.webpackJsonpthemoviedb||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},115:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){},150:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(12),s=a.n(r),i=(a(110),a(111),a(38)),o=a(11),l=a(9),j=a(183),d=a(187),b=a(154),p=a(188),h=a(51),u=(a(115),a(1)),m=n.a.lazy((function(){return a.e(7).then(a.bind(null,215))})),g=n.a.lazy((function(){return a.e(8).then(a.bind(null,209))})),x=n.a.lazy((function(){return a.e(9).then(a.bind(null,210))}));var f=function(){var e=Object(o.f)(),t=Object(c.useState)(),a=Object(l.a)(t,2),n=a[0],r=a[1],s=Object(h.c)((function(e){return e.language.value.hero}));return Object(u.jsxs)(j.a,{className:"homepage",children:[Object(u.jsx)(j.a,{className:"search",children:Object(u.jsxs)(j.a,{className:"content",children:[Object(u.jsx)(d.a,{variant:"h2",color:"secondary",children:s.welcome}),Object(u.jsx)(d.a,{variant:"h4",color:"secondary",children:s.destription}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)}}),Object(u.jsx)(b.a,{onClick:function(){e.push("/search",{params:n})},children:s.search})]})]})}),Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:Object(u.jsxs)(p.a,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(g,{}),Object(u.jsx)(x,{})]})})]})},O=a(8),v=a.n(O),y=a(16),w=a(189),k=a(190),S=a(191),_=(a(119),a(195)),C=n.a.lazy((function(){return Promise.resolve().then(a.bind(null,76))}));var N=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(),s=Object(l.a)(r,2),i=s[0],b=s[1],h=Object(c.useState)(),m=Object(l.a)(h,2),g=m[0],x=m[1],f=Object(c.useState)("now_playing"),O=Object(l.a)(f,2),N=O[0],z=O[1],T=Object(c.useState)("Now Playing"),L=Object(l.a)(T,2),P=L[0],I=L[1],W="https://api.themoviedb.org/3/movie/".concat(N,"?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=").concat(a),R=Object(o.f)(),A=function(){var e=Object(y.a)(v.a.mark((function e(t){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentTarget.attributes.datatype.value,c=t.currentTarget.attributes.alt.value,e.next=4,z(a);case 4:return e.next=6,I(c);case 6:n(1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(y.a)(v.a.mark((function e(){var t,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=W,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,b(c.total_pages),x(c.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[W]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(p.a,{className:"movie",children:[Object(u.jsxs)(j.a,{container:!0,className:"category-title",justify:"space-between",alignContent:"flex-start",spacing:2,children:[Object(u.jsxs)(j.a,{item:!0,md:3,onClick:A,datatype:"popular",alt:"Popular",children:[Object(u.jsx)("img",{className:"lazyload","data-sizes":"auto",src:"https://image.tmdb.org/t/p/w45//loRmRzQXZeqG78TqZuyvSlEQfZb.jpg","data-src":"https://image.tmdb.org/t/p/w300//loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",alt:"Popular"}),Object(u.jsx)(d.a,{variant:"h4",children:"Popular"})]}),Object(u.jsxs)(j.a,{item:!0,md:3,onClick:A,datatype:"top_rated",alt:"Top Rated",children:[Object(u.jsx)("img",{className:"lazyload","data-sizes":"auto",src:"https://image.tmdb.org/t/p/w45//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg","data-src":"https://image.tmdb.org/t/p/w300//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",alt:"Top Rated"}),Object(u.jsx)(d.a,{variant:"h4",children:"Top Rated"})]}),Object(u.jsxs)(j.a,{item:!0,md:3,onClick:A,datatype:"now_playing",alt:"Now Playing",children:[Object(u.jsx)("img",{className:"lazyload","data-sizes":"auto",src:"https://image.tmdb.org/t/p/w45//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg","data-src":"https://image.tmdb.org/t/p/w300//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",alt:"Now Playing"}),Object(u.jsx)(d.a,{variant:"h4",children:"Now Playing"})]}),Object(u.jsxs)(j.a,{item:!0,md:3,onClick:A,datatype:"upcoming",alt:"Upcoming",children:[Object(u.jsx)("img",{className:"lazyload","data-sizes":"auto",src:"https://image.tmdb.org/t/p/w45//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg","data-src":"https://image.tmdb.org/t/p/w300//9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",alt:"Upcoming"}),Object(u.jsx)(d.a,{variant:"h4",children:"Upcoming"})]})]}),Object(u.jsx)(d.a,{variant:"h4",className:"titleH4",color:"primary",children:P}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)(j.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:2,children:g?g.map((function(e){return Object(u.jsx)(j.a,{item:!0,sm:3,children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(k.a,{children:[Object(u.jsx)("img",{className:"lazyload",style:{maxHeight:"169px"},"data-src":e.backdrop_path?"https://image.tmdb.org/t/p/w300/"+e.backdrop_path:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",src:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",alt:e.title}),Object(u.jsxs)(S.a,{children:[Object(u.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",onClick:function(){return function(e,t){R.push("/category/"+t+"/"+e)}(e.id,"movie")},children:e.title}),Object(u.jsx)("p",{children:e.release_date}),Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:Object(u.jsx)(C,{value:10*e.vote_average})}),Object(u.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:e.overview})]})]})})},e.id)})):""}),Object(u.jsx)("div",{style:{position:"relative"},className:"pagination",children:Object(u.jsx)(_.a,{count:i,page:parseInt(a),color:"secondary",onChange:function(e){n(e.target.textContent)}})})]})})},z=(a(120),n.a.lazy((function(){return Promise.resolve().then(a.bind(null,76))})));var T=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(),s=Object(l.a)(r,2),i=s[0],b=s[1],h=Object(c.useState)(),m=Object(l.a)(h,2),g=m[0],x=m[1],f=Object(c.useState)("popular"),O=Object(l.a)(f,2),C=O[0],N=O[1],T=Object(c.useState)("Popular"),L=Object(l.a)(T,2),P=L[0],I=L[1],W="https://api.themoviedb.org/3/tv/".concat(C,"?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=").concat(a),R=Object(o.f)(),A=function(){var e=Object(y.a)(v.a.mark((function e(t){var a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.currentTarget.attributes.datatype.value,c=t.currentTarget.attributes.alt.value,e.next=4,N(a);case 4:return e.next=6,I(c);case 6:n(1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){(function(){var e=Object(y.a)(v.a.mark((function e(){var t,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=W,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,b(c.total_pages),x(c.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[W]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(p.a,{className:"movie",children:[Object(u.jsxs)(j.a,{container:!0,className:"category-title",justify:"space-between",alignContent:"flex-start",spacing:2,children:[Object(u.jsxs)(j.a,{item:!0,md:3,onClick:A,datatype:"popular",alt:"Popular",children:[Object(u.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45//b0WmHGc8LHTdGCVzxRb3IBMur57.jpg","data-src":"https://image.tmdb.org/t/p/w300//b0WmHGc8LHTdGCVzxRb3IBMur57.jpg",alt:"Popular"}),Object(u.jsx)(d.a,{variant:"h4",children:"Popular"})]}),Object(u.jsxs)(j.a,{item:!0,md:3,onClick:A,datatype:"top_rated",alt:"Top Rated",children:[Object(u.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45//z59kJfcElR9eHO9rJbWp4qWMuee.jpg","data-src":"https://image.tmdb.org/t/p/w300//z59kJfcElR9eHO9rJbWp4qWMuee.jpg",alt:"Top Rated"}),Object(u.jsx)(d.a,{variant:"h4",children:"Top Rated"})]}),Object(u.jsxs)(j.a,{item:!0,md:3,onClick:A,datatype:"on_the_air",alt:"On The Air",children:[Object(u.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45//uAjMQlbPkVHmUahhCouANlHSDW2.jpg","data-src":"https://image.tmdb.org/t/p/w300//uAjMQlbPkVHmUahhCouANlHSDW2.jpg",alt:"On The Air"}),Object(u.jsx)(d.a,{variant:"h4",children:"On The Air"})]}),Object(u.jsxs)(j.a,{item:!0,md:3,onClick:A,datatype:"airing_today",alt:"Airing Today",children:[Object(u.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45//5VltHQJXdmbSD6gEJw3R8R1Kbmc.jpg","data-src":"https://image.tmdb.org/t/p/w300//5VltHQJXdmbSD6gEJw3R8R1Kbmc.jpg",alt:"Airing Today"}),Object(u.jsx)(d.a,{variant:"h4",children:"Airing Today"})]})]}),Object(u.jsx)(d.a,{variant:"h4",className:"titleH4",color:"primary",children:P}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)(j.a,{container:!0,justify:"flex-start",alignContent:"flex-start",spacing:2,children:g?g.map((function(e){return Object(u.jsx)(j.a,{item:!0,sm:3,children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(k.a,{children:[Object(u.jsx)("img",{className:"lazyload",style:{maxHeight:"169px"},"data-src":e.backdrop_path?"https://image.tmdb.org/t/p/w300/"+e.backdrop_path:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",src:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",alt:e.title}),Object(u.jsxs)(S.a,{children:[Object(u.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",onClick:function(){return function(e,t){R.push("/category/"+t+"/"+e)}(e.id,"tv")},children:e.original_name}),Object(u.jsx)("p",{children:e.first_air_date}),Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:Object(u.jsx)(z,{value:10*e.vote_average})}),Object(u.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:e.overview})]})]})})},e.id)})):""}),Object(u.jsx)("div",{style:{position:"relative"},className:"pagination",children:Object(u.jsx)(_.a,{count:i,page:parseInt(a),color:"secondary",onChange:function(e){n(e.target.textContent)}})})]})})},L=a(49),P=a(192),I=(a(121),a(76)),W=a(87),R=a.n(W),A=a(88),H=a.n(A),J=a(89),q=a.n(J),U=a(90),M=a.n(U),B=a(91),E=a.n(B),F=a(196),V=a(66),D=a.n(V),Q=a(92),Z=a.n(Q),G=a(93),Y=a.n(G),K=a(94),X=a.n(K),$=a(95),ee=a.n($),te=a(50);var ae=function(){var e=Object(o.h)(),t=e.category,a=e.id,n=Object(c.useState)(),r=Object(l.a)(n,2),s=r[0],h=r[1],m=Object(c.useState)(),g=Object(l.a)(m,2),x=g[0],f=g[1],O=Object(c.useState)(),k=Object(l.a)(O,2),_=k[0],C=k[1],N=Object(c.useState)(),z=Object(l.a)(N,2),T=z[0],W=z[1],A=Object(c.useState)(),J=Object(l.a)(A,2),U=J[0],B=J[1],V=Object(c.useState)(),Q=Object(l.a)(V,2),G=Q[0],K=Q[1],$=Object(c.useState)(),ae=Object(l.a)($,2),ce=ae[0],ne=ae[1],re=Object(c.useState)(),se=Object(l.a)(re,2),ie=se[0],oe=se[1],le=Object(c.useState)(5),je=Object(l.a)(le,2),de=je[0],be=je[1],pe=Object(c.useState)(!0),he=Object(l.a)(pe,2),ue=he[0],me=he[1],ge=Object(c.useState)(!0),xe=Object(l.a)(ge,2),fe=xe[0],Oe=xe[1];Object(c.useEffect)((function(){(function(){var e=Object(y.a)(v.a.mark((function e(){var c,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/".concat(t,"/").concat(a,"?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,h(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),function(){var e=Object(y.a)(v.a.mark((function e(){var c,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/images?api_key=cd58c7bd131cba3c391d62c5fda2ae53"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,f(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(y.a)(v.a.mark((function e(){var c,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/videos?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,C(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(y.a)(v.a.mark((function e(){var c,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/external_ids?api_key=cd58c7bd131cba3c391d62c5fda2ae53"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,W(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(y.a)(v.a.mark((function e(){var c,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/credits?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,B(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(y.a)(v.a.mark((function e(){var c,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/reviews?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language&language=en-US&page=1"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,K(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(y.a)(v.a.mark((function e(){var c,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/recommendations?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&page=1"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,ne(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){var e=Object(y.a)(v.a.mark((function e(){var c,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/keywords?api_key=cd58c7bd131cba3c391d62c5fda2ae53"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,oe(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,a]);var ve=function(e){var t=new Date(e);return t.getDate()+"-"+t.getMonth()+"-"+t.getFullYear()+" at "+t.getHours()+":"+t.getMinutes()};return Object(u.jsxs)(p.a,{className:"details-"+t,children:[void 0!==s?Object(u.jsxs)(j.a,{container:!0,spacing:3,justify:"space-between",alignItems:"center",style:{position:"relative"},children:[Object(u.jsxs)(j.a,{item:!0,md:3,style:{position:"relative"},children:[Object(u.jsx)(j.a,{style:{position:"absolute",top:"20px",left:"20px"},children:Object(u.jsx)(I.default,{value:10*s.vote_average})}),Object(u.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45/".concat(s.poster_path),"data-src":"https://image.tmdb.org/t/p/w500/".concat(s.poster_path),alt:s.title})]}),Object(u.jsxs)(j.a,{item:!0,md:9,children:[Object(u.jsx)(d.a,{variant:"h2",children:s.title}),Object(u.jsxs)(j.a,{container:!0,spacing:2,justify:"flex-start",alignItems:"center",style:{padding:"8px"},children:[Object(u.jsx)(R.a,{className:"hov",color:"primary",onClick:function(){console.log("Th\u1ef1c hi\u1ec7n add to list")},titleAccess:"Add to list"}),Object(u.jsx)(H.a,{className:"hov",color:"primary",onClick:function(){console.log("Th\u1ef1c hi\u1ec7n add to Favorite")},titleAccess:"Mark as favorite"}),Object(u.jsx)(q.a,{className:"hov",color:"primary",onClick:function(){console.log("Th\u1ef1c hi\u1ec7n add to watch list")},titleAccess:"Add to your watchlist"}),Object(u.jsx)(M.a,{className:"hov",color:"primary",onClick:function(){me(!ue)},titleAccess:"Rate it"}),Object(u.jsx)(j.a,{hidden:ue,style:{position:"relative"},children:Object(u.jsx)(F.a,{style:{position:"absolute",top:"-12px",left:"0"},name:"simple-controlled",onChange:function(e,t){be(t),alert("Thanks to vote!!"),me(!ue)},value:de,precision:.5})})]}),Object(u.jsxs)(d.a,{variant:"caption",children:["T\u1ed5ng b\xecnh ch\u1ecdn: ",s.vote_count]}),Object(u.jsxs)(d.a,{variant:"caption",children:[" ",s.tagline]}),Object(u.jsxs)(d.a,{variant:"caption",children:["Th\u1ec3 lo\u1ea1i:  ",s.genres.map((function(e){return Object(u.jsxs)("span",{children:[e.name," "]},e.id)}))," -  ",s.runtime," Ph\xfat"]}),Object(u.jsxs)(d.a,{variant:"caption",children:["Make in: ",s.production_companies[0].name]}),Object(u.jsx)(d.a,{variant:"h4",children:"Overview"}),Object(u.jsxs)(d.a,{variant:"caption",children:[" ",s.overview]}),void 0!==_?Object(u.jsx)("a",{href:void 0!==_.results[0]?"https://www.youtube.com/watch?v=".concat(_.results[0].key):"",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(b.a,{variant:"outlined",startIcon:Object(u.jsx)(E.a,{fontSize:"large"}),children:"Trailer"})}):"",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),void 0!==T?Object(u.jsxs)(j.a,{children:[void 0!==T.facebook_id?Object(u.jsx)("a",{href:"https://www.facebook.com/".concat(T.facebook_id),target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(Z.a,{fontSize:"large",className:"hov",titleAccess:"Facebook",color:"primary"})}):"",void 0!==T.twitter_id?Object(u.jsx)("a",{href:"https://twitter.com/".concat(T.twitter_id),target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(Y.a,{fontSize:"large",className:"hov",titleAccess:"Twitter",color:"primary"})}):"",void 0!==T.instagram_id?Object(u.jsx)("a",{href:"https://instagram.com/".concat(T.instagram_id),target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(X.a,{fontSize:"large",className:"hov",titleAccess:"Instagram",color:"primary"})}):"",Object(u.jsx)("a",{href:s.homepage,target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(ee.a,{fontSize:"large",className:"hov",titleAccess:"Home",color:"primary"})})]}):"loadding...",Object(u.jsx)("br",{}),void 0!==ie?Object(u.jsxs)(j.a,{children:[Object(u.jsx)(d.a,{variant:"h4",children:"Keyword"}),ie.keywords.map((function(e){return Object(u.jsx)(b.a,{style:{margin:"0 5px 5px 0"},variant:"outlined",children:e.name},e.id)}))]}):""]})]}):"loadding...",Object(u.jsx)("hr",{style:{display:"block",width:"100%",margin:"5px 0"}}),Object(u.jsx)("br",{}),Object(u.jsxs)(d.a,{variant:"h4",children:["Series Cast  ",Object(u.jsx)(b.a,{variant:"text",style:{float:"right"},color:"primary",children:Object(u.jsx)(i.b,{to:"/commingsoon",children:"View all"})})," "]}),Object(u.jsx)("br",{}),void 0!==U?Object(u.jsx)(D.a,Object(L.a)(Object(L.a)({},{className:"center",infinite:!1,centerPadding:"50px",slidesToShow:8,speed:500,slidesToScroll:1}),{},{children:U.cast.map((function(e){return Object(u.jsxs)(w.a,{className:"peopleCard",children:[Object(u.jsx)("img",{className:"lazyload",height:"216px",src:null!==e.profile_path?"https://image.tmdb.org/t/p/w45/".concat(e.profile_path):"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-1252799405af813fe2e29e8b25c44d9a12406c0db697a6b4a25080f5974ddf68.svg","data-src":null!==e.profile_path?"https://image.tmdb.org/t/p/w154/".concat(e.profile_path):"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-1252799405af813fe2e29e8b25c44d9a12406c0db697a6b4a25080f5974ddf68.svg",alt:""}),Object(u.jsx)(S.a,{style:{padding:"10px 20px"},children:Object(u.jsx)(d.a,{variant:"body1",children:e.name})})]},e.id)}))})):"",Object(u.jsx)("br",{}),Object(u.jsx)(d.a,{variant:"h4",children:"Social"}),Object(u.jsx)("br",{}),void 0!==G?0!==G.total_results?G.results.map((function(e){return Object(u.jsx)(w.a,{style:{margin:"5px 0"},children:Object(u.jsxs)(j.a,{container:!0,spacing:2,style:{margin:"0 ",padding:"5px"},justify:"flex-start",alignItems:"center",children:[Object(u.jsx)(j.a,{item:!0,md:7,style:{display:"flex",alignItems:"flex-start"},children:Object(u.jsx)(d.a,{variant:"caption",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.content})}),Object(u.jsx)(j.a,{item:!0,md:1,children:Object(u.jsx)(d.a,{variant:"caption",children:"Open"})}),Object(u.jsx)(j.a,{item:!0,md:1,children:Object(u.jsx)(d.a,{variant:"caption",children:"8"})}),Object(u.jsx)(j.a,{item:!0,md:3,children:Object(u.jsxs)(d.a,{variant:"caption",children:[ve(e.updated_at),Object(u.jsx)("br",{}),"by ",e.author_details.username]})})]})},e.id)})):Object(u.jsx)(d.a,{variant:"caption",children:"Ch\u01b0a c\xf3 b\xecnh lu\u1eadn cho phim n\xe0y"}):"",Object(u.jsx)("br",{}),Object(u.jsx)(d.a,{variant:"h4",children:"Media"}),"  ",Object(u.jsx)("br",{}),Object(u.jsxs)(P.a,{variant:"outlined",children:[Object(u.jsx)(b.a,{onClick:function(){return Oe(!fe)},children:"Poster"}),Object(u.jsx)(b.a,{onClick:function(){return Oe(!fe)},children:"Backdrops"})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),fe?Object(u.jsx)(te.LightgalleryProvider,{children:Object(u.jsx)(j.a,{justify:"flex-start",alignItems:"flex-start",container:!0,spacing:2,children:void 0!==x?x.backdrops.map((function(e){return Object(u.jsx)(j.a,{item:!0,children:Object(u.jsx)(te.LightgalleryItem,{style:{padding:"0 5px"},group:"b",src:"https://image.tmdb.org/t/p/w500/".concat(e.file_path),children:Object(u.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45/".concat(e.file_path),"data-src":"https://image.tmdb.org/t/p/w154/".concat(e.file_path),alt:""})})},e.file_path)})):""})}):Object(u.jsx)(te.LightgalleryProvider,{children:Object(u.jsx)(j.a,{justify:"flex-start",alignItems:"flex-start",container:!0,spacing:2,children:void 0!==x?x.posters.map((function(e){return Object(u.jsx)(j.a,{item:!0,children:Object(u.jsx)(te.LightgalleryItem,{style:{padding:"0 5px"},group:"b",src:"https://image.tmdb.org/t/p/w500/".concat(e.file_path),children:Object(u.jsx)("img",{className:"lazyload",height:"200px",src:"https://image.tmdb.org/t/p/w45/".concat(e.file_path),"data-src":"https://image.tmdb.org/t/p/w154/".concat(e.file_path),alt:""})})},e.file_path)})):""})}),Object(u.jsx)("br",{}),Object(u.jsx)(d.a,{variant:"h4",children:"Recommendations"}),Object(u.jsx)("br",{}),Object(u.jsx)(D.a,Object(L.a)(Object(L.a)({},{className:"center",infinite:!1,centerPadding:"50px",slidesToShow:6,speed:500,slidesToScroll:1}),{},{children:void 0!==ce?ce.results.map((function(e){return Object(u.jsxs)(w.a,{className:"reconmenCard",children:[Object(u.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45/".concat(e.backdrop_path),"data-src":"https://image.tmdb.org/t/p/w300/".concat(e.backdrop_path),alt:e.original_title}),Object(u.jsx)(S.a,{style:{padding:"10px 20px"},children:Object(u.jsx)(d.a,{variant:"body1",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.original_title})})]},e.id)})):""}))]})};var ce=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p.a,{style:{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(u.jsx)(d.a,{variant:"h1",align:"center",children:"Comming Soon"})})})},ne=a(98),re=a(193),se=a(194),ie=(a(150),n.a.lazy((function(){return Promise.resolve().then(a.bind(null,76))})));var oe=function(){var e=Object(o.f)(),t=Object(o.g)().state.params,a=Object(c.useState)(),n=Object(l.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(1),h=Object(l.a)(i,2),m=h[0],g=h[1],x=Object(c.useState)(),f=Object(l.a)(x,2),O=f[0],C=f[1],N=Object(c.useState)(),z=Object(l.a)(N,2),T=z[0],L=z[1],P=function(){var e=Object(y.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(1),console.log(m),console.log(T);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){(function(){var e=Object(y.a)(v.a.mark((function e(){var a,c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=10;break}return a="https://api.themoviedb.org/3/search/movie?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US&query=".concat(t,"&page=").concat(m,"&include_adult=false"),e.next=4,fetch(a);case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,C(n.total_pages),s(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,m]);var I=function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(p.a,{children:Object(u.jsxs)(j.a,{container:!0,className:"searchPage",item:!0,md:12,justify:"flex-start",alignItems:"flex-start",spacing:4,children:[Object(u.jsxs)(j.a,{className:"searchButon",item:!0,md:12,children:[Object(u.jsx)(se.a,{label:"Search for a movie, tv show, person......",onChange:function(e){L(e.target.value)},defaultValue:t,fullWidth:!0}),Object(u.jsx)(b.a,{color:"primary",className:"hov",onClick:I,fullWidth:!0,fontSize:"small",children:"Search"})]}),Object(u.jsxs)(j.a,{item:!0,md:12,container:!0,className:"category-title",justify:"flex-start",alignContent:"flex-start",spacing:2,children:[Object(u.jsxs)(j.a,{item:!0,md:2,onClick:P,datatype:"movie",alt:"Movie",children:[Object(u.jsx)("img",{className:"lazyload","data-sizes":"auto","data-src":"https://image.tmdb.org/t/p/w45//loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",src:"https://image.tmdb.org/t/p/w300//rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",alt:"movie"}),Object(u.jsxs)(d.a,{variant:"h4",children:["Movie",Object(u.jsx)("i",{children:"(552)"})]})]}),Object(u.jsxs)(j.a,{item:!0,md:2,onClick:P,datatype:"tv-show",alt:"TV Show",children:[Object(u.jsx)("img",{className:"lazyload","data-sizes":"auto","data-src":"https://image.tmdb.org/t/p/w45//inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",src:"https://image.tmdb.org/t/p/w300//6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg",alt:"TV Show"}),Object(u.jsxs)(d.a,{variant:"h4",children:["TV Show",Object(u.jsx)("i",{children:"(5)"})]})]}),Object(u.jsxs)(j.a,{item:!0,md:2,onClick:P,datatype:"people",alt:"People",children:[Object(u.jsx)("img",{className:"lazyload","data-sizes":"auto","data-src":"https://image.tmdb.org/t/p/w45//jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",src:"https://image.tmdb.org/t/p/w300//ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg",alt:"People"}),Object(u.jsxs)(d.a,{variant:"h4",children:["People",Object(u.jsx)("i",{children:"(253)"})]})]})]}),Object(u.jsx)(j.a,{container:!0,item:!0,md:12,justify:"flex-start",alignContent:"flex-start",spacing:2,children:void 0!==r?r.results.map((function(t){return Object(u.jsx)(j.a,{item:!0,sm:3,children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(k.a,{children:[Object(u.jsx)("img",{className:"lazyload",style:{maxHeight:"169px",objectFit:"cover",width:"100%"},"data-src":t.backdrop_path?"https://image.tmdb.org/t/p/w300/"+t.backdrop_path:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",src:"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg",alt:t.title}),Object(u.jsxs)(S.a,{children:[Object(u.jsx)(d.a,{gutterBottom:!0,variant:"h5",component:"h2",onClick:function(){return function(t,a){e.push("/details"+a+"="+t)}(t.id,"movie")},children:t.title}),Object(u.jsx)("p",{children:t.release_date}),Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:Object(u.jsx)(ie,{value:10*t.vote_average})}),Object(u.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]})})},t.id)})):"loadding..."}),Object(u.jsx)("div",{style:{position:"relative"},className:"pagination",children:Object(u.jsx)(_.a,{count:O,page:parseInt(m),color:"secondary",onChange:function(e){g(e.target.textContent)}})})]})})},le=n.a.lazy((function(){return a.e(3).then(a.bind(null,214))})),je=n.a.lazy((function(){return a.e(5).then(a.bind(null,208))})),de=Object(ne.a)({palette:{primary:{main:"#4d4646",contrastText:"#424242"},secondary:{main:"#e4e4e4",contrastText:"#ffffff"}},typography:{fontFamily:"Raleway, Arial",fontWeight:700,h1:{fontSize:44,width:"100%",fontWeight:600},h2:{fontSize:34,width:"100%",fontWeight:600},h3:{fontSize:24,width:"100%",fontWeight:600},h4:{fontSize:18,width:"100%",fontWeight:600},h5:{fontSize:14,width:"100%",fontWeight:600}}});var be=function(){return Object(u.jsx)(re.a,{theme:de,children:Object(u.jsx)(i.a,{children:Object(u.jsxs)(c.Suspense,{fallback:Object(u.jsx)("div",{children:"Loading..."}),children:[Object(u.jsx)(le,{}),Object(u.jsx)(j.a,{className:"main",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:Object(u.jsx)(f,{})}),Object(u.jsx)(o.a,{path:"/movie",children:Object(u.jsx)(N,{})}),Object(u.jsx)(o.a,{path:"/tvshow",children:Object(u.jsx)(T,{})}),Object(u.jsx)(o.a,{path:"/people",children:Object(u.jsx)(ce,{})}),Object(u.jsx)(o.a,{path:"/commingsoon",children:Object(u.jsx)(ce,{})}),Object(u.jsx)(o.a,{path:"/search",children:Object(u.jsx)(oe,{})}),Object(u.jsx)(o.a,{path:"/category/:category/:id",children:Object(u.jsx)(ae,{})})]})}),Object(u.jsx)(je,{})]})})})},pe=function(e){e&&e instanceof Function&&a.e(10).then(a.bind(null,211)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},he=a(33),ue=a(80),me=a(81),ge=a(82),xe=a(62),fe=a(20),Oe=a(96),ve=a.n(Oe),ye=a(48),we=Object(fe.b)({language:ue.a,login:me.a,section:ge.a}),ke={key:"root",storage:ve.a},Se=Object(xe.a)(ke,we),_e=Object(he.a)({reducer:Se,devTools:!1,middleware:[ye.a]}),Ce=a(97),Ne=Object(xe.b)(_e);s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(h.a,{store:_e,children:Object(u.jsx)(Ce.a,{loading:null,persistor:Ne,children:Object(u.jsx)(be,{})})})}),document.getElementById("root")),pe()},76:function(e,t,a){"use strict";a.r(t);a(0);var c=a(1);t.default=function(e){return Object(c.jsxs)("svg",{viewBox:"0 0 40 36",width:"40",height:"44",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("circle",{stroke:"#00000088",strokeWidth:"6",fill:"#00000088",cx:"20",cy:"20",r:"15.91549431"}),Object(c.jsx)("circle",{stroke:e.value>50?"#e4e4e4":"#ffcf22",strokeWidth:"6",strokeDasharray:e.value+",100",fill:"#00000088",cx:"20",cy:"20",r:"15.91549431"}),Object(c.jsx)("text",{x:"20",y:"20",alignmentBaseline:"central",fill:"white",textAnchor:"middle",fontSize:"12",children:e.value+"%"})]})}},80:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var c=a(33),n=Object(c.b)({name:"selectLanguage",initialState:{value:{key:"en",language:"English",menu:{home:"Home",movie:"Movie",tvShow:"TV Show",people:"People"},hero:{welcome:"Welcome!!!",destription:"Millions of movies, TV shows and people to discover. Explore now.",search:"Search"},footer:{contact:"Contact us",links:[{link:"/commingsoon",typeLink:"1",text:"FAQ"},{link:"/commingsoon",typeLink:"2",text:"Investor Relations"},{link:"/commingsoon",typeLink:"3",text:"Privacy"},{link:"/commingsoon",typeLink:"4",text:"Speed Test"},{link:"/commingsoon",typeLink:"5",text:"Help Center"},{link:"/commingsoon",typeLink:"6",text:"Jobs"},{link:"/commingsoon",typeLink:"7",text:"Cookie Preferences"},{link:"/commingsoon",typeLink:"8",text:"Legal Notices"},{link:"/commingsoon",typeLink:"9",text:"Account"},{link:"/commingsoon",typeLink:"10",text:"Ways to Watch"},{link:"/commingsoon",typeLink:"11",text:"Corporate Information"},{link:"/commingsoon",typeLink:"12",text:"Media Center"},{link:"/commingsoon",typeLink:"13",text:"Terms of Use"},{link:"/commingsoon",typeLink:"14",text:"Contact Us"}]}}},reducers:{selectLanguage:function(e,t){e.value=t.payload}}}),r=n.actions.selectLanguage;t.a=n.reducer},81:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return i}));var c=a(33),n=Object(c.b)({name:"login",initialState:{success:!1,expires_at:"",request_token:""},reducers:{login:function(e,t){e.value=t.payload},logout:function(e){e.value={success:!1,expires_at:"",request_token:""}}}}),r=n.actions,s=r.login,i=r.logout;t.a=n.reducer},82:function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var c=a(33),n=Object(c.b)({name:"section",initialState:{},reducers:{section:function(e,t){e.value=t.payload}}}),r=n.actions.section;t.a=n.reducer}},[[153,1,2]]]);
//# sourceMappingURL=main.c2da3761.chunk.js.map