"use strict";(self.webpackChunkv4=self.webpackChunkv4||[]).push([[883],{7066:function(e,t,n){var i=n(9670);e.exports=function(){var e=i(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2087:function(e,t,n){var i=n(7854),o=n(9781),l=n(7045),a=n(7066),r=n(7293),c=i.RegExp,u=c.prototype;o&&r((function(){var e=!0;try{c(".","d")}catch(r){e=!1}var t={},n="",i=e?"dgimsy":"gimsy",o=function(e,i){Object.defineProperty(t,e,{get:function(){return n+=i,!0}})},l={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(l.hasIndices="d"),l)o(a,l[a]);return Object.getOwnPropertyDescriptor(u,"flags").get.call(t)!==i||n!==i}))&&l(u,"flags",{configurable:!0,get:a})},429:function(e,t,n){n.r(t);var i=n(7294),o=n(7500),l=n(5186),a=n(4585),r=n(5411),c=n(7166),u=n(8439),m=n(8160),s=n(550),f=c.default.main.withConfig({displayName:"sc-404__StyledMainContainer",componentId:"sc-bnxlhm-0"})(["",";flex-direction:column;"],(function(e){return e.theme.mixins.flexCenter})),d=c.default.h1.withConfig({displayName:"sc-404__StyledTitle",componentId:"sc-bnxlhm-1"})(["color:var(--green);font-family:var(--font-mono);font-size:clamp(100px,25vw,200px);line-height:1;"]),g=c.default.h2.withConfig({displayName:"sc-404__StyledSubtitle",componentId:"sc-bnxlhm-2"})(["font-size:clamp(30px,5vw,50px);font-weight:400;"]),p=(0,c.default)(o.Link).withConfig({displayName:"sc-404__StyledHomeButton",componentId:"sc-bnxlhm-3"})(["",";margin-top:40px;"],(function(e){return e.theme.mixins.bigButton}));t.default=function(e){var t=e.location,n=(0,i.useState)(!1),o=n[0],c=n[1],h=(0,s.Tb)();(0,i.useEffect)((function(){if(!h){var e=setTimeout((function(){return c(!0)}),u.fb);return function(){return clearTimeout(e)}}}),[]);var y=i.createElement(f,{className:"fillHeight"},i.createElement(d,null,"404"),i.createElement(g,null,"Page Not Found"),i.createElement(p,{to:"/"},"Go Home"));return i.createElement(m.Ar,{location:t},i.createElement(l.q,{title:"Page Not Found"}),h?i.createElement(i.Fragment,null,y):i.createElement(a.Z,{component:null},o&&i.createElement(r.Z,{timeout:500,classNames:"fadeup"},y)))}}}]);
//# sourceMappingURL=component---src-pages-404-js-47392167088ac21a4fff.js.map