(this["webpackJsonpspa-food-project"]=this["webpackJsonpspa-food-project"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(18),s=c.n(a),o=c(4),i=c(2),j=c(8),l=c(10),b=c.n(l),d=c(13),u="https://www.themealdb.com/api/json/v1/".concat("1","/"),h=function(){var e=Object(d.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(b.a.mark((function e(t){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=c(0);var p=function(){return Object(m.jsx)("div",{className:"d-flex justify-content-center",children:Object(m.jsx)("div",{className:"spinner-border text-secondary",role:"status",children:Object(m.jsx)("span",{className:"sr-only"})})})},f=c(12);var v=function(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription.slice(0,150)+"...";return Object(m.jsxs)("div",{className:"card custom-card",style:{width:"18rem"},children:[Object(m.jsx)("img",{src:c,className:"card-img-top",alt:t}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title text-center",children:t}),Object(m.jsx)("p",{className:"card-text",children:n}),Object(m.jsx)("div",{className:"d-grid gap-2",children:Object(m.jsx)(o.b,{className:"btn btn-secondary",to:"/category/".concat(t),children:"WATCH CATEGORY"})})]})]})};var g=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(m.jsx)("div",{className:"foods",children:c.map((function(e){return Object(m.jsx)(v,Object(f.a)({},e),e.idCategory)}))})};var N=function(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),a=Object(j.a)(r,2),s=a[0],o=a[1],i=function(){c(s)};return Object(m.jsxs)("div",{className:"searh input-group mb-3",children:[Object(m.jsx)("input",{type:"search",className:"form-control",placeholder:"search","aria-describedby":"button-addon2",onKeyDown:function(e){"Enter"===e.key&&i()},onChange:function(e){return o(e.target.value)},value:s}),Object(m.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:i,children:"Searh"})]})};var y=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(j.a)(a,2),o=s[0],l=s[1],b=Object(i.g)(),d=b.pathname,u=b.search,h=Object(i.f)().push;return Object(n.useEffect)((function(){x().then((function(e){r(e.categories),l(u?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(u.split("=")[1].toLowerCase())})):e.categories)}))}),[u]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(N,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),h({pathname:d,search:"?search=".concat(e)})}}),c.length?Object(m.jsx)(g,{catalog:o}):Object(m.jsx)(p,{})]})};var w=function(){return Object(m.jsx)("h1",{children:"Contact"})};var C=function(){return Object(m.jsx)("h1",{children:"About"})};var k=function(){return Object(m.jsx)("h1",{children:"Page not found"})};var M=function(){return Object(m.jsxs)("nav",{className:"header navbar navbar-dark bg-secondary d-flex justify-content-between",children:[Object(m.jsx)(o.b,{className:"navbar-brand fs-4",to:"/",children:"React Food"}),Object(m.jsxs)("div",{className:"fs-5",children:[Object(m.jsx)(o.b,{className:"navbar-brand fs-6",to:"/about",children:"About"}),Object(m.jsx)(o.b,{className:"navbar-brand fs-6",to:"contacts",children:"Contacts"})]})]})};var E=function(){return Object(m.jsx)("footer",{className:"bg-secondary text-center text-lg-start",children:Object(m.jsx)("div",{className:"text-center p-3",children:"\xa9 2021 Copyright"})})};var S=function(e){var t=e.strMeal,c=e.strMealThumb,n=e.idMeal;return Object(m.jsxs)("div",{className:"card custom-card",style:{width:"18rem"},children:[Object(m.jsx)("img",{src:c,className:"card-img-top",alt:t}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title text-center",children:t}),Object(m.jsx)("p",{className:"card-text"}),Object(m.jsx)("div",{className:"d-grid gap-2",children:Object(m.jsx)(o.b,{className:"btn btn-secondary",to:"/meal/".concat(n),children:"WATCH RECIPE"})})]})]})};var A=function(e){var t=e.meals,c=void 0===t?[]:t;return Object(m.jsx)("div",{className:"foods",children:c.map((function(e){return Object(m.jsx)(S,Object(f.a)({},e),e.idMeal)}))})};var F=function(){var e=Object(i.h)().name,t=Object(n.useState)([]),c=Object(j.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){O(e).then((function(e){return a(e.meals)}))}),[e]),Object(m.jsx)(m.Fragment,{children:r.length?Object(m.jsx)(A,{meals:r}):Object(m.jsx)(p,{})})};var T=function(){var e=Object(i.h)().id,t=Object(n.useState)([]),c=Object(j.a)(t,2),r=c[0],a=c[1],s=r[0];return Object(n.useEffect)((function(){h(e).then((function(e){return a(e.meals)}))}),[e]),Object(m.jsx)(m.Fragment,{children:r.length?Object(m.jsxs)("div",{className:"card mb-3 meal-card",children:[Object(m.jsx)("img",{src:s.strMealThumb,className:"meal-img",alt:s.strMeal}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h5",{className:"card-title h3",children:s.strMeal}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsxs)("small",{className:"text-muted",children:["Area: ",s.strArea]})}),Object(m.jsx)("p",{className:"card-text",children:s.strInstructions}),Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{scope:"col",children:"Ingredient"}),Object(m.jsx)("th",{scope:"col",children:"Measure"})]})}),Object(m.jsx)("tbody",{children:Object.keys(s).map((function(e){return e.includes("strIngredient")&&s[e]?Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:s[e]}),Object(m.jsx)("td",{children:s["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),s.strYoutube?Object(m.jsx)("div",{className:"ratio ratio-16x9",children:Object(m.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(s.strYoutube.slice(-11)),title:"YouTube video",allowFullScreen:!0})}):null]})]}):Object(m.jsx)(p,{})})};var I=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(o.a,{basename:"/react-food-spa",children:[Object(m.jsx)(M,{}),Object(m.jsx)("main",{className:"container content",children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/",children:Object(m.jsx)(y,{})}),Object(m.jsx)(i.a,{path:"/category/:name",component:F}),Object(m.jsx)(i.a,{path:"/meal/:id",component:T}),Object(m.jsx)(i.a,{path:"/about",component:C}),Object(m.jsx)(i.a,{path:"/contacts",component:w}),Object(m.jsx)(i.a,{component:k})]})}),Object(m.jsx)(E,{})]})})};c(34);s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.cd2cfc21.chunk.js.map