(this.webpackJsonpsurfskateblackzone=this.webpackJsonpsurfskateblackzone||[]).push([[4],{69:function(e,t,n){"use strict";var c=n(21);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Category",t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"action",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";c.a.event({category:e,action:t,label:n})};return t}},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";var c=n(2),s=(n(0),n(76),n(69)),a=n(70);n(80);t.a=function(e){var t=e.title,n=e.image,i=e.link,r=e.scrollPosition,o=Object(s.a)("External Links");return Object(c.jsx)("div",{className:"product",children:Object(c.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",onClick:function(e){return o("ProductoAmazon",{title:t})},children:Object(c.jsxs)("div",{className:"product-container",children:[Object(c.jsx)(a.LazyLoadImage,{className:"product-image",effect:"blur",scrollPosition:r,src:n,alt:t,width:"100%",height:"100%"}),Object(c.jsx)("span",{className:"product-title",children:t})]})})})}},76:function(e,t,n){},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=[{title:"WRISCG Surfskate",link:"https://amzn.to/3oRsg7p",image:"https://images-na.ssl-images-amazon.com/images/I/71c291Lf2OL._AC_SY355_.jpg"},{title:"WRISCG Cruiser Carver Arce",link:"https://amzn.to/3tr2YAJ",image:"https://images-na.ssl-images-amazon.com/images/I/61PhWKtR5nL._AC_SY355_.jpg"},{title:'Teahupoo 34" SurfSkate YOW Power Surfing Series',link:"https://amzn.to/3rrJYjs",image:"https://images-na.ssl-images-amazon.com/images/I/71Lp428Be%2BL._AC_SY355_.jpg"},{title:'YOW Rapa NUI 32" The First Surfskate',link:"https://amzn.to/373wDq7",image:"https://images-na.ssl-images-amazon.com/images/I/71ufrFIp0yL._AC_SY355_.jpg"}]},78:function(e,t,n){"use strict";var c=n(2),s=n(0),a=n(30),i=Object(s.createContext)({isActive:!1,openMenu:function(){}});i.displayName="MenuContext";var r=i,o=function(e){var t=e.children,n=Object(s.useState)(!1),i=Object(a.a)(n,2),o=i[0],l=i[1];return Object(c.jsx)(r.Provider,{value:{isActive:o,openMenu:function(){l(!o)}},children:t})},l=n(26),j=n.p+"static/media/BlackZone-logos_white.9c205b92.svg",d=(n(71),n.p+"static/media/menu.25caa964.svg"),u=function(){var e=Object(s.useContext)(r).openMenu;return Object(c.jsx)("div",{className:"menu",children:Object(c.jsx)("button",{onClick:e,children:Object(c.jsx)("img",{src:d,alt:""})})})},m=(n(73),n(69)),b=function(){var e=Object(m.a)("Internal Links");return Object(c.jsx)("div",{className:"menu-extended-layout",children:Object(c.jsxs)("div",{className:"menu-list-options",children:[Object(c.jsx)("div",{className:"menu-option",children:Object(c.jsx)(l.b,{to:"/",className:"menu-item",onClick:function(t){return e("Inicio")},children:Object(c.jsx)("span",{children:"Inicio"})})}),Object(c.jsx)("div",{className:"menu-option",children:Object(c.jsx)(l.b,{to:"/products",className:"menu-item",onClick:function(t){return e("Productos")},children:Object(c.jsx)("span",{children:"Productos"})})}),Object(c.jsx)("div",{className:"menu-option",children:Object(c.jsx)(l.b,{to:"/blog/como-elegir-surfskate",className:"menu-item",onClick:function(t){return e("ComoElegirSurfSkate")},children:Object(c.jsx)("span",{children:"Como Elegir SurfSkate"})})})]})})},h=(n(74),function(){var e=Object(s.useContext)(r).isActive,t=Object(m.a)("Navbar Links");return window.addEventListener("scroll",(function(){var e=document.getElementById("navbar");window.pageYOffset>=1?e.classList.add("sticky"):e.classList.remove("sticky")})),document.getElementById("body").style.overflowY=e?"hidden":"visible",Object(c.jsxs)(s.Fragment,{children:[Object(c.jsxs)("div",{className:"navbar",id:"navbar",children:[Object(c.jsx)("div",{className:"nav-brand",children:Object(c.jsx)(l.b,{to:"/",onClick:function(e){return t("InicioLogo")},children:Object(c.jsx)("img",{className:"nav-logo",src:j,alt:"BlackZone",width:"100%",height:"100%"})})}),Object(c.jsx)("div",{className:"nav-content",children:Object(c.jsx)(u,{})})]}),e&&Object(c.jsx)(b,{})]})});t.a=function(){return Object(c.jsx)(o,{children:Object(c.jsx)(h,{})})}},79:function(e,t,n){"use strict";var c=n(2),s=(n(0),n(72),n.p+"static/media/instagram.d3de2664.svg"),a=n(69);t.a=function(){var e=Object(a.a)("External Links");return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("div",{className:"footer-social-network",children:Object(c.jsx)("a",{href:"https://www.instagram.com/surfskateblackzone/",target:"_blank",rel:"noopener noreferrer",onClick:function(t){return e("Instagram Page Visit","https://www.instagram.com/surfskateblackzone/")},children:Object(c.jsx)("img",{src:s,alt:"InstagramIcon",width:"100%",height:"100%"})})}),Object(c.jsx)("div",{className:"footer-copyright",children:Object(c.jsx)("span",{children:"BlackZone | Copyright 2020"})})]})}},82:function(e,t,n){"use strict";var c=n(2),s=(n(0),n(26)),a=n(75),i=(n(83),n(69)),r=n(70),o=n(77);t.a=function(){var e=Object(i.a)("Internal Links");return Object(c.jsx)("div",{className:"section-surf-skate",children:Object(c.jsxs)(r.LazyLoadComponent,{children:[Object(c.jsx)("div",{className:"section-name",children:Object(c.jsx)("h1",{children:"SURFSKATES"})}),Object(c.jsxs)("div",{className:"list-products",children:[Object(c.jsx)(a.a,{title:o.a[0].title,image:o.a[0].image,link:o.a[0].link}),Object(c.jsx)(a.a,{title:o.a[1].title,image:o.a[1].image,link:o.a[1].link})]}),Object(c.jsx)("div",{className:"btn",children:Object(c.jsx)(s.b,{to:"/products",onClick:function(t){return e("ProductsVerTodo")},children:"Ver Todo"})})]})})}},83:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(0),a=n(81),i=n.p+"static/media/MainSurfSkate.e8969e11.jpg",r=(n(86),n(70)),o=(n(80),function(){return Object(c.jsx)("div",{className:"content-highlight",children:Object(c.jsx)(r.LazyLoadImage,{className:"image-highlight",effect:"blur",src:i,alt:"surfskate",width:"100%",height:"100%"})})}),l=n(79),j=n(78),d=n(26),u=n.p+"static/media/HowChooseSurfSkate.ee84f694.jpg",m=(n(87),function(){return Object(c.jsx)("div",{className:"section-how-choose-surf-skate",children:Object(c.jsxs)(r.LazyLoadComponent,{children:[Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"content-text",children:Object(c.jsx)("span",{children:"Como Elegir Tu SurfSkate"})}),Object(c.jsx)("div",{className:"content-btn",children:Object(c.jsx)(d.b,{to:"/blog/como-elegir-surfskate",children:"Ver ahora"})})]}),Object(c.jsx)("img",{className:"image-background",src:u,alt:"HowChooseSurfSkateImg",width:"100%",height:"100%"})]})})}),b=n(82);n(88),t.default=function(){return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)("meta",{name:"description",content:"BlackZone es una tienda online especializada en SurfSkates. Aqui encontraras las mejores marcas de SurfSkate como Yowsurf, Carver o Slide."}),Object(c.jsx)("title",{children:"Black Zone | SurfSkate Shop"})]}),Object(c.jsx)("header",{children:Object(c.jsx)(j.a,{})}),Object(c.jsxs)("main",{children:[Object(c.jsx)(o,{}),Object(c.jsx)(b.a,{}),Object(c.jsx)(m,{})]}),Object(c.jsx)("footer",{children:Object(c.jsx)(l.a,{})})]})}}}]);
//# sourceMappingURL=4.7a43c650.chunk.js.map