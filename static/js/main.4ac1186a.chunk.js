(this["webpackJsonpreact-shopping-cart"]=this["webpackJsonpreact-shopping-cart"]||[]).push([[0],{17:function(e,c,t){},19:function(e,c,t){"use strict";t.r(c);var n=t(1),i=t.n(n),s=t(8),r=t.n(s),a=t(11),d=t(2),o=t(12),j=(t(17),t.p+"static/media/shoppingcart.6c05bd89.png"),l=t(0);function b(){return Object(l.jsx)("header",{className:"row block center",children:Object(l.jsxs)("div",{className:"logoandsitenamediv",children:[Object(l.jsx)("img",{src:j,alt:"Logo",className:"logo"}),Object(l.jsx)("a",{href:"#/",children:Object(l.jsx)("h1",{className:"sitename",children:"My Shopping Cart"})})]})})}var u=t(9);function h(e){var c=e.product,t=e.onAdd;return Object(l.jsxs)("div",{className:"productdiv",children:[Object(l.jsx)(u.a,{src:c.image,width:180}),Object(l.jsx)("h3",{children:c.name}),Object(l.jsxs)("div",{className:"productprice",children:["$",c.price]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{onClick:function(){return t(c)},className:"additembutton",children:"Add To Basket"})})]})}function m(e){var c=e.products,t=e.onAdd;return Object(l.jsxs)("main",{className:"block col-2",children:[Object(l.jsx)("h2",{children:"Products"}),Object(l.jsx)("div",{className:"row",children:c.map((function(e){return Object(l.jsx)(h,{onAdd:t,product:e},e.id)}))})]})}function x(e){var c=e.cartItems,t=e.onAdd,n=e.onRemove,i=c.reduce((function(e,c){return e+c.qty*c.price}),0),s=i>5e3?0:.05*i,r=i+s;return Object(l.jsxs)("aside",{className:"block col-1",children:[Object(l.jsx)("h2",{children:"Cart Items"}),Object(l.jsxs)("div",{children:[0===c.length&&Object(l.jsx)("p",{children:"Cart is empty."}),c.map((function(e){return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:e.name}),Object(l.jsxs)("div",{className:"col-2",children:[Object(l.jsx)("button",{onClick:function(){return t(e)},className:"add-button",children:"+"}),Object(l.jsx)("button",{onClick:function(){return n(e)},className:"remove-button",children:"-"})]}),Object(l.jsxs)("div",{className:"col-2 price-text",children:[e.qty," x $",e.price.toFixed(2)]})]},e.id)}))]}),0!==c.length&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:"Items Price"}),Object(l.jsxs)("div",{className:"col-1 price-text",children:["$",i.toFixed(2)]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:"Shipping Price"}),Object(l.jsxs)("div",{className:"col-1 price-text",children:["$",s.toFixed(2)]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-2",children:Object(l.jsx)("strong",{children:"Total Price"})}),Object(l.jsx)("div",{className:"col-1 price-text",children:Object(l.jsxs)("strong",{children:["$",r.toFixed(2)]})})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("button",{onClick:function(){alert("Purchased.\n"+r+" dollars was taken from your wallet"),setTimeout((function(){window.location.reload()}),500)},className:"buyButton",children:"Buy"})]})]})}var O={products:[{id:"1",name:"Guitar",price:1199,image:t.p+"static/media/guitarphoto.001546b9.jpg"},{id:"2",name:"Headset",price:49,image:t.p+"static/media/headsetphoto.f31fec44.jpg"},{id:"3",name:"Phone",price:1399,image:t.p+"static/media/phonephoto.9b6f21cf.jpg"}]};var p=function(){var e=O.products,c=Object(n.useState)([]),t=Object(o.a)(c,2),i=t[0],s=t[1],r=function(e){var c=i.find((function(c){return c.id===e.id}));s(c?i.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},c),{},{qty:c.qty+1}):t})):[].concat(Object(a.a)(i),[Object(d.a)(Object(d.a)({},e),{},{qty:1})]))};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(b,{}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(m,{onAdd:r,products:e}),Object(l.jsx)(x,{onAdd:r,onRemove:function(e){var c=i.find((function(c){return c.id===e.id}));1===c.qty?s(i.filter((function(c){return c.id!==e.id}))):s(i.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},c),{},{qty:c.qty-1}):t})))},cartItems:i})]})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(c){var t=c.getCLS,n=c.getFID,i=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.4ac1186a.chunk.js.map