"use strict";(self.webpackChunkbase_react_redux=self.webpackChunkbase_react_redux||[]).push([[872],{530:function(i,e){e.Z=[{id:1,src:"/gif1.gif",category:"branding"},{id:2,src:"/gif2.jpg",category:"packaging"},{id:3,src:"/gif3.webp",category:"motion"},{id:4,src:"/gif4.gif",category:"branding"},{id:5,src:"/gif5.webp",category:"branding"},{id:6,src:"/gif6.webp",category:"branding"},{id:7,src:"/gif7.gif",category:"branding"},{id:8,src:"/gif8.webp",category:"motion"},{id:9,src:"/gif9.gif",category:"branding"},{id:10,src:"/gif10.webp",category:"social"},{id:11,src:"/gif11.webp",category:["branding","motion"]},{id:12,src:"/gif12.jpg",category:"branding"},{id:13,src:"/gif13.webp",category:"motion"},{id:14,src:"/gif14.webp",category:"branding"},{id:15,src:"/gif15.webp",category:"branding"},{id:16,src:"/gif16.webp",category:"branding"},{id:17,src:"/gif17.webp",category:"branding"},{id:18,src:"/gif18.jpg",category:"motion"},{id:19,src:"/gif19.webp",category:"branding"},{id:20,src:"/gif20.webp",category:["website","motion"]},{id:21,src:"/gif21.webp",category:"branding"},{id:22,src:"/gif22.jpg",category:"branding"},{id:23,src:"/gif23.webp",category:"social"}]},872:function(i,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(671),t=n(144),a=n(340),c=n(882),o=n(791),s=n(184),g=function(i){(0,a.Z)(n,i);var e=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,t.Z)(n,[{key:"render",value:function(){return(0,s.jsx)("div",{className:"slider-work",children:(0,s.jsx)("img",{src:"/imgSliderWork.gif",alt:"Slider Work"})})}}]),n}(o.Component),d=g,l=n(530),f=function(i){(0,a.Z)(n,i);var e=(0,c.Z)(n);function n(i){var t;return(0,r.Z)(this,n),(t=e.call(this,i)).setFilter=function(i,e){console.log("Filter:",i,"Index:",e),t.setState({filter:i,activeIndex:e,showAnimation:!1},(function(){setTimeout((function(){return t.setState({showAnimation:!0})}),50)}))},t.handleClick=function(i){t.setState({activeIndex:i})},t.state={filter:"all",activeIndex:0,showAnimation:!0},t.images=l.Z,t}return(0,t.Z)(n,[{key:"render",value:function(){var i=this,e=this.state,n=e.filter,r=e.activeIndex,t=e.showAnimation,a="all"===n?this.images:this.images.filter((function(i){return Array.isArray(i.category)?i.category.includes(n):i.category===n})),c=Array(4).fill().map((function(i,e){return a.filter((function(i,n){return n%4===e}))}));return console.log("Filter:",n),console.log("Filtered Images:",a),console.log("Rendering with Active Index:",r),(0,s.jsxs)("div",{className:"container-work",children:[(0,s.jsx)("ul",{className:"navbar-container-work",children:["All","Branding","Motion","Packaging","Social","Website"].map((function(e,n){return(0,s.jsx)("li",{onClick:function(){i.setFilter(e.toLowerCase(),n)},className:r===n?"active":"",style:{opacity:r===n?1:.5,cursor:"pointer",transition:"opacity 0.3s"},children:e},n)}))}),(0,s.jsx)("div",{className:"image-gallery ".concat(t?"show-animation":""),children:c.map((function(i,e){return(0,s.jsx)("div",{className:"image-group image-group-".concat(e),children:i.map((function(i){return(0,s.jsx)("div",{className:"image-item image-item-".concat(i.id),style:{animation:"showUp 2s ease-in",animationDelay:"0s"},children:(0,s.jsx)("img",{src:i.src,alt:"Image ".concat(i.id),className:"image"})},i.id)}))},e)}))})]})}}]),n}(o.Component),u=f,m=function(i){(0,a.Z)(n,i);var e=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,t.Z)(n,[{key:"render",value:function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(d,{}),(0,s.jsx)(u,{})]})}}]),n}(o.Component),p=m}}]);
//# sourceMappingURL=872.ebbab5d6.chunk.js.map