(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),l=a(24),n=a.n(l),r=(a(65),a(10)),i=a(3),j=(a(66),a(67),a(0));var o=function(){return Object(j.jsx)("div",{className:"Header",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"/",children:"The Restro"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{className:"nav-link active",to:"/menu",children:"Menu"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{className:"nav-link active",to:"/checkout",children:"Checkout"})})]})})]})})})},d=(a(76),a.p+"static/media/sqcH2q7lkvo-unsplash.f4893f69.jpg");var m=function(){var e=Object(i.f)();return Object(j.jsx)("div",{className:"Home",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row rowHome",children:[Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("div",{className:"name",children:"The Restro"}),Object(j.jsxs)("div",{className:"features",children:["Lip Smacking Taste",Object(j.jsx)("br",{}),"NO Compromise"]})]}),Object(j.jsxs)("div",{className:"col",children:[Object(j.jsx)("div",{className:"Image",children:Object(j.jsx)("img",{className:"image",src:d,alt:"Best cuisines in this Area"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:"Button",onClick:function(){e.push("/menu")},children:"Order Now"})})]})]})})})},b=a(11);a(77),a(78);var h=function(e){return Object(j.jsxs)("div",{className:"Item",children:[Object(j.jsx)("div",{className:"Logo",children:Object(j.jsx)("img",{className:"images",src:e.item.logo,alt:e.item.name})}),Object(j.jsxs)("div",{className:"Details",children:[Object(j.jsx)("p",{className:"Name",children:e.item.name}),Object(j.jsx)("p",{className:"Description",children:e.item.description})]}),Object(j.jsxs)("div",{className:"Order",children:[Object(j.jsx)("p",{className:"Price",children:"\u20b9 "+e.item.price}),Object(j.jsx)("button",{name:e.index,className:"Add",onClick:function(t){if(window.confirm(e.item.name+" added to cart")){var a=t.target.name,c=JSON.parse(localStorage.getItem("order"));c[Number(a)]+=1,localStorage.setItem("order",JSON.stringify(c));var s=Number(localStorage.getItem("total"));localStorage.setItem("total",s+Number(e.item.price))}},children:"Add to Cart"})]})]})},O=a(25),u=a.n(O);var x=function(e){var t=Object(c.useState)([0]),a=Object(b.a)(t,2),s=a[0],l=a[1];return u.a.get("/loadmenu").then((function(e){var t=e.data;if(null===localStorage.getItem("order")||JSON.parse(localStorage.getItem("order")).length!==t.length){var a=[];s.forEach((function(e){a.push(0)})),localStorage.setItem("order",JSON.stringify(a)),localStorage.setItem("total",0)}localStorage.setItem("list",JSON.stringify(t)),l(t)})),Object(j.jsxs)("div",{className:"Menu",children:[Object(j.jsx)("p",{className:"menu",children:" Menu "}),s.map((function(e,t){return Object(j.jsx)(h,{item:e,index:t})}))]})},v=(a(96),a(97),a(59)),N=a.n(v);var g=function(e){var t=Object(c.createRef)();return Object(j.jsxs)("div",{class:"root",ref:t,children:[Object(j.jsx)("h1",{children:"INVOICE"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{class:"Header",children:[Object(j.jsx)("h2",{class:"heading",children:"The Restro"}),Object(j.jsxs)("div",{class:"billing-details",children:[Object(j.jsxs)("div",{class:"Name",children:["Name: ",e.name]}),Object(j.jsxs)("div",{class:"mobile",children:["Phone: ",e.number]}),Object(j.jsxs)("div",{class:"email",children:["Email: ",e.email]})]})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)("div",{className:"det",children:[Object(j.jsx)("h3",{children:"The Items"}),Object(j.jsx)("div",{class:"category",children:Object(j.jsxs)("table",{class:"Table",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{class:"s",children:"S.NO"}),Object(j.jsx)("th",{class:"n",children:"Name"}),Object(j.jsx)("th",{class:"q",children:"QTY"}),Object(j.jsx)("th",{class:"p",children:"Price"})]}),e.list.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"s",children:e.key}),Object(j.jsx)("td",{class:"n",children:e.name}),Object(j.jsx)("td",{class:"q",children:e.qty}),Object(j.jsx)("td",{class:"p",children:e.price})]})})),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{class:"t",colspan:"3",children:"Total Payable"}),Object(j.jsx)("td",{class:"p",children:e.total})]})]})})]}),Object(j.jsx)(N.a,{targetRef:t,filename:"bill.pdf",children:function(e){var t=e.toPdf;return Object(j.jsx)("button",{onClick:t,children:"Generate pdf"})}})]})};var p=function(e){var t=Object(c.useState)([]),a=Object(b.a)(t,2),l=a[0],r=a[1],i=Object(c.useState)(["","",""]),o=Object(b.a)(i,2),d=Object(b.a)(o[0],3),m=d[0],h=d[1],O=d[2],x=o[1],v=Object(c.useState)("hidden"),N=Object(b.a)(v,2),p=N[0],f=N[1];if(0===l.length&&null!==localStorage.getItem("order")){var S=JSON.parse(localStorage.getItem("order")),I=JSON.parse(localStorage.getItem("list"));S.forEach((function(e,t){e>0&&l.push({key:t,name:I[t].name,price:I[t].price,qty:e})}))}function k(e){var t=Number(e.target.name),a=JSON.parse(localStorage.getItem("order")),c=JSON.parse(localStorage.getItem("list")),s=JSON.parse(localStorage.getItem("total")),l=[];a[t]-=1,s-=Number(c[t].price),localStorage.setItem("order",JSON.stringify(a)),localStorage.setItem("total",JSON.stringify(s)),a.forEach((function(e,t){e>0&&l.push({key:t,name:c[t].name,price:c[t].price,qty:e})})),r(l)}return Object(j.jsx)("div",{className:"Checkout",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row checkout-row",children:[Object(j.jsxs)("div",{className:"col left",children:[Object(j.jsxs)("div",{className:"Total",children:["Total: ","\u20b9"+localStorage.getItem("total")]}),Object(j.jsx)("div",{className:"Items",children:l.map((function(e,t){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"Details",children:Object(j.jsx)("p",{className:"Name",children:e.name})}),Object(j.jsxs)("div",{className:"order",children:[Object(j.jsx)("p",{className:"Price",children:"\u20b9 "+e.price}),e.qty,Object(j.jsx)("button",{name:e.key,className:"Subt",onClick:k,children:"-"})]})]})}))}),Object(j.jsx)("button",{className:"Pay",onClick:function(){localStorage.getItem("total")>0&&f("shown")},children:" Pay Now "})]}),Object(j.jsxs)("div",{className:"col right "+p,children:[Object(j.jsx)("div",{className:"Thank",children:"Thank you for ordering"}),Object(j.jsxs)("div",{className:"details "+p,children:["Enter your details to be printed on invoice",Object(j.jsxs)("div",{className:"Inputs",children:[Object(j.jsxs)("div",{className:"ind",children:[Object(j.jsx)("div",{className:"cate",children:"Name:"}),Object(j.jsx)("input",{className:"input",type:"text",value:m,onChange:function(e){x([e.target.value,h,O])}})]}),Object(j.jsxs)("div",{className:"ind",children:[Object(j.jsx)("div",{className:"cate",children:"Phone:"}),Object(j.jsx)("input",{className:"input",type:"number",value:h,onChange:function(e){x([m,e.target.value,O])}})]}),Object(j.jsxs)("div",{className:"ind",children:[Object(j.jsx)("div",{className:"cate",children:"Email:"}),Object(j.jsx)("input",{className:"input",type:"email",value:O,onChange:function(e){x([m,h,e.target.value])}})]})]})]}),Object(j.jsx)("div",{className:"Print Bill",children:Object(j.jsx)("button",{className:"print",onClick:function(){if(m.length>0&&10===h.length&&O.length>0){u.a.post("/print",{list:l,name:m,number:h,email:O,total:Number(localStorage.getItem("total"))}),n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(g,{list:l,name:m,number:h,email:O,total:localStorage.getItem("total")})}),document.getElementById("root"));for(var e=JSON.parse(localStorage.getItem("order")),t=0;t<e.length;t++)e[t]=0;localStorage.setItem("order",JSON.stringify(e)),localStorage.setItem("total",0)}else alert("please fill the correct details")},children:" Print Bill "})})]})]})})})};var f=function(){return null===localStorage.getItem("total")&&localStorage.setItem("total",0),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"Background"}),Object(j.jsxs)(r.a,{children:[Object(j.jsx)(o,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(m,{})}),Object(j.jsx)(i.a,{path:"/checkout",children:Object(j.jsx)(p,{})}),Object(j.jsx)(i.a,{path:"/menu",children:Object(j.jsx)(x,{})})]})]})]})};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){}},[[129,1,3]]]);
//# sourceMappingURL=main.e3466a10.chunk.js.map