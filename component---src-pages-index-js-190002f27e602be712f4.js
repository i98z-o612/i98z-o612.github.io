"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[678],{9789:function(t,e,n){var r;n.d(e,{Z:function(){return c}});var u=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var a=function(t){return"string"==typeof t&&i.test(t)},l=[],s=0;s<256;++s)l.push((s+256).toString(16).substr(1));var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[t[e+0]]+l[t[e+1]]+l[t[e+2]]+l[t[e+3]]+"-"+l[t[e+4]]+l[t[e+5]]+"-"+l[t[e+6]]+l[t[e+7]]+"-"+l[t[e+8]]+l[t[e+9]]+"-"+l[t[e+10]]+l[t[e+11]]+l[t[e+12]]+l[t[e+13]]+l[t[e+14]]+l[t[e+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n};var c=function(t,e,n){var r=(t=t||{}).random||(t.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(var u=0;u<16;++u)e[n+u]=r[u];return e}return d(r)}},4417:function(t,e,n){var r=[{id:(0,n(9789).Z)(),thumbnail:"/20211012/summary.png",subject:"CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교",category:"Devil Styled Sheets",url:"/O612/20211012",datetime:"2021.10.12",badge:!1,description:"emotion의 styled는 react의 inline style과 비슷합니다. property는 camelCase, value는 따옴표로 감싸서 사용합니다. 마지막은 콤마를 사용합니다. value에 숫자만 존재한다면 따옴표 생략이 가능하지만 font weight의 value는 실제로는 numberic이 아니기 때문에 font weight에서만큼은 따옴표를 생략하면 안됨"}];e.Z=r},9415:function(t,e,n){var r=n(6771),u=(n(7294),n(6944)),o=n(2844),i=n(3431),a=(0,r.Z)(o.Z,{target:"e1ueg0cj0"})((function(t){var e=t.isCurrent;return{backgroundColor:e?u.O9.yellow:null,color:e?u.O9.dark:u.O9.light}}),"");e.Z=function(t){var e=t.route;return(0,i.tZ)("nav",null,(0,i.tZ)("ul",null,(0,i.tZ)("li",null,(0,i.tZ)(a,{href:"/",isCurrent:"home"===e},"전체 글")),(0,i.tZ)("li",null,(0,i.tZ)(a,{href:"/series",isCurrent:"series"===e},"시리즈"))))}},6558:function(t,e,n){n.r(e);n(7294);var r=n(4417),u=n(6268),o=n.n(u),i=n(8678),a=n(3389),l=n(4396),s=n(2844),d=n(9415),c=n(3431);e.default=function(){return(0,c.tZ)(i.Z,null,(0,c.tZ)(o(),{title:"Home",description:"O612의 악마적인 공간 - 데벌리시 데브런닷 스튜디오",facebook:{image:"https://dev1stud.io/misc/open-graph.png",url:"https://dev1stud.io/",type:"website"}}),(0,c.tZ)("main",{className:a.J},(0,c.tZ)(l.Z,null),(0,c.tZ)(d.Z,{route:"home"}),(0,c.tZ)("ul",null,r.Z.map((function(t){return(0,c.tZ)("li",{key:t.id},(0,c.tZ)(s.Z,{href:t.url},(0,c.tZ)("div",{className:a.j},(0,c.tZ)("i",{style:{backgroundImage:"url("+t.thumbnail}}),t.badge&&(0,c.tZ)("span",{"aria-label":"New Badge"},"새글")),(0,c.tZ)("strong",null,t.subject),(0,c.tZ)("p",null,t.description),(0,c.tZ)("time",null,t.datetime)))})))))}},3389:function(t,e,n){n.d(e,{J:function(){return u},j:function(){return r}});var r="Home-module--listThumbnail--HZuiW",u="Home-module--mainPage--UXbqG"}}]);
//# sourceMappingURL=component---src-pages-index-js-190002f27e602be712f4.js.map