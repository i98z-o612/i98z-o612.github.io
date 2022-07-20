"use strict";(self.webpackChunkdev1studio=self.webpackChunkdev1studio||[]).push([[759],{3751:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});n(7294);var l=n(4125),o=n(8200),a=n(8678),s=n(3579),i=n(7462),c=n(3366),u=n(4983),d=n(9789),h=(n(2335),n(6480)),r=["components"];(0,h.q)();var g={_frontmatter:{}};function k(t){var e=t.components,n=(0,c.Z)(t,r);return(0,u.kt)("wrapper",(0,i.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",null,"CSS와 Module CSS 비교"),(0,u.kt)("small",null,"부제: 재귀적 inherit의 굴레"),(0,u.kt)("time",null,"2021.12.01"),(0,u.kt)("picture",null,(0,u.kt)("source",{srcSet:"/20211201/summary.webp?"+(0,d.Z)(),type:"image/webp"}),(0,u.kt)("img",{src:"/20211201/summary.png?"+(0,d.Z)(),alt:""})),(0,u.kt)("h2",null,"Prologue"),(0,u.kt)("p",null,"지난 편에서 CSS의 단점이 Class 이름이 중복되게 네이밍을 지을 위험성이 있고 JavaScript와 연동이 어렵다고 언급을 했습니다."),(0,u.kt)("p",null,"CSS Module은 개발자가 부여한 class 이름 뒤에 숫자나 알파벳이 자동으로 부여하여 class 이름이 중복되는 것을 방지합니다."),(0,u.kt)("hr",null),(0,u.kt)("h2",null,"CSS"),(0,u.kt)("p",null,"CSS."),(0,u.kt)("deckgo-highlight-code",{language:"scss"},"\n          ",(0,u.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"h1 {\n  font-weight: 700\n}"),"\n        "),(0,u.kt)("p",null,"Sass."),(0,u.kt)("deckgo-highlight-code",{language:"sass"},"\n          ",(0,u.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"h1\n  font-weight: 700"),"\n        "),(0,u.kt)("p",null,"이 코드에서는 클래스 선택자 없이 h1 태그 단독 스타일을 넣었습니다. 이렇게 작성하면 모든 h1에 대해 font-weight: 700이 적용됩니다."),(0,u.kt)("p",null,"전역(Global)적으로 적용하고 싶다면 이렇게 쓰는 게 맞습니다. 앞에 .container 같은 클래스 선택자를 사용해도 이론상으로는 전역적으로 작동합니다."),(0,u.kt)("p",null,"CSS."),(0,u.kt)("deckgo-highlight-code",{language:"scss"},"\n          ",(0,u.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},".container h1 {\n  font-weight: 700\n}"),"\n        "),(0,u.kt)("p",null,"Sass."),(0,u.kt)("deckgo-highlight-code",{language:"sass"},"\n          ",(0,u.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},".container h1\n  font-weight: 700"),"\n        "),(0,u.kt)("p",null,"어떤 페이지, 어떤 컴포넌트던지 .container 안에 h1이 사용된다면 font-weight: 700이 적용되니까요."),(0,u.kt)("p",null,"하지만 페이지마다 .container가 있고 h1이 있지만 모두 스타일이 다르다면? 머리에 쥐가나고 없던 두통이 오는 느낌적 느낌이 듭니다."),(0,u.kt)("figure",null,(0,u.kt)("picture",null,(0,u.kt)("source",{srcSet:"/20211201/headattact.webp?"+(0,d.Z)(),type:"image/webp"}),(0,u.kt)("img",{src:"/20211201/headattact.jpeg?"+(0,d.Z)(),alt:""})),(0,u.kt)("figcaption",null,"머리가 아파오는군")),(0,u.kt)("h2",null,"CSS Module"),(0,u.kt)("p",null,"보통은 페이지 네임이 붙은 클래스 또는 id를 상단에 붙여서 쓰게 될 겁니다. 이것을 방지하기 위해서 나온 게 CSS Module 입니다."),(0,u.kt)("deckgo-highlight-code",{language:"jsx"},"\n          ",(0,u.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"import styles from './index.module.css'\n\nfunction App() {\n  return (\n    <>\n      <div className='Container'><h1>blah</h1></div>\n      <div className={styles.Container}><h1>blah</h1></div>\n    </>\n  )\n}\n\nexport default App"),"\n        "),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"Sass인 경우에는 .css 대신 .sass로 변경하면 됩니다.")),(0,u.kt)("p",null,"className='Container'는 index.css 또는 index.sass에서 사용된 .Container의 코드를 가져옵니다. 이 방식은 종전 방식대로 전역으로 불러옵니다."),(0,u.kt)("p",null,"즉, 모든 페이지, 모든 컴포넌트에서 불러옵니다."),(0,u.kt)("p",null,"뒤에 작성된 className={styles.Container}는 현 컴포넌트에서만 사용됩니다. 개발자 인스펙터에서 해당 부분을 확인해보면 다음처럼 컴파일 된 것을 확인할 수 있습니다."),(0,u.kt)("deckgo-highlight-code",{language:"html"},"\n          ",(0,u.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},'<div class="Container"><h1>blah</h1></div>\n<div class="app_Container__2ls0j"><h1>blah</h1></div>'),"\n        "),(0,u.kt)("p",null,"전자는 CSS Module을 사용하지 않은 것(전역 설정)이고, 후자는 CSS Module을 사용한 것입니다. class 이름이 컴포넌트명_클레스명__랜덤값 형태로 붙어서 전역 처리되는 것을 방지하고 있는 것을 확인할 수 있습니다."),(0,u.kt)("p",null,"주의할 것은, CSS Module로 작성하더라도 태그(Element) 단독으로 작성되면 전역으로 적용된다는 겁니다."),(0,u.kt)("deckgo-highlight-code",{language:"scss"},"\n          ",(0,u.kt)("code",{parentName:"deckgo-highlight-code",slot:"code"},"a {\n  font-size: 2rem\n}"),"\n        "),(0,u.kt)("p",null,"위 코드는 CSS Module로 작성되었지만 a 태그 앞에 선택자가 없기 때문에 전역으로 적용됩니다."),(0,u.kt)("hr",null),(0,u.kt)("h2",null,"Epilogue"),(0,u.kt)("p",null,"퍼블리셔, 프론트엔드 개발자들은 늘 전역으로 적용되면 안되는 것을 어떻게 사이드이펙트 없이 적용할 것인가에 대해 해결하려 노력해 왔는데 CSS Module이 고민을 한방에 해결해 줬습니다."),(0,u.kt)("p",null,"이전 포스팅에서 emotion에 대해 설명하는 글을 썼었는데 emotion에 대해 관심이 있다면 이전 포스팅도 확인하세요!"),(0,u.kt)("p",null,"그럼 이만 이번 편을 마치고 다음 편에서 만나요! 다음 편 ",(0,u.kt)("strong",{parentName:"p"},"관많부!")," : )"))}k.isMDXComponent=!0;var p=n(4396),S=n(5941),m=n(3431);var C=function(){var t="O612 DEV1L.studio",e="CSS와 Module CSS 비교",n="20211201",i="https://dev1stud.io/20211201";return(0,m.tZ)(a.Z,null,(0,m.tZ)(l.GatsbySeo,{title:e+" | "+t,description:"부제: 재귀적 inherit의 굴레",canonical:i,openGraph:{type:"article",title:t,description:e,url:i,images:[{url:i+"/headattact.jpeg"}]}}),(0,m.tZ)("article",{className:s.xI},(0,m.tZ)(k,null),(0,m.tZ)("strong",{className:s.zs},"FIN!")),(0,m.tZ)("aside",null,(0,m.tZ)(p.Z,null)),(0,m.tZ)(S.Z,{previousAddress:"/20211012",previousTitle:"CSS, CSS-in-JS 그리고 CSS Pre-processor의 비교",nextAddress:"/20211207",nextTitle:"emotion vs. Sass 승자는?!.."}),(0,m.tZ)(o.h$,{config:{url:i,identifier:n,title:e}}))}}}]);
//# sourceMappingURL=component---src-pages-20211201-js-c09fc0966f729e3aa6b1.js.map