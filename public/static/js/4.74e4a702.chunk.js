(this.webpackJsonpthemoviedb=this.webpackJsonpthemoviedb||[]).push([[4],{145:function(t,e,a){"use strict";a.r(e);var i=a(125),n=a(16),r=a.n(n),s=a(25),o=a(9),c=a(111),l=a(113),d=a(120),h=a(116),b=a(117),p=a(114),m=a(0),j=a(123),g=a.n(j),u=a(6),v=a(20),x=a(35),O=a(2),f=a(3),w=a(4),y=(a(5),a(18)),k=a(7),S=m.forwardRef((function(t,e){var a=t.animation,i=void 0===a?"pulse":a,n=t.classes,r=t.className,s=t.component,o=void 0===s?"span":s,c=t.height,l=t.variant,d=void 0===l?"text":l,h=t.width,b=Object(f.a)(t,["animation","classes","className","component","height","variant","width"]),p=Boolean(b.children);return m.createElement(o,Object(O.a)({ref:e,className:Object(w.a)(n.root,n[d],r,p&&[n.withChildren,!h&&n.fitContent,!c&&n.heightAuto],!1!==i&&n[i])},b,{style:Object(O.a)({width:h,height:c},b.style)}))})),T=Object(k.a)((function(t){return{root:{display:"block",backgroundColor:Object(y.b)(t.palette.text.primary,"light"===t.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:t.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(t.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(S),_=a(1);e.default=function(){var t=Object(m.useState)(),e=Object(o.a)(t,2),a=e[0],n=e[1],j=Object(u.f)();return Object(m.useEffect)((function(){(function(){var t=Object(s.a)(r.a.mark((function t(){var e,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/movie/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US",t.next=3,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=cd58c7bd131cba3c391d62c5fda2ae53&language=en-US");case 3:return e=t.sent,t.next=6,e.json();case 6:return a=t.sent,t.next=9,n(a.results);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(_.jsxs)(_.Fragment,{children:[void 0!==a?Object(_.jsxs)(c.a,{container:!0,justify:"space-between",alignItems:"flex-start",spacing:4,children:[Object(_.jsx)(c.a,{item:!0,md:12,children:Object(_.jsx)(l.a,{className:"titleH4",variant:"h4",align:"center",component:"h1",color:"textSecondary",children:"Yeahhhh !!! The moment of relaxation has come"})}),Object(_.jsxs)(c.a,{item:!0,md:6,className:"box-highlights",children:[Object(_.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45/"+a[10].backdrop_path,"data-src":"https://image.tmdb.org/t/p/w780/"+a[10].backdrop_path,alt:""}),Object(_.jsxs)("div",{className:"content",children:[Object(_.jsx)(l.a,{variant:"h4",children:a[10].title}),Object(_.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:a[10].overview})]})]}),Object(_.jsxs)(c.a,{item:!0,md:6,className:"box-highlights box-highlights2",children:[Object(_.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45/"+a[12].backdrop_path,"data-src":"https://image.tmdb.org/t/p/w780/"+a[12].backdrop_path,alt:""}),Object(_.jsxs)("div",{className:"content",children:[Object(_.jsx)(l.a,{variant:"h4",children:a[12].title}),Object(_.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:a[12].overview})]})]})]}):Object(_.jsx)(T,{variant:"rect",width:210,height:118}),Object(_.jsx)("br",{}),Object(_.jsx)(l.a,{variant:"h4",className:"titleH4",color:"primary",children:"TOP Movie"}),Object(_.jsx)("hr",{}),Object(_.jsx)("br",{}),Object(_.jsx)(c.a,{children:Object(_.jsx)(g.a,Object(i.a)(Object(i.a)({},{dots:!1,infinite:!0,arrows:!1,speed:500,slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:1824,settings:{slidesToShow:7,slidesToScroll:7}},{breakpoint:1624,settings:{slidesToShow:6,slidesToScroll:6}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:a?a.map((function(t){return Object(_.jsx)(d.a,{children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)("img",{className:"lazyload",src:"https://image.tmdb.org/t/p/w45/"+t.backdrop_path,"data-src":"https://image.tmdb.org/t/p/w300/"+t.backdrop_path,alt:t.original_name}),Object(_.jsxs)(b.a,{children:[Object(_.jsx)(l.a,{gutterBottom:!0,variant:"h5",component:"h2",onClick:function(){return function(t,e){j.push("/details"+e+"="+t)}(t.id,"movie")},children:t.title}),Object(_.jsx)("p",{children:t.release_date}),Object(_.jsx)(x.a,{value:10*t.vote_average}),Object(_.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:t.overview})]})]})},t.id)})):""}))}),Object(_.jsx)(p.a,{variant:"text",color:"primary",children:Object(_.jsx)(v.b,{to:"/movie",children:"View all"})})]})}}}]);
//# sourceMappingURL=4.74e4a702.chunk.js.map