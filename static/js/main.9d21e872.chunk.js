(this["webpackJsonpinvoice-tz"]=this["webpackJsonpinvoice-tz"]||[]).push([[0],{29:function(e,t,a){e.exports=a(70)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),i=(a(34),a(35),a(36),a(2)),o=a(1),u=(a(37),a(27)),m=a.n(u),s=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),i=Object(o.a)(l,2),u=i[0],s=i[1],b=Object(n.useState)(!1),E=Object(o.a)(b,2),A=E[0],d=E[1];return Object(n.useEffect)((function(){A&&m.a.get(e).then((function(e){console.log(e),c(e.data)})).catch((function(e){var t=e.message;console.log(t),s(t)})).finally((function(){d(!1)}))}),[A,e,u]),[{isLoading:A,response:r,error:u},function(){d(!0)}]},b=a(15),E={username:null,avatarUrl:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(b.a)({},e,{username:t.payload.username,avatarUrl:t.payload.avatarUrl});default:return Object(b.a)({},e)}},d=Object(n.createContext)(),v=function(e){var t=e.children,a=Object(n.useReducer)(A,E);return r.a.createElement(d.Provider,{value:a},t)},p=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/g,f=new Array(15),g=["Freddie","Chester","Robert","James"];function N(e){return Math.floor(Math.random()*Math.floor(e))}var I=f.fill("").map((function(e,t){return{id:t,name:g[N(4)],avg:N(500),buyCount:N(12),total:N(1e3)}})),h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),u=Object(o.a)(l,2),m=u[0],b=u[1],E=Object(n.useState)(!1),A=Object(o.a)(E,2),v=A[0],f=A[1],g=Object(n.useState)(!1),N=Object(o.a)(g,2),I=N[0],h=N[1],j=Object(n.useContext)(d),y=Object(o.a)(j,2)[1],O=s("https://api.github.com/users/".concat(a)),C=Object(o.a)(O,2),w=C[0],x=w.isLoading,S=w.response,R=w.error,z=C[1];return Object(n.useEffect)((function(){S&&(y({type:"SET_USER",payload:{username:S.login,avatarUrl:S.avatar_url}}),h(!0))}),[S,R,y]),I?r.a.createElement(i.a,{to:"/"}):r.a.createElement("div",{className:"col-3 form-wrapper"},r.a.createElement("h1",{className:"text-center text-light mb-4"},"Login"),r.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),p.test(m)?(f(!1),z()):f(!0)}},r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control ".concat(R&&"is-invalid"),placeholder:"username",value:a,onChange:function(e){return c(e.target.value)}}),r.a.createElement("div",{className:"invalid-feedback"},"This user doens't exist")),r.a.createElement("fieldset",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control ".concat(v&&"is-invalid"),autoComplete:"current-pass",placeholder:"password",value:m,onChange:function(e){return b(e.target.value)}}),r.a.createElement("div",{className:"invalid-feedback"},"Password should contain atleast: 1 number, 1 capital letter, 1 letter")),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-outline-light btn-md",type:"submit",disabled:x},"login"))))},j=(a(60),a(3));a(61);function y(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function O(){var e=Object(n.useState)(y()),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){r(y())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var C=function(){return r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-align-top",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M6 14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M1 1.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1h-13a.5.5 0 0 0-.5.5z"}))},w=function(){return r.a.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-people",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zm7.973.056v-.002.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"}))};function x(){var e=O().width;return r.a.createElement("nav",{className:"navbar-expand navbar-dark bg-dark"},r.a.createElement("ul",{className:"navbar-nav flex-column"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.b,{className:"nav-link",to:"/terminals/"},e<1e3?r.a.createElement(C,null):"Terminals")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(j.b,{className:"nav-link",to:"/buyers/"},e<1e3?r.a.createElement(w,null):"Clients"))))}a(62);var S=function(){var e=Object(n.useContext)(d),t=Object(o.a)(e,1)[0];return console.log("avatar render"),r.a.createElement("div",{className:"avatar-wrapper"},t.avatarUrl?r.a.createElement("img",{src:t.avatarUrl,alt:t.username,className:"avatar-img"}):r.a.createElement("div",{className:"navbar-dark"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(j.b,{to:"/login/",className:"nav-link text-center"},"Login"))))},R=function(){var e=O().width;return r.a.createElement("div",{className:"col-2 col-sm-1 bg-dark vh-100 sidebar-wrapper"},r.a.createElement(S,null),r.a.createElement(x,null),r.a.createElement("div",{className:"text-light text-center"},e>800?"Copyright \xa9 2020":"\xa9"))},z=a(7);a(63),a(64);function D(e){var t=e.terminalInfo,a=e.onDelete,n=t.name,c=t.desc;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",className:"terminal-table-row-item"},n),r.a.createElement("td",{className:"terminal-table-row-data test"},c,r.a.createElement("button",{onClick:a},"delete")))}function B(e){var t=e.data,a=e.onDelete;return r.a.createElement("div",{className:""},r.a.createElement("table",{className:"table table-striped table-dark col-8"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col-1",className:"terminal-name-column"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430"),r.a.createElement("th",{scope:"col",className:"terminal-name-column"},"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u0430"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement(D,{terminalInfo:e,key:t,onDelete:function(){return a(t)}})})))))}a(65);var Q=function(e){var t=e.addNew,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],i=c[1],u=Object(n.useState)(""),m=Object(o.a)(u,2),s=m[0],b=m[1];return r.a.createElement("div",{className:"terminal-add-form-wrapper"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l,s),i(""),b("")},className:"terminal-add-form col-8"},r.a.createElement("fieldset",{className:"form-group terminal-name-wrapper"},r.a.createElement("input",{type:"text",className:"form-control ",placeholder:"terminal name",value:l,onChange:function(e){return i(e.target.value)}})),r.a.createElement("fieldset",{className:"form-group terminal-name-wrapper"},r.a.createElement("input",{type:"text",className:"form-control",autoComplete:"current-pass",placeholder:"terminal description",value:s,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{className:"btn btn-outline-light btn-md",type:"submit"},"add"))))};function L(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h2",{className:"text-light text-center"},"Terminal"),r.a.createElement(Q,{addNew:function(e,t){c([].concat(Object(z.a)(a),[{name:e,desc:t}]))}}),r.a.createElement(B,{data:a,onDelete:function(e){c((function(){return[].concat(Object(z.a)(a.slice(0,e)),Object(z.a)(a.slice(e+1)))}))}}))}a(66),a(67);var T=function(e){var t=e.onFilterChange,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){t(l)}),[l,t]),r.a.createElement("input",{type:"text",value:l,onChange:function(e){return i(e.target.value)},className:"form-control form-control search-input m-right",placeholder:"filter by username"})},G=(a(68),function(e){var t=e.data,a=t.id,n=t.name,c=t.avg,l=t.buyCount,i=t.total;return r.a.createElement("tr",null,r.a.createElement(j.c,{to:"/buyers/".concat(a)}," ",r.a.createElement("th",{className:"byuers-table-row-data",scope:"row"},a)),r.a.createElement("td",{className:"byuers-table-row-data"},n),r.a.createElement("td",{className:"byuers-table-row-data"},c),r.a.createElement("td",{className:"byuers-table-row-data"},l),r.a.createElement("td",{className:"byuers-table-row-data"},i))});a(69);function W(e){var t=e.state,a=e.onSort;return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-striped table-dark mt-3"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"byuer-table-titles",scope:"col-1",onClick:function(){return a("id")}},"ID \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("th",{className:"byuer-table-titles",scope:"col",onClick:function(){return a("name")}},"\u0418\u043c\u044f \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044f"),r.a.createElement("th",{className:"byuer-table-titles",scope:"col",onClick:function(){return a("avg")}},"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0447\u0435\u043a"),r.a.createElement("th",{className:"byuer-table-titles",scope:"col",onClick:function(){return a("buyCount")}},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u043e\u043a\u0443\u043f\u043e\u043a"),r.a.createElement("th",{className:"byuer-table-titles",scope:"col",onClick:function(){return a("total")}},"\u041e\u0431\u0449\u0430\u044f \u0432\u044b\u0440\u0443\u0447\u043a\u0430"))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement(G,{data:e,key:e.id})})))))}function X(e){var t=e.onSizeChange;return r.a.createElement("div",{className:"m-left"},r.a.createElement("div",{className:"btn-group btn-group",role:"group","aria-label":"Basic example"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t(5)}},"5"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t(10)}},"10"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t(15)}},"15")))}var k=function(e){for(var t=e.tableCurrentSize,a=e.tableTotalSize,n=e.onCurrentPageChange,c=new Array,l=1;l<=Math.ceil(a/t);l++)c.push(l);return r.a.createElement("div",null,r.a.createElement("nav",{"aria-label":"..."},r.a.createElement("ul",{className:"pagination pagination-sm"},c.map((function(e){return r.a.createElement("li",{className:"page-item",key:e},r.a.createElement("a",{className:"page-link",onClick:function(){return n(e)}},e))})))))},P=function(){var e=Object(n.useState)("ASC"),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),u=i[0],m=i[1],s=Object(n.useState)(I),b=Object(o.a)(s,2),E=b[0],A=b[1],d=Object(n.useState)(1),v=Object(o.a)(d,2),p=v[0],f=v[1],g=Object(n.useState)(15),N=Object(o.a)(g,2),h=N[0],j=N[1];Object(n.useEffect)((function(){f(1)}),[h]);var y=E.filter((function(e){return-1!==e.name.indexOf(u)})),O=u?y:E;return r.a.createElement("div",{className:"buyers-wrapper col-md-9 col no-gutters p-0"},r.a.createElement("h2",{className:"text-light text-center m-4"},"Buyers"),r.a.createElement("div",{className:"d-flex col p-0 justify-content-between buyers-control-panel"},r.a.createElement(T,{onFilterChange:function(e){m(e)}}),r.a.createElement(X,{onSizeChange:function(e){j(e)}})),r.a.createElement(W,{state:O.slice.apply(O,Object(z.a)([(p-1)*h,(p-1)*h+h])),onSort:function(e){var t=Object(z.a)(E);c("ASC"===a?"DESC":"ASC"),"ASC"===a?t.sort((function(t,a){return t[e]>a[e]?1:-1})):t.sort((function(t,a){return t[e]<a[e]?1:-1})),A(t)}}),r.a.createElement(k,{tableCurrentSize:h,tableTotalSize:15,onCurrentPageChange:function(e){f(e)}}))},U=function(e){var t=e.match.params.slug;return t>14||t<0?r.a.createElement(i.a,{to:"/error/"}):r.a.createElement("div",{className:"buyers-personal-wrapper"},r.a.createElement("div",{className:"jumbotron bg-dark text-light"},r.a.createElement("p",null," ","Name:  ".concat(I[t].name)),r.a.createElement("p",null," ","\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0447\u0435\u043a:  ".concat(I[t].avg)),r.a.createElement("p",null," ","\u0412\u0441\u0435\u0433\u043e \u043f\u043e\u043a\u0443\u043f\u043e\u043a:  ".concat(I[t].buyCount)),r.a.createElement("p",null,"\u041e\u0431\u0449\u0430\u044f \u0432\u044b\u0440\u0447\u0443\u0447\u043a\u0430:  ".concat(I[t].total)),r.a.createElement(j.b,{to:"/buyers/"},"Back")))},V=function(){return r.a.createElement("div",{className:"offset-1 mt-4 mb-5 col-8 text-light text-center m-auto"},r.a.createElement("h2",null,"404"),r.a.createElement("img",{className:"text-center",src:"data:image/jpeg;base64,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",alt:""}))},q=function(e){var t=Object(n.useContext)(d);return Object(o.a)(t,1)[0].username?r.a.createElement(i.b,e):r.a.createElement(i.a,{to:"/login/"})};var H=function(){return r.a.createElement("div",{className:"app container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(R,null),r.a.createElement("div",{className:"offset-2 offset-sm-1 col mt-5"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0}),r.a.createElement(i.b,{path:"/login/",component:h}),r.a.createElement(q,{path:"/terminals/",component:L}),r.a.createElement(q,{path:"/buyers/",component:P,exact:!0}),r.a.createElement(q,{path:"/buyers/:slug",component:U}),r.a.createElement(i.b,{component:V}))," ")))};l.a.render(r.a.createElement(v,null,r.a.createElement(j.a,null,r.a.createElement(H,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.9d21e872.chunk.js.map