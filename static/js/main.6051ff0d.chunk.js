(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),r=n.n(o),c=n(6),a=n(8),i=(n(13),n(14),n(1));!function(t){t.Alphabet="alphabet",t.Length="length",t.Default=""}(s||(s={}));var u=n(4),l=n.n(u),b=n(0),h=function(t){var e=t.sortBy,n=t.ChangeSortMethods,o=t.SetSortByDefault,r=t.isReversed,c=t.setIsReversed;return Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return n(s.Alphabet)},type:"button",className:l()("button","is-info",{"is-light":e!==s.Alphabet}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:function(){return n(s.Length)},type:"button",className:l()("button","is-success",{"is-light":e!==s.Length}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){return c(!r)},type:"button",className:l()("button","is-warning",{"is-light":!r}),children:"Reverse"}),(e||r)&&Object(b.jsx)("button",{onClick:function(){return o()},type:"button",className:"button is-danger is-light",children:"Reset"})]})},j=function(t){var e=t.good;return Object(b.jsx)("li",{"data-cy":"Good",children:e},e)},d=function(t){var e=t.goods;return Object(b.jsx)("ul",{children:e.map((function(t){return Object(b.jsx)(j,{good:t})}))})},f=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var g=function(){var t=Object(i.useState)(s.Default),e=Object(c.a)(t,2),n=e[0],o=e[1],r=Object(i.useState)(!1),u=Object(c.a)(r,2),l=u[0],j=u[1],g=function(t,e,n){var o=Object(a.a)(t);if(e)switch(e){case s.Alphabet:o.sort((function(t,e){return t.localeCompare(e)}));break;case s.Length:o.sort((function(t,e){return t.length-e.length}))}return n&&o.reverse(),o}(f,n,l);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsx)(h,{sortBy:n,ChangeSortMethods:function(t){o(t)},SetSortByDefault:function(){o(s.Default),j(!1)},isReversed:l,setIsReversed:j}),Object(b.jsx)("ul",{children:Object(b.jsx)(d,{goods:g})})]})};r.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6051ff0d.chunk.js.map