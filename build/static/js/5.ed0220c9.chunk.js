(this.webpackJsonpthemoviedb=this.webpackJsonpthemoviedb||[]).push([[5],{197:function(e,t,n){},222:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(7),i=n(4),s=n(174),o=n(157),d=n(179),u=n(158),l=n(223),j=n(0),b=n(30),h=n(80),p=n(78),f=n.n(p),x=n(81),O=n(198),m=n.n(O),v=n(199),y=n.n(v),w=n(25),g=(n(197),n(1));t.default=function(){var e=Object(b.b)(),t=Object(j.useState)(!1),n=Object(i.a)(t,2),c=n[0],p=n[1],O=Object(b.c)((function(e){return e.login.value})),v=Object(j.useState)(!0),k=Object(i.a)(v,2),_=k[0],S=k[1],C=O?O.request_token:"",W=Object(j.useState)(""),z=Object(i.a)(W,2),I=z[0],L=z[1],P=Object(j.useState)(!0),T=Object(i.a)(P,2),q=T[0],E=T[1],J=Object(j.useState)(),N=Object(i.a)(J,2),R=N[0],U=N[1],V=function(){var e=Object(r.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=cd58c7bd131cba3c391d62c5fda2ae53");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n.request_token);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(j.useEffect)((function(){!0===c&&function(){var t=Object(r.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={request_token:C},fetch("https://api.themoviedb.org/3/authentication/session/new?api_key=cd58c7bd131cba3c391d62c5fda2ae53",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){e(Object(x.b)(t))})).catch((function(e){console.log("Error:",e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[c,C,e]);var D=function(){var t=Object(r.a)(a.a.mark((function t(n){var c,r,i,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c=n.target.username.value,r=n.target.password.value,t.next=5,V();case 5:i=t.sent,s={username:c,password:r,request_token:i},"https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=cd58c7bd131cba3c391d62c5fda2ae53",fetch("https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=cd58c7bd131cba3c391d62c5fda2ae53",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(t){e(Object(h.b)(t)),!1===t.success?L("Sai t\xean \u0111\u0103ng nh\u1eadp or m\u1eadt kh\u1ea9u"):(L(""),p(!0))})).catch((function(e){console.log("Error:",e)}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=Object(r.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(h.c)()),t.next=3,p(!1);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),M=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(!q);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=Object(b.c)((function(e){return e.section.value})),B=A.success,G=A.session_id;return Object(j.useEffect)((function(){!0===B?function(){var e=Object(r.a)(a.a.mark((function e(){var t,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/account?api_key=cd58c7bd131cba3c391d62c5fda2ae53&session_id=".concat(G),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,U(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():console.log("ch\u01b0a \u0111\u0103ng nh\u1eadp")}),[G,B]),Object(g.jsx)(s.a,{container:!0,item:!0,className:"login",md:12,children:void 0!==O?Object(g.jsx)(s.a,{item:!0,md:12,children:!0===O.success?Object(g.jsxs)(s.a,{container:!0,alignItems:"center",justify:"flex-end",children:[void 0!==R?Object(g.jsx)(s.a,{children:null!==R.avatar.tmdb.avatar_path?Object(g.jsx)("img",{style:{borderRadius:"50%",width:"35px"},onClick:M,src:"https://www.themoviedb.org/t/p/w50_and_h50_face/".concat(R.avatar.tmdb.avatar_path),alt:""}):Object(g.jsx)(f.a,{onClick:M,color:"primary",style:{fontSize:"30px"}})}):Object(g.jsx)(f.a,{onClick:M,color:"primary",style:{fontSize:"30px"}}),Object(g.jsxs)(o.a,{style:{width:"200px",padding:"10px",position:"absolute",top:"60px",zIndex:"10"},hidden:q,elevation:0,children:[Object(g.jsx)(d.a,{variant:"h4",children:void 0!==R?R.name:""}),Object(g.jsx)(d.a,{children:Object(g.jsx)(w.b,{to:"/profile",onClick:function(){return E(!0)},children:"View Page"})}),Object(g.jsx)("hr",{style:{display:"block",width:"100%",margin:"5px 0"}}),Object(g.jsx)(d.a,{children:Object(g.jsx)(w.b,{to:"/watchlistmovie",onClick:function(){return E(!0)},children:"Watch List Movie"})}),Object(g.jsx)(d.a,{children:Object(g.jsx)(w.b,{to:"/watchlisttv",onClick:function(){return E(!0)},children:"Watch List TV"})}),Object(g.jsx)(d.a,{children:Object(g.jsx)(w.b,{to:"/commingsoon",onClick:function(){return E(!0)},children:"Rated List"})}),Object(g.jsx)(d.a,{children:Object(g.jsx)(w.b,{to:"/commingsoon",onClick:function(){return E(!0)},children:"Favorite List"})}),Object(g.jsx)("hr",{style:{display:"block",width:"100%",margin:"5px 0"}}),Object(g.jsx)(d.a,{children:Object(g.jsx)(w.b,{to:"/commingsoon",onClick:function(){return E(!0)},children:"Create list"})}),Object(g.jsx)("hr",{style:{display:"block",width:"100%",margin:"5px 0"}}),Object(g.jsx)(u.a,{variant:"contained",fullWidth:!0,color:"primary",onClick:F,startIcon:Object(g.jsx)(m.a,{color:"primary",style:{fontSize:"16"}}),children:Object(g.jsx)(d.a,{color:"secondary",children:"Logout"})})]})]}):Object(g.jsxs)(s.a,{children:[Object(g.jsx)(d.a,{variant:"h5",onClick:function(){return S(!_)},children:"\u0110\u0103ng nh\u1eadp"}),Object(g.jsxs)("form",{onSubmit:D,hidden:_,style:{padding:"10px"},children:[Object(g.jsx)(l.a,{fullWidth:!0,id:"username",name:"username",label:"Username"}),Object(g.jsx)(l.a,{fullWidth:!0,type:"password",id:"password",name:"password",label:"Password"}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{style:{fontSize:"11px",color:"red"},children:I})}),Object(g.jsxs)(s.a,{container:!0,style:{padding:"5px 0"},alignItems:"center",justify:"space-between",children:[Object(g.jsx)(s.a,{item:!0,children:Object(g.jsx)(d.a,{variant:"h5",children:Object(g.jsx)("a",{href:"https://www.themoviedb.org/signup",target:"_blank",rel:"noopener noreferrer",children:"\u0110\u0103ng k\xfd"})})}),Object(g.jsx)(s.a,{item:!0,children:Object(g.jsx)(u.a,{type:"submit",variant:"contained",color:"secondary",children:Object(g.jsx)(y.a,{})})})]})]})]})}):Object(g.jsxs)(s.a,{children:[Object(g.jsx)(d.a,{variant:"h5",onClick:function(){return S(!_)},children:"\u0110\u0103ng nh\u1eadp"}),Object(g.jsxs)("form",{onSubmit:D,hidden:_,className:"loginform",children:[Object(g.jsx)(l.a,{fullWidth:!0,id:"username",name:"username",label:"Username"}),Object(g.jsx)(l.a,{fullWidth:!0,type:"password",id:"password",name:"password",label:"Password"}),Object(g.jsx)("p",{children:Object(g.jsx)("i",{style:{fontSize:"11px",color:"red"},children:I})}),Object(g.jsx)(s.a,{container:!0,style:{padding:"5px 0"},alignItems:"center",justify:"flex-end",children:Object(g.jsx)(u.a,{type:"submit",variant:"contained",color:"secondary",children:Object(g.jsx)(y.a,{})})})]})]})})}}}]);
//# sourceMappingURL=5.ed0220c9.chunk.js.map