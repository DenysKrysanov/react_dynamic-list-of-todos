(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),d=c(1),o=c.n(d),r=(c(10),c(11),c(4)),i=c.n(r),j=c(0),u=function(e){var t=e.todos,c=e.onSelectTodoCard,s=e.selectedTodoCard;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){var t=(null===s||void 0===s?void 0:s.id)===e.id;return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:i()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:i()("far",{"fa-eye-slash":t,"fa-eye":!t})})})})})]},e.id)}))})},b=function(e){var t=e.todos,c=e.selectedTodoCard,s=e.onSelectTodoCard;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{})]})}),Object(j.jsx)("tbody",{children:Object(j.jsx)(u,{todos:t,selectedTodoCard:c,onSelectTodoCard:s})})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var h=function(e){var t=e.filterOption,c=e.query,a=e.onSelectOption,n=e.onChange;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return a(e.target.value)},children:[Object(j.jsx)("option",{value:s.All,children:s.All}),Object(j.jsx)("option",{value:s.Active,children:s.Active}),Object(j.jsx)("option",{value:s.Completed,children:s.Completed})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return n(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})},m=(c(13),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function O(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var x=function(e){var t=e.selectedTodoCard,c=e.onSelectTodoCard,s=o.a.useState(null),a=Object(l.a)(s,2),n=a[0],r=a[1],i=t.id,u=t.title,b=t.completed,h=t.userId,x=n||{},f=x.email,p=x.name;return Object(d.useEffect)((function(){(function(e){return O("/users/".concat(e))})(t.userId).then((function(e){return r(e)}))}),[h]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(i)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:u}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[b?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(f),children:p})]})]})]}):Object(j.jsx)(m,{})]})},f=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(null),o=Object(l.a)(n,2),r=o[0],i=o[1],u=Object(d.useState)(s.All),f=Object(l.a)(u,2),p=f[0],v=f[1],N=Object(d.useState)(""),y=Object(l.a)(N,2),C=y[0],g=y[1];Object(d.useEffect)((function(){O("/todos").then((function(e){return a(e)}))}),[]);var S=Object(d.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(C.toLowerCase().trim());switch(p){case s.Active:return!e.completed&&t;case s.Completed:return e.completed&&t;case s.All:default:return t}}))}),[c,p,C]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(h,{filterOption:p,query:C,onSelectOption:v,onChange:g})}),Object(j.jsx)("div",{className:"block",children:c.length?Object(j.jsx)(b,{todos:S,selectedTodoCard:r,onSelectTodoCard:i}):Object(j.jsx)(m,{})})]})})}),r&&Object(j.jsx)(x,{selectedTodoCard:r,onSelectTodoCard:i})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.205832ef.chunk.js.map