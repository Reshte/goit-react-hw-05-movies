"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{6368:function(n,e,t){t.d(e,{O:function(){return c}});var r=t(1087),a=t(184),c=function(n){var e=n.movies,t=n.url,c=n.query;return(0,a.jsx)("ul",{children:e.map((function(n){var e=n.id,u=n.title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"".concat(t).concat(e),state:{from:"".concat(c)},children:(0,a.jsx)("h2",{children:u})})},e)}))})}},443:function(n,e,t){t.d(e,{TP:function(){return p},XT:function(){return f},_L:function(){return i},tx:function(){return v},zv:function(){return l}});var r=t(5861),a=t(4687),c=t.n(a),u=t(3263),o="https://api.themoviedb.org/3/",s="f983fc840eb543faba07dcbe6db19b0b",i=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s,"&page=1&language=en-US"));case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data.cast,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5415:function(n,e,t){t.r(e),t.d(e,{Home:function(){return p}});var r=t(5861),a=t(9439),c=t(4687),u=t.n(c),o=t(6368),s=t(2791),i=t(443),f=t(184),p=function(){var n=(0,s.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1];return(0,s.useEffect)((function(){t.length>0||(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i._L)();case 3:e=n.sent,c(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}),[t]),(0,f.jsxs)("main",{children:[(0,f.jsx)("h1",{children:"Tredding today"}),(0,f.jsx)(o.O,{movies:t,url:"movies/",query:"/"})]})};e.default=p}}]);
//# sourceMappingURL=415.6e40053e.chunk.js.map